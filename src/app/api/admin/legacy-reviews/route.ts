export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { sendLegacyReviewEmail } from '@/lib/email';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * GET: Fetch recent legacy review sends (last 20)
 */
export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await sql`
    SELECT id, email, name, subject, sent_at, resend_id
    FROM legacy_review_requests
    ORDER BY sent_at DESC
    LIMIT 20
  `;

  return NextResponse.json(rows);
}

/**
 * POST: Send a legacy review email
 * Rate limits: 20/hour, 50/day per IP (simple count-based)
 */
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json()) as {
    email: string;
    name?: string;
    subject: string;
    body: string;
  };

  // Validate email format
  if (!EMAIL_RE.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  // Rate limit check: 20 in last hour
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const hourCount = await sql`
    SELECT COUNT(*) as count
    FROM legacy_review_requests
    WHERE sent_at > ${oneHourAgo}
  `;
  if (Number((hourCount[0] as { count: string }).count) >= 20) {
    return NextResponse.json(
      { error: 'Rate limit exceeded: 20 emails per hour' },
      { status: 429 }
    );
  }

  // Rate limit check: 50 in last day
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const dayCount = await sql`
    SELECT COUNT(*) as count
    FROM legacy_review_requests
    WHERE sent_at > ${oneDayAgo}
  `;
  if (Number((dayCount[0] as { count: string }).count) >= 50) {
    return NextResponse.json(
      { error: 'Rate limit exceeded: 50 emails per day' },
      { status: 429 }
    );
  }

  try {
    // Send the email
    const result = await sendLegacyReviewEmail({
      email: body.email,
      name: body.name,
      subject: body.subject,
      body: body.body,
    });

    // Log to database
    await sql`
      INSERT INTO legacy_review_requests (email, name, subject, body, resend_id)
      VALUES (${body.email}, ${body.name || null}, ${body.subject}, ${body.body}, ${result.id || null})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send legacy review email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
