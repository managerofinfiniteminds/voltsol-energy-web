'use client';

import { useState, useRef, useEffect } from 'react';

interface HintProps {
  text: string;
  children?: React.ReactNode;
}

export function Hint({ text, children }: HintProps) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible || !containerRef.current || !popoverRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    popoverRef.current.style.left = `${Math.max(0, rect.left - 8)}px`;
    popoverRef.current.style.top = `${rect.top - popoverRef.current.offsetHeight - 8}px`;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        popoverRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [visible]);

  return (
    <div className="relative inline">
      <div
        ref={containerRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => setVisible(!visible)}
        className="inline-flex cursor-help"
        title="Hint"
      >
        {children || (
          <span className="text-slate-400 hover:text-slate-200 transition">
            <span className="text-xs">ⓘ</span>
          </span>
        )}
      </div>

      {visible && (
        <div
          ref={popoverRef}
          className="fixed z-50 max-w-xs bg-slate-800 border border-slate-600 rounded-lg p-3 text-sm text-slate-200 pointer-events-auto shadow-lg"
        >
          {text}
          <div className="absolute bottom-[-4px] left-4 w-2 h-2 bg-slate-800 border-r border-b border-slate-600 transform rotate-45" />
        </div>
      )}
    </div>
  );
}
