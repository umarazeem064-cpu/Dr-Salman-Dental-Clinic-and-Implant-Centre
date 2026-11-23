import { LanguageCode } from './translations';

export const CLINIC_INFO = {
  name: 'Dr Salman Dental Clinic and Implant Centre',
  shortName: 'Dr. Salman Dental',
  phoneDisplay: '+92 345 2218393',
  phoneRaw: '+923452218393',
  whatsappNumber: '923452218393',
  whatsappBaseUrl: 'https://wa.me/923452218393',
  mapsShareUrl: 'https://maps.app.goo.gl/zYgH4NaLN7K6kgPw7',
  coordinates: { lat: 24.9527075, lng: 67.0688692 },
  googleRating: '4.9',
  googleReviewCount: '240+',
  addressFull: 'Shop No. 4, Ali Pride, Sector 16-A, Buffer Zone, North Nazimabad Town, Karachi, Pakistan',
  nearbyLandmark: 'Near Bukhari Centre & Opposite KMDC Gate #5, Block N',
  leadDentist: {
    name: 'Dr. Salman Zahid',
    credentials: 'BDS (Fatima Jinnah Dental College) · PMDC Verified',
    experience: '10+ Years Clinical Experience',
    image: '/src/assets/images/dentist_dr_salman_clean_1795422093598.jpg',
  },
  heroImage: '/src/assets/images/hero_dental_suite_1795422011078.jpg',
};

export type TreatmentCategory =
  | 'all'
  | 'preventive'
  | 'cosmetic'
  | 'orthodontics'
  | 'implants'
  | 'endodontics';

export interface TreatmentItem {
  id: string;
  category: Exclude<TreatmentCategory, 'all'>;
  categoryLabel: Record<LanguageCode, string>;
  title: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  duration: Record<LanguageCode, string>;
  startingFeePkr: number;
  image: string;
}

