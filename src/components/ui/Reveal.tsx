import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  /** For above-the-fold content — animates on mount instead of on scroll */
  immediate?: boolean;
}

const delayClass: Record<string, string> = {
  "0": "animation-delay-0",
  "0.1": "animation-delay-100",
  "0.2": "animation-delay-200",
  "0.3": "animation-delay-300",
  "0.4": "animation-delay-400",
};

const directionClass: Record<string, string> = {
  up: "motion-safe:animate-reveal-up",
  down: "motion-safe:animate-reveal-down",
  left: "motion-safe:animate-reveal-left",
  right: "motion-safe:animate-reveal-right",
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  immediate = false,
}: RevealProps) {
  // Content is ALWAYS visible by default (opacity-100).
  // The CSS animation is progressive enhancement under motion-safe only.
  // animation-fill-mode: backwards means the element takes on keyframe 0%
  // styles during the animation-delay, but since the keyframe ends at the
  // element's natural state (opacity:1, translate:0) there is no stuck opacity:0.
  return (
    <div
      className={cn(
        // Base: fully visible — no JS required
        "opacity-100",
        directionClass[direction],
        delayClass[String(delay)] ?? "animation-delay-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
