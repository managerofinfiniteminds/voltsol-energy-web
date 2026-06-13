"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

// Customer-facing chrome — hidden on admin pages, which use their own layout.
function isAdmin(pathname: string | null): boolean {
  return pathname?.startsWith("/admin") ?? false;
}

// Sticky CTA only shows on homepage (and /start when we have it)
function showStickyCTA(pathname: string | null): boolean {
  return pathname === "/" || pathname === "/start";
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

export function SiteStickyCTA() {
  const pathname = usePathname();
  if (isAdmin(pathname) || !showStickyCTA(pathname)) return null;
  return <StickyCTA />;
}
