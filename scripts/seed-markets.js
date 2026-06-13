#!/usr/bin/env node
// Seed marketplace_markets with NorCal solar market data.
// Run: node scripts/seed-markets.js
// Requires NEON_DATABASE_URL (or DATABASE_URL) in .env.local or environment.
// Safe to re-run — uses INSERT ... ON CONFLICT DO NOTHING.

const { readFileSync } = require('fs');
const { join } = require('path');

// Load .env.local manually (same pattern as migrate.js)
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

// ── Market data (mirrors src/lib/market-data.ts) ──────────────────────────
// Kept as plain JS so this script has no TS compilation dependency.

const PGE = {
  avgMonthlyBillEstimate: 220,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1800,
  avgPaybackYearsEstimate: 7,
  peakSunHoursEstimate: 5.2,
  disclaimer: 'These figures are estimates only and do not constitute a guarantee of savings. Actual results vary based on usage, system size, shading, and utility rate changes.',
};

const SMUD = {
  avgMonthlyBillEstimate: 160,
  avgSystemSizeKwEstimate: 6.0,
  avgSavingsYear1Estimate: 1300,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 5.2,
  disclaimer: 'These figures are estimates only and do not constitute a guarantee of savings. Actual results vary based on usage, system size, shading, and utility rate changes.',
};

const MARKETS = [
  // Placer County
  { vertical: 'solar', state: 'california', region: 'Placer County', regionSlug: 'placer-county', city: 'Roseville',  citySlug: 'roseville',  utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 235 } },
  { vertical: 'solar', state: 'california', region: 'Placer County', regionSlug: 'placer-county', city: 'Rocklin',    citySlug: 'rocklin',    utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 225 } },
  { vertical: 'solar', state: 'california', region: 'Placer County', regionSlug: 'placer-county', city: 'Lincoln',    citySlug: 'lincoln',    utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Placer County', regionSlug: 'placer-county', city: 'Auburn',     citySlug: 'auburn',     utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Placer County', regionSlug: 'placer-county', city: 'Loomis',     citySlug: 'loomis',     utility: 'PG&E', localData: PGE },
  // Sacramento County
  { vertical: 'solar', state: 'california', region: 'Sacramento County', regionSlug: 'sacramento-county', city: 'Sacramento',     citySlug: 'sacramento',     utility: 'SMUD', localData: SMUD },
  { vertical: 'solar', state: 'california', region: 'Sacramento County', regionSlug: 'sacramento-county', city: 'Elk Grove',      citySlug: 'elk-grove',      utility: 'SMUD', localData: SMUD },
  { vertical: 'solar', state: 'california', region: 'Sacramento County', regionSlug: 'sacramento-county', city: 'Rancho Cordova', citySlug: 'rancho-cordova', utility: 'SMUD', localData: SMUD },
  { vertical: 'solar', state: 'california', region: 'Sacramento County', regionSlug: 'sacramento-county', city: 'Citrus Heights', citySlug: 'citrus-heights', utility: 'SMUD', localData: SMUD },
  { vertical: 'solar', state: 'california', region: 'Sacramento County', regionSlug: 'sacramento-county', city: 'Folsom',         citySlug: 'folsom',         utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 245 } },
  // El Dorado County
  { vertical: 'solar', state: 'california', region: 'El Dorado County', regionSlug: 'el-dorado-county', city: 'El Dorado Hills', citySlug: 'el-dorado-hills', utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 260 } },
  { vertical: 'solar', state: 'california', region: 'El Dorado County', regionSlug: 'el-dorado-county', city: 'Cameron Park',    citySlug: 'cameron-park',    utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 240 } },
  { vertical: 'solar', state: 'california', region: 'El Dorado County', regionSlug: 'el-dorado-county', city: 'Shingle Springs', citySlug: 'shingle-springs', utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'El Dorado County', regionSlug: 'el-dorado-county', city: 'Placerville',     citySlug: 'placerville',     utility: 'PG&E', localData: PGE },
  // Nevada County
  { vertical: 'solar', state: 'california', region: 'Nevada County', regionSlug: 'nevada-county', city: 'Grass Valley', citySlug: 'grass-valley', utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Nevada County', regionSlug: 'nevada-county', city: 'Nevada City',  citySlug: 'nevada-city',  utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Nevada County', regionSlug: 'nevada-county', city: 'Truckee',      citySlug: 'truckee',      utility: 'PG&E', localData: { ...PGE, peakSunHoursEstimate: 4.8 } },
  // Yolo County
  { vertical: 'solar', state: 'california', region: 'Yolo County', regionSlug: 'yolo-county', city: 'Davis',           citySlug: 'davis',           utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Yolo County', regionSlug: 'yolo-county', city: 'Woodland',        citySlug: 'woodland',        utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Yolo County', regionSlug: 'yolo-county', city: 'West Sacramento', citySlug: 'west-sacramento', utility: 'PG&E', localData: PGE },
  // Solano County
  { vertical: 'solar', state: 'california', region: 'Solano County', regionSlug: 'solano-county', city: 'Fairfield', citySlug: 'fairfield', utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Solano County', regionSlug: 'solano-county', city: 'Vacaville', citySlug: 'vacaville', utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 215 } },
  { vertical: 'solar', state: 'california', region: 'Solano County', regionSlug: 'solano-county', city: 'Vallejo',   citySlug: 'vallejo',   utility: 'PG&E', localData: PGE },
  { vertical: 'solar', state: 'california', region: 'Solano County', regionSlug: 'solano-county', city: 'Benicia',   citySlug: 'benicia',   utility: 'PG&E', localData: PGE },
];

async function seed() {
  const databaseUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('Error: NEON_DATABASE_URL or DATABASE_URL is not set');
    process.exit(1);
  }

  const sql = neon(databaseUrl);
  let inserted = 0;
  let skipped = 0;

  for (const m of MARKETS) {
    const slug = `${m.vertical}/${m.state}/${m.regionSlug}/${m.citySlug}`;
    try {
      const rows = await sql`
        INSERT INTO marketplace_markets
          (vertical, state, region, city, slug, utility, local_data_json, owner_reserve_minutes, is_active)
        VALUES
          (${m.vertical}, ${m.state}, ${m.region}, ${m.city}, ${slug},
           ${m.utility}, ${JSON.stringify(m.localData)}, 15, true)
        ON CONFLICT (slug) DO NOTHING
        RETURNING id
      `;
      if (rows.length > 0) {
        console.log(`  INSERTED [${rows[0].id}] ${slug}`);
        inserted++;
      } else {
        console.log(`  SKIPPED (exists) ${slug}`);
        skipped++;
      }
    } catch (err) {
      console.error(`  FAIL ${slug}:`, err.message);
      process.exit(1);
    }
  }

  console.log(`\nDone. ${inserted} inserted, ${skipped} already existed.`);
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
