export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { randomUUID } from 'crypto';
import { sql } from '@/lib/db';
import { hashPassword, SESSION_COOKIE, SESSION_DAYS } from '@/lib/market-auth';

const schema = z.object({
  company:  z.string().min(2).max(200).trim(),
  email:    z.string().email().max(255),
  password: z.string().min(8).max(200),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.errors[0]?.message ?? 'Invalid input';
    return NextResponse.json({ error: msg }, { status: 422 });
  }

  const { company, email, password } = parsed.data;
  const emailLower = email.toLowerCase().trim();

  // Check email not already taken
  let existing: { id: number }[];
  try {
    existing = await sql`
      SELECT id FROM marketplace_users WHERE email = ${emailLower} LIMIT 1
    `;
  } catch {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
  if (existing.length) {
    return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
  }

  const passwordHash = hashPassword(password);
  const token        = randomUUID();
  const expires      = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  try {
    // Create tenant + user in one transaction
    await sql`BEGIN`;
    const tenantRows = await sql`
      INSERT INTO marketplace_tenants (name, email)
      VALUES (${company}, ${emailLower})
      RETURNING id
    `;
    const tenantId = tenantRows[0].id as number;

    await sql`
      INSERT INTO marketplace_users (tenant_id, email, password_hash, role, session_token, session_expires)
      VALUES (${tenantId}, ${emailLower}, ${passwordHash}, 'admin', ${token}, ${expires.toISOString()})
    `;
    await sql`COMMIT`;
  } catch (err) {
    await sql`ROLLBACK`.catch(() => {});
    console.error('[signup] DB error:', err);
    return NextResponse.json({ error: 'Could not create account' }, { status: 500 });
  }

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
