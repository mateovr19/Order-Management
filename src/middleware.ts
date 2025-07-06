import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAuthPage = req.nextUrl.pathname.startsWith('/auth/Login') || req.nextUrl.pathname.startsWith('/auth');

  if (!token && !isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/Login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*'
  ],
};