// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Disabled - handle auth in pages instead
//   return NextResponse.next();
// }


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user has auth token/session
  const token = request.cookies.get('token')?.value; // or your auth cookie name
  const googleAuthSessionCookie = request.cookies.get('connect.sid')?.value;
  
  if (!token && !googleAuthSessionCookie) {
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
    '/journaling/:path*',
    '/dashboard'
  ], // Protect all chat routes
};