import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { blurData } from "@/lib/blurData";

export function CareerCTA() {
  const t = useTranslations("careerCta");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-line reveal">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-navy">
            <Image
              src="/assets/hero/hero-4.jpg"
              alt={t("titleLine1")}
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={blurData["/assets/hero/hero-4.jpg"]}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
          </div>
          <div className="relative bg-navy text-white p-10 md:p-14 lg:p-16 flex flex-col justify-center overflow-hidden">
            <span
              aria-hidden
              className="absolute -bottom-16 -right-12 serif italic text-[260px] leading-none text-white/[0.04] select-none pointer-events-none"
            >
              D
            </span>
            <p className="eyebrow text-brand-red">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold leading-[1.05] tracking-tight">
              {t("titleLine1")}
              <br />
              <span className="text-white/70">{t("titleLine2")}</span>
            </h2>
            <span aria-hidden className="block mt-6 h-px w-16 bg-gradient-to-r from-gold via-gold/60 to-transparent" />
            <p className="mt-6 text-[16px] leading-relaxed text-white/75 max-w-md">
              {t("body")}
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-4 text-[14px]">
              <li className="relative border-t border-white/15 pt-3">
                <span aria-hidden className="absolute left-0 top-0 h-px w-8 bg-gold" />
                <div className="font-semibold tracking-wide">{t("salaryTitle")}</div>
                <div className="text-white/55 text-[12px]">{t("salaryNote")}</div>
              </li>
              <li className="relative border-t border-white/15 pt-3">
                <span aria-hidden className="absolute left-0 top-0 h-px w-8 bg-gold" />
                <div className="font-semibold tracking-wide">{t("rosterTitle")}</div>
                <div className="text-white/55 text-[12px]">{t("rosterNote")}</div>
              </li>
            </ul>

            <div className="mt-9 relative">
              <Button href="/kariera">{t("cta")} →</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
