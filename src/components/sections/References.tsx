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
              className="reference-cell group relative flex items-center justify-center px-6 py-10 border-b border-r border-line text-[14px] md:text-[15px] font-semibold text-ink-muted text-center transition-colors duration-300 hover:text-ink"
            >
              <span
                aria-hidden
                className="reference-cell__rule absolute inset-x-5 top-0 h-px origin-center bg-gradient-to-r from-transparent via-brand-red to-transparent scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-surface to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative tracking-[0.04em]">{name}</span>
            </li>
          ))}
        </ul>

        <blockquote className="mt-16 max-w-3xl mx-auto text-center relative">
          <span
            aria-hidden
            className="serif text-[80px] leading-none text-gold/45 absolute -top-4 left-1/2 -translate-x-1/2 select-none"
          >
            “
          </span>
          <p className="relative text-[24px] md:text-[28px] leading-[1.3] tracking-tight text-ink">
            {t("quote")}
          </p>
          <span
            aria-hidden
            className="block mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <footer className="mt-4 text-[13px] tracking-[0.18em] uppercase text-ink-muted">
            {t("quoteAuthor")}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
