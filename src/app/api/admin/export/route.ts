export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
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
function escapeCsv(val: unknown): string {
export const dynamic = 'force-dynamic';
  if (val === null || val === undefined) return '';
export const dynamic = 'force-dynamic';
  const str = String(val);
export const dynamic = 'force-dynamic';
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
export const dynamic = 'force-dynamic';
    return `"${str.replace(/"/g, '""')}"`;
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  return str;
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
export const dynamic = 'force-dynamic';
  if (!isAuthenticated()) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  const { searchParams } = new URL(req.url);
export const dynamic = 'force-dynamic';
  const status = searchParams.get('status');
export const dynamic = 'force-dynamic';
  const lead_score = searchParams.get('lead_score');
export const dynamic = 'force-dynamic';
  const campaign_id = searchParams.get('campaign_id');

export const dynamic = 'force-dynamic';
  let rows;
export const dynamic = 'force-dynamic';
  if (!status && !lead_score && !campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
export const dynamic = 'force-dynamic';
             c.street_address, c.city, c.state, c.zip,
export const dynamic = 'force-dynamic';
             c.owns_home, c.monthly_bill, c.best_contact_time,
export const dynamic = 'force-dynamic';
             c.notes, c.lead_score, c.status, c.created_at,
export const dynamic = 'force-dynamic';
             cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  } else if (status && !lead_score && !campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
export const dynamic = 'force-dynamic';
             c.street_address, c.city, c.state, c.zip,
export const dynamic = 'force-dynamic';
             c.owns_home, c.monthly_bill, c.best_contact_time,
export const dynamic = 'force-dynamic';
             c.notes, c.lead_score, c.status, c.created_at,
export const dynamic = 'force-dynamic';
             cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      WHERE c.status = ${status}
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  } else if (!status && lead_score && !campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
export const dynamic = 'force-dynamic';
             c.street_address, c.city, c.state, c.zip,
export const dynamic = 'force-dynamic';
             c.owns_home, c.monthly_bill, c.best_contact_time,
export const dynamic = 'force-dynamic';
             c.notes, c.lead_score, c.status, c.created_at,
export const dynamic = 'force-dynamic';
             cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      WHERE c.lead_score = ${lead_score}
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  } else {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.id, c.first_name, c.last_name, c.email, c.phone,
export const dynamic = 'force-dynamic';
             c.street_address, c.city, c.state, c.zip,
export const dynamic = 'force-dynamic';
             c.owns_home, c.monthly_bill, c.best_contact_time,
export const dynamic = 'force-dynamic';
             c.notes, c.lead_score, c.status, c.created_at,
export const dynamic = 'force-dynamic';
             cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  const headers = [
export const dynamic = 'force-dynamic';
    'ID', 'First Name', 'Last Name', 'Email', 'Phone',
export const dynamic = 'force-dynamic';
    'Street Address', 'City', 'State', 'ZIP',
export const dynamic = 'force-dynamic';
    'Owns Home', 'Monthly Bill', 'Best Contact Time',
export const dynamic = 'force-dynamic';
    'Notes', 'Lead Score', 'Status', 'Submitted At',
export const dynamic = 'force-dynamic';
    'Campaign Name', 'Campaign Code',
export const dynamic = 'force-dynamic';
  ];

export const dynamic = 'force-dynamic';
  const csvRows = [
export const dynamic = 'force-dynamic';
    headers.join(','),
export const dynamic = 'force-dynamic';
    ...rows.map((r: Record<string, unknown>) =>
export const dynamic = 'force-dynamic';
      [
export const dynamic = 'force-dynamic';
        r.id, r.first_name, r.last_name, r.email, r.phone,
export const dynamic = 'force-dynamic';
        r.street_address, r.city, r.state, r.zip,
export const dynamic = 'force-dynamic';
        r.owns_home, r.monthly_bill, r.best_contact_time,
export const dynamic = 'force-dynamic';
        r.notes, r.lead_score, r.status, r.created_at,
export const dynamic = 'force-dynamic';
        r.campaign_name, r.campaign_code,
export const dynamic = 'force-dynamic';
      ]
export const dynamic = 'force-dynamic';
        .map(escapeCsv)
export const dynamic = 'force-dynamic';
        .join(',')
export const dynamic = 'force-dynamic';
    ),
export const dynamic = 'force-dynamic';
  ];

export const dynamic = 'force-dynamic';
  const csv = csvRows.join('\n');

export const dynamic = 'force-dynamic';
  return new NextResponse(csv, {
export const dynamic = 'force-dynamic';
    headers: {
export const dynamic = 'force-dynamic';
      'Content-Type': 'text/csv',
export const dynamic = 'force-dynamic';
      'Content-Disposition': `attachment; filename="voltsol-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
export const dynamic = 'force-dynamic';
    },
export const dynamic = 'force-dynamic';
  });
export const dynamic = 'force-dynamic';
}
