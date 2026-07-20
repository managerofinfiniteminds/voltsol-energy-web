'use client';

import { useState, FormEvent } from 'react';
import SuccessScreen from './SuccessScreen';
import { formatPhoneInput, isValidUSPhone, isValidEmail } from '@/lib/form-validation';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/locale';

// ── Constants ────────────────────────────────────────────────────────────────
const CONSENT_VERSION = '2.0';
const CONSENT_FORM_ID = 'quick-lead-form-v1';

const OWNS_HOME_OPTIONS = [
  { value: 'own', label_en: 'Yes, I own it', label_es: 'Sí, es mía' },
  { value: 'rent', label_en: 'No, I rent', label_es: 'No, rento' },
];

const MONTHLY_BILL_OPTIONS = [
  { value: 'lt_100', label_en: 'Under $150', label_es: 'Menos de $150' },
  { value: '100_200', label_en: '$150–$300', label_es: '$150–$300' },
  { value: '200_300', label_en: '$300–$500', label_es: '$300–$500' },
  { value: 'gt_300', label_en: '$500+', label_es: '$500+' },
];

// Normalize state input to CA/TX or empty
function normalizeState(input?: string | null): 'CA' | 'TX' | '' {
  if (!input) return '';
  const raw = input.trim();
  if (!raw) return '';
  const map: Record<string, 'CA' | 'TX'> = {
    california: 'CA', ca: 'CA',
    texas: 'TX', tx: 'TX'
  };
  const normalized = map[raw.toLowerCase()];
  if (normalized) return normalized;
  const upper = raw.slice(0, 2).toUpperCase();
  if (upper === 'CA' || upper === 'TX') return upper;
  return '';
}

// ── Consent wordings ─────────────────────────────────────────────────────────
// CA: VoltSol is the installer
const CONSENT_CA_EN =
  'By submitting, I agree to receive calls, texts, and emails from VoltSol Energy about my solar estimate. ' +
  'I understand my consent is not a condition of purchase. Message and data rates may apply.';
const CONSENT_CA_ES =
  'Al enviar, acepto recibir llamadas, mensajes de texto y correos de VoltSol Energy sobre mi estimado solar. ' +
  'Entiendo que mi consentimiento no es condición de compra. Pueden aplicar tarifas de mensajes y datos.';

// TX: VoltSol is a broker/referrer sharing leads with licensed installers
const CONSENT_TX_EN =
  'By submitting, I agree that VoltSol Energy may share my information with one or more licensed local solar installers, ' +
  'and that VoltSol and those installers may contact me by call, text, and email about my project. ' +
  'I understand consent is not a condition of purchase. Message and data rates may apply.';
const CONSENT_TX_ES =
  'Al enviar, acepto que VoltSol Energy puede compartir mi información con uno o más instaladores solares locales licenciados, ' +
  'y que VoltSol y dichos instaladores pueden contactarme por llamada, texto y correo sobre mi proyecto. ' +
  'Entiendo que el consentimiento no es condición de compra. Pueden aplicar tarifas de mensajes y datos.';

// ── Props & State ────────────────────────────────────────────────────────────
interface QuickLeadFormProps {
  locale?: Locale;
  initialState?: string; // 'CA', 'TX', 'california', 'texas', etc.
  compact?: boolean;
  sourcePage?: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function QuickLeadForm({
  locale = 'en',
  initialState,
  compact = false,
  sourcePage,
}: QuickLeadFormProps) {
  const t = getDict(locale);
  const detectedState = normalizeState(initialState);

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    zip: '',
    state: detectedState || '', // If unknown, user picks from dropdown
    owns_home: '',
    monthly_bill: '',
    consented: false,
    website: '', // honeypot
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  // Current effective state (normalized)
  const currentState = normalizeState(form.state);

  // Compute the consent wording the user SEES (locale + state specific)
  function getShownConsent(): string {
    if (currentState === 'TX') {
      return locale === 'es' ? CONSENT_TX_ES : CONSENT_TX_EN;
    }
    // CA or unknown → default to CA installer consent
    return locale === 'es' ? CONSENT_CA_ES : CONSENT_CA_EN;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm(prev => ({ ...prev, [name]: checked }));
    } else {
      const next = name === 'phone' ? formatPhoneInput(value) : value;
      setForm(prev => ({ ...prev, [name]: next }));
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name } = e.target;
    const errs = validate();
    setErrors(prev => ({ ...prev, [name]: errs[name] ?? '' }));
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.first_name.trim()) errs.first_name = t.err_first;
    if (!form.last_name.trim()) errs.last_name = t.err_last;
    if (!form.email.trim()) errs.email = t.err_email_req;
    else if (!isValidEmail(form.email)) errs.email = t.err_email;
    if (!form.phone.trim()) errs.phone = t.err_phone_req;
    else if (!isValidUSPhone(form.phone)) errs.phone = t.err_phone;
    if (!form.zip.trim()) errs.zip = locale === 'es' ? 'El código postal es obligatorio' : 'ZIP code is required';
    else if (!/^\d{5}$/.test(form.zip.trim())) errs.zip = locale === 'es' ? 'Ingresa un código postal válido de 5 dígitos' : 'Please enter a valid 5-digit ZIP code';
    if (!form.state.trim()) errs.state = locale === 'es' ? 'Selecciona tu estado' : 'State is required';
    if (!form.owns_home) errs.owns_home = t.err_select;
    if (!form.monthly_bill) errs.monthly_bill = t.err_select;
    if (!form.consented) errs.consented = t.err_consent;
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError('');

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstErrKey = Object.keys(errs)[0];
      const el = document.getElementsByName(firstErrKey)[0];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Honeypot check
    if (form.website.trim()) {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);

