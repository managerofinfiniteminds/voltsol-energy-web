export const dynamic = 'force-dynamic';

import {
  Section,
  Container,
  Button,
  Reveal,
  StatCounter,
} from "@/components/ui";
import { EnergyFlowDiagram } from "@/components/EnergyFlowDiagram";
import { getHomeConfig } from "@/lib/site-config";
import InlineEstimateEntry from "@/components/InlineEstimateEntry";
import PageTracker from "@/components/PageTracker";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  MapPin,
  Wrench,
  Phone,
  Star,
  Check,
  Zap,
} from "lucide-react";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VoltSol Energy",
  description:
    "Off-grid solar installations for Northern California homes — EG4 battery, inverter, and mini-split systems under $10,000.",
  url: "https://voltsolenergy.com",
  email: "info@voltsolenergy.com",
  image: "https://voltsolenergy.com/og-image.png",
  priceRange: "Under $10,000",
  areaServed: {
    "@type": "Place",
    name: "Northern California",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  knowsAbout: ["off-grid solar", "solar battery storage", "EG4 solar systems"],
};

// Fixed icon array for Hugo's credentials (order matches ARRAY_DEFAULTS)
const credentialIcons = [BadgeCheck, MapPin, Wrench, Phone];

export default async function HomePage() {
  const cfg = await getHomeConfig();

  // Build FAQ JSON-LD from config
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cfg.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PageTracker />
      <ScrollDepthTracker />

      {/* ========== SECTION 1: HERO ========== */}
      <Section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
        {/* Hero background image */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-sunset.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-l from-amber-800/10 to-transparent" />
        </div>
        <Container className="relative">
          {/* immediate prop ensures opacity:1 base - no invisible hero trap */}
          <Reveal immediate>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              {cfg.hero_headline_line1}
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-gold bg-clip-text text-transparent">
                {cfg.hero_headline_line2}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1} immediate>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
              {cfg.hero_subhead}
            </p>
          </Reveal>

          <Reveal delay={0.2} immediate>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/start" size="lg" trackLocation="hero">
                {cfg.cta_button_text}
              </Button>
              <a
                href="#how"
                className="inline-flex items-center justify-center text-sm font-medium text-slate-300 transition-colors hover:text-white py-3"
              >
                &darr; {cfg.hero_cta_secondary}
              </a>
            </div>
          </Reveal>

          {/* Trust strip merged beneath hero */}
          <Reveal delay={0.3} immediate>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-blue-300 sm:text-sm lg:mt-20">
              {cfg.hero_trust.map((badge, i) => (
                <span key={badge} className="flex items-center gap-6">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/70 -ml-6" />
                  )}
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </Reveal>

          {/* 2027 Tax Deadline Banner */}
          <Reveal delay={0.4} immediate>
            <div className="mt-10 rounded-lg bg-gradient-to-r from-amber-900/40 to-gold/10 border border-gold/30 px-6 py-4 sm:px-8 sm:py-5">
              <p className="text-center text-sm font-medium text-gold sm:text-base">
                <strong>{cfg.hero_tax_banner_label}</strong>{cfg.hero_tax_banner_body}<a href={cfg.hero_tax_banner_link_url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-amber-300">{cfg.hero_tax_banner_link_text}</a>.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== SECTION 2: THE NUMBER (price early) + STATS ========== */}
      <Section>
        <Container className="text-center">
          <Reveal immediate>
            <p className="text-lg text-blue-300">{cfg.number_section_label}</p>
          </Reveal>

          <Reveal delay={0.1} immediate>
            <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
              <span
                aria-hidden="true"
                className="hidden h-px w-16 bg-gradient-to-r from-transparent to-gold/50 sm:block lg:w-24"
              />
              <div className="number-glow">
                <span className="font-display text-5xl font-bold sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-gold to-amber bg-clip-text text-transparent">
                    {cfg.number_headline_prefix}{" "}
                  </span>
                </span>
                <StatCounter
                  value={Number(cfg.number_headline_value) || 10000}
                  prefix="$"
                  label=""
                  className="inline-block"
                />
                <span className="font-display text-5xl font-bold text-gold sm:text-6xl lg:text-7xl">
                  .
                </span>
              </div>
              <span
                aria-hidden="true"
                className="hidden h-px w-16 bg-gradient-to-l from-transparent to-gold/50 sm:block lg:w-24"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-6">
                <p className="font-display text-2xl font-bold text-red-400">
                  {cfg.compare_bad_amount}
                </p>
                <p className="mt-1 text-sm text-blue-300">
                  {cfg.compare_bad_caption}
                </p>
              </div>
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                <p className="font-display text-2xl font-bold text-gold">
                  {cfg.compare_good_amount}
                </p>
                <p className="mt-1 text-sm text-blue-300">
                  {cfg.compare_good_caption}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats merged in */}
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{cfg.stat_1_value}</p>
                <p className="mt-1 text-sm text-blue-300">{cfg.stat_1_label}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{cfg.stat_2_value}</p>
                <p className="mt-1 text-sm text-blue-300">{cfg.stat_2_label}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{cfg.stat_3_value}</p>
                <p className="mt-1 text-sm text-blue-300">{cfg.stat_3_label}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{cfg.stat_4_value}</p>
                <p className="mt-1 text-sm text-blue-300">{cfg.stat_4_label}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mx-auto mt-10 max-w-xl text-lg text-blue-100">
              {cfg.number_payback_line}
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/start" size="lg" trackLocation="stats">
                {cfg.cta_button_text}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== SECTION 3: HOW IT WORKS ========== */}
      <Section alt id="how">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {cfg.how_headline_pre}
              <span className="text-gold">{cfg.how_headline_gold}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 lg:mt-16">
              <EnergyFlowDiagram />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {cfg.how_steps.map((item, i) => (
              <Reveal key={item.step} delay={0.1 * (i + 1)}>
                <div className="text-center">
                  <span className="font-display text-sm font-bold text-gold">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-blue-300">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 flex justify-center">
              <Button href="/start" size="lg" trackLocation="how_it_works">
                {cfg.cta_button_text}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== SECTION 4: INLINE ESTIMATE ENTRY (EstimateFlow Step 0) ========== */}
      <Section className="solar-grid-texture border-y border-gold/15">
        <Container className="mx-auto max-w-2xl text-center">
          <Reveal immediate>
            <div className="mb-6 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
              <Zap className="h-5 w-5 text-gold" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              {cfg.estimate_headline_pre}<span className="text-gold">{cfg.estimate_headline_gold}</span>{cfg.estimate_headline_post}
            </h2>
            <p className="mt-3 text-blue-300">
              {cfg.estimate_subtext}
            </p>
          </Reveal>

          <Reveal delay={0.1} immediate>
            <div className="mt-8">
              <InlineEstimateEntry />
            </div>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== SECTION 5: PROOF (Testimonials) ========== */}
      <Section alt>
        <Container>
          <Reveal>
            <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-gold/70">
              {cfg.proof_eyebrow}
            </p>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {cfg.proof_headline_pre}<span className="text-gold">{cfg.proof_headline_gold}</span>
            </h2>
          </Reveal>

          <div className="-mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0">
            {cfg.testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={0.1 * (i + 1)}
                className="w-[85%] shrink-0 snap-center sm:w-[60%] lg:w-auto"
              >
                <figure className="flex h-full flex-col rounded-xl border-t-2 border-t-gold/60 bg-navy-800/50 p-8">
                  <div
                    className="flex gap-1 text-gold"
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-blue-100">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 font-display font-bold text-white">
                    {t.name}{" "}
                    <span className="font-sans text-sm font-normal text-blue-300">
                      &mdash; {t.city}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 flex justify-center">
              <Button href="/start" size="lg" trackLocation="proof">
                {cfg.cta_button_text}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== SECTION 6: MEET HUGO + CSLB (condensed) ========== */}
      <Section id="about">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <div className="mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-navy-500/40">
                  <Image
                    src="/images/hugo-portrait.jpg"
                    alt="Hugo, VoltSol Energy founder and installer"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                  {cfg.about_headline_pre}<span className="text-gold">{cfg.about_headline_gold}</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blue-100">
                  {cfg.about_body}
                </p>

                {/* Credentials */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {cfg.about_credentials.map((label, i) => {
                    const Icon = credentialIcons[i] || BadgeCheck;
                    return (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-xl border border-navy-500/30 bg-gradient-to-br from-navy-700 to-navy-800 p-4"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                        <span className="text-sm font-medium text-blue-100">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Equipment link (replaces tech section) */}
                <div className="mt-8">
                  <Link
                    href="#systems"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-400"
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                    {cfg.about_equipment_link}
                  </Link>
                </div>

                <div className="mt-8">
                  <Button href="/start" size="lg" trackLocation="about">
                    {cfg.cta_button_text}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== SECTION 7: BOTTOM CTA + FAQ ========== */}
      <Section alt id="faq">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {cfg.faq_headline_pre}<span className="text-gold">{cfg.faq_headline_gold}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-4">
              {cfg.faqs.map((item) => (
                <details
                  key={item.q}
                  className="faq-item group rounded-xl border border-navy-500/30 bg-navy-800"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-bold text-white sm:p-6 [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="faq-arrow shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 6l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-content">
                    <p className="px-5 pb-5 leading-relaxed text-blue-100 sm:px-6 sm:pb-6">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>

          {/* Final CTA */}
          <Reveal delay={0.2}>
            <div className="mt-14 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-8 text-center lg:p-10">
              <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                {cfg.final_cta_headline}
              </p>
              <p className="mt-3 text-blue-300">
                {cfg.final_cta_subtext}
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/start" size="lg" trackLocation="bottom">
                  {cfg.cta_button_text}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Hidden anchor for equipment link (minimal section) */}
      <div id="systems" className="sr-only">EG4 Equipment Section</div>
    </>
  );
}
