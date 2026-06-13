import { cookies } from 'next/headers';
import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';
import { sql } from '@/lib/db';

export const SESSION_COOKIE = 'mp_session';
export const SESSION_DAYS = 7;

export interface MarketSession {
  userId: number;
  tenantId: number;
  email: string;
  role: string;
  tenantName: string;
  isOwner: boolean;
}

/**
 * Read the marketplace session from the request cookies.
 * Works in both Server Components and Route Handlers (uses next/headers).
 * Returns null if the cookie is absent or the token is expired/invalid.
 */
export async function getMarketSession(): Promise<MarketSession | null> {
  let token: string | undefined;
  try {
    token = cookies().get(SESSION_COOKIE)?.value;
  } catch {
    return null;
  }
  if (!token) return null;

  try {
    const rows = await sql`
      SELECT
        u.id          AS user_id,
        u.tenant_id,
        u.email,
        u.role,
        t.name        AS tenant_name,
        t.is_owner
      FROM marketplace_users u
      JOIN marketplace_tenants t ON t.id = u.tenant_id
      WHERE u.session_token = ${token}
        AND u.session_expires > NOW()
    `;
    if (!rows.length) return null;
    const r = rows[0];
    return {
      userId:     r.user_id,
      tenantId:   r.tenant_id,
      email:      r.email,
      role:       r.role,
      tenantName: r.tenant_name,
      isOwner:    r.is_owner,
    };
  } catch {
    return null;
  }
}

/** Hash a plaintext password with scrypt + random salt. */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

/** Constant-time comparison of a stored hash vs a supplied plaintext password. */
export function verifyPassword(stored: string, supplied: string): boolean {
  try {
    const [salt, hash] = stored.split(':');
    const buf = scryptSync(supplied, salt, 64);
    return timingSafeEqual(Buffer.from(hash, 'hex'), buf);
  } catch {
    return false;
  }
}
