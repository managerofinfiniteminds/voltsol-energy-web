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
          Effective date: June 1, 2026 &middot; Last updated: June 14, 2026
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

          <h2>3. Lead Sharing and Sale of Personal Information</h2>
          <p>
            <strong>Important Disclosure:</strong> Your personal information,
            including your contact details, property address, energy usage data,
            and communications, may be shared with and resold to third-party
            business partners and vendors in the home services industry.
          </p>

          <h3 className="font-semibold text-slate-200 mt-4 mb-2">
            3.1 Sharing with Business Partners
          </h3>
          <p>
            We may share your personal information with carefully selected
            business partners who offer complementary or similar services to
            home owners, including but not limited to:
          </p>
          <ul>
            <li>Solar energy installation companies</li>
            <li>Roofing contractors and installation services</li>
            <li>HVAC (heating, ventilation, and air conditioning) providers</li>
            <li>Home energy audit services</li>
            <li>Home improvement and weatherization contractors</li>
            <li>Other energy efficiency service providers</li>
          </ul>
          <p className="mt-2">
            These partners use your information to contact you with offers for
            services that may be of interest to you based on your energy profile
            and property information.
          </p>

          <h3 className="font-semibold text-slate-200 mt-4 mb-2">
            3.2 Sale of Lead Data
          </h3>
          <p>
            We also sell consumer leads (including your personal information) as
            a product to third-party vendors and lead aggregators in the home
            services space. These vendors are in the business of connecting
            homeowners with service providers for solar, roofing, HVAC, energy
            solutions, and related home services. By providing your information
            through our Site, you consent to the sale and resale of your
            personal information for this purpose.
          </p>

          <h3 className="font-semibold text-slate-200 mt-4 mb-2">
            3.3 Your Information May Be Used by Recipients
          </h3>
          <p>
            Once your personal information is shared with or sold to third
            parties, those parties may use, store, and further share or resell
            your information in accordance with their own privacy policies and
            applicable law. VoltSol Energy is not responsible for the privacy
            practices of third-party recipients of your information.
          </p>

          <h2>4. Additional Information Sharing</h2>
          <p>
            In addition to lead sharing and sale, we may share your personal
            information in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers:</strong> we use Resend for transactional
              email delivery and Neon for secure database hosting. These
              providers process data solely on our behalf under data processing
              agreements.
            </li>
            <li>
              <strong>Legal requirements:</strong> we may disclose information
              when required by law, subpoena, government request, or other legal
              process.
            </li>
            <li>
              <strong>Business transfers:</strong> in the event of a merger,
              acquisition, bankruptcy, or sale of assets, your information may
              be transferred as part of that transaction.
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
              collected about you, including confirmation of what information
              has been shared with or sold to third parties.
            </li>
            <li>
              <strong>Right to Delete:</strong> you may request that we delete
              the personal information we have collected from you, subject to
              certain exceptions (such as information needed to complete
              transactions or comply with legal obligations). Note that deletion
              requests may not reach third parties who have already received your
              information.
            </li>
            <li>
              <strong>Right to Opt-Out of Sale:</strong> you have the right to
              direct us not to sell or share your personal information. If you
              wish to opt out of the sale of your personal information, please
              submit your request by contacting us at{" "}
              <a href="mailto:info@voltsolenergy.com">info@voltsolenergy.com</a>{" "}
              with your contact details. We will honor opt-out requests within
              45&nbsp;days. However, please note that opting out of sale may
              limit our ability to provide certain services or offers.
            </li>
            <li>
              <strong>Right to Opt-Out of Sharing for Cross-Context Behavioral
              Advertising:</strong> while we do not engage in cross-context
              behavioral advertising, you have the right to request we do not
              share your information for this purpose.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> we will not
              discriminate against you for exercising any of your CCPA rights,
              including by denying you services, charging different prices, or
              providing different levels of service quality. However, we may
              offer financial incentives for data collection or sale that are
              reasonably related to the value of your data.
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
            fulfill the purposes outlined in this policy, including lead sharing
            and sale, unless a longer retention period is required or permitted
            by law. You may request deletion at any time by submitting a request
            to&nbsp;<a href="mailto:info@voltsolenergy.com">
              info@voltsolenergy.com
            </a>
            .
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards to protect your personal information against unauthorized
            access, alteration, and destruction. However, no method of
            transmission over the Internet or electronic storage is 100%
            secure. We cannot guarantee absolute security of your information.
          </p>

          <h2>8. Children&rsquo;s Privacy</h2>
          <p>
            Our Site is not directed to individuals under 16 years of age. We do
            not knowingly collect personal information from children under 16.
            If we become aware that we have collected information from a child
            under 16, we will take steps to delete such information promptly.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes
            will be noted, and we will post the updated version on this page with
            a revised &ldquo;Last updated&rdquo; date. If we make significant
            changes to how we use or share your personal information, we will
            provide notice through email or a prominent notice on our Site.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, wish to exercise
            your CCPA rights, or want to opt out of the sale or sharing of your
            personal information, please contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:info@voltsolenergy.com">info@voltsolenergy.com</a>
            </li>
            <li>VoltSol Energy, LLC</li>
          </ul>

          <p className="mt-8 text-xs text-slate-500 border-t border-slate-700 pt-6">
            This Privacy Policy is effective as of June 1, 2026, and was last
            updated on June 14, 2026. By accessing and using voltsolenergy.com,
            you acknowledge that you have read and understood this Privacy Policy
            and agree to its terms, including the disclosure of personal
            information sharing and sale practices.
          </p>
        </div>
      </Container>
    </section>
  );
}
