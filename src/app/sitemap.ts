import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { serviceSlugs } from "@/lib/site";

const BASE_URL = "https://www.jmit.cz";

const staticRoutes = [
  "/",
  "/o-firme",
  "/sluzby",
  "/vozovy-park",
  "/reference",
  "/kariera",
  "/kontakty",
] as const;

type Locale = (typeof routing.locales)[number];
type Href =
  | (typeof staticRoutes)[number]
  | { pathname: "/sluzby/[slug]"; params: { slug: string } };

function url(locale: Locale, href: Href) {
  const path = getPathname({ locale, href: href as never });
  return `${BASE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes: Href[] = [
    ...staticRoutes,
    ...serviceSlugs.map(
      (slug) => ({ pathname: "/sluzby/[slug]" as const, params: { slug } })
    ),
  ];

  return allRoutes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: url(locale, route),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, url(l, route)])
        ),
      },
    }))
  );
}
