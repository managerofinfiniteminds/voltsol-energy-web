export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

const DEFAULT_SUBJECT = 'Following up on your solar install';
const DEFAULT_BODY = `Hi {name},

It's been a while since I did your solar installation. I hope everything's still running smoothly.

I've since launched my own company, VoltSol Energy, and I'm working to get the word out to families who could use a more affordable path to solar independence.

If you have a minute, I'd really appreciate a Google review. It helps other homeowners find me when they're looking to cut the cord on their utility.

https://g.page/r/CQOUYctMQ1MMEBM/review

Thanks for your time. Reply STOP and I won't email again.

— Hugo`;

/**
 * GET: Load template from site_config, fallback to defaults
 */
export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const rows = await sql`
      SELECT key, value
      FROM site_config
      WHERE key IN ('legacy_review_email_subject', 'legacy_review_email_body')
    `;

    const config: Record<string, string> = {};
    for (const row of rows) {
      config[row.key as string] = row.value as string;
    }

    return NextResponse.json({
      subject: config.legacy_review_email_subject || DEFAULT_SUBJECT,
      body: config.legacy_review_email_body || DEFAULT_BODY,
    });
  } catch {
    // DB error — return defaults
    return NextResponse.json({
      subject: DEFAULT_SUBJECT,
      body: DEFAULT_BODY,
    });
  }
}

/**
 * POST: Save template to site_config
 */
export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json()) as {
    subject: string;
    body: string;
  };

  await sql`
    INSERT INTO site_config (key, value, updated_by, updated_at)
    VALUES ('legacy_review_email_subject', ${body.subject}, 'admin', NOW())
    ON CONFLICT (key) DO UPDATE SET
      value = EXCLUDED.value,
      updated_at = NOW(),
      updated_by = EXCLUDED.updated_by
  `;

  await sql`
    INSERT INTO site_config (key, value, updated_by, updated_at)
    VALUES ('legacy_review_email_body', ${body.body}, 'admin', NOW())
    ON CONFLICT (key) DO UPDATE SET
      value = EXCLUDED.value,
      updated_at = NOW(),
      updated_by = EXCLUDED.updated_by
  `;

  return NextResponse.json({ success: true });
}
