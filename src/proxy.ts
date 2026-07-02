import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// --- Middleware
export default function proxy(request: NextRequest) {
  return NextResponse.next();
}

// 5. Matcher: Only run middleware on specific paths
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /api/* (API routes)
     * - /_next/* (Next.js internals)
     * - /not-found (error page)
     * - Static files with extensions
     */
    "/",
    "/(en|km)/:path*",
    "/((?!api|_next|not-found|\\.well-known).*)",
  ],
};
