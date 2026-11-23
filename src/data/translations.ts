export type LanguageCode = 'en' | 'ur' | 'ar';
export type CurrencyCode = 'PKR' | 'USD' | 'GBP' | 'AED';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromPkr: number;
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  PKR: { code: 'PKR', symbol: '₨', rateFromPkr: 1, label: 'PKR ₨' },
  USD: { code: 'USD', symbol: '$', rateFromPkr: 0.0036, label: 'USD $' },
  GBP: { code: 'GBP', symbol: '£', rateFromPkr: 0.0028, label: 'GBP £' },
  AED: { code: 'AED', symbol: 'د.إ', rateFromPkr: 0.0132, label: 'AED د.إ' },
};

export function formatFee(pkrAmount: number, currency: CurrencyCode): string {
  const cfg = CURRENCIES[currency];
  if (currency === 'PKR') {
    return `${cfg.symbol} ${pkrAmount.toLocaleString('en-US')}`;
  }
  const converted = Math.max(1, Math.round(pkrAmount * cfg.rateFromPkr));
  return `${cfg.symbol}${converted.toLocaleString('en-US')}`;
}

export interface TranslationBundle {
  dir: 'ltr' | 'rtl';
  clinicShortName: string;
  clinicFullName: string;
  nav: {
    home: string;
    treatments: string;
    dentists: string;
    gallery: string;
    reviews: string;
    book: string;
  };
  actions: {
    callClinic: string;
    whatsappShort: string;
    bookVisit: string;
    bookDentalAppointment: string;
    chatOnWhatsApp: string;
    bookThisTreatment: string;
    getDirections: string;
    sendWhatsAppBooking: string;
    close: string;
    privacyPolicy: string;
  };
  hero: {
    trustLine: string;
    headline: string;
    subheadline: string;
    locationLabel: string;
    addressShort: string;
    hoursShort: string;
    sterilizationShort: string;
  };
  treatmentsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    startingFrom: string;
    sessionLabel: string;
    allFilter: string;
  };
  dentistSection: {
    eyebrow: string;
    title: string;
    name: string;
    role: string;
    qualification: string;
    experience: string;
    bio: string;
    highlightsTitle: string;
  };
  gallerySection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  bookingSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    treatmentLabel: string;
    dateLabel: string;
    timeSlotLabel: string;
    urgencyLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitButton: string;
    modalTitle: string;
    modalSubtitle: string;
    modalSummaryHeading: string;
    confirmAnother: string;
    errors: {
      nameRequired: string;
      phoneInvalid: string;
      dateRequired: string;
    };
  };
  reviewsSection: {
    eyebrow: string;
    title: string;
    ratingSummary: string;
    timingsTitle: string;
    mapTitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    rights: string;
    credit: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationBundle> = {
  en: {
    dir: 'ltr',
    clinicShortName: 'Dr. Salman Dental',
    clinicFullName: 'Dr Salman Dental Clinic and Implant Centre',
    nav: {
      home: 'Home',
      treatments: 'Treatments',
      dentists: 'Dentists',
      gallery: 'Gallery',
      reviews: 'Reviews',
      book: 'Book',
    },
    actions: {
      callClinic: 'Call Clinic',
      whatsappShort: 'WhatsApp',
      bookVisit: 'Book Visit',
      bookDentalAppointment: 'Book Dental Appointment',
      chatOnWhatsApp: 'Chat on WhatsApp',
      bookThisTreatment: 'Book This Treatment',
      getDirections: 'Get Directions on Google Maps',
      sendWhatsAppBooking: 'Send Appointment on WhatsApp',
      close: 'Close',
      privacyPolicy: 'Privacy Policy',
    },
    hero: {
      trustLine: '4.9 ★ Google Rating (240+ Verified Reviews) · Buffer Zone, North Nazimabad, Karachi',
      headline: 'Gentle, Modern Dental Care & Implants in Buffer Zone, Karachi.',
      subheadline:
        'From painless root canals and ultrasonic scaling to Swiss-grade dental implants and clear aligners—experience calm, hygienic dentistry led by Dr. Salman Zahid.',
      locationLabel: 'Clinic Address',
      addressShort: 'Shop No. 4, Ali Pride, Sector 16-A, Buffer Zone, Karachi',
      hoursShort: 'Mon–Sat · 11:00 AM – 10:00 PM',
      sterilizationShort: 'Class-B Autoclave Sterilization',
    },
    treatmentsSection: {
      eyebrow: 'Clinical Services',
      title: 'Comprehensive Dental Treatments',
      subtitle:
        'Transparent treatment planning, gentle anesthesia protocols, and clear starting fees—automatically converted to your preferred currency.',
      startingFrom: 'Starting from',
      sessionLabel: 'Session',
      allFilter: 'All Treatments',
    },
    dentistSection: {
      eyebrow: 'Clinical Leadership & Hygiene',
      title: 'Meet Your Dental Specialist',
      name: 'Dr. Salman Zahid',
      role: 'Principal Dental Surgeon & Implantologist',
      qualification: 'BDS (Fatima Jinnah Dental College) · PMDC Verified Practitioner',
      experience: '10+ Years Clinical Experience',
      bio: 'Known across North Nazimabad and Buffer Zone for calm chairside communication and meticulous infection control, Dr. Salman Zahid takes time to explain every X-ray and treatment step before beginning care—ensuring anxious adults and children feel completely at ease.',
      highlightsTitle: 'Clinical Safety & Comfort Standards',
    },
    gallerySection: {
      eyebrow: 'Smile Transformations',
      title: 'Restored Confidence, Natural Aesthetics',
      subtitle:
        'Every smile plan is customized around natural tooth proportions, gum health, and lasting bite comfort.',
    },
    bookingSection: {
      eyebrow: 'Appointments',
      title: 'Schedule Your Clinic Visit',
      subtitle:
        'Select your preferred treatment, date, and time window. Instant confirmation with one-tap WhatsApp coordination directly with our reception desk.',
      nameLabel: 'Patient Full Name',
      namePlaceholder: 'e.g., Muhammad Bilal Siddiqui',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: 'e.g., +92 300 1234567',
      treatmentLabel: 'Select Dental Treatment',
      dateLabel: 'Preferred Date',
      timeSlotLabel: 'Preferred Time Slot',
      urgencyLabel: 'Symptoms / Comfort Level',
      notesLabel: 'Additional Notes (Optional)',
      notesPlaceholder: 'Share tooth sensitivity, preferred call time, or medical notes...',
      submitButton: 'Confirm Appointment Request',
      modalTitle: 'Appointment Request Ready',
      modalSubtitle:
        'Your visit summary has been prepared. Tap below to send it directly to our clinic WhatsApp desk for priority slot confirmation.',
      modalSummaryHeading: 'Visit Details',
      confirmAnother: 'Book Another Visit',
      errors: {
        nameRequired: 'Please enter the patient full name (at least 2 characters).',
        phoneInvalid: 'Please enter a valid phone or WhatsApp number (at least 10 digits).',
        dateRequired: 'Please select a preferred appointment date.',
      },
    },
    reviewsSection: {
      eyebrow: 'Verified Google Feedback & Visit Info',
      title: 'Trusted by Karachi Families',
      ratingSummary: '4.9 out of 5 stars based on 240+ Google Maps reviews',
      timingsTitle: 'Weekly Consultation Timings',
      mapTitle: 'Find Us in Buffer Zone, Karachi',
    },
    footer: {
      tagline:
        'Patient-first general, cosmetic, and implant dentistry serving Buffer Zone, North Nazimabad, and greater Karachi.',
      quickLinks: 'Clinic Navigation',
      contactTitle: 'Direct Contact & Location',
      rights: 'Dr Salman Dental Clinic and Implant Centre. All rights reserved.',
      credit: 'Patient Care Digital Platform · Karachi, Pakistan',
    },
  },
  ur: {
    dir: 'rtl',
    clinicShortName: 'ڈاکٹر سلمان ڈینٹل کلینک',
    clinicFullName: 'ڈاکٹر سلمان ڈینٹل کلینک اینڈ امپلانٹ سینٹر',
    nav: {
      home: 'ہوم',
      treatments: 'علاج',
      dentists: 'ڈاکٹر',
      gallery: 'گیلری',
      reviews: 'ریویوز',
      book: 'بکنگ',
    },
    actions: {
      callClinic: 'کال کریں',
      whatsappShort: 'واٹس ایپ',
      bookVisit: 'اپائنٹمنٹ بک کریں',
      bookDentalAppointment: 'ڈینٹل اپائنٹمنٹ بک کریں',
      chatOnWhatsApp: 'واٹس ایپ پر بات کریں',
      bookThisTreatment: 'یہ علاج بک کریں',
      getDirections: 'گوگل میپس پر راستہ دیکھیں',
      sendWhatsAppBooking: 'واٹس ایپ پر اپائنٹمنٹ بھیجیں',
      close: 'بند کریں',
      privacyPolicy: 'پرائیویسی پالیسی',
    },
    hero: {
      trustLine: '4.9 ★ گوگل ریٹنگ (240+ تصدیق شدہ ریویوز) · بفر زون، نارتھ ناظم آباد، کراچی',
      headline: 'بفر زون کراچی میں بے درد، جدید دانتوں کا علاج اور امپلانٹس۔',
      subheadline:
        'بے درد روٹ کینال اور الٹراسونک اسکیلنگ سے لے کر جدید ڈینٹل امپلانٹس اور کلیئر الائنرز تک — ڈاکٹر سلمان زاہد کی نگرانی میں پُرسکون اور محفوظ علاج حاصل کریں۔',
      locationLabel: 'کلینک کا پتہ',
      addressShort: 'دکان نمبر 4، علی پرائیڈ، سیکٹر 16-A، بفر زون، کراچی',
      hoursShort: 'پیر تا ہفتہ · صبح 11:00 تا رات 10:00',
      sterilizationShort: 'کلاس بی آٹوکلیو جراثیم کش نظام',
    },
    treatmentsSection: {
      eyebrow: 'کلینیکل سروسز',
      title: 'مکمل ڈینٹل علاج کی سہولیات',
      subtitle:
        'شفاف علاج کا منصوبہ، بے درد انستھیزیا اور واضح ابتدائی فیس — آپ کی منتخب کردہ کرنسی میں۔',
      startingFrom: 'ابتدائی فیس',
      sessionLabel: 'دورانیہ',
      allFilter: 'تمام علاج',
    },
    dentistSection: {
      eyebrow: 'ماہر معالج اور صفائی کے معیارات',
      title: 'اپنے ڈینٹل اسپیشلسٹ سے ملیں',
      name: 'ڈاکٹر سلمان زاہد',
      role: 'پرنسپل ڈینٹل سرجن اور امپلانٹولوجسٹ',
      qualification: 'بی ڈی ایس (فاطمہ جناح ڈینٹل کالج) · پی ایم ڈی سی تصدیق شدہ',
      experience: '10+ سال کا کلینیکل تجربہ',
      bio: 'نارتھ ناظم آباد اور بفر زون میں نرم گفتاری اور بہترین جراثیم کش اصولوں کے لیے معروف، ڈاکٹر سلمان زاہد علاج شروع کرنے سے پہلے ہر ایکسرے اور مرحلے کی مکمل وضاحت کرتے ہیں۔',
      highlightsTitle: 'کلینیکل حفاظت اور آرام کے معیارات',
    },
    gallerySection: {
      eyebrow: 'مسکراہٹوں کی تبدیلی',
      title: 'پراعتماد اور قدرتی مسکراہٹ',
      subtitle: 'ہر مسکراہٹ کا منصوبہ قدرتی دانتوں کے تناسب اور مسوڑھوں کی صحت کے مطابق بنایا جاتا ہے۔',
    },
    bookingSection: {
      eyebrow: 'اپائنٹمنٹس',
      title: 'اپنا کلینک وزٹ بک کریں',
      subtitle:
        'اپنا مطلوبہ علاج، تاریخ اور وقت منتخب کریں اور فوری طور پر واٹس ایپ کے ذریعے تصدیق حاصل کریں۔',
      nameLabel: 'مریض کا مکمل نام',
      namePlaceholder: 'مثال: محمد بلال صدیقی',
      phoneLabel: 'فون / واٹس ایپ نمبر',
      phonePlaceholder: '+92 300 1234567',
      treatmentLabel: 'علاج منتخب کریں',
      dateLabel: 'مطلوبہ تاریخ',
      timeSlotLabel: 'مطلوبہ وقت',
      urgencyLabel: 'علامات / تکلیف کی نوعیت',
      notesLabel: 'اضافی تفصیل (اختیاری)',
      notesPlaceholder: 'دانتوں کی حساسیت یا کال کے مناسب وقت کے بارے میں بتائیں...',
      submitButton: 'اپائنٹمنٹ کی درخواست جمع کریں',
      modalTitle: 'اپائنٹمنٹ کی تفصیل تیار ہے',
      modalSubtitle: 'ترجیحی وقت کی تصدیق کے لیے نیچے دیے گئے بٹن سے تفصیل کلینک کے واٹس ایپ پر بھیجیں۔',
      modalSummaryHeading: 'وزٹ کی تفصیلات',
      confirmAnother: 'نئی اپائنٹمنٹ بک کریں',
      errors: {
        nameRequired: 'براہ کرم مریض کا مکمل نام درج کریں۔',
        phoneInvalid: 'براہ کرم درست فون یا واٹس ایپ نمبر درج کریں۔',
        dateRequired: 'براہ کرم تاریخ منتخب کریں۔',
      },
    },
    reviewsSection: {
      eyebrow: 'مریضوں کی آراء اور اوقاتِ کار',
      title: 'کراچی کے خاندانوں کا اعتماد',
      ratingSummary: '240+ گوگل میپس ریویوز کی بنیاد پر 5 میں سے 4.9 اسٹار ریٹنگ',
      timingsTitle: 'ہفتہ وار کلینک اوقات',
      mapTitle: 'بفر زون کراچی میں ہمارا مقام',
    },
    footer: {
      tagline: 'بفر زون، نارتھ ناظم آباد اور کراچی بھر کے لیے معیاری جنرل، کاسمیٹک اور امپلانٹ ڈینٹسٹری۔',
      quickLinks: 'فوری لنکس',
      contactTitle: 'رابطہ اور پتہ',
      rights: 'ڈاکٹر سلمان ڈینٹل کلینک اینڈ امپلانٹ سینٹر۔ جملہ حقوق محفوظ ہیں۔',
      credit: 'پیشنٹ کیئر ڈیجیٹل پلیٹ فارم · کراچی، پاکستان',
    },
  },
  ar: {
    dir: 'rtl',
    clinicShortName: 'عيادة د. سلمان لطب الأسنان',
    clinicFullName: 'عيادة الدكتور سلمان لطب الأسنان وزراعة الأسنان',
    nav: {
      home: 'الرئيسية',
      treatments: 'العلاجات',
      dentists: 'الأطباء',
      gallery: 'المعرض',
      reviews: 'التقييمات',
      book: 'حجز موعد',
    },
    actions: {
      callClinic: 'اتصل بالعيادة',
      whatsappShort: 'واتساب',
      bookVisit: 'احجز زيارة',
      bookDentalAppointment: 'احجز موعد أسنان',
      chatOnWhatsApp: 'تحدث عبر واتساب',
      bookThisTreatment: 'احجز هذا العلاج',
      getDirections: 'الاتجاهات على خرائط جوجل',
      sendWhatsAppBooking: 'إرسال الموعد عبر واتساب',
      close: 'إغلاق',
      privacyPolicy: 'سياسة الخصوصية',
    },
    hero: {
      trustLine: 'تقييم جوجل 4.9 ★ (أكثر من 240 مراجعة موثقة) · بفر زون، نورث ناظم آباد، كراتشي',
      headline: 'رعاية أسنان لطيفة وحديثة وزراعة الأسنان في كراتشي.',
      subheadline:
        'من علاج العصب غير المؤلم وتنظيف الأسنان بالموجات فوق الصوتية إلى زراعة الأسنان والتقويم الشفاف بإشراف الدكتور سلمان زاهد.',
      locationLabel: 'عنوان العيادة',
      addressShort: 'محل رقم 4، علي برايد، قطاع 16-A، بفر زون، كراتشي',
      hoursShort: 'الإثنين–السبت · 11:00 صباحاً – 10:00 مساءً',
      sterilizationShort: 'تعقيم أوتوكلاف فئة B بالكامل',
    },
    treatmentsSection: {
      eyebrow: 'الخدمات السريرية',
      title: 'علاجات شاملة لصحة وجمال الأسنان',
      subtitle: 'خطة علاج واضحة، تخدير لطيف بدون ألم، وأسعار مبدئية شفافة بعملتك المفضلة.',
      startingFrom: 'يبدأ من',
      sessionLabel: 'المدة',
      allFilter: 'جميع العلاجات',
    },
    dentistSection: {
      eyebrow: 'القيادة الطبية والتعقيم',
      title: 'تعرّف على طبيب الأسنان المختص',
      name: 'د. سلمان زاهد',
      role: 'استشاري جراحة وزراعة الأسنان',
      qualification: 'بكالوريوس جراحة الأسنان · مسجل ومعتمد لدى PMDC',
      experience: 'أكثر من 10 سنوات خبرة سريرية',
      bio: 'يشتهر الدكتور سلمان زاهد في نورث ناظم آباد وبفر زون بأسلوبه الهادئ وحرصه على شرح كل صورة أشعة وخطوة علاجية قبل البدء، مع تطبيق أعلى معايير التعقيم.',
      highlightsTitle: 'معايير السلامة والراحة الطبية',
    },
    gallerySection: {
      eyebrow: 'نتائج الابتسامات',
      title: 'ثقة متجددة وجمال طبيعي',
      subtitle: 'نصمم كل خطة تجميل أو ترميم لتناسب ملامح الوجه الطبيعية وصحة اللثة.',
    },
    bookingSection: {
      eyebrow: 'المواعيد',
      title: 'احجز زيارتك للعيادة',
      subtitle: 'اختر العلاج والتاريخ والوقت المناسب، وأرسل تفاصيل الموعد مباشرة عبر واتساب لتأكيد الحجز.',
      nameLabel: 'الاسم الكامل للمريض',
      namePlaceholder: 'مثال: محمد بلال صديقي',
      phoneLabel: 'رقم الهاتف / واتساب',
      phonePlaceholder: '+92 300 1234567',
      treatmentLabel: 'اختر العلاج المطلوب',
      dateLabel: 'التاريخ المفضل',
      timeSlotLabel: 'الفترة الزمنية المفضلة',
      urgencyLabel: 'الأعراض / مستوى الألم',
      notesLabel: 'ملاحظات إضافية (اختياري)',
      notesPlaceholder: 'اذكر أي حساسية أو وقت مناسب للاتصال...',
      submitButton: 'تأكيد طلب الموعد',
      modalTitle: 'ملخص الموعد جاهز',
      modalSubtitle: 'اضغط أدناه لإرسال تفاصيل موعدك مباشرة إلى مكتب العيادة على واتساب.',
      modalSummaryHeading: 'تفاصيل الزيارة',
      confirmAnother: 'حجز موعد آخر',
      errors: {
        nameRequired: 'يرجى إدخال الاسم الكامل للمريض.',
        phoneInvalid: 'يرجى إدخال رقم هاتف أو واتساب صحيح.',
        dateRequired: 'يرجى اختيار تاريخ الموعد.',
      },
    },
    reviewsSection: {
      eyebrow: 'آراء المرضى وساعات العمل',
      title: 'موثوق من عائلات كراتشي',
      ratingSummary: 'تقييم 4.9 من 5 نجوم استناداً إلى أكثر من 240 مراجعة على خرائط جوجل',
      timingsTitle: 'ساعات العمل الأسبوعية',
      mapTitle: 'موقعنا في بفر زون، كراتشي',
    },
    footer: {
      tagline: 'طب الأسنان العام والتجميلي وزراعة الأسنان في خدمة بفر زون ونورث ناظم آباد وكراتشي.',
      quickLinks: 'روابط سريعة',
      contactTitle: 'التواصل والموقع',
      rights: 'عيادة الدكتور سلمان لطب الأسنان وزراعة الأسنان. جميع الحقوق محفوظة.',
      credit: 'منصة رعاية المرضى الرقمية · كراتشي، باكستان',
    },
  },
};
