"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Leads", href: "/admin" },
  { label: "Chat", href: "/admin/chat" },
  { label: "Schedule", href: "/admin/schedule" },
  { label: "Reviews", href: "/admin/reviews" },
  { label: "Utilities", href: "/admin/utilities" },
  { label: "Config", href: "/admin/config" },
  { label: "Launch Plan", href: "/admin/launch-plan" },
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
      <header className="hidden sm:flex items-center justify-between border-b border-slate-700 bg-slate-900 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          {/* Logo + branding */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/voltsol-mark.svg"
              alt="VoltSol Energy"
              width={50}
              height={50}
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="font-display text-lg font-bold">
              <span className="text-white">Volt</span><span className="text-amber-400">Sol</span><span className="text-white"> Energy</span>
            </span>
          </div>
          <nav className="items-center gap-4 text-sm flex">
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

      {/* Mobile nav — logo + branding */}
      <div className="flex items-center gap-3 border-b border-slate-700 bg-slate-900 sm:hidden py-3 px-4">
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
      
      {/* Mobile tab nav — below logo */}
      <nav className="flex items-center border-b border-slate-700 bg-slate-900 sm:hidden">
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
