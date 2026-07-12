import type { Company, CompanyId, DownloadAsset, Locale, NavItem, Service } from "@/types";

export const site = {
  name: "ARKON Group",
  domain: "arkongroup.com.sa",
  tagline: {
    en: "One Group. Five Specialized Companies. One Integrated Delivery Ecosystem.",
    ar: "مجموعة واحدة. خمس شركات متخصصة. منظومة متكاملة لدعم المشاريع."
  },
  description: {
    en: "ARKON Group connects engineering consultancy, security consultancy, construction and technical services, testing and inspection, and digital marketing through one integrated Saudi project-support ecosystem.",
    ar: "تربط مجموعة أركون بين الاستشارات الهندسية، والاستشارات الأمنية، وأعمال البناء والخدمات الفنية، والفحوصات والاختبارات، والتسويق الرقمي ضمن منظومة سعودية متكاملة لدعم المشاريع."
  }
} as const;

export const navigation: NavItem[] = [
  { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
  { label: { en: "About", ar: "عن المجموعة" }, href: "/about" },
  { label: { en: "Companies", ar: "الشركات" }, href: "/companies" },
  { label: { en: "Services", ar: "الخدمات" }, href: "/services" },
  { label: { en: "Credentials", ar: "ملفات التعريف" }, href: "/credentials" },
  { label: { en: "Contact", ar: "التواصل" }, href: "/contact" }
];

export const industries = [
  { en: "Real estate development", ar: "التطوير العقاري" },
  { en: "Infrastructure and utilities", ar: "البنية التحتية والمرافق" },
  { en: "Industrial and critical facilities", ar: "المنشآت الصناعية والحساسة" },
  { en: "Commercial and hospitality", ar: "المشاريع التجارية والفندقية" },
  { en: "Construction and contracting", ar: "البناء والمقاولات" },
  { en: "Corporate and digital brands", ar: "العلامات التجارية المؤسسية والرقمية" }
];

export const companies: Company[] = [
  company("aec", "arkon-engineering-consultancy", "AEC", "ARKON Engineering Consultancy Co.", "شركة أركون للاستشارات الهندسية", "Engineering consultancy for fire safety, infrastructure, traffic, hydrology, supervision, project management, and design review.", "استشارات هندسية في السلامة من الحريق والبنية التحتية والدراسات المرورية والهيدرولوجيا والإشراف وإدارة المشاريع.", [
    ["Fire and Life Safety Consultancy", "استشارات السلامة من الحريق وسلامة الأرواح"],
    ["Traffic Impact Studies", "دراسات الأثر المروري"],
    ["Hydrology and Stormwater Studies", "دراسات الهيدرولوجيا وتصريف مياه الأمطار"],
    ["Structural Engineering Consultancy", "استشارات الهندسة الإنشائية"],
    ["Infrastructure Engineering Consultancy", "استشارات هندسة البنية التحتية"],
    ["MEP Engineering Consultancy", "استشارات هندسة الميكانيكا والكهرباء والسباكة"],
    ["Construction Supervision Consultancy", "استشارات الإشراف على التنفيذ"],
    ["Project Management Consultancy", "استشارات إدارة المشاريع"]
  ], "/logos/arkon_engineering_consultants.svg", "Request Engineering Support", "طلب دعم هندسي"),
  company("elite", "elite-security-consultancy", "ELITE", "ELITE Security Consultancy Co.", "شركة إيليت للاستشارات الأمنية", "Security consultancy for HCIS / SAIS readiness, risk assessment, design review, documentation, systems advisory, and operational readiness.", "استشارات أمنية تشمل جاهزية HCIS / SAIS وتقييم المخاطر ومراجعة التصميم والوثائق والأنظمة وجاهزية التشغيل.", [
    ["HCIS / SAIS Security Consultancy", "استشارات أمنية HCIS / SAIS"],
    ["Security Risk Assessment", "تقييم المخاطر الأمنية"],
    ["Security Design Review", "مراجعة التصميم الأمني"],
    ["Security Systems Consultancy", "استشارات الأنظمة الأمنية"],
    ["Security Compliance Documentation", "وثائق الامتثال الأمني"],
    ["Operational Security Readiness", "جاهزية التشغيل الأمني"]
  ], "/logos/elite_security_consulting_primary.svg", "Discuss Security Consultancy", "مناقشة الاستشارات الأمنية"),
  company("ibs", "integrated-building-systems", "IBS", "Integrated Building Systems", "شركة أنظمة المباني المتكاملة", "Construction and technical services across civil works, MEP works, steel structures, finishing, maintenance, and prefabricated units.", "أعمال بناء وخدمات فنية تشمل الأعمال المدنية وMEP والهياكل الفولاذية والتشطيبات والصيانة والوحدات مسبقة التجهيز.", [
    ["Civil Works", "الأعمال المدنية"],
    ["MEP Works", "أعمال الميكانيكا والكهرباء والسباكة"],
    ["Steel Structures", "الهياكل الفولاذية"],
    ["Finishing Works", "أعمال التشطيبات"],
    ["Building Maintenance", "صيانة المباني"],
    ["Prefabricated Units and Porta Cabins", "الوحدات مسبقة التجهيز والكبائن المتنقلة"]
  ], "/logos/integrated_buildings_systems_company_primary.svg", "Request Technical Works Support", "طلب دعم الأعمال الفنية"),
  company("qic", "quality-inspection-company", "QIC", "Quality Inspection Company", "شركة فحوصات الجودة", "Testing and inspection support for geotechnical investigation, soil, concrete, asphalt, construction materials, water, and air quality testing.", "دعم في الفحوصات والاختبارات يشمل الجيوتقنية والتربة والخرسانة والأسفلت ومواد البناء وجودة المياه والهواء.", [
    ["Geotechnical Investigation", "الدراسات الجيوتقنية"],
    ["Soil Testing", "اختبارات التربة"],
    ["Construction Material Testing", "اختبارات مواد البناء"],
    ["Asphalt Testing", "اختبارات الأسفلت"],
    ["Concrete Testing", "اختبارات الخرسانة"],
    ["Water and Air Quality Testing", "اختبارات جودة المياه والهواء"]
  ], "/logos/qic_quality_inspection_company.svg", "Request Testing Support", "طلب دعم الفحوصات"),
  company("tp-digital", "turning-point-digital-marketing", "TP Digital", "Turning Point Digital Marketing Co.", "شركة نقطة تحول للتسويق الرقمي", "Digital marketing services for strategy, social media, performance marketing, websites, creative content, podcast studio, and digital management software.", "خدمات تسويق رقمي تشمل الاستراتيجية وإدارة التواصل والتسويق بالأداء والمواقع والمحتوى واستوديو البودكاست وبرامج الإدارة.", [
    ["Digital Marketing Strategy", "استراتيجية التسويق الرقمي"],
    ["Social Media Management", "إدارة منصات التواصل الاجتماعي"],
    ["Performance Marketing", "التسويق بالأداء"],
    ["Website and Landing Page Development", "تطوير المواقع وصفحات الهبوط"],
    ["Creative Content and Podcast Studio", "المحتوى الإبداعي واستوديو البودكاست"],
    ["Digital Management Software", "برامج الإدارة الرقمية"]
  ], "/logos/turning_point_digital_marketing.svg", "Plan Digital Growth", "تخطيط النمو الرقمي")
];

const termTranslations: Record<string, string> = {
  Developers: "المطورون",
  Consultants: "الاستشاريون",
  Contractors: "المقاولون",
  "Facility owners": "ملاك المنشآت",
  Operators: "المشغلون",
  "Project teams": "فرق المشاريع",
  "Facilities teams": "فرق المرافق",
  "Infrastructure teams": "فرق البنية التحتية",
  "Corporate teams": "الفرق المؤسسية",
  "Service companies": "شركات الخدمات",
  "Project brands": "علامات المشاريع",
  "Confirm scope": "تأكيد نطاق العمل",
  "Review documents": "مراجعة المستندات",
  "Issue recommendations": "إصدار التوصيات",
  "Confirm requirements": "تأكيد المتطلبات",
  "Review design": "مراجعة التصميم",
  "Prepare documentation": "إعداد المستندات",
  "Plan works": "تخطيط الأعمال",
  "Coordinate delivery": "تنسيق التنفيذ",
  "Define tests": "تحديد الاختبارات",
  "Coordinate samples": "تنسيق العينات",
  "Issue report": "إصدار التقرير",
  "Discover goals": "تحديد الأهداف",
  "Plan channels": "تخطيط القنوات",
  "Measure performance": "قياس الأداء",
  "Design review": "مراجعة التصميم",
  "Coordination notes": "ملاحظات التنسيق",
  "Technical documentation": "المستندات الفنية",
  "Risk review": "مراجعة المخاطر",
  "Security documentation": "المستندات الأمنية",
  "Readiness notes": "ملاحظات الجاهزية",
  "Execution planning": "تخطيط التنفيذ",
  "Site coordination": "تنسيق الموقع",
  "Progress notes": "ملاحظات التقدم",
  "Testing workflow": "منهجية الاختبارات",
  "Result summaries": "ملخصات النتائج",
  "Technical reporting": "التقارير الفنية",
  "Campaign roadmap": "خارطة طريق الحملات",
  "Content planning": "تخطيط المحتوى",
  "Reporting structure": "هيكل التقارير"
};

const serviceProfiles: Record<CompanyId, { category: Record<Locale, string>; clients: string[]; process: string[]; deliverables: string[] }> = {
  aec: { category: { en: "Engineering Consultancy", ar: "الاستشارات الهندسية" }, clients: ["Developers", "Consultants", "Contractors"], process: ["Confirm scope", "Review documents", "Issue recommendations"], deliverables: ["Design review", "Coordination notes", "Technical documentation"] },
  elite: { category: { en: "Security Consultancy", ar: "الاستشارات الأمنية" }, clients: ["Facility owners", "Operators", "Project teams"], process: ["Confirm requirements", "Review design", "Prepare documentation"], deliverables: ["Risk review", "Security documentation", "Readiness notes"] },
  ibs: { category: { en: "Construction and Technical Services", ar: "أعمال البناء والخدمات الفنية" }, clients: ["Developers", "Contractors", "Facilities teams"], process: ["Confirm scope", "Plan works", "Coordinate delivery"], deliverables: ["Execution planning", "Site coordination", "Progress notes"] },
  qic: { category: { en: "Testing and Inspection", ar: "الفحوصات والاختبارات" }, clients: ["Developers", "Contractors", "Infrastructure teams"], process: ["Define tests", "Coordinate samples", "Issue report"], deliverables: ["Testing workflow", "Result summaries", "Technical reporting"] },
  "tp-digital": { category: { en: "Digital Marketing", ar: "التسويق الرقمي" }, clients: ["Corporate teams", "Service companies", "Project brands"], process: ["Discover goals", "Plan channels", "Measure performance"], deliverables: ["Campaign roadmap", "Content planning", "Reporting structure"] }
};

export const services: Service[] = companies.flatMap((item) => {
  const profile = serviceProfiles[item.id];
  return item.services.map((serviceItem) => ({
    slug: slugify(serviceItem.en),
    companyId: item.id,
    category: profile.category,
    title: serviceItem,
    summary: {
      en: `${serviceItem.en} support delivered through ${item.name.en}, with practical review, documentation, and coordination for Saudi project teams.`,
      ar: `دعم في ${serviceItem.ar} من خلال ${item.name.ar}، مع مراجعة عملية وتنسيق وإعداد مستندات لفرق المشاريع في المملكة.`
    },
    deliverables: profile.deliverables.map(localizeTerm),
    clients: profile.clients.map(localizeTerm),
    process: profile.process.map(localizeTerm),
    cta: { en: `Request ${serviceItem.en}`, ar: `طلب ${serviceItem.ar}` }
  }));
});

export const downloads: DownloadAsset[] = [
  download("ARKON Group Credentials", "ملف تعريف مجموعة أركون", "ARKON Group", "مجموعة أركون", "ARKON Group Credentials", "ملفات مجموعة أركون", "Overview of the ARKON Group ecosystem and five-company structure.", "نظرة عامة على منظومة مجموعة أركون وهيكل الشركات الخمس.", false),
  download("AEC Engineering Services Brochure", "كتيب خدمات أركون الهندسية", "ARKON Engineering Consultancy Co.", "شركة أركون للاستشارات الهندسية", "Service Brochures", "كتيبات الخدمات", "Engineering consultancy capability overview for project teams.", "نظرة عامة على قدرات الاستشارات الهندسية لفرق المشاريع.", false),
  download("ELITE Security Consultancy Brochure", "كتيب استشارات إيليت الأمنية", "ELITE Security Consultancy Co.", "شركة إيليت للاستشارات الأمنية", "Service Brochures", "كتيبات الخدمات", "Security consultancy overview for risk, design review, and readiness support.", "نظرة عامة على الاستشارات الأمنية لتقييم المخاطر ومراجعة التصميم ودعم الجاهزية.", true),
  download("IBS Construction Services Brochure", "كتيب خدمات البناء لأنظمة المباني المتكاملة", "Integrated Building Systems", "شركة أنظمة المباني المتكاملة", "Service Brochures", "كتيبات الخدمات", "Construction and technical services overview.", "نظرة عامة على أعمال البناء والخدمات الفنية.", false),
  download("QIC Testing Capability Sheet", "ملف قدرات فحوصات الجودة", "Quality Inspection Company", "شركة فحوصات الجودة", "Company Profiles", "ملفات الشركات", "Testing and inspection capability overview.", "نظرة عامة على قدرات الفحوصات والاختبارات.", false),
  download("TP Digital Marketing Services", "كتيب خدمات نقطة تحول الرقمية", "Turning Point Digital Marketing Co.", "شركة نقطة تحول للتسويق الرقمي", "Service Brochures", "كتيبات الخدمات", "Digital marketing services overview.", "نظرة عامة على خدمات التسويق الرقمي.", false)
];

export const ui = {
  requestProposal: { en: "Request a Technical Proposal", ar: "طلب عرض فني" },
  exploreServices: { en: "Explore Services", ar: "استكشاف الخدمات" },
  viewCompanies: { en: "View Companies", ar: "عرض الشركات" },
  downloadProfile: { en: "Download Company Profile", ar: "تحميل ملف الشركة" },
  speakTeam: { en: "Speak to Our Team", ar: "تحدث مع فريقنا" },
  gated: { en: "Request access", ar: "طلب الوصول" },
  download: { en: "Download", ar: "تحميل" },
  learnMore: { en: "Learn more", ar: "معرفة المزيد" }
} as const;

export function t(locale: Locale, text: Record<Locale, string>): string {
  return text[locale];
}

function company(id: CompanyId, slug: string, shortName: string, nameEn: string, nameAr: string, summaryEn: string, summaryAr: string, services: Array<[string, string]>, logo: string, ctaEn: string, ctaAr: string): Company {
  return {
    id,
    slug,
    shortName,
    name: { en: nameEn, ar: nameAr },
    summary: { en: summaryEn, ar: summaryAr },
    positioning: { en: `${nameEn} supports project teams with practical, conservative, and well-documented service delivery.`, ar: `تدعم ${nameAr} فرق المشاريع بخدمات عملية ومحافظة وموثقة بوضوح.` },
    services: services.map(([en, ar]) => ({ en, ar })),
    industries: industries.slice(0, 3),
    strengths: [
      { en: "Clear scope coordination", ar: "تنسيق واضح لنطاق العمل" },
      { en: "Practical documentation", ar: "مستندات عملية" },
      { en: "Project-team support", ar: "دعم فرق المشاريع" }
    ],
    cta: { en: ctaEn, ar: ctaAr },
    logo
  };
}

function download(titleEn: string, titleAr: string, companyEn: string, companyAr: string, categoryEn: string, categoryAr: string, descriptionEn: string, descriptionAr: string, gated: boolean): DownloadAsset {
  return {
    title: { en: titleEn, ar: titleAr },
    company: { en: companyEn, ar: companyAr },
    category: { en: categoryEn, ar: categoryAr },
    description: { en: descriptionEn, ar: descriptionAr },
    type: "PDF",
    language: "EN",
    gated,
    version: "v1",
    updated: "2026-07"
  };
}

function localizeTerm(value: string): Record<Locale, string> {
  return { en: value, ar: termTranslations[value] || value };
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/\/|&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
