import { sql } from '@/lib/db';

export type LeadScore = 'hot_lead' | 'standard' | 'low_priority';
export type SubscriptionTier = 'starter' | 'pro' | 'market' | 'none';

export interface PoolLead {
  id: number;
  market_id: number | null;
  vertical: string;
  city: string | null;
  state: string | null;
  owns_home: string | null;
  monthly_bill: string | null;
  score: LeadScore;
  credit_cost: number;
  source_page: string | null;
  intent: string | null;
  status: string;
  owner_reserved_until: string | null;
  created_at: string;
  // from JOIN
  market_city: string | null;
  market_region: string | null;
  market_slug: string | null;
}

export interface ClaimedLead extends PoolLead {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  claimed_at: string;
  credits_spent: number;
  claim_id: number;
  outcome: string | null;
  notes: string | null;
}

/** Get tenant's active subscription tier */
export async function getTenantTier(tenantId: number): Promise<SubscriptionTier> {
  try {
    const rows = await sql`
      SELECT p.tier
      FROM marketplace_subscriptions s
      JOIN marketplace_plans p ON p.id = s.plan_id
      WHERE s.tenant_id = ${tenantId}
        AND s.status IN ('active', 'trialing')
      ORDER BY s.created_at DESC
      LIMIT 1
    `;
    if (!rows.length) return 'none';
    return rows[0].tier as SubscriptionTier;
  } catch {
    return 'none';
  }
}

/** Get total credit balance for a tenant (sum of all ledger entries) */
export async function getTenantCreditBalance(tenantId: number): Promise<number> {
  const rows = await sql`
    SELECT COALESCE(SUM(delta), 0)::int AS balance
    FROM marketplace_credit_ledger
    WHERE tenant_id = ${tenantId}
  `;
  return rows[0]?.balance ?? 0;
}

/**
 * Get available leads from the pool.
 * - Respects owner reserve window (owner sees all; others see only after window expires)
 * - Tier gating: hot_lead only accessible to Pro / Market Leader
 * - Contact info intentionally excluded — revealed only after claiming
 */
export async function getAvailableLeads(options: {
  tenantId: number;
  isOwner: boolean;
  tier: SubscriptionTier;
  vertical?: string;
  limit?: number;
  offset?: number;
}): Promise<PoolLead[]> {
  const { isOwner, tier, vertical = 'solar', limit = 25, offset = 0 } = options;
  const canSeeHot = isOwner || tier === 'pro' || tier === 'market';

  if (isOwner) {
    // Owner sees all leads regardless of status (full visibility)
    return sql`
      SELECT
        l.id, l.market_id, l.vertical, l.city, l.state,
        l.owns_home, l.monthly_bill, l.score, l.credit_cost,
        l.source_page, l.intent, l.status, l.owner_reserved_until, l.created_at,
        m.city AS market_city, m.region AS market_region, m.slug AS market_slug
      FROM marketplace_leads l
      LEFT JOIN marketplace_markets m ON m.id = l.market_id
      WHERE l.vertical = ${vertical}
      ORDER BY l.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    ` as Promise<PoolLead[]>;
  }

  if (canSeeHot) {
    // Pro / Market Leader: all unclaimed leads after reserve window
    return sql`
      SELECT
        l.id, l.market_id, l.vertical, l.city, l.state,
        l.owns_home, l.monthly_bill, l.score, l.credit_cost,
        l.source_page, l.intent, l.status, l.owner_reserved_until, l.created_at,
        m.city AS market_city, m.region AS market_region, m.slug AS market_slug
      FROM marketplace_leads l
      LEFT JOIN marketplace_markets m ON m.id = l.market_id
      LEFT JOIN marketplace_lead_claims c ON c.lead_id = l.id
      WHERE l.vertical = ${vertical}
        AND c.id IS NULL
        AND (
          l.status = 'available'
          OR (l.status = 'owner_reserved' AND l.owner_reserved_until < NOW())
        )
      ORDER BY
        CASE l.score WHEN 'hot_lead' THEN 1 WHEN 'standard' THEN 2 ELSE 3 END,
        l.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    ` as Promise<PoolLead[]>;
  }

  // Starter tier: exclude hot_lead
  return sql`
    SELECT
      l.id, l.market_id, l.vertical, l.city, l.state,
      l.owns_home, l.monthly_bill, l.score, l.credit_cost,
      l.source_page, l.intent, l.status, l.owner_reserved_until, l.created_at,
      m.city AS market_city, m.region AS market_region, m.slug AS market_slug
    FROM marketplace_leads l
    LEFT JOIN marketplace_markets m ON m.id = l.market_id
    LEFT JOIN marketplace_lead_claims c ON c.lead_id = l.id
    WHERE l.vertical = ${vertical}
      AND l.score != 'hot_lead'
      AND c.id IS NULL
      AND (
        l.status = 'available'
        OR (l.status = 'owner_reserved' AND l.owner_reserved_until < NOW())
      )
    ORDER BY l.created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  ` as Promise<PoolLead[]>;
}

