import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getMarketSession } from '@/lib/market-auth';

export default async function ProtectedAppLayout({ children }: { children: React.ReactNode }) {
  const session = await getMarketSession();
  if (!session) redirect('/app/login');

  return (
    <div className="min-h-screen bg-[#040D1C]">
      {/* Top nav */}
      <header className="bg-[#071628] border-b border-blue-900/40 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-amber-400 font-extrabold text-base tracking-tight">
            VoltSol Marketplace
          </span>
          <nav className="flex gap-5 text-sm">
            <Link href="/app/pool"      className="text-slate-300 hover:text-white transition">Lead Pool</Link>
            <Link href="/app/dashboard" className="text-slate-300 hover:text-white transition">My Leads</Link>
            <Link href="/app/billing"   className="text-slate-300 hover:text-white transition">Billing</Link>
            <Link href="/app/onboarding" className="text-slate-300 hover:text-white transition">Settings</Link>
            {session.isOwner && (
              <Link href="/app/admin" className="text-amber-400 hover:text-amber-300 transition font-medium">Admin</Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-400">
          {session.isOwner && (
            <span className="bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded text-xs font-semibold">
              OWNER
            </span>
          )}
          <span className="hidden sm:block">{session.tenantName}</span>
          <form action="/api/market/auth/logout" method="POST">
            <button type="submit" className="text-slate-500 hover:text-red-400 transition text-sm">
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
    </div>
  );
}
