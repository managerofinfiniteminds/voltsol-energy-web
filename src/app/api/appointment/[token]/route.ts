export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

const TOKEN_RE = /^[a-f0-9]{64}$/;

export async function GET(
  _req: NextRequest,
  { params }: { params: { token: string } }
) {
  const { token } = params;
  if (!TOKEN_RE.test(token)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  try {
    const rows = await sql`
      SELECT
        a.id, a.first_name, a.last_name, a.email, a.phone, a.address,
        a.notes, a.status, a.created_at,
        s.slot_date, s.start_time, s.end_time, s.label
      FROM appointments a
      LEFT JOIN availability_slots s ON s.id = a.slot_id
      WHERE a.magic_token = ${token}
    `;
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error('Appointment lookup failed:', err);
    return NextResponse.json({ error: 'Failed to load appointment' }, { status: 500 });
  }
}
