import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { serviceSlugs, serviceImages } from "@/lib/site";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}

function ServicesContent() {
  const t = useTranslations("servicesPage");
  const ts = useTranslations("services");
  const tc = useTranslations("common");
  const td = useTranslations("serviceDetail");

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
          <div className="space-y-6">
            {serviceSlugs.map((slug, i) => (
              <Link
                key={slug}
                href={`/sluzby/${slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-stretch border border-line rounded-2xl overflow-hidden hover:shadow-lift transition-shadow"
              >
                <div className="relative lg:col-span-5 aspect-[16/10] lg:aspect-auto bg-navy">
                  <Image
                    src={serviceImages[slug]}
                    alt={ts(`${slug}.title`)}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red tnum">
                    {String(i + 1).padStart(2, "0")} — {td("labelPrefix")}
                  </span>
                  <h2 className="mt-3 text-[28px] md:text-[34px] font-semibold tracking-tight">
                    {ts(`${slug}.title`)}
                  </h2>
                  <p className="mt-3 text-[16px] text-ink-muted leading-relaxed max-w-xl">
                    {ts(`${slug}.excerpt`)}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-ink group-hover:text-brand-red">
                    {tc("viewDetail")}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
