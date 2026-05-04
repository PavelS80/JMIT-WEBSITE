import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["cs", "en", "de", "es", "ru"] as const,
  defaultLocale: "cs",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/o-firme": {
      cs: "/o-firme",
      en: "/about-us",
      de: "/uber-uns",
      es: "/sobre-nosotros",
      ru: "/o-nas",
    },
    "/sluzby": {
      cs: "/sluzby",
      en: "/services",
      de: "/leistungen",
      es: "/servicios",
      ru: "/uslugi",
    },
    "/sluzby/[slug]": {
      cs: "/sluzby/[slug]",
      en: "/services/[slug]",
      de: "/leistungen/[slug]",
      es: "/servicios/[slug]",
      ru: "/uslugi/[slug]",
    },
    "/vozovy-park": {
      cs: "/vozovy-park",
      en: "/fleet",
      de: "/fuhrpark",
      es: "/flota",
      ru: "/avtopark",
    },
    "/reference": {
      cs: "/reference",
      en: "/references",
      de: "/referenzen",
      es: "/referencias",
      ru: "/referentsii",
    },
    "/kariera": {
      cs: "/kariera",
      en: "/careers",
      de: "/karriere",
      es: "/empleo",
      ru: "/karera",
    },
    "/kontakty": {
      cs: "/kontakty",
      en: "/contact",
      de: "/kontakt",
      es: "/contacto",
      ru: "/kontakty",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
