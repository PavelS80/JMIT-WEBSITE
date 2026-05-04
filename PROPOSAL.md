# J.M.I.T. a.s. — Website Redesign Proposal

> **Note on naming:** the brief referred to "JMTAS"; the actual company on jmit.cz is **J.M.I.T. a.s.** I'll use **J.M.I.T.** throughout.

---

## 1. Summary of what was extracted from the existing website

### Company identity
- **Legal name:** J.M.I.T. a.s. (akciová společnost — joint-stock company since 2010; founded 1991 as a sole-trader business)
- **Tagline / hero claim:** *„Velkoobjemová přeprava na špičkové úrovni"* ("High-volume transport at the highest level")
- **Positioning:** Czech-owned international and domestic road haulier specialised in **high-volume cargo** across the EU
- **Operating since:** 1991 (35 years in 2026 — the site already has a `35-let.png` anniversary asset prepared)
- **Headcount:** ~150 employees across two divisions (classic trucking + EU-partner "letecká divize")
- **Fleet size:** ~100 high-volume tractor + trailer units (DAF and Mercedes-Benz)
- **Annual mileage:** > 8.5 million km (≈ 220× around the equator)

### Contact details (verbatim)
- **HQ:** Olomoucká 15, 783 65 Hlubočky, Czech Republic
- **GPS:** 49°37'11.860"N, 17°24'6.526"E
- **Phone (switchboard):** +420 585 206 140-4
- **Fax:** +420 585 206 149
- **Email:** jmit@jmit.cz
- **Web:** www.jmit.cz
- **IČ:** 27846458 — **DIČ:** CZ27846458
- **Languages on site:** CZ / DE / EN

### People (full directory exists with 2025 portraits)
- **Vedení (Board):**
  - Jaromír Musil — předseda představenstva (jaromir.musil@jmit.cz, +420 585 206 150)
  - Jarmila Musilová — člen představenstva, účetní, personalista (musilova@jmit.cz, +420 602 543 699)
  - Ondřej Musil, Bc. — člen představenstva, technik (ondrej.musil@jmit.cz, +420 606 727 603)
- **Obchodní oddělení:** Sabina Artnerová, Ing. — obchodní ředitelka (artnerova@jmit.cz, +420 606 725 372)
- **Dispečink:** David Vlček (vedoucí), Radomír Ohera, Tomáš Smékal, Jiří Jordán, Helena Lokajíčková, Tomasz Siudut, Mína Mungunzul
- **Administrativa:** Eva Palinková, Jana Čečatková, Eva Navrátilová, Hana Čapková

### Services (six pillars)
1. **Velkoobjemová přeprava** — high-volume EU transport (up to 120 m³, 24 t, 38 europalets)
2. **Mezinárodní kamionová doprava** — international trucking, ADR-certified
3. **Vnitrostátní kamionová doprava** — domestic Czech haulage
4. **Spedice** — forwarding
5. **Logistika** — full logistics service
6. **Pojištění** — cargo insurance up to 10,000,000 Kč

### Five competitive advantages (already used as visual badges)
- Quality of service · Velkoobjemové soupravy · Dispečink 24/7 with online vehicle monitoring · Regular fleet renewal · ISO 9001

### Certifications
- **ISO 9001:2015** (since 1997 as ISO 9002, recertified continuously)
- **ADR** consultant certificate (dangerous-goods transport)
- **Shell** certificate
- 1991 first international transport permit (heritage piece)

### Reference clients (16 named)
Mora Moravia, Shell Česká Republika, Finnforest CZ, Baumit, Barum Continental, Novopol, Servis Vraník, MoraPLAST, Bridgestone Europe, Foundeik, Al Invest Břidličná, Whirlpool Europe, Nokian Renkaat, MB Czech Import Logistic, Avex Steel Products, AZ Flex.
*(Logos for most of these are available as `data/filemanager/source/Fotky-2015/*.gif|jpg|png`.)*

### Geography served (mentioned in copy)
Czech Republic + Germany (dominant), UK, Hungary, Romania, Benelux, Scandinavia (regular routes recently added).

