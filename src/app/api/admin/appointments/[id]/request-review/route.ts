export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { sendReviewRequestEmail } from '@/lib/email';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const { force } = (await req.json().catch(() => ({}))) as { force?: boolean };

  // Idempotent: only update if review_requested_at is NULL (unless force=true)
  const condition = force
    ? sql`id = ${id}`
    : sql`id = ${id} AND review_requested_at IS NULL`;

  const rows = await sql`
    UPDATE appointments
    SET review_requested_at = now()
    WHERE ${condition}
    RETURNING id, first_name, email
  `;

  if (rows.length === 0) {
    // Already sent (or appointment not found)
    return NextResponse.json(
      { error: 'Review request already sent or appointment not found' },
      { status: 400 }
    );
  }

  const appt = rows[0] as { id: string; first_name: string; email: string };

  try {
    await sendReviewRequestEmail({
      first_name: appt.first_name,
      email: appt.email,
    });

    return NextResponse.json({ success: true, appointment_id: appt.id });
  } catch (error) {
    // Rollback the timestamp if email fails
    await sql`
      UPDATE appointments
      SET review_requested_at = NULL
      WHERE id = ${id}
    `;
    console.error('Failed to send review request:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
