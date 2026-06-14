"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Leads", href: "/admin" },
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
          <div className="flex items-center gap-2">
            {/* Logo mark */}
            <div className="w-6 h-6 flex-shrink-0 hidden sm:block">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#DC2626" />
                  </linearGradient>
                </defs>
                {/* Orange bolt / forward slash */}
                <path d="M16 2L6 16h8l2 14L28 8h-8L16 2Z" fill="url(#boltGrad)" />
                {/* White left sweep */}
                <path d="M2 16h8l-2 6H6l2-6Z" fill="white" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white hidden sm:inline">Admin</span>
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              localStorage.removeItem('voltsol_help_seen');
              window.location.reload();
            }}
            className="text-sm text-slate-400 transition hover:text-white"
            title="Show help"
          >
            ❔
          </button>
          <button
            onClick={handleLogout}
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className="flex items-center border-b border-slate-700 bg-slate-900 sm:hidden">
        {/* Mobile logo */}
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-r border-slate-700">
          <div className="w-5 h-5">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="boltGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#DC2626" />
                </linearGradient>
              </defs>
              <path d="M16 2L6 16h8l2 14L28 8h-8L16 2Z" fill="url(#boltGradMobile)" />
              <path d="M2 16h8l-2 6H6l2-6Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="flex flex-1">
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
        </div>
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

  // Login and auth pages are fully standalone — no nav at all.
  if (pathname?.startsWith("/admin/login") || pathname?.startsWith("/admin/auth")) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <AdminNav />
      {children}
    </div>
  );
}