export const CATEGORY_FILTERS: Array<{
  id: TreatmentCategory;
  label: Record<LanguageCode, string>;
}> = [
  { id: 'all', label: { en: 'All Treatments', ur: 'تمام علاج', ar: 'جميع العلاجات' } },
  { id: 'preventive', label: { en: 'Preventive & Pediatric', ur: 'صفائی اور بچوں کا علاج', ar: 'الوقاية وطب الأطفال' } },
  { id: 'cosmetic', label: { en: 'Whitening & Smile', ur: 'وائٹننگ اور اسمائل', ar: 'التبييض والتجميل' } },
  { id: 'orthodontics', label: { en: 'Braces & Aligners', ur: 'بریسز اور الائنرز', ar: 'التقويم الشفاف' } },
  { id: 'implants', label: { en: 'Implants & Crowns', ur: 'امپلانٹس اور کراؤنز', ar: 'الزراعة والتركيبات' } },
  { id: 'endodontics', label: { en: 'Root Canal & Surgery', ur: 'روٹ کینال اور سرجری', ar: 'علاج العصب والجراحة' } },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'scaling-polishing',
    category: 'preventive',
    categoryLabel: {
      en: 'Preventive Hygiene',
      ur: 'بنیادی صفائی',
      ar: 'الوقاية والنظافة',
    },
    title: {
      en: 'Scaling & Polishing (Teeth Cleaning)',
      ur: 'اسکیلنگ اور پالشنگ (دانتوں کی صفائی)',
      ar: 'تنظيف الأسنان وإزالة الجير والتلميع',
    },
    description: {
      en: 'Gentle ultrasonic removal of hardened tartar, plaque, and tea/coffee stains followed by enamel-safe airflow polishing for healthier gums and fresh breath.',
      ur: 'الٹراسونک طریقے سے دانتوں کا میل، ٹارٹر اور داغوں کی نرمی سے صفائی اور پالشنگ تاکہ مسوڑھے صحت مند رہیں۔',
      ar: 'إزالة الجير والبلاك والتصبغات بالموجات فوق الصوتية بلطف مع تلميع الأسنان لحماية اللثة.',
    },
    duration: { en: '30 – 40 mins', ur: '30 – 40 منٹ', ar: '30 – 40 دقيقة' },
    startingFeePkr: 4500,
    image: '/src/assets/images/treatment_scaling_polishing_1795422011009.jpg',
  },
  {
    id: 'teeth-whitening',
    category: 'cosmetic',
    categoryLabel: {
      en: 'Cosmetic Dentistry',
      ur: 'کاسمیٹک ڈینٹسٹری',
      ar: 'تجميل الأسنان',
    },
    title: {
      en: 'Teeth Whitening & Smile Makeover',
      ur: 'ٹیتھ وائٹننگ اور اسمائل میک اوور',
      ar: 'تبييض الأسنان وتجميل الابتسامة',
    },
    description: {
      en: 'Desensitizing in-clinic LED whitening and composite or porcelain veneer smile design tailored to brighten natural shade safely without sensitivity.',
      ur: 'جدید ایل ای ڈی ٹیتھ وائٹننگ اور وینیرز کی مدد سے دانتوں کو بغیر حساسیت کے قدرتی سفیدی اور دلکش مسکراہٹ دیں۔',
      ar: 'تبييض الأسنان بالليزر الآمن وتصميم الابتسامة بالقشور التجميلية دون حساسية.',
    },
    duration: { en: '45 – 60 mins', ur: '45 – 60 منٹ', ar: '45 – 60 دقيقة' },
    startingFeePkr: 18000,
    image: '/src/assets/images/treatment_teeth_whitening_1795422010554.jpg',
  },
  {
    id: 'braces-aligners',
    category: 'orthodontics',
    categoryLabel: {
      en: 'Orthodontics',
      ur: 'آرتھوڈانٹکس',
      ar: 'تقويم الأسنان',
    },
    title: {
      en: 'Braces & Clear Aligners (Orthodontics)',
      ur: 'بریسز اور کلیئر الائنرز',
      ar: 'تقويم الأسنان المعدني والشفاف',
    },
    description: {
      en: 'Precision alignment using low-profile ceramic/metal braces or removable transparent aligners to correct crowding, gaps, and bite balance comfortably.',
      ur: 'ٹیڑھے میڑھے دانتوں اور خلا کو درست کرنے کے لیے جدید بریسز اور غیر مرئی کلیئر الائنرز کا مکمل علاج۔',
      ar: 'تصحيح اعوجاج الأسنان والفراغات باستخدام التقويم الشفاف القابل للإزالة أو التقويم التقليدي الدقيق.',
    },
    duration: { en: '45 min consult', ur: '45 منٹ مشورہ', ar: '45 دقيقة استشارة' },
    startingFeePkr: 65000,
    image: '/src/assets/images/treatment_braces_aligners_1795422094018.jpg',
  },
  {
    id: 'dental-implants',
    category: 'implants',
    categoryLabel: {
      en: 'Implantology & Prosthetics',
      ur: 'امپلانٹولوجی',
      ar: 'زراعة الأسنان',
    },
    title: {
      en: 'Dental Implants & Zirconia Crowns / Bridges',
      ur: 'ڈینٹل امپلانٹس اور زرکونیا کراؤنز',
      ar: 'زراعة الأسنان وتيجان الزيركون',
    },
    description: {
      en: 'Biocompatible titanium tooth-root implants paired with natural-translucency Zirconia crowns and bridges that restore full chewing strength.',
      ur: 'ٹوٹے یا نکلے ہوئے دانتوں کی جگہ قدرتی دانتوں جیسے مضبوط ٹائٹینیم امپلانٹس اور زرکونیا کراؤنز۔',
      ar: 'زراعة جذور التيتانيوم المتوافقة حيوياً مع تيجان الزيركون الطبيعية لاستعادة قوة المضغ.',
    },
    duration: { en: '60 – 90 mins', ur: '60 – 90 منٹ', ar: '60 – 90 دقيقة' },
    startingFeePkr: 55000,
    image: '/src/assets/images/treatment_dental_implants_1795422011431.jpg',
  },
  {
    id: 'root-canal',
    category: 'endodontics',
    categoryLabel: {
      en: 'Endodontics',
      ur: 'اینڈوڈانٹکس',
      ar: 'علاج الجذور',
    },
    title: {
      en: 'Painless Root Canal Treatment (RCT)',
      ur: 'بے درد روٹ کینال علاج (RCT)',
      ar: 'علاج عصب الأسنان بدون ألم',
    },
    description: {
      en: 'Single-visit rotary endodontic therapy with electronic apex measurement and buffered local anesthesia to relieve deep toothache and save natural teeth.',
      ur: 'جدید روٹری مشین اور بے درد سن کرنے کی دوا کے ساتھ روٹ کینال تاکہ قدرتی دانت کو محفوظ بنایا جا سکے۔',
      ar: 'علاج العصب بجهاز الروتاري الحديث والتخدير اللطيف في زيارة واحدة لإنقاذ السن الطبيعي.',
    },
    duration: { en: '45 – 60 mins', ur: '45 – 60 منٹ', ar: '45 – 60 دقيقة' },
    startingFeePkr: 12000,
    image: '/src/assets/images/treatment_root_canal_1795422010483.jpg',
  },
  {
    id: 'wisdom-pediatric',
    category: 'preventive',
    categoryLabel: {
      en: 'Oral Surgery & Kids Care',
      ur: 'اورل سرجری اور بچوں کے دانت',
      ar: 'الجراحة وطب أسنان الأطفال',
    },
    title: {
      en: 'Wisdom Tooth Extraction & Pediatric Dentistry',
      ur: 'عقل داڑھ نکالنا اور بچوں کا دانتوں کا علاج',
      ar: 'خلع ضرس العقل وطب أسنان الأطفال',
    },
    description: {
      en: 'Atraumatic impacted wisdom tooth removal alongside calm, child-friendly checkups, fluoride protection, and painless cavity fillings for young patients.',
      ur: 'عقل داڑھ کی محفوظ سرجری اور بچوں کے لیے دوستانہ ماحول میں کیویٹی فلنگ اور فلورائیڈ حفاظتی علاج۔',
      ar: 'خلع جراحي لطيف لضرس العقل المطمور إلى جانب فحوصات مريحة وحماية الفلورايد للأطفال.',
    },
    duration: { en: '30 – 50 mins', ur: '30 – 50 منٹ', ar: '30 – 50 دقيقة' },
    startingFeePkr: 6000,
    image: '/src/assets/images/treatment_wisdom_pediatric_1795422011246.jpg',
  },
];

