export type LanguageCode = "bn" | "en" | "ar" | "ru" | "ja" | "zh";

export interface Translations {
  siteName: string;
  tagline: string;
  secondaryTagline: string;
  heroDescription: string;
  ctaCreate: string;
  ctaTellUs: string;
  ctaTalkToUs: string;
  ctaWhatsApp: string;
  searchPlaceholder: string;
  searchAria: string;
  searchSuggestions: string;
  noResults: string;
  cantFind: string;
  cantFindDesc: string;
  requestCustom: string;
  
  // Navigation
  navEducation: string;
  navBusiness: string;
  navProfessional: string;
  navCustom: string;
  navHowItWorks: string;
  navPricing: string;
  navAbout: string;
  navContact: string;
  navDashboard: string;
  navAdmin: string;
  navLogin: string;
  navRegister: string;
  navLogout: string;
  
  // Categories
  catEducationTitle: string;
  catEducationDesc: string;
  catBusinessTitle: string;
  catBusinessDesc: string;
  catProfessionalTitle: string;
  catProfessionalDesc: string;
  catCustomTitle: string;
  catCustomDesc: string;

  // Education Levels
  levelPrePrimary: string;
  levelPrimary: string;
  levelSecondary: string;
  levelCollege: string;
  levelUniversity: string;
  levelTechnical: string;
  levelMadrasa: string;
  levelAlia: string;
  levelQawmi: string;

  // Sections
  howItWorksTitle: string;
  howItWorksStep1: string;
  howItWorksStep1Desc: string;
  howItWorksStep2: string;
  howItWorksStep2Desc: string;
  howItWorksStep3: string;
  howItWorksStep3Desc: string;
  howItWorksStep4: string;
  howItWorksStep4Desc: string;
  howItWorksStep5: string;
  howItWorksStep5Desc: string;

  teachersTitle: string;
  teachersSubtitle: string;
  teachersCta: string;

  studentsTitle: string;
  studentsSubtitle: string;
  studentsCta: string;

  businessTitle: string;
  businessSubtitle: string;
  businessCta: string;

  whyChooseUsTitle: string;
  whyCard1Title: string;
  whyCard1Desc: string;
  whyCard2Title: string;
  whyCard2Desc: string;
  whyCard3Title: string;
  whyCard3Desc: string;
  whyCard4Title: string;
  whyCard4Desc: string;

  finalCtaTitle: string;
  finalCtaDesc: string;

  // Order Wizard
  orderTitle: string;
  stepCategory: string;
  stepContext: string;
  stepSubject: string;
  stepTopic: string;
  stepPurpose: string;
  stepSlides: string;
  stepLanguage: string;
  stepDesign: string;
  stepRequirements: string;
  stepReferences: string;
  stepFeatures: string;
  stepContact: string;
  stepReview: string;

  btnNext: string;
  btnBack: string;
  btnSubmitOrder: string;
  orderReceivedTitle: string;
  orderReceivedDesc: string;
  yourOrderId: string;
  viewOrder: string;
  orderSummary: string;
  
  // Dashboard & Admin
  overview: string;
  activeOrders: string;
  completedOrders: string;
  pendingPayments: string;
  revisionRequests: string;
  status: string;
  deadline: string;
  price: string;
  actions: string;
}

