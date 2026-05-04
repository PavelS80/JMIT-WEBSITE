# jmit.cz — redesign

Premium redesign of the J.M.I.T. a.s. corporate website (logistics + transport, Hlubočky / Olomouc).

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **Tailwind CSS v4** with custom design tokens (`src/app/globals.css`)
- **next-intl 4** — `cs` (default, no prefix), `en` / `de` / `es` / `ru` (prefixed)
- Static-first: 68 prerendered pages (5 locales × 13 routes).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Structure

```
src/
├── app/
│   ├── globals.css          Tokens, keyframes, eyebrow/serif/luxe utilities
│   └── [locale]/            Locale-segmented routes
│       ├── layout.tsx       Header + Footer + DrivingTruck + i18n provider
│       ├── page.tsx         Homepage (composes 10 section components)
│       ├── o-firme/         About + 14-step history timeline
│       ├── sluzby/          Services hub + dynamic [slug] detail (×6)
│       ├── vozovy-park/     Fleet gallery + spec list
│       ├── reference/       Client logo grid (16 brands)
│       ├── kariera/         Two open driver positions
│       └── kontakty/        Full team directory + Google Maps embed
├── components/
│   ├── Header.tsx           Sticky nav, scroll-aware, mobile drawer
│   ├── Footer.tsx           4-col footer with full contact block
│   ├── DrivingTruck.tsx     Cinematic SVG truck (once per session,
│   │                        respects prefers-reduced-motion)
│   ├── LanguageSwitcher.tsx CS / EN / DE / ES / RU dropdown
│   ├── Container.tsx · Button.tsx · PageHero.tsx
│   └── sections/            Hero, StatBar, Intro, Services, WhyJMIT,
│                            Coverage (custom Europe SVG), FleetTeaser,
│                            References, CareerCTA, ContactCTA
├── i18n/
│   ├── routing.ts           Locale list + `as-needed` prefix strategy
│   ├── navigation.ts        Locale-aware Link / useRouter / usePathname
│   └── request.ts           Loads `messages/<locale>.json` per request
├── middleware.ts            next-intl locale detection
└── lib/
    ├── site.ts              Structural data: contacts, slugs, stats,
    │                        references, team portraits, GPS, IČ/DIČ
    └── cn.ts                className merge helper

messages/
├── cs.json    Master copy (verbatim from live jmit.cz)
├── en.json
├── de.json
├── es.json
└── ru.json    Includes Cyrillic subset in fonts

public/assets/
├── brand/      Logo (full + mono) + 35-let mark
├── hero/       6 hero/slider photos
├── fleet/      6 detail-quality 2024 fleet photos
├── services/   5 service hero shots (2024)
└── team/       3 of 14 available 2025 staff portraits
```

## Brand tokens

Defined in `src/app/globals.css` under `@theme`:

| Token | Hex | Use |
|---|---|---|
| `brand-red` | `#c8102e` | Primary CTAs, accents |
| `gold` / `gold-soft` | `#c9a96a` / `#e6d3a3` | Luxury hairlines, hero glow |
| `navy` | `#0a1b2e` | Dark sections, footer, contact CTA |
| `ink` / `ink-muted` | `#101624` / `#5b6678` | Body / secondary text |
| `surface` / `line` | `#f7f8fa` / `#e4e7ec` | Alt backgrounds, borders |

Typography: Inter (latin + latin-ext + cyrillic) + Fraunces serif (SOFT, WONK
axes) for hero/section title accents via the `.serif` utility.

## Localisation

Czech is the master language and serves from `/`. Other locales serve from
`/en`, `/de`, `/es`, `/ru`. Route slugs (`/sluzby`, `/o-firme`, etc.) remain
in Czech across all locales by design — only UI copy is translated.

To edit copy, change the relevant key in `messages/<locale>.json`. Structural
data (contact emails, GPS, IČ/DIČ, service slugs, image paths) lives in
`src/lib/site.ts` and is locale-agnostic.

## Content source

All Czech copy extracted verbatim from the live `jmit.cz` site. EN/DE/ES/RU
translations were authored against the CZ master and reviewed for industry
terminology. See `PROPOSAL.md` for the full extraction summary and design
rationale.

## Known TODOs

- Renew SSL certificate on the production domain (P0)
- Cookie consent banner (legal, GTM is loaded)
- Re-vectorise client logos as monochrome SVGs
- Replace iframe HQ map with branded MapLibre/Mapbox
- Production photography: drone shot of Hlubočky HQ + driver day-in-the-life series
- Migrate `middleware.ts` to `proxy.ts` (Next.js 16 deprecation notice)
