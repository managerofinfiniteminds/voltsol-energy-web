export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { getAllUtilities } from '@/lib/utilities';

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const utilities = await getAllUtilities();
  return NextResponse.json(utilities);
}

const createSchema = z.object({
  name: z.string().trim().min(2, 'Name too short').max(120),
  sort_order: z.number().int().min(0).max(99999).optional(),
  is_active: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, sort_order, is_active } = parsed.data;
  try {
    const rows = await sql`
      INSERT INTO utilities (name, sort_order, is_active)
      VALUES (${name}, ${sort_order ?? 100}, ${is_active ?? true})
      RETURNING id, name, sort_order, is_active
    `;
    return NextResponse.json({ success: true, utility: rows[0] });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Insert failed';
    if (/duplicate|unique/i.test(msg)) {
      return NextResponse.json({ error: 'That utility already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Could not add utility.' }, { status: 500 });
  }
}

const updateSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().trim().min(2).max(120).optional(),
  sort_order: z.number().int().min(0).max(99999).optional(),
  is_active: z.boolean().optional(),
});

export async function PATCH(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { id, name, sort_order, is_active } = parsed.data;
  try {
    const rows = await sql`
      UPDATE utilities SET
        name       = COALESCE(${name ?? null}, name),
        sort_order = COALESCE(${sort_order ?? null}, sort_order),
        is_active  = COALESCE(${is_active ?? null}, is_active),
        updated_at = now()
      WHERE id = ${id}
      RETURNING id, name, sort_order, is_active
    `;
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, utility: rows[0] });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Update failed';
    if (/duplicate|unique/i.test(msg)) {
      return NextResponse.json({ error: 'That utility name already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Could not update utility.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Valid id required' }, { status: 400 });
  }

  await sql`DELETE FROM utilities WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}
