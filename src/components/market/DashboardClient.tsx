'use client';

import { useState } from 'react';
import type { ClaimedLead } from '@/lib/market-pool';

const SCORE_LABEL: Record<string, string> = {
  hot_lead:     'Hot',
  standard:     'Standard',
  low_priority: 'Low',
};

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 60)  return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)   return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

type Outcome = 'open' | 'won' | 'lost';

interface DisputeState {
  claimId: number | null;
  reason: string;
  description: string;
  submitting: boolean;
  error: string;
}

export default function DashboardClient({ initialLeads }: { initialLeads: ClaimedLead[] }) {
  const [leads, setLeads] = useState<ClaimedLead[]>(initialLeads);
  const [dispute, setDispute] = useState<DisputeState>({
    claimId: null,
    reason: 'bad_phone',
    description: '',
    submitting: false,
    error: '',
  });

  async function setOutcome(claimId: number, outcome: Outcome) {
    // Optimistic update
    setLeads(prev =>
      prev.map(l => l.claim_id === claimId ? { ...l, outcome } : l)
    );
    try {
      const res = await fetch(`/api/market/claims/${claimId}`, {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ outcome }),
      });
      if (!res.ok) {
        // Revert on failure
        setLeads(prev =>
          prev.map(l => l.claim_id === claimId ? { ...l, outcome: initialLeads.find(x => x.claim_id === claimId)?.outcome ?? null } : l)
        );
      }
    } catch {
      // Revert on failure
      setLeads(prev =>
        prev.map(l => l.claim_id === claimId ? { ...l, outcome: initialLeads.find(x => x.claim_id === claimId)?.outcome ?? null } : l)
      );
    }
  }

  async function submitDispute() {
    if (!dispute.claimId) return;
    setDispute(d => ({ ...d, submitting: true, error: '' }));
    try {
      const res = await fetch('/api/market/disputes', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          claim_id:    dispute.claimId,
          reason:      dispute.reason,
          description: dispute.description || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        // Update lead status to disputed
        setLeads(prev =>
          prev.map(l =>
            l.claim_id === dispute.claimId ? { ...l, status: 'disputed' } : l
          )
        );
        setDispute({ claimId: null, reason: 'bad_phone', description: '', submitting: false, error: '' });
      } else {
        setDispute(d => ({
          ...d,
          submitting: false,
          error: (data as { error?: string }).error ?? 'Could not submit dispute.',
        }));
      }
    } catch {
      setDispute(d => ({ ...d, submitting: false, error: 'Connection error.' }));
    }
  }

  const won  = leads.filter(l => l.outcome === 'won').length;
  const open = leads.filter(l => !l.outcome || l.outcome === 'open').length;

  return (
    <>
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Claimed', value: leads.length },
          { label: 'Open',          value: open },
          { label: 'Won',           value: won },
        ].map(s => (
          <div key={s.label} className="bg-[#071628] border border-blue-900/40 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">{s.value}</p>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-16 text-slate-500">
          <p className="text-lg">No claimed leads yet.</p>
          <p className="text-sm mt-2">
            <a href="/app/pool" className="text-amber-400 hover:underline">Browse the lead pool</a> to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {leads.map(lead => (
            <div
              key={lead.claim_id}
              className="bg-[#071628] border border-blue-900/40 rounded-xl p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                {/* Contact info */}
                <div>
                  <p className="font-semibold text-white text-base">
                    {lead.first_name} {lead.last_name}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-1 text-sm">
                    <a href={`mailto:${lead.email}`} className="text-blue-400 hover:underline">{lead.email}</a>
                    <a href={`tel:${lead.phone}`}    className="text-blue-400 hover:underline">{lead.phone}</a>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">
                    {lead.market_city ?? lead.city ?? '—'} &middot; {timeAgo(lead.claimed_at)} &middot; {lead.credits_spent} cr
                  </p>
                </div>

                {/* Score badge */}
                <span className={`text-xs font-semibold px-2 py-0.5 rounded self-start ${
                  lead.score === 'hot_lead'
                    ? 'bg-amber-400/15 text-amber-400'
                    : 'bg-blue-500/15 text-blue-400'
                }`}>
                  {SCORE_LABEL[lead.score] ?? lead.score}
                </span>
              </div>

              {/* Outcome selector */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-slate-500 text-xs uppercase tracking-wide mr-1">Outcome:</span>
                {(['open', 'won', 'lost'] as Outcome[]).map(o => (
                  <button
                    key={o}
                    onClick={() => setOutcome(lead.claim_id, o)}
                    className={`text-xs px-3 py-1 rounded-full border transition ${
                      (lead.outcome ?? 'open') === o
                        ? o === 'won'  ? 'bg-green-900/60 border-green-500 text-green-400'
                          : o === 'lost' ? 'bg-red-900/60 border-red-500 text-red-400'
                          : 'bg-blue-900/60 border-blue-500 text-blue-300'
                        : 'bg-transparent border-blue-900/40 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {o.charAt(0).toUpperCase() + o.slice(1)}
                  </button>
                ))}

                {/* Dispute button — only for non-disputed claims */}
                {lead.status !== 'disputed' && (
                  <button
                    onClick={() => setDispute(d => ({ ...d, claimId: lead.claim_id }))}
                    className="ml-auto text-xs text-slate-600 hover:text-red-400 transition border border-blue-900/30 px-3 py-1 rounded-full"
                  >
                    Dispute
                  </button>
                )}
                {lead.status === 'disputed' && (
                  <span className="ml-auto text-xs text-yellow-600 border border-yellow-900/40 px-3 py-1 rounded-full">
                    Dispute pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dispute modal */}
      {dispute.claimId !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#071628] border border-blue-900/40 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="text-lg font-bold text-white mb-1">Submit Dispute</h2>
            <p className="text-slate-400 text-sm mb-4">
              Disputes are capped at 3 per 30 days. Only submit for provably-invalid leads
              (disconnected phone, undeliverable email, duplicate, or outside your service area).
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Reason</label>
                <select
                  value={dispute.reason}
                  onChange={e => setDispute(d => ({ ...d, reason: e.target.value }))}
                  className="w-full bg-[#0C2040] border border-blue-900/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="bad_phone">Phone disconnected / wrong number</option>
                  <option value="bad_email">Email undeliverable</option>
                  <option value="duplicate">Duplicate lead</option>
                  <option value="outside_area">Outside my service area</option>
                  <option value="other">Other (explain below)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Details <span className="text-slate-500">(optional)</span>
                </label>
                <textarea
                  value={dispute.description}
                  onChange={e => setDispute(d => ({ ...d, description: e.target.value }))}
                  rows={3}
                  maxLength={1000}
                  className="w-full bg-[#0C2040] border border-blue-900/50 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  placeholder="Describe the issue…"
                />
              </div>

              {dispute.error && (
                <div className="bg-red-900/40 border border-red-500 rounded-lg px-3 py-2 text-red-300 text-sm">
                  {dispute.error}
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={submitDispute}
                disabled={dispute.submitting}
                className="flex-1 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-[#040D1C] font-bold py-2.5 rounded-xl transition-colors"
              >
                {dispute.submitting ? 'Submitting…' : 'Submit Dispute'}
              </button>
              <button
                onClick={() => setDispute({ claimId: null, reason: 'bad_phone', description: '', submitting: false, error: '' })}
                className="flex-1 border border-blue-900/40 text-slate-400 hover:text-white py-2.5 rounded-xl transition-colors"
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
