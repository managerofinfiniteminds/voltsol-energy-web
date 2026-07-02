export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { isWhitelistedAdmin, createLoginToken } from '@/lib/admin-auth';
import { sendAdminLoginEmail } from '@/lib/booking-emails';

// Rate limiting: max 5 requests per email per 15 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(email: string): boolean {
  const now = Date.now();
  const key = email.toLowerCase();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  let body: { email?: string; next?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const next = typeof body.next === 'string' ? body.next : undefined;
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // Basic email format validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  // Check rate limit (apply to all emails to prevent enumeration timing attacks)
  if (!checkRateLimit(email)) {
    // Still return generic success to prevent enumeration
    return NextResponse.json({ success: true });
  }

  // Check if email is whitelisted and send login link - handle all errors
  try {
    // Check if email is whitelisted - but always return same response (anti-enumeration)
    const whitelisted = await isWhitelistedAdmin(email);

    if (whitelisted) {
      // Create one-time login token
      const token = await createLoginToken(email, next);
      // Send magic link email
      await sendAdminLoginEmail(email, token);
    }
  } catch (err) {
    console.error('[admin/login] Error processing login:', err);
    // Still return success to prevent enumeration
  }

  // Always return the same generic success response
  return NextResponse.json({ success: true });
}
