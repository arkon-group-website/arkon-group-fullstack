import Image from "next/image";
import type { Locale } from "@/types";
import { site, ui } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface HeroSectionProps {
  locale: Locale;
}

const trustBadges = [
  { en: "KSA Focused", ar: "تركيز على المملكة", subEn: "Nationwide presence", subAr: "حضور يخدم المشاريع" },
  { en: "Multi-Discipline", ar: "متعدد التخصصات", subEn: "Integrated solutions", subAr: "حلول متكاملة" },
  { en: "Quality Driven", ar: "جودة موثقة", subEn: "Clear documentation", subAr: "مستندات واضحة" },
  { en: "Future Ready", ar: "جاهزية للمستقبل", subEn: "Innovation led", subAr: "توجه حديث" }
];

const heroLabels = [
  { en: "Engineering Consultancy", ar: "الاستشارات الهندسية" },
  { en: "Security Integration", ar: "التكامل الأمني" },
  { en: "Construction Solutions", ar: "حلول البناء" }
];

export function HeroSection({ locale }: HeroSectionProps) {
  const isArabic = locale === "ar";

  return (
    <section className="relative overflow-hidden border-b border-arkon-line bg-arkon-pearl2">
      <div className="absolute inset-0 bg-pearl-radial" />
      <div className="absolute inset-0 bg-command-grid bg-[length:42px_42px] opacity-45" />
      <div className="absolute -end-24 top-20 h-80 w-80 rounded-full border border-arkon-gold/30 opacity-70 blur-[0.2px]" />
      <div className="absolute end-16 top-36 h-96 w-96 rounded-full border border-arkon-gold/20 opacity-70" />

      <div className="arkon-container relative grid min-h-[640px] items-center gap-10 py-14 lg:grid-cols-[0.88fr_1.18fr] lg:py-20">
        <div className="relative z-10">
          <p className="arkon-eyebrow">{isArabic ? "منظومة أركون المتكاملة" : "ARKON Group integrated ecosystem"}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] text-arkon-navy sm:text-6xl">
            {isArabic ? (
              <>
                تميز هندسي.
                <br />
                موثوقية أمنية.
                <br />
                <span className="text-arkon-gold">نبني المستقبل.</span>
              </>
            ) : (
              <>
                Engineering Excellence.
                <br />
                Security Assurance.
                <br />
                <span className="text-arkon-gold">Building the Future.</span>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-arkon-muted sm:text-lg">
            {isArabic
              ? "مجموعة متكاملة تقدم الاستشارات الهندسية والأمنية وحلول البناء والفحوصات والتسويق الرقمي لدعم المشاريع في المملكة."
              : "An integrated group delivering engineering consultancy, security consultancy, construction and technical services, testing and inspection, and digital marketing across Saudi Arabia."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LocaleLink locale={locale} href="/request-proposal" className="arkon-btn arkon-btn-gold">
              {ui.requestProposalShort[locale]} <span aria-hidden="true">→</span>
            </LocaleLink>
            <LocaleLink locale={locale} href="/services" className="arkon-btn arkon-btn-ghost">
              {ui.exploreServices[locale]} <span aria-hidden="true">→</span>
            </LocaleLink>
          </div>
        </div>

        <div className="relative min-h-[390px] lg:min-h-[540px]">
          <div className="absolute inset-y-0 -end-12 start-0 overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-arkon lg:-end-32">
            <Image
              src={site.heroImage}
              alt={isArabic ? "أفق مدينة سعودية حديثة مع بنية تحتية ولمسات ذهبية" : "Modern Saudi skyline with infrastructure and gold engineering glow"}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-arkon-pearl2 via-white/25 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(227,194,122,0.26),transparent_28%)]" />
            <div className="absolute bottom-0 start-0 h-28 w-full bg-gradient-to-t from-white/65 to-transparent" />
          </div>

          <div className="absolute start-4 top-10 grid gap-5 sm:start-10 lg:start-4 xl:start-8">
            {heroLabels.map((label, index) => (
              <div
                key={label.en}
                className="arkon-glass rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-arkon-navy shadow-sm"
                style={{ transform: `translateX(${index * (isArabic ? -8 : 8)}px)` }}
              >
                {label[locale]}
              </div>
            ))}
          </div>
          <div className="arkon-glass absolute bottom-8 end-4 rounded-full px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-arkon-navy shadow-sm sm:end-10">
            {isArabic ? "نمو متوازن" : "Driving growth"}
          </div>
        </div>
      </div>

      <div className="relative border-t border-arkon-line bg-white/70">
        <div className="arkon-container grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.en} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-arkon-gold/35 bg-arkon-gold/10 text-arkon-gold shadow-glow">✧</span>
              <span>
                <span className="block text-sm font-black text-arkon-navy">{badge[locale]}</span>
                <span className="block text-xs font-semibold text-arkon-muted">{isArabic ? badge.subAr : badge.subEn}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
