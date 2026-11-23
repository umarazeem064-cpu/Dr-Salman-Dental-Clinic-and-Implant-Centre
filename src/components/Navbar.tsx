import { useState } from 'react';
import { Menu, Moon, Phone, Sun, X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { CURRENCIES, CurrencyCode, LanguageCode, TranslationBundle } from '../data/translations';

interface NavbarProps {
  t: TranslationBundle;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({
  t,
  language,
  onLanguageChange,
  currency,
  onCurrencyChange,
  isDark,
  onToggleTheme,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#treatments', label: t.nav.treatments },
    { href: '#dentists', label: t.nav.dentists },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#book', label: t.nav.book },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2.5 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:text-slate-100"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-700 text-white dark:bg-teal-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4.5 w-4.5"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 3C4.8 3 3 5.2 3 8c0 2.7 1.3 4.6 1.8 6.9.4 1.9.7 5.1 2.2 5.1 1.2 0 1.7-2.6 2.5-4.3.5-1.1 1.2-1.7 2.5-1.7s2 .6 2.5 1.7c.8 1.7 1.3 4.3 2.5 4.3 1.5 0 1.8-3.2 2.2-5.1C19.7 12.6 21 10.7 21 8c0-2.8-1.8-5-4-5-1.8 0-3 1-5 1s-3.2-1-5-1Z" />
            </svg>
          </span>
          <span className="font-display text-base font-semibold tracking-tight whitespace-nowrap sm:text-lg">
            {t.clinicShortName}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:text-slate-300 dark:hover:text-teal-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-1.5 sm:flex">
            <label htmlFor="lang-select" className="sr-only">
              Language
            </label>
            <select
              id="lang-select"
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
              className="h-9 cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-2 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 focus-visible:outline-2 focus-visible:outline-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="en">EN</option>
              <option value="ur">اردو</option>
              <option value="ar">العربية</option>
            </select>

            <label htmlFor="currency-select" className="sr-only">
              Currency
            </label>
            <select
              id="currency-select"
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="h-9 cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-2 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 focus-visible:outline-2 focus-visible:outline-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="hidden h-9 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-700 whitespace-nowrap transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-teal-700 xl:inline-flex dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Phone className="h-3.5 w-3.5 text-teal-700 dark:text-teal-400" />
            <span>{t.actions.callClinic}</span>
          </a>

          <a
            href={`${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
              'Assalam-o-Alaikum, I would like to inquire about a dental appointment at Dr Salman Dental Clinic.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 shrink-0 items-center gap-1.5 rounded-lg border border-emerald-700/25 bg-emerald-50 px-3 text-xs font-medium text-emerald-800 whitespace-nowrap transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-emerald-700 md:inline-flex dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/60"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>{t.actions.whatsappShort}</span>
          </a>

          <a
            href="#book"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-teal-700 px-4 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            {t.actions.bookVisit}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-200 pt-3 sm:hidden dark:border-slate-800">
            <select
              aria-label="Language"
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
              className="min-h-[44px] rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="en">English (EN)</option>
              <option value="ur">اردو (UR)</option>
              <option value="ar">العربية (AR)</option>
            </select>
            <select
              aria-label="Currency"
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="min-h-[44px] rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-800 dark:border-slate-700 dark:text-slate-100"
            >
              <Phone className="h-4 w-4 text-teal-700 dark:text-teal-400" />
              <span>{t.actions.callClinic}</span>
            </a>
            <a
              href={`${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                'Assalam-o-Alaikum, I would like to book an appointment at Dr Salman Dental Clinic.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-700 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.actions.whatsappShort}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
