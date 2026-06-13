-- ============================================================
-- VoltSol Lead Marketplace — P0 Schema
-- Prefix: marketplace_  (isolated from public.* tables)
-- Run via: npm run db:migrate
-- ============================================================

-- Tenants: companies/contractors who buy leads
CREATE TABLE IF NOT EXISTS marketplace_tenants (
  id                      SERIAL PRIMARY KEY,
  name                    VARCHAR(200) NOT NULL,
  email                   VARCHAR(255) UNIQUE NOT NULL,
  stripe_customer_id      VARCHAR(100),
  is_owner                BOOLEAN NOT NULL DEFAULT false,
  owner_reserve_minutes   INT NOT NULL DEFAULT 15,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Users: login accounts, each belongs to a tenant
CREATE TABLE IF NOT EXISTS marketplace_users (
  id            SERIAL PRIMARY KEY,
  tenant_id     INT NOT NULL REFERENCES marketplace_tenants(id) ON DELETE CASCADE,
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role          VARCHAR(20) NOT NULL DEFAULT 'member',  -- owner | admin | member
  session_token VARCHAR(255),
  session_expires TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mp_users_tenant ON marketplace_users(tenant_id);
CREATE INDEX IF NOT EXISTS idx_mp_users_session ON marketplace_users(session_token) WHERE session_token IS NOT NULL;

-- Plans: recurring subscriptions and one-time credit packs
CREATE TABLE IF NOT EXISTS marketplace_plans (
  id                  SERIAL PRIMARY KEY,
  name                VARCHAR(100) NOT NULL,
  tier                VARCHAR(20) NOT NULL,   -- starter | pro | market | pack
  stripe_price_id     VARCHAR(100),
  stripe_product_id   VARCHAR(100),
  monthly_price_cents INT NOT NULL DEFAULT 0,
  monthly_credits     INT NOT NULL DEFAULT 0, -- granted per billing cycle (0 for packs)
  pack_credits        INT NOT NULL DEFAULT 0, -- one-time grant (0 for subscriptions)
  pack_price_cents    INT NOT NULL DEFAULT 0, -- one-time price (0 for subscriptions)
  max_markets         INT NOT NULL DEFAULT 1,
  is_active           BOOLEAN NOT NULL DEFAULT true,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Subscriptions: link tenant ↔ plan with Stripe state
CREATE TABLE IF NOT EXISTS marketplace_subscriptions (
  id                      SERIAL PRIMARY KEY,
  tenant_id               INT NOT NULL REFERENCES marketplace_tenants(id) ON DELETE CASCADE,
  plan_id                 INT NOT NULL REFERENCES marketplace_plans(id),
  stripe_subscription_id  VARCHAR(100) UNIQUE,
  stripe_customer_id      VARCHAR(100),
  status                  VARCHAR(30) NOT NULL DEFAULT 'active', -- active | canceled | past_due | trialing | paused
  current_period_end      TIMESTAMPTZ,
  cancel_at_period_end    BOOLEAN NOT NULL DEFAULT false,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mp_subs_tenant ON marketplace_subscriptions(tenant_id);
CREATE INDEX IF NOT EXISTS idx_mp_subs_stripe ON marketplace_subscriptions(stripe_subscription_id);

-- Credit ledger: append-only transaction log per tenant
CREATE TABLE IF NOT EXISTS marketplace_credit_ledger (
  id            SERIAL PRIMARY KEY,
  tenant_id     INT NOT NULL REFERENCES marketplace_tenants(id) ON DELETE CASCADE,
  delta         INT NOT NULL,           -- positive = credit, negative = debit
  reason        VARCHAR(50) NOT NULL,   -- subscription_grant | pack_purchase | claim_spend | refund | dispute_credit | manual
  reference_id  VARCHAR(100),           -- FK to transaction/claim id (string for flexibility)
  balance_after INT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mp_ledger_tenant ON marketplace_credit_ledger(tenant_id, created_at DESC);

-- Markets: geo + vertical slots that leads fall into
CREATE TABLE IF NOT EXISTS marketplace_markets (
  id                    SERIAL PRIMARY KEY,
  vertical              VARCHAR(50) NOT NULL DEFAULT 'solar',
  state                 VARCHAR(50) NOT NULL,
  region                VARCHAR(100) NOT NULL,  -- county
  city                  VARCHAR(100) NOT NULL,
  slug                  VARCHAR(200) UNIQUE NOT NULL,
  utility               VARCHAR(100),
  local_data_json       JSONB NOT NULL DEFAULT '{}',
  owner_reserve_minutes INT NOT NULL DEFAULT 15,
  is_active             BOOLEAN NOT NULL DEFAULT true,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mp_markets_slug ON marketplace_markets(slug);
CREATE INDEX IF NOT EXISTS idx_mp_markets_vertical_state ON marketplace_markets(vertical, state);

-- Leads: captured via marketplace forms with full consent record
CREATE TABLE IF NOT EXISTS marketplace_leads (
  id                    SERIAL PRIMARY KEY,
  market_id             INT REFERENCES marketplace_markets(id),
  vertical              VARCHAR(50) NOT NULL DEFAULT 'solar',
  first_name            VARCHAR(100) NOT NULL,
  last_name             VARCHAR(100) NOT NULL,
  email                 VARCHAR(255) NOT NULL,
  phone                 VARCHAR(30) NOT NULL,
  city                  VARCHAR(100),
  state                 VARCHAR(50),
  zip                   VARCHAR(10),
  owns_home             VARCHAR(30),
  monthly_bill          VARCHAR(30),
  score                 VARCHAR(20) NOT NULL DEFAULT 'standard', -- hot_lead | standard | low_priority
  credit_cost           INT NOT NULL DEFAULT 2,  -- credits required to claim (hot=3, std=2, low=1)
  source_page           VARCHAR(500),
  intent                VARCHAR(100),
  status                VARCHAR(20) NOT NULL DEFAULT 'available', -- available | owner_reserved | claimed | expired
  owner_reserved_until  TIMESTAMPTZ,
  consent_json          JSONB NOT NULL,  -- {version, timestamp, ip, wording, form_id}
  ip_address            VARCHAR(45),
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mp_leads_status ON marketplace_leads(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_mp_leads_market ON marketplace_leads(market_id);
CREATE INDEX IF NOT EXISTS idx_mp_leads_score ON marketplace_leads(score);

-- Lead claims: FCFS atomic claiming (FOR UPDATE SKIP LOCKED in claim tx)
CREATE TABLE IF NOT EXISTS marketplace_lead_claims (
  id            SERIAL PRIMARY KEY,
  lead_id       INT NOT NULL REFERENCES marketplace_leads(id),
  tenant_id     INT NOT NULL REFERENCES marketplace_tenants(id),
  claimed_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  credits_spent INT NOT NULL,
  status        VARCHAR(20) NOT NULL DEFAULT 'active', -- active | disputed | refunded
  outcome       VARCHAR(20),  -- open | won | lost
  notes         TEXT,
  UNIQUE(lead_id)  -- one claim per lead (enforces FCFS uniqueness)
);

CREATE INDEX IF NOT EXISTS idx_mp_claims_tenant ON marketplace_lead_claims(tenant_id, claimed_at DESC);
CREATE INDEX IF NOT EXISTS idx_mp_claims_lead ON marketplace_lead_claims(lead_id);

-- Transactions: Stripe payment records
CREATE TABLE IF NOT EXISTS marketplace_transactions (
  id                        SERIAL PRIMARY KEY,
  tenant_id                 INT NOT NULL REFERENCES marketplace_tenants(id),
  stripe_payment_intent_id  VARCHAR(100),
  stripe_invoice_id         VARCHAR(100),
  stripe_checkout_session_id VARCHAR(100),
  type                      VARCHAR(30) NOT NULL, -- subscription | credit_pack
  amount_cents              INT NOT NULL DEFAULT 0,
  credits_granted           INT NOT NULL DEFAULT 0,
  status                    VARCHAR(20) NOT NULL DEFAULT 'pending', -- pending | succeeded | failed | refunded
  metadata_json             JSONB NOT NULL DEFAULT '{}',
  created_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mp_transactions_tenant ON marketplace_transactions(tenant_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_mp_transactions_stripe_pi ON marketplace_transactions(stripe_payment_intent_id);

-- Disputes: lead quality challenges
CREATE TABLE IF NOT EXISTS marketplace_disputes (
  id          SERIAL PRIMARY KEY,
  claim_id    INT NOT NULL REFERENCES marketplace_lead_claims(id),
  tenant_id   INT NOT NULL REFERENCES marketplace_tenants(id),
  reason      VARCHAR(100) NOT NULL,  -- bad_phone | bad_email | duplicate | outside_area | other
  description TEXT,
  status      VARCHAR(20) NOT NULL DEFAULT 'open', -- open | approved | denied
  credits_refunded INT NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_mp_disputes_tenant ON marketplace_disputes(tenant_id);
CREATE INDEX IF NOT EXISTS idx_mp_disputes_claim ON marketplace_disputes(claim_id);

-- ============================================================
-- Seed: Tier ladder plans
-- ============================================================
INSERT INTO marketplace_plans (name, tier, monthly_price_cents, monthly_credits, pack_credits, pack_price_cents, max_markets)
VALUES
  ('Starter',       'starter', 9900,   20,  0,    0,    1),
  ('Pro',           'pro',     24900,  60,  0,    0,    3),
  ('Market Leader', 'market',  59900,  150, 0,    0,    10),
  ('10 Credits',    'pack',    0,      0,   10,   4900, 99),
  ('25 Credits',    'pack',    0,      0,   25,   9900, 99),
  ('50 Credits',    'pack',    0,      0,   50,   17900,99)
ON CONFLICT DO NOTHING;
