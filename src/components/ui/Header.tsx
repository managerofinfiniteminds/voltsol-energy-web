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
      <Container className="flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="VoltSol Energy — Home">
          <Image
            src="/images/voltsol-logo-horizontal.svg"
            alt="VoltSol Energy"
            width={175}
            height={30}
            priority
            className="h-7 w-auto sm:h-8"
          />
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
              Get My Quote
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
