import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { site } from "@/lib/site";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}

type Value = { title: string; body: string };

function AboutContent() {
  const t = useTranslations("aboutPage");
  const years = site.yearsInBusiness;
  const timeline = t.raw("timeline") as Array<{ year: string; text: string }>;
  const certificates = t.raw("certificates") as Array<{
    name: string;
    body: string;
  }>;
  const values = t.raw("values") as Value[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        title={
          <>
            {t("heroTitleLine1")}
            <br />
            {t("heroTitleLine2")}{" "}
            <span className="text-white/70">{t("heroTitleYear")}</span>
          </>
        }
        description={t("heroDescription")}
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow">{t("philosophyEyebrow")}</p>
              <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold leading-[1.05] tracking-tight">
                {t("philosophyTitle")}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[17px] leading-relaxed text-ink/85">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p4")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-navy text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red">
                {t("valuesEyebrow")}
              </p>
              <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.05]">
                {t("valuesTitle")}
              </h2>
            </div>
          </div>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <li
                key={v.title}
                className="bg-navy p-8 md:p-10 hover:bg-navy-soft transition-colors"
              >
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[24px] font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70 max-w-sm">
                  {v.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <p className="eyebrow">{t("historyEyebrow")}</p>
          <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-tight max-w-2xl">
            {t("historyTitle")}
          </h2>

          <ol className="mt-16 relative pl-8 md:pl-12">
            <span
              aria-hidden
              className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-brand-red via-gold/40 to-transparent"
            />
            {timeline.map((row, i) => (
              <li
                key={row.year}
                data-delay={String((i % 4) + 1)}
                className="relative mb-12 last:mb-0 reveal"
              >
                <span
                  aria-hidden
                  className="absolute -left-[26px] md:-left-[34px] top-3 inline-block w-3 h-3 rounded-full bg-brand-red ring-4 ring-surface shadow-[0_0_0_1px_rgba(200,16,46,0.35)]"
                />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8">
                  <div className="md:col-span-3 text-[28px] md:text-[34px] font-semibold tracking-tight text-brand-red tnum leading-none">
                    {row.year}
                  </div>
                  <p className="md:col-span-9 text-[16px] md:text-[17px] leading-relaxed text-ink/85 max-w-2xl">
                    {row.text.replace("{years}", String(years))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((c, i) => (
              <div
                key={c.name}
                data-delay={String((i % 4) + 1)}
                className="reveal group relative border border-line rounded-2xl p-7 bg-surface overflow-hidden transition-shadow hover:shadow-soft"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-brand-red to-gold transition-[width] duration-500 group-hover:w-full"
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red">
                    {t("certificateLabel")}
                  </div>
                  <span aria-hidden className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-white text-gold">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="m6 12 4 4 8-8" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-3 text-[22px] font-semibold tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
