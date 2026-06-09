#!/usr/bin/env node
// Run: node scripts/migrate.js
// Requires NEON_DATABASE_URL in .env.local or environment

const { readFileSync, readdirSync } = require('fs');
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
  const sqlDir = join(__dirname, '..', 'sql');
  // Run all .sql files in sorted order (001_init.sql, 002_lead_engine.sql, ...)
  const sqlFiles = readdirSync(sqlDir)
    .filter(f => f.endsWith('.sql'))
    .sort();

  for (const filename of sqlFiles) {
    const filePath = join(sqlDir, filename);
    const sqlContent = readFileSync(filePath, 'utf8');

    // Split on semicolons and run each statement
    const statements = sqlContent
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    console.log(`\n[${filename}] Running ${statements.length} statements...`);

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
  }

  console.log('\nAll migrations complete!');
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
