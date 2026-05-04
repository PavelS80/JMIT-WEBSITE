import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/Container";
import { serviceSlugs, serviceImages } from "@/lib/site";

export function Services() {
  const t = useTranslations("servicesSection");
  const ts = useTranslations("services");
  const tc = useTranslations("common");

  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight max-w-2xl">
              {t("titleLine1")}
              <br />
              <span className="serif text-ink/80">{t("titleLine2")}</span>
            </h2>
          </div>
          <p className="max-w-md text-[16px] text-ink-muted">{t("intro")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceSlugs.map((slug, i) => (
            <Link
              key={slug}
              href={`/sluzby/${slug}`}
              data-delay={String((i % 4) + 1)}
              className="group relative overflow-hidden rounded-2xl bg-navy text-white aspect-[4/5] md:aspect-[5/6] block reveal"
            >
              <Image
                src={serviceImages[slug]}
                alt={ts(`${slug}.title`)}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between">
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60 tnum">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[24px] md:text-[26px] font-semibold leading-tight tracking-tight">
                    {ts(`${slug}.title`)}
                  </h3>
                  <p className="mt-2 text-[14px] text-white/75 max-w-xs">
                    {ts(`${slug}.excerpt`)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white">
                    {tc("viewDetail")}
                    <span
                      aria-hidden
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
