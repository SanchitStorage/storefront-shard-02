import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const subdomain = host.split(".")[0];
  
  // Ignore requests that aren't for subdomains, or are for internal Next.js paths
  if (subdomain === "www" || subdomain === "localhost" || !subdomain) {
    return NextResponse.next();
  }

  // Rewrite to the appropriate shard site directory
  return NextResponse.rewrite(new URL(`/sites/${subdomain}`, req.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
