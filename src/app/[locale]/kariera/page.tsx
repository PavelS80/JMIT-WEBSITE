import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "careerPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function CareerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareerContent />;
}

type Position = {
  title: string;
  subtitle: string;
  requirements: string[];
  offers: string[];
};

function CareerContent() {
  const t = useTranslations("careerPage");
  const positions = t.raw("positions") as Position[];
  const contactEmail = site.emails.careers;
  const contactPhone = site.phones.main;
  const contactPhoneHref = site.phones.mainHref;

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        title={
          <>
            {t("heroTitleLine1")}
            <br />
            <span className="text-white/70">{t("heroTitleLine2")}</span>
          </>
        }
        description={t("heroDescription")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="space-y-8">
            {positions.map((p, i) => (
              <article
                key={p.title}
                className="border border-line rounded-3xl overflow-hidden"
              >
                <header className="bg-surface px-8 md:px-10 py-8 border-b border-line">
                  <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red tnum">
                    {t("openPosition")} {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-[28px] md:text-[34px] font-semibold tracking-tight">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-[15px] text-ink-muted">{p.subtitle}</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-line">
                  <div className="p-8 md:p-10">
                    <p className="eyebrow">{t("requirements")}</p>
                    <ul className="mt-4 space-y-3 text-[15px] text-ink/85">
                      {p.requirements.map((r) => (
                        <li key={r} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-ink/40 shrink-0"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 md:p-10">
                    <p className="eyebrow">{t("offers")}</p>
                    <ul className="mt-4 space-y-3 text-[15px] text-ink/85">
                      {p.offers.map((o) => (
                        <li key={o} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"
                          />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="bg-navy text-white px-8 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-[12px] tracking-[0.18em] uppercase text-white/60">
                      {t("contactUs")}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-[15px] tnum">
                      <a
                        href={`tel:${contactPhoneHref}`}
                        className="font-semibold hover:underline"
                      >
                        {contactPhone}
                      </a>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-white/80 hover:underline"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                  <Button
                    href={`mailto:${contactEmail}`}
                    variant="ghost-light"
                  >
                    {t("applyCta")} →
                  </Button>
                </footer>
              </article>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface border border-line rounded-2xl p-8">
              <p className="eyebrow">{t("destinationsTitle")}</p>
              <h3 className="mt-4 text-[24px] font-semibold tracking-tight">
                {t("destinations")}
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">
                {t("destinationsBody")}
              </p>
            </div>
            <div className="bg-navy text-white rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <p className="text-[12px] tracking-[0.18em] uppercase text-white/60">
                  {t("headquartersLabel")}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </p>
              </div>
              <a
                href={`tel:${site.phones.mainHref}`}
                className="mt-6 text-[20px] font-semibold tnum hover:underline"
              >
                {site.phones.main}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
