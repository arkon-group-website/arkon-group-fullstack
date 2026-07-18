import type { Metadata } from "next";
import type { Locale } from "@/types";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/sections/Section";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/privacy",
    title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
    description: locale === "ar" ? "كيفية تعامل مجموعة أركون مع بيانات النماذج وطلبات التواصل." : "How ARKON Group handles website form data and contact requests."
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <Section
      eyebrow={locale === "ar" ? "الخصوصية" : "Privacy"}
      title={locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
      intro={locale === "ar" ? "تستخدم مجموعة أركون معلومات النماذج لمراجعة الطلبات والتواصل بشأن الخدمات المطلوبة." : "ARKON Group uses submitted form information to review inquiries and contact visitors about requested services."}
    >
      <div className="arkon-card mx-auto max-w-4xl text-sm leading-8 text-arkon-muted">
        <p>{locale === "ar" ? "لا ترسلوا بيانات شخصية حساسة ما لم تكن مطلوبة لطلب المشروع. يتم استخدام معلومات التواصل لتوجيه الطلب إلى الفريق المناسب." : "Do not submit sensitive personal data unless it is required for the project inquiry. Contact information is used to route the request to the appropriate team."}</p>
      </div>
    </Section>
  );
}
