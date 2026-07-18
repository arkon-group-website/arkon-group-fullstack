import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/types";
import { site } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";

const insightTopics = [
  { en: "Engineering and authority-readiness notes", ar: "ملاحظات هندسية وجاهزية المتطلبات" },
  { en: "Security consultancy planning", ar: "تخطيط الاستشارات الأمنية" },
  { en: "Testing, inspection, and documentation", ar: "الفحوصات والاختبارات والتوثيق" }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/insights",
    title: locale === "ar" ? "رؤى مجموعة أركون" : "ARKON Group Insights",
    description: locale === "ar" ? "رؤى ومقالات عملية حول خدمات ومجالات عمل مجموعة أركون." : "Practical insights and articles across ARKON Group service areas."
  });
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "الرؤى" : "Insights", path: "/insights" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "الرؤى" : "Insights"}
        title={locale === "ar" ? "رؤى مهنية قابلة للنشر بعد المراجعة" : "Professional Insights Prepared for Reviewed Publication"}
        intro={locale === "ar" ? "تنظم هذه الصفحة موضوعات المحتوى المهني دون نشر ادعاءات أو دراسات حالة غير معتمدة." : "This hub organizes practical thought-leadership topics without publishing unapproved claims or case studies."}
      >
        <div className="arkon-card-premium mb-8 overflow-hidden p-0">
          <div className="relative min-h-72 bg-arkon-navy">
            <Image src={site.heroImage} alt="" fill sizes="100vw" className="object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/55 to-transparent" />
            <div className="absolute bottom-7 start-7 max-w-2xl">
              <p className="arkon-eyebrow">{locale === "ar" ? "محتوى محافظ" : "Conservative publishing"}</p>
              <h2 className="mt-3 text-3xl font-black text-arkon-navy">{locale === "ar" ? "موضوعات تدعم البحث والقيادة الفكرية" : "Topics that support search and thought leadership"}</h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {insightTopics.map((topic) => (
            <article key={topic.en} className="arkon-card-premium p-6">
              <p className="arkon-eyebrow">{locale === "ar" ? "موضوع مقترح" : "Suggested topic"}</p>
              <h2 className="mt-4 text-2xl font-black text-arkon-navy">{topic[locale]}</h2>
              <p className="mt-4 text-sm leading-7 text-arkon-muted">
                {locale === "ar" ? "يمكن نشر مقالة مهنية موجزة بعد مراجعة النص والادعاءات ومناسبتها للسوق السعودي." : "A concise professional article can be published after copy, claims, and Saudi-market fit are reviewed."}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
