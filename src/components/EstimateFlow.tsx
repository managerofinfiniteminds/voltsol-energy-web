'use client';

import { useState, useEffect, useCallback, useMemo, useRef, FormEvent } from 'react';
import { ChevronLeft, ChevronRight, Check, Clock, CalendarDays, Mail, Zap } from 'lucide-react';
import { formatPhoneInput, isValidUSPhone, isValidEmail } from '@/lib/form-validation';
import { cn } from '@/lib/utils';
import { track } from '@/lib/track';
import {
  MONTHLY_BILL_VALUES,
  MONTHLY_BILL_LABELS,
  TIMELINE_VALUES,
  TIMELINE_LABELS,
  UTILITY_VALUES,
  UTILITY_LABELS,
  ROOF_SHADE_VALUES,
  ROOF_SHADE_LABELS,
  type MonthlyBill,
  type Timeline,
  type Utility,
  type RoofShade,
} from '@/lib/engine-enums';

// ─── Constants ────────────────────────────────────────────────────────────────
const TOTAL_STEPS = 9; // Steps 0-8
const SYSTEM_COST = 9_500;
const PGE_ANNUAL_INCREASE = 0.06;
const SYSTEM_YEARS = 25;

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

const UTILITY_OPTIONS: { value: Utility; label: string }[] = [
  { value: 'pge', label: 'PG&E' },
  { value: 'smud', label: 'SMUD' },
  { value: 'sce', label: 'SCE' },
  { value: 'other', label: 'Other' },
];

// TCPA Consent
const CONSENT_VERSION = '2.0';
const CONSENT_FORM_ID = 'estimate-flow-v1';
const CONSENT_WORDING =
  'By submitting, I agree to receive calls, texts, and emails from VoltSol Energy about my solar estimate. ' +
  'I understand my consent is not a condition of purchase. Message and data rates may apply.';

// ─── Slot types (reused from BookingFlow) ─────────────────────────────────────
interface Slot {
  id: string;
  slot_date: string;
  start_time: string;
  end_time: string;
  label: string;
}