export interface SmileCase {
  id: string;
  procedure: Record<LanguageCode, string>;
  duration: Record<LanguageCode, string>;
  summary: Record<LanguageCode, string>;
  image: string;
}

export const SMILE_CASES: SmileCase[] = [
  {
    id: 'case-1',
    procedure: {
      en: 'Composite Veneers & Ultrasonic Whitening',
      ur: 'کمپوزٹ وینیرز اور وائٹننگ',
      ar: 'القشور التجميلية وتبييض الأسنان',
    },
    duration: { en: '2 Clinical Visits', ur: '2 وزٹ', ar: 'زيارتان' },
    summary: {
      en: 'Closed front spacing and lifted deep enamel discoloration while preserving natural tooth structure.',
      ur: 'قدرتی دانتوں کو محفوظ رکھتے ہوئے سامنے کے دانتوں کا خلا اور رنگت درست کی گئی۔',
      ar: 'إغلاق الفراغات الأمامية وتفتيح لون المينا مع الحفاظ على بنية السن الطبيعية.',
    },
    image: '/src/assets/images/smile_gallery_1_1795422014555.jpg',
  },
  {
    id: 'case-2',
    procedure: {
      en: 'Clear Aligner Orthodontics',
      ur: 'کلیئر الائنر آرتھوڈانٹکس',
      ar: 'تقويم الأسنان الشفاف',
    },
    duration: { en: '8 Months Progress', ur: '8 ماہ کا علاج', ar: '8 أشهر' },
    summary: {
      en: 'Corrected upper arch crowding discreetly with removable aligner trays and final enamel contouring.',
      ur: 'شفاف الائنرز کے ذریعے بغیر تاروں کے اوپری دانتوں کی ترتیب درست کی گئی۔',
      ar: 'تصحيح تزاحم الأسنان العلوية بشكل غير مرئي باستخدام القوالب الشفافة.',
    },
    image: '/src/assets/images/smile_gallery_2_1795422010246.jpg',
  },
  {
    id: 'case-3',
    procedure: {
      en: 'Dental Implants & Zirconia Bridge',
      ur: 'ڈینٹل امپلانٹس اور زرکونیا برج',
      ar: 'زراعة الأسنان وجسر الزيركون',
    },
    duration: { en: 'Full Bite Restoration', ur: 'مکمل بحالی', ar: 'ترميم كامل' },
    summary: {
      en: 'Replaced missing posterior and anterior teeth with shade-matched Zirconia crowns for confident chewing.',
      ur: 'گمشدہ دانتوں کی جگہ قدرتی رنگت کے زرکونیا کراؤنز اور امپلانٹس لگائے گئے۔',
      ar: 'تعويض الأسنان المفقودة بزراعات وتيجان زيركون متطابقة اللون لراحة المضغ.',
    },
    image: '/src/assets/images/smile_gallery_3_1795422010410.jpg',
  },
];

