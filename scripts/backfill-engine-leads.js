#!/usr/bin/env node
/**
 * Backfill engine_leads from contacts + marketplace_leads
 *
 * Run: node scripts/backfill-engine-leads.js
 *
 * - Idempotent: dedupes by (email, phone, created_at), safe to re-run
 * - Preserves created_at from source
 * - Maps legacy enum values to canonical
 * - Does NOT delete or modify source rows
 */

const { readFileSync } = require('fs');
const { join } = require('path');

// Load .env.local manually
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

// ── Canonical enum mappers (replicated from engine-enums.ts for Node.js) ─────

function mapOwnsHome(raw) {
  if (!raw) return 'unsure';
  const normalized = raw.toLowerCase().trim();

  if (normalized.includes('own') || normalized === 'yes') return 'own';
  if (normalized.includes('rent') || normalized === 'no') return 'rent';
  if (normalized === 'own') return 'own';
  if (normalized === 'rent') return 'rent';

  return 'unsure';
}

function mapMonthlyBill(raw) {
  if (!raw) return '100_200';
  const normalized = raw.toLowerCase().trim();

  const numbers = normalized.match(/\d+/g);

  if (normalized.includes('under') || normalized.startsWith('<')) {
    return 'lt_100';
  }

  if (normalized.includes('+') || normalized.includes('over') || normalized.startsWith('>')) {
    return 'gt_300';
  }

  if (numbers && numbers.length >= 1) {
    const first = parseInt(numbers[0], 10);
    if (first < 100) return 'lt_100';
    if (first >= 100 && first < 200) return '100_200';
    if (first >= 200 && first < 300) return '200_300';
    if (first >= 300) return 'gt_300';
  }

  if (normalized === 'lt_100') return 'lt_100';
  if (normalized === '100_200') return '100_200';
  if (normalized === '200_300') return '200_300';
  if (normalized === 'gt_300') return 'gt_300';

  return '100_200';
}

function scoreLead(ownsHome, monthlyBill) {
  if (ownsHome === 'own' && (monthlyBill === '200_300' || monthlyBill === 'gt_300')) {
    return 'hot_lead';
  }
  if (ownsHome === 'rent') {
    return 'low_priority';
  }
  return 'standard';
}

// ── Main backfill function ───────────────────────────────────────────────────

