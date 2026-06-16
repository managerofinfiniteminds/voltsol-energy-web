'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export interface AddressParts {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface MapboxSuggestion {
  id: string;
  label: string; // full display label
  parts: AddressParts;
}

interface AddressAutocompleteProps {
  /** Current street address value (controlled). */
  value: string;
  /** Fired on every keystroke so the parent stays in sync (manual entry fallback). */
  onStreetChange: (street: string) => void;
  /** Fired when the user picks a suggestion — parent fills city/state/zip. */
  onSelect: (parts: AddressParts) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  inputName?: string;
  id?: string;
  autoFocus?: boolean;
}

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Map Mapbox v6 region full names → 2-letter code fallback when region_code missing.
function parseFeature(feature: Record<string, unknown>): MapboxSuggestion | null {
  const props = (feature?.properties ?? {}) as Record<string, unknown>;
  const ctx = (props?.context ?? {}) as Record<string, Record<string, unknown>>;

  // Street line: prefer the address number + street name.
  const addressNumber = (props?.address_number as string) ?? '';
  const street = (ctx?.address?.street_name as string) ?? (props?.name as string) ?? '';
  const streetLine =
    addressNumber && street ? `${addressNumber} ${street}` : ((props?.name as string) ?? '');

  const city =
    (ctx?.place?.name as string) ??
    (ctx?.locality?.name as string) ??
    '';
  const stateCode =
    (ctx?.region?.region_code as string) ??
    (ctx?.region?.name as string) ??
    '';
  const zip = (ctx?.postcode?.name as string) ?? '';

  const fullAddress =
    (props?.full_address as string) ?? (props?.place_formatted as string) ?? streetLine;

  if (!streetLine && !fullAddress) return null;

  return {
    id: (props?.mapbox_id as string) ?? fullAddress,
    label: fullAddress,
    parts: {
      street: streetLine || fullAddress,
      city,
      state: stateCode,
      zip,
    },
  };
}

export default function AddressAutocomplete({
  value,
  onStreetChange,
  onSelect,
  onBlur,
  placeholder = '123 Main St',
  className = '',
  inputName = 'street_address',
  id,
  autoFocus,
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<MapboxSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const justSelectedRef = useRef(false);

  const enabled = Boolean(TOKEN);

  const fetchSuggestions = useCallback(async (query: string) => {
    if (!TOKEN || query.trim().length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    try {
      const url =
        `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(query)}` +
        `&country=us&types=address&autocomplete=true&limit=5&access_token=${TOKEN}`;
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`Mapbox ${res.status}`);
      const data = await res.json();
      const features = Array.isArray(data?.features) ? data.features : [];
      const parsed = features
        .map((f: Record<string, unknown>) => parseFeature(f))
        .filter(Boolean) as MapboxSuggestion[];
      setSuggestions(parsed);
      setOpen(parsed.length > 0);
      setActiveIdx(-1);
    } catch (err) {
      if ((err as Error)?.name !== 'AbortError') {
        // Network/API failure → silently degrade to manual entry.
        setSuggestions([]);
        setOpen(false);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    onStreetChange(v);
    if (!enabled) return;
    justSelectedRef.current = false;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (!justSelectedRef.current) fetchSuggestions(v);
    }, 250);
  }

  function choose(s: MapboxSuggestion) {
    justSelectedRef.current = true;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    abortRef.current?.abort();
    onSelect(s.parts);
    setSuggestions([]);
    setOpen(false);
    setActiveIdx(-1);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === 'Enter') {
      if (activeIdx >= 0 && activeIdx < suggestions.length) {
        e.preventDefault();
        choose(suggestions[activeIdx]);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  // Close dropdown on outside click.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <input
        type="text"
        name={inputName}
        id={id}
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          // Delay so click on a suggestion still registers.
          setTimeout(() => onBlur?.(), 150);
        }}
        placeholder={placeholder}
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={open}
        role="combobox"
        autoFocus={autoFocus}
        className={className}
      />
      {open && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-slate-600 bg-slate-800 py-1 shadow-xl"
        >
          {suggestions.map((s, i) => (
            <li
              key={s.id}
              role="option"
              aria-selected={i === activeIdx}
              onMouseDown={(e) => {
                e.preventDefault();
                choose(s);
              }}
              onMouseEnter={() => setActiveIdx(i)}
              className={`cursor-pointer px-4 py-2.5 text-sm ${
                i === activeIdx ? 'bg-amber-400/15 text-white' : 'text-slate-200'
              }`}
            >
              {s.label}
            </li>
          ))}
          <li className="px-4 py-1 text-right text-[10px] uppercase tracking-wide text-slate-500">
            Powered by Mapbox
          </li>
        </ul>
      )}
      {loading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">…</div>
      )}
    </div>
  );
}
