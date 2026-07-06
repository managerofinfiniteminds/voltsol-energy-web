'use client';

import { useEffect, useState } from 'react';

interface SessionSummary {
  id: number;
  session_id: string;
  slots_json: Record<string, unknown> | null;
  status: string;
  engine_lead_id: number | null;
  model_used: string | null;
  created_at: string;
  updated_at: string;
}

interface TranscriptMsg {
  role: string;
  content: string;
}

interface SessionDetail extends SessionSummary {
  transcript_json: TranscriptMsg[] | null;
}

interface SessionListItem extends SessionSummary {
  last_message?: string | null;
  message_count?: number;
}

const STATUS_STYLES: Record<string, string> = {
  completed: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  handed_off: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  active: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  abandoned: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
};

const STATUS_LABELS: Record<string, string> = {
  completed: 'Completed',
  handed_off: 'Handed off',
  active: 'Active',
  abandoned: 'Abandoned',
};

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffSec = Math.max(0, Math.floor((now - then) / 1000));
  if (diffSec < 60) return 'just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 7) return `${diffDay}d ago`;
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function AdminChatPage() {
  const [rows, setRows] = useState<SessionListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<SessionDetail | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    fetch('/api/admin/chat')
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => setRows(Array.isArray(data) ? data : []))
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, []);

  async function openDetail(id: number) {
    setSelectedId(id);
    setDetailLoading(true);
    setSelected(null);
    try {
      const r = await fetch(`/api/admin/chat?id=${id}`);
      if (r.ok) setSelected(await r.json());
    } finally {
      setDetailLoading(false);
    }
  }

  function closeDetail() {
    setSelected(null);
    setSelectedId(null);
  }

  function slotSummary(slots: Record<string, unknown> | null): string {
    if (!slots) return '\u2014';
    const parts: string[] = [];
    if (slots.first_name || slots.last_name)
      parts.push(`${slots.first_name ?? ''} ${slots.last_name ?? ''}`.trim());
    if (slots.email) parts.push(String(slots.email));
    if (slots.phone) parts.push(String(slots.phone));
    if (slots.consent === true) parts.push('\u2713 consent');
    return parts.length ? parts.join(' \u00b7 ') : '\u2014';
  }

  function displayName(slots: Record<string, unknown> | null): string {
    if (!slots) return 'Anonymous visitor';
    const name = `${slots.first_name ?? ''} ${slots.last_name ?? ''}`.trim();
    return name || 'Anonymous visitor';
  }

  const filteredRows = rows.filter((r) => statusFilter === 'all' || r.status === statusFilter);
  const statusCounts = rows.reduce<Record<string, number>>((acc, r) => {
    acc[r.status] = (acc[r.status] ?? 0) + 1;
    return acc;
  }, {});

  const filters: Array<{ key: string; label: string }> = [
    { key: 'all', label: `All (${rows.length})` },
    { key: 'active', label: `Active (${statusCounts.active ?? 0})` },
    { key: 'completed', label: `Completed (${statusCounts.completed ?? 0})` },
    { key: 'handed_off', label: `Handed off (${statusCounts.handed_off ?? 0})` },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl font-bold text-white sm:text-2xl">Chat Sessions</h1>
        <p className="mt-1 text-sm text-slate-400">
          Conversational lead-capture transcripts from Ray. Completed sessions became real leads.
        </p>
      </div>

      {/* Status filter chips \u2014 horizontally scrollable on mobile, no cramped table headers */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setStatusFilter(f.key)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              statusFilter === f.key
                ? 'border-amber-400 bg-amber-400/15 text-amber-300'
                : 'border-slate-700 bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-slate-400">Loading\u2026</p>
      ) : filteredRows.length === 0 ? (
        <p className="text-slate-400">No chat sessions{statusFilter !== 'all' ? ` with status "${statusFilter}"` : ''} yet.</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* List \u2014 stacked cards, not a squeezed table. Full content visible at any width. */}
          <div className="space-y-2">
            {filteredRows.map((r) => (
              <button
                key={r.id}
                onClick={() => openDetail(r.id)}
                className={`block w-full rounded-xl border p-3 text-left transition ${
                  selectedId === r.id
                    ? 'border-amber-400/50 bg-slate-800'
                    : 'border-slate-700 bg-slate-900 hover:border-slate-600 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-semibold text-white">
                    {displayName(r.slots_json)}
                  </span>
                  <span
                    className={`shrink-0 rounded border px-2 py-0.5 text-[11px] ${
                      STATUS_STYLES[r.status] ?? STATUS_STYLES.active
                    }`}
                  >
                    {STATUS_LABELS[r.status] ?? r.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{slotSummary(r.slots_json)}</p>
                {r.last_message && (
                  <p className="mt-1.5 truncate text-xs text-slate-500">
                    &ldquo;{r.last_message}&rdquo;
                  </p>
                )}
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-500">
                    {r.engine_lead_id ? `Lead #${r.engine_lead_id}` : 'No lead yet'}
                    {typeof r.message_count === 'number' && ` · ${r.message_count} msg${r.message_count === 1 ? '' : 's'}`}
                  </span>
                  <span className="shrink-0 text-xs text-slate-500">{timeAgo(r.updated_at)}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail \u2014 renders as an overlay panel on mobile so it never gets squeezed
              beside the list; sits inline on desktop (lg:) */}
          {(selectedId !== null) && (
            <div className="fixed inset-0 z-50 bg-black/60 lg:static lg:z-auto lg:bg-transparent">
              <div className="flex h-full flex-col rounded-t-2xl border border-slate-700 bg-slate-900 p-4 lg:h-auto lg:rounded-xl lg:sticky lg:top-6"
                   style={{ marginTop: '10vh' }}
              >
                <div className="mb-3 flex items-center justify-between lg:hidden">
                  <span className="text-sm font-semibold text-white">Transcript</span>
                  <button onClick={closeDetail} className="rounded-full p-1 text-slate-400 hover:text-white" aria-label="Close">
                    \u2715
                  </button>
                </div>
                {detailLoading ? (
                  <p className="text-slate-400">Loading transcript\u2026</p>
                ) : !selected ? (
                  <p className="text-slate-500">Couldn&apos;t load this session.</p>
                ) : (
                  <div className="flex min-h-0 flex-1 flex-col">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span
                        className={`rounded border px-2 py-0.5 ${
                          STATUS_STYLES[selected.status] ?? STATUS_STYLES.active
                        }`}
                      >
                        {STATUS_LABELS[selected.status] ?? selected.status}
                      </span>
                      {selected.engine_lead_id && <span>Lead #{selected.engine_lead_id}</span>}
                      {selected.model_used && <span>\u00b7 {selected.model_used}</span>}
                    </div>
                    <div className="mb-3 rounded-lg bg-slate-800/60 p-3 text-xs text-slate-300">
                      <span className="font-semibold text-slate-200">Captured: </span>
                      {slotSummary(selected.slots_json)}
                    </div>
                    <div className="min-h-0 flex-1 space-y-2 overflow-y-auto">
                      {(selected.transcript_json ?? []).length === 0 ? (
                        <p className="text-sm text-slate-500">No messages recorded for this session.</p>
                      ) : (
                        (selected.transcript_json ?? []).map((m, i) => (
                          <div
                            key={i}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                                m.role === 'user'
                                  ? 'bg-amber-500/15 text-amber-100'
                                  : 'bg-slate-800 text-slate-200'
                              }`}
                            >
                              {m.content?.trim() ? m.content : (
                                <span className="italic text-slate-500">(empty message)</span>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Desktop-only placeholder when nothing is selected */}
          {selectedId === null && (
            <div className="hidden rounded-xl border border-slate-700 bg-slate-900 p-4 lg:block">
              <p className="text-slate-500">Select a session to read the transcript.</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
