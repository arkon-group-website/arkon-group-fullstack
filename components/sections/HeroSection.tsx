import type { Locale } from "@/types";
import { site, ui } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-arkon-navy">
      <div className="absolute inset-0 bg-command-grid bg-[size:32px_32px] opacity-45" />
      <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-arkon-blue/20 blur-3xl" />
      <div className="arkon-container relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.82fr]">
        <div>
          <p className="arkon-eyebrow">{locale === "ar" ? "منظومة دعم المشاريع" : "Saudi project command center"}</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {site.tagline[locale]}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-arkon-silver">
            {site.description[locale]}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LocaleLink locale={locale} href="/contact" className="arkon-btn arkon-btn-gold">
              {ui.requestProposal[locale]}
            </LocaleLink>
            <LocaleLink locale={locale} href="/services" className="arkon-btn arkon-btn-ghost">
              {ui.exploreServices[locale]}
            </LocaleLink>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-sm border border-white/15 bg-white/[0.06] p-4 shadow-arkon backdrop-blur">
            <div className="grid gap-3">
              {[
                locale === "ar" ? "استشارات هندسية" : "Engineering consultancy",
                locale === "ar" ? "استشارات أمنية" : "Security consultancy",
                locale === "ar" ? "أعمال بناء وفنية" : "Construction and technical works",
                locale === "ar" ? "فحوصات واختبارات" : "Testing and inspection",
                locale === "ar" ? "تسويق رقمي" : "Digital marketing"
              ].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-sm border border-white/10 bg-arkon-navy2/70 px-4 py-4">
                  <span className="text-sm font-medium text-white">{item}</span>
                  <span className="text-xs text-arkon-gold">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
