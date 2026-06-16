import type { Metadata } from "next";
import { Section, Container } from "@/components/ui";
import { Phone, MapPin, Mail, BadgeCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { getHomeConfig } from "@/lib/site-config";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDict(getLocale());
  return {
    title: `${t.contact_h1} — VoltSol Energy`,
    description: t.contact_intro,
    alternates: { canonical: "https://voltsolenergy.com/contact" },
  };
}

export default async function ContactPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const cfg = await getHomeConfig(locale);

  const phone = cfg.contact_phone;
  const address = cfg.contact_address;
  const email = cfg.contact_email;
  const legalLine = cfg.footer_legal_line;
  const phoneDigits = phone.replace(/\D/g, "");

  return (
    <Section className="hero-bg relative overflow-hidden py-12 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="solar-rays absolute inset-x-0 top-0 h-[320px]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t.contact_h1}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-200">{t.contact_intro}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-white">{t.contact_info_heading}</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">{t.contact_phone_label}</div>
                  <a href={`tel:${phoneDigits}`} className="text-white hover:text-gold">{phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">{t.contact_address_label}</div>
                  <span className="text-white">{address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">{t.contact_email_label}</div>
                  <a href={`mailto:${email}`} className="text-white hover:text-gold">{email}</a>
                </div>
              </li>
              {legalLine ? (
                <li className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">{t.contact_license_label}</div>
                    <span className="text-white">{legalLine}</span>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-navy-500/40 bg-navy-700/40 p-6 sm:p-8">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
