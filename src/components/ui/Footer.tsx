"use client";

import Image from "next/image";
import { Container } from "./Container";

const footerLinks = [
  { label: "How It Works", href: "/#how" },
  { label: "Technology", href: "/#systems" },
  { label: "FAQ", href: "/#faq" },
  { label: "Get My Free Estimate", href: "/book" },
  { label: "Get a Quote", href: "/#quote" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer({ ctaText }: { ctaText?: string }) {
  const cta = ctaText || "Get My Free Estimate";
  const links = footerLinks.map((l) =>
    l.href === "/book" ? { ...l, label: cta } : l
  );
  return (
    <footer className="border-t border-blue-900/40 bg-navy py-12 sm:py-16">
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
              Clean energy, built to last.
            </p>
            <a
              href="mailto:info@voltsolenergy.com"
              className="mt-3 inline-block text-sm text-slate-400 transition-colors hover:text-white"
            >
              info@voltsolenergy.com
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {links.map((link) => (
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
          <span>&copy; 2026 <span className="font-semibold"><span className="text-white">Volt</span><span className="text-gold">Sol</span><span className="text-white"> Energy</span></span>, LLC. All rights reserved.</span>
          <span>CSLB License # pending &middot; Northern California</span>
        </div>
      </Container>
    </footer>
  );
}
