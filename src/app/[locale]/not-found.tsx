import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/Container";

export default function LocalizedNotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="bg-navy text-white relative overflow-hidden min-h-[80vh] flex items-center">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
        }}
      />
      <Container>
        <div className="relative max-w-2xl py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-gold to-brand-red" />
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-white/85 tnum">
              {t("code")}
            </span>
          </div>
          <h1 className="text-[44px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
            <span className="serif text-white/85">{t("title")}</span>
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/75 max-w-xl">
            {t("body")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-[15px] font-semibold text-white hover:bg-brand-red-dark transition-colors"
            >
              {t("ctaHome")} →
            </Link>
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-[15px] font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-colors"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
