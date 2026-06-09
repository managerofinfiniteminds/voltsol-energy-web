// Cleanup QA test data
const path = require('path');
const fs = require('fs');
try {
  const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf8');
  for (const line of envFile.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    const v = t.slice(eq + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
} catch { /* .env.local absent */ }

const { neon } = require('@neondatabase/serverless');

const url = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
if (!url) { console.error('No DB URL found'); process.exit(1); }

const sql = neon(url);

async function main() {
  const evtResult = await sql`DELETE FROM lead_events WHERE session_id LIKE 'qa-sess%' RETURNING id`;
  const ctResult  = await sql`DELETE FROM contacts   WHERE email LIKE 'qa-%@test'       RETURNING id`;
  console.log(`Deleted ${evtResult.length} lead_events and ${ctResult.length} contacts.`);
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
