import type { Metadata } from "next";
import Image from "next/image";
import { Section, Container, Button, Reveal } from "@/components/ui";
import { getHomeConfig } from "@/lib/site-config";
import PageTracker from "@/components/PageTracker";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import {
  Sun,
  Battery,
  Home,
  Zap,
  Snowflake,
  Flame,
  Volume2,
  Leaf,
  Wrench,
  ShieldCheck,
  Plug,
  Grid3x3,
  Check,
  X,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "How It's Different — Solar That Powers Your Home Directly | VoltSol Energy",
  description:
    "Most solar sends power on a round-trip through the grid. Our hybrid DC system sends sunlight straight into your heating and cooling — free all day, and it keeps running in a blackout. See how the technology works.",
  alternates: { canonical: "https://voltsolenergy.com/technology" },
  openGraph: {
    title: "The Only System Where the Sun Powers Your Home Directly",
    description:
      "Hybrid DC solar mini-split: sunlight goes straight into your AC. 100% daytime energy savings on sunny days — and comfort that survives a blackout.",
    url: "https://voltsolenergy.com/technology",
  },
};

const techArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "How VoltSol's Hybrid DC Solar System Works",
  description:
    "A hybrid AC/DC solar mini-split system that runs heating and cooling directly from solar panels, with battery storage for nighttime and outages.",
  author: { "@type": "Organization", name: "VoltSol Energy" },
  publisher: {
    "@type": "Organization",
    name: "VoltSol Energy",
    url: "https://voltsolenergy.com",
  },
};

