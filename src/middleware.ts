import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname == "/") {
    return NextResponse.redirect(new URL("/locale-button", request.url));
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/", "/locale-button"],
};
