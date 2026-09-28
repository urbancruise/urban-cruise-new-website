// ============================================================
// Next.js 16 Middleware — Public Website (urban-cruise)
//
// Responsibilities:
//   1. Serve legacy WordPress → Next.js 301 redirects
//   2. Location-based redirect (/, → /{city}) when enabled
//   3. Attach security headers to every response
//   4. Tag the response with an internal marker header
//
// Runs on the Node.js runtime for full API compatibility.
// ============================================================
import { NextRequest, NextResponse } from "next/server";
import {
  getLocationFromCity,
  isLocationRedirectEnabled,
} from "@/app/lib/location-routing";
import { legacyRedirects } from "@/lib/legacy-redirects";

// ============================================================
// HELPERS
// ============================================================

/**
 * Normalize a pathname so redirect lookups are deterministic:
 *  - "/" stays "/"
 *  - "/delhi/" → "/delhi"
 *  - "//delhi///foo//" → "/delhi/foo"
 */
function normalizePath(pathname: string): string {
  if (pathname === "/") return "/";

  // Collapse multiple slashes and strip trailing slash
  const collapsed = pathname.replace(/\/{2,}/g, "/");
  const withoutTrailingSlash = collapsed.replace(/\/+$/, "");

  return withoutTrailingSlash || "/";
}

/**
 * Build a redirect response preserving query string.
 */
function buildRedirect(
  request: NextRequest,
  destination: string,
  status: 301 | 307 | 308
): NextResponse {
  const url = new URL(destination, request.url);
  url.search = request.nextUrl.search;

  return NextResponse.redirect(url, status);
}

// ============================================================
// MIDDLEWARE
// ============================================================

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalized = normalizePath(pathname);

  // ----------------------------------------------------------
  // 1. LEGACY WORDPRESS REDIRECTS (301 — permanent)
  // ----------------------------------------------------------
  const legacyDestination = legacyRedirects[normalized];
  if (legacyDestination) {
    return buildRedirect(request, legacyDestination, 301);
  }

  // ----------------------------------------------------------
  // 2. LOCATION-BASED REDIRECT (/ → /{city})
  //    Only runs when explicitly enabled via env vars.
  //    Uses the Vercel edge city header if available.
  //    Client-side fallback (geolocation) is handled by
  //    LocationRedirect.tsx on the homepage.
  // ----------------------------------------------------------
  if (isLocationRedirectEnabled() && normalized === "/") {
    const location = getLocationFromCity(
      request.headers.get("x-vercel-ip-city")
    );

    if (location) {
      // 307 — temporary, because we may re-evaluate on next request
      return buildRedirect(request, `/${location}`, 307);
    }
  }

  // ----------------------------------------------------------
  // 3. PASS THROUGH WITH SECURITY HEADERS
  // ----------------------------------------------------------
  const response = NextResponse.next();

  // ---- Security headers ----
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self), payment=()"
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");

  // HSTS — only meaningful over HTTPS; safe to send always
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  // ---- Internal marker (useful in logs / debugging) ----
  response.headers.set("x-served-by", "urban-cruise");

  return response;
}

// ============================================================
// CONFIG — Matcher
// ============================================================
export const config = {
  matcher: [
    /*
     * Match every path EXCEPT:
     *   - /_next/static/*     (compiled assets)
     *   - /_next/image/*      (image optimizer)
     *   - /favicon.ico        (browser icon)
     *   - /robots.txt         (static)
     *   - /sitemap.xml        (dynamic, but shouldn't be redirected)
     *   - /images/*           (static assets)
     *   - /fonts/*            (static assets)
     *   - any file with an extension (e.g. /foo.png)
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|fonts|.*\\..*).*)",
  ],
};
