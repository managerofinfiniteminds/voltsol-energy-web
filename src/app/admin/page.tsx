'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  owns_home: string;
  monthly_bill: string;
  best_contact_time: string;
  notes: string | null;
  lead_score: 'hot_lead' | 'standard' | 'low_priority';
  status: string;
  created_at: string;
  campaign_name: string | null;
  campaign_code: string | null;
}

interface Campaign {
  id: number;
  code: string;
  name: string;
  source_type: string;
  is_active: boolean;
  lead_count: number;
}

interface Stats {
  total: number;
  hot: number;
  new: number;
  this_week: number;
}

const STATUS_OPTIONS = ['new', 'contacted', 'qualified', 'converted', 'closed'];
const SCORE_OPTIONS = ['hot_lead', 'standard', 'low_priority'];

function ScoreBadge({ score }: { score: Contact['lead_score'] }) {
  if (score === 'hot_lead') {
    return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-900/50 text-red-300 border border-red-700">🔴 Hot</span>;
  }
  if (score === 'low_priority') {
    return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-600">⚪ Low</span>;
  }
  return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-900/40 text-yellow-300 border border-yellow-700">🟡 Standard</span>;
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: 'bg-blue-900/40 text-blue-300 border-blue-700',
    contacted: 'bg-purple-900/40 text-purple-300 border-purple-700',
    qualified: 'bg-amber-900/40 text-amber-300 border-amber-700',
    converted: 'bg-green-900/40 text-green-300 border-green-700',
    closed: 'bg-slate-800 text-slate-400 border-slate-600',
  };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border capitalize ${colors[status] || colors.new}`}>
      {status}
    </span>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterScore, setFilterScore] = useState('');
  const [filterCampaign, setFilterCampaign] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [newCampaign, setNewCampaign] = useState({ code: '', name: '', source_type: 'door_knock' });
  const [campaignError, setCampaignError] = useState('');
  const [campaignSuccess, setCampaignSuccess] = useState('');

  const fetchContacts = useCallback(async () => {
    const params = new URLSearchParams();
    if (filterStatus) params.set('status', filterStatus);
    if (filterScore) params.set('lead_score', filterScore);
    if (filterCampaign) params.set('campaign_id', filterCampaign);

    const res = await fetch(`/api/admin/contacts?${params}`);
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    const data = await res.json();
    setContacts(data);
  }, [filterStatus, filterScore, filterCampaign, router]);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    await Promise.allSettled([
      fetchContacts(),
      fetch('/api/admin/campaigns').then(r => r.json()).then(setCampaigns),
      fetch('/api/admin/stats').then(r => r.json()).then(setStats),
    ]);
    setLoading(false);
  }, [fetchContacts]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  async function updateStatus(id: number, status: string) {
    await fetch('/api/admin/contacts', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    // Refresh stats
    fetch('/api/admin/stats').then(r => r.json()).then(setStats);
  }

  async function toggleCampaign(id: number, is_active: boolean) {
    await fetch('/api/admin/campaigns', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, is_active }),
    });
    setCampaigns(prev => prev.map(c => c.id === id ? { ...c, is_active } : c));
  }

  async function addCampaign() {
    setCampaignError('');
    setCampaignSuccess('');
    if (!newCampaign.code || !newCampaign.name) {
      setCampaignError('Code and name are required.');
      return;
    }
    const res = await fetch('/api/admin/campaigns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCampaign),
    });
    const data = await res.json();
    if (!res.ok) {
      setCampaignError(data.error || 'Failed to create campaign.');
      return;
    }
    setCampaignSuccess(`Campaign "${data.name}" created!`);
    setNewCampaign({ code: '', name: '', source_type: 'door_knock' });
    fetch('/api/admin/campaigns').then(r => r.json()).then(setCampaigns);
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  function buildExportUrl() {
    const params = new URLSearchParams();
    if (filterStatus) params.set('status', filterStatus);
    if (filterScore) params.set('lead_score', filterScore);
    if (filterCampaign) params.set('campaign_id', filterCampaign);
    return `/api/admin/export?${params}`;
  }

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Top nav */}
      <header className="bg-slate-900 border-b border-slate-700 px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-extrabold text-amber-400">VoltSol Leads</div>
        <button onClick={handleLogout} className="text-sm text-slate-400 hover:text-white transition">Sign Out</button>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* Stats bar */}
        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Leads', value: stats.total, color: 'text-white' },
              { label: 'Hot Leads', value: stats.hot, color: 'text-red-400' },
              { label: 'New (Uncontacted)', value: stats.new, color: 'text-blue-400' },
              { label: 'This Week', value: stats.this_week, color: 'text-amber-400' },
            ].map(s => (
              <div key={s.label} className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Filters + Export */}
        <div className="flex flex-wrap gap-3 items-end">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Status</label>
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">All Statuses</option>
              {STATUS_OPTIONS.map(s => <option key={s} value={s} className="capitalize">{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Lead Score</label>
            <select
              value={filterScore}
              onChange={e => setFilterScore(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">All Scores</option>
              <option value="hot_lead">🔴 Hot Lead</option>
              <option value="standard">🟡 Standard</option>
              <option value="low_priority">⚪ Low Priority</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Campaign</label>
            <select
              value={filterCampaign}
              onChange={e => setFilterCampaign(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">All Campaigns</option>
              {campaigns.map(c => (
                <option key={c.id} value={String(c.id)}>{c.code} — {c.name}</option>
              ))}
            </select>
          </div>
          <a
            href={buildExportUrl()}
            download
            className="ml-auto bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Export CSV
          </a>
        </div>

        {/* Leads Table (desktop) / Cards (mobile) */}
        {loading ? (
          <div className="text-center text-slate-400 py-12">Loading leads...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center text-slate-400 py-12 bg-slate-900 border border-slate-700 rounded-xl">
            No leads found.
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    {['Name', 'Phone', 'Address', 'Campaign', 'Score', 'Status', 'Submitted'].map(h => (
                      <th key={h} className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <>
                      <tr
                        key={contact.id}
                        onClick={() => setExpandedId(expandedId === contact.id ? null : contact.id)}
                        className="border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer transition"
                      >
                        <td className="px-4 py-3 font-medium text-white">{contact.first_name} {contact.last_name}</td>
                        <td className="px-4 py-3 text-slate-300">
                          <a href={`tel:${contact.phone.replace(/\D/g, '')}`} onClick={e => e.stopPropagation()} className="hover:text-amber-400">{contact.phone}</a>
                        </td>
                        <td className="px-4 py-3 text-slate-300 text-sm">{contact.city}, {contact.state}</td>
                        <td className="px-4 py-3 text-slate-400 text-sm">{contact.campaign_code ?? '—'}</td>
                        <td className="px-4 py-3"><ScoreBadge score={contact.lead_score} /></td>
                        <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                          <select
                            value={contact.status}
                            onChange={e => updateStatus(contact.id, e.target.value)}
                            className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                          >
                            {STATUS_OPTIONS.map(s => <option key={s} value={s} className="capitalize">{s}</option>)}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-slate-400 text-sm">{formatDate(contact.created_at)}</td>
                      </tr>
                      {expandedId === contact.id && (
                        <tr key={`${contact.id}-expanded`} className="bg-slate-800/60 border-b border-slate-700">
                          <td colSpan={7} className="px-6 py-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                              <div><span className="text-slate-400">Email:</span> <a href={`mailto:${contact.email}`} className="text-amber-400 hover:underline">{contact.email}</a></div>
                              <div><span className="text-slate-400">Full Address:</span> <span className="text-white">{contact.street_address}, {contact.city}, {contact.state} {contact.zip}</span></div>
                              <div><span className="text-slate-400">Owns Home:</span> <span className="text-white">{contact.owns_home}</span></div>
                              <div><span className="text-slate-400">Monthly Bill:</span> <span className="text-white">{contact.monthly_bill}</span></div>
                              <div><span className="text-slate-400">Best Time:</span> <span className="text-white">{contact.best_contact_time}</span></div>
                              <div><span className="text-slate-400">Campaign:</span> <span className="text-white">{contact.campaign_name ?? '—'}</span></div>
                              {contact.notes && (
                                <div className="col-span-3"><span className="text-slate-400">Notes:</span> <span className="text-white">{contact.notes}</span></div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {contacts.map(contact => (
                <div key={contact.id} className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedId(expandedId === contact.id ? null : contact.id)}
                    className="w-full text-left px-4 py-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-white">{contact.first_name} {contact.last_name}</div>
                        <div className="text-slate-400 text-sm mt-0.5">{contact.phone}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{contact.city}, {contact.state} &mdash; {formatDate(contact.created_at)}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <ScoreBadge score={contact.lead_score} />
                        <StatusBadge status={contact.status} />
                      </div>
                    </div>
                  </button>

                  {expandedId === contact.id && (
                    <div className="border-t border-slate-700 px-4 py-4 space-y-3">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div><span className="text-slate-400 text-xs block">Email</span><a href={`mailto:${contact.email}`} className="text-amber-400 hover:underline text-xs">{contact.email}</a></div>
                        <div><span className="text-slate-400 text-xs block">Address</span><span className="text-white text-xs">{contact.street_address}, {contact.zip}</span></div>
                        <div><span className="text-slate-400 text-xs block">Owns Home</span><span className="text-white text-xs">{contact.owns_home}</span></div>
                        <div><span className="text-slate-400 text-xs block">Monthly Bill</span><span className="text-white text-xs">{contact.monthly_bill}</span></div>
                        <div><span className="text-slate-400 text-xs block">Best Time</span><span className="text-white text-xs">{contact.best_contact_time}</span></div>
                        <div><span className="text-slate-400 text-xs block">Campaign</span><span className="text-white text-xs">{contact.campaign_name ?? '—'}</span></div>
                        {contact.notes && (
                          <div className="col-span-2"><span className="text-slate-400 text-xs block">Notes</span><span className="text-white text-xs">{contact.notes}</span></div>
                        )}
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 block mb-1">Update Status</label>
                        <select
                          value={contact.status}
                          onChange={e => updateStatus(contact.id, e.target.value)}
                          className="bg-slate-800 border border-slate-600 rounded px-3 py-2 text-sm text-white w-full focus:outline-none focus:ring-1 focus:ring-amber-400"
                        >
                          {STATUS_OPTIONS.map(s => <option key={s} value={s} className="capitalize">{s}</option>)}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Campaign Management */}
        <section className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-5">Campaign Management</h2>

          {/* Campaign list */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  {['Code', 'Name', 'Source', 'Leads', 'Active'].map(h => (
                    <th key={h} className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider px-3 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {campaigns.map(c => (
                  <tr key={c.id} className="border-b border-slate-800">
                    <td className="px-3 py-3 font-mono text-amber-400 font-medium">{c.code}</td>
                    <td className="px-3 py-3 text-white">{c.name}</td>
                    <td className="px-3 py-3 text-slate-400">{c.source_type}</td>
                    <td className="px-3 py-3 text-slate-300">{c.lead_count}</td>
                    <td className="px-3 py-3">
                      <button
                        onClick={() => toggleCampaign(c.id, !c.is_active)}
                        className={`text-xs font-medium px-3 py-1 rounded-full border transition ${c.is_active ? 'bg-green-900/40 text-green-300 border-green-700 hover:bg-green-900/60' : 'bg-slate-800 text-slate-400 border-slate-600 hover:bg-slate-700'}`}
                      >
                        {c.is_active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add campaign form */}
          <div className="border-t border-slate-700 pt-5">
            <h3 className="text-sm font-semibold text-slate-300 mb-3">Add Campaign</h3>
            <div className="flex flex-wrap gap-3 items-end">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Code</label>
                <input
                  type="text"
                  value={newCampaign.code}
                  onChange={e => setNewCampaign(p => ({ ...p, code: e.target.value.toUpperCase() }))}
                  placeholder="SOLAR26"
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white w-28 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Name</label>
                <input
                  type="text"
                  value={newCampaign.name}
                  onChange={e => setNewCampaign(p => ({ ...p, name: e.target.value }))}
                  placeholder="Summer 2026 Door Knock"
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white w-56 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Source</label>
                <select
                  value={newCampaign.source_type}
                  onChange={e => setNewCampaign(p => ({ ...p, source_type: e.target.value }))}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="door_knock">Door Knock</option>
                  <option value="flyer">Flyer</option>
                  <option value="qr_code">QR Code</option>
                  <option value="referral">Referral</option>
                  <option value="online">Online</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button
                onClick={addCampaign}
                className="bg-amber-400 hover:bg-amber-300 text-[#0F172A] font-bold text-sm px-4 py-2 rounded-lg transition"
              >
                Add
              </button>
            </div>
            {campaignError && <p className="mt-2 text-sm text-red-400">{campaignError}</p>}
            {campaignSuccess && <p className="mt-2 text-sm text-green-400">{campaignSuccess}</p>}
          </div>
        </section>
      </main>
    </div>
  );
}
