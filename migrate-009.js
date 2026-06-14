const { sql } = require('./src/lib/db');

async function migrate() {
  try {
    console.log('Running migration 009_admin_auth...');
    
    // Create tables
    await sql`CREATE TABLE IF NOT EXISTS admin_users (
      id              SERIAL PRIMARY KEY,
      email           TEXT UNIQUE NOT NULL,
      name            TEXT,
      is_active       BOOLEAN NOT NULL DEFAULT true,
      session_token   TEXT,
      session_expires TIMESTAMPTZ,
      last_login_at   TIMESTAMPTZ,
      created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
      created_by      TEXT
    )`;
    console.log('✓ Created admin_users table');

    await sql`CREATE INDEX IF NOT EXISTS idx_admin_users_session_token ON admin_users(session_token) WHERE session_token IS NOT NULL`;
    console.log('✓ Created session_token index');

    await sql`CREATE TABLE IF NOT EXISTS admin_login_tokens (
      id         SERIAL PRIMARY KEY,
      email      TEXT NOT NULL,
      token      TEXT UNIQUE NOT NULL,
      expires_at TIMESTAMPTZ NOT NULL,
      used_at    TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
    console.log('✓ Created admin_login_tokens table');

    await sql`CREATE INDEX IF NOT EXISTS idx_admin_login_tokens_token ON admin_login_tokens(token)`;
    console.log('✓ Created token index');

    await sql`CREATE INDEX IF NOT EXISTS idx_admin_login_tokens_email ON admin_login_tokens(email)`;
    console.log('✓ Created email index');

    await sql`INSERT INTO admin_users (email, name)
    VALUES ('hugo@voltsolenergy.com', 'Hugo'), ('wayne@greenbowtie.com', 'Wayne')
    ON CONFLICT (email) DO NOTHING`;
    console.log('✓ Seeded admin users');

    const users = await sql`SELECT email FROM admin_users ORDER BY created_at`;
    console.log(`\n✅ Migration complete! Admin users: ${users.map(u => u.email).join(', ')}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
  }
}

migrate();
