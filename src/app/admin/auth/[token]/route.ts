import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { consumeLoginToken, createSession, ADMIN_SESSION_COOKIE, ADMIN_SESSION_DAYS } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { token: string } }
) {
  const { token } = params;

  // Strict validation: must be exactly 64 hex chars
  if (!/^[a-f0-9]{64}$/.test(token)) {
    return NextResponse.redirect(new URL('/admin/login?error=expired', req.url));
  }

  // Validate and consume the one-time token
  const result = await consumeLoginToken(token);

  if (!result) {
    // Token invalid, expired, or already used
    return NextResponse.redirect(new URL('/admin/login?error=expired', req.url));
  }

  const { email, next } = result;

  // Create a session for the admin
  const sessionToken = await createSession(email);

  // Set the session cookie
  const cookieStore = cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: ADMIN_SESSION_DAYS * 24 * 60 * 60, // 7 days in seconds
    path: '/',
  });

  // Redirect to the originally requested admin page (defense-in-depth guard:
  // must be a same-site relative path, not "//" protocol-relative).
  const safeNext = next && /^\/(?!\/)[A-Za-z0-9\-._~!$&'()*+,;=:@%/?]*$/.test(next) ? next : '/admin';
  return NextResponse.redirect(new URL(safeNext, req.url));
}
