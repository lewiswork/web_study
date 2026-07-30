import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "study-session";

export function proxy(request: NextRequest) {
  console.log(`[proxy] ${request.method} ${request.nextUrl.pathname}`);

  const hasSession = request.cookies.has(SESSION_COOKIE);

  if (!hasSession) {
    const url = new URL("/contact", request.url);
    url.searchParams.set("reason", "auth-required");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/posts/:path*",
};
