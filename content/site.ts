import type { Company, CompanyId, DownloadAsset, Locale, LocalizedText, NavItem, Service } from "@/types";

export const site = {
  name: "ARKON Group",
  domain: "arkongroup.com.sa",
  logo: "/assets/logos/arkon-group-temporary-concept.webp",
  logoNote: "Temporary ARKON Group concept logo from the supplied asset package. Replace when the official group logo is approved.",
  heroImage: "/assets/images/arkon-command-center-hero.webp",
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
  { label: lt("Home", "الرئيسية"), href: "/" },
  { label: lt("About Us", "عن المجموعة"), href: "/about" },
  { label: lt("Companies", "الشركات"), href: "/companies" },
  { label: lt("Services", "الخدمات"), href: "/services" },
  { label: lt("Industries", "القطاعات"), href: "/industries" },
  { label: lt("Projects", "المشاريع"), href: "/projects" },
  { label: lt("Insights", "الرؤى"), href: "/insights" },
  { label: lt("Contact", "التواصل"), href: "/contact" }
];

export const industries = [
  lt("Government and public sector", "القطاع الحكومي والعام"),
  lt("Oil, gas, and energy", "النفط والغاز والطاقة"),
  lt("Infrastructure and transportation", "البنية التحتية والنقل"),
  lt("Commercial and residential", "المشاريع التجارية والسكنية"),
  lt("Industrial and critical facilities", "المنشآت الصناعية والحساسة"),
  lt("Hospitality and tourism", "الضيافة والسياحة")
];

const companyIndustryMap: Record<CompanyId, LocalizedText[]> = {
  aec: [industries[1], industries[2], industries[3], industries[4]],
  elite: [industries[0], industries[1], industries[4]],
  ibs: [industries[2], industries[3], industries[4], industries[5]],
  qic: [industries[1], industries[2], industries[3], industries[4]],
  "tp-digital": [industries[0], industries[3], industries[5]]
};

const companyServices = {
  aec: [
    lt("Fire and Life Safety Consultancy", "استشارات السلامة من الحريق وسلامة الأرواح"),
    lt("Traffic Impact Studies", "دراسات الأثر المروري"),
    lt("Hydrology and Stormwater Studies", "دراسات الهيدرولوجيا وتصريف مياه الأمطار"),
    lt("Structural Engineering Consultancy", "استشارات الهندسة الإنشائية"),
    lt("Infrastructure Engineering Consultancy", "استشارات هندسة البنية التحتية"),
    lt("MEP Engineering Consultancy", "استشارات هندسة الميكانيكا والكهرباء والسباكة"),
    lt("Construction Supervision Consultancy", "استشارات الإشراف على التنفيذ"),
    lt("Project Management Consultancy", "استشارات إدارة المشاريع")
  ],
  elite: [
    lt("HCIS / SAIS Security Consultancy", "استشارات أمنية HCIS / SAIS"),
    lt("Security Risk Assessment", "تقييم المخاطر الأمنية"),
    lt("Security Design Review", "مراجعة التصميم الأمني"),
    lt("Security Systems Consultancy", "استشارات الأنظمة الأمنية"),
    lt("Security Compliance Documentation", "وثائق الجاهزية والامتثال الأمني"),
    lt("Operational Security Readiness", "جاهزية التشغيل الأمني")
  ],
  ibs: [
    lt("Civil Works", "الأعمال المدنية"),
    lt("MEP Works", "أعمال الميكانيكا والكهرباء والسباكة"),
    lt("Steel Structures", "الهياكل الفولاذية"),
    lt("Finishing Works", "أعمال التشطيبات"),
    lt("Building Maintenance", "صيانة المباني"),
    lt("Prefabricated Units and Porta Cabins", "الوحدات مسبقة التجهيز والكبائن المتنقلة")
  ],
  qic: [
    lt("Geotechnical Investigation", "الدراسات الجيوتقنية"),
    lt("Soil Testing", "اختبارات التربة"),
    lt("Construction Material Testing", "اختبارات مواد البناء"),
    lt("Asphalt Testing", "اختبارات الأسفلت"),
    lt("Concrete Testing", "اختبارات الخرسانة"),
    lt("Water and Air Quality Testing", "اختبارات جودة المياه والهواء")
  ],
  "tp-digital": [
    lt("Digital Marketing Strategy", "استراتيجية التسويق الرقمي"),
    lt("Social Media Management", "إدارة منصات التواصل الاجتماعي"),
    lt("Performance Marketing", "التسويق بالأداء"),
    lt("Website and Landing Page Development", "تطوير المواقع وصفحات الهبوط"),
    lt("Creative Content and Podcast Studio", "المحتوى الإبداعي واستوديو البودكاست"),
    lt("Digital Management Software", "برامج الإدارة الرقمية")
  ]
} satisfies Record<CompanyId, LocalizedText[]>;

