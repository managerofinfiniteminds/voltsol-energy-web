export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MONTH_RE = /^\d{4}-\d{2}$/;
const VALID_STATUSES = ['confirmed', 'cancelled', 'completed', 'no_show'];

export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');
  const date = searchParams.get('date');
  const month = searchParams.get('month');

  if (status && !VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }
  if (date && !DATE_RE.test(date)) {
    return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
  }
  if (month && !MONTH_RE.test(month)) {
    return NextResponse.json({ error: 'Invalid month' }, { status: 400 });
  }

  const monthStart = month ? `${month}-01` : null;

  const rows = await sql`
    SELECT
      a.id, a.slot_id, a.contact_id, a.first_name, a.last_name, a.email,
      a.phone, a.address, a.notes, a.status, a.created_at,
      s.slot_date, s.start_time, s.end_time, s.label
    FROM appointments a
    LEFT JOIN availability_slots s ON s.id = a.slot_id
    WHERE (${status}::text IS NULL OR a.status = ${status})
      AND (${date}::date IS NULL OR s.slot_date = ${date}::date)
      AND (${monthStart}::date IS NULL OR (
        s.slot_date >= ${monthStart}::date
        AND s.slot_date < (${monthStart}::date + INTERVAL '1 month')
      ))
    ORDER BY s.slot_date, s.start_time, a.created_at
  `;
  return NextResponse.json(rows);
}
