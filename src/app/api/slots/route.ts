export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  if (!from || !to || !DATE_RE.test(from) || !DATE_RE.test(to)) {
    return NextResponse.json(
      { error: 'from and to query params required (YYYY-MM-DD)' },
      { status: 400 }
    );
  }

  try {
    const rows = await sql`
      SELECT id, slot_date, start_time, end_time, label
      FROM availability_slots
      WHERE slot_date >= ${from}
        AND slot_date <= ${to}
        AND is_available = true
        AND current_bookings < max_bookings
        AND slot_date >= CURRENT_DATE
      ORDER BY slot_date, start_time
    `;
    return NextResponse.json(rows);
  } catch (err) {
    console.error('Slots query failed:', err);
    return NextResponse.json({ error: 'Failed to load availability' }, { status: 500 });
  }
}
