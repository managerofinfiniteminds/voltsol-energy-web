import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy — VoltSol Energy",
  description:
    "VoltSol Energy privacy policy. Learn how we collect, use, and protect your personal information under the California Consumer Privacy Act (CCPA).",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Effective date: June 1, 2026 &middot; Last updated: June 9, 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-300 leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-400">
          <p>
            VoltSol Energy, LLC (&ldquo;VoltSol,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website at voltsolenergy.com
            (the&nbsp;&ldquo;Site&rdquo;) and use our services. This policy is
            provided in accordance with the California Consumer Privacy Act
            (CCPA) and other applicable laws.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following categories of personal information:</p>
          <ul>
            <li>
              <strong>Contact information:</strong> first name, last name, email
              address, phone number.
            </li>
            <li>
              <strong>Property information:</strong> street address, city, state,
              ZIP code, home-ownership status.
            </li>
            <li>
              <strong>Energy usage data:</strong> approximate monthly electricity
              bill, estimated savings calculations you interact with on our Site.
            </li>
            <li>
              <strong>Communications:</strong> any notes or messages you provide
              through our quote request form, preferred contact time.
            </li>
            <li>
              <strong>Analytics and attribution data:</strong> page views,
              form-step progress, referral source (e.g., QR code, campaign
              link), UTM parameters, device type, session identifiers. We do not
              use third-party advertising trackers.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Provide you with a personalized solar energy estimate and follow up
              regarding your inquiry.
            </li>
            <li>
              Contact you about our products and services via phone, email, or
              text based on your preferred contact time.
            </li>
            <li>
              Improve our website, services, and marketing effectiveness through
              aggregated analytics.
            </li>
            <li>
              Comply with legal obligations and protect our rights.
            </li>
          </ul>

          <h2>3. We Do Not Sell Your Personal Information</h2>
          <p>
            VoltSol Energy does <strong>not</strong> sell, rent, or trade your
            personal information to third parties for monetary or other valuable
            consideration. We have not sold personal information in the preceding
            12&nbsp;months.
          </p>

          <h2>4. Information Sharing</h2>
          <p>
            We may share your personal information only in the following limited
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers:</strong> we use Resend for transactional
              email delivery and Neon for secure database hosting. These
              providers process data solely on our behalf.
            </li>
            <li>
              <strong>Legal requirements:</strong> we may disclose information
              when required by law, subpoena, or government request.
            </li>
          </ul>

          <h2>5. Your Rights Under the CCPA</h2>
          <p>
            If you are a California resident, you have the following rights
            regarding your personal information:
          </p>
          <ul>
            <li>
              <strong>Right to Know:</strong> you may request that we disclose
              the categories and specific pieces of personal information we have
              collected about you.
            </li>
            <li>
              <strong>Right to Delete:</strong> you may request that we delete
              the personal information we have collected from you, subject to
              certain exceptions.
            </li>
            <li>
              <strong>Right to Opt-Out of Sale:</strong> as stated above, we do
              not sell your personal information.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> we will not
              discriminate against you for exercising any of your CCPA rights.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@voltsolenergy.com">info@voltsolenergy.com</a>.
            We will respond to verifiable consumer requests within 45&nbsp;days.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required or permitted by law. You may request
            deletion at any time.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards to protect your personal information. However, no method
            of transmission over the Internet or electronic storage is 100%
            secure.
          </p>

          <h2>8. Children&rsquo;s Privacy</h2>
          <p>
            Our Site is not directed to individuals under 16 years of age. We do
            not knowingly collect personal information from children under 16.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the
            updated version on this page with a revised &ldquo;Last
            updated&rdquo; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your rights, please contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:info@voltsolenergy.com">info@voltsolenergy.com</a>
            </li>
            <li>VoltSol Energy, LLC &middot; Northern California</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
