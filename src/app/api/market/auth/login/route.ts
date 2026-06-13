export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { randomUUID } from 'crypto';
import { sql } from '@/lib/db';
import { verifyPassword, SESSION_COOKIE, SESSION_DAYS } from '@/lib/market-auth';

const schema = z.object({
  email:    z.string().email().max(255),
  password: z.string().min(1).max(200),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 422 });
  }

  const { email, password } = parsed.data;

  let rows: { id: number; password_hash: string }[];
  try {
    rows = await sql`
      SELECT id, password_hash
      FROM marketplace_users
      WHERE email = ${email.toLowerCase().trim()}
      LIMIT 1
    `;
  } catch {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  // Constant-time: always run verifyPassword to avoid timing oracle
  const dummyHash = 'aaaa:bbbb';
  const hash = rows[0]?.password_hash ?? dummyHash;
  const valid = verifyPassword(hash, password) && rows.length > 0;

  if (!valid) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  const token   = randomUUID();
  const expires = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  await sql`
    UPDATE marketplace_users
    SET session_token = ${token}, session_expires = ${expires.toISOString()}, updated_at = NOW()
    WHERE id = ${rows[0].id}
  `;

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    expires,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}
