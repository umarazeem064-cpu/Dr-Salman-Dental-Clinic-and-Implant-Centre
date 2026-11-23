import { CalendarCheck, Clock, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TranslationBundle } from '../data/translations';
import { ClinicalImage } from './ClinicalImage';

interface HeroSectionProps {
  t: TranslationBundle;
}

export function HeroSection({ t }: HeroSectionProps) {
  const whatsappHeroLink = `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Assalam-o-Alaikum, I would like to book a dental appointment at Dr Salman Dental Clinic and Implant Centre.'
  )}`;

  return (
    <section
      id="home"
      className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
              {t.hero.trustLine}
            </p>

            <h1
              className="font-display mt-4 max-w-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50"
              style={{
                fontSize: 'clamp(2.15rem, 3.8vw, 3.4rem)',
                lineHeight: 1.12,
                textWrap: 'balance',
              }}
            >
              {t.hero.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#book"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                <CalendarCheck className="h-4 w-4" />
                <span>{t.actions.bookDentalAppointment}</span>
              </a>

              <a
                href={whatsappHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 whitespace-nowrap transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.actions.chatOnWhatsApp}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
              <ClinicalImage
                src={CLINIC_INFO.heroImage}
                alt="Sunlit modern dental operatory suite at Dr Salman Dental Clinic and Implant Centre in Buffer Zone, Karachi"
                className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-3 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-400" />
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                {t.hero.locationLabel}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {t.hero.addressShort}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-400" />
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                {t.reviewsSection.timingsTitle}
              </p>
              <p className="font-mono-tabular mt-1 text-sm text-slate-600 dark:text-slate-400">
                {t.hero.hoursShort}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-400" />
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                {t.dentistSection.highlightsTitle}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {t.hero.sterilizationShort}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
