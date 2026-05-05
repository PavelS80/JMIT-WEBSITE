import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "J.M.I.T. a.s. — Contact";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactsPage" });
  return renderOg({
    eyebrow: t("heroEyebrow"),
    titleLine1: t("heroTitleLine1"),
    titleLine2: t("heroTitleLine2"),
    description: t("metaDescription"),
    monogram: "C",
  });
}
