import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function Intro() {
  const t = useTranslations("intro");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <span
        aria-hidden
        className="absolute -top-20 -right-10 serif italic text-[280px] md:text-[420px] leading-none text-gold/[0.06] select-none pointer-events-none tnum"
      >
        02
      </span>
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 reveal">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight">
              {t("titleLine1")}
              <br />
              <span className="serif text-ink/80">{t("titleLine2")}</span>
            </h2>
            <span aria-hidden className="block mt-7 h-px w-16 bg-gradient-to-r from-brand-red via-gold to-transparent" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[17px] leading-relaxed text-ink/80">
            <p className="relative pl-6 text-[20px] md:text-[22px] leading-[1.55] text-ink font-medium">
              <span aria-hidden className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-red via-brand-red/60 to-transparent rounded-full" />
              {t("lede")}
            </p>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
