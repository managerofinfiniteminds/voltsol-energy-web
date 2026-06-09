import { getCampaignByCode } from '@/lib/campaigns';
import QuoteForm from '@/components/QuoteForm';

interface Props {
  params: { code: string };
}

export const dynamic = 'force-dynamic';

export default async function CampaignPage({ params }: Props) {
  const code = params.code?.toUpperCase() ?? '';
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
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Header */}
      <header className="px-6 py-6 text-center border-b border-slate-800">
        <div className="text-3xl font-extrabold text-amber-400 tracking-tight">VoltSol Energy</div>
        <div className="text-sm text-slate-400 mt-1">Northern California Solar</div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        {/* Hero section */}
        <div className="text-center pt-10 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Find Out How Much You Could Save on Solar
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            Get a free, no-obligation estimate from VoltSol Energy
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm font-medium text-amber-400 mb-6">
            {['Licensed', 'Local', 'Free Estimate', 'No Pressure'].map(item => (
              <span key={item} className="flex items-center gap-1">
                <span className="text-green-400">&#10003;</span> {item}
              </span>
            ))}
          </div>

          {/* Campaign invitation */}
          {campaign && (
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl px-5 py-3 inline-block">
              <p className="text-amber-300 text-sm font-medium">
                You were invited by the <span className="font-bold">{campaign.name}</span> team
              </p>
            </div>
          )}
        </div>

        {/* Form card */}
        <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">Your Free Solar Estimate</h2>
          <QuoteForm campaignCode={code || undefined} />
        </div>

        {phone && (
          <p className="text-center text-slate-400 mt-6 text-sm">
            Questions? Call us:{' '}
            <a href={`tel:${phone}`} className="text-amber-400 font-semibold hover:underline">
              {phone}
            </a>
          </p>
        )}
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} VoltSol Energy &mdash; Northern California &mdash;{' '}
        <a href="https://voltsolenergy.com" className="hover:text-amber-400">voltsolenergy.com</a>
      </footer>
    </div>
  );
}
