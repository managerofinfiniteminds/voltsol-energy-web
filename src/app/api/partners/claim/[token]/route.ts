export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Context {
  params: Promise<{ token: string }>;
}

// Simple IP-based rate limiting (20 submissions per hour per IP)
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;

  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter(t => t > oneHourAgo);

  if (recentTimestamps.length >= 20) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

/**
 * GET: Fetch partner details by claim token (for pre-filling the claim form)
 */
export async function GET(req: NextRequest, context: Context) {
  const { token } = await context.params;

  const rows = await sql`
    SELECT id, company_name, category, website_url, logo_url, blurb, claim_token_used_at
    FROM partners
    WHERE claim_token = ${token}
  `;

  if (rows.length === 0) {
    return NextResponse.json({ error: 'Invalid claim link' }, { status: 404 });
  }

  const partner = rows[0] as {
    id: number;
    company_name: string;
    category: string | null;
    website_url: string | null;
    logo_url: string | null;
    blurb: string | null;
    claim_token_used_at: string | null;
  };

  // Check if already used
  if (partner.claim_token_used_at) {
    return NextResponse.json(
      { error: 'This claim link has already been used' },
      { status: 410 }
    );
  }

  return NextResponse.json({
    partner: {
      company_name: partner.company_name,
      category: partner.category,
      website_url: partner.website_url,
      logo_url: partner.logo_url,
      blurb: partner.blurb,
    },
  });
}

/**
 * POST: Submit partner claim (public, unauthenticated)
 */
export async function POST(req: NextRequest, context: Context) {
  const { token } = await context.params;

  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ||
             req.headers.get('x-real-ip') ||
             'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  const body = (await req.json()) as {
    company_name: string;
    category?: string;
    website_url?: string;
    logo_url?: string;
    blurb?: string;
    link_target_url?: string;
    honeypot?: string;
  };

  // Honeypot check (basic anti-spam)
  if (body.honeypot) {
    return NextResponse.json({ success: true }); // Silent success for bots
  }

  // Validate required fields
  if (!body.company_name?.trim()) {
    return NextResponse.json(
      { error: 'Company name is required' },
      { status: 400 }
    );
  }

  // Verify claim token exists and hasn't been used
  const partnerRows = await sql`
    SELECT id, claim_token_used_at
    FROM partners
    WHERE claim_token = ${token}
  `;

  if (partnerRows.length === 0) {
    return NextResponse.json({ error: 'Invalid claim link' }, { status: 404 });
  }

  const partner = partnerRows[0] as {
    id: number;
    claim_token_used_at: string | null;
  };

  if (partner.claim_token_used_at) {
    return NextResponse.json(
      { error: 'This claim link has already been used' },
      { status: 410 }
    );
  }

  // Update partner with claimed data and mark as pending_approval
  await sql`
    UPDATE partners
    SET
      company_name = ${body.company_name.trim()},
      category = ${body.category?.trim() || null},
      website_url = ${body.website_url?.trim() || null},
      logo_url = ${body.logo_url?.trim() || null},
      blurb = ${body.blurb?.trim() || null},
      link_target_url = ${body.link_target_url?.trim() || null},
      status = 'pending_approval',
      claim_token_used_at = now()
    WHERE id = ${partner.id}
  `;

  // Log the claim interaction
  await sql`
    INSERT INTO partner_interactions (partner_id, kind, body)
    VALUES (
      ${partner.id},
      'claim_submitted',
      ${`Partner claimed their profile via self-serve form. Link target: ${body.link_target_url || '(not provided)'}`}
    )
  `;

  return NextResponse.json({ success: true });
}
