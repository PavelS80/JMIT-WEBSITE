import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  serviceSlugs,
  serviceImages,
  type ServiceSlug,
} from "@/lib/site";
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

function ServiceDetailContent({ slug }: { slug: ServiceSlug }) {
  const ts = useTranslations("services");
  const td = useTranslations("serviceDetail");

  const lede = td(`items.${slug}.lede`);
  const bullets = td.raw(`items.${slug}.bullets`) as string[];
  const body = td.raw(`items.${slug}.body`) as string[];
  const title = ts(`${slug}.title`);

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
              <div className="bg-surface rounded-2xl p-7 border border-line">
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
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
