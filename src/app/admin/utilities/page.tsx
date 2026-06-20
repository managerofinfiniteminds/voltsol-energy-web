'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Utility {
  id: number;
  name: string;
  sort_order: number;
  is_active: boolean;
}

export default function UtilitiesAdminPage() {
  const router = useRouter();
  const [utilities, setUtilities] = useState<Utility[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [savingId, setSavingId] = useState<number | 'new' | null>(null);

  const [newName, setNewName] = useState('');
  const [newSort, setNewSort] = useState('100');

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/utilities');
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load utilities.');
      setLoading(false);
      return;
    }
    setUtilities(await res.json());
    setLoading(false);
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  async function addUtility() {
    if (!newName.trim()) return;
    setSavingId('new');
    setError('');
    const res = await fetch('/api/admin/utilities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newName.trim(),
        sort_order: Number(newSort) || 100,
      }),
    });
    const data = await res.json();
    setSavingId(null);
    if (!res.ok) {
      setError(data.error || 'Could not add utility.');
      return;
    }
    setNewName('');
    setNewSort('100');
    load();
  }

  async function patchUtility(id: number, patch: Partial<Utility>) {
    setSavingId(id);
    setError('');
    const res = await fetch('/api/admin/utilities', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...patch }),
    });
    const data = await res.json();
    setSavingId(null);
    if (!res.ok) {
      setError(data.error || 'Could not save change.');
      load();
      return;
    }
    setUtilities(prev => prev.map(u => (u.id === id ? { ...u, ...data.utility } : u)));
  }

  async function deleteUtility(id: number, name: string) {
    if (!confirm(`Delete "${name}"? Leads already captured keep their value.`)) return;
    setSavingId(id);
    const res = await fetch(`/api/admin/utilities?id=${id}`, { method: 'DELETE' });
    setSavingId(null);
    if (res.ok) setUtilities(prev => prev.filter(u => u.id !== id));
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Electric Utilities</h1>
        <p className="mt-1 text-sm text-slate-400">
          These appear in the estimate form&rsquo;s &ldquo;Who&rsquo;s your electric utility?&rdquo;
          dropdown. Lower sort number shows first. Inactive items are hidden from the form but kept here.
        </p>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-500/40 bg-red-950/40 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Add new */}
      <div className="mb-6 rounded-xl border border-slate-700 bg-slate-900 p-4">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Add a utility
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addUtility()}
            placeholder="Utility name (e.g. Pacific Gas & Electric)"
            className="flex-1 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
          />
          <input
            value={newSort}
            onChange={e => setNewSort(e.target.value.replace(/[^0-9]/g, ''))}
            placeholder="Sort"
            className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none sm:w-20"
          />
          <button
            onClick={addUtility}
            disabled={savingId === 'new' || !newName.trim()}
            className="rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-900 transition hover:bg-amber-300 disabled:opacity-50"
          >
            {savingId === 'new' ? 'Adding…' : 'Add'}
          </button>
        </div>
      </div>

      {/* List */}
      {loading ? (
        <p className="text-slate-400">Loading…</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-left text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="w-20 px-2 py-3">Sort</th>
                <th className="w-24 px-2 py-3 text-center">Active</th>
                <th className="w-20 px-2 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-950">
              {utilities.map(u => (
                <tr key={u.id} className={u.is_active ? '' : 'opacity-50'}>
                  <td className="px-4 py-2">
                    <input
                      defaultValue={u.name}
                      onBlur={e => {
                        const v = e.target.value.trim();
                        if (v && v !== u.name) patchUtility(u.id, { name: v });
                      }}
                      className="w-full rounded border border-transparent bg-transparent px-2 py-1 text-white hover:border-slate-700 focus:border-amber-400 focus:outline-none"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <input
                      defaultValue={u.sort_order}
                      onBlur={e => {
                        const v = Number(e.target.value);
                        if (Number.isInteger(v) && v !== u.sort_order) patchUtility(u.id, { sort_order: v });
                      }}
                      className="w-16 rounded border border-transparent bg-transparent px-2 py-1 text-white hover:border-slate-700 focus:border-amber-400 focus:outline-none"
                    />
                  </td>
                  <td className="px-2 py-2 text-center">
                    <button
                      onClick={() => patchUtility(u.id, { is_active: !u.is_active })}
                      disabled={savingId === u.id}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                        u.is_active
                          ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      {u.is_active ? 'On' : 'Off'}
                    </button>
                  </td>
                  <td className="px-2 py-2 text-right">
                    <button
                      onClick={() => deleteUtility(u.id, u.name)}
                      disabled={savingId === u.id}
                      className="text-slate-500 transition hover:text-red-400"
                      title="Delete"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
              {utilities.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-slate-500">
                    No utilities yet. Add one above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