export const companies: Company[] = [
  {
    id: "aec",
    slug: "arkon-engineering-consultancy",
    shortName: "AEC",
    name: lt("ARKON Engineering Consultancy Co.", "شركة أركون للاستشارات الهندسية"),
    summary: lt(
      "Engineering consultancy for fire and life safety, infrastructure, traffic, hydrology, supervision, project management, and design review.",
      "استشارات هندسية في السلامة من الحريق والبنية التحتية والدراسات المرورية والهيدرولوجيا والإشراف وإدارة المشاريع."
    ),
    positioning: lt(
      "The engineering consultancy arm for multidisciplinary technical review, planning support, and project documentation across Saudi project environments.",
      "الذراع الاستشاري الهندسي للمراجعة الفنية متعددة التخصصات ودعم التخطيط ومستندات المشاريع في بيئات المشاريع السعودية."
    ),
    overview: lt(
      "ARKON Engineering Consultancy Co. supports owners, developers, consultants, and contractors that need organized technical input before and during project delivery. Its role is advisory and documentation-focused: reviewing information, identifying coordination gaps, preparing technical comments, and helping teams move through engineering decisions with clearer evidence.",
      "تدعم شركة أركون للاستشارات الهندسية الملاك والمطورين والاستشاريين والمقاولين الذين يحتاجون إلى مدخلات فنية منظمة قبل وأثناء تنفيذ المشاريع. يركز دورها على الاستشارة والتوثيق من خلال مراجعة المعلومات وتحديد فجوات التنسيق وإعداد الملاحظات الفنية ومساعدة الفرق على اتخاذ قرارات هندسية أوضح."
    ),
    services: companyServices.aec,
    industries: companyIndustryMap.aec,
    strengths: list(
      ["Multidisciplinary engineering review", "Fire and life safety coordination", "Infrastructure, traffic, and hydrology study support", "Construction supervision and project management advisory"],
      ["مراجعة هندسية متعددة التخصصات", "تنسيق السلامة من الحريق وسلامة الأرواح", "دعم دراسات البنية التحتية والمرور والهيدرولوجيا", "استشارات الإشراف وإدارة المشاريع"]
    ),
    methodology: list(
      ["Confirm scope, available drawings, and required study inputs.", "Review documents for design, coordination, and constructability concerns.", "Issue practical comments, study notes, or advisory recommendations.", "Support revision cycles and help align project teams around clear next steps."],
      ["تأكيد النطاق والرسومات والمدخلات المطلوبة للدراسة.", "مراجعة المستندات من منظور التصميم والتنسيق وقابلية التنفيذ.", "إصدار ملاحظات عملية أو توصيات استشارية.", "دعم دورات التعديل وتنسيق الخطوات التالية بوضوح."]
    ),
    proofPoints: list(
      ["Source profile available for gated review", "Engineering, fire safety, traffic, hydrology, supervision, and PM service families documented", "Saudi project-support positioning without approval claims"],
      ["ملف تعريفي متاح للمراجعة عند الطلب", "توثيق عائلات خدمات الهندسة والسلامة والمرور والهيدرولوجيا والإشراف وإدارة المشاريع", "تموضع داعم للمشاريع السعودية دون ادعاءات اعتماد"]
    ),
    cta: lt("Request Engineering Support", "طلب دعم هندسي"),
    logo: "/assets/logos/arkon-engineering-logo.webp"
  },
  {
    id: "elite",
    slug: "elite-security-consultancy",
    shortName: "ELITE",
    name: lt("ELITE Security Consultancy Co.", "شركة إيليت للاستشارات الأمنية"),
    summary: lt(
      "Security consultancy for HCIS / SAIS readiness, risk assessment, design review, documentation, systems advisory, and operational readiness.",
      "استشارات أمنية تشمل جاهزية HCIS / SAIS وتقييم المخاطر ومراجعة التصميم والوثائق والأنظمة وجاهزية التشغيل."
    ),
    positioning: lt(
      "The security consultancy arm for risk-aware planning, advisory documentation, and security readiness workflows.",
      "الذراع الاستشاري الأمني لتخطيط المخاطر وإعداد المستندات الاستشارية ومسارات الجاهزية الأمنية."
    ),
    overview: lt(
      "ELITE Security Consultancy Co. helps project teams understand security requirements, organize risk information, and prepare documentation for security-facing workflows. The company’s public website language remains advisory and readiness-focused; it does not claim authority approval, certification, or guaranteed acceptance.",
      "تساعد شركة إيليت للاستشارات الأمنية فرق المشاريع على فهم المتطلبات الأمنية وتنظيم معلومات المخاطر وإعداد المستندات لمسارات العمل المرتبطة بالأمن. تبقى لغة الموقع استشارية ومرتبطة بالجاهزية دون ادعاء اعتماد أو موافقة أو ضمان قبول."
    ),
    services: companyServices.elite,
    industries: companyIndustryMap.elite,
    strengths: list(
      ["HCIS / SAIS readiness advisory", "Risk assessment and mitigation planning", "Concept security design review", "Operational readiness documentation"],
      ["استشارات جاهزية HCIS / SAIS", "تقييم المخاطر وتخطيط إجراءات التخفيف", "مراجعة التصميم الأمني المفاهيمي", "توثيق الجاهزية التشغيلية"]
    ),
    methodology: list(
      ["Review project context, facility type, and security expectations.", "Identify risk areas, documentation gaps, and readiness priorities.", "Prepare advisory notes, matrices, and security concept inputs.", "Coordinate revisions with project stakeholders and technical teams."],
      ["مراجعة سياق المشروع ونوع المنشأة والتوقعات الأمنية.", "تحديد مناطق المخاطر وفجوات التوثيق وأولويات الجاهزية.", "إعداد الملاحظات والمصفوفات ومدخلات المفهوم الأمني.", "تنسيق التعديلات مع أصحاب المصلحة والفرق الفنية."]
    ),
    proofPoints: list(
      ["Security profile and proposal references available as source material", "HCIS / SAIS wording used as advisory readiness only", "No authority approval or certification claim"],
      ["ملفات تعريف ومراجع مقترحات أمنية متاحة كمصدر", "استخدام مصطلحات HCIS / SAIS كجاهزية استشارية فقط", "لا توجد ادعاءات موافقة أو اعتماد"]
    ),
    cta: lt("Discuss Security Consultancy", "مناقشة الاستشارات الأمنية"),
    logo: "/assets/logos/elite-security-logo.webp"
  },
  {
    id: "ibs",
    slug: "integrated-building-systems",
    shortName: "IBS",
    name: lt("Integrated Building Systems", "شركة أنظمة المباني المتكاملة"),
    summary: lt(
      "Construction and technical services across civil works, MEP works, steel structures, finishing, maintenance, and prefabricated units.",
      "أعمال بناء وخدمات فنية تشمل الأعمال المدنية وMEP والهياكل الفولاذية والتشطيبات والصيانة والوحدات مسبقة التجهيز."
    ),
    positioning: lt(
      "The construction and technical works arm for site-focused execution support, coordination, and handover readiness.",
      "ذراع أعمال البناء والخدمات الفنية لدعم التنفيذ الموقعي والتنسيق وجاهزية التسليم."
    ),
    overview: lt(
      "Integrated Building Systems supports project teams that need practical site capability and technical coordination across civil, MEP, steel, finishing, maintenance, and prefabricated unit scopes. The focus is on organized execution planning, interface awareness, and disciplined follow-through.",
      "تدعم شركة أنظمة المباني المتكاملة فرق المشاريع التي تحتاج إلى قدرة ميدانية عملية وتنسيق فني في الأعمال المدنية وMEP والهياكل والتشطيبات والصيانة والوحدات مسبقة التجهيز. يركز العمل على التخطيط المنظم للتنفيذ وفهم الواجهات والمتابعة المنضبطة."
    ),
    services: companyServices.ibs,
    industries: companyIndustryMap.ibs,
    strengths: list(
      ["Civil, MEP, steel, finishing, and maintenance scopes", "Site coordination and execution planning", "Prefabricated units and temporary facilities support", "Interface-aware technical delivery"],
      ["نطاقات مدنية وMEP وهياكل وتشطيبات وصيانة", "تنسيق الموقع وتخطيط التنفيذ", "دعم الوحدات مسبقة التجهيز والمرافق المؤقتة", "تنفيذ فني واعٍ بواجهات المشروع"]
    ),
    methodology: list(
      ["Confirm site scope, constraints, and required sequence.", "Coordinate technical interfaces and execution responsibilities.", "Plan resources, documentation, and handover expectations.", "Track progress, site notes, and closeout requirements."],
      ["تأكيد نطاق الموقع والقيود وتسلسل التنفيذ المطلوب.", "تنسيق الواجهات الفنية ومسؤوليات التنفيذ.", "تخطيط الموارد والمستندات ومتطلبات التسليم.", "متابعة التقدم وملاحظات الموقع ومتطلبات الإغلاق."]
    ),
    proofPoints: list(
      ["IBS profile available as source reference", "Civil, MEP, steel, finishing, maintenance, and prefab categories documented", "Execution support described without unsupported project volume claims"],
      ["ملف IBS متاح كمصدر مرجعي", "توثيق فئات الأعمال المدنية وMEP والهياكل والتشطيبات والصيانة والمسبق التجهيز", "وصف دعم التنفيذ دون ادعاءات أرقام مشاريع غير مؤكدة"]
    ),
    cta: lt("Request Technical Works Support", "طلب دعم الأعمال الفنية"),
    logo: "/assets/logos/ibs-logo.webp"
  },
  {
    id: "qic",
    slug: "quality-inspection-company",
    shortName: "QIC",
    name: lt("Quality Inspection Company", "شركة فحوصات الجودة"),
    summary: lt(
      "Testing and inspection support for geotechnical investigation, soil, concrete, asphalt, construction materials, water, and air quality testing.",
      "دعم في الفحوصات والاختبارات يشمل الجيوتقنية والتربة والخرسانة والأسفلت ومواد البناء وجودة المياه والهواء."
    ),
    positioning: lt(
      "The testing and inspection arm for practical quality evidence, sample coordination, and technical reporting support.",
      "ذراع الفحوصات والاختبارات لدعم أدلة الجودة وتنسيق العينات وإعداد التقارير الفنية."
    ),
    overview: lt(
      "Quality Inspection Company supports construction, infrastructure, and facility teams with testing and inspection workflows that help maintain technical records and quality evidence. Public copy focuses on support, coordination, and reporting rather than unsupported laboratory accreditation claims.",
      "تدعم شركة فحوصات الجودة فرق البناء والبنية التحتية والمنشآت من خلال مسارات فحوصات واختبارات تساعد على الحفاظ على السجلات الفنية وأدلة الجودة. تركز لغة الموقع على الدعم والتنسيق والتقارير دون ادعاءات اعتماد مختبر غير موثقة."
    ),
    services: companyServices.qic,
    industries: companyIndustryMap.qic,
    strengths: list(
      ["Geotechnical investigation and soil testing support", "Construction material, asphalt, and concrete testing workflows", "Water and air quality testing coordination", "Technical records for project quality evidence"],
      ["دعم الدراسات الجيوتقنية واختبارات التربة", "مسارات فحص مواد البناء والأسفلت والخرسانة", "تنسيق اختبارات جودة المياه والهواء", "سجلات فنية لأدلة الجودة في المشاريع"]
    ),
    methodology: list(
      ["Define required tests, sample points, and project information.", "Coordinate field or material inputs with the project team.", "Track sample status, testing workflow, and reporting needs.", "Support technical recordkeeping and next-step coordination."],
      ["تحديد الاختبارات المطلوبة ونقاط العينات ومعلومات المشروع.", "تنسيق المدخلات الميدانية أو مواد الاختبار مع فريق المشروع.", "متابعة حالة العينات ومسار الاختبار واحتياجات التقرير.", "دعم حفظ السجلات الفنية وتنسيق الخطوات التالية."]
    ),
    proofPoints: list(
      ["QIC logo asset supplied", "Testing categories aligned with source planning documents", "No unsupported accreditation, authority, or ranking language"],
      ["تم توفير شعار QIC", "فئات الاختبار متوافقة مع وثائق التخطيط المصدرية", "لا توجد لغة اعتماد أو جهة أو ترتيب غير مدعومة"]
    ),
    cta: lt("Request Testing Support", "طلب دعم الفحوصات"),
    logo: "/assets/logos/qic-logo.webp"
  },
  {
    id: "tp-digital",
    slug: "turning-point-digital-marketing",
    shortName: "TP Digital",
    name: lt("Turning Point Digital Marketing Co.", "شركة نقطة تحول للتسويق الرقمي"),
    summary: lt(
      "Digital marketing services for strategy, social media, performance marketing, websites, creative content, podcast studio, and digital management software.",
      "خدمات تسويق رقمي تشمل الاستراتيجية وإدارة التواصل والتسويق بالأداء والمواقع والمحتوى واستوديو البودكاست وبرامج الإدارة."
    ),
    positioning: lt(
      "The digital growth arm for marketing strategy, content systems, performance campaigns, web presence, and reporting workflows.",
      "ذراع النمو الرقمي لاستراتيجية التسويق وأنظمة المحتوى وحملات الأداء والحضور الإلكتروني ومسارات التقارير."
    ),
    overview: lt(
      "Turning Point Digital Marketing Co. helps organizations plan, launch, manage, and measure digital activity. Services connect strategy, content, social media, landing pages, podcast production support, and management software so teams can communicate more consistently.",
      "تساعد شركة نقطة تحول للتسويق الرقمي الجهات على تخطيط وإطلاق وإدارة وقياس نشاطها الرقمي. تربط الخدمات بين الاستراتيجية والمحتوى ومنصات التواصل وصفحات الهبوط ودعم إنتاج البودكاست وبرامج الإدارة لرفع اتساق التواصل."
    ),
    services: companyServices["tp-digital"],
    industries: companyIndustryMap["tp-digital"],
    strengths: list(
      ["Digital strategy and campaign roadmaps", "Social media and performance marketing workflows", "Website and landing page support", "Creative content, podcast, and reporting systems"],
      ["استراتيجية رقمية وخرائط طريق للحملات", "مسارات إدارة التواصل والتسويق بالأداء", "دعم المواقع وصفحات الهبوط", "أنظمة محتوى وبودكاست وتقارير"]
    ),
    methodology: list(
      ["Clarify business goals, audiences, and channels.", "Build a campaign, content, or website roadmap.", "Produce assets and launch measured activity.", "Review reporting and optimize the next cycle."],
      ["توضيح الأهداف والجمهور والقنوات.", "بناء خارطة طريق للحملة أو المحتوى أو الموقع.", "إنتاج الأصول وإطلاق النشاط القابل للقياس.", "مراجعة التقارير وتحسين الدورة التالية."]
    ),
    proofPoints: list(
      ["Turning Point profile available as source reference", "Digital strategy, social media, performance, web, content, podcast, and software service families documented", "No exaggerated market ranking claims"],
      ["ملف نقطة تحول متاح كمصدر مرجعي", "توثيق فئات الاستراتيجية والتواصل والأداء والمواقع والمحتوى والبودكاست والبرامج", "لا توجد ادعاءات مبالغ فيها عن الترتيب السوقي"]
    ),
    cta: lt("Plan Digital Growth", "تخطيط النمو الرقمي"),
    logo: "/assets/logos/turning-point-logo.webp"
  }
];

