"use client";

import Image from "next/image";
import { Container } from "./Container";
import type { FooterLink } from "@/lib/site-config";

const DEFAULT_LINKS: FooterLink[] = [
  { label: "How It Works", href: "/technology" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
  { label: "Get My Free Estimate", href: "/start" },
  { label: "Privacy Policy", href: "/privacy" },
];

interface FooterProps {
  ctaText?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  copyrightYear?: string;
  copyrightRights?: string;
  legalLine?: string;
  links?: FooterLink[];
}

export function Footer({
  ctaText,
  tagline = "Clean energy, built to last.",
  email = "info@voltsolenergy.com",
  phone = "(530) 228-1019",
  copyrightYear = "2026",
  copyrightRights = "LLC. All rights reserved.",
  legalLine = "CSLB License #1148585",
  links,
}: FooterProps) {
  const phoneDigits = (phone || "").replace(/\D/g, "");
  const baseLinks = links && links.length ? links : DEFAULT_LINKS;
  // If a CTA override is set, relabel the estimate link to match site-wide CTA.
  const navLinks = ctaText
    ? baseLinks.map((l) =>
        l.href === "/start" || l.href === "/book" ? { ...l, label: ctaText } : l
      )
    : baseLinks;

  return (
    <footer className="border-t border-blue-800/50 bg-navy-700 py-12 sm:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          {/* Brand */}
          <div className="flex max-w-xs flex-col items-center sm:items-start">
            <a href="/" className="flex items-center gap-3" aria-label="VoltSol Energy — Home">
              <Image
                src="/images/voltsol-mark.svg"
                alt="VoltSol Energy"
                width={80}
                height={80}
                className="h-14 w-14"
              />
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-white">Volt</span><span className="text-gold">Sol</span><span className="text-white"> Energy</span>
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {tagline}
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-3 inline-block text-sm text-slate-400 transition-colors hover:text-white"
            >
              {email}
            </a>
            {phone ? (
              <a
                href={`tel:${phoneDigits}`}
                className="mt-1 inline-block text-sm text-slate-400 transition-colors hover:text-white"
              >
                {phone}
              </a>
            ) : null}
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-col items-center gap-3 sm:items-start">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-block py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-blue-900/40 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:justify-between">
          <span>&copy; {copyrightYear} <span className="font-semibold"><span className="text-white">Volt</span><span className="text-gold">Sol</span><span className="text-white"> Energy</span></span>, {copyrightRights}</span>
          <span>{legalLine}</span>
        </div>
      </Container>
    </footer>
  );
}
