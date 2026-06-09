'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { captureAttribution, getAttribution, getBillPrefill } from '@/lib/attribution';
import { track } from '@/lib/track';
import SuccessScreen from './SuccessScreen';
import { cn } from '@/lib/utils';

// ─── Constants ──────────────────────────────────────────────────────────────
const TOTAL_STEPS = 4;

const OWNS_HOME_OPTIONS = [
  { value: 'Yes, I own it', label: 'Yes, I own it', icon: '🏠' },
  { value: 'No, I rent',    label: 'No, I rent',    icon: '🏢' },
  { value: 'Not sure',      label: 'Not sure',      icon: '🤔' },
] as const;

const MONTHLY_BILL_OPTIONS = [
  { value: 'Under $100',       label: 'Under $100',       sub: 'Low usage' },
  { value: '$100\u2013$200',   label: '$100–$200',        sub: 'Average home' },
  { value: '$200\u2013$300',   label: '$200–$300',        sub: 'High usage' },
  { value: '$300+',            label: '$300+',            sub: 'Very high usage' },
] as const;

const CONTACT_TIME_OPTIONS = [
  'Morning (8am\u201312pm)',
  'Afternoon (12\u20135pm)',
  'Evening (5\u20138pm)',
  'Weekends',
] as const;

// ─── Types ──────────────────────────────────────────────────────────────────
interface FormState {
  owns_home: string;
  monthly_bill: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  best_contact_time: string;
  notes: string;
  website: string; // honeypot — always empty
}

interface FormErrors {
  [key: string]: string;
}

// ─── Validation helpers ─────────────────────────────────────────────────────
function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 || (digits.length === 11 && digits[0] === '1');
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateStep(step: number, form: FormState): FormErrors {
  const errs: FormErrors = {};
  if (step === 1) {
    if (!form.owns_home) errs.owns_home = 'Please select an option';
  } else if (step === 2) {
    if (!form.monthly_bill) errs.monthly_bill = 'Please select your average bill';
  } else if (step === 3) {
    if (!form.street_address.trim()) errs.street_address = 'Street address is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.state.trim()) errs.state = 'State is required';
    if (!form.zip.trim()) errs.zip = 'ZIP code is required';
    else if (!/^\d{5}(-\d{4})?$/.test(form.zip.trim())) errs.zip = 'Please enter a valid ZIP code';
  } else if (step === 4) {
    if (!form.first_name.trim()) errs.first_name = 'First name is required';
    if (!form.last_name.trim()) errs.last_name = 'Last name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!validateEmail(form.email)) errs.email = 'Please enter a valid email';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!validatePhone(form.phone)) errs.phone = 'Please enter a valid 10-digit phone';
    if (!form.best_contact_time) errs.best_contact_time = 'Please select a time';
  }
  return errs;
}

// ─── Props ──────────────────────────────────────────────────────────────────
interface QuoteFormProps {
  campaignCode?: string;
  source?: string;
  rep?: string;
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function QuoteForm({ campaignCode, source, rep }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    owns_home: '',
    monthly_bill: '',
    street_address: '',
    city: '',
    state: 'CA',
    zip: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    best_contact_time: '',
    notes: '',
    website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const stepRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  // On mount: capture attribution + pre-fill from estimator
  useEffect(() => {
    captureAttribution();
    const prefillBill = getBillPrefill();
    if (prefillBill) {
      setForm(prev => ({ ...prev, monthly_bill: prefillBill }));
    }
  }, []);

  // Track step advances (skip initial render)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    track('form_step', { step });
    // Focus first focusable element in the new step
    const firstFocusable = stepRef.current?.querySelector<HTMLElement>(
      'button:not([disabled]), input, select, textarea'
    );
    firstFocusable?.focus();
  }, [step]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function handleCardSelect(field: 'owns_home' | 'monthly_bill', value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  }

