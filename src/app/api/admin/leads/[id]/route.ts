export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { LeadStatusSchema } from '@/lib/engine-enums';

function isAuthenticated(): boolean {
  const session = cookies().get('admin_session')?.value;
  return session === 'authenticated';
}

const patchSchema = z.object({
  status: LeadStatusSchema.optional(),
  sale_value: z.number().nonnegative().nullable().optional(),
  notes: z.string().max(5000).nullable().optional(),
});

/**
 * PATCH /api/admin/leads/[id]
 * Update status, sale_value, or notes for an engine_lead.
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = parseInt(params.id, 10);
  if (isNaN(id) || id < 1) {
    return NextResponse.json({ error: 'Invalid lead ID' }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { status, sale_value, notes } = parsed.data;

  // At least one field must be provided
  if (status === undefined && sale_value === undefined && notes === undefined) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
  }

  try {
    // Build dynamic update
    const updates: string[] = [];

    if (status !== undefined) {
      await sql`
        UPDATE engine_leads
        SET status = ${status}, updated_at = NOW()
        WHERE id = ${id} AND tenant_id = 1
      `;
    }

    if (sale_value !== undefined) {
      await sql`
        UPDATE engine_leads
        SET sale_value = ${sale_value}, updated_at = NOW()
        WHERE id = ${id} AND tenant_id = 1
      `;
    }

    if (notes !== undefined) {
      await sql`
        UPDATE engine_leads
        SET notes = ${notes}, updated_at = NOW()
        WHERE id = ${id} AND tenant_id = 1
      `;
    }

    // Fetch updated record
    const rows = await sql`
      SELECT id, status, sale_value, notes, updated_at
      FROM engine_leads
      WHERE id = ${id} AND tenant_id = 1
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ ok: true, lead: rows[0] });
  } catch (err) {
    console.error('[admin/leads/[id]] PATCH failed:', err);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}

/**
 * GET /api/admin/leads/[id]
 * Fetch a single engine_lead by ID.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = parseInt(params.id, 10);
  if (isNaN(id) || id < 1) {
    return NextResponse.json({ error: 'Invalid lead ID' }, { status: 400 });
  }

  try {
    const rows = await sql`
      SELECT
        id, tenant_id, vertical, source_consumer, source_page,
        first_name, last_name, email, phone,
        street_address, city, state, zip,
        owns_home, monthly_bill, timeline, utility, roof_shade,
        intent, notes,
        score, status, sale_value,
        attribution_json, consent_json, ip_address,
        created_at, updated_at
      FROM engine_leads
      WHERE id = ${id} AND tenant_id = 1
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error('[admin/leads/[id]] GET failed:', err);
    return NextResponse.json({ error: 'Failed to fetch lead' }, { status: 500 });
  }
}
