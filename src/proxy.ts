import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_ORIGIN = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
).replace(/\/$/, "");

const CANONICAL_HOST = new URL(CANONICAL_ORIGIN).hostname;

export function proxy(request: NextRequest) {
  const url = request.nextUrl;

  // SECURITY: `x-forwarded-host` is client-supplied. Use it only to DECIDE
  // whether to redirect, never to BUILD the destination — every redirect below
  // targets CANONICAL_ORIGIN. Deriving the target from this header is an open
  // redirect, and a cache-poisoning vector behind a CDN.
  const forwardedHost = request.headers.get("x-forwarded-host") || "";
  const host = request.headers.get("host") || "";
  const hostname = (forwardedHost || host).split(":")[0];

  // Guards against a 301 loop if NEXT_PUBLIC_BASE_URL is set to a www/apps host.
  if (hostname === CANONICAL_HOST) return NextResponse.next();

  // NOTE: tapmeal.* is intentionally left alone (separate live app).
  if (hostname === "apps.anwersolangi.com" || hostname.startsWith("apps.")) {
    const path = url.pathname === "/" ? "" : url.pathname;
    const destination = `${CANONICAL_ORIGIN}/apps${path}${url.search}`;
    return NextResponse.redirect(destination, 301);
  }

  // www → apex. The apex is the canonical host in Search Console.
  if (hostname.startsWith("www.")) {
    const destination = `${CANONICAL_ORIGIN}${url.pathname}${url.search}`;
    return NextResponse.redirect(destination, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Excludes api, _next, and static assets. NOTE: sitemap.xml / robots.txt /
    // favicon.ico are excluded too, so this middleware never redirects them.
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|app-ads.txt|llms.txt|blog/feed.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
