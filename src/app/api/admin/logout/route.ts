export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { clearSessionByToken, ADMIN_SESSION_COOKIE } from '@/lib/admin-auth';

export async function POST() {
  const cookieStore = cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  // Clear session from database
  if (token) {
    await clearSessionByToken(token);
  }

  // Delete the cookie
  cookieStore.delete(ADMIN_SESSION_COOKIE);

  return NextResponse.json({ success: true });
}
