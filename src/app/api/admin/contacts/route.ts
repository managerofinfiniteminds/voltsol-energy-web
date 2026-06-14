export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
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
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id, status, notes } = await req.json();
  if (typeof id !== 'number') {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const validStatuses = ['new', 'contacted', 'quoted', 'won', 'lost'];
  if (status !== undefined && !validStatuses.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }
  if (notes !== undefined && typeof notes !== 'string') {
    return NextResponse.json({ error: 'Invalid notes' }, { status: 400 });
  }
  if (status === undefined && notes === undefined) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 });
  }

  try {
    if (status !== undefined && notes !== undefined) {
      await sql`UPDATE contacts SET status = ${status}, notes = ${notes}, updated_at = NOW() WHERE id = ${id}`;
    } else if (status !== undefined) {
      await sql`UPDATE contacts SET status = ${status}, updated_at = NOW() WHERE id = ${id}`;
    } else {
      await sql`UPDATE contacts SET notes = ${notes}, updated_at = NOW() WHERE id = ${id}`;
    }
  } catch (err) {
    // 42703 = undefined_column — migration 004 not applied yet
    if ((err as { code?: string }).code === '42703') {
      return NextResponse.json(
        { error: 'Database migration pending — run npm run db:migrate' },
        { status: 503 }
      );
    }
    throw err;
  }

  return NextResponse.json({ success: true });
}
