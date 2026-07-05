"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Leads", href: "/admin" },
  { label: "Chat", href: "/admin/chat" },
  { label: "Schedule", href: "/admin/schedule" },
  { label: "Reviews", href: "/admin/reviews" },
  { label: "Partners", href: "/admin/partners" },
  { label: "Utilities", href: "/admin/utilities" },
  { label: "Config", href: "/admin/config" },
  { label: "Launch Plan", href: "/admin/launch-plan" },
  { label: "Strategy", href: "/admin/strategy" },
];

function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <>
      {/* Desktop header — logo + horizontal nav, wraps gracefully instead of overflowing */}
      <header className="hidden sm:block border-b border-slate-700 bg-slate-900 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/images/voltsol-mark.svg"
              alt="VoltSol Energy"
              width={50}
              height={50}
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="font-display text-lg font-bold whitespace-nowrap">
              <span className="text-white">Volt</span><span className="text-amber-400">Sol</span><span className="text-white"> Energy</span>
            </span>
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
        </div>
        <nav className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {NAV_LINKS.map(link =>
            pathname === link.href ? (
              <span key={link.href} className="whitespace-nowrap font-semibold text-amber-400">
                {link.label}
              </span>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </header>

      {/* Mobile header — logo + hamburger, no more squeezed 7-way tab row */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-700 bg-slate-900 px-4 py-3 sm:hidden">
        <div className="flex items-center gap-2">
          <Image
            src="/images/voltsol-mark.svg"
            alt="VoltSol Energy"
            width={40}
            height={40}
            className="h-8 w-8"
          />
          <span className="text-sm font-semibold">
            <span className="text-white">Volt</span><span className="text-amber-400">Sol</span><span className="text-white"> Energy</span>
          </span>
        </div>
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">✕</span>
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile menu — full-width dropdown panel, one link per row */}
      {menuOpen && (
        <div className="sticky top-[57px] z-30 border-b border-slate-700 bg-slate-900 sm:hidden">
          <nav className="flex flex-col divide-y divide-slate-800">
            {NAV_LINKS.map(link =>
              pathname === link.href ? (
                <span
                  key={link.href}
                  className="border-l-2 border-amber-400 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-amber-400"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-l-2 border-transparent px-5 py-3 text-sm text-slate-300 transition hover:bg-slate-800/60 hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
            <button
              onClick={handleLogout}
              className="border-l-2 border-transparent px-5 py-3 text-left text-sm text-slate-300 transition hover:bg-slate-800/60 hover:text-white"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
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
