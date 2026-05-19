export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sql } from '@/lib/db';

function isAuthenticated(): boolean {
  const cookieStore = cookies();
  return cookieStore.get('admin_session')?.value === 'authenticated';
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');
  const lead_score = searchParams.get('lead_score');
  const campaign_id = searchParams.get('campaign_id');

  const conditions: string[] = [];
  const params: unknown[] = [];

  // Build query with optional filters using tagged template
  let rows;
  if (!status && !lead_score && !campaign_id) {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      ORDER BY c.created_at DESC
    `;
  } else if (status && !lead_score && !campaign_id) {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.status = ${status}
      ORDER BY c.created_at DESC
    `;
  } else if (!status && lead_score && !campaign_id) {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.lead_score = ${lead_score}
      ORDER BY c.created_at DESC
    `;
  } else if (!status && !lead_score && campaign_id) {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.campaign_id = ${parseInt(campaign_id)}
      ORDER BY c.created_at DESC
    `;
  } else if (status && lead_score && !campaign_id) {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.status = ${status} AND c.lead_score = ${lead_score}
      ORDER BY c.created_at DESC
    `;
  } else if (status && !lead_score && campaign_id) {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.status = ${status} AND c.campaign_id = ${parseInt(campaign_id)}
      ORDER BY c.created_at DESC
    `;
  } else if (!status && lead_score && campaign_id) {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.lead_score = ${lead_score} AND c.campaign_id = ${parseInt(campaign_id)}
      ORDER BY c.created_at DESC
    `;
  } else {
    rows = await sql`
      SELECT c.*, cam.name AS campaign_name, cam.code AS campaign_code
      FROM contacts c
      LEFT JOIN campaigns cam ON cam.id = c.campaign_id
      WHERE c.status = ${status!} AND c.lead_score = ${lead_score!} AND c.campaign_id = ${parseInt(campaign_id!)}
      ORDER BY c.created_at DESC
    `;
  }

  return NextResponse.json(rows);
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id, status } = await req.json();
  const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'closed'];
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  await sql`
    UPDATE contacts SET status = ${status}, updated_at = NOW() WHERE id = ${id}
  `;

  return NextResponse.json({ success: true });
}
