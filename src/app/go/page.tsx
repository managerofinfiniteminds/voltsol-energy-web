import EstimateFlow from '@/components/EstimateFlow';

export const dynamic = 'force-dynamic';

export default function GoPage() {
  const phone = process.env.VOLTSOL_PHONE;

  return (
    <div className="min-h-screen bg-navy text-white">
      <header className="px-6 py-6 text-center border-b border-navy-600">
        <div className="text-3xl font-extrabold text-gold tracking-tight font-display">VoltSol Energy</div>
        <div className="text-sm text-blue-300 mt-1">Northern California Solar</div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="text-center pt-10 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3 font-display">
            Find Out How Much You Could Save on Solar
          </h1>
          <p className="text-lg text-blue-300 mb-6">
            Get a free, no-obligation estimate from VoltSol Energy
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm font-medium text-gold">
            {['Licensed', 'Local', 'Free Estimate', 'No Pressure'].map(item => (
              <span key={item} className="flex items-center gap-1">
                <span className="text-emerald-400">&#10003;</span> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-navy-700 to-navy-800 border border-navy-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6 font-display">Your Free Solar Estimate</h2>
          <EstimateFlow />
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
