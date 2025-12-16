import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Get hostname from headers to handle subdomains correctly
  const host = request.headers.get("host") || "";
  const forwardedHost = request.headers.get("x-forwarded-host") || "";
  const finalHost = forwardedHost || host;

  // Remove port if present (e.g. localhost:3000)
  const hostname = finalHost.split(":")[0];

  console.log("Middleware Debug:", { host, forwardedHost, hostname, path: url.pathname });

  // Create response object to add debug headers
  const response = NextResponse.next();
  // Helper to set debug headers
  const setDebugHeaders = (res: NextResponse) => {
    res.headers.set("x-debug-host", host);
    res.headers.set("x-debug-forwarded-host", forwardedHost);
    res.headers.set("x-debug-hostname", hostname);
  };
  setDebugHeaders(response);

  const subdomain = "apps";
  // Check if hostname matches our subdomain
  const isAppsSubdomain = hostname === `apps.anwersolangi.com` || hostname.startsWith(`${subdomain}.`);
  response.headers.set("x-debug-is-apps", isAppsSubdomain ? "true" : "false");

  if (isAppsSubdomain) {
    // Rewrites:
    // apps.domain.com/ -> /apps
    // apps.domain.com/slug -> /apps/slug
    const newUrl = new URL(`/apps${url.pathname}`, request.url);
    const rewriteResponse = NextResponse.rewrite(newUrl);
    setDebugHeaders(rewriteResponse);
    rewriteResponse.headers.set("x-debug-rewrite-target", newUrl.pathname);
    return rewriteResponse;
  }

  return response;
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
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
