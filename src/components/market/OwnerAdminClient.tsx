'use client';

import { useState } from 'react';
import type { TenantRow, LeadRow, DisputeRow } from '@/app/app/(protected)/admin/page';

type Tab = 'tenants' | 'leads' | 'disputes';

const SCORE_COLOR: Record<string, string> = {
  hot_lead:     'text-amber-400',
  standard:     'text-blue-400',
  low_priority: 'text-slate-500',
};

const STATUS_COLOR: Record<string, string> = {
  available:      'text-green-400',
  owner_reserved: 'text-yellow-400',
  claimed:        'text-blue-400',
  expired:        'text-slate-600',
};

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 60)  return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)   return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

interface GrantState {
  tenantId: number | null;
  tenantName: string;
  delta: string;
  loading: boolean;
  error: string;
  success: string;
}

export default function OwnerAdminClient({
  tenants: initialTenants,
  leads,
  disputes: initialDisputes,
}: {
  tenants: TenantRow[];
  leads: LeadRow[];
  disputes: DisputeRow[];
}) {
  const [tab,       setTab]       = useState<Tab>('tenants');
  const [tenants,   setTenants]   = useState(initialTenants);
  const [disputes,  setDisputes]  = useState(initialDisputes);
  const [grant, setGrant] = useState<GrantState>({
    tenantId: null, tenantName: '', delta: '10', loading: false, error: '', success: '',
  });

  async function submitGrant() {
    if (!grant.tenantId) return;
    const delta = parseInt(grant.delta, 10);
    if (isNaN(delta) || delta === 0) {
      setGrant(g => ({ ...g, error: 'Enter a non-zero integer.' }));
      return;
    }
    setGrant(g => ({ ...g, loading: true, error: '', success: '' }));
    try {
      const res = await fetch('/api/market/admin/credits', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ tenant_id: grant.tenantId, delta, reason: 'manual' }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        const newBal = (data as { balance_after?: number }).balance_after ?? 0;
        setTenants(prev =>
          prev.map(t => t.id === grant.tenantId ? { ...t, balance: newBal } : t)
        );
        setGrant(g => ({ ...g, loading: false, success: `Done. New balance: ${newBal} cr`, tenantId: null }));
      } else {
        setGrant(g => ({ ...g, loading: false, error: (data as { error?: string }).error ?? 'Error' }));
      }
    } catch {
      setGrant(g => ({ ...g, loading: false, error: 'Connection error.' }));
    }
  }

  async function resolveDispute(disputeId: number, approved: boolean) {
    try {
      // Mark resolved via direct status update (owner action — simple fetch)
      const res = await fetch(`/api/market/admin/disputes/${disputeId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: approved ? 'approved' : 'denied' }),
      });
      if (res.ok) {
        setDisputes(prev =>
          prev.map(d => d.id === disputeId
            ? { ...d, status: approved ? 'approved' : 'denied' }
            : d
          )
        );
      }
    } catch {
      // Silent — UI will reflect old state
    }
  }

  return (
    <>
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-blue-900/40 mb-6">
        {(['tenants', 'leads', 'disputes'] as Tab[]).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium capitalize transition border-b-2 -mb-px ${
              tab === t
                ? 'border-amber-400 text-white'
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            {t}
            {t === 'disputes' && disputes.filter(d => d.status === 'open').length > 0 && (
              <span className="ml-1.5 bg-amber-400 text-[#040D1C] text-xs font-bold px-1.5 py-0.5 rounded-full">
                {disputes.filter(d => d.status === 'open').length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tenants tab */}
      {tab === 'tenants' && (
        <div className="space-y-4">
          {tenants.map(t => (
            <div key={t.id} className="bg-[#071628] border border-blue-900/40 rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">{t.name}</p>
                    {t.is_owner && (
                      <span className="text-xs bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded font-semibold">
                        OWNER
                      </span>
                    )}
                    {!t.onboarding_complete && (
                      <span className="text-xs text-slate-600 border border-blue-900/30 px-2 py-0.5 rounded">
                        Onboarding pending
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm">{t.email}</p>
                  <p className="text-slate-600 text-xs mt-1">Joined {timeAgo(t.created_at)}</p>
                </div>
                <div className="flex gap-6 text-sm text-right">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Credits</p>
                    <p className="text-xl font-bold text-amber-400">{t.balance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Tier</p>
                    <p className="text-sm font-semibold text-white capitalize">{t.tier}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Claimed</p>
                    <p className="text-sm font-semibold text-white">{t.claimed_count}</p>
                  </div>
                </div>
              </div>
              {/* Credit grant button */}
              {!t.is_owner && (
                <div className="mt-3 border-t border-blue-900/30 pt-3">
                  <button
                    onClick={() => setGrant({ tenantId: t.id, tenantName: t.name, delta: '10', loading: false, error: '', success: '' })}
                    className="text-xs text-slate-500 hover:text-amber-400 transition"
                  >
                    + Grant / deduct credits
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Leads tab */}
      {tab === 'leads' && (
        <div className="overflow-x-auto rounded-xl border border-blue-900/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#071628] text-slate-400 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">Lead</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Claimed by</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Cr</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l, i) => (
                <tr
                  key={l.id}
                  className={`border-t border-blue-900/30 ${i % 2 === 0 ? 'bg-[#040D1C]' : 'bg-[#071628]'}`}
                >
                  <td className="px-4 py-3">
                    <p className="text-white">{l.first_name} {l.last_name}</p>
                    <p className="text-slate-500 text-xs">{l.city ?? '—'}</p>
                  </td>
                  <td className={`px-4 py-3 text-xs font-semibold ${SCORE_COLOR[l.score] ?? ''}`}>
                    {l.score}
                  </td>
                  <td className={`px-4 py-3 text-xs ${STATUS_COLOR[l.status] ?? 'text-slate-400'}`}>
                    {l.status}
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{l.claimed_by ?? '—'}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs">{timeAgo(l.created_at)}</td>
                  <td className="px-4 py-3 text-slate-500">{l.credit_cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Disputes tab */}
      {tab === 'disputes' && (
        <div className="space-y-3">
          {disputes.length === 0 && (
            <p className="text-slate-500 text-center py-10">No disputes yet.</p>
          )}
          {disputes.map(d => (
            <div key={d.id} className="bg-[#071628] border border-blue-900/40 rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-white font-semibold">{d.tenant_name}</p>
                  <p className="text-slate-400 text-sm mt-0.5">
                    Reason: <span className="text-white">{d.reason.replace(/_/g, ' ')}</span>
                  </p>
                  {d.description && (
                    <p className="text-slate-500 text-sm mt-1 italic">{d.description}</p>
                  )}
                  <p className="text-slate-600 text-xs mt-1">{timeAgo(d.created_at)}</p>
                </div>
                <div className="flex items-center gap-2">
                  {d.status === 'open' ? (
                    <>
                      <button
                        onClick={() => resolveDispute(d.id, true)}
                        className="text-xs bg-green-900/40 hover:bg-green-900/60 border border-green-700 text-green-400 px-3 py-1.5 rounded-lg transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => resolveDispute(d.id, false)}
                        className="text-xs bg-red-900/40 hover:bg-red-900/60 border border-red-700 text-red-400 px-3 py-1.5 rounded-lg transition"
                      >
                        Deny
                      </button>
                    </>
                  ) : (
                    <span className={`text-xs px-3 py-1 rounded border ${
                      d.status === 'approved'
                        ? 'border-green-700 text-green-400'
                        : 'border-red-700 text-red-400'
                    }`}>
                      {d.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Credit grant modal */}
      {grant.tenantId !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#071628] border border-blue-900/40 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h2 className="text-lg font-bold text-white mb-1">Adjust Credits</h2>
            <p className="text-slate-400 text-sm mb-4">{grant.tenantName}</p>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Amount <span className="text-slate-500">(negative to deduct)</span>
              </label>
              <input
                type="number"
                value={grant.delta}
                onChange={e => setGrant(g => ({ ...g, delta: e.target.value }))}
                className="w-full bg-[#0C2040] border border-blue-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {grant.error && (
              <p className="mt-2 text-red-400 text-sm">{grant.error}</p>
            )}
            {grant.success && (
              <p className="mt-2 text-green-400 text-sm">{grant.success}</p>
            )}

            <div className="flex gap-3 mt-5">
              <button
                onClick={submitGrant}
                disabled={grant.loading}
                className="flex-1 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-[#040D1C] font-bold py-2.5 rounded-xl transition"
              >
                {grant.loading ? 'Saving…' : 'Apply'}
              </button>
              <button
                onClick={() => setGrant(g => ({ ...g, tenantId: null, error: '', success: '' }))}
                className="flex-1 border border-blue-900/40 text-slate-400 hover:text-white py-2.5 rounded-xl transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
