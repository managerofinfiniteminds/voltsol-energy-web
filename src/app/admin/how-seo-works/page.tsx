import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";

// Keep this internal doc out of search engines entirely (defense-in-depth on
// top of the /admin robots disallow + middleware auth gate).
export const metadata: Metadata = {
  title: "How Our SEO Strategy Works — VoltSol Admin",
  description: "Plain-language explainer of the VoltSol Energy SEO strategy.",
  robots: { index: false, follow: false, nocache: true },
};

// Force dynamic so the session check always runs server-side.
export const dynamic = "force-dynamic";

export default async function HowSeoWorksPage() {
  // Hard auth gate: this page is NOT whitelisted in middleware, but we also
  // verify a real session here so it can never render to a logged-out visitor.
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">

        {/* ── Header ───────────────────────────────────────────── */}
        <header className="mb-12 border-b border-amber-500/20 pb-8">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            <span>⚡ Internal Briefing</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">Confidential</span>
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            How VoltSol&apos;s SEO Strategy Actually Works
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            A plain-language walk-through of how the website is built to win
            Google searches, what Google sees and stores, and how a real
            homeowner ends up clicking through and becoming a lead. No jargon —
            or jargon explained when we have to use it.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Last updated June 17, 2026 · Reflects the live site (200 city pages,
            28 guides, full structured data)
          </p>
        </header>

        {/* ── 0. The 30-second version ─────────────────────────── */}
        <Section n="0" title="The 30-second version">
          <p>
            Google is a matchmaker. When someone types{" "}
            <Q>off grid solar Sacramento</Q> into Google, Google&apos;s job is to
            instantly hand them the most relevant, trustworthy pages it knows
            about. Our entire strategy is about making VoltSol&apos;s website the
            obvious answer for thousands of solar-related searches across
            California — so that the homeowner clicks <em>us</em>, not a
            competitor.
          </p>
          <p>
            We do that three ways: (1) build a page for almost every relevant
            search someone might make, (2) make each page genuinely useful and
            unique so Google trusts it, and (3) hand Google the business&apos;s
            real-world credentials so it treats us as a legitimate local
            company. Everything below is just detail on those three moves.
          </p>
          <Callout tone="gold" title="The core idea">
            We are not buying ads. This is <strong>organic</strong> search — the
            free results below the ads. It compounds: once a page ranks, it
            brings in leads month after month without paying per click. It takes
            longer to build than ads, but it doesn&apos;t stop when you stop
            paying.
          </Callout>
        </Section>

        {/* ── 1. How Google works ──────────────────────────────── */}
        <Section n="1" title="How Google works (in three steps)">
          <p>
            Behind the scenes, Google does three distinct things. Understanding
            them is the key to everything else.
          </p>
          <Step num={1} label="Crawling">
            Google runs automated robots (called <Q>crawlers</Q> or{" "}
            <Q>spiders</Q>, the main one is <Q>Googlebot</Q>) that follow links
            around the internet, page to page, reading everything they find.
            They discover new pages by following links from pages they already
            know about — and from a special file we hand them called a{" "}
            <em>sitemap</em> (more on that below).
          </Step>
          <Step num={2} label="Indexing">
            When the crawler reads a page, Google stores a copy and analyzes it:
            what is this page about? What questions does it answer? Is it
            high-quality or thin junk? It files all of that into a massive
            library called the <Q>index</Q>. If a page isn&apos;t in the index,
            it can <strong>never</strong> show up in search results — it
            effectively doesn&apos;t exist to Google.
          </Step>
          <Step num={3} label="Ranking">
            When someone searches, Google pulls every indexed page that could
            answer the query and puts them in order — best answer first. Hundreds
            of signals decide that order: relevance, quality, trust, how local
            the business is, page speed, and more. Position #1 gets the vast
            majority of clicks; almost nobody scrolls to page two.
          </Step>
          <Callout tone="slate" title="Why this matters for us">
            Our strategy maps cleanly onto these three steps: we make sure every
            page gets <strong>crawled</strong> (sitemap + links), gets{" "}
            <strong>indexed</strong> (unique, quality content), and{" "}
            <strong>ranks</strong> well (relevance + trust signals + local
            authority).
          </Callout>
        </Section>

        {/* ── 2. Site structure ────────────────────────────────── */}
        <Section n="2" title="The site structure — a pyramid of authority">
          <p>
            We didn&apos;t just build a homepage and a contact form. The site is
            built as a deliberate <strong>hierarchy</strong> — a pyramid — that
            Google rewards because it shows topical depth and organization.
          </p>

          <div className="my-6 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60">
            <PyramidRow
              tier="Tier 1"
              path="/"
              title="Homepage"
              desc="The brand hub. Tells Google who VoltSol is, what it sells, and where it operates. Carries the business credentials."
            />
            <PyramidRow
              tier="Tier 2"
              path="/market/solar/california"
              title="State hub"
              desc="The 'money' authority page for California solar — links down to every county."
            />
            <PyramidRow
              tier="Tier 3"
              path="/market/solar/california/[county]"
              title="County hubs (24 of them)"
              desc="One per county. Carries county-level facts: local utility rates, permit office, climate zone. Links to its cities."
            />
            <PyramidRow
              tier="Tier 4"
              path="/market/solar/california/[county]/[city]"
              title="City pages (200 of them)"
              desc="The workhorses. One page per city — the page that ranks when someone searches 'solar in [their town].'"
              highlight
            />
            <PyramidRow
              tier="Content"
              path="/learn  +  /learn/[article]"
              title="The Learn hub (28 guides)"
              desc="Educational articles that catch people earlier in their research — before they're even ready to buy."
            />
          </div>

          <p>
            Every tier <strong>links down</strong> to the tier below and{" "}
            <strong>links back up</strong>. That internal linking does two jobs:
            it lets Google&apos;s crawler reach every page easily, and it passes
            <Q>authority</Q> around the site so the whole thing ranks stronger
            than a flat pile of disconnected pages would.
          </p>
          <Callout tone="gold" title="Why 200 separate city pages?">
            Because people search locally. Someone in Fresno searches{" "}
            <Q>solar Fresno</Q>, not <Q>solar California</Q>. A single generic
            page can&apos;t rank for 200 different towns — but 200 dedicated,
            locally-specific pages can each rank for their own town. This is how
            you capture the entire state instead of a sliver of it.
          </Callout>
        </Section>

        {/* ── 3. What gets indexed ─────────────────────────────── */}
        <Section n="3" title="What gets indexed — and what stays hidden">
          <p>
            Not everything on the site is meant for Google. We deliberately
            control what gets indexed.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard tone="green" title="✅ Indexed (we want these found)">
              <ul className="ml-4 list-disc space-y-1.5 text-sm text-slate-300">
                <li>Homepage</li>
                <li>State + 24 county hubs</li>
                <li>All 200 city pages</li>
                <li>The Learn hub + all 28 guides</li>
                <li>Technology, pricing, estimate, booking pages</li>
              </ul>
            </MiniCard>
            <MiniCard tone="red" title="🚫 Blocked (kept private)">
              <ul className="ml-4 list-disc space-y-1.5 text-sm text-slate-300">
                <li>Everything under <Code>/admin</Code> (this page included)</li>
                <li>The lead database + dashboard</li>
                <li><Code>/api/</Code> internal endpoints</li>
                <li>Customer booking tokens &amp; personal data</li>
              </ul>
            </MiniCard>
          </div>
          <p className="mt-5">
            We control this with two tools working together:
          </p>
          <Step num={1} label="robots.txt">
            A plain text file at <Code>voltsolenergy.com/robots.txt</Code> that
            politely tells crawlers <Q>you may read everything except{" "}
            <Code>/admin</Code> and <Code>/api</Code>.</Q> Well-behaved bots
            (Google, Bing) obey it.
          </Step>
          <Step num={2} label="The sitemap">
            A machine-readable list at{" "}
            <Code>voltsolenergy.com/sitemap.xml</Code> of every page we{" "}
            <em>want</em> indexed — currently <strong>260 URLs</strong>. It&apos;s
            like handing the librarian a complete catalog instead of making them
            wander the stacks. It also tells Google when each page last changed,
            so it knows what to re-check.
          </Step>
          <Callout tone="slate" title="Belt and suspenders on privacy">
            This very page lives under <Code>/admin</Code>, so it is (a) blocked
            in robots.txt, (b) behind the admin login, and (c) tagged{" "}
            <Code>noindex</Code> so even if a bot somehow reached it, it&apos;s
            told not to store it. Three independent locks.
          </Callout>
        </Section>

        {/* ── 4. Why each page ranks ───────────────────────────── */}
        <Section n="4" title="Why each page actually ranks — uniqueness + trust">
          <p>
            Building 200 pages is easy. Building 200 pages that Google{" "}
            <em>respects</em> is the hard part — and where most competitors fail.
          </p>
          <h3 className="mt-6 mb-2 text-lg font-semibold text-white">
            The doorway-page trap (and how we avoid it)
          </h3>
          <p>
            If you make 200 near-identical pages where only the town name is
            swapped, Google calls these <Q>doorway pages</Q> and{" "}
            <strong>penalizes</strong> them — sometimes the whole site. It&apos;s
            considered spam.
          </p>
          <p>
            So every one of our city pages carries genuinely different, true
            information about <em>that specific town</em>:
          </p>
          <ul className="ml-4 mt-2 list-disc space-y-1.5 text-sm text-slate-300">
            <li>
              The actual local electric utility and its rate (e.g. PG&amp;E
              ~$0.44/kWh vs. SMUD ~$0.18 vs. SDG&amp;E ~$0.47)
            </li>
            <li>That county&apos;s real permit office and typical turnaround</li>
            <li>The local climate zone and realistic sun-hours</li>
            <li>Three unique, town-specific FAQs</li>
            <li>Local notes (coastal fog, desert heat, mountain snow load, etc.)</li>
          </ul>
          <p className="mt-4">
            That variation is what makes each page a legitimate, useful answer
            instead of spam. It&apos;s the difference between dominating and
            getting penalized.
          </p>

          <h3 className="mt-8 mb-2 text-lg font-semibold text-white">
            Structured data — speaking Google&apos;s native language
          </h3>
          <p>
            Buried invisibly in each page&apos;s code is a section of{" "}
            <Q>structured data</Q> (also called <Q>schema</Q> or JSON-LD). Humans
            never see it, but it spells out facts in a format Google reads
            perfectly: <em>this is a LocalBusiness, here&apos;s its phone, its
            license number #1148585, its service area, its prices, its
            reviews.</em>
          </p>
          <p>
            This is what can earn the fancy search results — the star ratings,
            the FAQ drop-downs, the business info panel. We&apos;ve wired all of
            it: <Code>LocalBusiness</Code>, <Code>Service</Code>,{" "}
            <Code>FAQPage</Code>, <Code>Article</Code>, the CSLB license, and the
            review/rating markup.
          </p>
          <Callout tone="gold" title="One honest caveat">
            The star-rating code is in place, but Google only{" "}
            <em>displays</em> stars sourced from real Google reviews. That&apos;s
            why getting actual customer reviews is the one piece we can&apos;t
            code our way around — it needs real customers.
          </Callout>
        </Section>

        {/* ── 5. The user journey ──────────────────────────────── */}
        <Section n="5" title="The user journey — from Google search to lead">
          <p>
            Here is the whole thing from the homeowner&apos;s side, start to
            finish:
          </p>
          <ol className="my-5 space-y-4">
            <Journey num={1} title="They search">
              A homeowner in Roseville with a scary PG&amp;E bill types{" "}
              <Q>off grid solar roseville</Q> or <Q>how to avoid PG&amp;E rate
              increases</Q> into Google.
            </Journey>
            <Journey num={2} title="Google matches">
              Google checks its index and finds our Roseville city page (for the
              first search) or our PG&amp;E-rates guide (for the second) — both
              built specifically to answer that exact query.
            </Journey>
            <Journey num={3} title="They see a rich result">
              Our listing appears with a compelling title (<Q>Off-Grid Solar in
              Roseville from $8,700</Q>), a useful description, and — as reviews
              accumulate — star ratings and FAQ drop-downs that make it stand out
              from plain-text competitors.
            </Journey>
            <Journey num={4} title="They click through">
              They land on a page that speaks directly to <em>their</em> town:
              their utility, their permit process, their sun exposure. It feels
              local and credible, not generic.
            </Journey>
            <Journey num={5} title="They convert">
              The page guides them to the free-estimate form. They fill it out.
              That lead lands in <strong>this admin dashboard</strong> — scored
              hot/standard/low — and an email alert fires to info@. Hugo follows
              up.
            </Journey>
          </ol>
          <Callout tone="slate" title="The Learn hub catches them earlier">
            Not everyone is ready to buy. The 28 guides catch people in research
            mode (<Q>is off-grid solar worth it?</Q>), build trust, and link them
            toward the city pages and estimate form when they&apos;re ready. It
            widens the top of the funnel.
          </Callout>
        </Section>

        {/* ── 6. On-site vs off-site ───────────────────────────── */}
        <Section n="6" title="Two halves: what we built vs. what's next">
          <p>
            SEO has two halves. We&apos;ve completed the first; the second needs
            real-world action.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard tone="green" title="On-site — ✅ DONE (the code)">
              <p className="text-sm text-slate-300">
                Everything that lives on the website itself:
              </p>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-slate-300">
                <li>Site structure &amp; 200 city pages</li>
                <li>28 educational guides</li>
                <li>All structured data / schema</li>
                <li>Sitemap, robots, fast page speed</li>
                <li>Titles, descriptions, internal links</li>
              </ul>
            </MiniCard>
            <MiniCard tone="amber" title="Off-site — 🔜 NEXT (needs Hugo)">
              <p className="text-sm text-slate-300">
                Trust signals that live <em>outside</em> our site:
              </p>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm text-slate-300">
                <li>Google Business Profile (claim + verify)</li>
                <li>Real customer reviews</li>
                <li>Directory listings / citations (Yelp, Bing, etc.)</li>
                <li>Submit sitemap to Google &amp; Bing</li>
                <li>Backlinks from other reputable sites</li>
              </ul>
            </MiniCard>
          </div>
          <p className="mt-5">
            Think of the on-site work as building a great store on the best
            corner in town. The off-site work is getting listed in the phone
            book, collecting customer reviews in the window, and getting the
            local paper to mention you. Google weighs both — and for a local
            business, the off-site trust signals are enormous.
          </p>
          <Callout tone="gold" title="The single highest-leverage next step">
            <strong>Claim and verify the Google Business Profile.</strong> It
            powers the map pack (the top-3 local results with the map), feeds the
            star ratings, and is the #1 trust signal for local search. The
            verification postcard takes up to two weeks, so the clock starts the
            day Hugo requests it. The full copy-paste pack is already prepared.
          </Callout>
        </Section>

        {/* ── 7. Timeline ──────────────────────────────────────── */}
        <Section n="7" title="What to expect — the honest timeline">
          <p>
            Organic SEO is a compounding asset, not an instant switch. Realistic
            expectations:
          </p>
          <ul className="ml-4 mt-2 list-disc space-y-2 text-sm text-slate-300">
            <li>
              <strong>Weeks 1–4:</strong> Google discovers and indexes the new
              pages. Business Profile verification happens. Early long-tail
              searches start trickling in.
            </li>
            <li>
              <strong>Months 2–4:</strong> Pages climb as Google gains trust.
              Reviews and citations accumulate. The map pack starts appearing for
              local searches.
            </li>
            <li>
              <strong>Months 4–9:</strong> Authority compounds. City pages rank
              for competitive terms. Leads grow steadily without per-click cost.
            </li>
          </ul>
          <Callout tone="slate" title="The bottom line">
            The expensive, technical foundation is built and live. From here the
            growth comes from consistency — reviews, citations, and patience —
            and it pays back every month for years, unlike ads that stop the
            moment you stop paying.
          </Callout>
        </Section>

        <footer className="mt-14 border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          VoltSol Energy · Internal SEO briefing · Confidential — not for public
          distribution
          <br />
          Verified against the live site on June 17, 2026 · voltsolenergy.com
        </footer>
      </div>
    </main>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Presentational helpers (server components, no client JS needed)
   ────────────────────────────────────────────────────────────────────────── */

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
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-sm font-bold text-amber-400">
          {n}
        </span>
        <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3 leading-relaxed text-slate-300 [&_p]:text-[15px]">
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
  tone: "gold" | "slate";
  title: string;
  children: React.ReactNode;
}) {
  const styles =
    tone === "gold"
      ? "border-amber-500/30 bg-amber-500/[0.07]"
      : "border-blue-500/25 bg-blue-500/[0.06]";
  const titleColor = tone === "gold" ? "text-amber-300" : "text-blue-300";
  return (
    <div className={`my-5 rounded-xl border ${styles} p-4 sm:p-5`}>
      <div className={`mb-1.5 text-sm font-bold ${titleColor}`}>{title}</div>
      <div className="text-[14.5px] leading-relaxed text-slate-300">
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
    <div className="my-3 flex gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-white">
        {num}
      </span>
      <div>
        <div className="mb-1 font-semibold text-white">{label}</div>
        <div className="text-[14.5px] leading-relaxed text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}

function Journey({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-400">
        {num}
      </span>
      <div className="pt-0.5">
        <div className="font-semibold text-white">{title}</div>
        <div className="mt-0.5 text-[14.5px] leading-relaxed text-slate-300">
          {children}
        </div>
      </div>
    </li>
  );
}

function PyramidRow({
  tier,
  path,
  title,
  desc,
  highlight,
}: {
  tier: string;
  path: string;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-1 border-b border-slate-800 p-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-4 ${
        highlight ? "bg-amber-500/[0.06]" : ""
      }`}
    >
      <div className="flex-shrink-0 sm:w-20">
        <span className="text-xs font-bold uppercase tracking-wide text-amber-400">
          {tier}
        </span>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-white">
          {title}{" "}
          <code className="ml-1 rounded bg-slate-800 px-1.5 py-0.5 text-[11px] font-normal text-slate-400">
            {path}
          </code>
        </div>
        <div className="mt-0.5 text-[13.5px] leading-snug text-slate-400">
          {desc}
        </div>
      </div>
    </div>
  );
}

function MiniCard({
  tone,
  title,
  children,
}: {
  tone: "green" | "red" | "amber";
  title: string;
  children: React.ReactNode;
}) {
  const border =
    tone === "green"
      ? "border-emerald-500/25"
      : tone === "red"
        ? "border-rose-500/25"
        : "border-amber-500/30";
  const titleColor =
    tone === "green"
      ? "text-emerald-300"
      : tone === "red"
        ? "text-rose-300"
        : "text-amber-300";
  return (
    <div className={`rounded-xl border ${border} bg-slate-900/50 p-4`}>
      <div className={`mb-2 text-sm font-bold ${titleColor}`}>{title}</div>
      {children}
    </div>
  );
}

function Q({ children }: { children: React.ReactNode }) {
  return <span className="italic text-slate-200">&ldquo;{children}&rdquo;</span>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-slate-800 px-1.5 py-0.5 text-[12.5px] text-amber-200">
      {children}
    </code>
  );
}
