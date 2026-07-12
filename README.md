# ARKON Group Full-Stack Website

World-class bilingual corporate website for ARKON Group, built with Next.js App Router, TypeScript, Tailwind CSS, accessible reusable components, SEO metadata, JSON-LD schema, a request proposal form, company pages, service pages, and a credentials/download center.

Production target:

- `https://arkongroup.com.sa`

Confirmed company scope:

1. ARKON Engineering Consultancy Co.
2. ELITE Security Consultancy Co.
3. Integrated Building Systems
4. Quality Inspection Company
5. Turning Point Digital Marketing Co.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Bilingual `/en` and `/ar` routes
- JSON-LD schema helpers
- Server route handler for lead capture

## Project Structure

- `app/` - App Router pages, layouts, and API routes.
- `app/[locale]/` - English and Arabic route tree.
- `components/` - Reusable UI components.
- `components/layout/` - Header, footer, and locale-aware layout pieces.
- `components/sections/` - Page sections, cards, grids, and content blocks.
- `components/forms/` - Client-side request proposal form.
- `content/` - Editable company, service, navigation, download, and page copy.
- `lib/` - Locale, metadata, schema, and utility helpers.
- `public/` - Public logos and static assets.
- `styles/` - Tailwind global stylesheet.
- `types/` - Shared TypeScript types.
- `docs/` - Planning and implementation documentation used to shape the site.
- `schema/` - Source JSON-LD examples from the WordPress planning pack.

## Local Development

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/en`
- `http://localhost:3000/ar`

## Environment Variables

Copy `.env.example` to `.env.local` and set production values.

Important variables:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `EMAIL_GENERAL_TO`
- `EMAIL_AEC_TO`
- `EMAIL_ELITE_TO`
- `EMAIL_IBS_TO`
- `EMAIL_QIC_TO`
- `EMAIL_TP_DIGITAL_TO`
- `LEADS_WEBHOOK_URL`

The form API validates submissions in all environments. In production, set either `RESEND_API_KEY` or `LEADS_WEBHOOK_URL` for real lead delivery.

## Build

```bash
npm run build
```

## Vercel Deployment

1. Create a new Vercel project from `arkon-group-website/arkon-group-fullstack`.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Output directory: `.next`.
5. Add all required environment variables from `.env.example`.
6. Configure production domain: `arkongroup.com.sa`.
7. Enable HTTPS.
8. Test `/en`, `/ar`, `/en/contact`, `/ar/contact`, company pages, service pages, and the credentials page.
9. Submit the production sitemap after final review.

## Content Editing

Most website copy and routing data is centralized in:

- `content/site.ts`

Use the planning documents in `docs/` as editorial references. Keep claims conservative and do not add additional ARKON Group companies unless the source files are updated and approved.

## Quality Checks

Before launch:

```bash
npm run typecheck
npm run build
```

Manual checks:

- English pages are LTR.
- Arabic pages are RTL.
- Header, footer, CTAs, forms, downloads, and language switcher work on mobile.
- JSON-LD matches visible page content.
- Contact form routes to the right company inbox.
- No confidential PDF URLs are public.
