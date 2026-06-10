export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { sql } from '@/lib/db';

function isAuthenticated(): boolean {
  const cookieStore = cookies();
  return cookieStore.get('admin_session')?.value === 'authenticated';
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const TIME_RE = /^\d{2}:\d{2}(:\d{2})?$/;

const patchSchema = z.object({
  slot_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  start_time: z.string().regex(TIME_RE).optional(),
  end_time: z.string().regex(TIME_RE).optional(),
  label: z.string().max(100).optional(),
  max_bookings: z.number().int().min(1).max(20).optional(),
  is_available: z.boolean().optional(),
  notes: z.string().max(2000).nullable().optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!UUID_RE.test(params.id)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 }
    );
  }
  const data = parsed.data;

  const existing = await sql`
    SELECT id, slot_date, start_time, end_time, label, max_bookings, is_available, notes
    FROM availability_slots WHERE id = ${params.id}
  `;
  if (existing.length === 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  const cur = existing[0];

  const rows = await sql`
    UPDATE availability_slots
    SET slot_date = ${data.slot_date ?? cur.slot_date},
        start_time = ${data.start_time ?? cur.start_time},
        end_time = ${data.end_time ?? cur.end_time},
        label = ${data.label ?? cur.label},
        max_bookings = ${data.max_bookings ?? cur.max_bookings},
        is_available = ${data.is_available ?? cur.is_available},
        notes = ${data.notes === undefined ? cur.notes : data.notes}
    WHERE id = ${params.id}
    RETURNING id, slot_date, start_time, end_time, label, max_bookings,
              current_bookings, is_available, notes
  `;

  return NextResponse.json({ success: true, slot: rows[0] });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!UUID_RE.test(params.id)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const existing = await sql`
    SELECT id, current_bookings FROM availability_slots WHERE id = ${params.id}
  `;
  if (existing.length === 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  if (existing[0].current_bookings > 0) {
    return NextResponse.json(
      { error: 'Cannot delete a slot with bookings. Cancel the appointments first.' },
      { status: 409 }
    );
  }

  await sql`DELETE FROM availability_slots WHERE id = ${params.id}`;
  return NextResponse.json({ success: true });
}