### Careers — two open roles
- **Řidič/ka MKD** (international driver) — C+E, profesní průkaz, contact +420 585 206 140 / artnerova@jmit.cz
- **Řidič/ka UNIE** (EU rotation driver) — turnus 22+12, mzda 28,000 Kč + diet 56 €/day, +420 585 206 147

### News / aktuality (3 latest, dated)
- 2024-07-01 — *Nová grafika polepu našich kamionů* (new truck livery)
- 2019-08-29 — *DAF a J.M.I.T. spojení, které drží* (DAF partnership, with video)
- 2018-05-21 — *Obnova flotily "letecké divize" dokončena*

### Visual assets inventory
- **Logos:** `logo.png` (full colour) + `logo_mono.png` + `35-let.png` (35-year anniversary mark)
- **Hero slider photos:** 13 truck/road shots (`/data/slider/1/`, `/3/`, `/4/`, `/5/`)
- **Fleet gallery:** 10 high-res photos (`/data/fotogalerie/detail/foto-111` to `foto-120`, dated 2024)
- **Team portraits:** 14 fresh 2025 staff photos (`/Lide-ve-firm/*-2025.jpg`)
- **Service hero shots (2024):** 4 large photos for international, domestic, high-volume, logistics, spedice
- **Heritage photos:** 1991 first truck, 1992 first new units, 2001 dispatch room, 2007 fleet
- **Client logos:** ~13 brand marks (.gif/.png/.jpg)
- **Certificates as JPGs:** ISO 9001, Shell, ADR, 1991 permit
- **Stat graphics:** `150-zamestnancu.png`, `osm-mil-km.png`, `mapka.png` (Europe coverage)

### Tech stack of current site
Static HTML rendered by an old Nette PHP app, jQuery 1.10 + jQuery UI + Cycle2 carousel + prettyPhoto lightbox, Google Fonts (PT Sans), Google Tag Manager (GTM-TNBJNMM), iframe Google Maps embed. **The SSL certificate is currently expired** (cannot fetch over HTTPS without `-k`) — this is a P0 trust problem.

---

## 2. Main design problems of the current website

| # | Problem | Impact |
|---|---|---|
| 1 | **Expired SSL certificate** | Browsers warn / block visitors. Immediate trust killer for a B2B logistics partner. |
| 2 | Visual identity stuck in ~2014–2015 | Boxy red header strip, PT Sans, drop-shadows, screenshot-style buttons, GIF client logos. |
| 3 | Tiny 210 px logo on a thick red bar | Brand presence is weak; no white-space breathing room. |
| 4 | Hero is a 3-image jQuery Cycle slider with no headline overlay | Sliders score badly for engagement, and the hero text sits *below* the slider in a separate strip. |
| 5 | Footer copyright says **© 2015** | Signals neglect; fix this immediately even before redesign. |
| 6 | "Tvorba www stránek Winternet" agency credit in footer | Looks like a small-vendor template, hurts premium positioning. |
| 7 | "Author: Winternet s.r.o., sales@winet.cz" in `<meta>` | Same issue; will be cleaned up. |
| 8 | Client logos are inconsistent (mixed GIF/PNG/JPG, different sizes, different background colours) | Looks amateurish. |
| 9 | Five "competitive advantages" rendered as raw text strings — no real iconography | Low scan-ability. |
| 10 | iframe Google Maps embed from 2018 (`v=1540977285590`) | Outdated visual style; no styled / branded map. |
| 11 | "Naplánujte si cestu k nám" route-planner — broken/half-implemented widget | Dead UX. |
| 12 | No responsive grid system; two extra mobile stylesheets bolted on (`mobile.css`, `mobile423.css`) | Layout breaks on tablets, no real mobile-first design. |
| 13 | Aktuality (news) is the **only** thing on the homepage besides the slider — and the latest news is **July 2024**, second-newest is **2019**, third is **2018** | Homepage looks abandoned. |
| 14 | No EN/DE pages despite language switcher (likely thin translations or duplicated CZ) | Lost EU customers. |
| 15 | No clear CTA hierarchy — "Naše služby / Hledáme řidiče / Kontaktujte nás" all weighted equally | Mixes B2B sales with HR; should be split. |
| 16 | Photos are good (especially fleet 2024 + portraits 2025) but **buried** | Best assets aren't being used. |
| 17 | No structured data, no Open Graph, no proper meta description per page | Bad for SEO and social sharing. |
| 18 | jQuery 1.10 + jQuery UI 1.10 (2013 era) | Security and performance liability. |

