import { useEffect, useState } from 'react';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { ReviewsAndLocationSection } from './components/ReviewsAndLocationSection';
import { SmileGallerySection } from './components/SmileGallerySection';
import { SpecialistSection } from './components/SpecialistSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { TREATMENTS } from './data/clinicData';
import { CurrencyCode, LanguageCode, TRANSLATIONS } from './data/translations';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('clinic-theme') === 'dark';
  });

  const [language, setLanguage] = useState<LanguageCode>('en');
  const [currency, setCurrency] = useState<CurrencyCode>('PKR');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(TREATMENTS[0].id);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('clinic-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('clinic-theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = language;
  }, [language, t.dir]);

  function handleSelectTreatmentForBooking(treatmentId: string) {
    setSelectedTreatmentId(treatmentId);
    const bookEl = document.getElementById('book');
    if (bookEl) {
      bookEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-150 dark:bg-slate-950 dark:text-slate-100">
      <Preloader />

      <Navbar
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      <main>
        <HeroSection t={t} />

        <TreatmentsSection
          t={t}
          language={language}
          currency={currency}
          onSelectTreatment={handleSelectTreatmentForBooking}
        />

        <SpecialistSection t={t} language={language} />

        <SmileGallerySection t={t} language={language} />

        <BookingSection
          t={t}
          language={language}
          currency={currency}
          selectedTreatmentId={selectedTreatmentId}
          onTreatmentChange={setSelectedTreatmentId}
        />

        <ReviewsAndLocationSection t={t} language={language} />
      </main>

      <Footer t={t} />
    </div>
  );
}
