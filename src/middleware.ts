import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const locale = request.nextUrl.pathname.startsWith("/en") ? "en" : "es";
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|.*\\..*).*)" ],
};
