import { redirect } from 'next/navigation';
import { getMarketSession } from '@/lib/market-auth';
import { sql } from '@/lib/db';
import OwnerAdminClient from '@/components/market/OwnerAdminClient';

export const dynamic = 'force-dynamic';

export interface TenantRow {
  id: number;
  name: string;
  email: string;
  is_owner: boolean;
  onboarding_complete: boolean;
  created_at: string;
  balance: number;
  tier: string;
  claimed_count: number;
  dispute_count: number;
}

export interface LeadRow {
  id: number;
  vertical: string;
  first_name: string;
  last_name: string;
  city: string | null;
  score: string;
  status: string;
  credit_cost: number;
  created_at: string;
  claimed_by: string | null;
}

export interface DisputeRow {
  id: number;
  tenant_name: string;
  reason: string;
  description: string | null;
  status: string;
  created_at: string;
}

async function getAllTenants(): Promise<TenantRow[]> {
  return sql`
    SELECT
      t.id,
      t.name,
      t.email,
      t.is_owner,
      t.onboarding_complete,
      t.created_at,
      COALESCE(SUM(cl.delta), 0)::int  AS balance,
      COALESCE(
        (SELECT p.tier
         FROM marketplace_subscriptions s
         JOIN marketplace_plans p ON p.id = s.plan_id
         WHERE s.tenant_id = t.id AND s.status IN ('active','trialing')
         ORDER BY s.created_at DESC LIMIT 1),
        'none'
      ) AS tier,
      (SELECT COUNT(*)::int FROM marketplace_lead_claims lc WHERE lc.tenant_id = t.id) AS claimed_count,
      (SELECT COUNT(*)::int FROM marketplace_disputes d WHERE d.tenant_id = t.id) AS dispute_count
    FROM marketplace_tenants t
    LEFT JOIN marketplace_credit_ledger cl ON cl.tenant_id = t.id
    GROUP BY t.id
    ORDER BY t.created_at DESC
  ` as Promise<TenantRow[]>;
}

async function getRecentLeads(limit = 50): Promise<LeadRow[]> {
  return sql`
    SELECT
      l.id, l.vertical, l.first_name, l.last_name, l.city, l.score,
      l.status, l.credit_cost, l.created_at,
      t.name AS claimed_by
    FROM marketplace_leads l
    LEFT JOIN marketplace_lead_claims c ON c.lead_id = l.id
    LEFT JOIN marketplace_tenants t ON t.id = c.tenant_id
    ORDER BY l.created_at DESC
    LIMIT ${limit}
  ` as Promise<LeadRow[]>;
}

async function getOpenDisputes(): Promise<DisputeRow[]> {
  return sql`
    SELECT
      d.id, t.name AS tenant_name, d.reason, d.description, d.status, d.created_at
    FROM marketplace_disputes d
    JOIN marketplace_tenants t ON t.id = d.tenant_id
    ORDER BY d.created_at DESC
    LIMIT 50
  ` as Promise<DisputeRow[]>;
}

export default async function OwnerAdminPage() {
  const session = await getMarketSession();
  if (!session) redirect('/app/login');
  if (!session.isOwner) redirect('/app/pool');

  const [tenants, leads, disputes] = await Promise.all([
    getAllTenants(),
    getRecentLeads(),
    getOpenDisputes(),
  ]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Marketplace Admin</h1>
        <p className="text-slate-400 text-sm mt-1">Owner view — full network visibility</p>
      </div>

      <OwnerAdminClient tenants={tenants} leads={leads} disputes={disputes} />
    </div>
  );
}