/** Get claimed leads for a tenant (includes contact info) */
export async function getTenantClaimedLeads(tenantId: number, limit = 50): Promise<ClaimedLead[]> {
  return sql`
    SELECT
      l.id, l.market_id, l.vertical, l.city, l.state,
      l.first_name, l.last_name, l.email, l.phone,
      l.owns_home, l.monthly_bill, l.score, l.credit_cost,
      l.source_page, l.intent, l.status, l.owner_reserved_until, l.created_at,
      m.city AS market_city, m.region AS market_region, m.slug AS market_slug,
      c.id AS claim_id, c.claimed_at, c.credits_spent, c.outcome, c.notes
    FROM marketplace_lead_claims c
    JOIN marketplace_leads l ON l.id = c.lead_id
    LEFT JOIN marketplace_markets m ON m.id = l.market_id
    WHERE c.tenant_id = ${tenantId}
    ORDER BY c.claimed_at DESC
    LIMIT ${limit}
  ` as Promise<ClaimedLead[]>;
}

/**
 * Atomic FCFS lead claim with credit deduction.
 *
 * Uses a single CTE to:
 *   1. Lock the lead row (FOR UPDATE SKIP LOCKED — concurrent tx skips and fails gracefully)
 *   2. Check tenant credit balance
 *   3. Insert claim record (ON CONFLICT DO NOTHING as final guard)
 *   4. Update lead status → claimed
 *   5. Append debit to credit_ledger
 *
 * All five steps succeed or none do (Postgres CTE is a single statement).
 */
export async function claimLead(
  tenantId: number,
  leadId: number
): Promise<
  | { ok: true; claimId: number; creditsSpent: number; balanceAfter: number }
  | { ok: false; reason: string }
> {
  try {
    const rows = await sql`
      WITH
      locked_lead AS (
        SELECT id, credit_cost
        FROM marketplace_leads
        WHERE id = ${leadId}
          AND (
            status = 'available'
            OR (status = 'owner_reserved' AND owner_reserved_until < NOW())
          )
        FOR UPDATE SKIP LOCKED
      ),
      current_balance AS (
        SELECT COALESCE(SUM(delta), 0)::int AS bal
        FROM marketplace_credit_ledger
        WHERE tenant_id = ${tenantId}
      ),
      insert_claim AS (
        INSERT INTO marketplace_lead_claims (lead_id, tenant_id, credits_spent, status)
        SELECT ll.id, ${tenantId}, ll.credit_cost, 'active'
        FROM locked_lead ll, current_balance cb
        WHERE cb.bal >= ll.credit_cost
        ON CONFLICT (lead_id) DO NOTHING
        RETURNING id, credits_spent
      ),
      update_lead AS (
        UPDATE marketplace_leads
        SET status = 'claimed', updated_at = NOW()
        WHERE id = (SELECT id FROM insert_claim)
      ),
      insert_ledger AS (
        INSERT INTO marketplace_credit_ledger (tenant_id, delta, reason, reference_id, balance_after)
        SELECT
          ${tenantId},
          -(ic.credits_spent),
          'claim_spend',
          ic.id::text,
          cb.bal - ic.credits_spent
        FROM insert_claim ic, current_balance cb
        RETURNING balance_after
      )
      SELECT
        (SELECT id   FROM locked_lead)         AS lead_locked,
        (SELECT bal  FROM current_balance)     AS balance,
        (SELECT credit_cost FROM locked_lead)  AS credit_cost,
        (SELECT id   FROM insert_claim)        AS claim_id,
        (SELECT credits_spent FROM insert_claim) AS credits_spent,
        (SELECT balance_after FROM insert_ledger) AS balance_after
    `;

    const row = rows[0];
    if (!row) return { ok: false, reason: 'Unexpected error in claim transaction' };

    if (!row.lead_locked) {
      // Lead didn't match the availability filter — investigate why
      const lead = await sql`SELECT id, status, owner_reserved_until FROM marketplace_leads WHERE id = ${leadId}`;
      if (!lead.length) return { ok: false, reason: 'Lead not found' };
      const s = lead[0].status;
      if (s === 'claimed') return { ok: false, reason: 'Lead has already been claimed' };
      if (s === 'owner_reserved') {
        return { ok: false, reason: 'Lead is in the owner reserve window — check back in a few minutes' };
      }
      return { ok: false, reason: 'Lead is not available' };
    }

    if (!row.claim_id) {
      // Locked the lead but insert failed — either balance or concurrent conflict
      if ((row.balance ?? 0) < (row.credit_cost ?? 0)) {
        return {
          ok: false,
          reason: `Insufficient credits. This lead costs ${row.credit_cost} credit(s); your balance is ${row.balance}.`,
        };
      }
      // ON CONFLICT fired — another concurrent claim won the race
      return { ok: false, reason: 'Lead was just claimed by another subscriber' };
    }

    return {
      ok: true,
      claimId: row.claim_id,
      creditsSpent: row.credits_spent,
      balanceAfter: row.balance_after,
    };
  } catch (err) {
    console.error('[market-pool] claimLead error:', err);
    throw err;
  }
}
