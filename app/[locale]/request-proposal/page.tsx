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
    path: "/request-proposal",
    title: locale === "ar" ? "طلب عرض فني" : "Request a Technical Proposal",
    description: locale === "ar" ? "أرسل معلومات المشروع ليتم توجيه الطلب إلى الشركة المناسبة داخل مجموعة أركون." : "Submit project information and route your request to the relevant ARKON Group company."
  });
}

export default async function RequestProposalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "طلب عرض فني" : "Request Proposal", path: "/request-proposal" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "طلب مشروع" : "Project request"}
        title={locale === "ar" ? "أرسلوا معلومات المشروع" : "Submit Project Information"}
        intro={locale === "ar" ? "سيتم توجيه الطلب إلى الشركة المختصة داخل مجموعة أركون بناءً على الخدمة المحددة." : "Your request will be routed to the relevant specialist company inside ARKON Group."}
      >
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="arkon-card-premium overflow-hidden p-0">
            <div className="relative min-h-72 bg-arkon-navy">
              <Image src={site.heroImage} alt="" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-arkon-navy via-arkon-navy/35 to-transparent" />
              <div className="absolute bottom-6 start-6 end-6">
                <p className="arkon-eyebrow">{locale === "ar" ? "توجيه ذكي" : "Smart routing"}</p>
                <h2 className="mt-3 text-3xl font-black text-white">{locale === "ar" ? "شركة واحدة مناسبة تبدأ من هنا" : "The right specialist company starts here"}</h2>
              </div>
            </div>
            <div className="grid gap-3 p-6 text-sm leading-7 text-arkon-muted">
              {(locale === "ar"
                ? ["حددوا الخدمة المطلوبة.", "أضيفوا موقع المشروع والجدول الزمني.", "سيتم توجيه الطلب حسب الشركة والتخصص."]
                : ["Select the required service.", "Add project location and timeline.", "The inquiry is routed by company and specialty."]).map((item) => (
                <p key={item} className="arkon-list-check">{item}</p>
              ))}
            </div>
          </aside>
          <RequestProposalForm locale={locale} />
        </div>
      </Section>
    </>
  );
}
