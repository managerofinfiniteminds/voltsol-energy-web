import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplace Terms of Service — VoltSol Energy',
  description: 'Terms of service governing the VoltSol Lead Marketplace for solar lead buyers and sellers.',
  robots: { index: false, follow: false },
};

export default function MarketplaceTermsPage() {
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

      <h1 className="text-3xl font-bold mb-2">VoltSol Lead Marketplace — Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 13, 2026 (DRAFT)</p>

      <section className="prose prose-gray max-w-none space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Parties and Acceptance</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern access to and use of the VoltSol Lead
            Marketplace (&quot;Marketplace&quot;), operated by VoltSol Energy, LLC (&quot;VoltSol,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By creating an account or purchasing a
            subscription or credit pack, you (&quot;Subscriber&quot; or &quot;you&quot;) agree to these
            Terms. If you are acting on behalf of a company, you represent that you have authority to bind
            that company.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Marketplace Description</h2>
          <p>
            The Marketplace connects homeowners in California who have expressed interest in solar
            energy products (&quot;Leads&quot;) with licensed solar installation contractors
            (&quot;Subscribers&quot;). VoltSol acts solely as a lead distribution platform and is not a
            party to any transaction between Subscribers and consumers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Lead Claims and Credits</h2>
          <p>
            Leads are distributed on a first-come, first-served basis using atomic database locking to
            prevent duplicate claims. Each Lead costs a specified number of &quot;Credits&quot; to claim,
            based on Lead quality tier (hot, standard, or low-priority). Credits are non-refundable except
            as described in Section 7 (Disputes).
          </p>
          <p className="mt-2">
            <strong>Owner Reserve Window:</strong> VoltSol Energy (as the platform owner) may hold newly
            captured Leads for up to fifteen (15) minutes before they are released to the Subscriber pool.
            This window is disclosed in the Marketplace interface.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Subscriptions and Billing</h2>
          <p>
            Subscriptions are billed monthly in advance through Stripe. Credits are granted at the start of
            each billing period and expire if unused at the end of that period. Credit packs are a one-time
            purchase and do not expire within twelve (12) months of purchase. All prices are in USD.
            VoltSol reserves the right to modify pricing with thirty (30) days&apos; notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Subscriber Obligations</h2>
          <p>Subscribers agree to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Maintain a valid contractor&apos;s license for solar installation in California (CSLB Class C-46 or equivalent).</li>
            <li>Contact Leads only in compliance with the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and all applicable state and federal laws.</li>
            <li>Not resell or redistribute Leads to any third party.</li>
            <li>Honor the Lead&apos;s consent scope — contacts are provided for solar-related outreach only.</li>
            <li>Respond to claimed Leads within forty-eight (48) hours.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Lead Quality and Exclusivity</h2>
          <p>
            Each Lead may be claimed by only one (1) Subscriber (exclusive). VoltSol makes reasonable efforts
            to verify Lead contact information but does not guarantee that any Lead will result in a sale.
            Lead quality scores (hot / standard / low-priority) are estimates based on self-reported consumer
            data and are provided for informational purposes only.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Disputes and Refunds</h2>
          <p>
            Subscribers may file a dispute for a claimed Lead within seven (7) days of claiming if the Lead
            is demonstrably invalid (e.g., disconnected phone number, invalid email, duplicate contact,
            address outside Subscriber&apos;s licensed service area). VoltSol will review disputes within five
            (5) business days. Approved disputes result in a Credit refund to the Subscriber&apos;s account.
            Disputes are capped at ten percent (10%) of total claims per rolling thirty (30)-day period.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Prohibited Conduct</h2>
          <p>Subscribers may not:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Reverse-engineer, scrape, or attempt to extract Lead data beyond purchased claims.</li>
            <li>Use purchased Lead data for purposes other than solar installation sales.</li>
            <li>Violate any consumer protection, telemarketing, or privacy law.</li>
            <li>Share account credentials or allow unauthorized access.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
          <p>
            Either party may terminate the subscription at any time. Upon termination, unused subscription
            Credits expire at the end of the current billing period. Pack Credits expire 90 days after
            account termination. VoltSol may immediately suspend accounts for violations of these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Disclaimer of Warranties</h2>
          <p>
            THE MARKETPLACE IS PROVIDED &quot;AS IS.&quot; VOLTSOL MAKES NO WARRANTIES, EXPRESS OR IMPLIED,
            INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            VOLTSOL DOES NOT GUARANTEE LEAD CONVERSION RATES OR BUSINESS OUTCOMES.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, VOLTSOL&apos;S TOTAL LIABILITY FOR ANY CLAIM ARISING
            FROM THESE TERMS OR THE MARKETPLACE SHALL NOT EXCEED THE AMOUNTS PAID BY SUBSCRIBER IN THE
            THREE (3) MONTHS PRECEDING THE CLAIM.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of California, without regard to conflict of
            law principles. Disputes shall be resolved in the state or federal courts located in Sacramento
            County, California.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Changes to Terms</h2>
          <p>
            VoltSol may update these Terms with thirty (30) days&apos; written notice via email. Continued
            use of the Marketplace after the effective date constitutes acceptance.
          </p>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p>VoltSol Energy, LLC — California</p>
        <p className="mt-1">
          Questions? Contact us at{' '}
          <a href="mailto:support@voltsolenergy.com" className="text-blue-600 underline">
            support@voltsolenergy.com
          </a>
        </p>
      </div>
    </div>
  );
}
