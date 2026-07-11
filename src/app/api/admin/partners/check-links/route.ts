export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { checkBacklink } from '@/lib/backlink-check';

/**
 * Bulk backlink check across all partners that have a link_target_url
 * on file. Meant to be called either:
 *   - from Vercel Cron (GET, auto-attaches `Authorization: Bearer
 *     ${CRON_SECRET}` per vercel.json schedule), or
 *   - from the admin UI / manually (POST, browser session via isAdmin()
 *     cookie, or the same Bearer header)
 *
 * Updates link_verified / link_verified_at / link_last_checked_at /
 * link_check_error per partner, and logs a status_change interaction
 * whenever verified flips true<->false.
 */
async function runCheck(req: NextRequest) {
  const authHeader = req.headers.get('authorization') || '';
  const cronSecret = process.env.CRON_SECRET;
  const isCron = !!cronSecret && authHeader === `Bearer ${cronSecret}`;

  if (!isCron && !(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const partners = await sql`
    SELECT id, company_name, link_target_url, link_verified
    FROM partners
    WHERE link_target_url IS NOT NULL AND link_target_url != ''
  `;

  const results: Array<{
    id: number;
    company_name: string;
    verified: boolean;
    error: string | null;
  }> = [];

  for (const p of partners as Array<{
    id: number;
    company_name: string;
    link_target_url: string;
    link_verified: boolean;
  }>) {
    const result = await checkBacklink(p.link_target_url);

    await sql`
      UPDATE partners
      SET link_verified = ${result.verified},
          link_verified_at = CASE WHEN ${result.verified} THEN now() ELSE link_verified_at END,
          link_last_checked_at = now(),
          link_check_error = ${result.error}
      WHERE id = ${p.id}
    `;

    if (p.link_verified !== result.verified) {
      await sql`
        INSERT INTO partner_interactions (partner_id, kind, body)
        VALUES (
          ${p.id},
          'status_change',
          ${result.verified
            ? `Backlink verified automatically at ${result.checkedUrl}`
            : `Backlink check failed at ${result.checkedUrl}: ${result.error}`}
        )
      `;
    }

    results.push({
      id: p.id,
      company_name: p.company_name,
      verified: result.verified,
      error: result.error,
    });
  }

  return NextResponse.json({ checked: results.length, results });
}

// Vercel Cron invokes scheduled functions via GET with
// `Authorization: Bearer $CRON_SECRET` attached automatically.
export async function GET(req: NextRequest) {
  return runCheck(req);
}

// Also allow POST for manual/admin-UI triggers.
export async function POST(req: NextRequest) {
  return runCheck(req);
}
