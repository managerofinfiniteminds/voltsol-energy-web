'use client';

import { LeadConsole } from '@/components/admin/LeadConsole';

export default function AdminDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Leads</h1>
        <p className="mt-1 text-sm text-slate-400">
          Your daily job: turn leads into customers. Hot leads first, always.
        </p>
      </div>
      <LeadConsole />
    </main>
  );
}
