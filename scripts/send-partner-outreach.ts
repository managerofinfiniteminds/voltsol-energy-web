/**
 * One-off / repeatable script: send partner outreach emails for all
 * partners currently in 'prospect' status, log the interaction, and
 * advance status to 'contacted'. Mirrors the logic in
 * src/app/api/admin/partners/[id]/send-outreach/route.ts so results are
 * identical to clicking "Send Outreach Email" in the admin UI.
 *
 * Usage: npx tsx scripts/send-partner-outreach.ts [partnerId ...]
 * With no args, sends to every partner in 'prospect' status with a
 * contact_email set.
 */
import { readFileSync } from 'fs';
import { join } from 'path';

// Load .env.local manually (no dotenv dependency in this repo)
try {
  const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf8');
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
} catch {
  // .env.local not found; rely on real env
}

import { sql } from '@/lib/db';
import { sendPartnerOutreachEmail } from '@/lib/email';

const DEFAULT_OUTREACH_SUBJECT = 'Partnership with VoltSol Energy?';
const DEFAULT_OUTREACH_BODY = `Hi {name},

I run VoltSol Energy — we do solar installs in Northern California. We've really valued working with {companyName}, and I'd love to feature you as a partner on our site (voltsolenergy.com/partners) with your logo, a short write-up, and a real link to your site.

In return, if you'd be open to it, a simple link back to VoltSol from your site would mean a lot — helps other folks find us when they're looking to cut the cord on their utility.

It's fast — just one link to fill out a quick form, no login needed:

{claim_link}

Let me know if you're interested!

— Hugo
VoltSol Energy
Northern California`;

async function main() {
  const argIds = process.argv.slice(2).map((s) => parseInt(s, 10)).filter((n) => !isNaN(n));

  const partners = argIds.length > 0
    ? await sql`
        SELECT id, company_name, contact_name, contact_email, claim_token, status
        FROM partners
        WHERE id = ANY(${argIds})
      `
    : await sql`
        SELECT id, company_name, contact_name, contact_email, claim_token, status
        FROM partners
        WHERE status = 'prospect' AND contact_email IS NOT NULL
      `;

  if (partners.length === 0) {
    console.log('No matching partners found.');
    return;
  }

  for (const p of partners as any[]) {
    if (!p.contact_email) {
      console.log(`[skip] ${p.company_name} (id=${p.id}): no contact_email`);
      continue;
    }

    console.log(`[send] ${p.company_name} (id=${p.id}) -> ${p.contact_email}`);

    try {
      const result = await sendPartnerOutreachEmail({
        email: p.contact_email,
        contactName: p.contact_name || undefined,
        companyName: p.company_name,
        subject: DEFAULT_OUTREACH_SUBJECT,
        body: DEFAULT_OUTREACH_BODY,
        claim_token: p.claim_token,
      });

      await sql`
        INSERT INTO partner_interactions (partner_id, kind, body, resend_id)
        VALUES (
          ${p.id},
          'email_sent',
          ${`Subject: ${DEFAULT_OUTREACH_SUBJECT}\n\n${DEFAULT_OUTREACH_BODY}`},
          ${result.id || null}
        )
      `;

      const newStatus = p.status === 'prospect' ? 'contacted' : p.status;
      await sql`
        UPDATE partners
        SET last_contacted_at = now(), status = ${newStatus}
        WHERE id = ${p.id}
      `;

      console.log(`  -> sent, resend_id=${result.id}, status -> ${newStatus}`);
    } catch (err) {
      console.error(`  -> FAILED for ${p.company_name}:`, err);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
