'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Appointment {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  address: string | null;
  status: string;
  slot_date: string | null;
  review_requested_at: string | null;
  review_link_clicked_at: string | null;
  review_link_click_count: number;
}

interface LegacyReviewSend {
  id: number;
  email: string;
  name: string | null;
  subject: string;
  sent_at: string;
  link_clicked_at: string | null;
  click_count: number;
}

type Tab = 'voltsol' | 'legacy';

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

// Small badge showing whether a review link was clicked, and how many
// times, so Hugo can see at a glance which requests actually landed.
function ClickBadge({
  clickedAt,
  clickCount,
}: {
  clickedAt: string | null;
  clickCount: number;
}) {
  if (!clickedAt) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-500">
        Not clicked yet
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full bg-emerald-900/30 px-2.5 py-1 text-[11px] font-medium text-emerald-400"
      title={`First clicked ${formatDateTime(clickedAt)}`}
    >
      ✓ Clicked{clickCount > 1 ? ` ×${clickCount}` : ''} · {formatDateTime(clickedAt)}
    </span>
  );
}

const inputClass =
  'w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none';

const buttonClass =
  'rounded-lg px-4 py-2 text-sm font-bold transition disabled:opacity-50';

type ClickedFilter = 'all' | 'yes' | 'no';
type SortKey = 'sent_at' | 'click_count' | 'name';
type SortDir = 'asc' | 'desc';

// ─── Main page ───────────────────────────────────────────────────────────────

