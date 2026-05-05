import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  serviceSlugs,
  serviceImages,
  type ServiceSlug,
} from "@/lib/site";
import { blurData } from "@/lib/blurData";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!serviceSlugs.includes(slug as ServiceSlug)) return {};
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.excerpt`),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!serviceSlugs.includes(slug as ServiceSlug)) notFound();
  setRequestLocale(locale);
  return <ServiceDetailContent slug={slug as ServiceSlug} />;
}

type ProcessStep = { title: string; body: string };

function ServiceDetailContent({ slug }: { slug: ServiceSlug }) {
  const ts = useTranslations("services");
  const td = useTranslations("serviceDetail");
  const tc = useTranslations("common");

  const lede = td(`items.${slug}.lede`);
  const bullets = td.raw(`items.${slug}.bullets`) as string[];
  const body = td.raw(`items.${slug}.body`) as string[];
  const steps = td.raw("processSteps") as ProcessStep[];
  const title = ts(`${slug}.title`);
  const related = serviceSlugs.filter((s) => s !== slug);

  return (
    <>
      <PageHero eyebrow={`${td("labelPrefix")} · ${title}`} title={<>{lede}</>} />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-5 text-[17px] leading-relaxed text-ink/85">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="lg:col-span-5">
              <div className="relative bg-surface rounded-2xl p-7 border border-line overflow-hidden">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"
                />
                <p className="eyebrow">{td("keyParams")}</p>
                <ul className="mt-4 space-y-3">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[15px] text-ink/85"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface">
        <Container>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-navy">
            <Image
              src={serviceImages[slug]}
              alt={title}
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurData[serviceImages[slug]]}
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">{td("processEyebrow")}</p>
            <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.05]">
              {td("processTitle")}
            </h2>
          </div>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative border border-line rounded-2xl p-7 bg-white hover:shadow-soft transition-shadow"
              >
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[20px] font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">
                  {s.body}
                </p>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute right-[-0.55rem] top-12 text-brand-red/30 text-2xl"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface border-t border-line">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow">{td("relatedEyebrow")}</p>
              <h2 className="mt-3 text-[26px] md:text-[32px] font-semibold tracking-tight">
                {td("relatedTitle")}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {related.map((s) => (
              <Link
                key={s}
                href={{ pathname: "/sluzby/[slug]", params: { slug: s } }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy"
              >
                <Image
                  src={serviceImages[s]}
                  alt={ts(`${s}.title`)}
                  fill
                  sizes="(min-width:1024px) 18vw, (min-width:640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurData[serviceImages[s]]}
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/70 tnum">
                    {td("labelPrefix")}
                  </span>
                  <span className="block mt-1 text-[16px] font-semibold tracking-tight leading-tight">
                    {ts(`${s}.title`)}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/90 group-hover:gap-2.5 transition-all">
                    {tc("viewDetail")}
                    <span aria-hidden>→</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
