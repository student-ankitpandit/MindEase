import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user has auth token/session
  const token = request.cookies.get('token')?.value; // or your auth cookie name
  
  if (!token) {
    // Redirect to login with return URL
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();

}

export const config = {
  matcher: [
    '/chat/:path*',
    '/journaling/:path*'
  ], // Protect all chat routes
};