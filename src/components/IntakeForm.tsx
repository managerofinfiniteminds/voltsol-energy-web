'use client';

import { useState, FormEvent } from 'react';
import SuccessScreen from './SuccessScreen';
import { formatPhoneInput, isValidUSPhone, isValidEmail } from '@/lib/form-validation';

interface IntakeFormProps {
  campaignCode?: string;
}

interface FormErrors {
  [key: string]: string;
}

const OWNS_HOME_OPTIONS = [
  { value: 'Yes, I own it', label: 'Yes, I own it' },
  { value: 'No, I rent', label: 'No, I rent' },
  { value: 'Not sure', label: 'Not sure' },
];

const MONTHLY_BILL_OPTIONS = [
  'Under $100',
  '$100–$200',
  '$200–$300',
  '$300+',
];

const CONTACT_TIME_OPTIONS = [
  'Morning (8am–12pm)',
  'Afternoon (12–5pm)',
  'Evening (5–8pm)',
  'Weekends',
];

const validatePhone = isValidUSPhone;
const validateEmail = isValidEmail;

export default function IntakeForm({ campaignCode }: IntakeFormProps) {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    state: 'CA',
    zip: '',
    owns_home: '',
    monthly_bill: '',
    best_contact_time: '',
    notes: '',
    website: '', // honeypot
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const next = name === 'phone' ? formatPhoneInput(value) : value;
    setForm(prev => ({ ...prev, [name]: next }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  // Show field-level errors when leaving a field
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    const errs = validate();
    setErrors(prev => ({ ...prev, [name]: errs[name] ?? '' }));
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.first_name.trim()) errs.first_name = 'First name is required';
    if (!form.last_name.trim()) errs.last_name = 'Last name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!validateEmail(form.email)) errs.email = 'Please enter a valid email';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!validatePhone(form.phone)) errs.phone = 'Please enter a valid 10-digit US phone number';
    if (!form.street_address.trim()) errs.street_address = 'Street address is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.state.trim()) errs.state = 'State is required';
    if (!form.zip.trim()) errs.zip = 'ZIP code is required';
    else if (!/^\d{5}(-\d{4})?$/.test(form.zip.trim())) errs.zip = 'Please enter a valid ZIP code';
    if (!form.owns_home) errs.owns_home = 'Please select an option';
    if (!form.monthly_bill) errs.monthly_bill = 'Please select your average bill';
    if (!form.best_contact_time) errs.best_contact_time = 'Please select a contact time';
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
      document.getElementsByName(firstErrKey)[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        ...form,
        campaign_code: campaignCode,
      };

      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setServerError(data.error || 'Too many requests. Please try again later.');
        } else if (res.status === 422 && data.details) {
          const fieldErrors: FormErrors = {};
          for (const [field, msgs] of Object.entries(data.details)) {
            fieldErrors[field] = (msgs as string[])[0];
          }
          setErrors(fieldErrors);
        } else {
          setServerError(data.error || 'Something went wrong. Please try again.');
        }
        return;
      }

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

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from users */}
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
            First Name <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Jane"
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.first_name ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.first_name && <p className="mt-1 text-sm text-red-400">{errors.first_name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Last Name <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Smith"
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.last_name ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.last_name && <p className="mt-1 text-sm text-red-400">{errors.last_name}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Email <span className="text-amber-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="jane@example.com"
          autoComplete="email"
          className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.email ? 'border-red-500' : 'border-slate-600'}`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Phone <span className="text-amber-400">*</span>
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

      {/* Street Address */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Street Address <span className="text-amber-400">*</span>
        </label>
        <input
          type="text"
          name="street_address"
          value={form.street_address}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="123 Main St"
          autoComplete="street-address"
          className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.street_address ? 'border-red-500' : 'border-slate-600'}`}
        />
        {errors.street_address && <p className="mt-1 text-sm text-red-400">{errors.street_address}</p>}
      </div>

      {/* City / State / ZIP */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-300 mb-1">
            City <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Sacramento"
            autoComplete="address-level2"
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.city ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.city && <p className="mt-1 text-sm text-red-400">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            State <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="CA"
            maxLength={2}
            autoComplete="address-level1"
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.state ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.state && <p className="mt-1 text-sm text-red-400">{errors.state}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            ZIP <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="95814"
            maxLength={10}
            autoComplete="postal-code"
            className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.zip ? 'border-red-500' : 'border-slate-600'}`}
          />
          {errors.zip && <p className="mt-1 text-sm text-red-400">{errors.zip}</p>}
        </div>
      </div>

      {/* Do you own your home? */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Do you own your home? <span className="text-amber-400">*</span>
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
              <span className="text-slate-200 group-hover:text-white transition">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.owns_home && <p className="mt-1 text-sm text-red-400">{errors.owns_home}</p>}
      </div>

      {/* Monthly bill */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Average monthly electric bill <span className="text-amber-400">*</span>
        </label>
        <select
          name="monthly_bill"
          value={form.monthly_bill}
          onChange={handleChange}
          className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.monthly_bill ? 'border-red-500' : 'border-slate-600'} ${!form.monthly_bill ? 'text-slate-500' : ''}`}
        >
          <option value="" disabled>Select a range...</option>
          {MONTHLY_BILL_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.monthly_bill && <p className="mt-1 text-sm text-red-400">{errors.monthly_bill}</p>}
      </div>

      {/* Best contact time */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Best time to reach you <span className="text-amber-400">*</span>
        </label>
        <select
          name="best_contact_time"
          value={form.best_contact_time}
          onChange={handleChange}
          className={`w-full bg-slate-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${errors.best_contact_time ? 'border-red-500' : 'border-slate-600'} ${!form.best_contact_time ? 'text-slate-500' : ''}`}
        >
          <option value="" disabled>Select a time...</option>
          {CONTACT_TIME_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.best_contact_time && <p className="mt-1 text-sm text-red-400">{errors.best_contact_time}</p>}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Additional notes <span className="text-slate-500 font-normal">(optional)</span>
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Anything else you'd like us to know?"
          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
        />
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
        disabled={submitting || Object.keys(validate()).length > 0}
        className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-amber-800 disabled:cursor-not-allowed text-navy font-bold text-lg py-4 rounded-xl transition-colors duration-200 shadow-lg"
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
          'Get My Free Estimate'
        )}
      </button>

      {/* Privacy */}
      <p className="text-xs text-slate-500 text-center leading-relaxed">
        By submitting, you agree to our{' '}
        <a href="#" className="text-slate-400 hover:text-amber-400 underline">Privacy Policy</a>.
        VoltSol Energy will not sell your information.
      </p>
    </form>
  );
}
