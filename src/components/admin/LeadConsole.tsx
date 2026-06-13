'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  OWNS_HOME_LABELS,
  MONTHLY_BILL_LABELS,
  TIMELINE_LABELS,
  UTILITY_LABELS,
  ROOF_SHADE_LABELS,
  LEAD_STATUS_VALUES,
  LEAD_SCORE_VALUES,
  type LeadScore,
  type LeadStatus,
  type OwnsHome,
  type MonthlyBill,
  type Timeline,
  type Utility,
  type RoofShade,
} from '@/lib/engine-enums';

interface EngineLead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street_address: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  owns_home: OwnsHome | null;
  monthly_bill: MonthlyBill | null;
  timeline: Timeline | null;
  utility: Utility | null;
  roof_shade: RoofShade | null;
  notes: string | null;
  score: LeadScore;
  status: LeadStatus;
  sale_value: number | null;
  created_at: string;
  source_consumer: string | null;
}

function formatRelativeTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 7) return `${diffDays}d`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function ScoreBadge({ score }: { score: LeadScore }) {
  if (score === 'hot_lead') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-red-900/50 px-2 py-0.5 text-xs font-bold text-red-300 border border-red-700">
        HOT
      </span>
    );
  }
  if (score === 'low_priority') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-400 border border-slate-600">
        Low
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-900/40 px-2 py-0.5 text-xs font-semibold text-yellow-300 border border-yellow-700">
      Standard
    </span>
  );
}

function SignalRow({ lead }: { lead: EngineLead }) {
  const signals: { emoji: string; label: string }[] = [];

  if (lead.owns_home) {
    signals.push({ emoji: '\uD83C\uDFE0', label: OWNS_HOME_LABELS[lead.owns_home] });
  }
  if (lead.monthly_bill) {
    signals.push({ emoji: '\u26A1', label: MONTHLY_BILL_LABELS[lead.monthly_bill] });
  }
  if (lead.timeline) {
    signals.push({ emoji: '\uD83D\uDCC5', label: TIMELINE_LABELS[lead.timeline] });
  }
  if (lead.utility) {
    signals.push({ emoji: '\uD83D\uDD0C', label: UTILITY_LABELS[lead.utility] });
  }
  if (lead.roof_shade) {
    signals.push({ emoji: '\u2600\uFE0F', label: ROOF_SHADE_LABELS[lead.roof_shade] });
  }

  if (signals.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 text-xs text-slate-300">
      {signals.map((s, i) => (
        <span key={i} className="flex items-center gap-1">
          <span>{s.emoji}</span>
          <span>{s.label}</span>
        </span>
      ))}
    </div>
  );
}

interface LeadCardProps {
  lead: EngineLead;
  onUpdate: (id: number, updates: { status?: LeadStatus; sale_value?: number | null; notes?: string | null }) => void;
}

