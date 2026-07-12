import type { Metadata } from "next";
import type { Locale } from "@/types";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { RequestProposalForm } from "@/components/forms/RequestProposalForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/contact",
    title: locale === "ar" ? "التواصل وطلب عرض فني" : "Contact and Request Proposal",
    description: locale === "ar" ? "أرسلوا معلومات المشروع ليتم توجيه الطلب إلى الشركة المناسبة داخل مجموعة أركون." : "Submit project information and route your request to the relevant ARKON Group company."
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "التواصل" : "Contact", path: "/contact" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "طلب مشروع" : "Project request"}
        title={locale === "ar" ? "أرسلوا معلومات المشروع" : "Submit project information"}
        intro={locale === "ar" ? "سيتم توجيه الطلب إلى الشركة المختصة داخل مجموعة أركون بناءً على الخدمة المحددة." : "Your request will be routed to the relevant ARKON Group company based on the selected service."}
      >
        <RequestProposalForm locale={locale} />
      </Section>
    </>
  );
}
