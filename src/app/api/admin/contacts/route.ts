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
  const conditions: string[] = [];
export const dynamic = 'force-dynamic';
  const params: unknown[] = [];

export const dynamic = 'force-dynamic';
  // Build query with optional filters using tagged template
export const dynamic = 'force-dynamic';
  let rows;
export const dynamic = 'force-dynamic';
  if (!status && !lead_score && !campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
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
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
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
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
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
  } else if (!status && !lead_score && campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      WHERE c.campaign_id = ${parseInt(campaign_id)}
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  } else if (status && lead_score && !campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      WHERE c.status = ${status} AND c.lead_score = ${lead_score}
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  } else if (status && !lead_score && campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      WHERE c.status = ${status} AND c.campaign_id = ${parseInt(campaign_id)}
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  } else if (!status && lead_score && campaign_id) {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      WHERE c.lead_score = ${lead_score} AND c.campaign_id = ${parseInt(campaign_id)}
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  } else {
export const dynamic = 'force-dynamic';
    rows = await sql`
export const dynamic = 'force-dynamic';
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
export const dynamic = 'force-dynamic';
      FROM contacts c
export const dynamic = 'force-dynamic';
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
export const dynamic = 'force-dynamic';
      WHERE c.status = ${status!} AND c.lead_score = ${lead_score!} AND c.campaign_id = ${parseInt(campaign_id!)}
export const dynamic = 'force-dynamic';
      ORDER BY c.created_at DESC
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  return NextResponse.json(rows);
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
export async function PATCH(req: NextRequest) {
export const dynamic = 'force-dynamic';
  if (!isAuthenticated()) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  const { id, status } = await req.json();
export const dynamic = 'force-dynamic';
  const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'closed'];
export const dynamic = 'force-dynamic';
  if (!validStatuses.includes(status)) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  await sql`
export const dynamic = 'force-dynamic';
    UPDATE contacts SET status = ${status}, updated_at = NOW() WHERE id = ${id}
export const dynamic = 'force-dynamic';
  `;

export const dynamic = 'force-dynamic';
  return NextResponse.json({ success: true });
export const dynamic = 'force-dynamic';
}
