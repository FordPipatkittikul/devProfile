// middleware.js
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Rewrite dynamic profile subroutes to /profile
  if (
    pathname.startsWith('/profile/education/') ||
    pathname.startsWith('/profile/experience/') ||
    pathname.startsWith('/profile/project/')
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/profile';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}


