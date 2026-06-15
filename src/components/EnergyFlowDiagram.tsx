"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ---------- Animated dot along a path ---------- */
function FlowDot({
  path,
  duration,
  delay,
}: {
  path: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.circle
      r="4"
      fill="#FBBF24"
      filter="url(#glow)"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      style={{ offsetPath: `path('${path}')` }}
    />
  );
}

/* ---------- Mobile (vertical) layout ---------- */
function MobileFlow({ animated }: { animated: boolean }) {
  // Vertical: Sun(top) → Panels → Inverter → split to Battery & Home
  // Viewbox: 300 x 520
  const sunToPanels = "M150,55 L150,120";
  const panelsToInverter = "M150,170 L150,235";
  const inverterToBattery = "M150,285 L80,350";
  const inverterToHome = "M150,285 L220,350";

  return (
    <svg
      viewBox="0 0 300 520"
      className="mx-auto w-full max-w-[300px]"
      role="img"
      aria-label="Energy flow diagram: Sun to Solar Panels to EG4 Inverter, splitting to Battery and Home with Mini-Split AC"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection lines */}
      <path d={sunToPanels} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />
      <path d={panelsToInverter} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />
      <path d={inverterToBattery} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />
      <path d={inverterToHome} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />

      {/* Sun */}
      <circle cx="150" cy="35" r="22" fill="#D97706" opacity="0.2" />
      <circle cx="150" cy="35" r="14" fill="#F59E0B" />
      <text x="150" y="40" textAnchor="middle" className="fill-navy font-display text-[10px] font-bold">
        SUN
      </text>

      {/* Panels */}
      <rect x="110" y="120" width="80" height="50" rx="6" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="150" y="148" textAnchor="middle" className="fill-ink font-display text-[11px] font-semibold">
        Solar Panels
      </text>

      {/* Inverter */}
      <rect x="100" y="235" width="100" height="50" rx="6" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="150" y="257" textAnchor="middle" className="fill-gold-400 font-display text-[10px] font-bold">
        EG4
      </text>
      <text x="150" y="272" textAnchor="middle" className="fill-ink font-display text-[10px] font-semibold">
        Inverter
      </text>

      {/* Battery */}
      <rect x="35" y="350" width="90" height="50" rx="6" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="80" y="372" textAnchor="middle" className="fill-gold-400 font-display text-[10px] font-bold">
        EG4
      </text>
      <text x="80" y="387" textAnchor="middle" className="fill-ink font-display text-[10px] font-semibold">
        Battery
      </text>

      {/* Home */}
      <rect x="175" y="350" width="90" height="50" rx="6" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="220" y="372" textAnchor="middle" className="fill-ink font-display text-[10px] font-semibold">
        Home +
      </text>
      <text x="220" y="387" textAnchor="middle" className="fill-ink font-display text-[10px] font-semibold">
        Mini-Split
      </text>

      {/* Labels */}
      <text x="150" y="475" textAnchor="middle" className="fill-muted text-[10px]">
        Make it. Store it. Live on it.™
      </text>

      {/* Animated dots */}
      {animated && (
        <>
          <FlowDot path={sunToPanels} duration={1.5} delay={0} />
          <FlowDot path={panelsToInverter} duration={1.5} delay={0.5} />
          <FlowDot path={inverterToBattery} duration={1.2} delay={1} />
          <FlowDot path={inverterToHome} duration={1.2} delay={1.2} />
        </>
      )}
    </svg>
  );
}

/* ---------- Desktop (horizontal) layout ---------- */
function DesktopFlow({ animated }: { animated: boolean }) {
  // Horizontal: Sun → Panels → Inverter → split to Battery(up) & Home(down)
  // Viewbox: 800 x 300
  const sunToPanels = "M95,150 L190,150";
  const panelsToInverter = "M310,150 L390,150";
  const inverterToBattery = "M510,150 L580,90";
  const inverterToHome = "M510,150 L580,210";

  return (
    <svg
      viewBox="0 0 800 300"
      className="mx-auto w-full max-w-[800px]"
      role="img"
      aria-label="Energy flow diagram: Sun to Solar Panels to EG4 Inverter, splitting to Battery and Home with Mini-Split AC"
    >
      <defs>
        <filter id="glow-d">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection lines */}
      <path d={sunToPanels} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />
      <path d={panelsToInverter} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />
      <path d={inverterToBattery} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />
      <path d={inverterToHome} stroke="#1D4ED8" strokeOpacity="0.55" strokeWidth="2" fill="none" />

      {/* Sun */}
      <circle cx="60" cy="150" r="30" fill="#D97706" opacity="0.2" />
      <circle cx="60" cy="150" r="20" fill="#F59E0B" />
      <text x="60" y="155" textAnchor="middle" className="fill-navy font-display text-[12px] font-bold">
        SUN
      </text>

      {/* Panels */}
      <rect x="190" y="120" width="120" height="60" rx="8" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="250" y="155" textAnchor="middle" className="fill-ink font-display text-[13px] font-semibold">
        Solar Panels
      </text>

      {/* Inverter */}
      <rect x="390" y="115" width="120" height="70" rx="8" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="450" y="145" textAnchor="middle" className="fill-gold-400 font-display text-[12px] font-bold">
        EG4
      </text>
      <text x="450" y="165" textAnchor="middle" className="fill-ink font-display text-[13px] font-semibold">
        Inverter
      </text>

      {/* Battery */}
      <rect x="580" y="55" width="140" height="60" rx="8" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="650" y="82" textAnchor="middle" className="fill-gold-400 font-display text-[12px] font-bold">
        EG4 Battery
      </text>
      <text x="650" y="100" textAnchor="middle" className="fill-ink font-display text-[12px] font-semibold">
        Store the Sun
      </text>

      {/* Home */}
      <rect x="580" y="185" width="140" height="60" rx="8" fill="#0C2040" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="650" y="212" textAnchor="middle" className="fill-ink font-display text-[12px] font-semibold">
        Home +
      </text>
      <text x="650" y="230" textAnchor="middle" className="fill-ink font-display text-[12px] font-semibold">
        Mini-Split AC
      </text>

      {/* Animated dots */}
      {animated && (
        <>
          <FlowDot path={sunToPanels} duration={1.5} delay={0} />
          <FlowDot path={panelsToInverter} duration={1.5} delay={0.5} />
          <FlowDot path={inverterToBattery} duration={1.2} delay={1} />
          <FlowDot path={inverterToHome} duration={1.2} delay={1.2} />
        </>
      )}
    </svg>
  );
}

export function EnergyFlowDiagram() {
  const prefersReduced = useReducedMotion();
  const animated = !prefersReduced;

  return (
    <div>
      {/* Mobile: vertical */}
      <div className="md:hidden">
        <MobileFlow animated={animated} />
      </div>
      {/* Desktop: horizontal */}
      <div className="hidden md:block">
        <DesktopFlow animated={animated} />
      </div>
    </div>
  );
}
