import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function WhyJMIT() {
  const t = useTranslations("why");
  const items = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl mb-14">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight">
            {t("title")}
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 md:gap-y-14">
          {items.map((i) => (
            <li
              key={i}
              className="border-t border-line pt-6 reveal"
              data-delay={String((i % 4) + 1)}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[20px] font-semibold tracking-tight">
                  {t(`items.${i}.title`)}
                </h3>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                {t(`items.${i}.body`)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
