import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, STERILIZATION_PILLARS } from '../data/clinicData';
import { LanguageCode, TranslationBundle } from '../data/translations';
import { ClinicalImage } from './ClinicalImage';

interface SpecialistSectionProps {
  t: TranslationBundle;
  language: LanguageCode;
}

export function SpecialistSection({ t, language }: SpecialistSectionProps) {
  return (
    <section
      id="dentists"
      className="border-b border-slate-200 bg-white py-16 lg:py-20 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
              <ClinicalImage
                src={CLINIC_INFO.leadDentist.image}
                alt="Dr. Salman Zahid, Lead Dental Surgeon at Dr Salman Dental Clinic and Implant Centre"
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
              {t.dentistSection.eyebrow}
            </p>
            <h2
              className="font-display mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              {t.dentistSection.title}
            </h2>

            <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50">
                {t.dentistSection.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-400">
                {t.dentistSection.role}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                  <span>{t.dentistSection.qualification}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                  <span>{t.dentistSection.experience}</span>
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {t.dentistSection.bio}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                {t.dentistSection.highlightsTitle}
              </h4>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {STERILIZATION_PILLARS.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <ShieldCheck className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                    <h5 className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {pillar.title[language]}
                    </h5>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {pillar.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
