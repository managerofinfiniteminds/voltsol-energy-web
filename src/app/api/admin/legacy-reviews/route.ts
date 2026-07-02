export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql, sqlRaw } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { sendLegacyReviewEmail } from '@/lib/email';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PAGE_SIZE = 20;
const VALID_SORT_KEYS = ['sent_at', 'click_count', 'name'] as const;
type SortKey = (typeof VALID_SORT_KEYS)[number];

// Neon's tagged-template sql() doesn't support composing sql fragments
// (no nested-fragment support like postgres.js) — every value must go
// through a template placeholder, and ORDER BY can't take a placeholder
// for a column name. So sort/dir select one of a fixed set of full
// queries below rather than interpolating raw identifiers (avoids SQL
// injection via query-string column/direction names).
async function queryLegacySends(params: {
  searchPattern: string | null;
  clickedFilter: 'yes' | 'no' | null;
  sortKey: SortKey;
  dir: 'asc' | 'desc';
  limit: number;
  offset: number;
}) {
  const { searchPattern, clickedFilter, sortKey, dir, limit, offset } = params;
  const clickedYes = clickedFilter === 'yes';
  const clickedNo = clickedFilter === 'no';

  const orderBy =
    sortKey === 'click_count'
      ? dir === 'asc' ? 'click_count ASC, id DESC' : 'click_count DESC, id DESC'
      : sortKey === 'name'
        ? dir === 'asc' ? 'LOWER(COALESCE(name, \'\')) ASC, id DESC' : 'LOWER(COALESCE(name, \'\')) DESC, id DESC'
        : dir === 'asc' ? 'sent_at ASC, id DESC' : 'sent_at DESC, id DESC';

  // Fixed WHERE + ORDER BY combinations (3 sort keys x 2 directions = 6),
  // each a fully static query string so no identifier is interpolated.
  const baseWhere = `
    WHERE (
      $1::text IS NULL
      OR LOWER(email) LIKE $1
      OR LOWER(COALESCE(name, '')) LIKE $1
      OR LOWER(subject) LIKE $1
    )
    AND ($2::boolean IS NULL OR (link_clicked_at IS NOT NULL) = $2)
  `;

  const clickedParam = clickedYes ? true : clickedNo ? false : null;

  const rows = await sqlRaw(
    `SELECT id, email, name, subject, sent_at, resend_id, link_clicked_at, click_count
     FROM legacy_review_requests ${baseWhere}
     ORDER BY ${orderBy}
     LIMIT $3 OFFSET $4`,
    [searchPattern, clickedParam, limit, offset]
  );

  const countRows = await sqlRaw(
    `SELECT COUNT(*) AS count FROM legacy_review_requests ${baseWhere}`,
    [searchPattern, clickedParam]
  );

  return { rows, total: Number(countRows[0].count) };
}

/**
 * GET: Fetch legacy review sends with search/filter/sort/pagination.
 *
 * Query params:
 *   q       - search substring, matched against email/name/subject (case-insensitive)
 *   clicked - "yes" | "no" | omitted (any)
 *   sort    - "sent_at" | "click_count" | "name" (default "sent_at")
 *   dir     - "asc" | "desc" (default "desc")
 *   page    - 1-based page number (default 1), PAGE_SIZE rows per page
 */
export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim();
  const clickedParam = searchParams.get('clicked');
  const clickedFilter: 'yes' | 'no' | null =
    clickedParam === 'yes' ? 'yes' : clickedParam === 'no' ? 'no' : null;
  const sortParam = searchParams.get('sort') || 'sent_at';
  const sortKey: SortKey = (VALID_SORT_KEYS as readonly string[]).includes(sortParam)
    ? (sortParam as SortKey)
    : 'sent_at';
  const dir: 'asc' | 'desc' = searchParams.get('dir') === 'asc' ? 'asc' : 'desc';
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
  const offset = (page - 1) * PAGE_SIZE;
  const searchPattern = q ? `%${q.toLowerCase()}%` : null;

  const { rows, total } = await queryLegacySends({
    searchPattern,
    clickedFilter,
    sortKey,
    dir,
    limit: PAGE_SIZE,
    offset,
  });

  return NextResponse.json({
    rows,
    total,
    page,
    pageSize: PAGE_SIZE,
    totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)),
  });
}

/**
 * POST: Send a legacy review email
 * Rate limits: 20/hour, 50/day per IP (simple count-based)
 */
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json()) as {
    email: string;
    name?: string;
    subject: string;
    body: string;
  };

  // Validate email format
  if (!EMAIL_RE.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  // Rate limit check: 20 in last hour
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const hourCount = await sql`
    SELECT COUNT(*) as count
    FROM legacy_review_requests
    WHERE sent_at > ${oneHourAgo}
  `;
  if (Number((hourCount[0] as { count: string }).count) >= 20) {
    return NextResponse.json(
      { error: 'Rate limit exceeded: 20 emails per hour' },
      { status: 429 }
    );
  }

  // Rate limit check: 50 in last day
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const dayCount = await sql`
    SELECT COUNT(*) as count
    FROM legacy_review_requests
    WHERE sent_at > ${oneDayAgo}
  `;
  if (Number((dayCount[0] as { count: string }).count) >= 50) {
    return NextResponse.json(
      { error: 'Rate limit exceeded: 50 emails per day' },
      { status: 429 }
    );
  }

  // Insert the row first (before sending) so we have a click_token to embed
  // in the email's review link. If the send fails below, we delete this row
  // so no orphaned/un-sent record with a live tracking token sticks around.
  const inserted = await sql`
    INSERT INTO legacy_review_requests (email, name, subject, body)
    VALUES (${body.email}, ${body.name || null}, ${body.subject}, ${body.body})
    RETURNING id, click_token
  `;
  const row = inserted[0] as { id: number; click_token: string };

  try {
    // Send the email
    const result = await sendLegacyReviewEmail({
      email: body.email,
      name: body.name,
      subject: body.subject,
      body: body.body,
      click_token: row.click_token,
    });

    // Attach the Resend message id now that the send succeeded
    await sql`
      UPDATE legacy_review_requests SET resend_id = ${result.id || null} WHERE id = ${row.id}
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send legacy review email:', error);
    await sql`DELETE FROM legacy_review_requests WHERE id = ${row.id}`;
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
