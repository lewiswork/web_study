import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((request) => {
  console.log(`[proxy] ${request.method} ${request.nextUrl.pathname}`);

  if (!request.auth) {
    const url = new URL("/login", request.url);
    url.searchParams.set("reason", "auth-required");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: "/posts/:path*",
};
