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
          <div className="bg-navy text-white p-10 md:p-14 lg:p-16 flex flex-col justify-center">
            <p className="eyebrow text-brand-red">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold leading-[1.05] tracking-tight">
              {t("titleLine1")}
              <br />
              <span className="text-white/70">{t("titleLine2")}</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-white/75 max-w-md">
              {t("body")}
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-4 text-[14px]">
              <li className="border-t border-white/15 pt-3">
                <div className="font-semibold">{t("salaryTitle")}</div>
                <div className="text-white/55 text-[12px]">{t("salaryNote")}</div>
              </li>
              <li className="border-t border-white/15 pt-3">
                <div className="font-semibold">{t("rosterTitle")}</div>
                <div className="text-white/55 text-[12px]">{t("rosterNote")}</div>
              </li>
            </ul>

            <div className="mt-9">
              <Button href="/kariera">{t("cta")} →</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
