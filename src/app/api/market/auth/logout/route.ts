export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { SESSION_COOKIE } from '@/lib/market-auth';

export async function POST(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;

  if (token) {
    await sql`
      UPDATE marketplace_users
      SET session_token = NULL, session_expires = NULL, updated_at = NOW()
      WHERE session_token = ${token}
    `.catch(() => {});
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, '', { maxAge: 0, path: '/' });
  return res;
}
