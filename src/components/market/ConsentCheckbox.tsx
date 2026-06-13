'use client';

import { useState } from 'react';

// Canonical consent wording — version must match what's stored in consent_json.version
export const CONSENT_VERSION = '1.0';
export const CONSENT_FORM_ID = 'market-solar-v1';

export const CONSENT_WORDING =
  'By submitting this form, I authorize VoltSol Energy, LLC and its network of licensed solar ' +
  'installation partners ("Partners") to contact me regarding solar energy products and services ' +
  'at the phone number and email address I provided above. I understand that: (1) my information ' +
  'may be shared with one (1) licensed solar contractor serving my area who has purchased this lead ' +
  'through VoltSol\'s contractor marketplace; (2) Partners may contact me by phone (including ' +
  'autodialed or pre-recorded calls), text message, or email; (3) my consent is not required as ' +
  'a condition of any purchase or service; and (4) I may opt out at any time by replying STOP to ' +
  'any text message or contacting VoltSol at support@voltsolenergy.com. Message and data rates may apply.';

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export function ConsentCheckbox({ checked, onChange, error }: ConsentCheckboxProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-blue-600"
          aria-required="true"
          aria-describedby="consent-text"
        />
        <span id="consent-text" className="text-xs text-gray-600 leading-relaxed">
          {CONSENT_WORDING}
        </span>
      </label>
      {error && (
        <p className="mt-2 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
      <p className="mt-2 ml-7 text-xs text-gray-400">
        See our{' '}
        <a href="/market/legal/privacy" className="underline hover:text-gray-600" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/market/legal/terms" className="underline hover:text-gray-600" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>
        .
      </p>
    </div>
  );
}

// Build the consent_json payload to store with each lead submission.
// Call this at form submit time to capture the exact timestamp and IP.
export function buildConsentJson(ip: string): {
  version: string;
  form_id: string;
  timestamp: string;
  ip: string;
  wording: string;
} {
  return {
    version: CONSENT_VERSION,
    form_id: CONSENT_FORM_ID,
    timestamp: new Date().toISOString(),
    ip,
    wording: CONSENT_WORDING,
  };
}

// Hook for managing consent state in a form
export function useConsentField() {
  const [consented, setConsented] = useState(false);
  const [consentError, setConsentError] = useState<string | undefined>();

  function validateConsent(): boolean {
    if (!consented) {
      setConsentError('You must agree to the consent above to submit your information.');
      return false;
    }
    setConsentError(undefined);
    return true;
  }

  return { consented, setConsented, consentError, validateConsent };
}
