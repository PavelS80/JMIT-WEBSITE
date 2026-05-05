import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { CursorGlow } from "@/components/CursorGlow";
import { site } from "@/lib/site";
import { blurData } from "@/lib/blurData";

export function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute -inset-y-16 inset-x-0 -z-10 hero-parallax">
        <Image
          src="/assets/hero/hero-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurData["/assets/hero/hero-1.jpg"]}
          className="object-cover hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
      </div>

      <CursorGlow />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-32 min-h-[88vh] flex flex-col justify-end">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6 hero-rise" style={{ "--rise-delay": "0ms" } as React.CSSProperties}>
            <span className="h-px w-10 bg-gradient-to-r from-gold to-brand-red" />
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-white/85">
              {t("eyebrow", { year: site.foundedYear, years: site.yearsInBusiness })}
            </span>
          </div>
          <h1 className="font-semibold tracking-tight text-[44px] md:text-[68px] lg:text-[84px] leading-[1.02]">
            <span className="hero-rise block" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
              {t("titleLine1")}
            </span>
            <span className="hero-rise block serif text-white/85" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
              {t("titleLine2")}
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] md:text-[19px] leading-relaxed text-white/80 hero-rise" style={{ "--rise-delay": "380ms" } as React.CSSProperties}>
            {t("body")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 hero-rise" style={{ "--rise-delay": "500ms" } as React.CSSProperties}>
            <Button href="/kontakty">{t("ctaPrimary")} →</Button>
            <Button href="/sluzby" variant="ghost-light">
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/50">
        <span className="h-3 w-px bg-white/40 animate-pulse" />
        {tc("scrollHint")}
      </div>
    </section>
  );
}
