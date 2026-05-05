import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Link } from "@/i18n/navigation";

type Section = { id: string; title: string; body: string };

export function LegalPage({ namespace }: { namespace: "gdprPage" | "cookiesPage" | "imprintPage" }) {
  const t = useTranslations(namespace);
  const tl = useTranslations("legal");
  const sections = t.raw("sections") as Section[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        title={
          <>
            {t("heroTitleLine1")}
            <br />
            {t("heroTitleLine2")}
          </>
        }
        description={t("heroDescription")}
      />

      <section className="bg-white py-16 md:py-24">
        <Container size="narrow">
          <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-ink-muted mb-3">
                {tl("tocLabel")}
              </p>
              <nav aria-label={tl("tocLabel")}>
                <ul className="space-y-2 text-[14px]">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-ink-muted hover:text-brand-red transition-colors leading-snug"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 pt-6 border-t border-line text-[12px] text-ink-muted">
                <p className="font-semibold tracking-[0.14em] uppercase text-ink mb-1">
                  {tl("lastUpdatedLabel")}
                </p>
                <p>{tl("lastUpdatedDate")}</p>
              </div>
            </aside>

            <article className="max-w-2xl">
              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-gold-soft bg-gold/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                {tl("draftNotice")}
              </div>
              <div className="space-y-12">
                {sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-ink mb-4">
                      {s.title}
                    </h2>
                    <p className="text-[16px] leading-relaxed text-ink-muted whitespace-pre-line">
                      {s.body}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-line">
                <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-brand-red mb-2">
                  {tl("needHelp")}
                </p>
                <p className="text-[16px] text-ink leading-relaxed">
                  {tl("needHelpBody")}{" "}
                  <a
                    href="mailto:info@jmit.cz"
                    className="font-semibold text-ink hover:text-brand-red transition-colors underline decoration-gold/60 underline-offset-4"
                  >
                    info@jmit.cz
                  </a>
                  .
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-ink-muted hover:text-brand-red transition-colors"
                >
                  <span aria-hidden>←</span>
                  {tl("back")}
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
