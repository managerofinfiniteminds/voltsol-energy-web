#!/usr/bin/env node
// Seed demo leads into marketplace_leads for end-to-end testing.
// Run: node scripts/seed-demo-leads.js
// Requires NEON_DATABASE_URL (or DATABASE_URL) in .env.local or environment.
// Safe to re-run — checks for existing demo leads before inserting.
// These are synthetic test records; all contact details are fictional.

const { readFileSync } = require('fs');
const { join } = require('path');

// Load .env.local manually (same pattern as other seed scripts)
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
  // .env.local not present — use existing env
}

const { neon } = require('@neondatabase/serverless');

// Canonical consent wording (mirrors ConsentCheckbox.tsx CONSENT_WORDING)
const CONSENT_WORDING =
  'By submitting this form, I authorize VoltSol Energy, LLC and its network of licensed solar ' +
  'installation partners ("Partners") to contact me regarding solar energy products and services ' +
  'at the phone number and email address I provided above. I understand that: (1) my information ' +
  'may be shared with one (1) licensed solar contractor serving my area who has purchased this lead ' +
  "through VoltSol's contractor marketplace; (2) Partners may contact me by phone (including " +
  'autodialed or pre-recorded calls), text message, or email; (3) my consent is not required as ' +
  'a condition of any purchase or service; and (4) I may opt out at any time by replying STOP to ' +
  'any text message or contacting VoltSol at support@voltsolenergy.com. Message and data rates may apply.';

// Demo lead fixtures — synthetic data, all fictional
const DEMO_LEADS = [
  // Hot leads (owns home + high bill) — credit_cost 3
  {
    first_name: 'Patricia',
    last_name: 'Hollingsworth',
    email: 'demo.patricia@example-test.com',
    phone: '(916) 555-0101',
    city: 'Roseville',
    state: 'CA',
    zip: '95661',
    owns_home: 'yes',
    monthly_bill: '$300+',
    score: 'hot_lead',
    credit_cost: 3,
    source_page: '/market/solar/california/placer-county/roseville',
    intent: 'get_quote',
    city_slug: 'roseville',
    region_slug: 'placer-county',
  },
  {
    first_name: 'Marcus',
    last_name: 'Delaney',
    email: 'demo.marcus@example-test.com',
    phone: '(916) 555-0102',
    city: 'El Dorado Hills',
    state: 'CA',
    zip: '95762',
    owns_home: 'yes',
    monthly_bill: '$250-$300',
    score: 'hot_lead',
    credit_cost: 3,
    source_page: '/market/solar/california/el-dorado-county/el-dorado-hills',
    intent: 'get_quote',
    city_slug: 'el-dorado-hills',
    region_slug: 'el-dorado-county',
  },
  {
    first_name: 'Sandra',
    last_name: 'Kowalczyk',
    email: 'demo.sandra@example-test.com',
    phone: '(530) 555-0103',
    city: 'Folsom',
    state: 'CA',
    zip: '95630',
    owns_home: 'yes',
    monthly_bill: '$200-$250',
    score: 'hot_lead',
    credit_cost: 3,
    source_page: '/market/solar/california/sacramento-county/folsom',
    intent: 'get_quote',
    city_slug: 'folsom',
    region_slug: 'sacramento-county',
  },
  // Standard leads — credit_cost 2
  {
    first_name: 'Trevor',
    last_name: 'Nguyen',
    email: 'demo.trevor@example-test.com',
    phone: '(916) 555-0104',
    city: 'Sacramento',
    state: 'CA',
    zip: '95814',
    owns_home: 'yes',
    monthly_bill: '$150-$200',
    score: 'standard',
    credit_cost: 2,
    source_page: '/market/solar/california/sacramento-county/sacramento',
    intent: 'get_quote',
    city_slug: 'sacramento',
    region_slug: 'sacramento-county',
  },
  {
    first_name: 'Alicia',
    last_name: 'Fontaine',
    email: 'demo.alicia@example-test.com',
    phone: '(916) 555-0105',
    city: 'Rocklin',
    state: 'CA',
    zip: '95765',
    owns_home: 'no',
    monthly_bill: '$200-$250',
    score: 'standard',
    credit_cost: 2,
    source_page: '/market/solar/california/placer-county/rocklin',
    intent: 'learn_more',
    city_slug: 'rocklin',
    region_slug: 'placer-county',
  },
  {
    first_name: 'Derek',
    last_name: 'Okonkwo',
    email: 'demo.derek@example-test.com',
    phone: '(530) 555-0106',
    city: 'Grass Valley',
    state: 'CA',
    zip: '95945',
    owns_home: 'yes',
    monthly_bill: '$150-$200',
    score: 'standard',
    credit_cost: 2,
    source_page: '/market/solar/california/nevada-county/grass-valley',
    intent: 'get_quote',
    city_slug: 'grass-valley',
    region_slug: 'nevada-county',
  },
  // Low priority leads — credit_cost 1
  {
    first_name: 'Wendy',
    last_name: 'Tran',
    email: 'demo.wendy@example-test.com',
    phone: '(707) 555-0107',
    city: 'Fairfield',
    state: 'CA',
    zip: '94533',
    owns_home: 'unsure',
    monthly_bill: 'Under $150',
    score: 'low_priority',
    credit_cost: 1,
    source_page: '/market/solar/california/solano-county/fairfield',
    intent: 'learn_more',
    city_slug: 'fairfield',
    region_slug: 'solano-county',
  },
  {
    first_name: 'James',
    last_name: 'Albright',
    email: 'demo.james@example-test.com',
    phone: '(530) 555-0108',
    city: 'Davis',
    state: 'CA',
    zip: '95616',
    owns_home: 'no',
    monthly_bill: 'Under $150',
    score: 'low_priority',
    credit_cost: 1,
    source_page: '/market/solar/california/yolo-county/davis',
    intent: 'learn_more',
    city_slug: 'davis',
    region_slug: 'yolo-county',
  },
];