const termTranslations: Record<string, string> = {
  Developers: "المطورون",
  "Master developers": "المطورون الرئيسيون",
  Consultants: "الاستشاريون",
  Contractors: "المقاولون",
  "Facility owners": "ملاك المنشآت",
  Operators: "المشغلون",
  "Project owners": "ملاك المشاريع",
  "Project teams": "فرق المشاريع",
  "Facilities teams": "فرق المرافق",
  "Infrastructure teams": "فرق البنية التحتية",
  "Corporate teams": "الفرق المؤسسية",
  "Service companies": "شركات الخدمات",
  "Project brands": "علامات المشاريع",
  "Industrial facilities": "المنشآت الصناعية",
  "Critical facilities": "المنشآت الحساسة",
  "Commercial projects": "المشاريع التجارية",
  "Hospitality projects": "مشاريع الضيافة",
  "Logistics projects": "مشاريع الخدمات اللوجستية"
};

const serviceProfiles: Record<CompanyId, Omit<Service, "slug" | "companyId" | "title" | "summary" | "relatedSlugs" | "cta">> = {
  aec: {
    category: lt("Engineering Consultancy", "الاستشارات الهندسية"),
    covers: list(
      ["Scope and document review", "Technical coordination comments", "Study and report support", "Revision and stakeholder coordination"],
      ["مراجعة النطاق والمستندات", "ملاحظات التنسيق الفني", "دعم الدراسات والتقارير", "تنسيق التعديلات وأصحاب المصلحة"]
    ),
    deliverables: list(
      ["Design review notes", "Coordination matrices", "Technical recommendations", "Study-ready documentation"],
      ["ملاحظات مراجعة التصميم", "مصفوفات التنسيق", "توصيات فنية", "مستندات جاهزة للدراسة"]
    ),
    clients: localizeTerms(["Developers", "Consultants", "Contractors", "Project owners"]),
    process: list(
      ["Confirm scope and available inputs", "Review drawings and technical documents", "Identify coordination issues", "Issue advisory comments", "Support revision closeout"],
      ["تأكيد النطاق والمدخلات المتاحة", "مراجعة الرسومات والمستندات الفنية", "تحديد مشكلات التنسيق", "إصدار الملاحظات الاستشارية", "دعم إغلاق التعديلات"]
    ),
    complianceNote: lt(
      "Work is framed as advisory readiness and technical support. Authority approval or certification is not claimed unless separately documented.",
      "يتم تقديم العمل كدعم استشاري وفني للجاهزية. لا يتم ادعاء موافقة أو اعتماد من جهة إلا إذا تم توثيقه بشكل مستقل."
    )
  },
  elite: {
    category: lt("Security Consultancy", "الاستشارات الأمنية"),
    covers: list(
      ["Security requirement review", "Risk and vulnerability inputs", "Concept security design support", "Readiness documentation"],
      ["مراجعة المتطلبات الأمنية", "مدخلات المخاطر ونقاط الضعف", "دعم التصميم الأمني المفاهيمي", "مستندات الجاهزية"]
    ),
    deliverables: list(
      ["Risk notes", "Security concept inputs", "Documentation checklists", "Readiness action items"],
      ["ملاحظات المخاطر", "مدخلات المفهوم الأمني", "قوائم تدقيق المستندات", "إجراءات الجاهزية"]
    ),
    clients: localizeTerms(["Facility owners", "Operators", "Project teams", "Industrial facilities", "Critical facilities"]),
    process: list(
      ["Review facility context", "Identify security expectations", "Assess gaps and risk priorities", "Prepare advisory documentation", "Coordinate readiness actions"],
      ["مراجعة سياق المنشأة", "تحديد التوقعات الأمنية", "تقييم الفجوات وأولويات المخاطر", "إعداد المستندات الاستشارية", "تنسيق إجراءات الجاهزية"]
    ),
    complianceNote: lt(
      "HCIS / SAIS language is used for advisory readiness only; the site does not claim authority approval, certification, or guaranteed acceptance.",
      "تستخدم مصطلحات HCIS / SAIS لبيان الجاهزية الاستشارية فقط؛ ولا يدعي الموقع موافقة أو اعتماداً أو ضمان قبول."
    )
  },
  ibs: {
    category: lt("Construction and Technical Services", "أعمال البناء والخدمات الفنية"),
    covers: list(
      ["Site scope confirmation", "Technical interface coordination", "Execution planning", "Handover readiness support"],
      ["تأكيد نطاق الموقع", "تنسيق الواجهات الفنية", "تخطيط التنفيذ", "دعم جاهزية التسليم"]
    ),
    deliverables: list(
      ["Execution notes", "Site coordination records", "Material and interface inputs", "Closeout action tracking"],
      ["ملاحظات التنفيذ", "سجلات تنسيق الموقع", "مدخلات المواد والواجهات", "متابعة إجراءات الإغلاق"]
    ),
    clients: localizeTerms(["Developers", "Contractors", "Facilities teams", "Commercial projects"]),
    process: list(
      ["Confirm scope and constraints", "Map interfaces and sequence", "Coordinate resources and documents", "Track progress and site notes", "Support handover requirements"],
      ["تأكيد النطاق والقيود", "رسم الواجهات وتسلسل التنفيذ", "تنسيق الموارد والمستندات", "متابعة التقدم وملاحظات الموقع", "دعم متطلبات التسليم"]
    ),
    complianceNote: lt(
      "Technical works are described as execution and coordination support based on the project scope, specifications, and approved client documentation.",
      "توصف الأعمال الفنية كدعم للتنفيذ والتنسيق بناءً على نطاق المشروع والمواصفات والمستندات المعتمدة من العميل."
    )
  },
  qic: {
    category: lt("Testing and Inspection", "الفحوصات والاختبارات"),
    covers: list(
      ["Testing requirement definition", "Sample and field coordination", "Technical records", "Reporting workflow support"],
      ["تحديد متطلبات الاختبار", "تنسيق العينات والعمل الميداني", "السجلات الفنية", "دعم مسار التقارير"]
    ),
    deliverables: list(
      ["Testing coordination plan", "Sample tracking notes", "Technical report inputs", "Quality evidence records"],
      ["خطة تنسيق الاختبارات", "ملاحظات متابعة العينات", "مدخلات التقارير الفنية", "سجلات أدلة الجودة"]
    ),
    clients: localizeTerms(["Developers", "Contractors", "Infrastructure teams", "Industrial facilities"]),
    process: list(
      ["Define test needs", "Coordinate samples and site inputs", "Track workflow status", "Support reporting and recordkeeping", "Coordinate next technical steps"],
      ["تحديد احتياجات الاختبار", "تنسيق العينات ومدخلات الموقع", "متابعة حالة مسار العمل", "دعم التقارير وحفظ السجلات", "تنسيق الخطوات الفنية التالية"]
    ),
    complianceNote: lt(
      "Testing content is presented as coordination and reporting support; no unsupported accreditation or authority status is claimed.",
      "يتم تقديم محتوى الاختبارات كدعم للتنسيق والتقارير دون ادعاء اعتماد أو صفة رسمية غير موثقة."
    )
  },
  "tp-digital": {
    category: lt("Digital Marketing", "التسويق الرقمي"),
    covers: list(
      ["Goal and audience discovery", "Channel and content planning", "Campaign and website execution support", "Reporting and optimization"],
      ["تحليل الأهداف والجمهور", "تخطيط القنوات والمحتوى", "دعم تنفيذ الحملات والمواقع", "التقارير والتحسين"]
    ),
    deliverables: list(
      ["Digital roadmap", "Content and campaign plan", "Landing page or website scope", "Performance reporting framework"],
      ["خارطة طريق رقمية", "خطة محتوى وحملات", "نطاق صفحة هبوط أو موقع", "إطار تقارير الأداء"]
    ),
    clients: localizeTerms(["Corporate teams", "Service companies", "Project brands", "Commercial projects"]),
    process: list(
      ["Define goals and channels", "Plan content and campaign structure", "Produce launch assets", "Measure performance", "Optimize the next cycle"],
      ["تحديد الأهداف والقنوات", "تخطيط بنية المحتوى والحملة", "إنتاج أصول الإطلاق", "قياس الأداء", "تحسين الدورة التالية"]
    ),
    complianceNote: lt(
      "Digital services are positioned around planning, execution support, and reporting. Results depend on scope, audience, budget, and ongoing optimization.",
      "تتمحور الخدمات الرقمية حول التخطيط ودعم التنفيذ والتقارير. تعتمد النتائج على النطاق والجمهور والميزانية والتحسين المستمر."
    )
  }
};

