import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/types";
import { site } from "@/content/site";
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
        <div className="arkon-card-premium mb-8 overflow-hidden p-0">
          <div className="relative min-h-72 bg-arkon-navy">
            <Image src={site.heroImage} alt="" fill sizes="100vw" className="object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy/92 via-arkon-navy/45 to-transparent" />
            <div className="absolute bottom-7 start-7 max-w-2xl">
              <p className="arkon-eyebrow">{locale === "ar" ? "إدارة أصول منظمة" : "Controlled asset handling"}</p>
              <h2 className="mt-3 text-3xl font-black text-white">{locale === "ar" ? "ملفات عامة أو مقيدة حسب سياسة النشر" : "Open and gated files according to publication policy"}</h2>
            </div>
          </div>
        </div>
        <DownloadCenter locale={locale} />
      </Section>
    </>
  );
}
