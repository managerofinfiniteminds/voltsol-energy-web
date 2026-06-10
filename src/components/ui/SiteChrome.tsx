"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

// Customer-facing chrome — hidden on admin pages, which use their own layout.
function isAdmin(pathname: string | null): boolean {
  return pathname?.startsWith("/admin") ?? false;
}

export function SiteHeader() {
  const pathname = usePathname();
  if (isAdmin(pathname)) return null;
  return <Header />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (isAdmin(pathname)) return null;
  return <Footer />;
}
