import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Sharing Consent Language — VoltSol Energy',
  description: 'TCPA-compliant lead sharing consent disclosure for VoltSol solar inquiry forms.',
  robots: { index: false, follow: false },
};

export default function LeadConsentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      {/* DRAFT banner */}
      <div className="mb-8 rounded-lg border-2 border-amber-400 bg-amber-50 px-6 py-4">
        <p className="font-semibold text-amber-800 text-sm uppercase tracking-wide">
          DRAFT — Pending Legal Review
        </p>
        <p className="mt-1 text-amber-700 text-sm">
          This document is an internal draft and has NOT yet been reviewed by counsel.
          The consent language below must be reviewed by a licensed attorney before deployment
          on consumer-facing forms. TCPA exposure can be significant — do not deploy without review.
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-2">Lead-Sharing Consent — Reference Language</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 13, 2026 (DRAFT)</p>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Purpose</h2>
          <p className="text-gray-700">
            This page documents the exact consent language that appears on VoltSol solar inquiry forms
            where Lead information may be shared with subscribing partner contractors. The complete consent
            record — including the version of this text, the timestamp, and the submitting IP address — is
            stored in the database alongside each Lead record.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Consent Language (v1.0)</h2>
          <div className="rounded-lg border border-gray-300 bg-gray-50 p-6">
            <p className="text-xs font-mono text-gray-500 mb-3">CONSENT_WORDING_V1 — displayed verbatim on form</p>
            <blockquote className="text-gray-800 text-sm leading-relaxed border-l-4 border-blue-500 pl-4">
              By submitting this form, I authorize VoltSol Energy, LLC and its network of licensed solar
              installation partners (&quot;Partners&quot;) to contact me regarding solar energy products
              and services at the phone number and email address I provided above. I understand that:
              (1) my information may be shared with one (1) licensed solar contractor serving my area
              who has purchased this lead through VoltSol&apos;s contractor marketplace; (2) Partners may
              contact me by phone (including autodialed or pre-recorded calls), text message, or email;
              (3) my consent is not required as a condition of any purchase or service; and (4) I may
              opt out at any time by replying STOP to any text message or contacting VoltSol at
              support@voltsolenergy.com. Message and data rates may apply.
            </blockquote>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Consent Record Storage Format</h2>
          <p className="text-gray-700 mb-3">
            The following JSON shape is stored in the{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">marketplace_leads.consent_json</code>{' '}
            column for every Lead captured through a marketplace form:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-xs overflow-x-auto">{`{
  "version": "1.0",
  "form_id": "market-city-solar-v1",
  "timestamp": "2026-06-13T18:00:00.000Z",
  "ip": "98.100.200.1",
  "wording": "By submitting this form, I authorize VoltSol Energy, LLC and its network..."
}`}</pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">TCPA Compliance Checklist</h2>
          <p className="text-gray-600 text-sm mb-3">
            Items to verify before deploying any form that captures leads for marketplace distribution:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'Consent checkbox is unchecked by default (not pre-checked)',
              'Consent language is conspicuous — displayed in legible font, not hidden in fine print',
              'Partners named or described (even generically: "licensed solar contractors")',
              'Clear statement that consent is not a condition of purchase',
              'Opt-out mechanism described',
              'Full consent text stored verbatim in database with timestamp and IP',
              'Consent version is recorded so historical language can be retrieved if needed',
              'Do-Not-Call registry scrubbing implemented before outbound calls (subscriber obligation)',
              'Consent language reviewed and approved by licensed attorney',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 inline-block w-4 h-4 rounded border border-gray-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Notes for Counsel</h2>
          <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
            <li>
              The platform shares each lead with <strong>one</strong> subscriber only. Consent language
              should reflect &quot;one licensed contractor&quot; rather than &quot;multiple companies&quot;
              to minimize TCPA exposure.
            </li>
            <li>
              If future product iterations allow multiple claims per lead, consent language must be updated
              to identify all categories of potential callers.
            </li>
            <li>
              California B2C TCPA rules are stricter than federal minimums. Review CPUC rules and any
              applicable CIPA provisions.
            </li>
            <li>
              Consider whether the platform qualifies as a &quot;lead generator&quot; under the 2023
              FCC TCPA one-to-one consent rule (effective January 2025). The one-claim-per-lead model
              is designed to align with this requirement.
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p>VoltSol Energy, LLC — Internal use only until attorney-approved.</p>
      </div>
    </div>
  );
}
