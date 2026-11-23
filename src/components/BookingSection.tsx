import { FormEvent, useEffect, useState } from 'react';
import { CalendarCheck, CheckCircle2, MessageCircle, Phone, X } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { CurrencyCode, formatFee, LanguageCode, TranslationBundle } from '../data/translations';

interface BookingSectionProps {
  t: TranslationBundle;
  language: LanguageCode;
  currency: CurrencyCode;
  selectedTreatmentId: string;
  onTreatmentChange: (id: string) => void;
}

interface BookingPayload {
  fullName: string;
  phone: string;
  treatmentTitle: string;
  date: string;
  timeSlot: string;
  urgency: string;
  notes: string;
}

const TIME_SLOTS = [
  'Morning (11:00 AM – 2:00 PM)',
  'Afternoon (2:00 PM – 5:30 PM)',
  'Evening (5:30 PM – 9:30 PM)',
];

const URGENCY_LEVELS = [
  { id: 'routine', label: { en: 'Routine Checkup', ur: 'معمول کا معائنہ', ar: 'فحص دوري' } },
  { id: 'mild', label: { en: 'Mild Discomfort', ur: 'ہلکی تکلیف', ar: 'انزعاج خفيف' } },
  { id: 'urgent', label: { en: 'Urgent Toothache', ur: 'شدید دانت درد', ar: 'ألم أسنان عاجل' } },
];

export function BookingSection({
  t,
  language,
  currency,
  selectedTreatmentId,
  onTreatmentChange,
}: BookingSectionProps) {
  const todayIso = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(todayIso);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[2]);
  const [urgency, setUrgency] = useState(URGENCY_LEVELS[0].id);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; date?: string }>({});
  const [confirmedBooking, setConfirmedBooking] = useState<BookingPayload | null>(null);

  useEffect(() => {
    if (!selectedTreatmentId && TREATMENTS.length > 0) {
      onTreatmentChange(TREATMENTS[0].id);
    }
  }, [selectedTreatmentId, onTreatmentChange]);

  const activeTreatment =
    TREATMENTS.find((item) => item.id === selectedTreatmentId) ?? TREATMENTS[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors: { name?: string; phone?: string; date?: string } = {};

    if (fullName.trim().length < 2) {
      nextErrors.name = t.bookingSection.errors.nameRequired;
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = t.bookingSection.errors.phoneInvalid;
    }

    if (!date) {
      nextErrors.date = t.bookingSection.errors.dateRequired;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const urgencyObj = URGENCY_LEVELS.find((u) => u.id === urgency) ?? URGENCY_LEVELS[0];

    setConfirmedBooking({
      fullName: fullName.trim(),
      phone: phone.trim(),
      treatmentTitle: activeTreatment.title[language],
      date,
      timeSlot,
      urgency: urgencyObj.label[language],
      notes: notes.trim(),
    });
  }

  function buildWhatsAppUrl(booking: BookingPayload): string {
    const lines = [
      'Assalam-o-Alaikum, I would like to confirm an appointment at Dr Salman Dental Clinic and Implant Centre:',
      `Patient Name: ${booking.fullName}`,
      `Phone/WhatsApp: ${booking.phone}`,
      `Treatment: ${booking.treatmentTitle}`,
      `Preferred Date: ${booking.date}`,
      `Time Slot: ${booking.timeSlot}`,
      `Symptoms/Urgency: ${booking.urgency}`,
      booking.notes ? `Notes: ${booking.notes}` : '',
    ].filter(Boolean);

    return `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <section
      id="book"
      className="border-b border-slate-200 bg-white py-16 lg:py-20 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
              {t.bookingSection.eyebrow}
            </p>
            <h2
              className="font-display mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              {t.bookingSection.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t.bookingSection.subtitle}
            </p>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {t.treatmentsSection.startingFrom} ({activeTreatment.title[language]})
                </p>
                <p className="font-mono-tabular mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  {formatFee(activeTreatment.startingFeePkr, currency)}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  <Phone className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                  <span className="font-mono-tabular">{CLINIC_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                    'Assalam-o-Alaikum, I need dental consultation information.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-emerald-700/25 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/60"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.actions.chatOnWhatsApp}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    {t.bookingSection.nameLabel}
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder={t.bookingSection.namePlaceholder}
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-teal-500"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    {t.bookingSection.phoneLabel}
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder={t.bookingSection.phonePlaceholder}
                    className="font-mono-tabular mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-teal-500"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-treatment"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    {t.bookingSection.treatmentLabel}
                  </label>
                  <select
                    id="booking-treatment"
                    value={activeTreatment.id}
                    onChange={(e) => onTreatmentChange(e.target.value)}
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 focus:border-teal-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-teal-500"
                  >
                    {TREATMENTS.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title[language]} — {formatFee(item.startingFeePkr, currency)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    {t.bookingSection.dateLabel}
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={todayIso}
                    required
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
                    }}
                    className="font-mono-tabular mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 focus:border-teal-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-teal-500"
                  />
                  {errors.date && (
                    <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-slot"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    {t.bookingSection.timeSlotLabel}
                  </label>
                  <select
                    id="booking-slot"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 focus:border-teal-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-teal-500"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                    {t.bookingSection.urgencyLabel}
                  </span>
                  <div className="mt-2 grid gap-2 sm:grid-cols-3">
                    {URGENCY_LEVELS.map((level) => {
                      const active = urgency === level.id;
                      return (
                        <button
                          key={level.id}
                          type="button"
                          onClick={() => setUrgency(level.id)}
                          className={`min-h-[42px] cursor-pointer rounded-lg border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-teal-700 ${
                            active
                              ? 'border-teal-700 bg-teal-700 text-white dark:border-teal-500 dark:bg-teal-600'
                              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800'
                          }`}
                        >
                          {level.label[language]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-notes"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    {t.bookingSection.notesLabel}
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.bookingSection.notesPlaceholder}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500"
                >
                  <CalendarCheck className="h-4.5 w-4.5" />
                  <span>{t.bookingSection.submitButton}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {confirmedBooking && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <h3
                    id="booking-modal-title"
                    className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50"
                  >
                    {t.bookingSection.modalTitle}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                aria-label={t.actions.close}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.bookingSection.modalSubtitle}
            </p>

            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {t.bookingSection.modalSummaryHeading}
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{t.bookingSection.nameLabel}</dt>
                  <dd className="font-medium text-slate-900 dark:text-slate-100">
                    {confirmedBooking.fullName}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{t.bookingSection.phoneLabel}</dt>
                  <dd className="font-mono-tabular font-medium text-slate-900 dark:text-slate-100">
                    {confirmedBooking.phone}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{t.bookingSection.treatmentLabel}</dt>
                  <dd className="text-right font-medium text-slate-900 dark:text-slate-100">
                    {confirmedBooking.treatmentTitle}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{t.bookingSection.dateLabel}</dt>
                  <dd className="font-mono-tabular font-medium text-slate-900 dark:text-slate-100">
                    {confirmedBooking.date}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{t.bookingSection.timeSlotLabel}</dt>
                  <dd className="text-right font-medium text-slate-900 dark:text-slate-100">
                    {confirmedBooking.timeSlot}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{t.bookingSection.urgencyLabel}</dt>
                  <dd className="font-medium text-slate-900 dark:text-slate-100">
                    {confirmedBooking.urgency}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.actions.sendWhatsAppBooking}</span>
              </a>

              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t.bookingSection.confirmAnother}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
