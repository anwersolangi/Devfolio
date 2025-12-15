import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Get hostname from headers to handle subdomains correctly
  const host = request.headers.get("host") || "";
  // Remove port if present (e.g. localhost:3000)
  const hostname = host.split(":")[0];

  const subdomain = "apps";
  // Check if hostname matches our subdomain
  const isAppsSubdomain = hostname === `apps.anwersolangi.com` || hostname.startsWith(`${subdomain}.`);

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
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
