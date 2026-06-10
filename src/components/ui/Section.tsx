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
        "py-20 sm:py-24 lg:py-28",
        alt ? "bg-navy-800" : "bg-navy",
        className
      )}
    >
      {children}
    </section>
  );
}
