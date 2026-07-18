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
    path: "/terms",
    title: locale === "ar" ? "الشروط وإخلاء المسؤولية" : "Terms and Disclaimer",
    description: locale === "ar" ? "شروط استخدام موقع مجموعة أركون وملاحظات عامة حول المحتوى." : "Website-use terms and general content notes for ARKON Group."
  });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <Section
      eyebrow={locale === "ar" ? "الشروط" : "Terms"}
      title={locale === "ar" ? "الشروط وإخلاء المسؤولية" : "Terms and Disclaimer"}
      intro={locale === "ar" ? "المحتوى المنشور لأغراض التعريف بالخدمات وتوجيه الطلبات، ولا يمثل عرضاً تعاقدياً إلا عند تأكيده رسمياً." : "Website content is provided for service introduction and inquiry routing, and does not represent a contractual offer unless formally confirmed."}
    >
      <div className="arkon-card mx-auto max-w-4xl text-sm leading-8 text-arkon-muted">
        <p>{locale === "ar" ? "يجب مراجعة التفاصيل الفنية ونطاق الخدمات والمتطلبات الخاصة بكل مشروع مع الفريق المختص قبل الاعتماد على أي معلومات لأغراض تنفيذية." : "Technical details, service scope, and project-specific requirements should be reviewed with the relevant team before relying on any information for execution decisions."}</p>
      </div>
    </Section>
  );
}
