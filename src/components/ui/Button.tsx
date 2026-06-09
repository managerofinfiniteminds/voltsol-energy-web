"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy font-semibold hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-gold/50",
  secondary:
    "border-2 border-gold text-gold hover:bg-gold/10 active:bg-gold/20 focus-visible:ring-gold/50",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/10 focus-visible:ring-white/30",
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

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
