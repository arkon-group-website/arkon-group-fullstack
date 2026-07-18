import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import type { Locale } from "@/types";
import { dir, isLocale, locales } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;

  return (
    <div lang={locale} dir={dir(locale)} className="min-h-screen bg-arkon-pearl text-arkon-ink antialiased">
      <JsonLd data={[organizationSchema(locale), websiteSchema(locale)]} />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