  function handleNext() {
    const errs = validateStep(step, form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(s => s + 1);
  }

  function handleBack() {
    setErrors({});
    setStep(s => s - 1);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError('');

    const errs = validateStep(4, form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);

    try {
      const attribution = getAttribution();
      const payload = {
        ...form,
        campaign_code: campaignCode,
        source: attribution.source ?? source,
        rep: attribution.rep ?? rep,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        referrer: attribution.referrer,
        estimated_savings: attribution.estimated_savings,
      };

      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { error?: string; details?: Record<string, string[]> };

      if (!res.ok) {
        if (res.status === 429) {
          setServerError(data.error ?? 'Too many requests. Please try again later.');
        } else if (res.status === 422 && data.details) {
          const fieldErrors: FormErrors = {};
          for (const [field, msgs] of Object.entries(data.details)) {
            fieldErrors[field] = msgs[0] ?? 'Invalid';
          }
          setErrors(fieldErrors);
        } else {
          setServerError(data.error ?? 'Something went wrong. Please try again.');
        }
        return;
      }

      track('form_complete');
      setSubmitted(true);
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return <SuccessScreen firstName={form.first_name} />;
  }

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-300">
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="text-sm text-slate-500">
            {step === 1 && 'Home ownership'}
            {step === 2 && 'Monthly bill'}
            {step === 3 && 'Your address'}
            {step === 4 && 'Contact info'}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-700 overflow-hidden" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step container */}
      <div ref={stepRef}>
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot — always hidden */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* ─── Step 1: Home ownership ─── */}
          {step === 1 && (
            <fieldset>
              <legend className="text-xl font-bold text-white mb-6">
                Do you own your home?
              </legend>
              <div className="space-y-3" role="group" aria-label="Home ownership options">
                {OWNS_HOME_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleCardSelect('owns_home', opt.value)}
                    aria-pressed={form.owns_home === opt.value}
                    className={cn(
                      'w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-150',
                      form.owns_home === opt.value
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-400 hover:bg-slate-700/50'
                    )}
                  >
                    <span className="text-2xl" aria-hidden="true">{opt.icon}</span>
                    <span className="font-semibold text-lg">{opt.label}</span>
                    {form.owns_home === opt.value && (
                      <span className="ml-auto text-gold" aria-hidden="true">✓</span>
                    )}
                  </button>
                ))}
              </div>
              {errors.owns_home && (
                <p className="mt-2 text-sm text-red-400" role="alert">{errors.owns_home}</p>
              )}
            </fieldset>
          )}

          {/* ─── Step 2: Monthly bill ─── */}
          {step === 2 && (
            <fieldset>
              <legend className="text-xl font-bold text-white mb-2">
                What&apos;s your average monthly PG&amp;E bill?
              </legend>
              <p className="text-slate-400 text-sm mb-6">This helps us size your system correctly.</p>
              <div className="grid grid-cols-2 gap-3" role="group" aria-label="Monthly bill options">
                {MONTHLY_BILL_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleCardSelect('monthly_bill', opt.value)}
                    aria-pressed={form.monthly_bill === opt.value}
                    className={cn(
                      'flex flex-col items-center justify-center p-5 rounded-xl border-2 text-center transition-all duration-150',
                      form.monthly_bill === opt.value
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-400 hover:bg-slate-700/50'
                    )}
                  >
                    <span className="font-bold text-xl leading-tight">{opt.label}</span>
                    <span className="text-xs text-slate-400 mt-1">{opt.sub}</span>
                    {form.monthly_bill === opt.value && (
                      <span className="mt-2 text-gold text-sm" aria-hidden="true">✓ Selected</span>
                    )}
                  </button>
                ))}
              </div>
              {errors.monthly_bill && (
                <p className="mt-2 text-sm text-red-400" role="alert">{errors.monthly_bill}</p>
              )}
            </fieldset>
          )}

          {/* ─── Step 3: Address ─── */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">What&apos;s your address?</h3>
              <p className="text-slate-400 text-sm mb-6">We&apos;ll use this to check sun exposure and local incentives.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="street_address" className="block text-sm font-medium text-slate-300 mb-1">
                    Street Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="street_address"
                    type="text"
                    name="street_address"
                    value={form.street_address}
                    onChange={handleChange}
                    placeholder="123 Main St"
                    autoComplete="street-address"
                    className={cn(
                      'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                      errors.street_address ? 'border-red-500' : 'border-slate-600'
                    )}
                  />
                  {errors.street_address && (
                    <p className="mt-1 text-sm text-red-400" role="alert">{errors.street_address}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-1">
                    City <span className="text-gold">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Sacramento"
                    autoComplete="address-level2"
                    className={cn(
                      'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                      errors.city ? 'border-red-500' : 'border-slate-600'
                    )}
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-400" role="alert">{errors.city}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-slate-300 mb-1">
                      State <span className="text-gold">*</span>
                    </label>
                    <input
                      id="state"
                      type="text"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="CA"
                      maxLength={2}
                      autoComplete="address-level1"
                      className={cn(
                        'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base uppercase',
                        errors.state ? 'border-red-500' : 'border-slate-600'
                      )}
                    />
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.state}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-slate-300 mb-1">
                      ZIP <span className="text-gold">*</span>
                    </label>
                    <input
                      id="zip"
                      type="text"
                      name="zip"
                      value={form.zip}
                      onChange={handleChange}
                      placeholder="95814"
                      maxLength={10}
                      inputMode="numeric"
                      autoComplete="postal-code"
                      className={cn(
                        'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                        errors.zip ? 'border-red-500' : 'border-slate-600'
                      )}
                    />
                    {errors.zip && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.zip}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─── Step 4: Contact info ─── */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">How do we reach you?</h3>
              <p className="text-slate-400 text-sm mb-6">Your info is never sold. We&apos;ll reach out within 24 hours.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-slate-300 mb-1">
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      placeholder="Jane"
                      autoComplete="given-name"
                      className={cn(
                        'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                        errors.first_name ? 'border-red-500' : 'border-slate-600'
                      )}
                    />
                    {errors.first_name && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.first_name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-slate-300 mb-1">
                      Last Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      value={form.last_name}
                      onChange={handleChange}
                      placeholder="Smith"
                      autoComplete="family-name"
                      className={cn(
                        'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                        errors.last_name ? 'border-red-500' : 'border-slate-600'
                      )}
                    />
                    {errors.last_name && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    autoComplete="email"
                    inputMode="email"
                    className={cn(
                      'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                    Phone <span className="text-gold">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(530) 555-0100"
                    autoComplete="tel"
                    inputMode="tel"
                    className={cn(
                      'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                      errors.phone ? 'border-red-500' : 'border-slate-600'
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400" role="alert">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="best_contact_time" className="block text-sm font-medium text-slate-300 mb-1">
                    Best time to reach you <span className="text-gold">*</span>
                  </label>
                  <select
                    id="best_contact_time"
                    name="best_contact_time"
                    value={form.best_contact_time}
                    onChange={handleChange}
                    className={cn(
                      'w-full bg-slate-800 border rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                      errors.best_contact_time ? 'border-red-500' : 'border-slate-600',
                      !form.best_contact_time ? 'text-slate-500' : ''
                    )}
                  >
                    <option value="" disabled>Select a time...</option>
                    {CONTACT_TIME_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.best_contact_time && (
                    <p className="mt-1 text-sm text-red-400" role="alert">{errors.best_contact_time}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-300 mb-1">
                    Additional notes <span className="text-slate-500 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Anything else you'd like us to know?"
                    className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold transition resize-none text-base"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ─── Server error ─── */}
          {serverError && (
            <div className="mt-4 bg-red-900/40 border border-red-500 rounded-xl px-4 py-3 text-red-300 text-sm" role="alert">
              {serverError}
            </div>
          )}

          {/* ─── Navigation ─── */}
          <div className={cn('mt-6 flex gap-3', step > 1 ? 'justify-between' : 'justify-end')}>
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition font-medium"
              >
                Back
              </button>
            )}

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-gold hover:bg-amber-300 text-navy font-bold text-lg py-4 rounded-xl transition-colors duration-200 shadow-lg"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-gold hover:bg-amber-300 disabled:bg-amber-800 disabled:cursor-not-allowed text-navy font-bold text-lg py-4 rounded-xl transition-colors duration-200 shadow-lg"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get My Free Solar Estimate'
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Privacy note */}
      <p className="mt-4 text-xs text-slate-500 text-center leading-relaxed">
        By submitting, you agree to our{' '}
        <a href="#" className="text-slate-400 hover:text-gold underline">Privacy Policy</a>.
        VoltSol Energy will not sell your information.
      </p>
    </div>
  );
}
