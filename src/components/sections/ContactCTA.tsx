import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function ContactCTA() {
  const t = useTranslations("contactCta");

  return (
    <section className="bg-brand-red text-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-white/80">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 text-[40px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.02] tracking-tight">
              {t("titleLine1")}
              <br />
              <span className="serif text-white/85">{t("titleLine2")}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-white/70">
                {t("phoneLabel")}
              </div>
              <a
                href={`tel:${site.phones.mainHref}`}
                className="block text-[28px] md:text-[32px] font-semibold tnum mt-1 hover:underline"
              >
                {site.phones.main}
              </a>
            </div>
            <div>
              <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-white/70">
                {t("emailLabel")}
              </div>
              <a
                href={`mailto:${site.emails.main}`}
                className="block text-[20px] font-semibold mt-1 hover:underline"
              >
                {site.emails.main}
              </a>
            </div>
            <div className="pt-3 flex flex-wrap gap-3">
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
