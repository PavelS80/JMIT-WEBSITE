import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function Intro() {
  const t = useTranslations("intro");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 reveal">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight">
              {t("titleLine1")}
              <br />
              <span className="serif text-ink/80">{t("titleLine2")}</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[17px] leading-relaxed text-ink/80">
            <p className="text-[20px] md:text-[22px] leading-[1.55] text-ink font-medium">
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
