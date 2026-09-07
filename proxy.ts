import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getLocationFromCity,
  isLocationRedirectEnabled,
} from "@/app/lib/location-routing";
import { legacyRedirects } from "@/lib/legacy-redirects";

function normalizePath(pathname: string): string {
  if (pathname === "/") {
    return pathname;
  }

  const withoutTrailingSlash = pathname.replace(/\/+$/, "");
  return withoutTrailingSlash || "/";
}

export function proxy(request: NextRequest) {
  const destination = legacyRedirects[normalizePath(request.nextUrl.pathname)];

  if (destination) {
    const redirectUrl = new URL(destination, request.url);
    redirectUrl.search = request.nextUrl.search;

    return NextResponse.redirect(redirectUrl, 301);
  }

  if (
    isLocationRedirectEnabled() &&
    normalizePath(request.nextUrl.pathname) === "/"
  ) {
    const location = getLocationFromCity(
      request.headers.get("x-vercel-ip-city"),
    );

    if (location) {
      const redirectUrl = new URL(`/${location}`, request.url);
      redirectUrl.search = request.nextUrl.search;

      return NextResponse.redirect(redirectUrl, 307);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