export interface PatientReview {
  id: string;
  reviewerName: string;
  treatment: string;
  rating: number;
  dateLabel: string;
  quote: string;
  avatar: string;
}

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    reviewerName: 'Hamza Tariq',
    treatment: 'Wisdom Tooth & Scaling',
    rating: 5,
    dateLabel: 'Google Verified Review',
    quote:
      'Had my wisdom tooth extraction and scaling done by Dr. Salman. The clinic in Buffer Zone is spotless, instruments were opened from sealed autoclave pouches, and I felt almost zero pain during the injection.',
    avatar: '/src/assets/images/patient_avatar_1_1795422010621.jpg',
  },
  {
    id: 'rev-2',
    reviewerName: 'Ayesha Kamran',
    treatment: 'Root Canal & Zirconia Crown',
    rating: 5,
    dateLabel: 'Google Verified Review',
    quote:
      'I was terrified of root canal treatment after a bad experience elsewhere, but Dr. Salman explained the digital X-ray calmly and completed my RCT comfortably. My Zirconia crown looks completely natural.',
    avatar: '/src/assets/images/patient_avatar_2_1795422010343.jpg',
  },
  {
    id: 'rev-3',
    reviewerName: 'Farhan Mahmood',
    treatment: 'Dental Implant Consultation & Care',
    rating: 5,
    dateLabel: 'Google Verified Review',
    quote:
      'Very honest diagnosis and reasonable charges compared to other clinics in North Nazimabad. The staff accommodates evening appointments smoothly and follows up after surgery.',
    avatar: '/src/assets/images/patient_avatar_3_1795422010592.jpg',
  },
];

export const CLINIC_HOURS = [
  { day: { en: 'Monday', ur: 'پیر', ar: 'الإثنين' }, hours: '11:00 AM – 10:00 PM', open: true },
  { day: { en: 'Tuesday', ur: 'منگل', ar: 'الثلاثاء' }, hours: '11:00 AM – 10:00 PM', open: true },
  { day: { en: 'Wednesday', ur: 'بدھ', ar: 'الأربعاء' }, hours: '11:00 AM – 10:00 PM', open: true },
  { day: { en: 'Thursday', ur: 'جمعرات', ar: 'الخميس' }, hours: '11:00 AM – 10:00 PM', open: true },
  { day: { en: 'Friday', ur: 'جمعہ', ar: 'الجمعة' }, hours: '3:00 PM – 10:00 PM', open: true },
  { day: { en: 'Saturday', ur: 'ہفتہ', ar: 'السبت' }, hours: '11:00 AM – 10:00 PM', open: true },
  { day: { en: 'Sunday', ur: 'اتوار', ar: 'الأحد' }, hours: 'By Emergency Appointment', open: false },
];

export const STERILIZATION_PILLARS = [
  {
    id: 'autoclave',
    title: {
      en: '100% Class-B Autoclave Sterilization',
      ur: '100% کلاس بی آٹوکلیو جراثیم کشی',
      ar: 'تعقيم أوتوكلاف فئة B بنسبة 100%',
    },
    description: {
      en: 'Every instrument set is ultrasonically cleaned, sealed in individual indicator pouches, and sterilized under high-pressure steam prior to each visit.',
      ur: 'ہر آلہ الٹراسونک صفائی کے بعد سیل بند تھیلی میں آٹوکلیو کیا جاتا ہے اور مریض کے سامنے کھولا جاتا ہے۔',
      ar: 'يتم تنظيف كل أداة بالموجات فوق الصوتية وتغليفها وتعقيمها بالبخار عالي الضغط لكل مريض.',
    },
  },
  {
    id: 'anesthesia',
    title: {
      en: 'Painless Buffered Anesthesia Protocol',
      ur: 'بے درد جدید سن کرنے کا طریقہ کار',
      ar: 'بروتوكول تخدير لطيف بدون ألم',
    },
    description: {
      en: 'Topical numbing gel is applied before ultra-fine micro-needles and slow-delivery local anesthesia so sensitive procedures stay comfortable.',
      ur: 'انجیکشن سے پہلے ٹاپیکل نمنگ جیل لگایا جاتا ہے تاکہ علاج کے دوران کوئی تکلیف محسوس نہ ہو۔',
      ar: 'يُستخدم جل مخدر موضعي قبل التخدير الدقيق لضمان راحة تامة طوال الإجراء.',
    },
  },
  {
    id: 'xray',
    title: {
      en: 'Low-Dose Digital RVG X-Ray Safety',
      ur: 'کم شعاعوں والا ڈیجیٹل ایکسرے نظام',
      ar: 'أشعة رقمية منخفضة الجرعة',
    },
    description: {
      en: 'Instant chairside digital sensors reduce radiation exposure by up to 80% compared to conventional film while displaying clear diagnostics on screen.',
      ur: 'ڈیجیٹل سینسر روایتی ایکسرے کے مقابلے میں 80% تک کم تابکاری استعمال کرتے ہیں اور فوری نتیجہ دکھاتے ہیں۔',
      ar: 'تقلل المستشعرات الرقمية التعرض للإشعاع بنسبة تصل إلى 80% مع عرض فوري عالي الدقة.',
    },
  },
];
