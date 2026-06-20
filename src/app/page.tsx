export const dynamic = 'force-dynamic';

import {
  Section,
  Container,
  Button,
  Reveal,
} from "@/components/ui";
import { getHomeConfig } from "@/lib/site-config";
import { getLocale } from "@/lib/locale";
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
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDict(getLocale());
  return {
    title: t.meta_home_title,
    description: t.meta_home_desc,
  };
}

// Build LocalBusiness JSON-LD, including Review + aggregateRating from testimonials.
function buildLocalBusinessJsonLd(testimonials: { quote: string; name: string; city: string }[]) {
  const reviews = testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "VoltSol Energy",
    description:
      "Residential solar + battery storage for your home - make your own power, store it, and use it. EG4 battery and inverter systems from $8,700.",
    url: "https://voltsolenergy.com",
    email: "info@voltsolenergy.com",
    telephone: "+1-530-228-1019",
    image: "https://voltsolenergy.com/og-image.png",
    priceRange: "$8,700-$16,000",
    areaServed: {
      "@type": "State",
      name: "California",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    knowsAbout: ["residential solar", "solar battery storage", "solar self-consumption", "solar battery backup", "EG4 solar systems"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "California Contractors State License Board (CSLB) License",
      identifier: "1148585",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "California Contractors State License Board",
      },
    },
    ...(reviews.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(reviews.length),
            bestRating: "5",
          },
          review: reviews,
        }
      : {}),
  };
}

// Fixed icon array for Hugo's credentials (order matches ARRAY_DEFAULTS)
const credentialIcons = [BadgeCheck, MapPin, Wrench, Phone];

