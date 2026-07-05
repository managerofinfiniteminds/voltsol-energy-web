'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Partner {
  id: number;
  company_name: string;
  category: string | null;
  contact_name: string | null;
  contact_email: string | null;
  website_url: string | null;
  status: string;
  logo_url: string | null;
  blurb: string | null;
  visible: boolean;
  sort_order: number;
  link_target_url: string | null;
  link_verified: boolean;
  link_verified_at: string | null;
  created_at: string;
  last_contacted_at: string | null;
}

interface Interaction {
  id: number;
  kind: string;
  body: string | null;
  resend_id: string | null;
  created_at: string;
}

type StatusFilter = 'all' | 'prospect' | 'contacted' | 'claimed' | 'pending_approval' | 'live' | 'declined' | 'inactive';
type SortKey = 'created_at' | 'last_contacted_at' | 'company_name' | 'status';
type SortDir = 'asc' | 'desc';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatDateTime(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function statusBadgeClass(status: string): string {
  switch (status) {
    case 'live':
      return 'bg-emerald-900/30 text-emerald-400';
    case 'pending_approval':
      return 'bg-amber-900/30 text-amber-400';
    case 'claimed':
      return 'bg-blue-900/30 text-blue-400';
    case 'contacted':
      return 'bg-slate-700 text-slate-300';
    case 'declined':
    case 'inactive':
      return 'bg-slate-800 text-slate-500';
    default: // prospect
      return 'bg-slate-800 text-slate-400';
  }
}

const inputClass =
  'w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none';

const buttonClass =
  'rounded-lg px-4 py-2 text-sm font-bold transition disabled:opacity-50';

const DEFAULT_OUTREACH_SUBJECT = 'Partnership with VoltSol Energy?';
const DEFAULT_OUTREACH_BODY = `Hi {name},

I run VoltSol Energy — we do solar installs in Northern California. We've really valued working with {companyName}, and I'd love to feature you as a partner on our site (voltsolenergy.com/partners) with your logo, a short write-up, and a real link to your site.

In return, if you'd be open to it, a simple link back to VoltSol from your site would mean a lot — helps other folks find us when they're looking to cut the cord on their utility.

It's fast — just one link to fill out a quick form, no login needed:

{claim_link}

Let me know if you're interested!

— Hugo
VoltSol Energy
Northern California`;

// ─── Main page ───────────────────────────────────────────────────────────────

export default function PartnersPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // List state
  const [partners, setPartners] = useState<Partner[]>([]);
  const [query, setQuery] = useState('');
  const [queryInput, setQueryInput] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortKey, setSortKey] = useState<SortKey>('created_at');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Add partner modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');
  const [newWebsiteUrl, setNewWebsiteUrl] = useState('');
  const [addingPartner, setAddingPartner] = useState(false);

  // Expanded partner detail
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedPartner, setExpandedPartner] = useState<Partner | null>(null);
  const [expandedInteractions, setExpandedInteractions] = useState<Interaction[]>([]);
  const [expandedLoading, setExpandedLoading] = useState(false);

  // Edit fields for expanded partner
  const [editLogoUrl, setEditLogoUrl] = useState('');
  const [editBlurb, setEditBlurb] = useState('');
  const [editSortOrder, setEditSortOrder] = useState('0');
  const [editCategory, setEditCategory] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [saving, setSaving] = useState(false);

  // Send outreach
  const [showOutreachModal, setShowOutreachModal] = useState(false);
  const [outreachSubject, setOutreachSubject] = useState(DEFAULT_OUTREACH_SUBJECT);
  const [outreachBody, setOutreachBody] = useState(DEFAULT_OUTREACH_BODY);
  const [sendingOutreach, setSendingOutreach] = useState(false);

  // Add note
  const [noteText, setNoteText] = useState('');
  const [addingNote, setAddingNote] = useState(false);

  // Load partners list
  const loadPartners = useCallback(async () => {
    setLoading(true);
    setError('');
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (statusFilter !== 'all') params.set('status', statusFilter);
    params.set('sort', sortKey);
    params.set('dir', sortDir);
    params.set('page', String(page));

    const res = await fetch(`/api/admin/partners?${params.toString()}`, {
      cache: 'no-store',
    });
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load partners.');
      setLoading(false);
      return;
    }
    const data = (await res.json()) as {
      rows: Partner[];
      total: number;
      totalPages: number;
    };
    setPartners(data.rows);
    setTotal(data.total);
    setTotalPages(data.totalPages);
    setLoading(false);
  }, [router, query, statusFilter, sortKey, sortDir, page]);

  useEffect(() => {
    loadPartners();
  }, [loadPartners]);

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => {
      setQuery(queryInput.trim());
      setPage(1);
    }, 350);
    return () => clearTimeout(t);
  }, [queryInput]);

  // Load expanded partner detail
  const loadPartnerDetail = useCallback(async (id: number) => {
    setExpandedLoading(true);
    const res = await fetch(`/api/admin/partners/${id}`, { cache: 'no-store' });
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load partner detail.');
      setExpandedLoading(false);
      return;
    }
    const data = (await res.json()) as {
      partner: Partner;
      interactions: Interaction[];
    };
    setExpandedPartner(data.partner);
    setExpandedInteractions(data.interactions);
    setEditLogoUrl(data.partner.logo_url || '');
    setEditBlurb(data.partner.blurb || '');
    setEditSortOrder(String(data.partner.sort_order));
    setEditCategory(data.partner.category || '');
    setEditStatus(data.partner.status);
    setExpandedLoading(false);
  }, [router]);

  useEffect(() => {
    if (expandedId !== null) {
      loadPartnerDetail(expandedId);
    }
  }, [expandedId, loadPartnerDetail]);

  async function handleAddPartner() {
    if (!newCompanyName.trim()) {
      alert('Company name is required.');
      return;
    }
    setAddingPartner(true);
    const res = await fetch('/api/admin/partners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        company_name: newCompanyName,
        category: newCategory,
        contact_name: newContactName,
        contact_email: newContactEmail,
        website_url: newWebsiteUrl,
      }),
    });
    setAddingPartner(false);
    if (!res.ok) {
      const err = await res.json();
      alert(err.error || 'Failed to add partner.');
      return;
    }
    setShowAddModal(false);
    setNewCompanyName('');
    setNewCategory('');
    setNewContactName('');
    setNewContactEmail('');
    setNewWebsiteUrl('');
    loadPartners();
  }

  async function handleSavePartner() {
    if (!expandedPartner) return;
    setSaving(true);
    const res = await fetch(`/api/admin/partners/${expandedPartner.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        logo_url: editLogoUrl,
        blurb: editBlurb,
        sort_order: parseInt(editSortOrder, 10) || 0,
        category: editCategory,
        status: editStatus,
      }),
    });
    setSaving(false);
    if (!res.ok) {
      const err = await res.json();
      alert(err.error || 'Failed to save partner.');
      return;
    }
    loadPartnerDetail(expandedPartner.id);
    loadPartners();
  }

  async function handleToggleVisible() {
    if (!expandedPartner) return;
    setSaving(true);
    const res = await fetch(`/api/admin/partners/${expandedPartner.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visible: !expandedPartner.visible }),
    });
    setSaving(false);
    if (!res.ok) {
      const err = await res.json();
      alert(err.error || 'Failed to toggle visibility.');
      return;
    }
    loadPartnerDetail(expandedPartner.id);
    loadPartners();
  }

  async function handleSendOutreach() {
    if (!expandedPartner) return;
    if (!outreachSubject.trim() || !outreachBody.trim()) {
      alert('Subject and body are required.');
      return;
    }
    setSendingOutreach(true);
    const res = await fetch(`/api/admin/partners/${expandedPartner.id}/send-outreach`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: outreachSubject,
        body: outreachBody,
      }),
    });
    setSendingOutreach(false);
    if (!res.ok) {
      const err = await res.json();
      alert(err.error || 'Failed to send outreach email.');
      return;
    }
    setShowOutreachModal(false);
    loadPartnerDetail(expandedPartner.id);
    loadPartners();
  }

  async function handleAddNote() {
    if (!expandedPartner) return;
    if (!noteText.trim()) {
      alert('Note cannot be empty.');
      return;
    }
    setAddingNote(true);
    const res = await fetch(`/api/admin/partners/${expandedPartner.id}/note`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note: noteText }),
    });
    setAddingNote(false);
    if (!res.ok) {
      const err = await res.json();
      alert(err.error || 'Failed to add note.');
      return;
    }
    setNoteText('');
    loadPartnerDetail(expandedPartner.id);
  }

  return (
    <div className="min-h-screen bg-[#0F172A] p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-3xl font-bold">
            <span className="text-white">Partner</span> <span className="text-amber-400">Program</span>
          </h1>
          <button
            onClick={() => setShowAddModal(true)}
            className={`${buttonClass} bg-amber-500 text-slate-900 hover:bg-amber-400`}
          >
            + Add Partner
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/50 bg-red-900/20 px-4 py-3 text-red-400">
            {error}
          </div>
        )}

        {/* Search + Filters */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <input
            type="text"
            placeholder="Search partners..."
            value={queryInput}
            onChange={e => setQueryInput(e.target.value)}
            className={inputClass}
          />
          <select
            value={statusFilter}
            onChange={e => {
              setStatusFilter(e.target.value as StatusFilter);
              setPage(1);
            }}
            className={inputClass}
          >
            <option value="all">All Statuses</option>
            <option value="prospect">Prospect</option>
            <option value="contacted">Contacted</option>
            <option value="claimed">Claimed</option>
            <option value="pending_approval">Pending Approval</option>
            <option value="live">Live</option>
            <option value="declined">Declined</option>
            <option value="inactive">Inactive</option>
          </select>
          <select
            value={sortKey}
            onChange={e => setSortKey(e.target.value as SortKey)}
            className={inputClass}
          >
            <option value="created_at">Sort: Created</option>
            <option value="last_contacted_at">Sort: Last Contacted</option>
            <option value="company_name">Sort: Name</option>
            <option value="status">Sort: Status</option>
          </select>
          <select
            value={sortDir}
            onChange={e => setSortDir(e.target.value as SortDir)}
            className={inputClass}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>

        {/* Partner List */}
        {loading ? (
          <div className="py-8 text-center text-slate-400">Loading...</div>
        ) : partners.length === 0 ? (
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center text-slate-400">
            No partners found. Click &quot;+ Add Partner&quot; to get started.
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {partners.map(p => (
                <div key={p.id} className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50">
                  <button
                    onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                    className="w-full px-4 py-3 text-left transition hover:bg-slate-800"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{p.company_name}</span>
                          {p.category && (
                            <span className="rounded-full bg-slate-700 px-2 py-0.5 text-xs text-slate-300">
                              {p.category}
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-400">
                          <span className={`rounded-full px-2 py-0.5 font-medium ${statusBadgeClass(p.status)}`}>
                            {p.status}
                          </span>
                          {p.visible && (
                            <span className="rounded-full bg-emerald-900/30 px-2 py-0.5 text-emerald-400">
                              ✓ Visible on site
                            </span>
                          )}
                          {p.link_verified && (
                            <span className="rounded-full bg-blue-900/30 px-2 py-0.5 text-blue-400">
                              ✓ Link verified
                            </span>
                          )}
                          {p.last_contacted_at && (
                            <span>Last contacted: {formatDate(p.last_contacted_at)}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-slate-400">
                        {expandedId === p.id ? '▼' : '▶'}
                      </span>
                    </div>
                  </button>

                  {expandedId === p.id && (
                    <div className="border-t border-slate-700 bg-slate-800/30 px-4 py-4">
                      {expandedLoading ? (
                        <div className="py-4 text-center text-slate-400">Loading...</div>
                      ) : expandedPartner ? (
                        <div className="space-y-6">
                          {/* Edit fields */}
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <label className="mb-1 block text-xs font-medium text-slate-400">Category</label>
                              <input
                                type="text"
                                value={editCategory}
                                onChange={e => setEditCategory(e.target.value)}
                                placeholder="e.g., Electrical, HVAC, Roofing"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium text-slate-400">Status</label>
                              <select
                                value={editStatus}
                                onChange={e => setEditStatus(e.target.value)}
                                className={inputClass}
                              >
                                <option value="prospect">Prospect</option>
                                <option value="contacted">Contacted</option>
                                <option value="claimed">Claimed</option>
                                <option value="pending_approval">Pending Approval</option>
                                <option value="live">Live</option>
                                <option value="declined">Declined</option>
                                <option value="inactive">Inactive</option>
                              </select>
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium text-slate-400">Logo URL</label>
                              <input
                                type="text"
                                value={editLogoUrl}
                                onChange={e => setEditLogoUrl(e.target.value)}
                                placeholder="https://example.com/logo.png or /images/logo.png"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium text-slate-400">Sort Order (lower = earlier)</label>
                              <input
                                type="number"
                                value={editSortOrder}
                                onChange={e => setEditSortOrder(e.target.value)}
                                className={inputClass}
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="mb-1 block text-xs font-medium text-slate-400">Blurb (one-line description)</label>
                              <textarea
                                value={editBlurb}
                                onChange={e => setEditBlurb(e.target.value)}
                                rows={2}
                                placeholder="Short description of the partner..."
                                className={inputClass}
                              />
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={handleSavePartner}
                              disabled={saving}
                              className={`${buttonClass} bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-800`}
                            >
                              {saving ? 'Saving...' : 'Save Changes'}
                            </button>
                            <button
                              onClick={handleToggleVisible}
                              disabled={saving || expandedPartner.status !== 'pending_approval' && expandedPartner.status !== 'live'}
                              className={`${buttonClass} ${
                                expandedPartner.visible
                                  ? 'bg-slate-700 text-white hover:bg-slate-600'
                                  : 'bg-emerald-600 text-white hover:bg-emerald-500'
                              }`}
                              title={
                                expandedPartner.status !== 'pending_approval' && expandedPartner.status !== 'live'
                                  ? 'Only pending_approval or live partners can be published'
                                  : ''
                              }
                            >
                              {expandedPartner.visible ? 'Hide from Site' : 'Publish to Site'}
                            </button>
                            <button
                              onClick={() => {
                                setOutreachSubject(DEFAULT_OUTREACH_SUBJECT);
                                setOutreachBody(DEFAULT_OUTREACH_BODY);
                                setShowOutreachModal(true);
                              }}
                              disabled={!expandedPartner.contact_email}
                              className={`${buttonClass} bg-amber-600 text-white hover:bg-amber-500 disabled:bg-amber-900`}
                              title={!expandedPartner.contact_email ? 'No contact email set' : ''}
                            >
                              Send Outreach Email
                            </button>
                          </div>

                          {/* Contact info */}
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3 text-sm">
                            <div className="grid gap-2 md:grid-cols-2">
                              <div><span className="text-slate-400">Contact:</span> <span className="text-white">{expandedPartner.contact_name || '—'}</span></div>
                              <div><span className="text-slate-400">Email:</span> <span className="text-white">{expandedPartner.contact_email || '—'}</span></div>
                              <div><span className="text-slate-400">Website:</span> <span className="text-white">{expandedPartner.website_url || '—'}</span></div>
                              <div><span className="text-slate-400">Backlink URL:</span> <span className="text-white">{expandedPartner.link_target_url || '—'}</span></div>
                            </div>
                          </div>

                          {/* Add note */}
                          <div>
                            <label className="mb-2 block text-sm font-medium text-white">Add Note</label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={noteText}
                                onChange={e => setNoteText(e.target.value)}
                                placeholder="Log a quick note..."
                                className={inputClass}
                                onKeyDown={e => {
                                  if (e.key === 'Enter' && noteText.trim()) {
                                    handleAddNote();
                                  }
                                }}
                              />
                              <button
                                onClick={handleAddNote}
                                disabled={addingNote || !noteText.trim()}
                                className={`${buttonClass} bg-slate-700 text-white hover:bg-slate-600`}
                              >
                                {addingNote ? 'Adding...' : 'Add'}
                              </button>
                            </div>
                          </div>

                          {/* Timeline */}
                          <div>
                            <h3 className="mb-3 text-sm font-semibold text-white">Timeline</h3>
                            {expandedInteractions.length === 0 ? (
                              <div className="text-sm text-slate-400">No activity yet.</div>
                            ) : (
                              <div className="space-y-2">
                                {expandedInteractions.map(int => (
                                  <div key={int.id} className="rounded border border-slate-700 bg-slate-800/50 p-3 text-sm">
                                    <div className="flex items-center justify-between">
                                      <span className="font-semibold text-amber-400">{int.kind}</span>
                                      <span className="text-xs text-slate-400">{formatDateTime(int.created_at)}</span>
                                    </div>
                                    {int.body && (
                                      <div className="mt-1 whitespace-pre-wrap text-slate-300">{int.body}</div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-slate-400">
                  Page {page} of {totalPages} ({total} total)
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className={`${buttonClass} bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-30`}
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className={`${buttonClass} bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-30`}
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Add Partner Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-lg border border-slate-700 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold text-white">Add New Partner</h2>
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Company Name *</label>
                <input
                  type="text"
                  value={newCompanyName}
                  onChange={e => setNewCompanyName(e.target.value)}
                  className={inputClass}
                  autoFocus
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Category</label>
                <input
                  type="text"
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value)}
                  placeholder="e.g., Electrical, HVAC, Roofing"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Contact Name</label>
                <input
                  type="text"
                  value={newContactName}
                  onChange={e => setNewContactName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Contact Email</label>
                <input
                  type="email"
                  value={newContactEmail}
                  onChange={e => setNewContactEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Website URL</label>
                <input
                  type="url"
                  value={newWebsiteUrl}
                  onChange={e => setNewWebsiteUrl(e.target.value)}
                  placeholder="https://example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <button
                onClick={handleAddPartner}
                disabled={addingPartner || !newCompanyName.trim()}
                className={`${buttonClass} flex-1 bg-amber-500 text-slate-900 hover:bg-amber-400`}
              >
                {addingPartner ? 'Adding...' : 'Add Partner'}
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className={`${buttonClass} bg-slate-700 text-white hover:bg-slate-600`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Send Outreach Modal */}
      {showOutreachModal && expandedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl rounded-lg border border-slate-700 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold text-white">Send Outreach Email</h2>
            <div className="mb-4 rounded border border-slate-700 bg-slate-800/50 p-3 text-sm text-slate-300">
              To: <strong>{expandedPartner.contact_email}</strong>
            </div>
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Subject</label>
                <input
                  type="text"
                  value={outreachSubject}
                  onChange={e => setOutreachSubject(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Body</label>
                <textarea
                  value={outreachBody}
                  onChange={e => setOutreachBody(e.target.value)}
                  rows={12}
                  className={inputClass}
                />
                <div className="mt-1 text-xs text-slate-500">
                  Tokens: {'{'}name{'}'}, {'{'}companyName{'}'}, {'{'}claim_link{'}'}
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <button
                onClick={handleSendOutreach}
                disabled={sendingOutreach}
                className={`${buttonClass} flex-1 bg-amber-500 text-slate-900 hover:bg-amber-400`}
              >
                {sendingOutreach ? 'Sending...' : 'Send Email'}
              </button>
              <button
                onClick={() => setShowOutreachModal(false)}
                className={`${buttonClass} bg-slate-700 text-white hover:bg-slate-600`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
