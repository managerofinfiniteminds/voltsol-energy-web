import { LeadConsole } from '@/components/admin/LeadConsole';

export const metadata = {
  title: 'Lead Console | VoltSol Admin',
};

export default function AdminLeadsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Lead Console</h1>
        <p className="mt-1 text-sm text-slate-400">
          Triage queue for engine leads. Hot leads first, then by timeline and bill size.
        </p>
      </div>
      <LeadConsole />
    </main>
  );
}
