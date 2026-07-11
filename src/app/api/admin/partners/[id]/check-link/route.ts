export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { checkBacklink } from '@/lib/backlink-check';

interface Context {
  params: Promise<{ id: string }>;
}

/**
 * POST: Run the automated backlink check for a single partner right now.
 * Fetches partners.link_target_url, looks for a link/mention of
 * voltsolenergy.com, and updates link_verified / link_verified_at /
 * link_last_checked_at / link_check_error accordingly. Logs the result
 * as a partner_interactions row.
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

  const partnerRows = await sql`
    SELECT id, company_name, link_target_url, link_verified
    FROM partners
    WHERE id = ${partnerId}
  `;

  if (partnerRows.length === 0) {
    return NextResponse.json({ error: 'Partner not found' }, { status: 404 });
  }

  const partner = partnerRows[0] as {
    id: number;
    company_name: string;
    link_target_url: string | null;
    link_verified: boolean;
  };

  if (!partner.link_target_url) {
    return NextResponse.json(
      { error: 'Partner has no link_target_url to check' },
      { status: 400 }
    );
  }

  const result = await checkBacklink(partner.link_target_url);

  await sql`
    UPDATE partners
    SET link_verified = ${result.verified},
        link_verified_at = CASE WHEN ${result.verified} THEN now() ELSE link_verified_at END,
        link_last_checked_at = now(),
        link_check_error = ${result.error}
    WHERE id = ${partnerId}
  `;

  const wasVerified = partner.link_verified;
  if (wasVerified !== result.verified) {
    await sql`
      INSERT INTO partner_interactions (partner_id, kind, body)
      VALUES (
        ${partnerId},
        'status_change',
        ${result.verified
          ? `Backlink verified automatically at ${result.checkedUrl}`
          : `Backlink check failed at ${result.checkedUrl}: ${result.error}`}
      )
    `;
  }

  return NextResponse.json({
    verified: result.verified,
    error: result.error,
    checkedUrl: result.checkedUrl,
  });
}
