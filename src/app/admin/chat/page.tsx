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

const STATUS_STYLES: Record<string, string> = {
  completed: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  handed_off: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  active: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  abandoned: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
};

export default function AdminChatPage() {
  const [rows, setRows] = useState<SessionSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<SessionDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    fetch('/api/admin/chat')
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => setRows(Array.isArray(data) ? data : []))
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, []);

  async function openDetail(id: number) {
    setDetailLoading(true);
    setSelected(null);
    try {
      const r = await fetch(`/api/admin/chat?id=${id}`);
      if (r.ok) setSelected(await r.json());
    } finally {
      setDetailLoading(false);
    }
  }

  function slotSummary(slots: Record<string, unknown> | null): string {
    if (!slots) return '—';
    const parts: string[] = [];
    if (slots.first_name || slots.last_name)
      parts.push(`${slots.first_name ?? ''} ${slots.last_name ?? ''}`.trim());
    if (slots.email) parts.push(String(slots.email));
    if (slots.phone) parts.push(String(slots.phone));
    if (slots.consent === true) parts.push('✓ consent');
    return parts.length ? parts.join(' · ') : '—';
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Chat Sessions</h1>
        <p className="mt-1 text-sm text-slate-400">
          Conversational lead-capture transcripts. Completed sessions became real leads.
        </p>
      </div>

      {loading ? (
        <p className="text-slate-400">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="text-slate-400">No chat sessions yet.</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* List */}
          <div className="overflow-hidden rounded-xl border border-slate-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Captured</th>
                  <th className="px-3 py-2">Lead</th>
                  <th className="px-3 py-2">Updated</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.id}
                    onClick={() => openDetail(r.id)}
                    className="cursor-pointer border-t border-slate-800 hover:bg-slate-800/50"
                  >
                    <td className="px-3 py-2">
                      <span
                        className={`rounded border px-2 py-0.5 text-[11px] ${
                          STATUS_STYLES[r.status] ?? STATUS_STYLES.active
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-slate-200">{slotSummary(r.slots_json)}</td>
                    <td className="px-3 py-2 text-slate-400">
                      {r.engine_lead_id ? `#${r.engine_lead_id}` : '—'}
                    </td>
                    <td className="px-3 py-2 text-slate-500">
                      {new Date(r.updated_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail */}
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            {detailLoading ? (
              <p className="text-slate-400">Loading transcript…</p>
            ) : !selected ? (
              <p className="text-slate-500">Select a session to read the transcript.</p>
            ) : (
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span
                    className={`rounded border px-2 py-0.5 ${
                      STATUS_STYLES[selected.status] ?? STATUS_STYLES.active
                    }`}
                  >
                    {selected.status}
                  </span>
                  {selected.engine_lead_id && <span>Lead #{selected.engine_lead_id}</span>}
                  {selected.model_used && <span>· {selected.model_used}</span>}
                  <span>· {selected.session_id}</span>
                </div>
                <div className="mb-3 rounded-lg bg-slate-800/60 p-3 text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">Captured: </span>
                  {slotSummary(selected.slots_json)}
                </div>
                <div className="max-h-[60vh] space-y-2 overflow-y-auto">
                  {(selected.transcript_json ?? []).map((m, i) => (
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
                        {m.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
