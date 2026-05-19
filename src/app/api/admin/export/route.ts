export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sql } from '@/lib/db';

function isAuthenticated(): boolean {
  const cookieStore = cookies();
  return cookieStore.get('admin_session')?.value === 'authenticated';
}

function escapeCsv(val: unknown): string {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');
  const lead_score = searchParams.get('lead_score');
  const campaign_id = searchParams.get('campaign_id');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let rows: any[];
  if (!status && !lead_score && !campaign_id) {
    rows = (await sql`
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
             c.street_address, c.city, c.state, c.zip,
             c.owns_home, c.monthly_bill, c.best_contact_time,
             c.notes, c.lead_score, c.status, c.created_at,
             cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      ORDER BY c.created_at DESC
    `) as any[];
  } else if (status && !lead_score && !campaign_id) {
    rows = (await sql`
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
             c.street_address, c.city, c.state, c.zip,
             c.owns_home, c.monthly_bill, c.best_contact_time,
             c.notes, c.lead_score, c.status, c.created_at,
             cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.status = ${status}
      ORDER BY c.created_at DESC
    `) as any[];
  } else if (!status && lead_score && !campaign_id) {
    rows = (await sql`
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
             c.street_address, c.city, c.state, c.zip,
             c.owns_home, c.monthly_bill, c.best_contact_time,
             c.notes, c.lead_score, c.status, c.created_at,
             cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.lead_score = ${lead_score}
      ORDER BY c.created_at DESC
    `) as any[];
  } else {
    rows = (await sql`
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
             c.street_address, c.city, c.state, c.zip,
             c.owns_home, c.monthly_bill, c.best_contact_time,
             c.notes, c.lead_score, c.status, c.created_at,
             cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      ORDER BY c.created_at DESC
    `) as any[];
  }

  const headers = [
    'ID', 'First Name', 'Last Name', 'Email', 'Phone',
    'Street Address', 'City', 'State', 'ZIP',
    'Owns Home', 'Monthly Bill', 'Best Contact Time',
    'Notes', 'Lead Score', 'Status', 'Submitted At',
    'Campaign Name', 'Campaign Code',
  ];

  const csvRows = [
    headers.join(','),
    ...rows.map((r: Record<string, unknown>) =>
      [
        r.id, r.first_name, r.last_name, r.email, r.phone,
        r.street_address, r.city, r.state, r.zip,
        r.owns_home, r.monthly_bill, r.best_contact_time,
        r.notes, r.lead_score, r.status, r.created_at,
        r.campaign_name, r.campaign_code,
      ]
        .map(escapeCsv)
        .join(',')
    ),
  ];

  const csv = csvRows.join('\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="voltsol-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
