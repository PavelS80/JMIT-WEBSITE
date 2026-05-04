import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "fleetPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const photos = [1, 2, 3, 4, 5, 6].map((n) => `/assets/fleet/fleet-${n}.jpg`);

export default async function FleetPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetContent />;
}

type FleetStat = { value: string; unit?: string; label: string; sub: string };

function FleetContent() {
  const t = useTranslations("fleetPage");
  const equipment = t.raw("equipment") as string[];
  const stats = t.raw("stats") as FleetStat[];

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

      <section className="-mt-16 md:-mt-20 pb-4 relative z-10">
        <Container>
          <div className="bg-white border border-line rounded-2xl shadow-soft p-2">
            <p className="px-6 pt-5 eyebrow">{t("statsEyebrow")}</p>
            <dl className="mt-3 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-line">
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-6 md:py-7">
                  <dt className="text-[12px] font-semibold tracking-[0.18em] uppercase text-ink-muted">
                    {s.label}
                  </dt>
                  <dd className="mt-2 flex items-baseline gap-1.5 text-ink">
                    <span className="text-[40px] md:text-[48px] leading-none font-semibold tracking-tight tnum">
                      {s.value}
                    </span>
                    {s.unit && (
                      <span className="text-[16px] md:text-[18px] font-semibold text-brand-red tnum">
                        {s.unit}
                      </span>
                    )}
                  </dd>
                  <p className="mt-2 text-[13px] text-ink-muted">{s.sub}</p>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-6 space-y-5 text-[17px] leading-relaxed text-ink/85">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
            <aside className="lg:col-span-5 lg:col-start-8">
              <div className="bg-surface border border-line rounded-2xl p-7">
                <p className="eyebrow">{t("equipmentTitle")}</p>
                <ul className="mt-4 space-y-3 text-[15px] text-ink/85">
                  {equipment.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <figure
                key={src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-2 group"
              >
                <Image
                  src={src}
                  alt={`J.M.I.T. ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
