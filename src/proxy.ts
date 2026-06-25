import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Canonical host everything consolidates onto. The apex (non-www) 301-redirects
// here at the edge/hosting layer; this middleware folds the legacy `apps.`
// subdomain into the `/apps/*` path on the same canonical host.
const CANONICAL_ORIGIN = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
).replace(/\/$/, "");

export function proxy(request: NextRequest) {
  const url = request.nextUrl;

  // Resolve the real hostname (honour the proxy's forwarded host first).
  const forwardedHost = request.headers.get("x-forwarded-host") || "";
  const host = request.headers.get("host") || "";
  const hostname = (forwardedHost || host).split(":")[0];

  // Legacy apps subdomain → permanent redirect to the /apps/* path so all link
  // equity consolidates on the canonical host (1:1 mapping, no redirect chain).
  // NOTE: tapmeal.* is intentionally left alone (separate live app).
  if (hostname === "apps.anwersolangi.com" || hostname.startsWith("apps.")) {
    // apps.domain.com/         -> /apps
    // apps.domain.com/slug     -> /apps/slug
    // apps.domain.com/slug/sub -> /apps/slug/sub
    const path = url.pathname === "/" ? "" : url.pathname;
    const destination = `${CANONICAL_ORIGIN}/apps${path}${url.search}`;
    return NextResponse.redirect(destination, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (static files)
     * - public files with extensions: svg, png, jpg, jpeg, gif, webp
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|app-ads.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
