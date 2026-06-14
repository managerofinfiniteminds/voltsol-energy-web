import { getCampaignByCode } from '@/lib/campaigns';
import EstimateFlow from '@/components/EstimateFlow';

interface Props {
  params:       { code: string };
  searchParams: { src?: string; source?: string; rep?: string };
}

export const dynamic = 'force-dynamic';

export default async function CampaignPage({ params, searchParams }: Props) {
  const code = params.code?.toUpperCase() ?? '';
  // Normalise: support both ?src= and ?source=
  const source = searchParams.src ?? searchParams.source;
  const rep    = searchParams.rep;
  let campaign = null;

  if (code) {
    try {
      campaign = await getCampaignByCode(code);
    } catch {
      // DB error — still show form without campaign
    }
  }

  const phone = process.env.VOLTSOL_PHONE;

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header */}
      <header className="px-6 py-6 text-center border-b border-navy-600">
        <div className="text-3xl font-extrabold text-gold tracking-tight font-display">VoltSol Energy</div>
        <div className="text-sm text-blue-300 mt-1">Northern California Solar</div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        {/* Hero section */}
        <div className="text-center pt-10 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3 font-display">
            Find Out How Much You Could Save on Solar
          </h1>
          <p className="text-lg text-blue-300 mb-6">
            Get a free, no-obligation estimate from VoltSol Energy
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm font-medium text-gold mb-6">
            {['Licensed', 'Local', 'Free Estimate', 'No Pressure'].map(item => (
              <span key={item} className="flex items-center gap-1">
                <span className="text-emerald-400">&#10003;</span> {item}
              </span>
            ))}
          </div>

          {/* Campaign invitation */}
          {campaign && (
            <div className="bg-gold/10 border border-gold/30 rounded-xl px-5 py-3 inline-block">
              <p className="text-gold text-sm font-medium">
                You were invited by the <span className="font-bold">{campaign.name}</span> team
              </p>
            </div>
          )}
        </div>

        {/* Form card with EstimateFlow */}
        <div className="bg-gradient-to-br from-navy-700 to-navy-800 border border-navy-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6 font-display">Your Free Solar Estimate</h2>
          <EstimateFlow campaignCode={code || undefined} />
        </div>

        {phone && (
          <p className="text-center text-blue-300 mt-6 text-sm">
            Questions? Call us:{' '}
            <a href={`tel:${phone}`} className="text-gold font-semibold hover:underline">
              {phone}
            </a>
          </p>
        )}
      </main>

      <footer className="border-t border-navy-600 py-6 text-center text-blue-300/60 text-xs">
        &copy; {new Date().getFullYear()} VoltSol Energy &mdash; Northern California &mdash;{' '}
        <a href="https://voltsolenergy.com" className="hover:text-gold">voltsolenergy.com</a>
      </footer>
    </div>
  );
}
