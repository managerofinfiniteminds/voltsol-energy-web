'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { Check, Mail, Zap } from 'lucide-react';
import { formatPhoneInput, isValidUSPhone, isValidEmail } from '@/lib/form-validation';
import { cn } from '@/lib/utils';
import { track } from '@/lib/track';
import {
  MONTHLY_BILL_VALUES,
  MONTHLY_BILL_LABELS,
  TIMELINE_VALUES,
  TIMELINE_LABELS,
  ROOF_SHADE_VALUES,
  ROOF_SHADE_LABELS,
  type MonthlyBill,
  type Timeline,
  type RoofShade,
} from '@/lib/engine-enums';
import type { PricingTier } from '@/lib/site-config';

// ─── Constants ────────────────────────────────────────────────────────────────
const TOTAL_STEPS = 8; // Steps 0-7 (0-6 input, 7 confirmation). Calendar/booking removed — VoltSol contacts the lead directly.
const UTILITY_ANNUAL_INCREASE = 0.05; // conservative, stated to the user
const HORIZON_YEARS = 10;              // credible window for apples-to-apples comparison
const SYSTEM_LIFE_YEARS = 25;          // panels last 25+ yrs (qualitative reference only)

// Fallback tier pricing — used only if CMS tiers aren't passed in.
const DEFAULT_TIER_PRICING: { name: string; price: string }[] = [
  { name: 'First Light', price: '$8,700–$9,500' },
  { name: 'Sunbeam', price: '~$11,000' },
  { name: 'High Noon', price: '$12,000–$15,000' },
  { name: 'Solar Flare', price: '$13,500–$16,000' },
];

// Map the bill band the user selected to the system tier that fits it.
function billToTierIndex(bill: MonthlyBill): number {
  switch (bill) {
    case 'lt_100': return 0;  // First Light  (12K single-zone)
    case '100_200': return 1; // Sunbeam      (24K single-zone)
    case '200_300': return 2; // High Noon    (24K multizone)
    case 'gt_300': return 3;  // Solar Flare  (36K multizone)
    default: return 1;
  }
}

// Pull the low/high dollar figures out of a tier price string like "$12,000–$15,000".
function parsePriceRange(price: string): { low: number; high: number } {
  const nums = (price.match(/[\d,]+/g) || [])
    .map(n => Number(n.replace(/,/g, '')))
    .filter(n => n > 0);
  if (!nums.length) return { low: 9500, high: 9500 };
  return { low: Math.min(...nums), high: Math.max(...nums) };
}

// Extended monthly bill options for better UX (spec says <$150, $150-300, $300-500, $500+)
const BILL_OPTIONS: { value: MonthlyBill; label: string; sub: string }[] = [
  { value: 'lt_100', label: 'Under $150', sub: 'Light usage' },
  { value: '100_200', label: '$150–$300', sub: 'Average home' },
  { value: '200_300', label: '$300–$500', sub: 'Higher usage' },
  { value: 'gt_300', label: '$500+', sub: 'Very high usage' },
];

const OWNS_HOME_OPTIONS = [
  { value: 'own', label: 'Yes, I own my home' },
  { value: 'rent', label: 'No, I rent' },
];

const ROOF_SHADE_OPTIONS: { value: RoofShade | 'unsure'; label: string }[] = [
  { value: 'full_sun', label: 'Full sun' },
  { value: 'some_shade', label: 'Some shade' },
  { value: 'mostly_shaded', label: 'Lots of shade' },
  { value: 'unsure', label: 'Not sure' },
];

const TIMELINE_OPTIONS: { value: Timeline; label: string }[] = [
  { value: 'asap', label: 'ASAP' },
  { value: '1_3mo', label: '1–3 months' },
  { value: '3_6mo', label: '3–6 months' },
  { value: 'exploring', label: 'Just exploring' },
];

// TCPA Consent
const CONSENT_VERSION = '2.0';
const CONSENT_FORM_ID = 'estimate-flow-v1';
const CONSENT_WORDING =
  'By submitting, I agree to receive calls, texts, and emails from VoltSol Energy about my solar estimate. ' +
  'I understand my consent is not a condition of purchase. Message and data rates may apply.';

