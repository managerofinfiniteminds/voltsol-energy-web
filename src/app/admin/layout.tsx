"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Triage", href: "/admin/leads" },
  { label: "Contacts", href: "/admin" },
  { label: "Analytics", href: "/admin/dashboard" },
  { label: "Schedule", href: "/admin/schedule" },
];

function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <>
      <header className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-6">
          <div className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            VoltSol Admin
          </div>
          <nav className="hidden items-center gap-4 text-sm sm:flex">
            {NAV_LINKS.map(link =>
              pathname === link.href ? (
                <span key={link.href} className="font-semibold text-amber-400">
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-slate-400 transition hover:text-white"
        >
          Logout
        </button>
      </header>

      {/* Mobile nav */}
      <nav className="flex border-b border-slate-700 bg-slate-900 sm:hidden">
        {NAV_LINKS.map(link =>
          pathname === link.href ? (
            <span
              key={link.href}
              className="flex-1 border-b-2 border-amber-400 py-3 text-center text-sm font-semibold text-amber-400"
            >
              {link.label}
            </span>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="flex-1 py-3 text-center text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Login page is fully standalone — no nav at all.
  if (pathname?.startsWith("/admin/login")) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <AdminNav />
      {children}
    </div>
  );
}
