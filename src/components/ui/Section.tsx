"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

export function Section({ children, className, alt, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        alt ? "bg-navy-800" : "bg-navy",
        className
      )}
    >
      {children}
    </section>
  );
}
