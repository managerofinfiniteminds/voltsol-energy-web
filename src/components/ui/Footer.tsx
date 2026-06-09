"use client";

import { Container } from "./Container";

const footerLinks = [
  { label: "How It Works", href: "/#how" },
  { label: "Technology", href: "/#systems" },
  { label: "Get a Quote", href: "/#quote" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="/"
              className="font-display text-xl font-bold text-white"
            >
              <span className="text-gold" aria-hidden="true">
                &#9889;
              </span>{" "}
              VoltSol Energy
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Clean energy, built to last.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          &copy; 2026 VoltSol Energy, LLC. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
