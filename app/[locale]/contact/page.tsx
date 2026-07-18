import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/types";
import { site } from "@/content/site";
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
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="arkon-card-premium overflow-hidden p-0">
            <div className="relative min-h-72 bg-arkon-navy">
              <Image src={site.heroImage} alt="" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-arkon-navy via-arkon-navy/35 to-transparent" />
              <div className="absolute bottom-6 start-6 end-6">
                <p className="arkon-eyebrow">{locale === "ar" ? "تواصل مباشر" : "Direct contact"}</p>
                <h2 className="mt-3 text-3xl font-black text-white">{locale === "ar" ? "نقطة دخول واحدة لمنظومة أركون" : "One entry point into the ARKON ecosystem"}</h2>
              </div>
            </div>
            <div className="grid gap-4 p-6 text-sm leading-7 text-arkon-muted">
              <a href="mailto:info@arkonec.com" className="font-black text-arkon-navy hover:text-arkon-gold">info@arkonec.com</a>
              <a href="tel:+966920014917" className="font-black text-arkon-navy hover:text-arkon-gold">9200 14917</a>
              <p>{locale === "ar" ? "جدة، الرياض، المملكة العربية السعودية" : "Jeddah, Riyadh, Kingdom of Saudi Arabia"}</p>
            </div>
          </aside>
          <RequestProposalForm locale={locale} />
        </div>
      </Section>
    </>
  );
}
