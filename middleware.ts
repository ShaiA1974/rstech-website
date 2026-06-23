import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname starts with a locale
  const hasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale prefix, redirect to /en/{path}
  if (!hasLocale && pathname !== "/") {
    return NextResponse.redirect(
      new URL(`/en${pathname}${request.nextUrl.search}`, request.url),
      308
    );
  }

  // Special case: root path "/" redirects to "/en" (permanent redirect)
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url), 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|api|favicon|robots|sitemap|.*\\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)).*)"],
};
