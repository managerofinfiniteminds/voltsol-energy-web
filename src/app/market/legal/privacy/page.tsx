import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplace Privacy Policy — VoltSol Energy',
  description: 'Privacy policy for the VoltSol Lead Marketplace covering data collection, use, and sharing.',
  robots: { index: false, follow: false },
};

export default function MarketplacePrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      {/* DRAFT banner */}
      <div className="mb-8 rounded-lg border-2 border-amber-400 bg-amber-50 px-6 py-4">
        <p className="font-semibold text-amber-800 text-sm uppercase tracking-wide">
          DRAFT — Pending Legal Review
        </p>
        <p className="mt-1 text-amber-700 text-sm">
          This document is an internal draft and has NOT yet been reviewed by counsel.
          It must not be published or relied upon until reviewed and approved by a licensed attorney.
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-2">VoltSol Lead Marketplace — Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 13, 2026 (DRAFT)</p>

      <section className="prose prose-gray max-w-none space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Scope</h2>
          <p>
            This Privacy Policy applies to information collected by VoltSol Energy, LLC (&quot;VoltSol&quot;)
            through the VoltSol Lead Marketplace (&quot;Marketplace&quot;), including information submitted
            by consumers via solar inquiry forms and information provided by licensed contractor subscribers.
            It supplements the main VoltSol Privacy Policy at{' '}
            <a href="/privacy" className="text-blue-600 underline">/privacy</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <h3 className="font-semibold mt-3 mb-1">From Consumers (Lead Subjects)</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name, email address, phone number</li>
            <li>Service address (city, state, ZIP)</li>
            <li>Home ownership status and estimated monthly electricity bill</li>
            <li>Preferred contact time</li>
            <li>IP address and timestamp of form submission</li>
            <li>Complete consent record including exact consent language presented</li>
            <li>URL of the page on which the form was submitted</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-1">From Subscribers (Contractor Accounts)</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Business name, contact email, billing information</li>
            <li>Geographic service areas and contractor license information</li>
            <li>Account usage data, claimed leads, and platform activity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. How We Use Consumer Information</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Lead distribution:</strong> Consumer contact information is shared with a single
              licensed solar installation contractor who has claimed the Lead through the Marketplace.
            </li>
            <li>
              <strong>Consent recordkeeping:</strong> We retain the full consent record indefinitely for
              compliance purposes.
            </li>
            <li>
              <strong>Platform improvement:</strong> Aggregated, de-identified data may be used to improve
              lead quality scoring and service areas.
            </li>
            <li>
              <strong>Communications:</strong> We may send a confirmation email to the consumer acknowledging
              receipt of their inquiry.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Lead Sharing — TCPA Disclosure</h2>
          <p>
            When a consumer submits a solar inquiry form on this platform, their information may be shared
            with <strong>one (1) licensed solar installation contractor</strong> in our subscriber network
            who has purchased that lead. The consumer&apos;s explicit consent to this sharing is obtained
            at the time of form submission and recorded with a timestamp, IP address, and the exact consent
            language shown.
          </p>
          <p className="mt-2">
            Subscribers are contractually obligated to contact consumers only in compliance with the
            Telephone Consumer Protection Act (TCPA) and all applicable laws, and only for purposes
            consistent with the consumer&apos;s solar inquiry.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Consumer Lead data: retained for thirty-six (36) months or as required by law.</li>
            <li>Consent records: retained indefinitely for legal compliance.</li>
            <li>Subscriber account data: retained for the duration of the subscription plus seven (7) years for billing records.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Consumer Rights (CCPA)</h2>
          <p>
            California residents have the right to know what personal information we collect, request
            deletion of their personal information, and opt out of the &quot;sale&quot; of personal
            information (as defined by the CCPA). To exercise these rights, contact us at{' '}
            <a href="mailto:privacy@voltsolenergy.com" className="text-blue-600 underline">
              privacy@voltsolenergy.com
            </a>
            . We do not sell personal information to data brokers; lead sharing is limited to one
            contracted Subscriber per Lead.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Security</h2>
          <p>
            We use industry-standard encryption (TLS in transit, AES-256 at rest via Neon PostgreSQL),
            role-based access controls, and session-based authentication for the Marketplace. Payment
            processing is handled entirely by Stripe and no payment card data is stored on our servers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Third-Party Services</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Stripe:</strong> Payment processing. Subject to Stripe&apos;s Privacy Policy.</li>
            <li><strong>Resend:</strong> Transactional email delivery.</li>
            <li><strong>Neon:</strong> Managed PostgreSQL database hosting.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
          <p>
            For privacy questions or to exercise your rights, contact:{' '}
            <a href="mailto:privacy@voltsolenergy.com" className="text-blue-600 underline">
              privacy@voltsolenergy.com
            </a>
          </p>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p>VoltSol Energy, LLC — Northern California</p>
      </div>
    </div>
  );
}
