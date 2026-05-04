import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { serviceSlugs } from "@/lib/site";

const BASE_URL = "https://www.jmit.cz";

const routes = [
  "",
  "/o-firme",
  "/sluzby",
  ...serviceSlugs.map((s) => `/sluzby/${s}`),
  "/vozovy-park",
  "/reference",
  "/kariera",
  "/kontakty",
];

function url(locale: string, path: string) {
  if (locale === routing.defaultLocale) return `${BASE_URL}${path || "/"}`;
  return `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: url(locale, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, url(l, path)])
        ),
      },
    }))
  );
}
