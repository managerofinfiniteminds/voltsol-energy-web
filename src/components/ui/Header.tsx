"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";

const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Technology", href: "#systems" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-t-2 border-t-gold/60 border-b border-b-blue-900/50 bg-navy/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between sm:h-24">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="VoltSol Energy — Home">
          <Image
            src="/images/voltsol-mark.svg"
            alt="VoltSol Energy"
            width={80}
            height={80}
            priority
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-white">Volt</span><span className="text-gold">Sol</span><span className="text-white"> Energy</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button href="/book" size="sm">
            Get My Free Estimate
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 transition-colors hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-blue-900/50 bg-navy/95 backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button href="/book" onClick={() => setOpen(false)}>
              Get My Free Estimate
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
