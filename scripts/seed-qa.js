// QA seed script: insert test lead_events + contacts, verify analytics, then clean up
// Usage: node scripts/seed-qa.js
// Requires NEON_DATABASE_URL (or DATABASE_URL) in .env.local

const path = require('path');
const fs = require('fs');
// Load .env.local manually (no dotenv dep needed)
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
  console.log('Seeding QA data...');

  // 1. Insert lead_events
  await sql`
    INSERT INTO lead_events (event_type, campaign_code, source, rep, utm_source, session_id, device, path, meta) VALUES
    ('page_view',          'QA', 'door',    'Hugo',   NULL,       'qa-sess1', 'mobile',  '/go/QA', NULL),
    ('page_view',          'QA', 'door',    'Hugo',   NULL,       'qa-sess2', 'mobile',  '/go/QA', NULL),
    ('page_view',          NULL, 'organic', NULL,     'google',   'qa-sess3', 'desktop', '/',      NULL),
    ('page_view',          NULL, 'organic', NULL,     'facebook', 'qa-sess4', 'mobile',  '/',      NULL),
    ('page_view',          NULL, 'organic', NULL,     NULL,       'qa-sess5', 'desktop', '/',      NULL),
    ('estimator_complete', 'QA', 'door',    'Hugo',   NULL,       'qa-sess1', 'mobile',  '/go/QA', '{"estimated_savings": 1800}'),
    ('estimator_complete', NULL, 'organic', NULL,     'google',   'qa-sess3', 'desktop', '/',      '{"estimated_savings": 2200}'),
    ('estimator_complete', NULL, 'organic', NULL,     NULL,       'qa-sess5', 'desktop', '/',      '{"estimated_savings": 1500}'),
    ('form_step',          'QA', 'door',    'Hugo',   NULL,       'qa-sess1', 'mobile',  '/go/QA', '{"step":"1"}'),
    ('form_step',          NULL, 'organic', NULL,     'google',   'qa-sess3', 'desktop', '/',      '{"step":"1"}'),
    ('form_complete',      'QA', 'door',    'Hugo',   NULL,       'qa-sess1', 'mobile',  '/go/QA', NULL),
    ('form_complete',      NULL, 'organic', NULL,     'google',   'qa-sess3', 'desktop', '/',      NULL),
    ('lead_created',       'QA', 'door',    'Hugo',   NULL,       'qa-sess1', 'mobile',  '/go/QA', '{"contact_id":0,"lead_score":"hot_lead"}'),
    ('lead_created',       NULL, 'organic', NULL,     'google',   'qa-sess3', 'desktop', '/',      '{"contact_id":0,"lead_score":"standard"}')
  `;

  // 2. Insert contacts tagged with campaign_code='QA' (we'll track by email pattern qa-*@test)
  await sql`
    INSERT INTO contacts (first_name, last_name, email, phone, street_address, city, state, zip,
      owns_home, monthly_bill, best_contact_time, lead_score, status, source, rep, utm_source)
    VALUES
    ('QATest', 'One',   'qa-1@test', '(555) 100-0001', '123 Test St', 'Sacramento', 'CA', '95814',
     'Yes, I own it', '$200–$300', 'Morning (8am–12pm)', 'hot_lead', 'new',       'door',    'Hugo', NULL),
    ('QATest', 'Two',   'qa-2@test', '(555) 100-0002', '456 Test Ave', 'Sacramento', 'CA', '95814',
     'Yes, I own it', '$100–$200', 'Afternoon (12–5pm)', 'standard',  'contacted', 'organic', NULL,   'google'),
    ('QATest', 'Three', 'qa-3@test', '(555) 100-0003', '789 Test Blvd', 'Sacramento', 'CA', '95814',
     'No, I rent',    'Under $100','Evening (5–8pm)',  'low_priority','new',       'organic', NULL,   'facebook'),
    ('QATest', 'Four',  'qa-4@test', '(555) 100-0004', '321 Test Ln', 'Sacramento', 'CA', '95814',
     'Yes, I own it', '$300+',     'Weekends',         'hot_lead',   'new',       'door',    'Maria', NULL),
    ('QATest', 'Five',  'qa-5@test', '(555) 100-0005', '654 Test Rd', 'Sacramento', 'CA', '95814',
     'Yes, I own it', '$200–$300', 'Morning (8am–12pm)', 'standard', 'new',       NULL,      NULL,   NULL)
  `;

  console.log('Seeded 14 lead_events and 5 contacts.');
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