function LeadCard({ lead, onUpdate }: LeadCardProps) {
  const [status, setStatus] = useState<LeadStatus>(lead.status);
  const [saleValue, setSaleValue] = useState(lead.sale_value?.toString() ?? '');
  const [notes, setNotes] = useState(lead.notes ?? '');
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const hasChanges =
    status !== lead.status ||
    (saleValue !== '' && parseFloat(saleValue) !== lead.sale_value) ||
    (saleValue === '' && lead.sale_value !== null) ||
    notes !== (lead.notes ?? '');

  async function handleSave() {
    setSaving(true);
    const updates: { status?: LeadStatus; sale_value?: number | null; notes?: string | null } = {};
    if (status !== lead.status) updates.status = status;
    if (saleValue !== '' && parseFloat(saleValue) !== lead.sale_value) {
      updates.sale_value = parseFloat(saleValue);
    } else if (saleValue === '' && lead.sale_value !== null) {
      updates.sale_value = null;
    }
    if (notes !== (lead.notes ?? '')) updates.notes = notes || null;

    await onUpdate(lead.id, updates);
    setSaving(false);
  }

  const cityRegion = [lead.city, lead.state].filter(Boolean).join(', ');

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 border-b border-slate-800 px-4 py-3">
        <div className="flex items-center gap-3">
          <ScoreBadge score={lead.score} />
          <div>
            <span className="text-sm font-medium text-white">
              {lead.first_name} {lead.last_name}
            </span>
            {cityRegion && (
              <span className="ml-2 text-xs text-slate-400">{cityRegion}</span>
            )}
          </div>
        </div>
        <span className="text-xs text-slate-500 whitespace-nowrap">
          {formatRelativeTime(lead.created_at)}
        </span>
      </div>

      {/* Contact */}
      <div className="border-b border-slate-800 px-4 py-3">
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`tel:${lead.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition"
          >
            <span>\uD83D\uDCDE</span>
            <span>{lead.phone}</span>
          </a>
          <a
            href={`mailto:${lead.email}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition truncate"
          >
            <span>\u2709\uFE0F</span>
            <span className="truncate">{lead.email}</span>
          </a>
        </div>
      </div>

      {/* Signals */}
      <div className="border-b border-slate-800 px-4 py-3">
        <SignalRow lead={lead} />
      </div>

      {/* Controls */}
      <div className="px-4 py-3 space-y-3">
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as LeadStatus)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
            >
              {LEAD_STATUS_VALUES.map((s) => (
                <option key={s} value={s} className="capitalize">
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Sale $</label>
            <input
              type="number"
              value={saleValue}
              onChange={(e) => setSaleValue(e.target.value)}
              placeholder="0"
              min="0"
              step="100"
              className="w-24 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>
          {hasChanges && (
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-[#0F172A] font-bold text-sm px-4 py-1.5 rounded-lg transition"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          )}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-slate-500 hover:text-slate-300 transition"
        >
          {expanded ? '\u25B2 Hide details' : '\u25BC Show details'}
        </button>

        {expanded && (
          <div className="space-y-3 pt-2 border-t border-slate-800">
            {lead.street_address && (
              <div className="text-xs text-slate-400">
                <span>\uD83D\uDCCD</span>{' '}
                {lead.street_address}
                {lead.city && `, ${lead.city}`}
                {lead.state && ` ${lead.state}`}
                {lead.zip && ` ${lead.zip}`}
              </div>
            )}
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                <span>\uD83D\uDCDD</span> Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Add notes..."
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function LeadConsole() {
  const [leads, setLeads] = useState<EngineLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [filterStatus, setFilterStatus] = useState('');
  const [filterScore, setFilterScore] = useState('');
  const [filterCity, setFilterCity] = useState('');

  // Get unique cities from leads for filter dropdown
  const uniqueCities = Array.from(new Set(leads.map((l) => l.city).filter(Boolean))).sort() as string[];

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (filterStatus) params.set('status', filterStatus);
      if (filterScore) params.set('score', filterScore);
      if (filterCity) params.set('city', filterCity);

      const res = await fetch(`/api/admin/leads?${params}`);
      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = '/admin/login';
          return;
        }
        throw new Error('Failed to fetch leads');
      }
      const data = await res.json();
      setLeads(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [filterStatus, filterScore, filterCity]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  async function handleUpdate(
    id: number,
    updates: { status?: LeadStatus; sale_value?: number | null; notes?: string | null }
  ) {
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error('Update failed');

      // Update local state
      setLeads((prev) =>
        prev.map((l) =>
          l.id === id
            ? {
                ...l,
                ...updates,
                sale_value:
                  updates.sale_value !== undefined ? updates.sale_value : l.sale_value,
              }
            : l
        )
      );
    } catch (err) {
      alert('Failed to update lead. Please try again.');
    }
  }

  // Stats
  const stats = {
    total: leads.length,
    hot: leads.filter((l) => l.score === 'hot_lead').length,
    new: leads.filter((l) => l.status === 'new').length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-slate-400">Total Leads</div>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <div className="text-2xl font-bold text-red-400">{stats.hot}</div>
          <div className="text-xs text-slate-400">Hot Leads</div>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <div className="text-2xl font-bold text-blue-400">{stats.new}</div>
          <div className="text-xs text-slate-400">New (Uncontacted)</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-end">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
          >
            <option value="">All</option>
            {LEAD_STATUS_VALUES.map((s) => (
              <option key={s} value={s} className="capitalize">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">Score</label>
          <select
            value={filterScore}
            onChange={(e) => setFilterScore(e.target.value)}
            className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
          >
            <option value="">All</option>
            <option value="hot_lead">HOT</option>
            <option value="standard">Standard</option>
            <option value="low_priority">Low</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">City</label>
          <select
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
          >
            <option value="">All Cities</option>
            {uniqueCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={fetchLeads}
          className="text-sm text-slate-400 hover:text-white transition px-3 py-2"
        >
          Refresh
        </button>
      </div>

      {/* Lead cards */}
      {loading ? (
        <div className="text-center text-slate-400 py-12">Loading leads...</div>
      ) : error ? (
        <div className="rounded-xl border border-red-700 bg-red-900/20 p-6 text-center text-red-300">
          {error}
        </div>
      ) : leads.length === 0 ? (
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 text-center text-slate-400">
          No leads found. Leads will appear here after engine migration 007 is run and data is
          backfilled.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} onUpdate={handleUpdate} />
          ))}
        </div>
      )}
    </div>
  );
}
