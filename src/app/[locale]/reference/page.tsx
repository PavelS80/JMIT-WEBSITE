import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { references } from "@/lib/site";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "referencesPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ReferencesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ReferencesContent />;
}

function ReferencesContent() {
  const t = useTranslations("referencesPage");

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        title={
          <>
            {t("heroTitleLine1")}
            <br />
            {t("heroTitleLine2Prefix")}{" "}
            <span className="text-white/70">{t("heroTitleLine2Suffix")}</span>
          </>
        }
        description={t("heroDescription")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-line bg-white rounded-2xl overflow-hidden">
            {references.map((name) => (
              <li
                key={name}
                className="flex items-center justify-center px-6 py-12 border-b border-r border-line text-[15px] md:text-[16px] font-semibold text-ink-muted text-center hover:text-ink hover:bg-surface transition-colors"
              >
                {name}
              </li>
            ))}
          </ul>

          <blockquote className="mt-20 max-w-3xl mx-auto text-center">
            <p className="text-[24px] md:text-[28px] leading-[1.3] tracking-tight text-ink">
              {t("quote")}
            </p>
            <footer className="mt-5 text-[13px] tracking-[0.18em] uppercase text-ink-muted">
              {t("quoteAuthor")}
            </footer>
          </blockquote>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