---

## 3. New design concept

**Concept name: *"Cinematic Cargo"***

A premium, editorial logistics site that treats J.M.I.T. like a serious European industrial brand — closer in feel to **Maersk**, **DSV**, **Hegelmann**, or the **DAF/Volvo Trucks** corporate sites — than to a regional Czech haulier template.

**Three pillars:**
1. **Anchored in heritage.** 1991 → 2026 is 35 years; the brand's biggest asset is *continuity*. Use it. The `35-let.png` mark exists — pin it.
2. **Built around the fleet photos.** The 2024 fleet gallery and 2024 service hero shots are genuinely good. Frame them cinematically (16:9, dark gradient overlays, large size, parallax-light scroll).
3. **Show, don't list.** Convert prose paragraphs into scannable stats blocks (*8.5 M km/year · 100 trucks · 38 europalets · 120 m³ · 24 t · 1991*). Numbers are this company's strongest argument.

**Tone:** corporate, calm, confident. No bouncing icons, no glassmorphism, no AI-generated truck art. Big type, generous whitespace, deliberate motion (subtle reveals on scroll, no carousels).

---

## 4. Proposed sitemap

```
/  (Homepage)
├── /o-firme               About — story, philosophy, history timeline, certificates, "Podporujeme" (CSR)
├── /sluzby                Services hub
│   ├── /sluzby/velkoobjemova-preprava
│   ├── /sluzby/mezinarodni-doprava
│   ├── /sluzby/vnitrostatni-doprava
│   ├── /sluzby/spedice
│   ├── /sluzby/logistika
│   └── /sluzby/pojisteni
├── /vozovy-park           Fleet — DAF + Mercedes, equipment, gallery
├── /pokryti               Coverage — interactive Europe map (NEW; replaces old static mapka.png)
├── /reference             References — clean grid of client logos + 2–3 case-study cards
├── /kariera               Careers — both roles, driver testimonial, "day in the life"
│   └── /kariera/ridic-mkd
│   └── /kariera/ridic-unie
├── /aktuality             News index
│   └── /aktuality/[slug]
├── /kontakty              Contact — directory by department, map, form
└── /pravni                Legal / GDPR / Cookies / Imprint
```

Languages: **/cs · /en · /de** (real translations, not duplicates). Default to `cs` on `jmit.cz`.

---