export default async function TechnologyPage() {
  const cfg = await getHomeConfig();
  const cta = cfg.cta_button_text || "Get My Free Estimate";

  return (
    <>
      <PageTracker />
      <ScrollDepthTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />

      {/* ========== SCENE 1: HERO ========== */}
      <Section className="hero-bg relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="solar-rays absolute inset-x-0 top-0 h-[320px]" />
          <div className="absolute -right-40 -top-24 h-[420px] w-[420px] rounded-full border-2 border-blue-500/10" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal immediate>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
                <Zap className="h-4 w-4" /> The Technology
              </span>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                The only system where the sun powers your home{" "}
                <span className="text-gold">directly.</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.2}>
              <p className="mt-6 text-lg text-blue-200 sm:text-xl">
                Most solar takes the long way around — through an inverter, out
                to the grid, past your meter, and back. Ours sends sunlight{" "}
                <strong className="text-white">straight into your heating and cooling.</strong>{" "}
                Free all day. Still running when the power&apos;s out.
              </p>
            </Reveal>
            <Reveal immediate delay={0.3}>
              <p className="mt-6 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                Make it. <span className="text-gold">Store it.</span> Live on it.
              </p>
            </Reveal>
            <Reveal immediate delay={0.4}>
              <div className="mt-8 flex justify-center">
                <Button href="/start" size="lg" trackLocation="technology_hero">
                  See if my home qualifies
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-navy-500/40 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
              <Image
                src="/images/how-it-works-system.jpg"
                alt="Cutaway of a home showing rooftop solar feeding battery storage and a mini-split system that heats and cools the living room, home office, and guest room."
                width={1376}
                height={768}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ========== SCENE 2: PROBLEM vs SOLUTION ========== */}
      <Section alt>
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Same sun. <span className="text-gold">Shorter path.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-blue-200">
              Why ordinary solar still leaves you tied to the utility — and how
              we cut the cord.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-navy-500/40 shadow-[0_0_40px_rgba(245,158,11,0.08)]">
              <Image
                src="/images/tech-two-paths.jpg"
                alt="Comparison diagram: ordinary solar sends power on a long path through an inverter, the grid, and your meter before reaching your AC; the VoltSol way sends solar power directly into your home."
                width={1376}
                height={768}
                className="h-auto w-full"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Everyone else */}
            <Reveal>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-700/40 p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                    <Grid3x3 className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-blue-200">
                    Ordinary solar
                  </h3>
                </div>
                <p className="mt-4 font-mono text-sm text-blue-300">
                  Panels → inverter → grid → meter → back to your house → AC
                </p>
                <ul className="mt-6 space-y-3 text-sm text-blue-200">
                  {[
                    "Every conversion loses energy along the way",
                    "You're still buying power back from the utility",
                    "Rates and rules can change on you anytime",
                    "When the grid goes down, your AC goes down with it",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* VoltSol */}
            <Reveal delay={0.15}>
              <div className="h-full rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 to-transparent p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Zap className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    The VoltSol way
                  </h3>
                </div>
                <p className="mt-4 font-mono text-sm text-gold">
                  Panels → straight into your AC. That&apos;s it.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-blue-100">
                  {[
                    "Solar plugs directly into the system — no round trip",
                    "100% daytime energy savings on sunny days",
                    "A battery banks the extra for night and outages",
                    "Keeps your home comfortable even in a blackout",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ========== SCENE 3: HOW IT WORKS — 3 BEAT ========== */}
      <Section>
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              How it actually works
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Sun,
                step: "01",
                title: "MAKE IT",
                desc: "Rooftop panels turn free sunlight into power and feed it straight into the system — no inverter middleman skimming energy off the top.",
              },
              {
                icon: Battery,
                step: "02",
                title: "STORE IT",
                desc: "A home battery banks the extra power for nighttime and blackouts, so the sun you caught at noon still cools your house at midnight.",
              },
              {
                icon: Home,
                step: "03",
                title: "LIVE ON IT",
                desc: "Whole-home heating and cooling runs on stored sun — comfortable, quiet, and on sunny days, powered entirely by the panels on your roof.",
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.step} delay={0.1 * (i + 1)}>
                  <div className="relative h-full rounded-2xl border border-white/10 bg-navy-700/40 p-8 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold mx-auto">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="mt-5 block font-display text-sm font-bold text-gold">
                      {s.step}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-blue-200">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ========== SCENE 4: 100% DAYTIME SAVINGS ========== */}
      <Section alt className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="solar-rays absolute inset-x-0 top-0 h-[260px] opacity-60" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="font-display text-6xl font-bold text-gold sm:text-7xl lg:text-8xl">
                100%
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                daytime energy savings on sunny days
              </h2>
              <p className="mt-6 text-lg text-blue-200">
                When the sun&apos;s out, your heating and cooling can run on{" "}
                <strong className="text-white">$0 of utility power.</strong>{" "}
                That&apos;s the difference between renting electricity and making
                your own — and it&apos;s why so many homeowners watch their bill
                fall toward zero.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex justify-center">
                <Button href="/start" size="lg" trackLocation="technology_savings">
                  See your potential savings
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ========== SCENE 5: EQUIPMENT (consumer benefits) ========== */}
      <Section>
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Built to handle a{" "}
              <span className="text-gold">California year</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-blue-200">
              Real performance, in plain English.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Cools a whole home, sips power",
                desc: "Up to 36,000 BTU across as many as 4 rooms — about 2,000 sq ft — at an efficiency rating (SEER2 up to 22.5) that puts it among the most efficient systems made.",
              },
              {
                icon: Flame,
                title: "Handles a heat wave and a cold snap",
                desc: "Keeps cooling in triple-digit heat and keeps heating when it drops near freezing — true four-season comfort for NorCal.",
              },
              {
                icon: Volume2,
                title: "Whisper quiet indoors",
                desc: "As low as 29 dB on the indoor units — quieter than a library reading room. You'll forget it's running.",
              },
              {
                icon: Leaf,
                title: "Cleaner refrigerant",
                desc: "Uses modern R32 refrigerant — more efficient and lower environmental impact than the older blends in most legacy AC systems.",
              },
              {
                icon: Wrench,
                title: "Smart install, lower cost",
                desc: "Quick-connect, pre-charged lines mean a faster, cleaner installation — less labor on the bill, no torch-and-vacuum guesswork.",
              },
              {
                icon: ShieldCheck,
                title: "Backed for the long haul",
                desc: "Covered by a manufacturer limited warranty, installed by a licensed local pro who stands behind the work.",
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={0.05 * (i + 1)}>
                  <div className="h-full rounded-2xl border border-white/10 bg-navy-700/40 p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-200">
                      {c.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ========== SCENE 6: RIGHT-SIZED ========== */}
      <Section alt>
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Right-sized for{" "}
              <span className="text-gold">your home</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-blue-200">
              One outdoor unit can run two to four indoor zones. We match each
              room to the right size — so you never overpay for capacity you
              won&apos;t use.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                size: "12K",
                room: "Bedrooms",
                area: "300–500 sq ft",
              },
              {
                size: "18K",
                room: "Living rooms & kitchens",
                area: "600–800 sq ft",
              },
              {
                size: "24K",
                room: "Great rooms & shops",
                area: "1,000–1,250 sq ft",
              },
            ].map((z, i) => (
              <Reveal key={z.size} delay={0.1 * (i + 1)}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-700/40 p-8 text-center">
                  <p className="font-display text-4xl font-bold text-gold">
                    {z.size}
                    <span className="ml-1 text-base font-medium text-blue-300">
                      BTU
                    </span>
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold">
                    {z.room}
                  </h3>
                  <p className="mt-1 text-sm text-blue-200">{z.area}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== THE SPECS (SEO / credibility block) ========== */}
      <Section>
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <details className="group rounded-2xl border border-white/10 bg-navy-700/40 p-6 sm:p-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-xl font-bold">
                    The full specs
                  </span>
                  <span className="text-sm font-medium text-gold transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="mt-6 space-y-6 text-sm text-blue-200">
                  <p>
                    VoltSol systems are built on{" "}
                    <strong className="text-white">
                      EG4 Hybrid AC/DC mini-split
                    </strong>{" "}
                    technology — single-zone (12K / 24K) and multizone (24K /
                    36K) configurations with direct solar DC input.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <tbody>
                        {[
                          ["Capacity", "12,000 – 36,000 BTU/h"],
                          ["Zones (multizone)", "2 to 4 indoor air handlers"],
                          ["Coverage", "Up to ~2,000 sq ft"],
                          ["Efficiency", "SEER2 up to 22.5 · Energy Star"],
                          ["Heating efficiency", "COP up to 14.3"],
                          ["Solar DC input", "90 – 410 VDC direct to unit"],
                          ["Rated PV", "Up to 2,200W (single) / 4,400W (multizone)"],
                          ["Refrigerant", "R32"],
                          ["Cooling op. range", "Down to extreme heat (to ~125–131°F outdoor)"],
                          ["Heating op. range", "Down to ~5°F outdoor"],
                          ["Indoor noise", "As low as 29 dB(A)"],
                          ["Install", "Plug-N-Cool quick-connect, pre-charged line set"],
                          ["Warranty", "5-year limited (manufacturer)"],
                        ].map(([k, v]) => (
                          <tr key={k} className="border-b border-white/5">
                            <th className="py-2 pr-4 font-medium text-blue-300">
                              {k}
                            </th>
                            <td className="py-2 text-white">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-blue-400">
                    Specs reflect EG4 Hybrid Mini-Split AC/DC product family.
                    Exact configuration and performance depend on your home; your
                    free estimate confirms the system sized for you.
                  </p>
                </div>
              </details>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ========== SCENE 7 + 8: TRUST + CTA ========== */}
      <Section alt className="relative overflow-hidden">
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold mx-auto">
                <Plug className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                See your home running on sunlight
              </h2>
              <p className="mt-5 text-lg text-blue-200">
                Licensed. Local. No pressure. Answer a few quick questions and
                we&apos;ll show you the system — and the savings — sized for your
                home.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/start" size="lg" trackLocation="technology_footer">
                  {cta}
                </Button>
                <Button
                  href="/#how"
                  size="lg"
                  variant="secondary"
                  trackLocation="technology_how"
                >
                  Back to How It Works
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
