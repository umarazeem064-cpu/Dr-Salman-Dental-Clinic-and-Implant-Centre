import { SMILE_CASES } from '../data/clinicData';
import { LanguageCode, TranslationBundle } from '../data/translations';
import { ClinicalImage } from './ClinicalImage';

interface SmileGallerySectionProps {
  t: TranslationBundle;
  language: LanguageCode;
}

export function SmileGallerySection({ t, language }: SmileGallerySectionProps) {
  return (
    <section
      id="gallery"
      className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20 dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
            {t.gallerySection.eyebrow}
          </p>
          <h2
            className="font-display mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
            style={{ textWrap: 'balance' }}
          >
            {t.gallerySection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.gallerySection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SMILE_CASES.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <ClinicalImage
                  src={item.image}
                  alt={item.procedure.en}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
                  {item.duration[language]}
                </p>
                <h3 className="font-display mt-1.5 text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {item.procedure[language]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.summary[language]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
