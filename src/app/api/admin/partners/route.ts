export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql, sqlRaw } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PAGE_SIZE = 20;
const VALID_SORT_KEYS = ['created_at', 'last_contacted_at', 'company_name', 'status'] as const;
type SortKey = (typeof VALID_SORT_KEYS)[number];

async function queryPartners(params: {
  searchPattern: string | null;
  statusFilter: string | null;
  sortKey: SortKey;
  dir: 'asc' | 'desc';
  limit: number;
  offset: number;
}) {
  const { searchPattern, statusFilter, sortKey, dir, limit, offset } = params;

  const orderBy =
    sortKey === 'company_name'
      ? dir === 'asc' ? 'LOWER(company_name) ASC, id DESC' : 'LOWER(company_name) DESC, id DESC'
      : sortKey === 'last_contacted_at'
        ? dir === 'asc' ? 'last_contacted_at ASC NULLS FIRST, id DESC' : 'last_contacted_at DESC NULLS LAST, id DESC'
        : sortKey === 'status'
          ? dir === 'asc' ? 'status ASC, id DESC' : 'status DESC, id DESC'
          : dir === 'asc' ? 'created_at ASC, id DESC' : 'created_at DESC, id DESC';

  const baseWhere = `
    WHERE (
      $1::text IS NULL
      OR LOWER(company_name) LIKE $1
      OR LOWER(COALESCE(contact_name, '')) LIKE $1
      OR LOWER(COALESCE(contact_email, '')) LIKE $1
      OR LOWER(COALESCE(category, '')) LIKE $1
    )
    AND ($2::text IS NULL OR status = $2)
  `;

  const rows = await sqlRaw(
    `SELECT id, company_name, category, contact_name, contact_email, website_url, status,
            logo_url, blurb, visible, sort_order, link_target_url, link_verified, link_verified_at,
            created_at, last_contacted_at
     FROM partners ${baseWhere}
     ORDER BY ${orderBy}
     LIMIT $3 OFFSET $4`,
    [searchPattern, statusFilter, limit, offset]
  );

  const countRows = await sqlRaw(
    `SELECT COUNT(*) AS count FROM partners ${baseWhere}`,
    [searchPattern, statusFilter]
  );

  return { rows, total: Number(countRows[0].count) };
}

/**
 * GET: Fetch partners with search/filter/sort/pagination.
 *
 * Query params:
 *   q      - search substring, matched against company_name/contact_name/contact_email/category
 *   status - filter by status ("prospect" | "contacted" | etc.)
 *   sort   - "created_at" | "last_contacted_at" | "company_name" | "status" (default "created_at")
 *   dir    - "asc" | "desc" (default "desc")
 *   page   - 1-based page number (default 1), PAGE_SIZE rows per page
 */
export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim();
  const statusParam = searchParams.get('status');
  const statusFilter = statusParam && statusParam.trim() ? statusParam : null;
  const sortParam = searchParams.get('sort') || 'created_at';
  const sortKey: SortKey = (VALID_SORT_KEYS as readonly string[]).includes(sortParam)
    ? (sortParam as SortKey)
    : 'created_at';
  const dir: 'asc' | 'desc' = searchParams.get('dir') === 'asc' ? 'asc' : 'desc';
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
  const offset = (page - 1) * PAGE_SIZE;
  const searchPattern = q ? `%${q.toLowerCase()}%` : null;

  const { rows, total } = await queryPartners({
    searchPattern,
    statusFilter,
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
 * POST: Create a new partner
 */
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json()) as {
    company_name: string;
    category?: string;
    contact_name?: string;
    contact_email?: string;
    website_url?: string;
  };

  if (!body.company_name?.trim()) {
    return NextResponse.json({ error: 'Company name is required' }, { status: 400 });
  }

  // Validate email if provided
  if (body.contact_email && !EMAIL_RE.test(body.contact_email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  const result = await sql`
    INSERT INTO partners (company_name, category, contact_name, contact_email, website_url)
    VALUES (
      ${body.company_name.trim()},
      ${body.category?.trim() || null},
      ${body.contact_name?.trim() || null},
      ${body.contact_email?.trim() || null},
      ${body.website_url?.trim() || null}
    )
    RETURNING id, company_name, category, contact_name, contact_email, website_url, status,
              visible, sort_order, created_at, claim_token
  `;

  return NextResponse.json({ partner: result[0] });
}
