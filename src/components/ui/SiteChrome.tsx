"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import type { FooterLink } from "@/lib/site-config";

interface FooterProps {
  ctaText?: string;
  tagline?: string;
  email?: string;
  copyrightYear?: string;
  copyrightRights?: string;
  legalLine?: string;
  links?: FooterLink[];
}

// Customer-facing chrome — hidden on admin pages, which use their own layout.
function isAdmin(pathname: string | null): boolean {
  return pathname?.startsWith("/admin") ?? false;
}

// Sticky CTA only shows on homepage (and /start when we have it)
function showStickyCTA(pathname: string | null): boolean {
  return pathname === "/" || pathname === "/start";
}

export function SiteHeader({ ctaText }: { ctaText?: string }) {
  const pathname = usePathname();
  if (isAdmin(pathname)) return null;
  return <Header ctaText={ctaText} />;
}

export function SiteFooter(props: FooterProps) {
  const pathname = usePathname();
  if (isAdmin(pathname)) return null;
  return <Footer {...props} />;
}

export function SiteStickyCTA({ ctaText }: { ctaText?: string }) {
  const pathname = usePathname();
  if (isAdmin(pathname) || !showStickyCTA(pathname)) return null;
  return <StickyCTA ctaText={ctaText} />;
}
