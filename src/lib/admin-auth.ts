import { cookies } from 'next/headers';
import { randomBytes } from 'crypto';
import { sql } from '@/lib/db';

export const ADMIN_SESSION_COOKIE = 'admin_session';
export const ADMIN_SESSION_DAYS = 7;

export interface AdminSession {
  id: number;
  email: string;
  name: string | null;
}

/**
 * Read the admin session from the request cookies.
 * Works in both Server Components and Route Handlers (uses next/headers).
 * Returns null if the cookie is absent or the token is expired/invalid.
 */
export async function getAdminSession(): Promise<AdminSession | null> {
  let token: string | undefined;
  try {
    token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  } catch {
    return null;
  }
  if (!token) return null;

  try {
    const rows = await sql`
      SELECT id, email, name
      FROM admin_users
      WHERE session_token = ${token}
        AND session_expires > NOW()
        AND is_active = true
    `;
    if (!rows.length) return null;
    const r = rows[0];
    return {
      id: r.id,
      email: r.email,
      name: r.name,
    };
  } catch {
    return null;
  }
}

/**
 * Check if the current request has a valid admin session.
 */
export async function isAdmin(): Promise<boolean> {
  return !!(await getAdminSession());
}

/**
 * Generate a cryptographically secure random token (64 hex chars).
 */
export function genToken(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Create a new session for an admin user. Returns the session token.
 */
export async function createSession(email: string): Promise<string> {
  const token = genToken();
  const expiresAt = new Date(Date.now() + ADMIN_SESSION_DAYS * 24 * 60 * 60 * 1000);

  await sql`
    UPDATE admin_users
    SET session_token = ${token},
        session_expires = ${expiresAt.toISOString()},
        last_login_at = NOW()
    WHERE LOWER(email) = LOWER(${email})
  `;

  return token;
}

/**
 * Create a one-time login token for magic-link auth.
 * Token expires in 15 minutes.
 */
export async function createLoginToken(email: string): Promise<string> {
  const token = genToken();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

  await sql`
    INSERT INTO admin_login_tokens (email, token, expires_at)
    VALUES (LOWER(${email}), ${token}, ${expiresAt.toISOString()})
  `;

  return token;
}

/**
 * Validate and consume a one-time login token atomically.
 * Returns the email if valid; null otherwise.
 * Uses UPDATE...RETURNING to atomically claim the token, preventing race conditions.
 */
export async function consumeLoginToken(token: string): Promise<string | null> {
  // Strict regex validation: must be exactly 64 hex chars
  if (!/^[a-f0-9]{64}$/.test(token)) {
    return null;
  }

  try {
    // Atomically mark token as used and return the email if valid
    // This prevents race conditions where two requests could both see used_at IS NULL
    const rows = await sql`
      UPDATE admin_login_tokens
      SET used_at = NOW()
      WHERE token = ${token}
        AND used_at IS NULL
        AND expires_at > NOW()
      RETURNING email
    `;

    // If no rows returned, token was invalid, expired, or already used
    if (!rows.length) return null;

    const email = rows[0].email;

    // Verify the email is still an active admin
    const adminRows = await sql`
      SELECT id FROM admin_users
      WHERE LOWER(email) = LOWER(${email})
        AND is_active = true
    `;

    if (!adminRows.length) return null;

    return email;
  } catch {
    return null;
  }
}

/**
 * Check if an email is in the admin whitelist and active.
 */
export async function isWhitelistedAdmin(email: string): Promise<boolean> {
  try {
    const rows = await sql`
      SELECT id FROM admin_users
      WHERE LOWER(email) = LOWER(${email})
        AND is_active = true
    `;
    return rows.length > 0;
  } catch {
    return false;
  }
}

/**
 * Clear the session token for the current admin (logout).
 */
export async function clearSessionByToken(token: string): Promise<void> {
  if (!token) return;
  try {
    await sql`
      UPDATE admin_users
      SET session_token = NULL, session_expires = NULL
      WHERE session_token = ${token}
    `;
  } catch {
    // Ignore errors on logout
  }
}

/**
 * Get all admin users (for admin config page).
 */
export async function getAllAdmins(): Promise<Array<{
  id: number;
  email: string;
  name: string | null;
  is_active: boolean;
  last_login_at: string | null;
  created_at: string;
  created_by: string | null;
}>> {
  const rows = await sql`
    SELECT id, email, name, is_active, last_login_at, created_at, created_by
    FROM admin_users
    ORDER BY created_at ASC
  `;
  return rows as any[];
}

/**
 * Add a new admin to the whitelist.
 */
export async function addAdmin(
  email: string,
  name: string | null,
  createdBy: string
): Promise<{ success: boolean; error?: string; admin?: { id: number; email: string; name: string | null } }> {
  const normalizedEmail = email.toLowerCase().trim();

  // Check if already exists
  const existing = await sql`
    SELECT id, email, name, is_active FROM admin_users WHERE LOWER(email) = ${normalizedEmail}
  `;

  if (existing.length > 0) {
    const admin = existing[0];
    if (admin.is_active) {
      return { success: false, error: 'This email is already an admin' };
    }
    // Reactivate inactive admin
    await sql`
      UPDATE admin_users
      SET is_active = true, name = ${name || admin.name}, created_by = ${createdBy}
      WHERE id = ${admin.id}
    `;
    return { success: true, admin: { id: admin.id, email: admin.email, name: name || admin.name } };
  }

  // Insert new admin
  const rows = await sql`
    INSERT INTO admin_users (email, name, created_by)
    VALUES (${normalizedEmail}, ${name}, ${createdBy})
    RETURNING id, email, name
  `;

  return { success: true, admin: rows[0] as { id: number; email: string; name: string | null } };
}

/**
 * Deactivate an admin (soft delete). Cannot deactivate self or last active admin.
 */
export async function deactivateAdmin(
  targetId: number,
  currentAdminEmail: string
): Promise<{ success: boolean; error?: string }> {
  // Get target admin
  const targetRows = await sql`
    SELECT id, email, is_active FROM admin_users WHERE id = ${targetId}
  `;
  if (!targetRows.length) {
    return { success: false, error: 'Admin not found' };
  }
  const target = targetRows[0];

  // Cannot deactivate self
  if (target.email.toLowerCase() === currentAdminEmail.toLowerCase()) {
    return { success: false, error: 'You cannot deactivate yourself' };
  }

  // Cannot deactivate if already inactive
  if (!target.is_active) {
    return { success: false, error: 'Admin is already inactive' };
  }

  // Count active admins
  const countRows = await sql`
    SELECT COUNT(*)::int AS count FROM admin_users WHERE is_active = true
  `;
  const activeCount = countRows[0].count;

  // Cannot remove last active admin
  if (activeCount <= 1) {
    return { success: false, error: 'Cannot deactivate the last remaining active admin' };
  }

  // Deactivate and clear session
  await sql`
    UPDATE admin_users
    SET is_active = false, session_token = NULL, session_expires = NULL
    WHERE id = ${targetId}
  `;

  return { success: true };
}