## 5. Homepage wireframe — section by section

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]              O firmě  Služby  Park  Kariéra  …  CZ▾ │  ← thin sticky nav, 72 px, white on scroll
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   HERO — 90vh, full-bleed fleet photo, dark gradient bottom │
│                                                             │
│   ▌ Od roku 1991                                            │
│   ▌ Velkoobjemová přeprava                                  │
│   ▌ na špičkové úrovni                                      │
│                                                             │
│   Český dopravce s vlastní flotilou 100 souprav             │
│   pro celou Evropu.                                         │
│                                                             │
│   [ Poptat přepravu → ]   [ Naše služby ]                   │
│                                                             │
│   ─ scroll indicator                                        │
├─────────────────────────────────────────────────────────────┤
│  STAT BAR (sticky-feel, dark navy)                          │
│  35      100      8.5M     38         24t      120m³        │
│  let     vozidel  km/rok   europalet  náklad   objem        │
├─────────────────────────────────────────────────────────────┤
│  INTRO — two-column, big headline + paragraph               │
│  „Splňujeme náročná přání zákazníků při přepravě            │
│   velkého objemu zboží po celé Evropě."                     │
├─────────────────────────────────────────────────────────────┤
│  SERVICES — 3×2 card grid, each card = full-bleed photo     │
│  [Velkoobjem]  [Mezinárodní]  [Vnitrostátní]                │
│  [Spedice]     [Logistika]    [Pojištění 10M Kč]            │
├─────────────────────────────────────────────────────────────┤
│  WHY J.M.I.T. — 5 reasons, icon + headline + 1 line each    │
│  ISO 9001 · 24/7 dispečink · 100 vozidel · ADR · 35 let     │
├─────────────────────────────────────────────────────────────┤
│  COVERAGE MAP — interactive Europe SVG, primary corridors   │
│  highlighted (CZ→DE, CZ→Benelux, CZ→Scandinavia, CZ→UK)     │
│  Side panel lists countries with route stats.               │
├─────────────────────────────────────────────────────────────┤
│  FLEET TEASER — full-width video or photo strip,            │
│  3 thumbnails + "Prohlédnout vozový park →"                 │
├─────────────────────────────────────────────────────────────┤
│  REFERENCES — monochrome client logo grid (5×3), greyscale  │
│  hover→colour. 16 logos. Below: one large pull-quote.       │
├─────────────────────────────────────────────────────────────┤
│  CAREER STRIP — split-screen (driver portrait | text)       │
│  „Hledáme řidiče. Nadstandardní plat, stálé vozidlo,        │
│   stabilní česká firma od roku 1991."  [ Přidat se → ]     │
├─────────────────────────────────────────────────────────────┤
│  CONTACT CTA — dark navy block, white type                  │
│  Phone (big) · Email · Address · "Napište nám" form         │
├─────────────────────────────────────────────────────────────┤
│  FOOTER — 4 columns + bottom legal strip                    │
│  Brand · Služby · Společnost · Kontakt                      │
│  © 2026 J.M.I.T. a.s. · IČ 27846458 · GDPR · Cookies        │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Visual style direction

- **Layout grid:** 12-col, 1280 px max content, generous 96–160 px section padding on desktop.
- **Whitespace:** very generous. Sections are large and breathe.
- **Imagery treatment:** every photo gets a subtle 0–60 % dark gradient at bottom for type legibility; corners 4 px (slight, not playful).
- **Motion:** intersection-observer reveals (8 px translate-y + opacity, 600 ms). Hero parallax light. **No carousels** on homepage.
- **Iconography:** outline 1.5 px stroke, 24 px, monoline. (Lucide or Phosphor — both free, consistent, unbiased.) Replace the GIF buttons (`btn_tel.png`, `btn_marker.png` etc.) entirely.
- **Cards:** 1 px solid neutral-200 border, no drop-shadow on default state, 12 px radius, hover lifts 2 px and fades shadow in.
- **Buttons:** primary = JMIT red on white text, 14 px radius, 14/24 px padding; secondary = outlined navy. Both have a 4 px focus ring for accessibility.
- **Section headers:** small uppercase eyebrow ("01 / Služby") + large display headline + 2-line lede. Editorial rhythm.

---

## 7. Color palette (sampled from the J.M.I.T. logo)

| Token | Hex | Use |
|---|---|---|
| `--brand-red` | **#C8102E** *(target — sample from logo.png to confirm)* | Primary CTAs, accents, the underline rule under the logo, key numbers |
| `--brand-blue` | **#0B3D91** *(target)* | Headlines, secondary CTA outline, footer band |
| `--navy-deep` | **#0A1B2E** | Dark sections, footer, contact CTA block |
| `--ink` | **#101624** | Body text |
| `--ink-muted` | **#5B6678** | Secondary text, captions |
| `--line` | **#E4E7EC** | Borders, dividers |
| `--surface` | **#F7F8FA** | Alt section backgrounds |
| `--white` | **#FFFFFF** | Primary background |
| `--success` | **#0E8A4A** | (rare — form success, ISO badge accent) |

Action item before locking: extract exact hex from `/img/logo.png` with a colour picker. The values above are the standard Czech-corporate red/blue and a safe starting point.

**Contrast:** all text combinations pass **WCAG AA** at body size; hero overlay text passes AAA over the gradient.

---

## 8. Typography