// ─── Form state ───────────────────────────────────────────────────────────────
interface FlowState {
  // Qualifying signals
  monthly_bill: MonthlyBill | '';
  owns_home: 'own' | 'rent' | '';
  roof_shade: RoofShade | 'unsure' | '';
  timeline: Timeline | '';
  utility: Utility | '';
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

function calcPge25yr(monthlyBill: number): number {
  const r = 1 + PGE_ANNUAL_INCREASE;
  const factor = (Math.pow(r, SYSTEM_YEARS) - 1) / (r - 1);
  return Math.round(monthlyBill * 12 * factor);
}

function calcPayback(monthlyBill: number): number {
  const annual = monthlyBill * 12;
  if (annual <= 0) return 0;
  return Math.round((SYSTEM_COST / annual) * 10) / 10;
}

// Calendar helpers (from BookingFlow)
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function toISODate(year: number, month: number, day: number): string {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function formatTime(time: string): string {
  const [hRaw, mRaw] = time.split(':');
  const h = Number(hRaw);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mRaw} ${ampm}`;
}

function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Valid bill values for validation
const VALID_BILLS = ['lt_100', '100_200', '200_300', 'gt_300'] as const;

// ─── Component ────────────────────────────────────────────────────────────────
export default function EstimateFlow({ campaignCode, initialBill }: EstimateFlowProps) {
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
    utility: 'pge', // Pre-filled for NorCal
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

  // Calendar state (Step 7)
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [booked, setBooked] = useState(false);

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
    'calendar',
    'confirmation',
  ];

  // Track step views and flow_abandon on unmount
  useEffect(() => {
    track('flow_step_view', { step_index: step, step_name: stepNames[step] });
  }, [step]);

  useEffect(() => {
    // Track abandon on unmount if not completed (step < 8)
    return () => {
      if (step < 8 && step >= 1) {
        track('flow_abandon', { last_step_index: step });
      }
    };
  }, [step]);

  // Load slots when entering Step 7
  const loadSlots = useCallback(async () => {
    setSlotsLoading(true);
    setSlotsError('');
    const from = toISODate(viewYear, viewMonth, 1);
    const lastDay = new Date(viewYear, viewMonth + 1, 0).getDate();
    const to = toISODate(viewYear, viewMonth, lastDay);
    try {
      const res = await fetch(`/api/slots?from=${from}&to=${to}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('bad status');
      setSlots((await res.json()) as Slot[]);
    } catch {
      setSlotsError("Couldn't load availability. Please try again.");
    }
    setSlotsLoading(false);
  }, [viewYear, viewMonth]);

  useEffect(() => {
    if (step === 7) {
      loadSlots();
    }
  }, [step, loadSlots]);

  const slotsByDate = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const slot of slots) {
      const key = String(slot.slot_date).slice(0, 10);
      const list = map.get(key) ?? [];
      list.push(slot);
      map.set(key, list);
    }
    return map;
  }, [slots]);

  function changeMonth(delta: number) {
    let m = viewMonth + delta;
    let y = viewYear;
    if (m < 0) { m = 11; y -= 1; }
    else if (m > 11) { m = 0; y += 1; }
    setViewYear(y);
    setViewMonth(m);
    setSelectedDate(null);
    setSelectedSlot(null);
  }

  const atCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();

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
    if (s === 4 && !form.utility) errs.utility = 'Please select your utility';
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
      const pge25yr = calcPge25yr(monthlyValue);
      const savingsVal = Math.max(0, pge25yr - SYSTEM_COST);
      track('estimate_revealed', { bill_band: form.monthly_bill, estimate_range: savingsVal });
    }

    setStep(s => s + 1);
    stepRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleBack() {
    setErrors({});
    setStep(s => s - 1);
    stepRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      setStep(8); // Silently succeed
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

      setStep(7); // Move to calendar
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    }
    setSubmitting(false);
  }

  // Book appointment at Step 7
  async function handleBook() {
    if (!selectedSlot || !leadId) return;
    setBookingSubmitting(true);
    setBookingError('');

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slot_id: selectedSlot.id,
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          address: form.street_address,
          notes: form.notes,
          website: '', // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setBookingError(data.error || 'Something went wrong. Please try again.');
        if (res.status === 409) {
          setSelectedSlot(null);
          loadSlots();
        }
        setBookingSubmitting(false);
        return;
      }

      setBooked(true);

      // Track booking_completed event
      track('booking_completed', {
        lead_id: leadId,
        slot_time: `${selectedDate} ${selectedSlot.start_time}`,
      });
      track('flow_step_complete', { step_index: 7, answer: { booked: true } });

      setStep(8);
    } catch {
      setBookingError('Network error. Please try again.');
    }
    setBookingSubmitting(false);
  }

  function skipCalendar() {
    track('flow_step_complete', { step_index: 7, answer: { booked: false, skipped: true } });
    setStep(8);
  }

  // Calculate estimate for Step 5
  const monthlyValue = form.monthly_bill ? billToMonthlyValue(form.monthly_bill) : 300;
  const pge25yr = calcPge25yr(monthlyValue);
  const savings = Math.max(0, pge25yr - SYSTEM_COST);
  const payback = calcPayback(monthlyValue);

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
    'Book a time',
    'Confirmation',
  ];

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="mx-auto max-w-xl" ref={stepRef}>
      {/* Progress bar */}
      {step < 8 && (
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
            What&apos;s your average monthly PG&amp;E bill?
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
          <h2 className="text-2xl font-bold text-white mb-6">Who&apos;s your utility?</h2>
          <div className="space-y-3">
            {UTILITY_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect('utility', opt.value)}
                aria-pressed={form.utility === opt.value}
                className={cn(
                  'w-full flex items-center justify-between p-5 rounded-xl border-2 text-left transition-all duration-150',
                  form.utility === opt.value
                    ? 'border-gold bg-gold/10 text-white'
                    : 'border-blue-900 bg-navy-700/50 text-blue-100 hover:border-blue-400 hover:bg-navy-600/50'
                )}
              >
                <span className="font-semibold text-lg">{opt.label}</span>
                {form.utility === opt.value && <Check className="h-5 w-5 text-gold" />}
              </button>
            ))}
          </div>
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
          <h2 className="text-2xl font-bold text-white mb-2">Here&apos;s your ballpark estimate</h2>
          <p className="text-blue-300 text-sm mb-8">Based on your ${monthlyValue}/mo bill</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-5">
              <p className="text-xs uppercase tracking-wider text-red-400 mb-1">
                25-yr PG&amp;E cost
              </p>
              <p className="font-display text-2xl font-bold text-red-300">
                ${pge25yr.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <p className="text-xs uppercase tracking-wider text-gold mb-1">VoltSol system</p>
              <p className="font-display text-2xl font-bold text-gold">Under $10k</p>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-6 mb-6">
            <p className="text-xs uppercase tracking-wider text-emerald-400 mb-1">
              Potential savings
            </p>
            <p className="font-display text-4xl font-bold text-emerald-300">
              ${savings.toLocaleString()}
            </p>
            <p className="text-sm text-blue-300 mt-2">
              Payback in ~{payback} years, then the power is free
            </p>
          </div>

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

      {/* ─── Step 7: Calendar (optional) ─── */}
      {step === 7 && !booked && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Want a VoltSol rep to walk you through it?</h2>
          <p className="text-blue-300 text-sm mb-6">
            Pick a time for a 20-min Google Meet — or skip and we&apos;ll email your breakdown.
          </p>

          {selectedSlot && selectedDate ? (
            // Confirm selected slot
            <div className="rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6">
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                className="flex min-h-[44px] items-center gap-1 text-sm font-medium text-blue-300 hover:text-white mb-4"
              >
                <ChevronLeft className="h-4 w-4" />
                Pick a different time
              </button>

              <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/5 p-4 mb-6">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-display font-bold text-white">{formatLongDate(selectedDate)}</p>
                  <p className="text-sm text-blue-300">
                    {formatTime(selectedSlot.start_time)} – {formatTime(selectedSlot.end_time)}
                  </p>
                </div>
              </div>

              {bookingError && (
                <p className="mb-4 rounded-lg border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                  {bookingError}
                </p>
              )}

              <button
                type="button"
                onClick={handleBook}
                disabled={bookingSubmitting}
                className="cta-glow w-full bg-gold hover:bg-gold-400 disabled:bg-gold-600/50 text-navy font-bold text-lg py-4 rounded-xl transition-colors"
              >
                {bookingSubmitting ? 'Booking...' : 'Book My Meet'}
              </button>
            </div>
          ) : (
            // Calendar picker
            <div className="rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                  <CalendarDays className="h-5 w-5 text-gold" />
                  {new Date(viewYear, viewMonth, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => changeMonth(-1)}
                    disabled={atCurrentMonth}
                    aria-label="Previous month"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy-500/50 text-blue-300 hover:text-white disabled:opacity-30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => changeMonth(1)}
                    aria-label="Next month"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy-500/50 text-blue-300 hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {slotsError && (
                <p className="mb-4 rounded-lg border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                  {slotsError}
                </p>
              )}

              <div className="grid grid-cols-7 gap-1 text-center">
                {WEEKDAYS.map(d => (
                  <div key={d} className="py-2 text-xs font-semibold uppercase tracking-wider text-blue-300/60">
                    {d}
                  </div>
                ))}
                {Array.from({ length: new Date(viewYear, viewMonth, 1).getDay() }).map((_, i) => (
                  <div key={`pad-${i}`} />
                ))}
                {Array.from({ length: new Date(viewYear, viewMonth + 1, 0).getDate() }).map((_, i) => {
                  const day = i + 1;
                  const iso = toISODate(viewYear, viewMonth, day);
                  const hasSlots = slotsByDate.has(iso);
                  const isSelected = selectedDate === iso;
                  return (
                    <button
                      key={iso}
                      type="button"
                      disabled={!hasSlots}
                      onClick={() => setSelectedDate(isSelected ? null : iso)}
                      aria-pressed={isSelected}
                      className={cn(
                        'min-h-[44px] rounded-lg py-2.5 text-sm',
                        isSelected
                          ? 'bg-gold font-bold text-navy'
                          : hasSlots
                            ? 'border border-gold/40 bg-gold/10 font-semibold text-gold hover:bg-gold/20'
                            : 'text-blue-300/30'
                      )}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {slotsLoading && (
                <p className="mt-6 text-center text-sm text-blue-300">Loading availability...</p>
              )}

              {!slotsLoading && slots.length === 0 && !slotsError && (
                <p className="mt-6 text-center text-sm text-blue-300">
                  No openings this month — try the next one.
                </p>
              )}

              {selectedDate && (
                <div className="mt-6 border-t border-navy-500/40 pt-6">
                  <h4 className="font-display font-bold text-white">{formatLongDate(selectedDate)}</h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {(slotsByDate.get(selectedDate) ?? []).map(slot => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className="flex items-center justify-between rounded-xl border border-navy-500/50 bg-navy-800 px-4 py-3 text-left hover:border-gold/60 hover:bg-gold/5"
                      >
                        <span className="font-semibold text-white">
                          {formatTime(slot.start_time)} – {formatTime(slot.end_time)}
                        </span>
                        <span className="text-xs text-blue-300">{slot.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={skipCalendar}
            className="mt-4 w-full text-center text-sm text-blue-300 hover:text-white py-3"
          >
            Just send me the breakdown &rarr;
          </button>
        </div>
      )}

      {/* ─── Step 8: Confirmation ─── */}
      {step === 8 && (
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 mb-4">
            <Check className="h-7 w-7 text-gold" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {booked ? "You're booked!" : "Your estimate is on the way!"}
          </h2>
          {booked && selectedSlot && selectedDate ? (
            <p className="text-blue-100 mb-6">
              {formatLongDate(selectedDate)}
              <br />
              {formatTime(selectedSlot.start_time)} – {formatTime(selectedSlot.end_time)}
            </p>
          ) : (
            <p className="text-blue-100 mb-6">
              Check your email — we&apos;ll send your personalized estimate shortly.
            </p>
          )}

          <div className="mx-auto max-w-md rounded-xl border border-navy-500/40 bg-navy-800 p-5 text-left">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-blue-100">
                {booked
                  ? "We've sent a confirmation email with your Google Meet link. A VoltSol rep will reach out to confirm."
                  : "A VoltSol rep will follow up with your complete estimate and answer any questions."}
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
