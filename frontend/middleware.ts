// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Disabled - handle auth in pages instead
//   return NextResponse.next();
// }


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only a valid JWT token grants access — Google session cookie is not enough
  const token = request.cookies.get('token')?.value;
  
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
    '/chat',
    '/chat/:path*',
    '/voice',
    '/voice/:path*',
    '/journaling',
    '/journaling/:path*',
    '/dashboard',
    '/dashboard/:path*',
    '/mood',
    '/mood/:path*',
    '/self-care-toolkit',
    '/self-care-toolkit/:path*',
    '/community',
    '/community/:path*',
  ],
};