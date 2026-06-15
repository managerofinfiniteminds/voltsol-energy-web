export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactMessageEmail } from '@/lib/email';

// ── Rate limiting (in-memory, same pattern as lead routes) ───────────────────
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return false;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  message: z.string().trim().min(5).max(4000),
  // Honeypot — humans leave empty; bots fill it. Accept any string, check in code.
  company: z.string().max(200).optional(),
});

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, message, company } = parsed.data;

  // Honeypot tripped — silently accept (don't tip off the bot) but do nothing.
  if (company && company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactMessageEmail({
      name,
      email,
      phone: phone || undefined,
      message,
    });
  } catch (err) {
    console.error('[contact] send failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not send your message. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
