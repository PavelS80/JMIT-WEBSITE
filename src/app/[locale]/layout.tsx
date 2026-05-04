import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DrivingTruck } from "@/components/DrivingTruck";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollProgress } from "@/components/ScrollProgress";
import { RevealObserver } from "@/components/Reveal";
import { BackToTop } from "@/components/BackToTop";
import { StructuredData } from "@/components/StructuredData";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const localeMap = {
  cs: "cs_CZ",
  en: "en_GB",
  de: "de_DE",
  es: "es_ES",
  ru: "ru_RU",
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL("https://www.jmit.cz"),
    title: {
      default: t("rootTitle"),
      template: "%s · J.M.I.T. a.s.",
    },
    description: t("rootDescription"),
    openGraph: {
      type: "website",
      locale: localeMap[locale as keyof typeof localeMap] ?? "cs_CZ",
      url: "https://www.jmit.cz",
      siteName: "J.M.I.T. a.s.",
      title: t("rootTitle"),
      description: t("rootOgDescription"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <NextIntlClientProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <DrivingTruck />
          <CookieBanner />
          <RevealObserver />
          <BackToTop />
          <StructuredData />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
