export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

const MONTH_RE = /^\d{4}-\d{2}$/;

export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const month = searchParams.get('month');
  if (!month || !MONTH_RE.test(month)) {
    return NextResponse.json({ error: 'month query param required (YYYY-MM)' }, { status: 400 });
  }

  const monthStart = `${month}-01`;
  const rows = await sql`
    SELECT id, slot_date, start_time, end_time, label, max_bookings,
           current_bookings, is_available, notes, created_at
    FROM availability_slots
    WHERE slot_date >= ${monthStart}::date
      AND slot_date < (${monthStart}::date + INTERVAL '1 month')
    ORDER BY slot_date, start_time
  `;
  return NextResponse.json(rows);
}

const TIME_RE = /^\d{2}:\d{2}(:\d{2})?$/;

const slotSchema = z.object({
  slot_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
  start_time: z.string().regex(TIME_RE, 'Time must be HH:MM'),
  end_time: z.string().regex(TIME_RE, 'Time must be HH:MM'),
  label: z.string().max(100).optional(),
  max_bookings: z.number().int().min(1).max(20).optional(),
  notes: z.string().max(2000).optional(),
});

const postSchema = z.union([
  slotSchema,
  z.object({ slots: z.array(slotSchema).min(1).max(100) }),
]);

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const slots = 'slots' in parsed.data ? parsed.data.slots : [parsed.data];

  const created = [];
  for (const slot of slots) {
    const rows = await sql`
      INSERT INTO availability_slots (slot_date, start_time, end_time, label, max_bookings, notes)
      VALUES (
        ${slot.slot_date}, ${slot.start_time}, ${slot.end_time},
        ${slot.label ?? 'Free Estimate'}, ${slot.max_bookings ?? 1}, ${slot.notes ?? null}
      )
      RETURNING id, slot_date, start_time, end_time, label, max_bookings,
                current_bookings, is_available, notes
    `;
    created.push(rows[0]);
  }

  return NextResponse.json({ success: true, slots: created });
}