// ─── Slot types (reused from BookingFlow) ─────────────────────────────────────
// ─── Form state ───────────────────────────────────────────────────────────────
interface FlowState {
  // Qualifying signals
  monthly_bill: MonthlyBill | '';
  owns_home: 'own' | 'rent' | '';
  roof_shade: RoofShade | 'unsure' | '';
  timeline: Timeline | '';
  utility: string;
  // Contact
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  notes: string;
  // Consent
  consented: boolean;
  // Honeypot
  website: string;
}

interface FieldErrors {
  [key: string]: string;
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface EstimateFlowProps {
  campaignCode?: string;
  initialBill?: string;
  tiers?: PricingTier[];
}

// ─── Helper functions ─────────────────────────────────────────────────────────
function billToMonthlyValue(bill: MonthlyBill): number {
  switch (bill) {
    case 'lt_100': return 125;
    case '100_200': return 225;
    case '200_300': return 400;
    case 'gt_300': return 600;
    default: return 300;
  }
}

// Total utility spend over `years`, assuming a modest annual rate increase.
function calcUtilityCost(monthlyBill: number, years: number): number {
  const r = 1 + UTILITY_ANNUAL_INCREASE;
  const factor = (Math.pow(r, years) - 1) / (r - 1);
  return Math.round(monthlyBill * 12 * factor);
}

function calcPayback(monthlyBill: number, systemCost: number): number {
  const annual = monthlyBill * 12;
  if (annual <= 0) return 0;
  return Math.round((systemCost / annual) * 10) / 10;
}

// Calendar helpers (from BookingFlow)
// Valid bill values for validation
const VALID_BILLS = ['lt_100', '100_200', '200_300', 'gt_300'] as const;

// ─── Component ────────────────────────────────────────────────────────────────
export default function EstimateFlow({ campaignCode, initialBill, tiers }: EstimateFlowProps) {
  // If initialBill is provided and valid, start at step 1 with bill pre-filled
  const validInitialBill = initialBill && VALID_BILLS.includes(initialBill as MonthlyBill)
    ? (initialBill as MonthlyBill)
    : '';

  const [step, setStep] = useState(validInitialBill ? 1 : 0);
  const [form, setForm] = useState<FlowState>({
    monthly_bill: validInitialBill,
    owns_home: '',
    roof_shade: '',
    timeline: '',
    utility: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    state: 'CA',
    zip: '',
    notes: '',
    consented: false,
    website: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [leadId, setLeadId] = useState<number | null>(null);

  const stepRef = useRef<HTMLDivElement>(null);

  // Step labels for tracking
  const stepNames = [
    'monthly_bill',
    'home_ownership',
    'roof_shade',
    'timeline',
    'utility',
    'estimate_reveal',
    'contact',
    'confirmation',
  ];

  // Track step views and flow_abandon on unmount
  useEffect(() => {
    track('flow_step_view', { step_index: step, step_name: stepNames[step] });
  }, [step]);

  // Scroll the new step into view AFTER it renders, clearing the sticky header.
  // scroll-mt-* on the stepRef element provides the header offset so the
  // heading isn't tucked under the fixed nav on desktop or mobile.
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true; // don't auto-scroll on initial load
      return;
    }
    stepRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  useEffect(() => {
    // Track abandon on unmount if not completed (step < 8)
    return () => {
      if (step < 7 && step >= 1) {
        track('flow_abandon', { last_step_index: step });
      }
    };
  }, [step]);

  // Field handlers
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    let next = value;
    if (name === 'phone') next = formatPhoneInput(value);
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: next }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function handleSelect(field: keyof FlowState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  }

  // Validation
  function validateStep(s: number): FieldErrors {
    const errs: FieldErrors = {};
    if (s === 0 && !form.monthly_bill) errs.monthly_bill = 'Please select your bill range';
    if (s === 1 && !form.owns_home) errs.owns_home = 'Please select an option';
    if (s === 2 && !form.roof_shade) errs.roof_shade = 'Please select an option';
    if (s === 3 && !form.timeline) errs.timeline = 'Please select when';
    if (s === 4 && !form.utility.trim()) errs.utility = 'Please enter your electric utility';
    if (s === 6) {
      if (!form.first_name.trim()) errs.first_name = 'First name is required';
      if (!form.last_name.trim()) errs.last_name = 'Last name is required';
      if (!form.email.trim()) errs.email = 'Email is required';
      else if (!isValidEmail(form.email)) errs.email = 'Please enter a valid email';
      if (!form.phone.trim()) errs.phone = 'Phone is required';
      else if (!isValidUSPhone(form.phone)) errs.phone = 'Please enter a valid phone number';
      if (!form.consented) errs.consented = 'Please agree to receive your estimate';
    }
    return errs;
  }

  function handleNext() {
    const errs = validateStep(step);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    // Track step completion with answer
    const stepAnswers: Record<number, unknown> = {
      0: { monthly_bill: form.monthly_bill },
      1: { owns_home: form.owns_home },
      2: { roof_shade: form.roof_shade },
      3: { timeline: form.timeline },
      4: { utility: form.utility },
    };
    track('flow_step_complete', { step_index: step, answer: stepAnswers[step] });

    // Track estimate_revealed when moving from step 5 to 6
    if (step === 5) {
      const monthlyValue = form.monthly_bill ? billToMonthlyValue(form.monthly_bill) : 300;
      const utilityHorizon = calcUtilityCost(monthlyValue, HORIZON_YEARS);
      const idx = form.monthly_bill ? billToTierIndex(form.monthly_bill) : 1;
      const tierPrice = (tiers && tiers.length ? tiers : DEFAULT_TIER_PRICING)[
        Math.min(idx, (tiers && tiers.length ? tiers.length : DEFAULT_TIER_PRICING.length) - 1)
      ].price;
      const { high } = parsePriceRange(tierPrice);
      const savingsVal = Math.max(0, utilityHorizon - high);
      track('estimate_revealed', { bill_band: form.monthly_bill, estimate_range: savingsVal });
    }

    setStep(s => s + 1);
  }

  function handleBack() {
    setErrors({});
    setStep(s => s - 1);
  }

  // Submit lead at Step 6
  async function handleSubmitLead(e: FormEvent) {
    e.preventDefault();
    setServerError('');
    const errs = validateStep(6);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Honeypot check
    if (form.website.trim()) {
      setStep(7); // Silently succeed
      return;
    }

    setSubmitting(true);

    const payload = {
      first_name: form.first_name.trim(),
      last_name: form.last_name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      street_address: form.street_address.trim() || undefined,
      city: form.city.trim() || undefined,
      state: form.state.trim() || undefined,
      zip: form.zip.trim() || undefined,
      owns_home: form.owns_home || undefined,
      monthly_bill: form.monthly_bill || undefined,
      timeline: form.timeline || undefined,
      utility: form.utility || undefined,
      roof_shade: form.roof_shade === 'unsure' ? undefined : form.roof_shade || undefined,
      notes: form.notes.trim() || undefined,
      source_consumer: campaignCode ? `campaign_${campaignCode}` : 'voltsol_site',
      source_page: '/start',
      consent: {
        version: CONSENT_VERSION,
        form_id: CONSENT_FORM_ID,
        wording: CONSENT_WORDING,
      },
      attribution: campaignCode ? { utm_campaign: campaignCode } : undefined,
    };

    try {
      const res = await fetch('/api/engine/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setServerError(data.error ?? 'Too many requests. Please try again later.');
        } else if (data.details) {
          const fieldErrs: FieldErrors = {};
          for (const [field, msgs] of Object.entries(data.details)) {
            fieldErrs[field] = (msgs as string[])[0] ?? 'Invalid';
          }
          setErrors(fieldErrs);
        } else {
          setServerError(data.error ?? 'Something went wrong. Please try again.');
        }
        setSubmitting(false);
        return;
      }

      setLeadId(data.id);

      // Track lead_capture event
      track('lead_capture', {
        lead_id: data.id,
        signals: {
          monthly_bill: form.monthly_bill,
          owns_home: form.owns_home,
          timeline: form.timeline,
          utility: form.utility,
          roof_shade: form.roof_shade,
        },
      });
      track('flow_step_complete', { step_index: 6, answer: { contact_captured: true } });

      setStep(7); // Move to confirmation — VoltSol follows up directly
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    }
    setSubmitting(false);
  }

