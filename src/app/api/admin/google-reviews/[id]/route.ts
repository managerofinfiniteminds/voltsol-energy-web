export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

/**
 * PATCH: update curation fields on a single synced Google review —
 * featured (show on homepage) and/or sort_order (position among featured).
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = parseInt(params.id, 10);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: 'Invalid review id' }, { status: 400 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    featured?: boolean;
    sort_order?: number;
  };

  if (typeof body.featured === 'boolean' && typeof body.sort_order === 'number') {
    await sql`
      UPDATE google_reviews SET featured = ${body.featured}, sort_order = ${body.sort_order}
      WHERE id = ${id}
    `;
  } else if (typeof body.featured === 'boolean') {
    await sql`UPDATE google_reviews SET featured = ${body.featured} WHERE id = ${id}`;
  } else if (typeof body.sort_order === 'number') {
    await sql`UPDATE google_reviews SET sort_order = ${body.sort_order} WHERE id = ${id}`;
  } else {
    return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}

/**
 * DELETE: remove a synced review from the local table (e.g. spam or
 * irrelevant Google review). It will reappear on next sync if Google
 * still returns it as one of the top-5 "most relevant" reviews for the
 * place — this only removes it from local curation, not from Google.
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = parseInt(params.id, 10);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: 'Invalid review id' }, { status: 400 });
  }

  await sql`DELETE FROM google_reviews WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}
