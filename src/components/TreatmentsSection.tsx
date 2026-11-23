import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CATEGORY_FILTERS,
  TREATMENTS,
  TreatmentCategory,
} from '../data/clinicData';
import { CurrencyCode, formatFee, LanguageCode, TranslationBundle } from '../data/translations';
import { ClinicalImage } from './ClinicalImage';

interface TreatmentsSectionProps {
  t: TranslationBundle;
  language: LanguageCode;
  currency: CurrencyCode;
  onSelectTreatment: (treatmentId: string) => void;
}

export function TreatmentsSection({
  t,
  language,
  currency,
  onSelectTreatment,
}: TreatmentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="treatments"
      className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20 dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
            {t.treatmentsSection.eyebrow}
          </p>
          <h2
            className="font-display mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
            style={{ textWrap: 'balance' }}
          >
            {t.treatmentsSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.treatmentsSection.subtitle}
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filter dental treatments by specialty"
          className="mt-8 flex flex-wrap gap-2"
        >
          {CATEGORY_FILTERS.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[40px] cursor-pointer rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                  isSelected
                    ? 'bg-teal-700 text-white dark:bg-teal-600'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTreatments.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-transform duration-150 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <ClinicalImage
                  src={item.image}
                  alt={item.title.en}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{item.categoryLabel[language]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tabular">
                    {t.treatmentsSection.sessionLabel}: {item.duration[language]}
                  </span>
                </div>

                <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  {item.title[language]}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description[language]}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.treatmentsSection.startingFrom}
                    </p>
                    <p className="font-mono-tabular text-lg font-semibold text-slate-900 dark:text-slate-50">
                      {formatFee(item.startingFeePkr, currency)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTreatment(item.id)}
                    className="inline-flex min-h-[40px] shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500"
                  >
                    <span>{t.actions.bookThisTreatment}</span>
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
