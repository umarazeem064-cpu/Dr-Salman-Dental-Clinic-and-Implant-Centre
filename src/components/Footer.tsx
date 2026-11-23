import { useState } from 'react';
import { MapPin, MessageCircle, Phone, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TranslationBundle } from '../data/translations';

interface FooterProps {
  t: TranslationBundle;
}

export function Footer({ t }: FooterProps) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-white py-12 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
              {t.clinicFullName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {t.footer.quickLinks}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#treatments" className="hover:text-teal-700 dark:hover:text-teal-400">
                  {t.nav.treatments}
                </a>
              </li>
              <li>
                <a href="#dentists" className="hover:text-teal-700 dark:hover:text-teal-400">
                  {t.nav.dentists}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-teal-700 dark:hover:text-teal-400">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-700 dark:hover:text-teal-400">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-teal-700 dark:hover:text-teal-400">
                  {t.nav.book}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {t.footer.contactTitle}
            </p>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700 dark:text-teal-400" />
                <span>{CLINIC_INFO.addressFull}</span>
              </li>
              <li>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="font-mono-tabular inline-flex items-center gap-2 hover:text-teal-700 dark:hover:text-teal-400"
                >
                  <Phone className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                  <span>{CLINIC_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                    'Assalam-o-Alaikum, I would like to book a visit at Dr Salman Dental Clinic.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs sm:flex-row sm:items-center dark:border-slate-800">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="cursor-pointer font-medium text-slate-700 underline-offset-4 hover:underline dark:text-slate-300"
            >
              {t.actions.privacyPolicy}
            </button>
            <span aria-hidden="true">·</span>
            <span>{t.footer.credit}</span>
          </div>
        </div>
      </div>

      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
              <h3
                id="privacy-modal-title"
                className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50"
              >
                {t.actions.privacyPolicy} — {CLINIC_INFO.name}
              </h3>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label={t.actions.close}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Patient appointment details entered on this website (name, phone number, selected
                dental treatment, and preferred visit window) are used solely to prepare your
                WhatsApp booking message for Dr Salman Dental Clinic and Implant Centre.
              </p>
              <p>
                We do not sell, share, or store patient medical records on third-party advertising
                networks. Preferences such as light/dark theme are saved locally in your browser.
              </p>
              <p>
                For record inquiries or scheduling changes, please contact our clinic desk directly
                at {CLINIC_INFO.phoneDisplay}.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="min-h-[40px] cursor-pointer rounded-lg bg-teal-700 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-800 dark:bg-teal-600"
              >
                {t.actions.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
