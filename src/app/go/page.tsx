import IntakeForm from '@/components/IntakeForm';

export const dynamic = 'force-dynamic';

export default function GoPage() {
  const phone = process.env.VOLTSOL_PHONE;

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <header className="px-6 py-6 text-center border-b border-slate-800">
        <div className="text-3xl font-extrabold text-amber-400 tracking-tight">VoltSol Energy</div>
        <div className="text-sm text-slate-400 mt-1">Northern California Solar</div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="text-center pt-10 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Find Out How Much You Could Save on Solar
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            Get a free, no-obligation estimate from VoltSol Energy
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm font-medium text-amber-400">
            {['Licensed', 'Local', 'Free Estimate', 'No Pressure'].map(item => (
              <span key={item} className="flex items-center gap-1">
                <span className="text-green-400">&#10003;</span> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">Your Free Solar Estimate</h2>
          <IntakeForm />
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
