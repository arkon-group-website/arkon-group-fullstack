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
    path: "/download-center",
    title: locale === "ar" ? "مركز التنزيلات" : "Download Center",
    description: locale === "ar" ? "مركز ملفات التعريف والكتيبات وملفات القدرات الخاصة بمجموعة أركون." : "Download center for ARKON Group profiles, brochures, and capability sheets."
  });
}

export default async function DownloadCenterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "مركز التنزيلات" : "Download Center", path: "/download-center" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "مركز التنزيلات" : "Download Center"}
        title={locale === "ar" ? "ملفات التعريف والكتيبات" : "Profiles, Brochures, and Capability Sheets"}
        intro={locale === "ar" ? "يمكن ربط الملفات النهائية بعد اعتمادها وتأكيد سياسة النشر." : "Final files can be connected after approval and publication policy confirmation."}
      >
        <DownloadCenter locale={locale} />
      </Section>
    </>
  );
}