const serviceDetailOverrides: Record<string, Partial<Service>> = {
  "Fire and Life Safety Consultancy": {
    summary: lt(
      "Technical fire and life safety consultancy for project teams that need clear design review, coordination support, and safer building planning.",
      "استشارات فنية للسلامة من الحريق وسلامة الأرواح لفرق المشاريع التي تحتاج إلى مراجعة تصميم واضحة ودعم تنسيقي وتخطيط أكثر أماناً للمباني."
    ),
    covers: list(
      ["Fire and life safety design review", "Evacuation and access coordination", "Fire protection interface comments", "Advisory notes for revision cycles"],
      ["مراجعة تصميم السلامة من الحريق وسلامة الأرواح", "تنسيق الإخلاء والوصول", "ملاحظات واجهات أنظمة الحماية من الحريق", "ملاحظات استشارية لدورات التعديل"]
    ),
    relatedSlugs: ["mep-engineering-consultancy", "construction-supervision-consultancy", "security-design-review"]
  },
  "Traffic Impact Studies": {
    summary: lt(
      "Traffic impact study support for owners and consultants planning access, circulation, parking, and surrounding network coordination.",
      "دعم دراسات الأثر المروري للملاك والاستشاريين عند تخطيط المداخل والحركة والمواقف والتنسيق مع الشبكات المحيطة."
    ),
    covers: list(
      ["Access and circulation review", "Parking and movement assumptions", "Trip generation inputs", "Junction and surrounding network notes"],
      ["مراجعة المداخل والحركة", "افتراضات المواقف والتنقل", "مدخلات توليد الرحلات", "ملاحظات التقاطعات والشبكة المحيطة"]
    ),
    relatedSlugs: ["infrastructure-engineering-consultancy", "project-management-consultancy", "hydrology-and-stormwater-studies"]
  },
  "Hydrology and Stormwater Studies": {
    summary: lt(
      "Hydrology and stormwater study support for project teams assessing drainage, runoff, site constraints, and infrastructure coordination.",
      "دعم دراسات الهيدرولوجيا وتصريف مياه الأمطار لفرق المشاريع التي تراجع التصريف والجريان وقيود الموقع وتنسيق البنية التحتية."
    ),
    covers: list(
      ["Hydrology input review", "Stormwater and drainage assumptions", "Catchment and runoff coordination", "Infrastructure interface notes"],
      ["مراجعة مدخلات الهيدرولوجيا", "افتراضات تصريف مياه الأمطار", "تنسيق أحواض التصريف والجريان", "ملاحظات واجهات البنية التحتية"]
    ),
    relatedSlugs: ["infrastructure-engineering-consultancy", "traffic-impact-studies", "geotechnical-investigation"]
  },
  "HCIS / SAIS Security Consultancy": {
    summary: lt(
      "Security consultancy support for project teams preparing HCIS / SAIS-related concepts, documentation, and readiness workflows.",
      "دعم استشاري أمني لفرق المشاريع التي تجهز مفاهيم ووثائق ومسارات جاهزية مرتبطة بـ HCIS / SAIS."
    ),
    covers: list(
      ["Security requirement review", "Concept security design inputs", "Risk and gap documentation", "Readiness action planning"],
      ["مراجعة المتطلبات الأمنية", "مدخلات التصميم الأمني المفاهيمي", "توثيق المخاطر والفجوات", "تخطيط إجراءات الجاهزية"]
    ),
    relatedSlugs: ["security-risk-assessment", "security-design-review", "security-compliance-documentation"]
  },
  "Security Risk Assessment": {
    summary: lt(
      "Structured security risk assessment support for facilities, developments, and project teams that need clearer risk visibility and mitigation planning.",
      "دعم منظم لتقييم المخاطر الأمنية للمنشآت والمشاريع التي تحتاج إلى وضوح أكبر للمخاطر وتخطيط لإجراءات التخفيف."
    ),
    covers: list(
      ["Threat context review", "Asset and vulnerability inputs", "Risk prioritization", "Mitigation recommendations"],
      ["مراجعة سياق التهديدات", "مدخلات الأصول ونقاط الضعف", "ترتيب أولويات المخاطر", "توصيات إجراءات التخفيف"]
    ),
    relatedSlugs: ["hcis-sais-security-consultancy", "security-design-review", "operational-security-readiness"]
  },
  "Security Design Review": {
    summary: lt(
      "Security design review for project teams coordinating zoning, access control, perimeter planning, and security-system interfaces.",
      "مراجعة التصميم الأمني لفرق المشاريع التي تنسق التقسيم الأمني والتحكم بالدخول وتخطيط المحيط وواجهات الأنظمة الأمنية."
    ),
    covers: list(
      ["Security zoning review", "Access control and perimeter comments", "Control room and system interface notes", "Drawing review support"],
      ["مراجعة التقسيم الأمني", "ملاحظات التحكم بالدخول والمحيط", "ملاحظات غرفة التحكم وواجهات الأنظمة", "دعم مراجعة الرسومات"]
    ),
    relatedSlugs: ["security-systems-consultancy", "security-risk-assessment", "hcis-sais-security-consultancy"]
  },
  "Civil Works": {
    summary: lt(
      "Civil works support for project teams that need coordinated site execution, practical sequencing, and technical follow-through.",
      "دعم الأعمال المدنية لفرق المشاريع التي تحتاج إلى تنفيذ موقعي منسق وتسلسل عملي ومتابعة فنية."
    ),
    relatedSlugs: ["steel-structures", "mep-works", "construction-supervision-consultancy"]
  },
  "MEP Works": {
    summary: lt(
      "MEP works support for mechanical, electrical, and plumbing coordination, installation planning, and handover readiness.",
      "دعم أعمال MEP لتنسيق الأنظمة الميكانيكية والكهربائية والسباكة وتخطيط التركيب وجاهزية التسليم."
    ),
    relatedSlugs: ["mep-engineering-consultancy", "civil-works", "building-maintenance"]
  },
  "Steel Structures": {
    summary: lt(
      "Steel structure works support for technical coordination, site planning, interface review, and delivery follow-through.",
      "دعم أعمال الهياكل الفولاذية من خلال التنسيق الفني وتخطيط الموقع ومراجعة الواجهات ومتابعة التنفيذ."
    ),
    relatedSlugs: ["civil-works", "structural-engineering-consultancy", "finishing-works"]
  },
  "Geotechnical Investigation": {
    summary: lt(
      "Geotechnical investigation support for project teams assessing subsurface conditions, foundation inputs, and construction planning requirements.",
      "دعم الدراسات الجيوتقنية لفرق المشاريع التي تراجع ظروف التربة ومدخلات الأساسات ومتطلبات تخطيط التنفيذ."
    ),
    relatedSlugs: ["soil-testing", "construction-material-testing", "hydrology-and-stormwater-studies"]
  },
  "Soil Testing": {
    summary: lt(
      "Soil testing support for sample coordination, classification inputs, compaction-related evidence, and technical reporting workflows.",
      "دعم اختبارات التربة لتنسيق العينات ومدخلات التصنيف وأدلة الدمك ومسارات التقارير الفنية."
    ),
    relatedSlugs: ["geotechnical-investigation", "construction-material-testing", "concrete-testing"]
  },
  "Construction Material Testing": {
    summary: lt(
      "Construction material testing support for sample coordination, technical records, and practical quality evidence.",
      "دعم اختبارات مواد البناء لتنسيق العينات والسجلات الفنية وأدلة الجودة العملية."
    ),
    relatedSlugs: ["soil-testing", "asphalt-testing", "concrete-testing"]
  },
  "Digital Marketing Strategy": {
    summary: lt(
      "Digital marketing strategy support for teams that need a clear roadmap for channels, campaigns, content, and performance reporting.",
      "دعم استراتيجية التسويق الرقمي للفرق التي تحتاج إلى خارطة طريق واضحة للقنوات والحملات والمحتوى وتقارير الأداء."
    ),
    relatedSlugs: ["social-media-management", "performance-marketing", "website-and-landing-page-development"]
  },
  "Website and Landing Page Development": {
    summary: lt(
      "Website and landing page development support for campaign pages, corporate service pages, content structure, and conversion pathways.",
      "دعم تطوير المواقع وصفحات الهبوط لصفحات الحملات والخدمات المؤسسية وهيكلة المحتوى ومسارات التحويل."
    ),
    relatedSlugs: ["digital-marketing-strategy", "performance-marketing", "creative-content-and-podcast-studio"]
  }
};

