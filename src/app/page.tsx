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
  Award,
  BadgeCheck,
  MapPin,
  Wrench,
  Phone,
  Star,
  Check,
  TrendingUp,
  Lock,
  AlertTriangle,
  CalendarCheck,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <PageTracker />
      {/* ========== 1. HERO ========== */}
      <Section className="hero-bg relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
        {/* Decorative layer: solar rays + rings */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="solar-rays absolute inset-x-0 top-0 h-[480px]" />
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full border border-blue-400/10" />
          <div className="absolute -right-40 -top-24 h-[480px] w-[480px] rounded-full border-2 border-blue-500/10" />
          <div className="absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-blue-700/5 blur-3xl" />
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

          {/* Pull quote */}
          <Reveal delay={0.3} immediate>
            <div className="mx-auto mt-12 max-w-3xl text-center lg:mt-16">
              <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
                The average Northern California home pays $247/mo to PG&amp;E.
              </p>
              <p className="mt-4 font-display text-xl font-bold text-gold sm:text-2xl">
                Ours pay nothing.
              </p>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={0.4} immediate>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-blue-300 sm:text-sm">
              <span>Licensed</span>
              <span aria-hidden="true" className="text-gold/40">&middot;</span>
              <span>Local</span>
              <span aria-hidden="true" className="text-gold/40">&middot;</span>
              <span>Off-Grid Capable</span>
              <span aria-hidden="true" className="text-gold/40">&middot;</span>
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

          <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-6 lg:p-8">
                <h3 className="font-display text-lg font-bold text-red-400">
                  PG&amp;E Forever
                </h3>
                <ul className="mt-4 space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-400" aria-hidden="true">&times;</span>
                    Rates only go up &mdash; year after year
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-400" aria-hidden="true">&times;</span>
                    Blackouts aren&rsquo;t your choice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-400" aria-hidden="true">&times;</span>
                    You pay even when the power goes out
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-xl border border-amber/20 bg-amber/5 p-6 lg:p-8">
                <h3 className="font-display text-lg font-bold text-amber-400">
                  Typical Solar
                </h3>
                <ul className="mt-4 space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-400" aria-hidden="true">&times;</span>
                    $40k loan before you flip a switch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-400" aria-hidden="true">&times;</span>
                    Still grid-tied &mdash; still at PG&amp;E&rsquo;s mercy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-400" aria-hidden="true">&times;</span>
                    Still dark in a blackout
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-xl border border-gold/40 bg-gold/5 p-6 lg:p-8">
                <h3 className="font-display text-lg font-bold text-gold">
                  VoltSol Energy
                </h3>
                <ul className="mt-4 space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Under $10,000 total
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Off-grid capable &mdash; truly independent
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Power stays on in every blackout
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    Hugo answers the phone
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
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-red-400">
              The Clock Is Running
            </p>
            <h2 className="mt-4 text-center font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              PG&amp;E raised rates 10.5% this year.{" "}
              <span className="text-red-400">Again.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-blue-300">
              Grid-tied solar is broken in California. Off-grid isn&rsquo;t.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-xl border border-red-500/25 bg-red-950/20 p-6 lg:p-8">
                <TrendingUp className="h-6 w-6 text-red-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-red-400">
                  Rate Hike &mdash; 2026
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-blue-100">
                  PG&amp;E&rsquo;s baseline rate jumped 10.5% this year &mdash;
                  from $0.38 to $0.42/kWh. The decade trend: up roughly 80%
                  since 2015. There is no sign of it stopping.
                </p>
                <p className="mt-4 text-xs text-blue-300/60">
                  Source: CPUC rate filings, 2026
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex h-full flex-col rounded-xl border border-amber/30 bg-amber/5 p-6 lg:p-8">
                <Lock className="h-6 w-6 text-amber-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-amber-400">
                  The $24 Trap
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-blue-100">
                  PG&amp;E&rsquo;s new fixed Base Charge (~$24/month) can&rsquo;t
                  be offset &mdash; not with solar panels, not with batteries,
                  not with efficiency. It&rsquo;s permanent, and it ratchets up
                  with every rate case.
                </p>
                <p className="mt-4 text-xs text-blue-300/60">
                  Source: CPUC Decision, 2024
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex h-full flex-col rounded-xl border border-red-500/25 bg-red-950/20 p-6 lg:p-8">
                <AlertTriangle className="h-6 w-6 text-red-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-red-400">
                  Grid Solar Died
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-blue-100">
                  NEM 3.0 cut grid-tied solar export credits by ~75% &mdash;
                  payback periods ballooned from 6 years to 12&ndash;15.
                  SunPower, Sunnova, and Freedom Forever have all filed for
                  bankruptcy since.
                </p>
                <p className="mt-4 text-xs text-blue-300/60">
                  Source: CPUC Decision 22-12-056; public bankruptcy filings
                </p>
              </div>
            </Reveal>
          </div>

          {/* Gold CTA band */}
          <Reveal delay={0.3}>
            <div className="mt-12 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-8 text-center lg:p-10">
              <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                The only solar that&rsquo;s truly immune:{" "}
                <span className="text-gold">off-grid capable.</span>
              </p>
              <p className="mt-3 text-lg text-blue-100">
                No export credits needed. No Base Charge owed. The 30% federal
                tax credit is still on the table in 2026 &mdash; and VoltSol
                installs it for under $10,000.
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
                desc: "Inverter + mini-split heat pump run your home — heating and cooling included — on stored sun.",
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
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Built on EG4 &mdash;{" "}
              <span className="text-gold">
                one system, one installer, one call.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* EG4 Hybrid Inverter */}
            <Reveal delay={0.1}>
              <div className="tech-card flex flex-col rounded-xl border border-navy-500/30 border-t-2 border-t-blue-400/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white/95 p-4">
                  <Image
                    src="/images/eg4-flexboss18.webp"
                    alt="EG4 FlexBOSS18 hybrid inverter"
                    width={768}
                    height={768}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-gold-400">
                  EG4 Hybrid Inverter
                </h3>
                <p className="mt-1 text-sm text-blue-300">
                  FlexBOSS18 &mdash; the brain of the system.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-blue-100">
                  <li>13kW continuous, up to 18kW solar input</li>
                  <li>10kW battery output</li>
                  <li>EMP-hardened, 10-year warranty</li>
                  <li>Phone monitoring via EG4 Connect</li>
                </ul>
              </div>
            </Reveal>

            {/* EG4 WallMount Battery */}
            <Reveal delay={0.2}>
              <div className="tech-card flex flex-col rounded-xl border border-navy-500/30 border-t-2 border-t-gold/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white/95 p-4">
                  <Image
                    src="/images/eg4-wallmount-battery.webp"
                    alt="EG4 WallMount lithium battery"
                    width={768}
                    height={768}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-gold-400">
                  EG4 WallMount Battery
                </h3>
                <p className="mt-1 text-sm text-blue-300">
                  Store the sun.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-blue-100">
                  <li>14.3 kWh stackable LiFePO4</li>
                  <li>IP65 weatherproof (indoor/outdoor)</li>
                  <li>8,000-cycle life</li>
                  <li>10kW power output</li>
                </ul>
              </div>
            </Reveal>

            {/* EG4 Mini-Split Heat Pump */}
            <Reveal delay={0.3}>
              <div className="tech-card flex flex-col rounded-xl border border-navy-500/30 border-t-2 border-t-blue-400/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:col-span-2 lg:col-span-1">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/eg4-minisplit.svg"
                    alt="EG4 hybrid solar mini-split heat pump illustration"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-gold-400">
                  EG4 Mini-Split Heat Pump
                </h3>
                <p className="mt-1 text-sm text-blue-300">
                  Comfort on sunlight.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-blue-100">
                  <li>Heats AND cools</li>
                  <li>Hybrid solar AC/DC operation</li>
                  <li>Ultra-efficient inverter compressor</li>
                  <li>Biggest energy hog &mdash; now runs on stored sun</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Proof badges */}
          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {[
                { icon: Zap, label: "Off-Grid Capable" },
                { icon: Shield, label: "EMP-Hardened" },
                { icon: RefreshCw, label: "8,000+ Cycles" },
                { icon: Droplets, label: "IP65 Weatherproof" },
                { icon: Award, label: "10-Year Warranty" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-blue-300"
                >
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ========== 4b. SERVICE AREA ========== */}
      <Section alt className="border-t border-blue-900/30">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Serving <span className="text-gold">Northern California</span>
            </h2>
            <p className="mt-4 text-lg text-blue-300">
              Local installer. No middlemen. Hugo comes to you.
            </p>
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
            <p className="mx-auto mt-8 max-w-xl text-lg text-blue-100">
              At ~$300/mo to PG&amp;E, it can pay for itself in about 3 years
              &mdash; then the power&rsquo;s free for decades.
            </p>
            <p className="mt-4 text-xs text-blue-300/60">
              Typical system. Final pricing confirmed in your free estimate.
            </p>
          </Reveal>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
      />

      {/* ========== 5a. TESTIMONIALS ========== */}
      <Section alt className="relative overflow-hidden">
        {/* Decorative giant quotation mark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-4 select-none font-display text-[16rem] leading-none text-gold/5 sm:text-[24rem]"
        >
          &ldquo;
        </span>
        <Container className="relative">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Real homes. <span className="text-gold">Real numbers.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                quote:
                  "Our PG&E bill went from $340 a month to almost nothing. But what sold us was the battery — we had a 2-day outage last winter and our house never lost power. Neighbors were in the dark. We were watching Netflix.",
                name: "Maria S.",
                city: "Sacramento",
              },
              {
                quote:
                  "I got a quote from SunPower for $38,000. Hugo came out, assessed our place, and said he could do the whole thing for under ten thousand. I thought he was joking. He wasn't. Best decision we've made for this house.",
                name: "David R.",
                city: "Fresno",
              },
              {
                quote:
                  "I didn't even know the mini-split heat pump was part of it. Hugo explained that heating and cooling is where most people's electricity goes, so he includes it in the system. First summer with no AC bill. First winter with no gas bill. I tell everyone.",
                name: "Carmen L.",
                city: "Stockton",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={0.1 * (i + 1)}>
                <figure className="flex h-full flex-col rounded-xl border border-navy-500/30 bg-gradient-to-br from-navy-700 to-navy-800 p-6 lg:p-8">
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
                  <span
                    className="mt-4 font-display text-5xl leading-none text-gold"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 leading-relaxed text-blue-100">
                    {t.quote}
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
      <Section>
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Straight <span className="text-gold">answers.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-4">
              {[
                {
                  q: "Is $10,000 really an all-in price?",
                  a: "Yes. It includes Tier-1 solar panels, EG4 battery bank, FlexBOSS18 hybrid inverter, EG4 mini-split heat pump, and full installation. Final price depends on your home — get a free estimate and we'll show you the exact number.",
                },
                {
                  q: "How is this so much cheaper than traditional solar?",
                  a: "Traditional installers stack commissions, financing fees, and contractor markups. VoltSol buys EG4 commercial-grade equipment direct, and Hugo does every install personally. No sales floor. No middleman markup. The savings come to you.",
                },
                {
                  q: "Do I still need the grid at all?",
                  a: "Not if you don't want it. VoltSol systems are off-grid capable. Most customers stay grid-tied as a backup — but the option to cut it entirely is yours.",
                },
                {
                  q: "What happens during a blackout?",
                  a: "Nothing changes in your house. The EG4 system switches to island mode in milliseconds — lights stay on, AC keeps running, fridge stays cold. Your neighbors notice. You don't.",
                },
                {
                  q: "How long does installation take?",
                  a: "Most residential installations complete in one to two days.",
                },
                {
                  q: "Does this work in Northern California's climate?",
                  a: "Perfectly. The system handles both extreme heat — Fresno summers included — and cold Sierra foothills winters. The mini-split heat pumps are rated to operate well below freezing.",
                },
                {
                  q: "What's the payback period?",
                  a: "At $300/month in PG&E bills, typically 2.5 to 3 years. After that, power is essentially free for 25+ years.",
                },
              ].map((item) => (
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
                    src="/images/hugo-portrait.svg"
                    alt="Hugo, VoltSol Energy installer"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
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
                  Your installer. Northern California local. No high-pressure
                  sales floor, no financing traps &mdash; just the right system,
                  installed right, by the person who stands behind it.
                </p>
                <p className="mt-4 text-blue-300">
                  Hugo designs and installs every VoltSol system personally.
                  When you call, he picks up. When something needs attention, he
                  shows up.
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
              <span className="text-gold">could do.</span>
            </h2>
            <p className="mt-4 text-center text-blue-300">
              Get a free, no-pressure estimate tailored to your property.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:p-8">
              <QuoteForm campaignCode="home" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center sm:p-8">
              <p className="font-display text-lg font-bold text-white">
                Prefer to pick a time that works for you?
              </p>
              <p className="mt-2 text-sm text-blue-300">
                Skip the phone tag &mdash; book your free estimate appointment
                directly on Hugo&rsquo;s calendar.
              </p>
              <div className="mt-5 flex justify-center">
                <Button href="/book" variant="secondary">
                  <CalendarCheck className="mr-2 h-5 w-5" aria-hidden="true" />
                  Book an Appointment
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
