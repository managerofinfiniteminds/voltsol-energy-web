"use client";

import { cn } from "@/lib/utils";
import { track } from "@/lib/track";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "blue";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  /** When set, fires a cta_click event with this location on click */
  trackLocation?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "cta-glow bg-gold text-navy font-semibold hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-gold/50",
  secondary:
    "border-2 border-gold text-gold hover:bg-gold/10 active:bg-gold/20 focus-visible:ring-gold/50",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/10 focus-visible:ring-white/30",
  blue: "bg-blue text-white font-semibold hover:bg-blue-400 active:bg-blue-700 focus-visible:ring-blue/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      fullWidth,
      className,
      children,
      href,
      trackLocation,
      onClick,
      ...props
    },
    ref
  ) {
    const classes = cn(
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
      "disabled:pointer-events-none disabled:opacity-50",
      "w-full sm:w-auto",
      fullWidth && "sm:w-full",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (trackLocation) {
        track("cta_click", { location: trackLocation });
      }
      if (onClick && "button" in e.currentTarget) {
        (onClick as React.MouseEventHandler<HTMLButtonElement>)(e as React.MouseEvent<HTMLButtonElement>);
      }
    };

    if (href) {
      return (
        <a href={href} className={classes} onClick={handleClick}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }
);
