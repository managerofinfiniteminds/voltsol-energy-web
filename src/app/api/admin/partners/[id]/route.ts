export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql, sqlRaw } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Context {
  params: Promise<{ id: string }>;
}

/**
 * GET: Fetch a single partner with its interactions timeline
 */
export async function GET(req: NextRequest, context: Context) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;
  const partnerId = parseInt(id, 10);
  if (isNaN(partnerId)) {
    return NextResponse.json({ error: 'Invalid partner ID' }, { status: 400 });
  }

  const partnerRows = await sql`
    SELECT id, company_name, category, contact_name, contact_email, website_url, status,
           logo_url, blurb, visible, sort_order, claim_token, claim_token_used_at,
           link_target_url, link_verified, link_verified_at, created_at, last_contacted_at
    FROM partners
    WHERE id = ${partnerId}
  `;

  if (partnerRows.length === 0) {
    return NextResponse.json({ error: 'Partner not found' }, { status: 404 });
  }

  const interactions = await sql`
    SELECT id, kind, body, resend_id, created_at
    FROM partner_interactions
    WHERE partner_id = ${partnerId}
    ORDER BY created_at DESC
  `;

  return NextResponse.json({
    partner: partnerRows[0],
    interactions,
  });
}

/**
 * PATCH: Update partner fields
 */
export async function PATCH(req: NextRequest, context: Context) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;
  const partnerId = parseInt(id, 10);
  if (isNaN(partnerId)) {
    return NextResponse.json({ error: 'Invalid partner ID' }, { status: 400 });
  }

  const body = (await req.json()) as {
    company_name?: string;
    category?: string;
    contact_name?: string;
    contact_email?: string;
    website_url?: string;
    status?: string;
    logo_url?: string;
    blurb?: string;
    visible?: boolean;
    sort_order?: number;
    link_verified?: boolean;
  };

  // Validate email if provided
  if (body.contact_email !== undefined && body.contact_email && !EMAIL_RE.test(body.contact_email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  // Build update query dynamically based on what fields are provided
  const updates: string[] = [];
  const values: any[] = [];
  let paramCounter = 1;

  if (body.company_name !== undefined) {
    updates.push(`company_name = $${paramCounter++}`);
    values.push(body.company_name.trim() || null);
  }
  if (body.category !== undefined) {
    updates.push(`category = $${paramCounter++}`);
    values.push(body.category?.trim() || null);
  }
  if (body.contact_name !== undefined) {
    updates.push(`contact_name = $${paramCounter++}`);
    values.push(body.contact_name?.trim() || null);
  }
  if (body.contact_email !== undefined) {
    updates.push(`contact_email = $${paramCounter++}`);
    values.push(body.contact_email?.trim() || null);
  }
  if (body.website_url !== undefined) {
    updates.push(`website_url = $${paramCounter++}`);
    values.push(body.website_url?.trim() || null);
  }
  if (body.logo_url !== undefined) {
    updates.push(`logo_url = $${paramCounter++}`);
    values.push(body.logo_url?.trim() || null);
  }
  if (body.blurb !== undefined) {
    updates.push(`blurb = $${paramCounter++}`);
    values.push(body.blurb?.trim() || null);
  }
  if (body.visible !== undefined) {
    updates.push(`visible = $${paramCounter++}`);
    values.push(body.visible);
  }
  if (body.sort_order !== undefined) {
    updates.push(`sort_order = $${paramCounter++}`);
    values.push(body.sort_order);
  }
  if (body.link_verified !== undefined) {
    updates.push(`link_verified = $${paramCounter++}`);
    values.push(body.link_verified);
    if (body.link_verified) {
      updates.push(`link_verified_at = now()`);
    }
  }

  // Handle status change — log it as an interaction
  let statusChanged = false;
  if (body.status !== undefined) {
    const currentStatus = await sql`SELECT status FROM partners WHERE id = ${partnerId}`;
    if (currentStatus.length > 0 && (currentStatus[0] as any).status !== body.status) {
      statusChanged = true;
      updates.push(`status = $${paramCounter++}`);
      values.push(body.status);
    }
  }

  if (updates.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
  }

  // Execute update
  values.push(partnerId);
  const updateQuery = `
    UPDATE partners
    SET ${updates.join(', ')}
    WHERE id = $${paramCounter}
    RETURNING id, company_name, category, contact_name, contact_email, website_url, status,
              logo_url, blurb, visible, sort_order, link_verified, link_verified_at
  `;

  const resultRows = await sqlRaw(updateQuery, values);

  // Log status change interaction
  if (statusChanged) {
    await sql`
      INSERT INTO partner_interactions (partner_id, kind, body)
      VALUES (${partnerId}, 'status_change', ${`Status changed to: ${body.status}`})
    `;
  }

  return NextResponse.json({ partner: resultRows[0] });
}