async function backfill() {
  const databaseUrl = process.env.NEON_DATABASE_URL;
  if (!databaseUrl) {
    console.error('Error: NEON_DATABASE_URL is not set');
    process.exit(1);
  }

  const sql = neon(databaseUrl);

  console.log('Starting backfill to engine_leads...\n');

  const stats = {
    contacts: { scanned: 0, inserted: 0, skipped: 0 },
    marketplace: { scanned: 0, inserted: 0, skipped: 0 },
  };

  // ── Backfill from contacts ─────────────────────────────────────────────────
  console.log('[contacts] Fetching rows...');
  const contacts = await sql`SELECT * FROM contacts ORDER BY created_at`;
  stats.contacts.scanned = contacts.length;
  console.log(`[contacts] Found ${contacts.length} rows`);

  for (const row of contacts) {
    // Check for existing by (email, phone, created_at)
    const existing = await sql`
      SELECT id FROM engine_leads
      WHERE email = ${row.email.toLowerCase().trim()}
        AND phone = ${row.phone}
        AND created_at = ${row.created_at}
      LIMIT 1
    `;

    if (existing.length > 0) {
      stats.contacts.skipped++;
      continue;
    }

    // Map to canonical
    const ownsHome = mapOwnsHome(row.owns_home);
    const monthlyBill = mapMonthlyBill(row.monthly_bill);
    const score = scoreLead(ownsHome, monthlyBill);

    // Synthesize consent_json (contacts didn't have this field)
    const consentJson = {
      version: 'legacy',
      note: 'backfilled from contacts table',
      timestamp: row.created_at ? new Date(row.created_at).toISOString() : null,
    };

    // Map status (contacts used same values)
    const status = ['new', 'contacted', 'quoted', 'won', 'lost', 'stale'].includes(row.status)
      ? row.status
      : 'new';

    await sql`
      INSERT INTO engine_leads (
        tenant_id, vertical, source_consumer, source_page,
        first_name, last_name, email, phone,
        street_address, city, state, zip,
        owns_home, monthly_bill, intent, notes,
        score, status,
        consent_json,
        created_at, updated_at
      ) VALUES (
        1, 'solar', 'legacy_contacts', NULL,
        ${row.first_name}, ${row.last_name}, ${row.email.toLowerCase().trim()}, ${row.phone},
        ${row.street_address || null}, ${row.city || null}, ${row.state || null}, ${row.zip || null},
        ${ownsHome}, ${monthlyBill}, NULL, ${row.notes || null},
        ${score}, ${status},
        ${JSON.stringify(consentJson)},
        ${row.created_at}, ${row.updated_at || row.created_at}
      )
    `;

    stats.contacts.inserted++;
  }

  console.log(`[contacts] Done: ${stats.contacts.inserted} inserted, ${stats.contacts.skipped} skipped\n`);

  // ── Backfill from marketplace_leads ────────────────────────────────────────
  console.log('[marketplace_leads] Fetching rows...');
  const marketplaceLeads = await sql`SELECT * FROM marketplace_leads ORDER BY created_at`;
  stats.marketplace.scanned = marketplaceLeads.length;
  console.log(`[marketplace_leads] Found ${marketplaceLeads.length} rows`);

  for (const row of marketplaceLeads) {
    // Check for existing by (email, phone, created_at)
    const existing = await sql`
      SELECT id FROM engine_leads
      WHERE email = ${row.email.toLowerCase().trim()}
        AND phone = ${row.phone}
        AND created_at = ${row.created_at}
      LIMIT 1
    `;

    if (existing.length > 0) {
      stats.marketplace.skipped++;
      continue;
    }

    // Map to canonical
    const ownsHome = mapOwnsHome(row.owns_home);
    const monthlyBill = mapMonthlyBill(row.monthly_bill);
    const score = scoreLead(ownsHome, monthlyBill);

    // Carry consent_json if present, otherwise synthesize
    let consentJson;
    if (row.consent_json) {
      consentJson = typeof row.consent_json === 'string'
        ? JSON.parse(row.consent_json)
        : row.consent_json;
    } else {
      consentJson = {
        version: 'legacy',
        note: 'backfilled from marketplace_leads table',
        timestamp: row.created_at ? new Date(row.created_at).toISOString() : null,
      };
    }

    await sql`
      INSERT INTO engine_leads (
        tenant_id, vertical, source_consumer, source_page,
        first_name, last_name, email, phone,
        street_address, city, state, zip,
        owns_home, monthly_bill, intent, notes,
        score, status,
        consent_json, ip_address,
        created_at, updated_at
      ) VALUES (
        1, ${row.vertical || 'solar'}, 'legacy_marketplace', ${row.source_page || null},
        ${row.first_name}, ${row.last_name}, ${row.email.toLowerCase().trim()}, ${row.phone},
        NULL, ${row.city || null}, ${row.state || null}, ${row.zip || null},
        ${ownsHome}, ${monthlyBill}, ${row.intent || null}, NULL,
        ${score}, 'new',
        ${JSON.stringify(consentJson)}, ${row.ip_address || null},
        ${row.created_at}, ${row.updated_at || row.created_at}
      )
    `;

    stats.marketplace.inserted++;
  }

  console.log(`[marketplace_leads] Done: ${stats.marketplace.inserted} inserted, ${stats.marketplace.skipped} skipped\n`);

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log('═══════════════════════════════════════════════════════════');
  console.log('BACKFILL COMPLETE');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`contacts:          ${stats.contacts.scanned} scanned, ${stats.contacts.inserted} inserted, ${stats.contacts.skipped} skipped`);
  console.log(`marketplace_leads: ${stats.marketplace.scanned} scanned, ${stats.marketplace.inserted} inserted, ${stats.marketplace.skipped} skipped`);
  console.log('═══════════════════════════════════════════════════════════');
}

backfill().catch(err => {
  console.error('Backfill failed:', err);
  process.exit(1);
});
