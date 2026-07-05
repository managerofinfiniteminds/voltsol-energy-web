export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { sendPartnerOutreachEmail } from '@/lib/email';

interface Context {
  params: Promise<{ id: string }>;
}

/**
 * POST: Send partner outreach email
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

  const body = (await req.json()) as {
    subject: string;
    body: string;
  };

  if (!body.subject?.trim() || !body.body?.trim()) {
    return NextResponse.json(
      { error: 'Subject and body are required' },
      { status: 400 }
    );
  }

  // Fetch partner details
  const partnerRows = await sql`
    SELECT company_name, contact_name, contact_email, claim_token, status
    FROM partners
    WHERE id = ${partnerId}
  `;

  if (partnerRows.length === 0) {
    return NextResponse.json({ error: 'Partner not found' }, { status: 404 });
  }

  const partner = partnerRows[0] as {
    company_name: string;
    contact_name: string | null;
    contact_email: string | null;
    claim_token: string;
    status: string;
  };

  if (!partner.contact_email) {
    return NextResponse.json(
      { error: 'Partner has no contact email' },
      { status: 400 }
    );
  }

  // Send the email
  try {
    const result = await sendPartnerOutreachEmail({
      email: partner.contact_email,
      contactName: partner.contact_name || undefined,
      companyName: partner.company_name,
      subject: body.subject,
      body: body.body,
      claim_token: partner.claim_token,
    });

    // Log the interaction
    await sql`
      INSERT INTO partner_interactions (partner_id, kind, body, resend_id)
      VALUES (
        ${partnerId},
        'email_sent',
        ${`Subject: ${body.subject}\n\n${body.body}`},
        ${result.id || null}
      )
    `;

    // Update last_contacted_at and advance status if currently 'prospect'
    const newStatus = partner.status === 'prospect' ? 'contacted' : partner.status;
    await sql`
      UPDATE partners
      SET last_contacted_at = now(), status = ${newStatus}
      WHERE id = ${partnerId}
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send partner outreach email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
