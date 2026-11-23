import { ExternalLink, MapPin, Star } from 'lucide-react';
import { CLINIC_HOURS, CLINIC_INFO, PATIENT_REVIEWS } from '../data/clinicData';
import { LanguageCode, TranslationBundle } from '../data/translations';
import { ClinicalImage } from './ClinicalImage';

interface ReviewsAndLocationSectionProps {
  t: TranslationBundle;
  language: LanguageCode;
}

export function ReviewsAndLocationSection({ t, language }: ReviewsAndLocationSectionProps) {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${CLINIC_INFO.coordinates.lat},${CLINIC_INFO.coordinates.lng}&z=16&output=embed`;

  return (
    <section
      id="reviews"
      className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20 dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end dark:border-slate-800">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
              {t.reviewsSection.eyebrow}
            </p>
            <h2
              className="font-display mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              {t.reviewsSection.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-500" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4.5 w-4.5 fill-current" />
              ))}
            </div>
            <p className="font-mono-tabular text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t.reviewsSection.ratingSummary}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PATIENT_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  “{review.quote}”
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                <ClinicalImage
                  src={review.avatar}
                  alt={review.reviewerName}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {review.reviewerName}
                  </p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                    {review.treatment} · {review.dateLabel}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50">
              {t.reviewsSection.timingsTitle}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {CLINIC_INFO.addressFull}
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left text-sm rtl:text-right">
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {CLINIC_HOURS.map((row) => (
                    <tr key={row.day.en}>
                      <td className="py-2.5 font-medium text-slate-800 dark:text-slate-200">
                        {row.day[language]}
                      </td>
                      <td
                        className={`font-mono-tabular py-2.5 text-right rtl:text-left ${
                          row.open
                            ? 'text-slate-700 dark:text-slate-300'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white lg:col-span-7 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5 dark:border-slate-800">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-400" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {t.reviewsSection.mapTitle}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {CLINIC_INFO.nearbyLandmark}
                  </p>
                </div>
              </div>

              <a
                href={CLINIC_INFO.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-lg bg-teal-700 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                <span>{t.actions.getDirections}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="min-h-[320px] flex-1 bg-slate-100 dark:bg-slate-800">
              <iframe
                title="Dr Salman Dental Clinic and Implant Centre Google Map"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
