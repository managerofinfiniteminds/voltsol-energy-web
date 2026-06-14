import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "SEO Strategy — VoltSol Admin",
  description: "Strategic SEO domination plan for EG4 solar in Northern California",
};

export default function SeoStrategyPage() {
  // Auth check is handled by middleware for /admin/* routes
  // If we reach this page, the user is already authenticated

  return (
    <section className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 py-12 sm:py-16 lg:py-20">
      <Container className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 border-b border-gold/20 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-lg">⚡</span>
            </div>
            <h1 className="text-4xl font-display font-bold text-white">
              SEO Domination Strategy
            </h1>
          </div>
          <p className="text-lg text-blue-300 max-w-3xl">
            Complete plan to own EG4 solar search in Northern California by Q4 2026
          </p>
          <p className="text-sm text-blue-400 mt-3">
            📅 Generated June 14, 2026 | ⏰ 5-month roadmap | 🎯 200+ city pages | 🔗 30-45 backlinks
          </p>
        </div>

        {/* Executive Summary */}
        <div className="mb-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-navy-800 to-navy-700 p-8">
          <h2 className="text-2xl font-bold text-gold mb-4">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Vision</h3>
              <p className="text-blue-300 text-sm leading-relaxed">
                VoltSol will own organic search for &ldquo;EG4 solar&rdquo; and &ldquo;off-grid solar under $10k&rdquo; in Northern California by Q4 2026, capturing the Jan 1, 2027 tax urgency spike.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Timeline</h3>
              <p className="text-blue-300 text-sm leading-relaxed">
                5-month aggressive roadmap (June-October 2026) with focus on SEO foundation, content at scale, authority building, and lead conversion optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Expected Outcomes</h3>
              <ul className="text-blue-300 text-sm space-y-1">
                <li>✓ 50+ keywords in top 10</li>
                <li>✓ 3,000+ organic visitors/month</li>
                <li>✓ 30-50 leads/month from organic</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Revenue Impact</h3>
              <p className="text-gold font-semibold text-sm">
                $15K/month organic revenue<br />
                $100-150K+ annual impact<br />
                1-2 month payback period
              </p>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Strategic Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎯",
                title: "Zero EG4 Competitors",
                desc: "VoltSol can completely own EG4 solar search in Northern California with zero organic competition"
              },
              {
                icon: "📅",
                title: "Tax Deadline Window",
                desc: "Jan 1, 2027 solar tax exclusion creates 200-300% search spike Oct-Dec 2026"
              },
              {
                icon: "💰",
                title: "$10K Differentiation",
                desc: "Massive pricing advantage vs. $15-20K competitors (West Coast Solar, etc.)"
              },
              {
                icon: "👤",
                title: "Hugo as Brand",
                desc: "Local founder personal branding = trust multiplier vs. national eCommerce"
              }
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-blue-900/50 bg-navy-800/40 p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-blue-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Phase Roadmap */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">5-Phase Implementation Roadmap</h2>
          <div className="space-y-4">
            {[
              {
                phase: "Phase 1",
                month: "Month 1",
                title: "Foundation",
                tasks: [
                  "Technical SEO + schema deployment",
                  "Google Business Profile optimization",
                  "7 core pages created",
                  "First guest post submitted"
                ],
                target: "+40% organic visibility"
              },
              {
                phase: "Phase 2",
                month: "Month 2",
                title: "Local Launch",
                tasks: [
                  "20 city pages deployed",
                  "5-8 backlinks acquired",
                  "YouTube channel launch",
                  "First 3 guest posts published"
                ],
                target: "+200 rankings"
              },
              {
                phase: "Phase 3",
                month: "Month 3",
                title: "Scale",
                tasks: [
                  "150-200 city pages via dynamic generation",
                  "15+ backlinks acquired",
                  "50+ keywords tracking top-20",
                  "8+ YouTube videos uploaded"
                ],
                target: "1,000+ pages indexed"
              },
              {
                phase: "Phase 4",
                month: "Month 4",
                title: "Authority",
                tasks: [
                  "6-10 additional backlinks",
                  "Strategic partnerships locked",
                  "Media outreach (tax deadline angle)",
                  "Ranking consolidation"
                ],
                target: "30-45 total backlinks"
              },
              {
                phase: "Phase 5",
                month: "Month 5",
                title: "Optimization",
                tasks: [
                  "Lead funnel A/B testing",
                  "Seasonal urgency messaging",
                  "Final content gaps filled",
                  "Prepare for tax deadline push"
                ],
                target: "3,000+ organic traffic/mo"
              }
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-gold/20 bg-navy-800/50 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-gold text-navy px-3 py-1 rounded-full text-sm font-bold">
                        {item.phase}
                      </span>
                      <span className="text-blue-400 text-sm">{item.month}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-gold font-semibold text-sm">{item.target}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-blue-300 text-sm">
                      <span className="text-gold mt-1">→</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Top 20 Target Keywords</h2>
          <div className="overflow-x-auto rounded-xl border border-blue-900/30">
            <table className="w-full text-sm">
              <thead className="bg-navy-800 border-b border-blue-900/30">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gold">Keyword</th>
                  <th className="text-left px-4 py-3 font-semibold text-gold">Volume</th>
                  <th className="text-left px-4 py-3 font-semibold text-gold">Difficulty</th>
                  <th className="text-left px-4 py-3 font-semibold text-gold">Intent</th>
                  <th className="text-left px-4 py-3 font-semibold text-gold">Target Page</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-900/20">
                {[
                  ["EG4 hybrid inverter", "1,200", "High", "Comparative", "EG4 Hub"],
                  ["EG4 18kPV review", "450", "Medium", "Comparative", "Product Page"],
                  ["EG4 solar cost", "380", "Med-High", "Decision", "EG4 Hub"],
                  ["off-grid solar California", "2,800", "High", "Awareness", "Guide"],
                  ["solar installer near me", "5,400", "High", "Decision", "City Pages"],
                  ["EG4 LiFePO4 battery", "290", "Medium", "Comparative", "Product"],
                  ["hybrid solar inverter", "720", "High", "Awareness", "Guide"],
                  ["solar backup power", "1,100", "Medium", "Awareness", "Guide"],
                  ["off-grid solar system cost", "410", "Med-High", "Decision", "Guide"],
                  ["Northern California solar tax credit", "520", "Medium", "Decision", "Tax Page"],
                  ["solar system under $10000", "180", "Med-High", "Decision", "Guide"],
                  ["EG4 FlexBOSS18", "210", "Medium", "Comparative", "Product"],
                  ["off-grid living setup", "890", "Low-Med", "Awareness", "Guide"],
                  ["solar panel installation costs CA", "1,400", "High", "Decision", "Guide"],
                  ["best solar inverters 2026", "610", "High", "Comparative", "Guide"],
                  ["Northern California solar companies", "380", "Med-High", "Decision", "Hub"],
                  ["solar system ROI calculator", "450", "Medium", "Informational", "Tool"],
                  ["grid-tied vs off-grid solar", "560", "Medium", "Educational", "Guide"],
                  ["solar battery storage", "720", "Med-High", "Decision", "Guide"],
                  ["cost to go off-grid in California", "380", "Medium", "Decision", "Guide"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-navy-800/50 transition">
                    <td className="px-4 py-3 font-medium text-gold">{row[0]}</td>
                    <td className="px-4 py-3 text-blue-300">{row[1]}</td>
                    <td className="px-4 py-3 text-blue-300">{row[2]}</td>
                    <td className="px-4 py-3 text-blue-300">{row[3]}</td>
                    <td className="px-4 py-3 text-blue-300 text-xs">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-blue-400 text-xs mt-4">
            Full 50-keyword matrix available in SEO_DOMINATION_PLAN_VoltSol_2026.md
          </p>
        </div>

        {/* Content Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Content Deployment Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "200+ City Pages",
                desc: "Template-based scalable pages for every Northern CA city, generated via dynamic Next.js routes"
              },
              {
                title: "EG4 Authority Hub",
                desc: "Central product hub with specs, reviews, case studies, pricing, and video content"
              },
              {
                title: "Buyer's Guides (8+)",
                desc: "Comprehensive 3,000+ word guides for funnel capture: comparisons, sizing, financing"
              },
              {
                title: "Case Studies (12-20)",
                desc: "Real customer projects showcasing EG4 systems, ROI, and results with video testimonials"
              },
              {
                title: "Product Deep-Dives",
                desc: "Technical specifications, sizing calculators, wiring diagrams, competitor comparisons"
              },
              {
                title: "YouTube Content (40-80)",
                desc: "Product demos, installation process, customer testimonials, educational content series"
              }
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-blue-900/30 bg-navy-800/30 p-5">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-blue-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Authority & Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Authority Building Strategy</h2>
          <div className="rounded-xl border border-gold/30 bg-navy-800/50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-gold text-lg mb-4">Backlinks Target</h3>
                <div className="text-4xl font-bold text-white mb-2">30-45</div>
                <p className="text-blue-300 text-sm">Quality links from DA 30+ domains across 5 months</p>
              </div>
              <div>
                <h3 className="font-bold text-gold text-lg mb-4">Guest Posts</h3>
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <p className="text-blue-300 text-sm">Published articles positioning Hugo as EG4 expert</p>
              </div>
              <div>
                <h3 className="font-bold text-gold text-lg mb-4">Media Mentions</h3>
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <p className="text-blue-300 text-sm">Press coverage on tax deadline urgency angle</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-900/30">
              <h4 className="font-semibold text-white mb-4">Tier 1 Link Targets (High Authority)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "SolarPowerWorldOnline (DA 72)",
                  "OffGridAuthority (DA 62)",
                  "CleanEnergyReviews (DA 58)",
                  "SolarReviews (DA 65)",
                  "NREA (DA 48)",
                  "Local news outlets"
                ].map((target, i) => (
                  <div key={i} className="flex items-center gap-2 text-blue-300 text-sm">
                    <span className="text-gold">→</span>
                    <span>{target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Expected Outcomes (by Sept 14, 2026)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { metric: "Organic Keywords Top 10", current: "5", target: "50+", unit: "keywords" },
              { metric: "Monthly Organic Traffic", current: "200", target: "3,000+", unit: "visitors" },
              { metric: "Organic Leads/Month", current: "2", target: "30-50", unit: "qualified leads" },
              { metric: "Domain Authority", current: "15", target: "40+", unit: "semrush score" },
              { metric: "Total Backlinks", current: "3", target: "30-45", unit: "quality links" },
              { metric: "Media Mentions", current: "0", target: "5+", unit: "press placements" }
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-blue-900/30 bg-navy-800/30 p-6">
                <p className="text-blue-400 text-sm mb-3">{item.metric}</p>
                <div className="flex items-baseline gap-3">
                  <div>
                    <div className="text-blue-300 text-sm line-through">{item.current}</div>
                    <div className="text-3xl font-bold text-gold">{item.target}</div>
                  </div>
                  <div className="text-blue-400 text-xs">{item.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Impact */}
        <div className="mb-12 rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-amber-900/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Revenue Impact & ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">50</div>
              <p className="text-blue-300 text-sm mb-2">Leads/month from organic</p>
              <p className="text-xs text-blue-400">× $300 value each</p>
            </div>
            <div className="text-center border-l border-r border-blue-900/30">
              <div className="text-5xl font-bold text-gold mb-2">$15K</div>
              <p className="text-blue-300 text-sm mb-2">Monthly revenue impact</p>
              <p className="text-xs text-blue-400">from organic leads</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">1-2</div>
              <p className="text-blue-300 text-sm mb-2">Month payback period</p>
              <p className="text-xs text-blue-400">on $13-15K investment</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-900/30">
            <p className="text-center text-blue-300">
              <span className="font-semibold text-gold">12-month organic revenue:</span> $100K-$150K+
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-12 rounded-xl border border-blue-900/50 bg-navy-800/50 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Next Steps (Awaiting Review)</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-gold text-xl flex-shrink-0">📋</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Strategic Alignment Meeting</h4>
                <p className="text-blue-300 text-sm">Review full strategy document with Wayne + Hugo to confirm direction and priorities</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-gold text-xl flex-shrink-0">👥</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Team Assignment</h4>
                <p className="text-blue-300 text-sm">Assign content creator, developer, and project lead once strategy is approved</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-gold text-xl flex-shrink-0">🔨</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phase 1 Kickoff</h4>
                <p className="text-blue-300 text-sm">Begin foundation work: technical SEO, schema deployment, GBP optimization, first 7 pages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Documents */}
        <div className="rounded-xl border border-blue-900/50 bg-navy-800/30 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Full Documentation</h2>
          <p className="text-blue-300 mb-6">
            All detailed strategy documents are available for download. Each contains comprehensive tactics, templates, and implementation guides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/admin/download/SEO_DOMINATION_PLAN_VoltSol_2026.md" className="flex items-center gap-3 rounded-lg border border-gold/20 bg-navy-700/40 hover:bg-navy-700/60 transition p-4">
              <span className="text-2xl">📄</span>
              <div>
                <div className="font-semibold text-white">Complete Strategy Plan</div>
                <div className="text-xs text-blue-400">51K words | 8-part framework</div>
              </div>
            </a>
            <a href="/admin/download/CITY_PAGE_TEMPLATE.md" className="flex items-center gap-3 rounded-lg border border-gold/20 bg-navy-700/40 hover:bg-navy-700/60 transition p-4">
              <span className="text-2xl">🏘️</span>
              <div>
                <div className="font-semibold text-white">City Page Template</div>
                <div className="text-xs text-blue-400">16K words | 200+ cities scalable</div>
              </div>
            </a>
            <a href="/admin/download/LINK_BUILDING_PLAYBOOK.md" className="flex items-center gap-3 rounded-lg border border-gold/20 bg-navy-700/40 hover:bg-navy-700/60 transition p-4">
              <span className="text-2xl">🔗</span>
              <div>
                <div className="font-semibold text-white">Link Building Playbook</div>
                <div className="text-xs text-blue-400">18K words | 30-45 backlinks roadmap</div>
              </div>
            </a>
            <a href="/admin/download/QUICK_START_CHECKLIST.md" className="flex items-center gap-3 rounded-lg border border-gold/20 bg-navy-700/40 hover:bg-navy-700/60 transition p-4">
              <span className="text-2xl">✅</span>
              <div>
                <div className="font-semibold text-white">Quick Start Checklist</div>
                <div className="text-xs text-blue-400">15K words | Week-by-week tasks</div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-12 border-t border-blue-900/30 text-center text-blue-400 text-sm">
          <p>VoltSol Energy SEO Strategy Report | Generated June 14, 2026</p>
          <p className="mt-2">⚠️ Awaiting Hugo review before Phase 1 build authorization</p>
        </div>
      </Container>
    </section>
  );
}
