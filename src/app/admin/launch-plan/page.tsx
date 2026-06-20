import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";

// CONFIDENTIAL internal document. Keep out of search engines entirely
// (defense-in-depth on top of the /admin robots disallow + middleware auth gate).
export const metadata: Metadata = {
  title: "SEO Launch Plan — VoltSol Energy, LLC (Confidential)",
  description: "Confidential internal launch checklist for VoltSol Energy, LLC.",
  robots: { index: false, follow: false, nocache: true, noarchive: true, nosnippet: true },
};

// Force dynamic so the session check always runs server-side.
export const dynamic = "force-dynamic";

export default async function LaunchPlanPage() {
  // Hard auth gate: verify a real admin session server-side so this can never
  // render to a logged-out visitor. The whitelist (hugo@voltsolenergy.com +
  // wayne@greenbowtie.com) is enforced in admin_users; only those can hold a
  // valid session, so only those two can reach this page.
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 text-slate-200">
      {/* Confidential ribbon */}
      <div className="sticky top-0 z-50 border-b border-rose-500/30 bg-rose-950/40 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-2 sm:px-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-rose-300">
            ⚠ Confidential — Internal Use Only
          </span>
          <span className="hidden text-[11px] text-slate-500 sm:inline">
            VoltSol Energy, LLC · {session.email}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        {/* ── Header ───────────────────────────────────────────── */}
        <header className="mb-12 border-b border-amber-500/20 pb-8">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            <span>⚡ Launch Briefing</span>
            <span className="text-slate-600">·</span>
            <span className="text-rose-400">Confidential</span>
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            VoltSol Energy, LLC — SEO Launch Plan
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            The website is built and Google-ready. This document is the playbook
            for getting <strong className="text-slate-200">VoltSol Energy, LLC</strong>{" "}
            ranking and capturing leads. Two tracks: Hugo&apos;s off-page work
            (the part only the business owner can do), and the developer track
            (technical wiring) — run in parallel.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Confidential to VoltSol Energy, LLC · Access restricted to
            hugo@voltsolenergy.com &amp; wayne@greenbowtie.com
          </p>
        </header>

        {/* ── The consistent business identity ─────────────────── */}
        <Callout tone="gold" title="The single most important rule: identical info everywhere">
          <p>
            Every listing, profile, and citation must use the EXACT same business
            details. Google cross-checks these to confirm we&apos;re a real,
            consistent local business. Copy/paste — never retype or vary.
          </p>
          <div className="mt-4 grid gap-2 rounded-lg border border-slate-700 bg-navy-900/60 p-4 text-sm sm:grid-cols-2">
            <Field label="Legal name" value="VoltSol Energy, LLC" />
            <Field label="Display name" value="VoltSol Energy" />
            <Field label="Phone" value="(530) 228-1019" />
            <Field label="Website" value="https://voltsolenergy.com" />
            <Field label="Email" value="info@voltsolenergy.com" />
            <Field label="License" value="CSLB #1148585" />
            <Field label="Service area" value="Northern California (PG&E / SMUD)" />
          </div>
          <p className="mt-3 text-[13px] text-slate-400">
            Use <strong className="text-slate-200">&ldquo;VoltSol Energy, LLC&rdquo;</strong>{" "}
            as the legal/business name on official listings (Google Business
            Profile, licenses, citations). The shorter{" "}
            <strong className="text-slate-200">&ldquo;VoltSol Energy&rdquo;</strong>{" "}
            display form is fine in marketing copy — but pick one and stay
            consistent on each platform.
          </p>
        </Callout>

        {/* ════════════════ HUGO'S TRACK ════════════════ */}
        <Section n="A" title="Hugo's track — off-page authority">
          <p>
            This is the part only the business owner can do. It proves VoltSol
            Energy, LLC is a real, local, trustworthy company. Do these in order.
            Most are free.
          </p>

          <Step num={1} label="🥇 Google Business Profile — DO THIS FIRST">
            <p>
              This is what makes VoltSol Energy, LLC appear in Google Maps and the
              &ldquo;near me&rdquo; map pack. Verification takes ~1–2 weeks by
              mail, so <strong className="text-amber-300">start today</strong> —
              everything else happens while you wait.
            </p>
            <Checklist
              items={[
                "Go to business.google.com → \u201cManage now\u201d",
                "Sign in with the VoltSol Google account (info@voltsolenergy.com)",
                "Business name: VoltSol Energy, LLC (exactly)",
                "Primary category: Solar Energy Contractor. Secondary: Solar Panel Installation, HVAC Contractor",
                "Choose \u201cI deliver to customers\u201d (no storefront) → add your service cities/counties (Sacramento, Placer, El Dorado, Yolo, Nevada County…)",
                "Phone: (530) 228-1019 · Website: https://voltsolenergy.com",
                "Request verification → watch your mail for the postcard PIN → enter it",
                "While waiting: write the description (template below), add hours & photos",
              ]}
            />
          </Step>

          <Step num={2} label="Get your first 5 reviews">
            <p>
              Reviews are the single biggest factor in ranking in the map pack
              AND in getting people to call. Target: 5 real reviews in month one.
            </p>
            <Checklist
              items={[
                "After each completed install, text/email the customer your Google review link (found inside the GBP dashboard)",
                "Ask happy past customers — even from before the site launched",
                "Best reviews mention location + service (\u201cVoltSol installed our off-grid solar in Auburn…\u201d)",
                "Reply to EVERY review, even a quick \u201cThank you!\u201d — Google rewards active profiles",
                "NEVER pay for fake reviews — Google catches it and suspends the profile",
              ]}
            />
          </Step>

          <Step num={3} label="Photos — real beats stock every time">
            <Checklist
              items={[
                "Take 10–15 photos: finished installs, panels on roofs, the EG4 battery/inverter, you on a job site, the work truck, before/after",
                "Upload them to Google Business Profile",
                "Send the best 5–8 to Wayne — he adds them to the website too",
              ]}
            />
          </Step>

          <Step num={4} label="Directory listings (citations) — same info everywhere">
            <p>
              Every site that lists VoltSol Energy, LLC&apos;s correct
              Name/Phone/Website is a &ldquo;vote&rdquo; that we&apos;re a real
              local business. Use the exact info from the box above.
            </p>
            <Checklist
              items={[
                "Bing Places — bingplaces.com",
                "Yelp for Business — biz.yelp.com",
                "Apple Business Connect — businessconnect.apple.com (Apple Maps/Siri)",
                "Nextdoor Business — business.nextdoor.com (huge for local home services)",
                "Angi / HomeAdvisor — angi.com",
                "Facebook Business Page — facebook.com/business",
                "Confirm CSLB #1148585 public listing shows the correct info",
              ]}
            />
          </Step>

          <Step num={5} label="A few quality backlinks (over the next few weeks)">
            <Checklist
              items={[
                "Local chamber of commerce (join → they link members)",
                "EG4 / equipment suppliers — ask to be listed as an installer/dealer",
                "Local news, supplier blogs, community pages",
                "Better Business Bureau (BBB) accreditation — trust signal + a link",
              ]}
            />
          </Step>

          <Callout tone="amber" title="Ready-to-paste Google Business Profile description">
            <p className="italic text-slate-300">
              VoltSol Energy, LLC is an owner-operated solar installer serving
              Northern California. We design and install complete off-grid-capable
              solar systems — panels, EG4 hybrid inverter, LiFePO4 battery storage,
              and mini-split heat pumps — with all permits handled. Owner Hugo
              performs every installation personally. Our systems keep your power
              on during PG&amp;E blackouts and PSPS shutoffs, sidestep NEM 3.0, and
              start at $8,700 all-in. CSLB Licensed #1148585. Free estimates.
            </p>
          </Callout>
        </Section>

        {/* ════════════════ DEVELOPER TRACK ════════════════ */}
        <Section n="B" title="Developer track — technical wiring (Wayne)">
          <p>
            All of this can happen while Hugo works his list. The on-site SEO is
            already built and live; this track makes Google start crawling,
            measures results, and closes the few real gaps.
          </p>

          <Step num={1} label="P0 — Get Google crawling + measuring (today)">
            <Checklist
              items={[
                "Google Search Console — add voltsolenergy.com as a Domain property (Cloudflare DNS TXT — we own the zone). Submit sitemap.xml",
                "Add GSC verification (DNS TXT preferred, or metadata.verification.google in layout.tsx)",
                "Bing Webmaster Tools — import from GSC, submit sitemap",
                "Install analytics — GA4 via @next/third-parties (NONE installed today; we're blind without it)",
                "Request indexing for homepage + top 5 city pages in GSC",
              ]}
            />
          </Step>

          <Step num={2} label="P1 — Fix the real on-site gaps (this week)">
            <Checklist
              items={[
                "Self-review schema risk: page.tsx emits aggregateRating/Review from on-site testimonials — Google penalizes self-serving stars. Gate it off until real Google reviews exist, then re-enable from verified reviews",
                "Confirm canonical + OG image (1200×630) render on every indexable page",
                "Consider real per-page lastModified dates in sitemap for genuine freshness",
                "Internal-linking audit — city/market pages link to each other + /technology + /learn; fix orphans",
              ]}
            />
          </Step>

          <Step num={3} label="P2 — Convert the traffic (this week)">
            <Checklist
              items={[
                "Verify Ray (lead chat) + estimate funnel fire on city pages — those are the SEO landing pages",
                "Confirm click-to-call (530) 228-1019 on mobile across all templates",
                "Wire GA4 conversion events on lead submit + chat lead to prove ROI",
              ]}
            />
          </Step>

          <Step num={4} label="P3 — Feed off-page + content cadence (ongoing)">
            <Checklist
              items={[
                "When GBP is verified: connect a Google reviews widget on-site (re-enables legit review schema)",
                "Add Hugo's install photos to city pages + /technology + homepage",
                "Publish 1–2 /learn articles per week against the keyword matrix in /admin/seo-strategy",
                "Keep Ray's knowledge base in sync with new articles",
                "Monitor GSC weekly: impressions → clicks → queries → double down",
              ]}
            />
          </Step>

          <Callout tone="gold" title="Quick wins, ranked by impact-to-effort">
            <ol className="ml-5 list-decimal space-y-1 text-slate-300">
              <li>GSC + sitemap submit (unlocks indexing) — 20 min, huge</li>
              <li>GA4 (measurement) — 30 min, huge</li>
              <li>Disable self-review star schema (penalty risk) — 15 min, protective</li>
              <li>Request-index top pages — 10 min, speeds first ranking</li>
              <li>Bing Webmaster — 10 min, free incremental traffic</li>
            </ol>
          </Callout>
        </Section>

        {/* ── Hand-offs ────────────────────────────────────────── */}
        <Section n="C" title="Hand-offs between Hugo & Wayne">
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard tone="amber" title="Hugo → Wayne">
              <ul className="ml-4 list-disc space-y-1 text-[13.5px] text-slate-300">
                <li>Confirmation when GBP is verified</li>
                <li>10–15 install photos</li>
                <li>Final service-area city list + hours</li>
              </ul>
            </MiniCard>
            <MiniCard tone="green" title="Wayne → Hugo">
              <ul className="ml-4 list-disc space-y-1 text-[13.5px] text-slate-300">
                <li>The Google review link (pulled from GBP once verified)</li>
                <li>Confirmation the site reflects his final info</li>
              </ul>
            </MiniCard>
          </div>
        </Section>

        <footer className="mt-16 border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          Confidential · VoltSol Energy, LLC · For internal use only. Do not
          distribute outside hugo@voltsolenergy.com &amp; wayne@greenbowtie.com.
        </footer>
      </div>
    </main>
  );
}

