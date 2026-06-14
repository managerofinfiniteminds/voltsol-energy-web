export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const VALID_STATUSES = ['confirmed', 'cancelled', 'completed', 'no_show'];

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!UUID_RE.test(params.id)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  let body: { status?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const status = body.status;
  if (!status || !VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  const existing = await sql`
    SELECT id, slot_id, status FROM appointments WHERE id = ${params.id}
  `;
  if (existing.length === 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  const appt = existing[0];

  await sql`
    UPDATE appointments SET status = ${status}, updated_at = now() WHERE id = ${params.id}
  `;

  // Free up the slot when a confirmed appointment is cancelled
  if (status === 'cancelled' && appt.status === 'confirmed' && appt.slot_id) {
    await sql`
      UPDATE availability_slots
      SET current_bookings = GREATEST(current_bookings - 1, 0),
          is_available = true
      WHERE id = ${appt.slot_id}
    `;
  }

  return NextResponse.json({ success: true });
}
