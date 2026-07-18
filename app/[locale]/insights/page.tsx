import type { Metadata } from "next";
import type { Locale } from "@/types";
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
        title={locale === "ar" ? "مركز رؤى قابل للتوسع" : "A Practical Insights Hub Ready to Expand"}
        intro={locale === "ar" ? "يمكن إضافة المقالات ودراسات الحالة بعد اعتماد المحتوى التحريري." : "Articles and case studies can be added after editorial approval and claim review."}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {insightTopics.map((topic) => (
            <article key={topic.en} className="arkon-card">
              <p className="arkon-eyebrow">{locale === "ar" ? "موضوع مقترح" : "Suggested topic"}</p>
              <h2 className="mt-4 text-2xl font-black text-arkon-navy">{topic[locale]}</h2>
              <p className="mt-4 text-sm leading-7 text-arkon-muted">
                {locale === "ar" ? "مساحة جاهزة لمقال مهني مختصر عند توفر النص المعتمد." : "Ready for concise professional article copy once approved content is supplied."}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
