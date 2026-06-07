#!/usr/bin/env node
// Run: node scripts/migrate.js
// Requires NEON_DATABASE_URL in .env.local or environment

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

async function migrate() {
  const databaseUrl = process.env.NEON_DATABASE_URL;
  if (!databaseUrl) {
    console.error('Error: NEON_DATABASE_URL is not set');
    process.exit(1);
  }

  const sql = neon(databaseUrl);
  const sqlFile = readFileSync(join(__dirname, '..', 'sql', '001_init.sql'), 'utf8');

  // Split on semicolons and run each statement
  const statements = sqlFile
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  console.log(`Running ${statements.length} SQL statements...`);

  for (const statement of statements) {
    try {
      await sql(statement);
      console.log('  OK:', statement.slice(0, 60).replace(/\n/g, ' ') + '...');
    } catch (err) {
      console.error('  FAIL:', statement.slice(0, 60));
      console.error('  Error:', err.message);
      process.exit(1);
    }
  }

  console.log('\nMigration complete!');
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
