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
import {
  Shield,
  Zap,
  RefreshCw,
  Droplets,
  Award,
  Play,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <PageTracker />
      {/* ========== 1. HERO ========== */}
      <Section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
        <Container>
          <Reveal immediate>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              The sun doesn&rsquo;t
              <br />
              <span className="text-gold">send a bill.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1} immediate>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              How Northern California families are cutting the cord on PG&amp;E
              &mdash; for less than the cost of a used car.
            </p>
          </Reveal>

          <Reveal delay={0.2} immediate>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#quote" size="lg">
                Get My Free Estimate
              </Button>
              <Button href="#how" variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>
          </Reveal>

          {/* VIDEO PLACEHOLDER */}
          <Reveal delay={0.3} immediate>
            <div className="relative mt-12 aspect-video max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-navy-800 lg:mt-16">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              <div className="flex h-full items-center justify-center">
                <button
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold transition-colors hover:bg-gold/30 sm:h-20 sm:w-20"
                  aria-label="Play hero video"
                >
                  <Play className="ml-1 h-7 w-7 sm:h-8 sm:w-8" />
                </button>
              </div>
              {/* TODO: hero video */}
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={0.4} immediate>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
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

      {/* ========== 2. THE TRAP ========== */}
      <Section alt>
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Your power bill keeps climbing.{" "}
              <span className="text-slate-400">
                And &ldquo;normal solar&rdquo; ties you right back to the grid.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-6 lg:p-8">
                <h3 className="font-display text-lg font-bold text-red-400">
                  PG&amp;E Forever
                </h3>
                <ul className="mt-4 space-y-3 text-slate-300">
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
              <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-6 lg:p-8">
                <h3 className="font-display text-lg font-bold text-amber-400">
                  Typical Solar
                </h3>
                <ul className="mt-4 space-y-3 text-slate-300">
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
          </div>

          <Reveal delay={0.3}>
            <p className="mt-12 text-center font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              What if you didn&rsquo;t need the grid{" "}
              <span className="text-gold">at all?</span>
            </p>
          </Reveal>
        </Container>
      </Section>

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
                  <p className="mt-2 text-slate-400">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

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
              <div className="flex flex-col rounded-xl border border-white/10 bg-navy p-6">
                <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-navy-800 text-sm text-slate-500 border border-dashed border-slate-600" role="img" aria-label="EG4 FlexBOSS18 Inverter product photo">
                  [IMAGE: EG4 FlexBOSS18 Inverter]
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-gold-400">
                  EG4 Hybrid Inverter
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  FlexBOSS18 &mdash; the brain of the system.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>13kW continuous, up to 18kW solar input</li>
                  <li>10kW battery output</li>
                  <li>EMP-hardened, 10-year warranty</li>
                  <li>Phone monitoring via EG4 Connect</li>
                </ul>
              </div>
            </Reveal>

            {/* EG4 WallMount Battery */}
            <Reveal delay={0.2}>
              <div className="flex flex-col rounded-xl border border-white/10 bg-navy p-6">
                <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-navy-800 text-sm text-slate-500 border border-dashed border-slate-600" role="img" aria-label="EG4 WallMount Battery product photo">
                  [IMAGE: EG4 WallMount Battery]
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-gold-400">
                  EG4 WallMount Battery
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Store the sun.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>14.3 kWh stackable LiFePO4</li>
                  <li>IP65 weatherproof (indoor/outdoor)</li>
                  <li>8,000-cycle life</li>
                  <li>10kW power output</li>
                </ul>
              </div>
            </Reveal>

            {/* EG4 Mini-Split Heat Pump */}
            <Reveal delay={0.3}>
              <div className="flex flex-col rounded-xl border border-white/10 bg-navy p-6 sm:col-span-2 lg:col-span-1">
                <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-navy-800 text-sm text-slate-500 border border-dashed border-slate-600" role="img" aria-label="EG4 Mini-Split Heat Pump product photo">
                  [IMAGE: EG4 Mini-Split Heat Pump]
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-gold-400">
                  EG4 Mini-Split Heat Pump
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Comfort on sunlight.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
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
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ========== 5. THE NUMBER ========== */}
      <Section>
        <Container className="text-center">
          <Reveal>
            <p className="text-lg text-slate-400">
              Total system cost
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4">
              <span className="font-display text-5xl font-bold text-gold sm:text-6xl lg:text-7xl">
                Under{" "}
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
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-6">
                <p className="font-display text-2xl font-bold text-red-400">
                  $40,000+
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Traditional solar &mdash; loan, still grid-tied
                </p>
              </div>
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                <p className="font-display text-2xl font-bold text-gold">
                  Under $10,000
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  VoltSol / EG4 &mdash; off-grid capable
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-slate-300">
              At ~$300/mo to PG&amp;E, it can pay for itself in about 3 years
              &mdash; then the power&rsquo;s free for decades.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Typical system. Final pricing confirmed in your free estimate.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ========== 5b. SAVINGS ESTIMATOR ========== */}
      <SavingsEstimator />

      {/* ========== 6. MEET HUGO ========== */}
      <Section alt id="about">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <div className="mx-auto flex aspect-[3/4] max-w-sm items-center justify-center rounded-2xl bg-navy border border-dashed border-slate-600 text-sm text-slate-500" role="img" aria-label="Hugo, VoltSol Energy installer">
                  [IMAGE: hugo-portrait]
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                  Meet <span className="text-gold">Hugo</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Your installer. Northern California local. No high-pressure
                  sales floor, no financing traps &mdash; just the right system,
                  installed right, by the person who stands behind it.
                </p>
                <p className="mt-4 text-slate-400">
                  Hugo designs and installs every VoltSol system personally.
                  When you call, he picks up. When something needs attention, he
                  shows up.
                </p>

                {/* VIDEO PLACEHOLDER — "A word from Hugo" */}
                <div className="relative mt-8 aspect-video max-w-md overflow-hidden rounded-xl border border-white/10 bg-navy">
                  <div className="flex h-full items-center justify-center">
                    <button
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold transition-colors hover:bg-gold/30"
                      aria-label="Play video: A word from Hugo"
                    >
                      <Play className="ml-0.5 h-5 w-5" />
                    </button>
                  </div>
                  <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-slate-500">
                    A word from Hugo
                  </p>
                  {/* TODO: hugo video */}
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
            <p className="mt-4 text-center text-slate-400">
              Get a free, no-pressure estimate tailored to your property.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-white/10 bg-navy-800 p-6 sm:p-8">
              <QuoteForm campaignCode="home" />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
