"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Technology", href: "#systems" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl"
        >
          <span className="text-gold" aria-hidden="true">
            &#9889;
          </span>
          VoltSol Energy
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
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button href="#quote" size="sm">
            Get My Quote
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
          className="border-t border-white/10 bg-navy md:hidden"
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
            <Button href="#quote" onClick={() => setOpen(false)}>
              Get My Quote
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
