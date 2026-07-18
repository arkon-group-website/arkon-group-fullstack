export type Locale = "en" | "ar";

export type LocalizedText = Record<Locale, string>;

export type CompanyId = "aec" | "elite" | "ibs" | "qic" | "tp-digital";

export interface Company {
  id: CompanyId;
  slug: string;
  shortName: string;
  name: LocalizedText;
  summary: LocalizedText;
  positioning: LocalizedText;
  overview: LocalizedText;
  services: LocalizedText[];
  industries: LocalizedText[];
  strengths: LocalizedText[];
  methodology: LocalizedText[];
  proofPoints: LocalizedText[];
  cta: LocalizedText;
  logo: string;
}

export interface Service {
  slug: string;
  companyId: CompanyId;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  covers: LocalizedText[];
  deliverables: LocalizedText[];
  clients: LocalizedText[];
  process: LocalizedText[];
  complianceNote: LocalizedText;
  relatedSlugs: string[];
  cta: LocalizedText;
}

export interface DownloadAsset {
  title: LocalizedText;
  company: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  type: string;
  language: "EN" | "AR" | "EN-AR";
  gated: boolean;
  version: string;
  updated: string;
}

export interface NavItem {
  label: LocalizedText;
  href: string;
}
