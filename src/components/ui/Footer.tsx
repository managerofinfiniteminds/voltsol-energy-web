"use client";

import Image from "next/image";
import { Container } from "./Container";
import type { FooterLink } from "@/lib/site-config";

const DEFAULT_LINKS: FooterLink[] = [
  { label: "How It Works", href: "/#how" },
  { label: "Technology", href: "/#systems" },
  { label: "FAQ", href: "/#faq" },
  { label: "Get My Free Estimate", href: "/book" },
  { label: "Get a Quote", href: "/#quote" },
  { label: "Privacy Policy", href: "/privacy" },
];

interface FooterProps {
  ctaText?: string;
  tagline?: string;
  email?: string;
  copyrightYear?: string;
  copyrightRights?: string;
  legalLine?: string;
  links?: FooterLink[];
}

export function Footer({
  ctaText,
  tagline = "Clean energy, built to last.",
  email = "info@voltsolenergy.com",
  copyrightYear = "2026",
  copyrightRights = "LLC. All rights reserved.",
  legalLine = "CSLB License # pending · Northern California",
  links,
}: FooterProps) {
  const baseLinks = links && links.length ? links : DEFAULT_LINKS;
  // If a CTA override is set, relabel the /book link to match site-wide CTA.
  const navLinks = ctaText
    ? baseLinks.map((l) => (l.href === "/book" ? { ...l, label: ctaText } : l))
    : baseLinks;

  return (
    <footer className="border-t border-blue-900/40 bg-navy-800 py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
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
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
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
