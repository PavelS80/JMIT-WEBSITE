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
            {references.slice(0, 12).map((name, i) => (
              <li
                key={name}
                data-delay={String((i % 4) + 1)}
                className="reveal flex items-center justify-center px-6 py-12 border-b border-r border-line text-[15px] md:text-[16px] font-semibold text-ink-muted text-center hover:text-ink hover:bg-surface transition-colors"
              >
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-label={t("marqueeAria")}
        className="bg-navy text-white border-y border-white/5 overflow-hidden"
      >
        <div className="ticker-mask">
          <div className="ticker-track ticker-track--slow flex gap-14 py-7 whitespace-nowrap">
            {[...references, ...references].map((name, i) => (
              <div key={i} className="flex items-center gap-6 shrink-0">
                <span className="text-[18px] md:text-[20px] font-semibold tracking-tight text-white/85">
                  {name}
                </span>
                <span className="inline-block h-1 w-1 rounded-full bg-gold/70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <blockquote className="max-w-3xl mx-auto text-center">
            <span aria-hidden className="serif block text-[80px] leading-none text-brand-red/20 mb-2">
              &ldquo;
            </span>
            <p className="text-[24px] md:text-[30px] leading-[1.3] tracking-tight text-ink serif italic">
              {t("quote")}
            </p>
            <footer className="mt-6 text-[12px] tracking-[0.22em] uppercase text-ink-muted">
              <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent via-brand-red to-transparent align-middle mr-3" />
              {t("quoteAuthor")}
              <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent via-brand-red to-transparent align-middle ml-3" />
            </footer>
          </blockquote>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
