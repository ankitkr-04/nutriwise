import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent");
  const isMobile = /Mobile/.test(userAgent as string);
  const desktopRestricted = ["/scan"];

  // if (!isMobile && desktopRestricted.includes(request.nextUrl.pathname)) {
  //   console.log("Redirecting to desktop");

  //   return NextResponse.redirect("http://localhost:3000/desktop-error");
  // }
  if (isMobile && request.nextUrl.pathname === "/desktop-error") {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
