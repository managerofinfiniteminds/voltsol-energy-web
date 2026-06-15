"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

/**
 * EN | ES language toggle. Writes the `lang` cookie (source of truth used
 * by middleware + getLocale on the server) and refreshes so server
 * components re-render in the chosen language. Reads the current cookie on
 * mount to highlight the active locale.
 */
export function LangToggle({ current }: { current?: "en" | "es" }) {
  const router = useRouter();
  const [active, setActive] = useState<"en" | "es">(current ?? "en");

  useEffect(() => {
    const m = document.cookie.match(/(?:^|;\s*)lang=(en|es)/);
    if (m) setActive(m[1] as "en" | "es");
  }, []);

  function setLang(lang: "en" | "es") {
    if (lang === active) return;
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    setActive(lang);
    router.refresh();
  }

  return (
    <div
      className="inline-flex items-center rounded-full border border-blue-900/60 bg-navy-700/40 p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={active === "en"}
        className={
          "rounded-full px-2.5 py-1 transition-colors " +
          (active === "en"
            ? "bg-gold text-navy"
            : "text-slate-300 hover:text-white")
        }
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={active === "es"}
        className={
          "rounded-full px-2.5 py-1 transition-colors " +
          (active === "es"
            ? "bg-gold text-navy"
            : "text-slate-300 hover:text-white")
        }
      >
        ES
      </button>
    </div>
  );
}