export default function ReviewsPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('voltsol');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // VoltSol customers state
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [sendingReview, setSendingReview] = useState<string | null>(null);

  // Legacy customers state
  const [legacyEmail, setLegacyEmail] = useState('');
  const [legacyName, setLegacyName] = useState('');
  const [legacySubject, setLegacySubject] = useState('');
  const [legacyBody, setLegacyBody] = useState('');
  const [legacySends, setLegacySends] = useState<LegacyReviewSend[]>([]);
  const [savingTemplate, setSavingTemplate] = useState(false);
  const [sendingLegacy, setSendingLegacy] = useState(false);
  const [confirmSend, setConfirmSend] = useState(false);

  // Legacy sends list: search/filter/sort/pagination
  const [sendsQuery, setSendsQuery] = useState('');
  const [sendsQueryInput, setSendsQueryInput] = useState('');
  const [sendsClicked, setSendsClicked] = useState<ClickedFilter>('all');
  const [sendsSort, setSendsSort] = useState<SortKey>('sent_at');
  const [sendsDir, setSendsDir] = useState<SortDir>('desc');
  const [sendsPage, setSendsPage] = useState(1);
  const [sendsTotal, setSendsTotal] = useState(0);
  const [sendsTotalPages, setSendsTotalPages] = useState(1);
  const [sendsLoading, setSendsLoading] = useState(false);

  // Load VoltSol appointments (completed only)
  const loadAppointments = useCallback(async () => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/appointments?status=completed', {
      cache: 'no-store',
    });
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load appointments.');
      setLoading(false);
      return;
    }
    const data = (await res.json()) as Appointment[];
    setAppointments(data);
    setLoading(false);
  }, [router]);

  // Load legacy template (once per tab visit)
  const loadLegacyTemplate = useCallback(async () => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/legacy-review-template', { cache: 'no-store' });
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load legacy template.');
      setLoading(false);
      return;
    }
    const template = (await res.json()) as { subject: string; body: string };
    setLegacySubject(template.subject);
    setLegacyBody(template.body);
    setLoading(false);
  }, [router]);

  // Load legacy sends list — reacts to search/filter/sort/page
  const loadLegacySends = useCallback(async () => {
    setSendsLoading(true);
    const params = new URLSearchParams();
    if (sendsQuery) params.set('q', sendsQuery);
    if (sendsClicked !== 'all') params.set('clicked', sendsClicked);
    params.set('sort', sendsSort);
    params.set('dir', sendsDir);
    params.set('page', String(sendsPage));
    const res = await fetch(`/api/admin/legacy-reviews?${params.toString()}`, {
      cache: 'no-store',
    });
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load sends.');
      setSendsLoading(false);
      return;
    }
    const data = (await res.json()) as {
      rows: LegacyReviewSend[];
      total: number;
      totalPages: number;
    };
    setLegacySends(data.rows);
    setSendsTotal(data.total);
    setSendsTotalPages(data.totalPages);
    setSendsLoading(false);
  }, [router, sendsQuery, sendsClicked, sendsSort, sendsDir, sendsPage]);

  useEffect(() => {
    if (tab === 'voltsol') {
      loadAppointments();
    } else {
      loadLegacyTemplate();
    }
  }, [tab, loadAppointments, loadLegacyTemplate]);

  useEffect(() => {
    if (tab === 'legacy') {
      loadLegacySends();
    }
  }, [tab, loadLegacySends]);

  // Debounce the search box — wait 350ms after typing stops before firing
  // the request, and jump back to page 1 whenever the search text changes.
  useEffect(() => {
    const t = setTimeout(() => {
      setSendsQuery(sendsQueryInput.trim());
      setSendsPage(1);
    }, 350);
    return () => clearTimeout(t);
  }, [sendsQueryInput]);

  // VoltSol: Request review
  async function requestReview(apptId: string, force = false) {
    setSendingReview(apptId);
    setError('');
    const res = await fetch(
      `/api/admin/appointments/${apptId}/request-review`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force }),
      }
    );
    setSendingReview(null);
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error || 'Failed to send review request.');
      return;
    }
    await loadAppointments();
  }

  // Legacy: Save template
  async function saveTemplate() {
    setSavingTemplate(true);
    setError('');
    const res = await fetch('/api/admin/legacy-review-template', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: legacySubject,
        body: legacyBody,
      }),
    });
    setSavingTemplate(false);
    if (!res.ok) {
      setError('Failed to save template.');
      return;
    }
    alert('Template saved as default.');
  }

  // Legacy: Send email
  async function sendLegacyEmail() {
    if (!legacyEmail.trim()) {
      setError('Email is required.');
      return;
    }
    if (!legacySubject.trim() || !legacyBody.trim()) {
      setError('Subject and body are required.');
      return;
    }
    setSendingLegacy(true);
    setError('');
    setConfirmSend(false);
    const res = await fetch('/api/admin/legacy-reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: legacyEmail.trim(),
        name: legacyName.trim() || undefined,
        subject: legacySubject,
        body: legacyBody,
      }),
    });
    setSendingLegacy(false);
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error || 'Failed to send email.');
      return;
    }
    // Clear form and reload the sends list (jump to page 1 sorted by most
    // recent so the just-sent email is visible)
    setLegacyEmail('');
    setLegacyName('');
    setSendsSort('sent_at');
    setSendsDir('desc');
    setSendsPage(1);
    await loadLegacySends();
    alert('Email sent successfully!');
  }

  return (
    <div className="text-white">
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <h1 className="mb-6 text-2xl font-bold">Review Outreach</h1>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-slate-700">
          <button
            onClick={() => setTab('voltsol')}
            className={`px-4 py-2 text-sm font-semibold transition ${
              tab === 'voltsol'
                ? 'border-b-2 border-amber-400 text-amber-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            VoltSol Customers
          </button>
          <button
            onClick={() => setTab('legacy')}
            className={`px-4 py-2 text-sm font-semibold transition ${
              tab === 'legacy'
                ? 'border-b-2 border-amber-400 text-amber-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Legacy Customers
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-500 bg-red-900/40 px-6 py-4 text-red-300">
            {error}
          </div>
        )}

        {loading && (
          <div className="py-12 text-center text-slate-400">Loading...</div>
        )}

        {/* VoltSol Customers Tab */}
        {!loading && tab === 'voltsol' && (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">
              Completed appointments ready for review requests. Button becomes
              &ldquo;Review Requested ✓&rdquo; after sending.
            </p>
            {appointments.some(a => a.review_requested_at) && (
              <p className="text-xs text-slate-500">
                {appointments.filter(a => a.review_link_clicked_at).length} of{' '}
                {appointments.filter(a => a.review_requested_at).length} sent requests clicked
              </p>
            )}
            {appointments.length === 0 && (
              <p className="py-8 text-center text-slate-500">
                No completed appointments yet.
              </p>
            )}
            {appointments.map((appt) => (
              <div
                key={appt.id}
                className="rounded-xl border border-slate-700 bg-slate-900 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="font-semibold text-white">
                      {appt.first_name} {appt.last_name}
                    </div>
                    <div className="text-sm text-slate-400">{appt.email}</div>
                    {appt.phone && (
                      <div className="text-sm text-slate-400">{appt.phone}</div>
                    )}
                    {appt.slot_date && (
                      <div className="mt-1 text-xs text-slate-500">
                        Install date: {formatDate(appt.slot_date)}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {appt.review_requested_at ? (
                      <>
                        <div className="rounded-lg bg-green-900/30 px-3 py-2 text-center text-xs text-green-400">
                          ✓ Review Requested
                          <div className="mt-0.5 text-[10px] text-slate-500">
                            {formatDate(appt.review_requested_at)}
                          </div>
                        </div>
                        <ClickBadge
                          clickedAt={appt.review_link_clicked_at}
                          clickCount={appt.review_link_click_count}
                        />
                        <button
                          disabled={sendingReview === appt.id}
                          onClick={() => requestReview(appt.id, true)}
                          className={`${buttonClass} border border-amber-500/50 bg-transparent text-amber-400 hover:bg-amber-500/10`}
                        >
                          {sendingReview === appt.id
                            ? 'Sending...'
                            : 'Send Again'}
                        </button>
                      </>
                    ) : (
                      <button
                        disabled={sendingReview === appt.id}
                        onClick={() => requestReview(appt.id)}
                        className={`${buttonClass} bg-amber-500 text-slate-900 hover:bg-amber-400`}
                      >
                        {sendingReview === appt.id
                          ? 'Sending...'
                          : 'Request Review'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legacy Customers Tab */}
        {!loading && tab === 'legacy' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white">
                Send Review Request
              </h2>
              <p className="text-sm text-slate-400">
                Email pre-VoltSol customers. The template below uses a{' '}
                <code className="text-amber-400">{'{name}'}</code> token that
                falls back to &ldquo;there&rdquo; if name is blank, and a{' '}
                <code className="text-amber-400">{'{review_link}'}</code>{' '}
                token for the tracked review link (any raw Google review URL
                pasted directly is also auto-tracked).
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs text-slate-400">
                  Email <span className="text-red-400">*</span>
                  <input
                    type="email"
                    required
                    value={legacyEmail}
                    onChange={(e) => setLegacyEmail(e.target.value)}
                    className={`mt-1 ${inputClass}`}
                    placeholder="customer@example.com"
                  />
                </label>
                <label className="block text-xs text-slate-400">
                  Name (optional)
                  <input
                    type="text"
                    value={legacyName}
                    onChange={(e) => setLegacyName(e.target.value)}
                    className={`mt-1 ${inputClass}`}
                    placeholder="John"
                  />
                </label>
              </div>

              <label className="block text-xs text-slate-400">
                Subject <span className="text-red-400">*</span>
                <input
                  type="text"
                  required
                  value={legacySubject}
                  onChange={(e) => setLegacySubject(e.target.value)}
                  className={`mt-1 ${inputClass}`}
                />
              </label>

              <label className="block text-xs text-slate-400">
                Body <span className="text-red-400">*</span>
                <textarea
                  required
                  value={legacyBody}
                  onChange={(e) => setLegacyBody(e.target.value)}
                  rows={12}
                  className={`mt-1 ${inputClass}`}
                />
              </label>

              <div className="flex flex-wrap gap-3">
                <button
                  disabled={savingTemplate}
                  onClick={saveTemplate}
                  className={`${buttonClass} border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800`}
                >
                  {savingTemplate ? 'Saving...' : 'Save as Default Template'}
                </button>
                <button
                  disabled={sendingLegacy || !legacyEmail.trim()}
                  onClick={() => setConfirmSend(true)}
                  className={`${buttonClass} bg-amber-500 text-slate-900 hover:bg-amber-400`}
                >
                  Send Email
                </button>
              </div>
            </div>

            {/* Confirmation modal */}
            {confirmSend && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                <div className="max-w-md rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Confirm Send
                  </h3>
                  <p className="text-sm text-slate-300">
                    You&rsquo;re about to email{' '}
                    <span className="font-semibold text-amber-400">
                      {legacyEmail}
                    </span>
                    . Send?
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setConfirmSend(false)}
                      className={`${buttonClass} flex-1 border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={sendLegacyEmail}
                      className={`${buttonClass} flex-1 bg-amber-500 text-slate-900 hover:bg-amber-400`}
                      disabled={sendingLegacy}
                    >
                      {sendingLegacy ? 'Sending...' : 'Yes, Send'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Recent sends list — searchable, filterable, sortable, paginated */}
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-white">All Sends</h2>
                {sendsTotal > 0 && (
                  <p className="text-xs text-slate-500">
                    {sendsTotal} total
                    {sendsClicked === 'all' && ` · sorted by ${sendsSort === 'sent_at' ? 'date sent' : sendsSort === 'click_count' ? 'click count' : 'name'} (${sendsDir === 'desc' ? '↓' : '↑'})`}
                  </p>
                )}
              </div>

              {/* Filter bar — stacks vertically on mobile, one row on desktop */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="text"
                  value={sendsQueryInput}
                  onChange={(e) => setSendsQueryInput(e.target.value)}
                  placeholder="Search name, email, or subject…"
                  className={inputClass}
                />
                <div className="flex gap-2">
                  {(['all', 'yes', 'no'] as ClickedFilter[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => {
                        setSendsClicked(v);
                        setSendsPage(1);
                      }}
                      className={`flex-1 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition sm:flex-none ${
                        sendsClicked === v
                          ? 'bg-amber-500 text-slate-900'
                          : 'border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {v === 'all' ? 'All' : v === 'yes' ? 'Clicked' : 'Not Clicked'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort controls — dropdown works well at any width, avoids a
                  cramped sortable-header row on narrow screens. */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500">Sort by</span>
                <select
                  value={sendsSort}
                  onChange={(e) => {
                    setSendsSort(e.target.value as SortKey);
                    setSendsPage(1);
                  }}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-2 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="sent_at">Date Sent</option>
                  <option value="click_count">Click Count</option>
                  <option value="name">Name</option>
                </select>
                <button
                  onClick={() => {
                    setSendsDir(d => (d === 'asc' ? 'desc' : 'asc'));
                    setSendsPage(1);
                  }}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs text-slate-300 hover:bg-slate-700"
                  title={sendsDir === 'desc' ? 'Descending' : 'Ascending'}
                >
                  {sendsDir === 'desc' ? '↓ Desc' : '↑ Asc'}
                </button>
              </div>

              {sendsLoading && (
                <p className="py-6 text-center text-sm text-slate-500">Loading…</p>
              )}

              {!sendsLoading && legacySends.length === 0 && (
                <p className="py-6 text-center text-sm text-slate-500">
                  {sendsQuery || sendsClicked !== 'all'
                    ? 'No sends match your filters.'
                    : 'No sends yet.'}
                </p>
              )}

              {!sendsLoading && legacySends.length > 0 && (
                <div className="space-y-2">
                  {legacySends.map((send) => (
                    <div
                      key={send.id}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-3 text-sm"
                    >
                      <div className="font-semibold text-white">
                        {send.name || '(no name)'} &mdash; {send.email}
                      </div>
                      <div className="text-xs text-slate-400">
                        {send.subject}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-500">
                          Sent {formatDate(send.sent_at)}
                        </span>
                        <ClickBadge
                          clickedAt={send.link_clicked_at}
                          clickCount={send.click_count}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination — simple prev/next, wraps cleanly on mobile */}
              {sendsTotalPages > 1 && (
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    disabled={sendsPage <= 1}
                    onClick={() => setSendsPage(p => Math.max(1, p - 1))}
                    className={`${buttonClass} border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800`}
                  >
                    ← Prev
                  </button>
                  <span className="text-xs text-slate-500">
                    Page {sendsPage} of {sendsTotalPages}
                  </span>
                  <button
                    disabled={sendsPage >= sendsTotalPages}
                    onClick={() => setSendsPage(p => Math.min(sendsTotalPages, p + 1))}
                    className={`${buttonClass} border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800`}
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
