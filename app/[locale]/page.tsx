import Image from "next/image";
import type { Metadata } from "next";
import type { Locale } from "@/types";
import { industries, site, ui } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { CompanyGrid } from "@/components/sections/CompanyGrid";
import { LocaleLink } from "@/components/layout/LocaleLink";

const capabilities = [
  { en: "Engineering Consultancy", ar: "الاستشارات الهندسية", icon: "⌘" },
  { en: "Security & HCIS/SAIS Consultancy", ar: "استشارات الأمن وHCIS/SAIS", icon: "◇" },
  { en: "Project Management & Supervision", ar: "إدارة المشاريع والإشراف", icon: "▦" },
  { en: "Construction & MEP Works", ar: "أعمال البناء وMEP", icon: "▥" },
  { en: "Quality Inspection & Testing", ar: "فحوصات الجودة والاختبارات", icon: "◎" },
  { en: "Traffic & Transport Studies", ar: "دراسات المرور والنقل", icon: "⌁" },
  { en: "Environmental Consultancy", ar: "الاستشارات البيئية", icon: "✧" },
  { en: "Digital Marketing & Branding", ar: "التسويق الرقمي والهوية", icon: "✦" }
];

const sectorCards = [
  { en: "Government & Public Sector", ar: "القطاع الحكومي والعام" },
  { en: "Oil, Gas & Energy", ar: "النفط والغاز والطاقة" },
  { en: "Infrastructure & Transportation", ar: "البنية التحتية والنقل" },
  { en: "Commercial & Residential", ar: "التجاري والسكني" },
  { en: "Industrial Facilities", ar: "المنشآت الصناعية" },
  { en: "Hospitality & Tourism", ar: "الضيافة والسياحة" }
];

const trustStats = [
  { value: "5", en: "Specialized companies", ar: "شركات متخصصة" },
  { value: "1", en: "Integrated ecosystem", ar: "منظومة متكاملة" },
  { value: "EN/AR", en: "Bilingual delivery", ar: "دعم ثنائي اللغة" },
  { value: "KSA", en: "Saudi market focus", ar: "تركيز على السوق السعودي" }
];

