'use client';

import { useState, useEffect, FormEvent } from 'react';

interface Admin {
  id: number;
  email: string;
  name: string | null;
  is_active: boolean;
  last_login_at: string | null;
  created_at: string;
  created_by: string | null;
}

export default function AdminSettingsPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [currentEmail, setCurrentEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState('');

  const [deactivating, setDeactivating] = useState<number | null>(null);

  async function fetchAdmins() {
    try {
      const res = await fetch('/api/admin/admins');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setAdmins(data.admins);
      setCurrentEmail(data.currentEmail);
      setError('');
    } catch {
      setError('Failed to load admins');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAdmins();
  }, []);

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setAddError('');
    setAdding(true);

    try {
      const res = await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newEmail.trim(), name: newName.trim() || null }),
      });

      if (!res.ok) {
        const data = await res.json();
        setAddError(data.error || 'Failed to add admin');
        return;
      }

      setNewEmail('');
      setNewName('');
      await fetchAdmins();
    } catch {
      setAddError('Connection error');
    } finally {
      setAdding(false);
    }
  }

  async function handleDeactivate(id: number) {
    setDeactivating(id);

    try {
      const res = await fetch('/api/admin/admins', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.error || 'Failed to deactivate admin');
        return;
      }

      await fetchAdmins();
    } catch {
      alert('Connection error');
    } finally {
      setDeactivating(null);
    }
  }

  function formatDate(dateStr: string | null): string {
    if (!dateStr) return 'Never';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F172A] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-slate-400 text-sm">
            Signed in as <span className="text-amber-400">{currentEmail}</span>
          </p>
        </div>

        {error && (
          <div className="bg-red-900/40 border border-red-500 rounded-lg px-4 py-3 text-red-300 text-sm mb-6">
            {error}
          </div>
        )}

        {/* Add new admin */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Add Admin</h2>
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="text"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              placeholder="Name (optional)"
              className="sm:w-48 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              disabled={adding}
              className="bg-amber-400 hover:bg-amber-300 disabled:bg-amber-800 text-[#0F172A] font-bold px-6 py-2 rounded-lg transition-colors"
            >
              {adding ? 'Adding...' : 'Add'}
            </button>
          </form>
          {addError && (
            <p className="text-red-400 text-sm mt-2">{addError}</p>
          )}
          <p className="text-slate-500 text-xs mt-3">
            New admins log in via magic link sent to their email address.
          </p>
        </div>

        {/* Admin list */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">Admin List</h2>
          </div>
          <div className="divide-y divide-slate-700">
            {admins.map(admin => (
              <div
                key={admin.id}
                className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  !admin.is_active ? 'opacity-50' : ''
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium truncate">
                      {admin.name || admin.email}
                    </span>
                    {admin.email === currentEmail && (
                      <span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded">
                        You
                      </span>
                    )}
                    {!admin.is_active && (
                      <span className="text-xs bg-red-900/50 text-red-400 px-2 py-0.5 rounded">
                        Inactive
                      </span>
                    )}
                  </div>
                  {admin.name && (
                    <div className="text-slate-400 text-sm truncate">{admin.email}</div>
                  )}
                  <div className="text-slate-500 text-xs mt-1">
                    Last login: {formatDate(admin.last_login_at)}
                    {admin.created_by && ` · Added by ${admin.created_by}`}
                  </div>
                </div>
                {admin.is_active && admin.email !== currentEmail && (
                  <button
                    onClick={() => handleDeactivate(admin.id)}
                    disabled={deactivating === admin.id}
                    className="text-red-400 hover:text-red-300 text-sm transition disabled:opacity-50"
                  >
                    {deactivating === admin.id ? 'Removing...' : 'Remove'}
                  </button>
                )}
              </div>
            ))}
            {admins.length === 0 && (
              <div className="px-6 py-8 text-center text-slate-400">
                No admins found
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