function buildConsentJson() {
  return JSON.stringify({
    version: '1.0',
    form_id: 'market-solar-v1',
    timestamp: new Date().toISOString(),
    ip: '127.0.0.1',
    wording: CONSENT_WORDING,
    note: 'DEMO_SEED — synthetic test record',
  });
}

async function seed() {
  const databaseUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('Error: NEON_DATABASE_URL or DATABASE_URL is not set');
    process.exit(1);
  }

  const sql = neon(databaseUrl);

  console.log('Seeding demo leads for end-to-end testing...\n');

  let inserted = 0;
  let skipped = 0;

  for (const lead of DEMO_LEADS) {
    // Check if this demo lead already exists (by email)
    const existing = await sql`
      SELECT id FROM marketplace_leads WHERE email = ${lead.email} LIMIT 1
    `;
    if (existing.length > 0) {
      console.log(`  SKIPPED (exists) ${lead.first_name} ${lead.last_name} <${lead.email}>`);
      skipped++;
      continue;
    }

    // Look up market_id from slug
    const slug = `solar/california/${lead.region_slug}/${lead.city_slug}`;
    const market = await sql`
      SELECT id FROM marketplace_markets WHERE slug = ${slug} LIMIT 1
    `;
    const marketId = market.length > 0 ? market[0].id : null;

    // owner_reserved_until: hot leads start in owner reserve window (already expired = available now for testing)
    // Set to past so they're immediately available in the pool
    const ownerReservedUntil = new Date(Date.now() - 60 * 1000).toISOString(); // 1 minute ago

    await sql`
      INSERT INTO marketplace_leads (
        market_id, vertical, first_name, last_name, email, phone,
        city, state, zip, owns_home, monthly_bill,
        score, credit_cost, source_page, intent, status,
        owner_reserved_until, consent_json, ip_address
      ) VALUES (
        ${marketId}, 'solar', ${lead.first_name}, ${lead.last_name},
        ${lead.email}, ${lead.phone}, ${lead.city}, ${lead.state}, ${lead.zip},
        ${lead.owns_home}, ${lead.monthly_bill}, ${lead.score}, ${lead.credit_cost},
        ${lead.source_page}, ${lead.intent}, 'available',
        ${ownerReservedUntil}, ${buildConsentJson()}, '127.0.0.1'
      )
    `;

    console.log(`  INSERTED [${lead.score}] ${lead.first_name} ${lead.last_name} — ${lead.city} (${lead.credit_cost}cr)`);
    inserted++;
  }

  console.log(`\nDone. ${inserted} inserted, ${skipped} already existed.`);
  console.log('\nThese are synthetic test records (all @example-test.com emails).');
  console.log('Navigate to /app/pool to see them in the lead pool.');
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
