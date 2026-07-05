export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

interface Context {
  params: Promise<{ id: string }>;
}

/**
 * POST: Add a manual note to partner timeline
 */
export async function POST(req: NextRequest, context: Context) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;
  const partnerId = parseInt(id, 10);
  if (isNaN(partnerId)) {
    return NextResponse.json({ error: 'Invalid partner ID' }, { status: 400 });
  }

  const body = (await req.json()) as { note: string };

  if (!body.note?.trim()) {
    return NextResponse.json({ error: 'Note cannot be empty' }, { status: 400 });
  }

  // Verify partner exists
  const partnerRows = await sql`
    SELECT id FROM partners WHERE id = ${partnerId}
  `;

  if (partnerRows.length === 0) {
    return NextResponse.json({ error: 'Partner not found' }, { status: 404 });
  }

  // Insert note interaction
  const result = await sql`
    INSERT INTO partner_interactions (partner_id, kind, body)
    VALUES (${partnerId}, 'note', ${body.note.trim()})
    RETURNING id, kind, body, created_at
  `;

  return NextResponse.json({ interaction: result[0] });
}
