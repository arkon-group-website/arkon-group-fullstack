import type { Metadata } from "next";
import type { Locale } from "@/types";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { DownloadCenter } from "@/components/sections/DownloadCenter";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/credentials",
    title: locale === "ar" ? "مركز التنزيلات" : "Credentials and Download Center",
    description: locale === "ar" ? "ملفات التعريف والكتيبات وملفات القدرات الخاصة بمجموعة أركون." : "Company profiles, brochures, capability sheets, and request documents for ARKON Group."
  });
}

export default async function CredentialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "ملفات التعريف" : "Credentials", path: "/credentials" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "مركز التنزيلات" : "Download center"}
        title={locale === "ar" ? "ملفات التعريف والكتيبات" : "Credentials, brochures, and capability sheets"}
        intro={locale === "ar" ? "اطلعوا على الملفات العامة أو اطلبوا الوصول إلى الملفات التي تتطلب نموذجاً." : "Access public-facing resources or request access to gated documents through the contact workflow."}
      >
        <DownloadCenter locale={locale} />
      </Section>
    </>
  );
}
