// One-time migration runner — DELETE AFTER RUNNING
// curl https://voltsolenergy.com/api/admin/migrate?key=migrate009

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key');
  
  // Simple hardcoded check — remove after running
  if (key !== 'migrate009') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Create admin_users table
    await sql`
      CREATE TABLE IF NOT EXISTS admin_users (
        id              SERIAL PRIMARY KEY,
        email           TEXT UNIQUE NOT NULL,
        name            TEXT,
        is_active       BOOLEAN NOT NULL DEFAULT true,
        session_token   TEXT,
        session_expires TIMESTAMPTZ,
        last_login_at   TIMESTAMPTZ,
        created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
        created_by      TEXT
      )
    `;

    // Index on session_token
    await sql`
      CREATE INDEX IF NOT EXISTS idx_admin_users_session_token 
      ON admin_users(session_token) WHERE session_token IS NOT NULL
    `;

    // Create admin_login_tokens table
    await sql`
      CREATE TABLE IF NOT EXISTS admin_login_tokens (
        id         SERIAL PRIMARY KEY,
        email      TEXT NOT NULL,
        token      TEXT UNIQUE NOT NULL,
        expires_at TIMESTAMPTZ NOT NULL,
        used_at    TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;

    // Indexes for token lookup
    await sql`
      CREATE INDEX IF NOT EXISTS idx_admin_login_tokens_token 
      ON admin_login_tokens(token)
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_admin_login_tokens_email 
      ON admin_login_tokens(email)
    `;

    // Seed the whitelist
    await sql`
      INSERT INTO admin_users (email, name)
      VALUES
        ('hugo@voltsolenergy.com', 'Hugo'),
        ('wayne@greenbowtie.com', 'Wayne')
      ON CONFLICT (email) DO NOTHING
    `;

    // Verify
    const users = await sql`SELECT email FROM admin_users ORDER BY created_at`;

    return NextResponse.json({
      success: true,
      message: 'Migration 009_admin_auth applied successfully',
      admin_users: users
    });
  } catch (err) {
    console.error('[migrate] Error:', err);
    return NextResponse.json({
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}
