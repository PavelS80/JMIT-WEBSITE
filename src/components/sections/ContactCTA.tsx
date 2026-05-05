import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function ContactCTA() {
  const t = useTranslations("contactCta");

  return (
    <section className="relative bg-brand-red text-white py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <span
        aria-hidden
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl pointer-events-none"
      />
      <span
        aria-hidden
        className="absolute -bottom-32 -left-16 serif italic text-white/[0.04] text-[280px] md:text-[420px] leading-none select-none pointer-events-none tnum"
      >
        1991
      </span>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-white/85">
              <span aria-hidden className="inline-block h-px w-8 bg-gradient-to-r from-gold to-white/70" />
              {t("eyebrow")}
            </p>
            <h2 className="mt-5 text-[40px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.02] tracking-tight">
              {t("titleLine1")}
              <br />
              <span className="serif text-white/90">{t("titleLine2")}</span>
            </h2>
            <span aria-hidden className="block mt-8 h-px w-24 bg-gradient-to-r from-gold via-gold/60 to-transparent" />
          </div>

          <div className="lg:col-span-5 space-y-3.5">
            <a
              href={`tel:${site.phones.mainHref}`}
              className="contact-tile group relative block rounded-2xl border border-white/20 bg-white/[0.06] backdrop-blur-sm p-5 md:p-6 transition-all hover:bg-white/[0.12] hover:border-white/40"
            >
              <div className="flex items-center gap-4">
                <span aria-hidden className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 group-hover:border-gold/60 group-hover:bg-gold/15 transition-colors">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 4h3l1.5 4-2 1a12 12 0 0 0 6.5 6.5l1-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/65">
                    {t("phoneLabel")}
                  </div>
                  <div className="mt-0.5 text-[24px] md:text-[28px] font-semibold tnum leading-tight">
                    {site.phones.main}
                  </div>
                </div>
                <span aria-hidden className="text-white/50 group-hover:translate-x-1 group-hover:text-white transition-all">→</span>
              </div>
            </a>

            <a
              href={`mailto:${site.emails.main}`}
              className="contact-tile group relative block rounded-2xl border border-white/20 bg-white/[0.06] backdrop-blur-sm p-5 md:p-6 transition-all hover:bg-white/[0.12] hover:border-white/40"
            >
              <div className="flex items-center gap-4">
                <span aria-hidden className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 group-hover:border-gold/60 group-hover:bg-gold/15 transition-colors">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/65">
                    {t("emailLabel")}
                  </div>
                  <div className="mt-0.5 text-[18px] md:text-[20px] font-semibold leading-tight truncate">
                    {site.emails.main}
                  </div>
                </div>
                <span aria-hidden className="text-white/50 group-hover:translate-x-1 group-hover:text-white transition-all">→</span>
              </div>
            </a>

            <div className="pt-2">
              <Button href="/kontakty" variant="ghost-light">
                {t("cta")} →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
