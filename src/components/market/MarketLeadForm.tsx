'use client';

import { useState, FormEvent } from 'react';
import { ConsentCheckbox, useConsentField, CONSENT_WORDING, CONSENT_VERSION, CONSENT_FORM_ID } from '@/components/market/ConsentCheckbox';
import { formatPhoneInput, isValidUSPhone, isValidEmail } from '@/lib/form-validation';

interface MarketLeadFormProps {
  marketSlug: string;  // e.g. "solar/california/placer-county/roseville"
  city: string;
  county: string;
  utility: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function MarketLeadForm({ marketSlug, city, county, utility }: MarketLeadFormProps) {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [phone, setPhone] = useState('');
  const { consented, setConsented, consentError, validateConsent } = useConsentField();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateConsent()) return;

    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      first_name:    (fd.get('first_name') as string).trim(),
      last_name:     (fd.get('last_name') as string).trim(),
      email:         (fd.get('email') as string).trim(),
      phone:         phone,
      city:          city,
      owns_home:     fd.get('owns_home') as string,
      monthly_bill:  fd.get('monthly_bill') as string,
      website:       fd.get('website') as string, // honeypot
      market_slug:   marketSlug,
      vertical:      'solar',
      source_page:   window.location.href,
      intent:        'solar_quote',
      consent_version:  CONSENT_VERSION,
      consent_form_id:  CONSENT_FORM_ID,
      consent_wording:  CONSENT_WORDING,
    };

    try {
      const res = await fetch('/api/market/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setState('success');
        form.reset();
        setPhone('');
        setConsented(false);
      } else {
        const data = await res.json().catch(() => ({}));
        setState('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setState('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-3 text-4xl">&#10003;</div>
        <h3 className="text-xl font-semibold text-green-800">Request received!</h3>
        <p className="mt-2 text-green-700">
          A licensed solar contractor serving {city} will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="mp-first" className="mb-1 block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="mp-first"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Jane"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mp-last" className="mb-1 block text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="mp-last"
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Smith"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mp-email" className="mb-1 block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="mp-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="mp-phone" className="mb-1 block text-sm font-medium text-gray-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="mp-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(916) 555-0100"
          value={phone}
          onChange={e => setPhone(formatPhoneInput(e.target.value))}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="mp-owns" className="mb-1 block text-sm font-medium text-gray-700">
          Do you own your home? <span className="text-red-500">*</span>
        </label>
        <select
          id="mp-owns"
          name="owns_home"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select…</option>
          <option value="Yes, I own it">Yes, I own it</option>
          <option value="No, I rent">No, I rent</option>
          <option value="Not sure">Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="mp-bill" className="mb-1 block text-sm font-medium text-gray-700">
          Average monthly {utility} bill <span className="text-red-500">*</span>
        </label>
        <select
          id="mp-bill"
          name="monthly_bill"
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select…</option>
          <option value="Under $100">Under $100</option>
          <option value="$100–$200">$100–$200</option>
          <option value="$200–$300">$200–$300</option>
          <option value="$300+">$300+</option>
        </select>
      </div>

      <ConsentCheckbox checked={consented} onChange={setConsented} error={consentError} />

      {state === 'error' && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="min-h-[44px] w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending…' : `Get Free Solar Quote — ${city}`}
      </button>

      <p className="text-center text-xs text-gray-400">
        No obligation. Your info is only shared with one local contractor.
      </p>
    </form>
  );
}
