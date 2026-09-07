import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Coming Soon mode: any path deeper than "/" or "/{locale}" gets redirected to
// the localized home page so customers only ever see the Coming Soon landing.
// To relaunch, revert this file back to the plain `export default createMiddleware(routing);` form.
export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Extract leading locale segment (e.g. "/ar", "/en") if present.
  const seg = pathname.split("/").filter(Boolean); // "/ar/properties" -> ["ar","properties"]
  const first = seg[0];
  const hasLocale = routing.locales.includes(first as (typeof routing.locales)[number]);
  const restLen = hasLocale ? seg.length - 1 : seg.length;

  // Allow: "/", "/ar", "/en" (home for each locale). Everything else -> redirect to localized home.
  if (restLen > 0) {
    const target = hasLocale ? `/${first}` : `/${routing.defaultLocale}`;
    const url = req.nextUrl.clone();
    url.pathname = target;
    url.search = "";
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
