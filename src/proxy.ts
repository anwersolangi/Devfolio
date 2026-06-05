import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;

  // Get hostname from headers to handle subdomains correctly
  const host = request.headers.get("host") || "";
  const forwardedHost = request.headers.get("x-forwarded-host") || "";
  const finalHost = forwardedHost || host;

  // Remove port if present (e.g. localhost:3000)
  const hostname = finalHost.split(":")[0];

  const subdomain = "apps";
  // Check if hostname matches our subdomain
  const isAppsSubdomain =
    hostname === `apps.anwersolangi.com` ||
    hostname.startsWith(`${subdomain}.`);

  if (isAppsSubdomain) {
    // Rewrites:
    // apps.domain.com/ -> /apps
    // apps.domain.com/slug -> /apps/slug
    const newUrl = new URL(`/apps${url.pathname}`, request.url);
    return NextResponse.rewrite(newUrl);
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
