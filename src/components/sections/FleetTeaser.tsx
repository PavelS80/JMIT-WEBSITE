import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/Container";

const fleet = [
  { src: "/assets/fleet/fleet-1.jpg", key: "1" as const },
  { src: "/assets/fleet/fleet-3.jpg", key: "2" as const },
  { src: "/assets/fleet/fleet-5.jpg", key: "3" as const },
];

export function FleetTeaser() {
  const t = useTranslations("fleetTeaser");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-[16px] leading-relaxed text-ink-muted">
              {t("body")}
            </p>
            <Link
              href="/vozovy-park"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-red hover:gap-3 transition-all"
            >
              {t("cta")}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fleet.map((f, i) => {
            const caption = t(`captions.${f.key}`);
            return (
              <figure
                key={f.src}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-2 group"
              >
                <Image
                  src={f.src}
                  alt={caption}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  priority={i === 0}
                />
                <figcaption className="absolute left-5 bottom-5 right-5 text-[13px] font-semibold text-white/95 drop-shadow">
                  {caption}
                </figcaption>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