export const services: Service[] = companies.flatMap((company) => {
  const profile = serviceProfiles[company.id];

  return company.services.map((serviceItem) => {
    const override = serviceDetailOverrides[serviceItem.en] || {};
    const slug = slugify(serviceItem.en);

    return {
      slug,
      companyId: company.id,
      category: profile.category,
      title: serviceItem,
      summary: override.summary || lt(
        `${serviceItem.en} support delivered through ${company.name.en}, with practical review, documentation, and coordination for Saudi project teams.`,
        `دعم في ${serviceItem.ar} من خلال ${company.name.ar}، مع مراجعة عملية وتنسيق وإعداد مستندات لفرق المشاريع في المملكة.`
      ),
      covers: override.covers || profile.covers,
      deliverables: override.deliverables || profile.deliverables,
      clients: override.clients || profile.clients,
      process: override.process || profile.process,
      complianceNote: override.complianceNote || profile.complianceNote,
      relatedSlugs: override.relatedSlugs || relatedServiceSlugs(company.id, slug),
      cta: override.cta || lt(`Request ${serviceItem.en}`, `طلب ${serviceItem.ar}`)
    };
  });
});

export const downloads: DownloadAsset[] = [
  download("ARKON Group Credentials", "ملف تعريف مجموعة أركون", "ARKON Group", "مجموعة أركون", "ARKON Group Credentials", "ملفات مجموعة أركون", "Overview of the ARKON Group ecosystem and five-company structure. Request access for the approved profile package.", "نظرة عامة على منظومة مجموعة أركون وهيكل الشركات الخمس. يمكن طلب الوصول إلى ملف التعريف المعتمد.", true, "EN-AR"),
  download("AEC Engineering Services Brochure", "كتيب خدمات أركون الهندسية", "ARKON Engineering Consultancy Co.", "شركة أركون للاستشارات الهندسية", "Company Profiles", "ملفات الشركات", "Engineering consultancy capability overview for project teams. Source profile is available in the secured asset package.", "نظرة عامة على قدرات الاستشارات الهندسية لفرق المشاريع. الملف المصدر متاح ضمن حزمة الأصول المؤمنة.", true, "EN"),
  download("ELITE Security Consultancy Brochure", "كتيب استشارات إيليت الأمنية", "ELITE Security Consultancy Co.", "شركة إيليت للاستشارات الأمنية", "Company Profiles", "ملفات الشركات", "Security consultancy overview for risk, design review, and readiness support. Access should be routed through the request form.", "نظرة عامة على الاستشارات الأمنية لتقييم المخاطر ومراجعة التصميم ودعم الجاهزية. يتم طلب الوصول عبر النموذج.", true, "EN"),
  download("IBS Construction Services Profile", "ملف خدمات البناء لأنظمة المباني المتكاملة", "Integrated Building Systems", "شركة أنظمة المباني المتكاملة", "Company Profiles", "ملفات الشركات", "Construction and technical services profile available as a gated document.", "ملف أعمال البناء والخدمات الفنية متاح كمستند عند الطلب.", true, "AR"),
  download("QIC Testing Capability Sheet", "ملف قدرات فحوصات الجودة", "Quality Inspection Company", "شركة فحوصات الجودة", "Service Brochures", "كتيبات الخدمات", "Testing and inspection capability overview prepared for publication review.", "نظرة عامة على قدرات الفحوصات والاختبارات جاهزة لمراجعة النشر.", true, "EN-AR"),
  download("TP Digital Marketing Services", "كتيب خدمات نقطة تحول الرقمية", "Turning Point Digital Marketing Co.", "شركة نقطة تحول للتسويق الرقمي", "Company Profiles", "ملفات الشركات", "Digital marketing services profile available as a gated Arabic source reference.", "ملف خدمات التسويق الرقمي متاح كمرجع عربي عند الطلب.", true, "AR"),
  download("Project Request Checklist", "قائمة معلومات طلب المشروع", "ARKON Group", "مجموعة أركون", "Forms and Templates", "نماذج وقوالب", "A practical checklist for preparing project location, scope, drawings, timeline, and required service before submitting a request.", "قائمة عملية لتجهيز موقع المشروع والنطاق والرسومات والجدول الزمني والخدمة المطلوبة قبل إرسال الطلب.", false, "EN-AR")
];

