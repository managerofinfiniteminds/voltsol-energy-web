import type { Metadata } from "next";
import Image from "next/image";
import { Section, Container, Button, Reveal } from "@/components/ui";
import { getHomeConfig } from "@/lib/site-config";
import { getLocale } from "@/lib/locale";
import { getTechContent } from "@/lib/tech-content";
import { getDict } from "@/lib/i18n";
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

export async function generateMetadata(): Promise<Metadata> {
  const t = getDict(getLocale());
  return {
    title: `${t.meta_tech_title} | VoltSol Energy`,
    description: t.meta_tech_desc,
    alternates: { canonical: "https://voltsolenergy.com/technology" },
    openGraph: {
      title: t.meta_tech_title,
      description: t.meta_tech_desc,
      url: "https://voltsolenergy.com/technology",
    },
  };
}

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
  const locale = getLocale();
  const cfg = await getHomeConfig(locale);
  const tc = getTechContent(locale);
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
                <Zap className="h-4 w-4" /> {tc.badge}
              </span>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {tc.hero_h1_pre}{" "}
                <span className="text-gold">{tc.hero_h1_gold}</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.2}>
              <p className="mt-6 text-lg text-blue-200 sm:text-xl">
                {tc.hero_p}
              </p>
            </Reveal>
            <Reveal immediate delay={0.3}>
              <p className="mt-6 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                {tc.hero_tagline_make} <span className="text-gold">{tc.hero_tagline_store}</span> {tc.hero_tagline_live}
              </p>
            </Reveal>
            <Reveal immediate delay={0.4}>
              <div className="mt-8 flex justify-center">
                <Button href="/start" size="lg" trackLocation="technology_hero">
                  {tc.hero_cta}
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
              {tc.s2_h2_pre} <span className="text-gold">{tc.s2_h2_gold}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-blue-200">
              {tc.s2_sub}
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
                    {tc.s2_bad_title}
                  </h3>
                </div>
                <p className="mt-4 font-mono text-sm text-blue-300">
                  {tc.s2_bad_path}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-blue-200">
                  {tc.s2_bad_points.map((t) => (
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
                    {tc.s2_good_title}
                  </h3>
                </div>
                <p className="mt-4 font-mono text-sm text-gold">
                  {tc.s2_good_path}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-blue-100">
                  {tc.s2_good_points.map((t) => (
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
              {tc.s3_h2}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {tc.s3_steps.map((s, i) => {
              const Icon = [Sun, Battery, Home][i];
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
                {tc.s4_stat_caption}
              </h2>
              <p className="mt-6 text-lg text-blue-200">
                {tc.s4_p}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex justify-center">
                <Button href="/start" size="lg" trackLocation="technology_savings">
                  {tc.s4_cta}
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
              {tc.s5_h2_pre}{" "}
              <span className="text-gold">{tc.s5_h2_gold}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-blue-200">
              {tc.s5_sub}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tc.s5_cards.map((c, i) => {
              const Icon = [Home, Flame, Volume2, Leaf, Wrench, ShieldCheck][i];
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
              {tc.s6_h2_pre}{" "}
              <span className="text-gold">{tc.s6_h2_gold}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-blue-200">
              {tc.s6_sub}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {tc.s6_zones.map((z, i) => (
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
                    {tc.specs_summary}
                  </span>
                  <span className="text-sm font-medium text-gold transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="mt-6 space-y-6 text-sm text-blue-200">
                  <p>
                    {tc.specs_intro_pre}
                    <strong className="text-white">
                      {tc.specs_intro_bold}
                    </strong>
                    {tc.specs_intro_post}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <tbody>
                        {tc.specs_rows.map(([k, v]) => (
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
                    {tc.specs_footnote}
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
                {tc.cta_h2}
              </h2>
              <p className="mt-5 text-lg text-blue-200">
                {tc.cta_p}
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
                  {tc.cta_back}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 text-center">
                <a
                  href="/learn"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold/80"
                >
                  <Zap className="h-4 w-4" /> Read our guides on off-grid solar, EG4 equipment, and more →
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
