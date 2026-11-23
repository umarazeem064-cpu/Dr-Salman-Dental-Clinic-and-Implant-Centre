import { useEffect, useState } from 'react';

export function Preloader() {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFading(true), 320);
    const removeTimer = window.setTimeout(() => setRemoved(true), 750);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 transition-opacity duration-400 dark:bg-slate-950 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-700/20 bg-teal-700/10 text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 3C4.8 3 3 5.2 3 8c0 2.7 1.3 4.6 1.8 6.9.4 1.9.7 5.1 2.2 5.1 1.2 0 1.7-2.6 2.5-4.3.5-1.1 1.2-1.7 2.5-1.7s2 .6 2.5 1.7c.8 1.7 1.3 4.3 2.5 4.3 1.5 0 1.8-3.2 2.2-5.1C19.7 12.6 21 10.7 21 8c0-2.8-1.8-5-4-5-1.8 0-3 1-5 1s-3.2-1-5-1Z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-display text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Dr Salman Dental Clinic
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Buffer Zone · Karachi
          </p>
        </div>
      </div>
    </div>
  );
}
