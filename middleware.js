import { NextResponse } from "next/server";

const protectedRoutes = ["/admin"];
const authRoutes = ["/login"];

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    request.cookies.delete("token");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}
