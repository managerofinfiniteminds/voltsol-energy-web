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
        <div className="flex items-center gap-4">
          {/* Logo mark only */}
          <Image
            src="/images/voltsol-mark.svg"
            alt="VoltSol Energy"
            width={50}
            height={50}
            className="h-8 w-8 flex-shrink-0"
          />
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
        <div className="flex-shrink-0 px-4 py-2 border-r border-slate-700">
          <Image
            src="/images/voltsol-mark.svg"
            alt="VoltSol Energy"
            width={40}
            height={40}
            className="h-10 w-10"
          />
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
