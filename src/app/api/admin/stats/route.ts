export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';
function isAuthenticated(): boolean {
export const dynamic = 'force-dynamic';
  const cookieStore = cookies();
export const dynamic = 'force-dynamic';
  return cookieStore.get('admin_session')?.value === 'authenticated';
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
export async function GET() {
export const dynamic = 'force-dynamic';
  if (!isAuthenticated()) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  const [totalRows, hotRows, newRows, weekRows] = await Promise.all([
export const dynamic = 'force-dynamic';
    sql`SELECT COUNT(*)::int AS count FROM contacts`,
export const dynamic = 'force-dynamic';
    sql`SELECT COUNT(*)::int AS count FROM contacts WHERE lead_score = 'hot_lead'`,
export const dynamic = 'force-dynamic';
    sql`SELECT COUNT(*)::int AS count FROM contacts WHERE status = 'new'`,
export const dynamic = 'force-dynamic';
    sql`SELECT COUNT(*)::int AS count FROM contacts WHERE created_at >= NOW() - INTERVAL '7 days'`,
export const dynamic = 'force-dynamic';
  ]);

export const dynamic = 'force-dynamic';
  return NextResponse.json({
export const dynamic = 'force-dynamic';
    total: totalRows[0].count,
export const dynamic = 'force-dynamic';
    hot: hotRows[0].count,
export const dynamic = 'force-dynamic';
    new: newRows[0].count,
export const dynamic = 'force-dynamic';
    this_week: weekRows[0].count,
export const dynamic = 'force-dynamic';
  });
export const dynamic = 'force-dynamic';
}
