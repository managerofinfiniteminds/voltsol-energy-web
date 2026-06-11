import {
  Section,
  Container,
  Button,
  Reveal,
  StatCounter,
} from "@/components/ui";
import { EnergyFlowDiagram } from "@/components/EnergyFlowDiagram";
import QuoteForm from "@/components/QuoteForm";
import SavingsEstimator from "@/components/SavingsEstimator";
import PageTracker from "@/components/PageTracker";
import Image from "next/image";
import {
  Shield,
  Zap,
  RefreshCw,
  Droplets,
  BadgeCheck,
  MapPin,
  Wrench,
  Phone,
  Star,
  Check,
  CalendarCheck,
} from "lucide-react";

const faqItems = [
  {
    q: "What does a system cost, and what's included?",
    a: "Under $10,000 all-in — solar panels, EG4 hybrid inverter, EG4 LiFePO4 battery, mini-split heat pump, and full installation. Your free estimate shows the exact number for your home.",
  },
  {
    q: "What's the difference between off-grid and grid-tie solar?",
    a: "Grid-tie solar feeds power back to PG&E and shuts off during blackouts — you stay dependent on the utility. Our systems are off-grid capable: the battery runs your home directly, so you can keep the grid as backup or cut it entirely.",
  },
  {
    q: "Do I need permits?",
    a: "Yes, and we handle them. Permitting and county paperwork are included in every install — you don't file a single form.",
  },
  {
    q: "How long do the batteries last?",
    a: "EG4 LiFePO4 batteries are rated for 8,000 cycles — roughly 20 years of daily use — and carry a 10-year manufacturer warranty.",
  },
  {
    q: "How long does installation take?",
    a: "Most installs are done in 1–2 days. From your free estimate to power-on is typically 2–4 weeks, depending on county permit turnaround.",
  },
  {
    q: "Do you offer financing?",
    a: "Because the whole system is under $10,000, most customers skip the $40k solar loan entirely. Financing options are available — ask Hugo during your free estimate.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <PageTracker />
      {/* ========== 1. HERO ========== */}
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
          {/* Dark gradient overlay — light enough to show the photo, dark enough at top for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />
          {/* Warm amber glow from the sun side */}
          <div className="absolute inset-0 bg-gradient-to-l from-amber-800/10 to-transparent" />
        </div>
        <Container className="relative">
          <Reveal immediate>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              The sun doesn&rsquo;t
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-gold bg-clip-text text-transparent">
                send a bill.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1} immediate>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
              How Northern California families are cutting the cord on PG&amp;E
              &mdash; for less than the cost of a used car.
            </p>
          </Reveal>

          <Reveal delay={0.2} immediate>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book" size="lg">
                Get My Free Estimate
              </Button>
              <Button href="#how" variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={0.3} immediate>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-blue-300 sm:text-sm lg:mt-20">
              <span>Licensed</span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              <span>Local</span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              <span>Off-Grid Capable</span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              <span>No Pressure</span>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Gradient separator: hero → social proof */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== 1a. SOCIAL PROOF BAR ========== */}
      <div className="bg-navy-800/60 py-6">
        <Container>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300/60">
            Built with technology from
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: Zap, label: "EG4 Electronics" },
              { icon: BadgeCheck, label: "UL Certified" },
              { icon: RefreshCw, label: "LiFePO4 Certified" },
              { icon: Droplets, label: "IP65 Rated" },
              { icon: Shield, label: "EMP-Hardened" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-blue-300"
              >
                <Icon className="h-4 w-4 text-gold/60" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* ========== 1b. STATS STRIP ========== */}
      <section className="solar-grid-texture border-y border-gold/15 bg-navy py-10 sm:py-12">
        <Container>
          <div className="mb-6 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <Zap className="h-4 w-4 text-gold/60" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <StatCounter value={8000} suffix="+" label="Battery Cycles" />
            <StatCounter value={10} suffix="-Year" label="Warranty" />
            <StatCounter value={10} prefix="Under $" suffix="K" label="System Cost" />
            <StatCounter value={25} suffix="+ Year" label="Panel Life" />
          </div>
        </Container>
      </section>

      {/* ========== 2. THE TRAP ========== */}
      <Section alt>
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Your power bill keeps climbing.{" "}
              <span className="text-blue-300">
                And &ldquo;normal solar&rdquo; ties you right back to the grid.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="h-full rounded-xl border-t-2 border-t-red-400/70 bg-navy-800/50 p-8">
                <h3 className="font-display text-lg font-bold text-red-400">
                  PG&amp;E Forever
                </h3>
                <ul className="mt-5 space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-400" aria-hidden="true">&times;</span>
                    Rates only go up
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-400" aria-hidden="true">&times;</span>
                    You pay even during blackouts
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-xl border-t-2 border-t-amber-400/70 bg-navy-800/50 p-8">
                <h3 className="font-display text-lg font-bold text-amber-400">
                  Typical Solar
                </h3>
                <ul className="mt-5 space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-400" aria-hidden="true">&times;</span>
                    $40k loan, still grid-tied
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-400" aria-hidden="true">&times;</span>
                    Still dark in a blackout
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="h-full rounded-xl border-t-2 border-t-gold bg-navy-800/50 p-8">
                <h3 className="font-display text-lg font-bold text-gold">
                  VoltSol Energy
                </h3>
                <ul className="mt-5 space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Under $10,000 &mdash; off-grid capable
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Power stays on in every blackout
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <p className="mt-12 text-center font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              What if you didn&rsquo;t need the grid{" "}
              <span className="text-gold">at all?</span>
            </p>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== 2b. THE CLOCK IS RUNNING (URGENCY) ========== */}
      <Section className="relative overflow-hidden border-y border-red-500/15">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber/5 blur-3xl" />
        </div>
        <Container className="relative">
          <Reveal>
            <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-gold/70">
              Why Now
            </p>
            <h2 className="text-center font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              The clock is <span className="text-red-400">running.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 text-center sm:grid-cols-3 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="h-full rounded-xl border-t-2 border-t-red-400/70 bg-navy-800/50 p-8">
                <p className="font-display text-5xl font-bold text-red-400 sm:text-6xl">
                  10.5%
                </p>
                <p className="mt-3 text-blue-300">
                  PG&amp;E rate hike &mdash; 2026
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-xl border-t-2 border-t-amber-400/70 bg-navy-800/50 p-8">
                <p className="font-display text-5xl font-bold text-amber-400 sm:text-6xl">
                  $24/mo
                </p>
                <p className="mt-3 text-blue-300">
                  Fixed charge that solar can&rsquo;t touch
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="h-full rounded-xl border-t-2 border-t-red-400/70 bg-navy-800/50 p-8">
                <p className="font-display text-5xl font-bold text-red-400 sm:text-6xl">
                  3<span className="text-3xl sm:text-4xl"> bankruptcies</span>
                </p>
                <p className="mt-3 text-blue-300">
                  SunPower &middot; Sunnova &middot; Freedom Forever &mdash; all gone
                </p>
              </div>
            </Reveal>
          </div>

          {/* Gold CTA band */}
          <Reveal delay={0.3}>
            <div className="mt-14 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-8 text-center lg:p-10">
              <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                Off-grid-capable solar.{" "}
                <span className="text-gold">Under $10,000.</span>
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/book" size="lg">
                  <CalendarCheck className="mr-2 h-5 w-5" aria-hidden="true" />
                  Book a Free Estimate
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== 3. HOW IT WORKS ========== */}
      <Section id="how">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Make it. Store it.{" "}
              <span className="text-gold">Live on it.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 lg:mt-16">
              <EnergyFlowDiagram />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "MAKE IT",
                desc: "Solar panels turn free sunlight into power.",
              },
              {
                step: "02",
                title: "STORE IT",
                desc: "EG4 battery banks it for night and blackouts.",
              },
              {
                step: "03",
                title: "LIVE ON IT",
                desc: "Your home runs on stored sun — heating and cooling included.",
              },
            ].map((item, i) => (
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
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== 4. THE TECHNOLOGY ========== */}
      <Section alt id="systems">
        <Container>
          <Reveal>
            <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-gold/70">
              The System
            </p>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Built on <span className="text-gold">EG4.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* EG4 Hybrid Inverter */}
            <Reveal delay={0.1}>
              <div className="tech-card flex flex-col rounded-xl border border-navy-500/30 border-t-2 border-t-blue-400/40 bg-navy-800/40 p-7">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white/95 p-4">
                  <Image
                    src="/images/eg4-flexboss18.webp"
                    alt="EG4 FlexBOSS18 hybrid inverter"
                    width={768}
                    height={768}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gold-400">
                  EG4 Hybrid Inverter
                </h3>
                <p className="mt-1 text-sm italic text-blue-300/80">
                  The brain of the system.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-blue-100">
                  <li>18 kW solar input</li>
                  <li>13 kW continuous output</li>
                  <li>10-year warranty</li>
                </ul>
              </div>
            </Reveal>

            {/* EG4 WallMount Battery */}
            <Reveal delay={0.2}>
              <div className="tech-card flex flex-col rounded-xl border border-navy-500/30 border-t-2 border-t-gold/40 bg-navy-800/40 p-7">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white/95 p-4">
                  <Image
                    src="/images/eg4-wallmount-battery.webp"
                    alt="EG4 WallMount lithium battery"
                    width={768}
                    height={768}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gold-400">
                  EG4 WallMount Battery
                </h3>
                <p className="mt-1 text-sm italic text-blue-300/80">
                  Store the sun.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-blue-100">
                  <li>8,000-cycle LiFePO4</li>
                  <li>14.3 kWh stackable</li>
                  <li>IP65 weatherproof</li>
                </ul>
              </div>
            </Reveal>

            {/* EG4 Mini-Split Heat Pump */}
            <Reveal delay={0.3}>
              <div className="tech-card flex flex-col rounded-xl border border-navy-500/30 border-t-2 border-t-blue-400/40 bg-navy-800/40 p-7 sm:col-span-2 lg:col-span-1">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/eg4-minisplit.svg"
                    alt="EG4 hybrid solar mini-split heat pump illustration"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gold-400">
                  EG4 Mini-Split Heat Pump
                </h3>
                <p className="mt-1 text-sm italic text-blue-300/80">
                  Comfort on sunlight.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-blue-100">
                  <li>Heats and cools</li>
                  <li>Hybrid solar AC/DC</li>
                  <li>Runs on stored sun</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ========== 4b. SERVICE AREA ========== */}
      <Section alt className="border-t border-blue-900/30">
        <Container className="text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold/70">
              Where We Work
            </p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="text-gold">Northern California</span>
            </h2>
            <p className="mt-4 text-lg text-blue-300">Hugo comes to you.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
              {[
                "Sacramento",
                "Stockton",
                "Fresno",
                "Modesto",
                "Elk Grove",
                "Roseville",
                "Folsom",
                "Tracy",
                "Manteca",
                "Turlock",
                "Visalia",
                "Lodi",
                "Woodland",
                "Chico",
                "Redding",
                "Yuba City",
                "Vacaville",
                "Fairfield",
              ].map((city) => (
                <li
                  key={city}
                  className="gradient-pill rounded-full px-4 py-1.5 text-sm font-medium text-blue-100"
                >
                  {city}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* ========== 5. THE NUMBER ========== */}
      <Section>
        <Container className="text-center">
          <Reveal>
            <p className="text-lg text-blue-300">
              Total system cost
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
              <span
                aria-hidden="true"
                className="hidden h-px w-16 bg-gradient-to-r from-transparent to-gold/50 sm:block lg:w-24"
              />
              <div className="number-glow">
                <span className="font-display text-5xl font-bold sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-gold to-amber bg-clip-text text-transparent">
                    Under{" "}
                  </span>
                </span>
                <StatCounter
                  value={10000}
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
                  $40,000+
                </p>
                <p className="mt-1 text-sm text-blue-300">
                  Traditional solar &mdash; loan, still grid-tied
                </p>
              </div>
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                <p className="font-display text-2xl font-bold text-gold">
                  Under $10,000
                </p>
                <p className="mt-1 text-sm text-blue-300">
                  VoltSol / EG4 &mdash; off-grid capable
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-10 max-w-xl text-lg text-blue-100">
              At $300/mo to PG&amp;E, most systems pay for themselves in under
              3 years.
            </p>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== 5a. TESTIMONIALS ========== */}
      <Section alt>
        <Container>
          <Reveal>
            <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-gold/70">
              What Customers Say
            </p>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Real homes. <span className="text-gold">Real numbers.</span>
            </h2>
          </Reveal>

          {/* PLACEHOLDER testimonials — replace with real customer quotes */}
          {/* Mobile: horizontal snap-scroll carousel; lg+: 3-column grid */}
          <div className="-mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0">
            {[
              {
                quote:
                  "Our PG&E bill went from $340 to almost nothing — and we kept the lights on during a 2-day blackout.",
                name: "Maria S.",
                city: "Redding",
              },
              {
                quote:
                  "SunPower quoted $38,000. Hugo did the whole thing for under ten grand.",
                name: "David R.",
                city: "Chico",
              },
              {
                quote:
                  "First summer with no AC bill. First winter with no gas bill.",
                name: "Carmen L.",
                city: "Grass Valley",
              },
            ].map((t, i) => (
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
        </Container>
      </Section>

      {/* ========== 5b. FAQ ========== */}
      <Section id="faq">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Straight <span className="text-gold">answers.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-4">
              {faqItems.map((item) => (
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
        </Container>
      </Section>

      {/* ========== 5c. SAVINGS ESTIMATOR ========== */}
      <SavingsEstimator />

      {/* ========== 6. MEET HUGO ========== */}
      <Section alt id="about">
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
                  Meet <span className="text-gold">Hugo</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blue-100">
                  Hugo designs and installs every VoltSol system personally.
                  When you call, he picks up.
                </p>

                {/* Credentials */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: BadgeCheck, label: "CSLB Licensed" },
                    { icon: MapPin, label: "Northern California Native" },
                    { icon: Wrench, label: "Every Install Done Personally" },
                    { icon: Phone, label: "Answers His Phone" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-navy-500/30 bg-gradient-to-br from-navy-700 to-navy-800 p-4"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                      <span className="text-sm font-medium text-blue-100">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ========== 7. LEAD CAPTURE ========== */}
      <Section id="quote">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Find out what your home{" "}
              <span className="text-gold">could save.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:p-8">
              <QuoteForm campaignCode="home" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center sm:p-8">
              <p className="font-display text-lg font-bold text-white">
                Pick a time that works for you.
              </p>
              <p className="mt-2 text-sm text-blue-300">
                Hugo can meet with you via Zoom call at your convenience &mdash; no pressure, no obligation.
              </p>
              <div className="mt-5 flex justify-center">
                <Button href="/book" variant="secondary">
                  <CalendarCheck className="mr-2 h-5 w-5" aria-hidden="true" />
                  Book a Time
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