  // Calculate estimate for Step 5 — driven by the user's bill choice + CMS tier pricing (no hardcoded cost)
  const tierList = tiers && tiers.length ? tiers : DEFAULT_TIER_PRICING;
  const tierIdx = form.monthly_bill ? billToTierIndex(form.monthly_bill) : 1;
  const selectedTier = tierList[Math.min(tierIdx, tierList.length - 1)];
  const systemPriceLabel = selectedTier.price; // e.g. "$12,000–$15,000"
  const systemName = selectedTier.name;        // e.g. "High Noon"
  const { low: sysLow, high: sysHigh } = parsePriceRange(systemPriceLabel);
  const monthlyValue = form.monthly_bill ? billToMonthlyValue(form.monthly_bill) : 300;
  // Apples-to-apples: total energy cost over the SAME window, both paths.
  const utilityHorizonCost = calcUtilityCost(monthlyValue, HORIZON_YEARS);
  // Conservative: subtract the HIGH end of the system price so savings don't overstate.
  const netSavings = Math.max(0, utilityHorizonCost - sysHigh);
  const payback = calcPayback(monthlyValue, sysHigh);
  const ratePct = Math.round(UTILITY_ANNUAL_INCREASE * 100);

  // Progress indicator
  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  // Step labels for progress
  const stepLabels = [
    'Monthly bill',
    'Home ownership',
    'Roof shade',
    'Timeline',
    'Utility',
    'Your estimate',
    'Contact info',
    'Confirmation',
  ];

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="mx-auto max-w-xl scroll-mt-28 sm:scroll-mt-32" ref={stepRef}>
      {/* Progress bar */}
      {step < 7 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-100">
              Step {step + 1} of {TOTAL_STEPS}
            </span>
            <span className="text-sm text-blue-300/60">{stepLabels[step]}</span>
          </div>
          <div
            className="h-1.5 rounded-full bg-navy-600 overflow-hidden"
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
          >
            <div
              className="h-full rounded-full bg-gold transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* ─── Step 0: Monthly Bill ─── */}
      {step === 0 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            What&apos;s your average monthly utility bill?
          </h2>
          <p className="text-blue-300 text-sm mb-6">This helps us size your system correctly.</p>
          <div className="grid grid-cols-2 gap-3">
            {BILL_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect('monthly_bill', opt.value)}
                aria-pressed={form.monthly_bill === opt.value}
                className={cn(
                  'flex flex-col items-center justify-center p-5 rounded-xl border-2 text-center transition-all duration-150',
                  form.monthly_bill === opt.value
                    ? 'border-gold bg-gold/10 text-white'
                    : 'border-blue-900 bg-navy-700/50 text-blue-100 hover:border-blue-400 hover:bg-navy-600/50'
                )}
              >
                <span className="font-bold text-xl leading-tight">{opt.label}</span>
                <span className="text-xs text-blue-300 mt-1">{opt.sub}</span>
                {form.monthly_bill === opt.value && (
                  <Check className="mt-2 h-4 w-4 text-gold" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
          {errors.monthly_bill && (
            <p className="mt-2 text-sm text-red-400" role="alert">{errors.monthly_bill}</p>
          )}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleNext}
              className="cta-glow w-full bg-gold hover:bg-gold-400 text-navy font-bold text-lg py-4 rounded-xl transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ─── Step 1: Owns Home ─── */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Do you own your home?</h2>
          <div className="space-y-3">
            {OWNS_HOME_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect('owns_home', opt.value)}
                aria-pressed={form.owns_home === opt.value}
                className={cn(
                  'w-full flex items-center justify-between p-5 rounded-xl border-2 text-left transition-all duration-150',
                  form.owns_home === opt.value
                    ? 'border-gold bg-gold/10 text-white'
                    : 'border-blue-900 bg-navy-700/50 text-blue-100 hover:border-blue-400 hover:bg-navy-600/50'
                )}
              >
                <span className="font-semibold text-lg">{opt.label}</span>
                {form.owns_home === opt.value && <Check className="h-5 w-5 text-gold" />}
              </button>
            ))}
          </div>
          {errors.owns_home && (
            <p className="mt-2 text-sm text-red-400" role="alert">{errors.owns_home}</p>
          )}
          {form.owns_home === 'rent' && (
            <p className="mt-4 text-sm text-blue-300 bg-navy-700 rounded-lg p-4">
              We mostly help homeowners, but we can still send you helpful information about solar options for renters.
            </p>
          )}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 rounded-xl border border-blue-900 text-blue-100 hover:border-blue-400 hover:text-white transition font-medium"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="cta-glow flex-1 bg-gold hover:bg-gold-400 text-navy font-bold text-lg py-4 rounded-xl transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ─── Step 2: Roof Shade ─── */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            How much sun/shade does your roof get?
          </h2>
          <div className="space-y-3">
            {ROOF_SHADE_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect('roof_shade', opt.value)}
                aria-pressed={form.roof_shade === opt.value}
                className={cn(
                  'w-full flex items-center justify-between p-5 rounded-xl border-2 text-left transition-all duration-150',
                  form.roof_shade === opt.value
                    ? 'border-gold bg-gold/10 text-white'
                    : 'border-blue-900 bg-navy-700/50 text-blue-100 hover:border-blue-400 hover:bg-navy-600/50'
                )}
              >
                <span className="font-semibold text-lg">{opt.label}</span>
                {form.roof_shade === opt.value && <Check className="h-5 w-5 text-gold" />}
              </button>
            ))}
          </div>
          {errors.roof_shade && (
            <p className="mt-2 text-sm text-red-400" role="alert">{errors.roof_shade}</p>
          )}
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-blue-900 text-blue-100 hover:border-blue-400 hover:text-white transition font-medium">
              Back
            </button>
            <button type="button" onClick={handleNext} className="cta-glow flex-1 bg-gold hover:bg-gold-400 text-navy font-bold text-lg py-4 rounded-xl transition-colors">
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ─── Step 3: Timeline ─── */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            When are you looking to make a change?
          </h2>
          <div className="space-y-3">
            {TIMELINE_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect('timeline', opt.value)}
                aria-pressed={form.timeline === opt.value}
                className={cn(
                  'w-full flex items-center justify-between p-5 rounded-xl border-2 text-left transition-all duration-150',
                  form.timeline === opt.value
                    ? 'border-gold bg-gold/10 text-white'
                    : 'border-blue-900 bg-navy-700/50 text-blue-100 hover:border-blue-400 hover:bg-navy-600/50'
                )}
              >
                <span className="font-semibold text-lg">{opt.label}</span>
                {form.timeline === opt.value && <Check className="h-5 w-5 text-gold" />}
              </button>
            ))}
          </div>
          {errors.timeline && (
            <p className="mt-2 text-sm text-red-400" role="alert">{errors.timeline}</p>
          )}
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-blue-900 text-blue-100 hover:border-blue-400 hover:text-white transition font-medium">
              Back
            </button>
            <button type="button" onClick={handleNext} className="cta-glow flex-1 bg-gold hover:bg-gold-400 text-navy font-bold text-lg py-4 rounded-xl transition-colors">
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ─── Step 4: Utility ─── */}
      {step === 4 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Who&apos;s your electric utility?</h2>
          <p className="text-blue-300 text-sm mb-6">Whoever sends your monthly power bill.</p>
          <input
            id="utility"
            type="text"
            name="utility"
            value={form.utility}
            onChange={handleChange}
            placeholder="e.g. your power company"
            autoComplete="off"
            className={cn(
              'w-full bg-navy-700 border rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
              errors.utility ? 'border-red-500' : 'border-blue-900'
            )}
          />
          {errors.utility && (
            <p className="mt-2 text-sm text-red-400" role="alert">{errors.utility}</p>
          )}
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-blue-900 text-blue-100 hover:border-blue-400 hover:text-white transition font-medium">
              Back
            </button>
            <button type="button" onClick={handleNext} className="cta-glow flex-1 bg-gold hover:bg-gold-400 text-navy font-bold text-lg py-4 rounded-xl transition-colors">
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ─── Step 5: Value Reveal ─── */}
      {step === 5 && (
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gold/15 mb-4">
            <Zap className="h-8 w-8 text-gold" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Here&apos;s how the math works out</h2>
          <p className="text-blue-300 text-sm mb-8">
            Your energy cost over the next {HORIZON_YEARS} years, two ways — based on a ${monthlyValue}/mo bill and the <span className="text-gold font-semibold">{systemName}</span> system
          </p>

          {/* Apples-to-apples: total cost of energy over the SAME window, both paths */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-5">
              <p className="text-xs uppercase tracking-wider text-red-400 mb-1">
                Staying on your utility
              </p>
              <p className="font-display text-2xl font-bold text-red-300">
                ${utilityHorizonCost.toLocaleString()}
              </p>
              <p className="text-[11px] text-blue-300/70 mt-1">{HORIZON_YEARS} yrs of bills, and still climbing</p>
            </div>
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <p className="text-xs uppercase tracking-wider text-gold mb-1">Going solar with VoltSol</p>
              <p className="font-display text-2xl font-bold text-gold">{systemPriceLabel}</p>
              <p className="text-[11px] text-blue-300/70 mt-1">One-time — then your energy is yours</p>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-6 mb-6">
            <p className="text-xs uppercase tracking-wider text-emerald-400 mb-1">
              You could keep about
            </p>
            <p className="font-display text-4xl font-bold text-emerald-300">
              ${netSavings.toLocaleString()}
            </p>
            <p className="text-sm text-blue-300 mt-2">
              over {HORIZON_YEARS} years instead of sending it to the utility. Pays for itself in about {payback} years — and keeps saving across the {SYSTEM_LIFE_YEARS}+ year life of the system.
            </p>
          </div>

          <p className="text-xs text-blue-300/70 italic mb-6 leading-relaxed">
            Estimate only — not a quote. This compares {HORIZON_YEARS} years of utility bills (assuming a modest {ratePct}%/yr increase) against your one-time system cost. Your actual numbers depend on your home and energy use, confirmed at a free site inspection.
          </p>

          <p className="text-sm text-blue-300 mb-6">
            Want the exact number for your home? Enter your contact info on the next screen.
          </p>

          <div className="flex gap-3">
            <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-blue-900 text-blue-100 hover:border-blue-400 hover:text-white transition font-medium">
              Back
            </button>
            <button type="button" onClick={handleNext} className="cta-glow flex-1 bg-gold hover:bg-gold-400 text-navy font-bold text-lg py-4 rounded-xl transition-colors">
              Get My Full Estimate
            </button>
          </div>
        </div>
      )}

      {/* ─── Step 6: Contact ─── */}
      {step === 6 && (
        <form onSubmit={handleSubmitLead} noValidate>
          <h2 className="text-2xl font-bold text-white mb-2">Where do we send your estimate?</h2>
          <p className="text-blue-300 text-sm mb-6">We&apos;ll never sell your info.</p>

          {/* Honeypot */}
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

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-blue-100 mb-1">
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
                    'w-full bg-navy-700 border rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                    errors.first_name ? 'border-red-500' : 'border-blue-900'
                  )}
                />
                {errors.first_name && <p className="mt-1 text-sm text-red-400" role="alert">{errors.first_name}</p>}
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-blue-100 mb-1">
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
                    'w-full bg-navy-700 border rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                    errors.last_name ? 'border-red-500' : 'border-blue-900'
                  )}
                />
                {errors.last_name && <p className="mt-1 text-sm text-red-400" role="alert">{errors.last_name}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
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
                  'w-full bg-navy-700 border rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                  errors.email ? 'border-red-500' : 'border-blue-900'
                )}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400" role="alert">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">
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
                  'w-full bg-navy-700 border rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                  errors.phone ? 'border-red-500' : 'border-blue-900'
                )}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400" role="alert">{errors.phone}</p>}
            </div>

            {/* Service address — helps VoltSol pre-check the roof before reaching out */}
            <div>
              <label htmlFor="street_address" className="block text-sm font-medium text-blue-100 mb-1">
                Home Address <span className="text-blue-300/60 font-normal">(optional)</span>
              </label>
              <input
                id="street_address"
                type="text"
                name="street_address"
                value={form.street_address}
                onChange={handleChange}
                placeholder="123 Solar Way"
                autoComplete="address-line1"
                className={cn(
                  'w-full bg-navy-700 border rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base',
                  errors.street_address ? 'border-red-500' : 'border-blue-900'
                )}
              />
              {errors.street_address && <p className="mt-1 text-sm text-red-400" role="alert">{errors.street_address}</p>}
            </div>

            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-3">
                <label htmlFor="city" className="block text-sm font-medium text-blue-100 mb-1">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Sacramento"
                  autoComplete="address-level2"
                  className="w-full bg-navy-700 border border-blue-900 rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="state" className="block text-sm font-medium text-blue-100 mb-1">State</label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="CA"
                  maxLength={2}
                  autoComplete="address-level1"
                  className="w-full bg-navy-700 border border-blue-900 rounded-xl px-3 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base uppercase"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="zip" className="block text-sm font-medium text-blue-100 mb-1">ZIP</label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  placeholder="95814"
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="postal-code"
                  className="w-full bg-navy-700 border border-blue-900 rounded-xl px-4 py-4 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold transition text-base"
                />
              </div>
            </div>

            {/* Consent checkbox */}
            <div className="rounded-lg border border-navy-500 bg-navy-700/50 p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consented"
                  checked={form.consented}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 flex-shrink-0 rounded border-blue-900 accent-gold"
                  aria-required="true"
                />
                <span className="text-xs text-blue-200 leading-relaxed">{CONSENT_WORDING}</span>
              </label>
              {errors.consented && (
                <p className="mt-2 text-xs text-red-400" role="alert">{errors.consented}</p>
              )}
            </div>
          </div>

          {serverError && (
            <div className="mt-4 bg-red-900/40 border border-red-500 rounded-xl px-4 py-3 text-red-300 text-sm" role="alert">
              {serverError}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-blue-900 text-blue-100 hover:border-blue-400 hover:text-white transition font-medium">
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="cta-glow flex-1 bg-gold hover:bg-gold-400 disabled:bg-gold-600/50 disabled:cursor-not-allowed text-navy font-bold text-lg py-4 rounded-xl transition-colors"
            >
              {submitting ? 'Sending...' : 'Get My Free Estimate'}
            </button>
          </div>
        </form>
      )}

      {/* ─── Step 7: Confirmation ─── VoltSol follows up directly (no self-serve booking) */}
      {step === 7 && (
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 mb-4">
            <Check className="h-7 w-7 text-gold" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            You&apos;re all set — VoltSol will be in touch.
          </h2>
          <p className="text-blue-100 mb-6">
            Thanks{form.first_name ? `, ${form.first_name}` : ''}! We&apos;ve got your details. A VoltSol
            rep will reach out shortly to walk you through your personalized estimate and answer
            any questions — no pressure, no obligation.
          </p>

          <div className="mx-auto max-w-md rounded-xl border border-navy-500/40 bg-navy-800 p-5 text-left">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-blue-100">
                Keep an eye on your inbox and phone — we typically respond within one business day.
              </p>
            </div>
          </div>

          <a
            href="/"
            className="mt-8 inline-block text-sm font-medium text-gold hover:text-gold-400"
          >
            &larr; Back to home
          </a>
        </div>
      )}
    </div>
  );
}