- **Display / Headlines:** **Inter Display** (or alternatively **Geist**, **Söhne** if licensed). 700 weight, tight tracking (-0.02 em) at large sizes.
- **Body:** **Inter** 400/500. Excellent Czech diacritics, free, performant via `next/font` or self-hosted.
- **Numbers (the stat bar):** Inter with `font-feature-settings: "tnum"` for tabular alignment, weight 600.
- **Optional accent:** **GT Sectra** or **Source Serif 4** for a single italic pull-quote section — gives editorial flavour without going fashion-mag.

**Scale (desktop):**
- Display: 80 / 64 / 48 px
- H1–H3: 40 / 32 / 24 px
- Body: 18 px / 1.55 line-height
- Small: 14 px

Drop PT Sans entirely.

---

## 9. Photo usage strategy

**Use as-is (genuinely strong assets):**
- The 2024 fleet gallery (`foto-111` … `foto-120`) — 10 photos, clean, modern truck shots → use for hero, fleet page, service hero crops.
- The 2024 service heroes (`Fotky-2024/*-doprava.jpg`, `logistika.jpg`, `spedice.jpg`) → use directly on each service detail page hero.
- The 2025 staff portraits (`Lide-ve-firm/*-2025.jpg`) — 14 fresh portraits → contact page directory, about page leadership section, dispatcher section.

**Use with restoration / recrop:**
- Heritage photos (`prvni-kamion-1991`, `souprava-1992`, `dispecink-2001`) — desaturate to grayscale, present in the **history timeline** on `/o-firme`. Frames them as deliberate archival rather than "old photos we forgot to update".

**Don't use:**
- Old GIF client logos (`Finnforest.gif`, `SHELL.gif`, etc.) — re-vectorise as monochrome SVGs. Each brand has an SVG mark publicly; rebuild the references grid from those.
- The `mapka.png` static Europe map — replace with a real interactive SVG (see §10).
- The `btn_tel.png`, `btn_pen.png`, etc. button-icons — replaced by Lucide icons.

**Where new photography would lift the design (recommend, but not blocking):**
- One **wide aerial / drone shot** of the Hlubočky HQ + truck yard → contact page hero, footer.
- A short **30-sec hero video loop** of a truck on the highway at golden hour → optional homepage hero (with poster fallback to the existing 2024 photo).
- A "**day in the life**" reportage series with one driver → careers page (huge conversion lever for driver recruitment).

**Format & optimisation:**
- All raster photos → AVIF + WebP with JPEG fallback, served via `<picture>` or Next.js `<Image>`. Target ≤ 200 KB for hero, ≤ 80 KB for cards.
- Logos → SVG only.

---

## 10. Map section — proposal

Replace the iframe Google Maps embed (used for the HQ pin) and the static `mapka.png` (used for coverage) with **two distinct components**:

### A. Coverage map (homepage + dedicated `/pokryti` page)
- Custom **SVG of Europe** (use `world-atlas` 50m countries, simplified).
- Czech Republic filled in brand red.
- Routinely served corridors highlighted as thin red lines: CZ→DE, CZ→BeNeLux, CZ→UK, CZ→HU, CZ→RO, CZ→Scandinavia.
- Hover state on a country reveals a tooltip with route stats ("Německo — denně, 38 europalet, ADR").
- Visually treated like an editorial infographic: dark navy background, hairline borders, tabular numbers in a side panel.

### B. HQ location map (contact page only)
- **Mapbox GL JS** (free tier sufficient) or **MapLibre** with a custom monochrome navy/grey style.
- Single branded red pin at 49.6205°N, 17.4017°E.
- "Otevřít v Google Maps" / "Otevřít v Apple Maps" / "Naplánovat trasu" buttons below.

Both maps degrade gracefully (static image fallback) for users with JS off.

---

## 11. Contact page proposal

