export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [totalRows, hotRows, newRows, weekRows] = await Promise.all([
    sql`SELECT COUNT(*)::int AS count FROM contacts`,
    sql`SELECT COUNT(*)::int AS count FROM contacts WHERE lead_score = 'hot_lead'`,
    sql`SELECT COUNT(*)::int AS count FROM contacts WHERE status = 'new'`,
    sql`SELECT COUNT(*)::int AS count FROM contacts WHERE created_at >= NOW() - INTERVAL '7 days'`,
  ]);

  return NextResponse.json({
    total: totalRows[0].count,
    hot: hotRows[0].count,
    new: newRows[0].count,
    this_week: weekRows[0].count,
  });
}