export const translations: Record<LanguageCode, Translations> = {
  bn: {
    siteName: "Make Your Presentation",
    tagline: "আপনার বিষয়। আমাদের প্রেজেন্টেশন।",
    secondaryTagline: "আপনার বিষয়। আমাদের প্রেজেন্টেশন।",
    heroDescription:
      "শ্রেণিকক্ষ, পরীক্ষা বা মিটিংয়ের জন্য মানসম্মত ও আকর্ষণীয় স্লাইড।",
    ctaCreate: "অর্ডার করুন",
    ctaTellUs: "কাস্টম রিকোয়েস্ট",
    ctaTalkToUs: "কথা বলুন",
    ctaWhatsApp: "হোয়াটসঅ্যাপ",
    searchPlaceholder: "কী বিষয়ের প্রেজেন্টেশন চান? (যেমন: Class 8 Science, Photosynthesis, Pitch Deck...)",
    searchAria: "সার্চ",
    searchSuggestions: "জনপ্রিয় টপিক",
    noResults: "কোন ফলাফল পাওয়া যায়নি",
    cantFind: "কাঙ্ক্ষিত বিষয়টি পাচ্ছেন না?",
    cantFindDesc: "আমাদের জানান, আমাদের টিম আপনার বিষয় অনুযায়ী স্লাইড তৈরি করবে।",
    requestCustom: "কাস্টম প্রেজেন্টেশন চান",

    navEducation: "শিক্ষা",
    navBusiness: "ব্যবসা",
    navProfessional: "প্রফেশনাল",
    navCustom: "কাস্টম",
    navHowItWorks: "কীভাবে কাজ করে",
    navPricing: "মূল্যতালিকা",
    navAbout: "সম্পর্কে",
    navContact: "যোগাযোগ",
    navDashboard: "ড্যাশবোর্ড",
    navAdmin: "অ্যাডমিন",
    navLogin: "লগইন",
    navRegister: "রেজিস্টার",
    navLogout: "লগআউট",

    catEducationTitle: "শিক্ষা ক্যাটাগরি",
    catEducationDesc: "স্কুল, কলেজ, বিশ্ববিদ্যালয় ও মাদ্রাসার পাঠ্যক্রম অনুযায়ী স্লাইড।",
    catBusinessTitle: "ব্যবসা ও স্টার্টআপ",
    catBusinessDesc: "পিচ ডেক, বিজনেস প্ল্যান ও মার্কেটিং প্রেজেন্টেশন।",
    catProfessionalTitle: "প্রফেশনাল ও গবেষক",
    catProfessionalDesc: "থিসিস ডিফেন্স, সেমিনার ও ট্রেনিং স্লাইড।",
    catCustomTitle: "কাস্টম রিকোয়েস্ট",
    catCustomDesc: "যেকোনো নির্দিষ্ট বিষয়ের বিশেষায়িত প্রেজেন্টেশন।",

    levelPrePrimary: "প্রাক-প্রাথমিক / নার্সারি",
    levelPrimary: "প্রাথমিক (১ম - ৫ম)",
    levelSecondary: "মাধ্যমিক (৬ষ্ঠ - ১০ম)",
    levelCollege: "উচ্চ মাধ্যমিক (১১শ -১২শ)",
    levelUniversity: "বিশ্ববিদ্যালয় ও উচ্চশিক্ষা",
    levelTechnical: "কারিগরি ও ভোকেশনাল",
    levelMadrasa: "মাদ্রাসা শিক্ষা",
    levelAlia: "আলিয়া মাদ্রাসা",
    levelQawmi: "কওমি মাদ্রাসা",

    howItWorksTitle: "সহজ ৫ ধাপে আপনার প্রেজেন্টেশন",
    howItWorksStep1: "০১. নির্বাচন",
    howItWorksStep1Desc: "লেভেল বা বিষয় বেছে নিন।",
    howItWorksStep2: "০২. বিবরণ",
    howItWorksStep2Desc: "স্লাইড সংখ্যা ও রেফারেন্স দিন।",
    howItWorksStep3: "০৩. ডিজাইন",
    howItWorksStep3Desc: "অভিজ্ঞ টিম স্লাইড তৈরি করবে।",
    howItWorksStep4: "০৪. রিভিউ",
    howItWorksStep4Desc: "প্রিভিউ দেখে সংশোধন জানান।",
    howItWorksStep5: "০৫. ডেলিভারি",
    howItWorksStep5Desc: "PPTX ও PDF ফাইল বুঝে নিন।",

    teachersTitle: "শিক্ষকদের পাঠদান হোক আরও প্রাণবন্ত",
    teachersSubtitle: "লেকচার স্লাইড, ডায়াগ্রাম ও কুইজ উপাদান।",
    teachersCta: "অর্ডার করুন",

    studentsTitle: "কনফিডেন্সের সাথে প্রেজেন্ট করুন",
    studentsSubtitle: "অ্যাসাইনমেন্ট ও থিসিস ডিফেন্স স্লাইড।",
    studentsCta: "অর্ডার করুন",

    businessTitle: "ব্যবসাকে দিন শক্তিশালী রূপ",
    businessSubtitle: "পিচ ডেক, বিজনেস প্ল্যান ও স্ট্র্যাটেজি।",
    businessCta: "অর্ডার করুন",

    whyChooseUsTitle: "কেন Make Your Presentation?",
    whyCard1Title: "সিলেবাস অ্যাকুরেসি",
    whyCard1Desc: "সঠিক পাঠ্যক্রম ও তথ্যের সমন্বয়।",
    whyCard2Title: "প্রফেশনাল ডিজাইন",
    whyCard2Desc: "আন্তর্জাতিক মানের পরিষ্কার ভিজ্যুয়াল।",
    whyCard3Title: "বহুভাষিক পারদর্শিতা",
    whyCard3Desc: "বাংলা, ইংরেজি ও নির্ভুল হরকতের আরবি।",
    whyCard4Title: "দ্রুত ডেলিভারি ও রিভিশন",
    whyCard4Desc: "সময়মতো ডেলিভারি ও রিভিশন সুবিধা।",

    finalCtaTitle: "আপনার প্রেজেন্টেশন শুরু করতে প্রস্তুত?",
    finalCtaDesc: "বিষয় জানান, বাকি কাজ আমাদের।",

    orderTitle: "প্রেজেন্টেশন অর্ডার বিল্ডার",
    stepCategory: "ক্যাটাগরি",
    stepContext: "শিক্ষা স্তর / সেক্টর",
    stepSubject: "বিষয় / কোর্স",
    stepTopic: "অধ্যায় / টপিক",
    stepPurpose: "ব্যবহারের উদ্দেশ্য",
    stepSlides: "স্লাইড সংখ্যা",
    stepLanguage: "ভাষা",
    stepDesign: "ডিজাইন স্টাইল",
    stepRequirements: "বিস্তারিত নির্দেশনা",
    stepReferences: "রেফারেন্স ফাইল",
    stepFeatures: "বিশেষ ফিচারসমূহ",
    stepContact: "যোগাযোগের তথ্য",
    stepReview: "পর্যালোচনা ও সাবমিট",

    btnNext: "পরবর্তী ধাপ",
    btnBack: "পূর্ববর্তী",
    btnSubmitOrder: "প্রেজেন্টেশন রিকোয়েস্ট সাবমিট করুন",
    orderReceivedTitle: "আপনার প্রেজেন্টেশন অনুরোধ সফলভাবে গৃহীত হয়েছে!",
    orderReceivedDesc: "আমাদের টিম দ্রুত আপনার রিকোয়েস্ট পর্যালোচনা করে হোয়াটসঅ্যাপ অথবা ইমেইলে যোগাযোগ করবে।",
    yourOrderId: "অর্ডার আইডি",
    viewOrder: "অর্ডার বিস্তারিত দেখুন",
    orderSummary: "অর্ডার সারসংক্ষেপ",

    overview: "সংক্ষিপ্ত চিত্র",
    activeOrders: "চলমান অর্ডার",
    completedOrders: "সম্পূর্ণ অর্ডার",
    pendingPayments: "অপেক্ষমান পেমেন্ট",
    revisionRequests: "সংশোধন অনুরোধ",
    status: "অবস্থা",
    deadline: "ডেডলাইন",
    price: "মূল্য",
    actions: "পদক্ষেপ",
  },
  en: {
    siteName: "Make Your Presentation",
    tagline: "Your Topic. Our Presentation.",
    secondaryTagline: "Create Better Presentations. Teach Better. Present Better.",
    heroDescription:
      "From classroom lessons to university research, business strategy to professional training—we turn your ideas into clear, engaging and professionally designed presentations.",
    ctaCreate: "Create Your Presentation",
    ctaTellUs: "Tell Us What You Need",
    ctaTalkToUs: "Talk to Us",
    ctaWhatsApp: "Chat on WhatsApp",
    searchPlaceholder: "What presentation are you looking for? (e.g., Class 8 Science, Photosynthesis, Marketing Plan...)",
    searchAria: "Search presentations",
    searchSuggestions: "Popular searches",
    noResults: "No presentations found matching your search",
    cantFind: "Can't find what you're looking for?",
    cantFindDesc: "No problem. Tell us what you need and our expert team will craft a custom presentation around your exact requirements.",
    requestCustom: "Request a Custom Presentation",

    navEducation: "Education",
    navBusiness: "Business & Startups",
    navProfessional: "Professional & Research",
    navCustom: "Custom Request",
    navHowItWorks: "How It Works",
    navPricing: "Pricing",
    navAbout: "About Us",
    navContact: "Contact",
    navDashboard: "Dashboard",
    navAdmin: "Admin",
    navLogin: "Login",
    navRegister: "Register",
    navLogout: "Logout",

    catEducationTitle: "Education & Academics",
    catEducationDesc: "Structured slides for pre-primary, school, college, university, and madrasa curricula.",
    catBusinessTitle: "Business & Startups",
    catBusinessDesc: "Pitch decks, business plans, marketing proposals, and corporate quarterly reviews.",
    catProfessionalTitle: "Professional & Research",
    catProfessionalDesc: "Thesis defense, academic conferences, workshops, and corporate training slides.",
    catCustomTitle: "Custom Presentation",
    catCustomDesc: "Bespoke presentations crafted for any unique topic, format, and specification.",

    levelPrePrimary: "General / Pre-Primary",
    levelPrimary: "Primary School (Class 1–5)",
    levelSecondary: "Secondary / High School (Class 6–10)",
    levelCollege: "Higher Secondary / College (Class 11–12)",
    levelUniversity: "University & Higher Education",
    levelTechnical: "Technical & Vocational",
    levelMadrasa: "Madrasa Education",
    levelAlia: "Alia Madrasa (Ibtedayi to Kamil)",
    levelQawmi: "Qawmi Madrasa (Noorani to Takhassus)",

    howItWorksTitle: "How It Works in 5 Simple Steps",
    howItWorksStep1: "01 — Choose",
    howItWorksStep1Desc: "Select your category, academic level, or business service.",
    howItWorksStep2: "02 — Tell Us",
    howItWorksStep2Desc: "Specify your topic, slide count, language, and guidelines.",
    howItWorksStep3: "03 — We Create",
    howItWorksStep3Desc: "Our expert team structures, researches, and crafts the design.",
    howItWorksStep4: "04 — Review",
    howItWorksStep4Desc: "Inspect the preview and easily request revisions if needed.",
    howItWorksStep5: "05 — Receive",
    howItWorksStep5Desc: "Download your final PPTX, PDF, and source presentation files.",

    teachersTitle: "Make Every Lesson More Engaging",
    teachersSubtitle: "Lecture slides, diagrams, visual breakdowns, quizzes, and lesson summaries for teachers.",
    teachersCta: "Create My Class Presentation",

    studentsTitle: "Present With Confidence",
    studentsSubtitle: "Assignments, thesis defense, seminars, projects, and viva presentation decks.",
    studentsCta: "Create My Presentation",

    businessTitle: "Turn Your Business Ideas Into Powerful Presentations",
    businessSubtitle: "Pitch decks, business proposals, sales pitches, and strategic roadmaps.",
    businessCta: "Build My Business Presentation",

    whyChooseUsTitle: "Why Choose Make Your Presentation?",
    whyCard1Title: "Subject-Specific Depth",
    whyCard1Desc: "Crafted with curriculum accuracy and academic integrity, not just decorative templates.",
    whyCard2Title: "Professional & Modern Design",
    whyCard2Desc: "Clean typography, custom diagrams, informative charts, and visual storytelling.",
    whyCard3Title: "Multilingual Precision",
    whyCard3Desc: "Native fluency in Bangla, English, Arabic, and multiple international languages.",
    whyCard4Title: "Fast Turnaround & Revisions",
    whyCard4Desc: "Timely delivery with dedicated revision support to ensure total satisfaction.",

    finalCtaTitle: "Ready to turn your topic into a presentation?",
    finalCtaDesc: "Provide your topic, and leave the presentation design to our specialists.",

    orderTitle: "Presentation Order Wizard",
    stepCategory: "Category",
    stepContext: "Education Level / Sector",
    stepSubject: "Subject / Course",
    stepTopic: "Chapter / Topic",
    stepPurpose: "Presentation Purpose",
    stepSlides: "Slide Count",
    stepLanguage: "Language",
    stepDesign: "Design Style",
    stepRequirements: "Content Requirements",
    stepReferences: "Reference Files",
    stepFeatures: "Additional Features",
    stepContact: "Customer Details",
    stepReview: "Review & Submit",

    btnNext: "Continue",
    btnBack: "Back",
    btnSubmitOrder: "Submit Presentation Request",
    orderReceivedTitle: "Your presentation request has been received!",
    orderReceivedDesc: "Our team is reviewing your requirements and will reach out promptly via WhatsApp or email.",
    yourOrderId: "Order ID",
    viewOrder: "View Order Details",
    orderSummary: "Order Summary",

    overview: "Overview",
    activeOrders: "Active Orders",
    completedOrders: "Completed Orders",
    pendingPayments: "Pending Payments",
    revisionRequests: "Revision Requests",
    status: "Status",
    deadline: "Deadline",
    price: "Price",
    actions: "Actions",
  },
  ar: {
    siteName: "Make Your Presentation",
    tagline: "موضوعك. عرضنا التقديمي.",
    secondaryTagline: "أنشئ عروضاً أفضل. علّم بفعالية. قدّم بثقة.",
    heroDescription:
      "من الدروس المدرسية إلى الأبحاث الجامعية، ومن خطط الأعمال إلى التدريب المهني—نحوّل أفكارك إلى عروض تقديمية واضحة وجذابة ومصممة باحترافية.",
    ctaCreate: "إنشاء العرض التقديمي",
    ctaTellUs: "أخبرنا باحتياجاتك",
    ctaTalkToUs: "تحدث معنا",
    ctaWhatsApp: "مراسلة عبر واتساب",
    searchPlaceholder: "عن أي عرض تبحث؟ (مثال: علوم، فيزياء، خطة تسويق، حديث...)",
    searchAria: "بحث في العروض التقديمية",
    searchSuggestions: "البحث الشائع",
    noResults: "لم يتم العثور على نتائج",
    cantFind: "ألا تجد ما تبحث عنه؟",
    cantFindDesc: "لا تقلق! أخبرنا بموضوعك وسيقوم فريقنا بإعداد عرض تقديمي مخصص ومتقن حسب متطلباتك بدقة.",
    requestCustom: "طلب عرض تقديمي مخصص",

    navEducation: "التعليم",
    navBusiness: "الأعمال والشركات",
    navProfessional: "الأكاديمي والمهني",
    navCustom: "طلب مخصص",
    navHowItWorks: "كيف يعمل",
    navPricing: "الأسعار",
    navAbout: "عن المنصة",
    navContact: "اتصل بنا",
    navDashboard: "لوحة التحكم",
    navAdmin: "لوحة الإدارة",
    navLogin: "تسجيل الدخول",
    navRegister: "إنشاء حساب",
    navLogout: "تسجيل الخروج",

    catEducationTitle: "التعليم والمناهج",
    catEducationDesc: "عروض مخصصة لجميع المراحل المدرسية والجامعية والمدارس الإسلامية.",
    catBusinessTitle: "الأعمال والشركات",
    catBusinessDesc: "عروض استثمارية، خطط تسويقية، وتقارير تنفيذية للشركات والرواد.",
    catProfessionalTitle: "المهني والبحثي",
    catProfessionalDesc: "عروض لمناقشة الرسائل العلمية والمؤتمرات وورش العمل والتدريب.",
    catCustomTitle: "طلب مخصص",
    catCustomDesc: "عرض تقديمي مصمم خصيصاً لأي موضوع غير مدرج في القائمة.",

    levelPrePrimary: "التمهيدي ورياض الأطفال",
    levelPrimary: "المرحلة الابتدائية",
    levelSecondary: "المرحلة المتوسطة والثانوية",
    levelCollege: "المرحلة الثانوية العليا",
    levelUniversity: "التعليم الجامعي والدراسات العليا",
    levelTechnical: "التعليم الفني والمهني",
    levelMadrasa: "التعليم الإسلامي والمدارس الشرعية",
    levelAlia: "مدارس العالية (من الابتدائي إلى الكامل)",
    levelQawmi: "المدارس القومية (من النورانية إلى التخصص)",

    howItWorksTitle: "كيف تعمل المنصة في ٥ خطوات بسيطة",
    howItWorksStep1: "٠١ — اختر",
    howItWorksStep1Desc: "حدد التصنيف، المستوى التعليمي، أو نوع الخدمة المطلوبة.",
    howItWorksStep2: "٠٢ — حدد المواصفات",
    howItWorksStep2Desc: "اذكر الموضوع وعدد الشرائح واللغة وأي شروط إضافية.",
    howItWorksStep3: "٠٣ — نقوم بالإنشاء",
    howItWorksStep3Desc: "يقوم فريقنا بالبحث وإعداد المحتوى والتصميم الاحترافي.",
    howItWorksStep4: "٠٤ — المراجعة",
    howItWorksStep4Desc: "شاهد المعاينة واطلب أي تعديل بسهولة عند الحاجة.",
    howItWorksStep5: "٠٥ — استلم العرض",
    howItWorksStep5Desc: "قم بتحميل العرض بصيغتي PPTX و PDF بكامل الجودة.",

    teachersTitle: "اجعل كل درس أكثر تفاعلاً وجاذبية",
    teachersSubtitle: "شرائح تدريسية ورسوم بيانية وأسئلة تفاعلية مصممة للمعلمين.",
    teachersCta: "إنشاء عرض دراسي",

    studentsTitle: "قدّم أبحاثك بكل ثقة",
    studentsSubtitle: "عروض للواجبات ومشاريع التخرج ورسائل الماجستير والدكتوراه.",
    studentsCta: "إنشاء عرضي الأكاديمي",

    businessTitle: "حوّل أفكارك التجارية إلى عروض مؤثرة",
    businessSubtitle: "عروض جذب المستثمرين، خطط العمل واستراتيجيات التسويق.",
    businessCta: "إنشاء عرض الأعمال",

    whyChooseUsTitle: "لماذا تختار Make Your Presentation؟",
    whyCard1Title: "عمق علمي وتخصصي",
    whyCard1Desc: "محتوى مدقق مبني على مناهج ومراجع حقيقية وليس قوالب جاهزة مفرغة.",
    whyCard2Title: "تصميم عصري راقٍ",
    whyCard2Desc: "خطوط متناسقة، رسوم توضيحية، ومخططات بيانية تفاعلية.",
    whyCard3Title: "دعم لغات متعددة",
    whyCard3Desc: "إتقان تام للعربية والبنغالية والإنجليزية وغيرها.",
    whyCard4Title: "تسليم سريع وتعديلات مرنة",
    whyCard4Desc: "التزام كامل بالمواعيد ومراجعات متكاملة لضمان رضاك.",

    finalCtaTitle: "هل أنت مستعد لبدء عرضك التقديمي؟",
    finalCtaDesc: "أعطنا موضوعك، ودع مهمة تصميم العرض التقديمي لخبرائنا.",

    orderTitle: "منشئ طلب العرض التقديمي",
    stepCategory: "التصنيف",
    stepContext: "المستوى / المجال",
    stepSubject: "المادة / الدورة",
    stepTopic: "الفصل / الموضوع",
    stepPurpose: "هدف العرض",
    stepSlides: "عدد الشرائح",
    stepLanguage: "اللغة",
    stepDesign: "نمط التصميم",
    stepRequirements: "شروط المحتوى",
    stepReferences: "الملفات والمراجع",
    stepFeatures: "ميزات إضافية",
    stepContact: "بيانات العميل",
    stepReview: "المراجعة والإرسال",

    btnNext: "التالي",
    btnBack: "السابق",
    btnSubmitOrder: "إرسال طلب العرض التقديمي",
    orderReceivedTitle: "تم استلام طلبك بنجاح!",
    orderReceivedDesc: "فريقنا يراجع متطلباتك وسنتواصل معك عبر واتساب أو البريد الإلكتروني قريباً.",
    yourOrderId: "رقم الطلب",
    viewOrder: "عرض تفاصيل الطلب",
    orderSummary: "ملخص الطلب",

    overview: "نظرة عامة",
    activeOrders: "الطلبات النشطة",
    completedOrders: "الطلبات المكتملة",
    pendingPayments: "دفعات معلقة",
    revisionRequests: "طلبات التعديل",
    status: "الحالة",
    deadline: "الموعد النهائي",
    price: "السعر",
    actions: "الإجراءات",
  },
  ru: {
    siteName: "Make Your Presentation",
    tagline: "Ваша тема. Наша презентация.",
    secondaryTagline: "Создавайте лучшие презентации. Преподавайте и выступайте на высшем уровне.",
    heroDescription:
      "От школьных уроков до университетских диссертаций, от бизнес-стратегий до профессиональных тренингов — мы превращаем ваши идеи в четкие, убедительные и стильные презентации.",
    ctaCreate: "Создать презентацию",
    ctaTellUs: "Опишите задачу",
    ctaTalkToUs: "Связаться с нами",
    ctaWhatsApp: "Написать в WhatsApp",
    searchPlaceholder: "Какую презентацию вы ищете? (напр., Наука 8 класс, Маркетинговый план...)",
    searchAria: "Поиск презентаций",
    searchSuggestions: "Популярные запросы",
    noResults: "Ничего не найдено",
    cantFind: "Не нашли нужную тему?",
    cantFindDesc: "Без проблем! Расскажите, что вам требуется, и наша команда создаст индивидуальную презентацию точно под ваши требования.",
    requestCustom: "Запросить индивидуальную презентацию",

    navEducation: "Образование",
    navBusiness: "Бизнес и стартапы",
    navProfessional: "Наука и профи",
    navCustom: "Индивидуальный заказ",
    navHowItWorks: "Как это работает",
    navPricing: "Тарифы",
    navAbout: "О нас",
    navContact: "Контакты",
    navDashboard: "Личный кабинет",
    navAdmin: "Панель управления",
    navLogin: "Войти",
    navRegister: "Регистрация",
    navLogout: "Выйти",

    catEducationTitle: "Образование и учеба",
    catEducationDesc: "Презентации для школ, колледжей, вузов и медресе по учебным программам.",
    catBusinessTitle: "Бизнес и стартапы",
    catBusinessDesc: "Питч-деки, бизнес-планы, маркетинговые стратегии и отчеты.",
    catProfessionalTitle: "Профессиональные и научные",
    catProfessionalDesc: "Защита дипломов, научные конференции, семинары и тренинги.",
    catCustomTitle: "Специальный заказ",
    catCustomDesc: "Презентации любой сложности по уникальным техническим заданиям.",

    levelPrePrimary: "Дошкольное образование",
    levelPrimary: "Начальная школа (1–5 классы)",
    levelSecondary: "Средняя школа (6–10 классы)",
    levelCollege: "Колледж и лицей (11–12 классы)",
    levelUniversity: "Высшее образование и наука",
    levelTechnical: "Техническое и профтехобразование",
    levelMadrasa: "Исламское образование (Медресе)",
    levelAlia: "Медресе Алия",
    levelQawmi: "Медресе Кауми",

    howItWorksTitle: "Как мы работаем за 5 простых шагов",
    howItWorksStep1: "01 — Выберите",
    howItWorksStep1Desc: "Выберите категорию, уровень образования или направление услуги.",
    howItWorksStep2: "02 — Опишите",
    howItWorksStep2Desc: "Укажите тему, число слайдов, язык и необходимые акценты.",
    howItWorksStep3: "03 — Мы создаем",
    howItWorksStep3Desc: "Наша команда исследует материал и разрабатывает дизайн.",
    howItWorksStep4: "04 — Проверка",
    howItWorksStep4Desc: "Ознакомьтесь с черновиком и при необходимости запросите правки.",
    howItWorksStep5: "05 — Получите файлы",
    howItWorksStep5Desc: "Скачайте готовые файлы PPTX и PDF в высоком качестве.",

    teachersTitle: "Сделайте каждый урок по-настоящему увлекательным",
    teachersSubtitle: "Лекционные слайды, схемы, инфографика и тесты для преподавателей.",
    teachersCta: "Заказать слайды для урока",

    studentsTitle: "Выступайте уверенно",
    studentsSubtitle: "Защита дипломов, курсовых, доклады на конференциях и семинарах.",
    studentsCta: "Заказать презентацию для учебы",

    businessTitle: "Воплощайте бизнес-идеи в убедительные слайды",
    businessSubtitle: "Питч-деки для инвесторов, бизнес-планы и презентации для клиентов.",
    businessCta: "Создать бизнес-презентацию",

    whyChooseUsTitle: "Почему выбирают Make Your Presentation?",
    whyCard1Title: "Глубокая проработка темы",
    whyCard1Desc: "Не просто красивые шаблоны, а точное соответствие учебным планам и источникам.",
    whyCard2Title: "Современный строгий дизайн",
    whyCard2Desc: "Качественная типографика, авторские схемы и понятная визуализация данных.",
    whyCard3Title: "Мультиязычность",
    whyCard3Desc: "Безупречная верстка на бенгальском, английском, арабском, русском и других языках.",
    whyCard4Title: "Оперативность и правки",
    whyCard4Desc: "Соблюдение дедлайнов и гарантия доработки до полного утверждения.",

    finalCtaTitle: "Готовы превратить вашу тему в презентацию?",
    finalCtaDesc: "Доверьте разработку и визуализацию профессионалам нашей команды.",

    orderTitle: "Мастер оформления заказа",
    stepCategory: "Категория",
    stepContext: "Уровень / Сфера",
    stepSubject: "Предмет / Курс",
    stepTopic: "Глава / Тема",
    stepPurpose: "Цель выступления",
    stepSlides: "Количество слайдов",
    stepLanguage: "Язык",
    stepDesign: "Стиль оформления",
    stepRequirements: "Требования к содержанию",
    stepReferences: "Исходные файлы и материалы",
    stepFeatures: "Дополнительные опции",
    stepContact: "Контакты",
    stepReview: "Проверка и отправка",

    btnNext: "Далее",
    btnBack: "Назад",
    btnSubmitOrder: "Отправить заявку",
    orderReceivedTitle: "Ваш заказ успешно принят!",
    orderReceivedDesc: "Мы изучаем материалы и скоро свяжемся с вами в WhatsApp или по почте.",
    yourOrderId: "Номер заказа",
    viewOrder: "Посмотреть заказ",
    orderSummary: "Итог заказа",

    overview: "Обзор",
    activeOrders: "Активные заказы",
    completedOrders: "Завершенные",
    pendingPayments: "Ожидающие оплаты",
    revisionRequests: "Запросы правок",
    status: "Статус",
    deadline: "Срок",
    price: "Стоимость",
    actions: "Действия",
  },
  ja: {
    siteName: "Make Your Presentation",
    tagline: "あなたのテーマを、最高のプレゼンに。",
    secondaryTagline: "より良いスライドを作成し、より効果的に教え、自信を持って発表する。",
    heroDescription:
      "学校の授業から大学の研究発表、事業計画から企業研修まで、あなたのアイデアを明確で魅力的なプロフェッショナル・プレゼンテーションに仕上げます。",
    ctaCreate: "プレゼンを依頼する",
    ctaTellUs: "ご要望を伝える",
    ctaTalkToUs: "お問い合わせ",
    ctaWhatsApp: "WhatsAppで相談",
    searchPlaceholder: "お探しのプレゼンテーマは何ですか？（例: 科学、マーケティング計画...）",
    searchAria: "プレゼンテーション検索",
    searchSuggestions: "人気の検索ワード",
    noResults: "該当するプレゼンテーションが見つかりませんでした",
    cantFind: "お探しの科目やテーマが見つかりませんか？",
    cantFindDesc: "ご安心ください。専門チームがお客様のご要望に合わせて完全オーダーメイドで制作します。",
    requestCustom: "カスタムプレゼンを依頼する",

    navEducation: "教育・学術",
    navBusiness: "ビジネス・起業",
    navProfessional: "研究・専門",
    navCustom: "カスタム依頼",
    navHowItWorks: "ご利用の流れ",
    navPricing: "料金プラン",
    navAbout: "会社概要",
    navContact: "お問い合わせ",
    navDashboard: "マイページ",
    navAdmin: "管理者画面",
    navLogin: "ログイン",
    navRegister: "新規登録",
    navLogout: "ログアウト",

    catEducationTitle: "教育・学習カリキュラム",
    catEducationDesc: "初等・中等・高等教育および大学、専門教育カリキュラムに準拠したスライド。",
    catBusinessTitle: "ビジネス・スタートアップ",
    catBusinessDesc: "投資家向けピッチデック、事業計画書、マーケティング戦略、営業資料。",
    catProfessionalTitle: "研究・学術・研修",
    catProfessionalDesc: "論文発表、学会プレゼン、セミナー、企業研修向けスライド。",
    catCustomTitle: "カスタム制作",
    catCustomDesc: "あらゆる分野の固有のニーズに合わせた特注プレゼンテーション。",

    levelPrePrimary: "就学前教育・幼児教育",
    levelPrimary: "小学校（1〜5年生）",
    levelSecondary: "中学校・高等学校（6〜10年生）",
    levelCollege: "高校・カレッジ（11〜12年生）",
    levelUniversity: "大学・大学院・研究機関",
    levelTechnical: "専門学校・職業訓練",
    levelMadrasa: "マドラサ教育（イスラム伝統教育）",
    levelAlia: "アリア・マドラサ",
    levelQawmi: "カウミ・マドラサ",

    howItWorksTitle: "簡単5ステップで完成",
    howItWorksStep1: "01 — 選択",
    howItWorksStep1Desc: "分野、学年、またはサービス種別を選択します。",
    howItWorksStep2: "02 — 要望入力",
    howItWorksStep2Desc: "テーマ、スライド枚数、言語、重視するポイントを指定。",
    howItWorksStep3: "03 — 制作",
    howItWorksStep3Desc: "専門チームが調査・構成・デザインを丁寧に仕上げます。",
    howItWorksStep4: "04 — レビュー",
    howItWorksStep4Desc: "プレビューを確認し、必要に応じて修正を依頼。",
    howItWorksStep5: "05 — 納品",
    howItWorksStep5Desc: "完成したPPTXおよびPDFファイルをダウンロードします。",

    teachersTitle: "毎日の授業をより魅力的に",
    teachersSubtitle: "授業スライド、図解、解説チャート、クイズスライドを迅速に作成。",
    teachersCta: "授業スライドを依頼する",

    studentsTitle: "自信を持って発表に臨む",
    studentsSubtitle: "課題、卒業論文発表、ゼミ、プロジェクト発表用スライド。",
    studentsCta: "学生向けプレゼンを作成",

    businessTitle: "ビジネスアイデアを強力なプレゼンに昇華",
    businessSubtitle: "ピッチデック、提案書、営業資料、事業ロードマップ。",
    businessCta: "ビジネス資料を依頼",

    whyChooseUsTitle: "Make Your Presentationが選ばれる理由",
    whyCard1Title: "専門的な内容の正確さ",
    whyCard1Desc: "単なる見た目だけでなく、教科書や専門資料を正確に反映します。",
    whyCard2Title: "洗練されたモダンデザイン",
    whyCard2Desc: "視線誘導、インフォグラフィック、明瞭なタイポグラフィ。",
    whyCard3Title: "多言語対応",
    whyCard3Desc: "ベンガル語、英語、アラビア語、日本語など高精度な言語対応。",
    whyCard4Title: "安心の納期と修正保証",
    whyCard4Desc: "迅速な制作と納得いくまでの修正サポートを提供します。",

    finalCtaTitle: "あなたのテーマをスライドにしませんか？",
    finalCtaDesc: "テーマをお知らせいただければ、あとはすべて専門チームにお任せください。",

    orderTitle: "プレゼンテーション注文ウィザード",
    stepCategory: "カテゴリー",
    stepContext: "教育段階 / 業種",
    stepSubject: "科目 / コース",
    stepTopic: "章 / テーマ",
    stepPurpose: "利用目的",
    stepSlides: "スライド枚数",
    stepLanguage: "作成言語",
    stepDesign: "デザインスタイル",
    stepRequirements: "詳細なご要望",
    stepReferences: "参考資料ファイル",
    stepFeatures: "追加機能・構成要素",
    stepContact: "お客様情報",
    stepReview: "確認と送信",

    btnNext: "次へ進む",
    btnBack: "戻る",
    btnSubmitOrder: "依頼を送信する",
    orderReceivedTitle: "ご依頼を受け付けました！",
    orderReceivedDesc: "内容を確認の上、担当者よりWhatsAppまたはメールにてご連絡いたします。",
    yourOrderId: "注文番号",
    viewOrder: "注文詳細を見る",
    orderSummary: "ご注文内容",

    overview: "概要",
    activeOrders: "進行中の注文",
    completedOrders: "完了した注文",
    pendingPayments: "お支払い待ち",
    revisionRequests: "修正依頼",
    status: "ステータス",
    deadline: "希望納期",
    price: "金額",
    actions: "操作",
  },
  zh: {
    siteName: "Make Your Presentation",
    tagline: "您的主题，我们的专业演示。",
    secondaryTagline: "打造更高品质的演示文稿，更好教学，自信展现。",
    heroDescription:
      "从基础课堂教学到大学学术答辩，从商业创业路演到企业员工培训——我们将您的想法转化为条理清晰、极具吸引力的专业演示幻灯片。",
    ctaCreate: "立即制作演示文稿",
    ctaTellUs: "告诉我们您的需求",
    ctaTalkToUs: "与我们沟通",
    ctaWhatsApp: "WhatsApp 咨询",
    searchPlaceholder: "您在寻找什么科目的演示？（例如：初中科学、光合作用、商业计划书...）",
    searchAria: "搜索演示文稿",
    searchSuggestions: "热门搜索",
    noResults: "未找到相关内容",
    cantFind: "找不到您需要的主题？",
    cantFindDesc: "完全不用担心！直接告诉我们您的具体要求，我们的专业团队将为您量身定制。",
    requestCustom: "提交定制演示需求",

    navEducation: "教育与学术",
    navBusiness: "商业与创业",
    navProfessional: "专业与科研",
    navCustom: "定制服务",
    navHowItWorks: "运作流程",
    navPricing: "收费标准",
    navAbout: "关于我们",
    navContact: "联系我们",
    navDashboard: "用户中心",
    navAdmin: "管理后台",
    navLogin: "登录",
    navRegister: "注册",
    navLogout: "退出",

    catEducationTitle: "教育与学术大纲",
    catEducationDesc: "覆盖学前、中小学、高中、大学及传统经学院的全学段标准化课件。",
    catBusinessTitle: "商业与创业方案",
    catBusinessDesc: "投资人路演商业计划书、市场开拓方案、公司简介及企业季度汇报。",
    catProfessionalTitle: "专业与科研汇报",
    catProfessionalDesc: "毕业论文答辩、国际学术会议、行业研讨会及企业内训课件。",
    catCustomTitle: "定制演示文稿",
    catCustomDesc: "根据任何特殊主题与个性化规范全案定制的高端演示文稿。",

    levelPrePrimary: "学前与幼教阶段",
    levelPrimary: "小学教育（1-5年级）",
    levelSecondary: "中学教育（6-10年级）",
    levelCollege: "大学预科/高中（11-12年级）",
    levelUniversity: "高等学府与科研院校",
    levelTechnical: "职业与技术培训",
    levelMadrasa: "经院与伊斯兰教育",
    levelAlia: "阿莉亚经院系统",
    levelQawmi: "考米经院系统",

    howItWorksTitle: "简单 5 步即可交付",
    howItWorksStep1: "01 — 选择类别",
    howItWorksStep1Desc: "选定您的教育阶段、学科专业或商业服务类别。",
    howItWorksStep2: "02 — 明确要求",
    howItWorksStep2Desc: "提供主题、幻灯片页数、语言偏好和设计风格。",
    howItWorksStep3: "03 — 专业制作",
    howItWorksStep3Desc: "我们的内容研究员与设计师精心打磨逻辑与视觉。",
    howItWorksStep4: "04 — 预览与修改",
    howItWorksStep4Desc: "在线审阅样稿，如需微调可随时发起修改请求。",
    howItWorksStep5: "05 — 交付与下载",
    howItWorksStep5Desc: "下载包含 PPTX、PDF 及高清矢量素材的完整成果。",

    teachersTitle: "让每一堂课都充满生机",
    teachersSubtitle: "为教师打造的互动课件、知识点拆解、信息图表与随堂测试。",
    teachersCta: "制作教师课堂课件",

    studentsTitle: "自信登台，赢得赞誉",
    studentsSubtitle: "课程作业、毕业论文开题与答辩、学术研讨会专属汇报 PPT。",
    studentsCta: "制作学生答辩演示",

    businessTitle: "将商业构想转变为打动人心的视觉说服力",
    businessSubtitle: "融资商业计划书、品牌推广方案、销售提报与年度战略规划。",
    businessCta: "构建商业提案",

    whyChooseUsTitle: "为什么选择 Make Your Presentation？",
    whyCard1Title: "扎实的学科研究深度",
    whyCard1Desc: "绝非套用廉价模板，严格依照课程标准与教材规范深度编撰。",
    whyCard2Title: "严谨现代的高端设计",
    whyCard2Desc: "国际化排版、量身定制信息图表、出色的视觉叙事结构。",
    whyCard3Title: "跨语言高水准支持",
    whyCard3Desc: "母语级精通孟加拉语、英语、阿拉伯语、中文等多国语言。",
    whyCard4Title: "准时交付与完善售后",
    whyCard4Desc: "严格恪守截稿时限，并提供完善的修改保障服务。",

    finalCtaTitle: "准备好开启您的演示文稿了吗？",
    finalCtaDesc: "交给我们您的主题，让我们的专业团队为您呈现高水准作品。",

    orderTitle: "演示文稿需求构建向导",
    stepCategory: "服务类别",
    stepContext: "教育层次 / 行业领域",
    stepSubject: "学科 / 课程名称",
    stepTopic: "章节 / 汇报主题",
    stepPurpose: "使用场景",
    stepSlides: "幻灯片页数",
    stepLanguage: "制作语言",
    stepDesign: "设计风格",
    stepRequirements: "内容具体要求",
    stepReferences: "参考附件与教材",
    stepFeatures: "定制特色功能",
    stepContact: "客户联络信息",
    stepReview: "审核并提交",

    btnNext: "下一步",
    btnBack: "上一步",
    btnSubmitOrder: "确认并提交订单",
    orderReceivedTitle: "您的演示文稿请求已成功接收！",
    orderReceivedDesc: "我们的顾问正在仔细审阅您的材料，并将尽快通过 WhatsApp 或邮件与您联系。",
    yourOrderId: "订单流水号",
    viewOrder: "查看订单详情",
    orderSummary: "需求明细",

    overview: "全局概览",
    activeOrders: "进行中订单",
    completedOrders: "已交付订单",
    pendingPayments: "待付款项",
    revisionRequests: "修改审阅中",
    status: "状态",
    deadline: "期望交付日期",
    price: "报价金额",
    actions: "操作",
  },
};
