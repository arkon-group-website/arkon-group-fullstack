export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function normalizeBaseUrl(value?: string): string {
  const fallback = "https://arkongroup.com.sa";
  const url = value || process.env.NEXT_PUBLIC_SITE_URL || fallback;
  return url.replace(/\/$/, "");
}

export function truncate(value: string, max = 155): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trim()}…`;
}