export default async function HomePage() {
  const locale = getLocale();
  const cfg = await getHomeConfig(locale);

  const localBusinessJsonLd = buildLocalBusinessJsonLd(cfg.testimonials);

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
            src="/images/hero-blackout-glow.jpg"
            alt="A single home glowing with light during a neighborhood blackout — powered by a VoltSol residential solar and battery storage system while the rest of the street sits dark"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Night-shot overlay: darken top for headline legibility, let the glowing house breathe through the middle/right */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/35 to-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
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
              <Button href="/start" size="lg" trackLocation="hero" className="hidden sm:inline-flex">
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
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wider text-blue-300 sm:text-sm lg:mt-20">
              {cfg.hero_trust.map((badge, i) => (
                <span key={badge} className="flex items-center gap-x-4">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 rounded-full bg-gold/60"
                    />
                  )}
                  <span className="whitespace-nowrap">{badge}</span>
                </span>
              ))}
            </div>
          </Reveal>

        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== SECTION 2.5: WHY NOW — THE EXPORT TRAP (make it, store it, use it) ========== */}
      <Section className="relative overflow-hidden">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                  Why now
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
                  Stop giving your power away{" "}
                  <span className="text-gold">for pennies</span>.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
                  The rules changed. Under California&rsquo;s current net-billing
                  rules, many homeowners now get credited only a{" "}
                  <strong className="text-white">small fraction</strong> of the
                  retail price for the solar power they send to the grid &mdash;
                  yet pay full retail to buy electricity back. Exporting your
                  power has quietly become a bad deal.
                </p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-blue-100">
                  So the smart move is simple:{" "}
                  <strong className="text-white">make it, store it, and use it
                  yourself</strong> &mdash; keep the power you make instead of
                  handing it to the utility. A solar-plus-battery system does
                  exactly that. That&rsquo;s what VoltSol builds.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button href="/start" size="lg" trackLocation="export_trap_band">
                    {cfg.cta_button_text}
                  </Button>
                  <Link
                    href="/technology"
                    className="inline-flex items-center justify-center text-sm font-medium text-slate-300 transition-colors hover:text-white py-3"
                  >
                    Why keeping your power wins &rarr;
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-navy-500/40 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
                <Image
                  src="/images/make-store-use-grid.png"
                  alt="Two paths for home solar: sending power to the grid earns only a fraction of retail value, while keeping it — make it, store it, use it — lets you use the full value of the power you produce"
                  width={1376}
                  height={768}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </Reveal>
          </div>
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
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-blue-200">
              Ordinary solar sends power on a long round-trip through the grid.
              Ours sends sunlight straight into your heating and cooling &mdash;
              free all day, and still running in a blackout.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 lg:mt-16">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-navy-500/40 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
                <Image
                  src="/images/how-it-works-system.jpg"
                  alt="Complete solar, battery storage, and mini-split heating and cooling system: rooftop solar charges battery storage, which powers the outdoor condenser and zoned indoor air handlers across the living room, home office, and guest room."
                  width={1376}
                  height={768}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
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
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/start" size="lg" trackLocation="how_it_works">
                {cfg.cta_button_text}
              </Button>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-400"
              >
                See how the technology works &rarr;
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ========== SECTION 4.5: FREEDOM PAYOFF (daytime bookend) ========== */}
      <section className="relative h-[60vh] min-h-[380px] w-full overflow-hidden">
        <Image
          src="/images/freedom-daytime.jpg"
          alt="A modern California home running entirely on its own solar and battery power on a bright sunny day — rooftop panels, wall-mounted battery, and an EV charging in the driveway while the family enjoys the yard"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/50" />
        <Container className="relative flex h-full flex-col items-start justify-end pb-12">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
              Your own power plant.
              <br />
              <span className="text-gold">Sun up to sun down, and after.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-blue-100">
              Make it on the roof. Store it in the battery. Live on it day and
              night &mdash; whether or not the grid is up.
            </p>
          </Reveal>
        </Container>
      </section>

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

      {/* ========== SECTION 2: PRICING TIERS ========== */}
      <Section id="pricing">
        <Container>
          <Reveal immediate>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {cfg.tiers_headline_pre}
              <span className="text-gold">{cfg.tiers_headline_gold}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-blue-200">
              {cfg.tiers_subhead}
            </p>
          </Reveal>

          {/* Pricing Tier Cards */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {cfg.pricing_tiers.map((tier, i) => {
                const isPopular = tier.popular;
                const trackId = `tier_${tier.name.toLowerCase().replace(/\s+/g, '_')}`;
                return (
                  <div
                    key={tier.name}
                    className={`relative flex w-full flex-col rounded-2xl border p-6 transition-transform sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] lg:max-w-[360px] ${
                      isPopular
                        ? 'border-gold bg-gradient-to-b from-gold/10 to-navy-800 ring-1 ring-gold/40 lg:scale-105 lg:-my-2 lg:py-8 shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                        : 'border-navy-500/40 bg-navy-800/60'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                          {cfg.tiers_popular_label}
                        </span>
                      </div>
                    )}

                    {/* Icon & Name */}
                    <div className="text-center">
                      <span className="text-4xl" role="img" aria-label={tier.name}>
                        {tier.icon}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-white">
                        {tier.name}
                      </h3>
                      <p className="mt-1 text-sm text-blue-300">{tier.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mt-5 text-center">
                      <p className={`font-display text-2xl font-bold ${isPopular ? 'text-gold' : 'text-gold/90'}`}>
                        {tier.price}
                      </p>
                      <p className="mt-1 text-xs text-blue-400">{tier.system}</p>
                    </div>

                    {/* Coverage & Panels */}
                    <div className="mt-4 flex justify-center gap-4 text-xs">
                      <span className="rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-blue-200">
                        {tier.coverage}
                      </span>
                      <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-gold">
                        {tier.panels}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="mt-5 flex-1 space-y-2">
                      {tier.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-blue-100">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-6">
                      <Button
                        href="/start"
                        size="sm"
                        variant={isPopular ? 'primary' : 'secondary'}
                        trackLocation={trackId}
                        className="w-full"
                      >
                        {cfg.cta_button_text}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Disclaimer */}
          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-blue-300/80">
              {cfg.tiers_disclaimer}
            </p>
          </Reveal>

          {/* Glossary */}
          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 max-w-3xl">
              <details className="group rounded-xl border border-navy-500/30 bg-navy-800/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-bold text-white sm:p-6 [&::-webkit-details-marker]:hidden">
                  {cfg.tiers_glossary_label}
                  <span
                    className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                <div className="border-t border-navy-500/30 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <dl className="space-y-4">
                    {cfg.tiers_glossary.map((item) => (
                      <div key={item.term}>
                        <dt className="font-display font-bold text-gold">{item.term}</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-blue-100">
                          {item.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </details>
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
                    href="/technology"
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
              <InlineEstimateEntry locale={locale} />
            </div>
          </Reveal>
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

          {/* Learn More Link */}
          <Reveal delay={0.15}>
            <div className="mt-8 text-center">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold/80"
              >
                <Zap className="h-4 w-4" /> Want to learn more? Read our guides on residential solar, battery storage, EG4 equipment, and energy independence →
              </Link>
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
