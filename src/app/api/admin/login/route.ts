export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';
export async function POST(req: NextRequest) {
export const dynamic = 'force-dynamic';
  const { password } = await req.json();

export const dynamic = 'force-dynamic';
  if (password !== process.env.ADMIN_PASSWORD) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  const cookieStore = cookies();
export const dynamic = 'force-dynamic';
  cookieStore.set('admin_session', 'authenticated', {
export const dynamic = 'force-dynamic';
    httpOnly: true,
export const dynamic = 'force-dynamic';
    secure: process.env.NODE_ENV === 'production',
export const dynamic = 'force-dynamic';
    sameSite: 'lax',
export const dynamic = 'force-dynamic';
    maxAge: 60 * 60 * 24, // 24 hours
export const dynamic = 'force-dynamic';
    path: '/',
export const dynamic = 'force-dynamic';
  });

export const dynamic = 'force-dynamic';
  return NextResponse.json({ success: true });
export const dynamic = 'force-dynamic';
}