```
HERO  — small (40 vh), navy block, white type
        "Kontakty"  ·  "Vždy někoho zastihnete — dispečink je 24/7."

QUICK CONTACTS  — 3 large cards
   ┌──────────────────┬──────────────────┬──────────────────┐
   │ Telefon          │ Email            │ Adresa           │
   │ +420 585 206 140 │ jmit@jmit.cz     │ Olomoucká 15     │
   │ Dispečink 24/7   │ Odpovídáme do 1h │ Hlubočky 783 65  │
   └──────────────────┴──────────────────┴──────────────────┘

DEPARTMENT DIRECTORY  — tabs/anchors per department
   Vedení · Obchod · Dispečink · Technika · Administrativa
   Each person: 2025 portrait · name · role · email · mobile · phone

MAP  — branded Mapbox HQ map (full-width, 480 px tall)

FORM  — clean 4-field form, hCaptcha (replaces current invisible reCAPTCHA),
        succinct success/error states, GDPR consent line

LEGAL FOOTER STRIP  — IČ, DIČ, GPS, fax, registry court entry
```

Use the existing form fields (jméno, e-mail, telefon, vzkaz) but rebuild the markup; current form posts via Nette AJAX with custom CSRF token — backend can stay or move to a serverless function.

---

## 12. What's missing or should be improved

| Gap | Recommendation | Priority |
|---|---|---|
| Expired SSL | Renew cert before anything else (Let's Encrypt via Caddy/Certbot) | **P0 — today** |
| EN + DE content | Real translations, not machine-pasted CZ. Driver content can be CZ-only; EU customer content needs real EN/DE. | P1 |
| Aerial / drone shot of HQ | One half-day photographer in Hlubočky | P1 |
| Driver "day in the life" reportage | Photographer + 1 driver, full day | P1 (huge for careers conversion) |
| Truck-on-highway hero video loop | Optional but high impact | P2 |
| Case studies / one-pagers per top client | 2–3 written case studies (Mora, Whirlpool, Bridgestone) | P2 |
| Client logos as SVG | Re-vectorise from public sources | P2 |
| Modern news / aktuality cadence | Editorial calendar — at least quarterly posts | P2 |
| Cookie consent banner | Required (GTM is loaded) — add consent management | **P0 — legal** |
| Sitemap.xml + robots.txt + Open Graph + structured data (LocalBusiness + Organization) | SEO baseline | P1 |
| Performance budget | LCP < 2.0 s, CLS < 0.1, INP < 200 ms | P1 |

---

## 13. Next steps — recommended sequence

1. **Lock the brand foundation** *(½ day)*
   - Sample exact hex from logo, confirm typography choice (Inter vs Geist), agree palette tokens.
2. **Sign off on this proposal** — what's in / what's out / what changes.
3. **Phase 1: Static prototype of homepage** *(2–3 days)*
   - Tech stack recommendation: **Next.js 15 (App Router) + Tailwind v4 + TypeScript**, deployed on Vercel. Reasoning: best-in-class image optimisation (`next/image`), trivial i18n with `next-intl`, native Mapbox/MapLibre support, MDX for the news section.
   - Alternative if simpler stack preferred: **Astro + Tailwind** — slightly faster, just as good, less framework overhead.
4. **Phase 2: Service detail pages + about + careers** *(2 days)*
5. **Phase 3: Contact + interactive map + form backend** *(1 day)*
6. **Phase 4: i18n EN + DE** *(1 day after CZ copy approved)*
7. **Phase 5: News/Aktuality (MDX)** *(½ day)*
8. **Phase 6: SEO + analytics + cookie consent + sitemap** *(½ day)*
9. **Phase 7: QA + performance pass + accessibility audit** *(½ day)*

**Estimated total to a launch-ready CZ site:** ~7–9 working days.

### Prepared deliverables for the next phase, on request:
- Full homepage **copy** (CZ) tightened from existing prose
- **HTML/CSS/React prototype** of the homepage as the first concrete artefact
- Folder structure for the Next.js repo (`/app`, `/components`, `/content`, `/public/assets/{fleet,team,heritage,clients,certs}`)
- **Image optimisation pipeline** spec (sharp + AVIF/WebP, lazyload, responsive `srcset`)
- Component library spec (Button, Card, Stat, Section, Hero, Nav, Footer)

---

*Ready when you are — say "go phase 1" and I'll scaffold the Next.js prototype + drop the homepage live in this repo.*
