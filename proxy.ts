import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
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

  if (!destination) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(destination, request.url);
  redirectUrl.search = request.nextUrl.search;

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

