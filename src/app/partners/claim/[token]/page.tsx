'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Partner {
  company_name: string;
  category: string | null;
  website_url: string | null;
  logo_url: string | null;
  blurb: string | null;
}

const inputClass =
  'w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-amber-400 focus:outline-none';

// type="url" inputs require an absolute URL with a scheme. Prospect data
// entered pre-launch (e.g. "rmeinnovations.com") lacks one, which makes the
// browser's native validation silently block form submission with a
// "Please include http:// or https://" tooltip. Normalize on load and again
// before submit so a bare domain never breaks the form.
function normalizeUrl(url: string | null | undefined): string {
  const trimmed = (url || '').trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export default function PartnerClaimPage({
  params,
}: {
  params: { token: string };
}) {
  // NOTE: This site runs Next 14.2.5, where `params` in a Client Component is a
  // plain object — NOT a promise. Do not wrap it in React's `use()` hook (that
  // is the Next 15 pattern) or it throws React error #438 and the whole page
  // crashes to the root error boundary before the form renders.
  const { token } = params;
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [partner, setPartner] = useState<Partner | null>(null);

  // Form fields
  const [companyName, setCompanyName] = useState('');
  const [category, setCategory] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [blurb, setBlurb] = useState('');
  const [linkTargetUrl, setLinkTargetUrl] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function loadPartner() {
      setLoading(true);
      setError('');
      const res = await fetch(`/api/partners/claim/${token}`);
      if (res.status === 404) {
        setError('This claim link is not valid. Please check the link or contact VoltSol Energy.');
        setLoading(false);
        return;
      }
      if (res.status === 410) {
        setError('This claim link has already been used. If you need to make changes, please contact VoltSol Energy directly.');
        setLoading(false);
        return;
      }
      if (!res.ok) {
        setError('Unable to load partner information. Please try again later.');
        setLoading(false);
        return;
      }
      const data = (await res.json()) as { partner: Partner };
      setPartner(data.partner);
      setCompanyName(data.partner.company_name);
      setCategory(data.partner.category || '');
      setWebsiteUrl(normalizeUrl(data.partner.website_url));
      setLogoUrl(normalizeUrl(data.partner.logo_url));
      setBlurb(data.partner.blurb || '');
      setLoading(false);
    }
    loadPartner();
  }, [token]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!companyName.trim()) {
      alert('Company name is required.');
      return;
    }

    setSubmitting(true);
    const res = await fetch(`/api/partners/claim/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        company_name: companyName,
        category,
        website_url: normalizeUrl(websiteUrl),
        logo_url: normalizeUrl(logoUrl),
        blurb,
        link_target_url: normalizeUrl(linkTargetUrl),
        honeypot,
      }),
    });
    setSubmitting(false);

    if (!res.ok) {
      const err = await res.json();
      alert(err.error || 'Failed to submit. Please try again.');
      return;
    }

    setSubmitted(true);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0F172A] p-4">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0F172A] p-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-6">
            <Image
              src="/images/voltsol-mark.svg"
              alt="VoltSol Energy"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
          <div className="rounded-lg border border-red-500/50 bg-red-900/20 px-6 py-8">
            <h1 className="mb-3 text-xl font-bold text-red-400">Link Not Valid</h1>
            <p className="text-slate-300">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0F172A] p-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-6">
            <Image
              src="/images/voltsol-mark.svg"
              alt="VoltSol Energy"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
          <div className="rounded-lg border border-emerald-500/50 bg-emerald-900/20 px-6 py-8">
            <h1 className="mb-3 text-2xl font-bold text-emerald-400">Thank You!</h1>
            <p className="mb-4 text-slate-300">
              Your partner profile has been submitted. Hugo will review it soon and your listing will go live on voltsolenergy.com/partners.
            </p>
            <p className="text-sm text-slate-400">
              You can close this page now.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] px-4 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Image
            src="/images/voltsol-mark.svg"
            alt="VoltSol Energy"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h1 className="font-display text-3xl font-bold">
            <span className="text-white">Claim Your </span>
            <span className="text-amber-400">Partner Profile</span>
          </h1>
          <p className="mt-2 text-slate-400">
            Update your listing on voltsolenergy.com/partners
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Company Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">Category</label>
              <input
                type="text"
                value={category}
                onChange={e => setCategory(e.target.value)}
                placeholder="e.g., Electrical, HVAC, Roofing"
                className={inputClass}
              />
              <p className="mt-1 text-xs text-slate-500">
                What type of business are you?
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">Website URL</label>
              <input
                type="url"
                value={websiteUrl}
                onChange={e => setWebsiteUrl(e.target.value)}
                placeholder="https://example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">Logo URL</label>
              <input
                type="url"
                value={logoUrl}
                onChange={e => setLogoUrl(e.target.value)}
                placeholder="https://example.com/logo.png"
                className={inputClass}
              />
              <p className="mt-1 text-xs text-slate-500">
                Link to your logo — PNG or SVG work best. Transparent background recommended.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">One-Line Description</label>
              <textarea
                value={blurb}
                onChange={e => setBlurb(e.target.value)}
                rows={2}
                maxLength={160}
                placeholder="Brief description of your business..."
                className={inputClass}
              />
              <p className="mt-1 text-xs text-slate-500">
                {blurb.length}/160 characters
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Where will you add our link? <span className="text-slate-500">(optional)</span>
              </label>
              <input
                type="url"
                value={linkTargetUrl}
                onChange={e => setLinkTargetUrl(e.target.value)}
                placeholder="https://example.com/partners"
                className={inputClass}
              />
              <p className="mt-1 text-xs text-slate-500">
                Just helps us know where to look — not required to submit.
              </p>
            </div>

            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={submitting || !companyName.trim()}
              className="w-full rounded-lg bg-amber-500 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit Partner Profile'}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Questions? Email{' '}
          <a href="mailto:info@voltsolenergy.com" className="text-amber-400 hover:text-amber-300">
            info@voltsolenergy.com
          </a>
        </p>
      </div>
    </div>
  );
}
