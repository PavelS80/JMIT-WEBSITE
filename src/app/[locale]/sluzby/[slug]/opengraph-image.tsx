import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { serviceSlugs } from "@/lib/site";
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "J.M.I.T. a.s. — Service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const ts = await getTranslations({ locale, namespace: "services" });
  const td = await getTranslations({ locale, namespace: "serviceDetail" });
  const t = await getTranslations({ locale, namespace: "servicesPage" });

  return renderOg({
    eyebrow: `${td("labelPrefix")} · ${ts(`${slug}.title`)}`,
    titleLine1: td(`items.${slug}.lede`),
    description: t("heroDescription"),
    monogram: "S",
  });
}
