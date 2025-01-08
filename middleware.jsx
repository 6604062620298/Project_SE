import { NextResponse } from 'next/server';

// ฟังก์ชัน Middleware
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url));
}

// การกำหนด Matcher สำหรับ Middleware
export const config = {
  matcher: '/about/:path*',
};


