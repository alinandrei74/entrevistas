import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session");

  const isProtectedRoute = req.nextUrl.pathname.startsWith("/interview");

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}