export const ui = {
  requestProposal: lt("Request a Technical Proposal", "طلب عرض فني"),
  requestProposalShort: lt("Request Proposal", "طلب عرض"),
  exploreServices: lt("Explore Services", "استكشاف الخدمات"),
  viewCompanies: lt("View Companies", "عرض الشركات"),
  downloadProfile: lt("Download Company Profile", "تحميل ملف الشركة"),
  downloadCenter: lt("Download Center", "مركز التنزيلات"),
  contactUs: lt("Contact Us", "اتصل بنا"),
  speakTeam: lt("Speak to Our Team", "تحدث مع فريقنا"),
  gated: lt("Request access", "طلب الوصول"),
  download: lt("Download", "تحميل"),
  learnMore: lt("Learn more", "معرفة المزيد")
} as const;

export function t(locale: Locale, text: LocalizedText): string {
  return text[locale];
}

function lt(en: string, ar: string): LocalizedText {
  return { en, ar };
}

function list(en: string[], ar: string[]): LocalizedText[] {
  return en.map((item, index) => lt(item, ar[index] || item));
}

function localizeTerms(values: string[]): LocalizedText[] {
  return values.map((value) => lt(value, termTranslations[value] || value));
}

function relatedServiceSlugs(companyId: CompanyId, currentSlug: string): string[] {
  return companyServices[companyId]
    .map((item) => slugify(item.en))
    .filter((slug) => slug !== currentSlug)
    .slice(0, 3);
}

function download(titleEn: string, titleAr: string, companyEn: string, companyAr: string, categoryEn: string, categoryAr: string, descriptionEn: string, descriptionAr: string, gated: boolean, language: DownloadAsset["language"]): DownloadAsset {
  return {
    title: lt(titleEn, titleAr),
    company: lt(companyEn, companyAr),
    category: lt(categoryEn, categoryAr),
    description: lt(descriptionEn, descriptionAr),
    type: "PDF",
    language,
    gated,
    version: "v1",
    updated: "2026-07"
  };
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/\/|&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