const credentialPlaceholders = ["ISO", "SCA", "SASO", "Vision 2030", "Company Profiles"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    title: locale === "ar" ? "مجموعة أركون" : "ARKON Group",
    description: site.description[locale]
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";
  const isArabic = locale === "ar";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: isArabic ? "الرئيسية" : "Home", path: "/" }])} />
      <HeroSection locale={locale} />

      <Section
        eyebrow={isArabic ? "شركاتنا" : "Our companies"}
        title={isArabic ? "خمس شركات. رؤية واحدة." : "Five Companies. One Vision."}
        intro={isArabic ? "شركات متخصصة تعمل معاً لدعم احتياجات المشاريع من الاستشارة إلى التنفيذ والفحص والنمو الرقمي." : "Specialized companies working together to support project needs from advisory through delivery, testing, and digital growth."}
      >
        <CompanyGrid locale={locale} />
      </Section>

      <Section
        className="bg-white"
        eyebrow={isArabic ? "ما الذي نقدمه" : "What we do"}
        title={isArabic ? "قدرات أركون الأساسية" : "Our Core Capabilities"}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => (
            <article key={capability.en} className="flex min-h-24 items-center gap-4 rounded-xl border border-arkon-line bg-arkon-pearl2 p-5 shadow-sm transition hover:border-arkon-gold/50 hover:bg-white">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-arkon-gold/35 bg-white text-2xl text-arkon-gold">
                {capability.icon}
              </span>
              <h3 className="text-lg font-black leading-snug text-arkon-navy">{capability[locale]}</h3>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <LocaleLink locale={locale} href="/services" className="arkon-btn arkon-btn-ghost">
            {ui.exploreServices[locale]}
          </LocaleLink>
        </div>
      </Section>

      <Section
        eyebrow={isArabic ? "القطاعات التي نخدمها" : "Industries we serve"}
        title={isArabic ? "حلول للمشاريع في قطاعات رئيسية" : "Delivering Solutions Across Key Sectors"}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {sectorCards.map((sector, index) => (
            <article key={sector.en} className="group relative min-h-48 overflow-hidden rounded-xl border border-white bg-arkon-navy shadow-arkon">
              <Image
                src="/images/arkon-pearl-gold-skyline.svg"
                alt=""
                fill
                sizes="(min-width: 1280px) 16vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
                style={{ objectPosition: `${Math.min(80, 28 + index * 10)}% center` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arkon-navy via-arkon-navy/45 to-transparent" />
              <h3 className="absolute inset-x-4 bottom-4 text-center text-base font-black leading-snug text-white">{sector[locale]}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow={isArabic ? "لماذا أركون؟" : "Why ARKON Group?"}
        title={isArabic ? "شريك منظم للمشاريع متعددة التخصصات" : "Your Structured Partner for Complex Projects"}
        intro={isArabic ? "نعرض مؤشرات محافظة يمكن تأكيدها وتوسيعها عند توفر ملفات الاعتماد والأرقام المعتمدة." : "Conservative trust signals are shown here; approved metrics and credentials can be added once supplied."}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustStats.map((stat) => (
              <article key={stat.en} className="rounded-xl border border-arkon-line bg-arkon-pearl2 p-6 text-center">
                <p className="text-4xl font-black text-arkon-gold">{stat.value}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-arkon-muted">{stat[locale]}</p>
              </article>
            ))}
          </div>

          <div className="relative min-h-64 overflow-hidden rounded-2xl border border-arkon-line bg-arkon-navy shadow-arkon">
            <Image src="/images/arkon-pearl-gold-skyline.svg" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy/90 via-arkon-navy/45 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="grid h-20 w-20 place-items-center rounded-full border border-arkon-gold bg-arkon-gold/90 text-2xl font-black text-arkon-navy shadow-glow">▶</span>
            </div>
            <div className="absolute bottom-6 start-6">
              <h3 className="text-2xl font-black text-white">{isArabic ? "نظرة على المجموعة" : "Our Group Overview"}</h3>
              <p className="mt-1 text-sm font-bold text-arkon-gold">{isArabic ? "مكان مخصص للفيديو" : "Video placeholder"}</p>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-10">
        <div className="arkon-container">
          <div className="arkon-navy-panel relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-10">
            <Image src="/images/arkon-pearl-gold-skyline.svg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy via-arkon-navy/86 to-arkon-navy2" />
            <div className="relative">
              <p className="arkon-eyebrow">{isArabic ? "ابدأ مشروعك" : "Start your project"}</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{isArabic ? "لنبنِ المستقبل معاً." : "Let’s Build the Future Together."}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75">
                {isArabic ? "شاركنا معلومات المشروع وسيقوم الفريق المختص بمراجعة الطلب والتواصل معك." : "Tell us about your project and the right specialist team will review the request and respond."}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <LocaleLink locale={locale} href="/request-proposal" className="arkon-btn arkon-btn-gold">
                  {ui.requestProposalShort[locale]} <span aria-hidden="true">→</span>
                </LocaleLink>
                <LocaleLink locale={locale} href="/contact" className="arkon-btn border border-white/35 bg-transparent text-white hover:bg-white/10">
                  {ui.contactUs[locale]} <span aria-hidden="true">→</span>
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        className="pb-20"
        eyebrow={isArabic ? "الاعتمادات والشراكات" : "Credentials & partnerships"}
        title={isArabic ? "ملفات الاعتماد تُضاف بعد التأكيد" : "Credential References to Confirm Before Publication"}
        intro={isArabic ? "هذه منطقة مخصصة لشعارات أو ملفات الاعتماد التي يتم تزويدها واعتمادها قبل الإطلاق." : "This area is ready for approved certification, authority, or partnership assets once they are supplied and cleared for publication."}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {credentialPlaceholders.map((label) => (
            <div key={label} className="grid min-h-24 place-items-center rounded-xl border border-arkon-line bg-white px-4 text-center text-2xl font-black text-arkon-muted shadow-sm">
              {label}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 3).map((industry) => (
            <div key={industry.en} className="rounded-xl border border-arkon-line bg-white p-5 text-sm font-bold text-arkon-navy shadow-sm">
              {industry[locale]}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