    // Build attribution from current URL
    const params = new URLSearchParams(window.location.search);
    const attribution = {
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      referrer: document.referrer || undefined,
    };

    // Compute the exact consent wording shown to the user
    const shownConsent = getShownConsent();

    const payload = {
      first_name: form.first_name.trim(),
      last_name: form.last_name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      state: currentState,
      zip: form.zip.trim(),
      owns_home: form.owns_home,
      monthly_bill: form.monthly_bill,
      source_consumer: 'voltsol_quickform',
      source_page: sourcePage || window.location.pathname,
      consent: {
        version: CONSENT_VERSION,
        form_id: CONSENT_FORM_ID,
        wording: shownConsent, // CRITICAL: submit the EXACT string shown to the user
        timestamp: new Date().toISOString(),
      },
      attribution,
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
          setServerError(data.error || t.err_ratelimit);
        } else if (res.status === 400 && data.details) {
          // Map field errors
          const fieldErrors: FormErrors = {};
          for (const [field, msgs] of Object.entries(data.details)) {
            fieldErrors[field] = (msgs as string[])[0];
          }
          setErrors(fieldErrors);
        } else {
          setServerError(data.error || t.err_generic);
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError(t.err_network);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return <SuccessScreen firstName={form.first_name} />;
  }

  // Field label helper
  const ownsLabel = (opt: typeof OWNS_HOME_OPTIONS[0]) => locale === 'es' ? opt.label_es : opt.label_en;
  const billLabel = (opt: typeof MONTHLY_BILL_OPTIONS[0]) => locale === 'es' ? opt.label_es : opt.label_en;

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? 'space-y-4' : 'space-y-5'}>
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

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            {t.label_first} <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={locale === 'es' ? 'Juan' : 'Jane'}
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.first_name ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.first_name && <p className="mt-1 text-sm text-red-400">{errors.first_name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            {t.label_last} <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={locale === 'es' ? 'García' : 'Smith'}
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.last_name ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.last_name && <p className="mt-1 text-sm text-red-400">{errors.last_name}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          {t.label_email} <span className="text-amber-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={locale === 'es' ? 'tu@email.com' : 'you@example.com'}
          autoComplete="email"
          className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.email ? 'border-red-500' : 'border-slate-600'}`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          {t.label_phone} <span className="text-amber-400">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="(530) 555-0100"
          autoComplete="tel"
          className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.phone ? 'border-red-500' : 'border-slate-600'}`}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
      </div>

      {/* State + ZIP */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            {t.label_state} <span className="text-amber-400">*</span>
          </label>
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.state ? 'border-red-500' : 'border-slate-600'} ${!form.state ? 'text-slate-500' : ''}`}
          >
            <option value="" disabled>
              {locale === 'es' ? 'Selecciona...' : 'Select...'}
            </option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
          </select>
          {errors.state && <p className="mt-1 text-sm text-red-400">{errors.state}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            {t.label_zip} <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="95814"
            maxLength={5}
            autoComplete="postal-code"
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.zip ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.zip && <p className="mt-1 text-sm text-red-400">{errors.zip}</p>}
        </div>
      </div>

      {/* Owns home */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {locale === 'es' ? '¿Eres dueño de tu casa?' : 'Do you own your home?'} <span className="text-amber-400">*</span>
        </label>
        <div className="space-y-2">
          {OWNS_HOME_OPTIONS.map(opt => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="owns_home"
                value={opt.value}
                checked={form.owns_home === opt.value}
                onChange={handleChange}
                className="w-4 h-4 accent-amber-400"
              />
              <span className="text-slate-200 group-hover:text-white transition">{ownsLabel(opt)}</span>
            </label>
          ))}
        </div>
        {errors.owns_home && <p className="mt-1 text-sm text-red-400">{errors.owns_home}</p>}
      </div>

      {/* Monthly bill */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          {locale === 'es' ? 'Factura mensual promedio' : 'Average monthly electric bill'} <span className="text-amber-400">*</span>
        </label>
        <select
          name="monthly_bill"
          value={form.monthly_bill}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.monthly_bill ? 'border-red-500' : 'border-slate-600'} ${!form.monthly_bill ? 'text-slate-500' : ''}`}
        >
          <option value="" disabled>
            {locale === 'es' ? 'Selecciona un rango...' : 'Select a range...'}
          </option>
          {MONTHLY_BILL_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{billLabel(opt)}</option>
          ))}
        </select>
        {errors.monthly_bill && <p className="mt-1 text-sm text-red-400">{errors.monthly_bill}</p>}
      </div>

      {/* Consent checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="consented"
            checked={form.consented}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-amber-400 shrink-0"
          />
          <span className="text-sm text-slate-300 leading-relaxed">
            {getShownConsent()}
          </span>
        </label>
        {errors.consented && <p className="mt-1 text-sm text-red-400">{errors.consented}</p>}
      </div>

      {/* Server error */}
      {serverError && (
        <div className="bg-red-900/40 border border-red-500 rounded-lg px-4 py-3 text-red-300 text-sm">
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-amber-800 disabled:cursor-not-allowed text-navy font-bold text-lg py-4 rounded-xl transition-colors duration-200 shadow-lg"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t.sending}
          </span>
        ) : (
          t.submit_cta
        )}
      </button>
    </form>
  );
}
