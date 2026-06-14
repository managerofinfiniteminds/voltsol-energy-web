import { NextRequest, NextResponse } from 'next/server';

// Feature flags (read directly from env for Edge runtime)
const PARTNER_SIGNUP = process.env.FLAG_PARTNER_SIGNUP === 'true';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /admin routes (but not /admin/login, /admin/auth, or /admin/seo-strategy)
  // This is a COARSE gate: only checks cookie presence, not validity.
  // Real session validation (token vs DB) happens in getAdminSession() inside each route/page.
  if (
    pathname.startsWith('/admin') &&
    !pathname.startsWith('/admin/login') &&
    !pathname.startsWith('/admin/auth') &&
    !pathname.startsWith('/admin/seo-strategy')
  ) {
    const session = req.cookies.get('admin_session')?.value;
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // Gate /app/signup behind PARTNER_SIGNUP flag (redirect to login when disabled)
  if (pathname.startsWith('/app/signup') && !PARTNER_SIGNUP) {
    return NextResponse.redirect(new URL('/app/login', req.url));
  }

  // Protect /app/* marketplace routes (but not /app/login or /app/signup)
  if (
    pathname.startsWith('/app/') &&
    !pathname.startsWith('/app/login') &&
    !pathname.startsWith('/app/signup')
  ) {
    const token = req.cookies.get('mp_session')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/app/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/app/:path*'],
};