/* ─────────────────────────── Components ─────────────────────────── */

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-display text-sm font-bold text-amber-400">{n}</span>
        <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-4 text-[15px] leading-relaxed text-slate-300">
        {children}
      </div>
    </section>
  );
}

function Callout({
  tone,
  title,
  children,
}: {
  tone: "gold" | "amber";
  title: string;
  children: React.ReactNode;
}) {
  const border = tone === "gold" ? "border-amber-500/30" : "border-amber-400/25";
  return (
    <div className={`my-6 rounded-xl border ${border} bg-amber-500/[0.06] p-5`}>
      <div className="mb-2 text-sm font-bold text-amber-300">{title}</div>
      <div className="space-y-3 text-[14.5px] leading-relaxed text-slate-300">
        {children}
      </div>
    </div>
  );
}

function Step({
  num,
  label,
  children,
}: {
  num: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-xl border border-slate-700 bg-navy-900/50 p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-300">
          {num}
        </span>
        <h3 className="font-semibold text-white">{label}</h3>
      </div>
      <div className="space-y-3 pl-10 text-[14.5px] leading-relaxed text-slate-300">
        {children}
      </div>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2 text-[14px] text-slate-300">
          <span className="mt-0.5 flex-shrink-0 text-amber-400/70">☐</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function MiniCard({
  tone,
  title,
  children,
}: {
  tone: "green" | "amber";
  title: string;
  children: React.ReactNode;
}) {
  const border = tone === "green" ? "border-emerald-500/25" : "border-amber-500/30";
  const titleColor = tone === "green" ? "text-emerald-300" : "text-amber-300";
  return (
    <div className={`rounded-xl border ${border} bg-navy-900/50 p-4`}>
      <div className={`mb-2 text-sm font-bold ${titleColor}`}>{title}</div>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] uppercase tracking-wide text-slate-500">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}
