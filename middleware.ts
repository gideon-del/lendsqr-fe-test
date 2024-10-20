import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const isLoggedIn = cookies().get("isLoggedIn");
  const isLoginRoute = request.nextUrl.pathname.includes("/login");
  if (!isLoggedIn && !isLoginRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isLoggedIn && isLoginRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }
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
