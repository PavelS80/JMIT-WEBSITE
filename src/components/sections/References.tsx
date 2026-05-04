import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { references } from "@/lib/site";

export function References() {
  const t = useTranslations("referencesSection");

  return (
    <section className="py-24 md:py-32 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-[16px] leading-relaxed text-ink-muted">
              {t("body")}
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-line bg-white rounded-2xl overflow-hidden">
          {references.map((name) => (
            <li
              key={name}
              className="flex items-center justify-center px-6 py-10 border-b border-r border-line text-[14px] md:text-[15px] font-semibold text-ink-muted text-center hover:text-ink hover:bg-surface transition-colors"
            >
              {name}
            </li>
          ))}
        </ul>

        <blockquote className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-[24px] md:text-[28px] leading-[1.3] tracking-tight text-ink">
            {t("quote")}
          </p>
          <footer className="mt-5 text-[13px] tracking-[0.18em] uppercase text-ink-muted">
            {t("quoteAuthor")}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
