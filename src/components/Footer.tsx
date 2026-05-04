import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navigation, site, serviceSlugs } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const ts = useTranslations("services");

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Image
              src="/assets/brand/logo-mono.png"
              alt="J.M.I.T. a.s."
              width={170}
              height={50}
              className="h-10 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-[14px] leading-relaxed text-white/60 max-w-xs whitespace-pre-line">
              {t("tagline", { year: site.foundedYear })}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md border border-white/20 px-2 py-1 text-[11px] font-semibold tracking-wider text-white/80">
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center rounded-md border border-white/20 px-2 py-1 text-[11px] font-semibold tracking-wider text-white/80">
                ADR
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-white mb-4">
              {t("company")}
            </p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] hover:text-white text-white/70"
                  >
                    {tn(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-white mb-4">
              {t("services")}
            </p>
            <ul className="space-y-3">
              {serviceSlugs.slice(0, 5).map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/sluzby/${slug}`}
                    className="text-[14px] hover:text-white text-white/70"
                  >
                    {ts(`${slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-white mb-4">
              {t("contact")}
            </p>
            <address className="not-italic text-[14px] leading-relaxed text-white/70">
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              {site.address.country}
              <br />
              <br />
              <a
                href={`tel:${site.phones.mainHref}`}
                className="text-white tnum hover:underline"
              >
                {site.phones.main}
              </a>
              <br />
              <a
                href={`mailto:${site.emails.main}`}
                className="text-white hover:underline"
              >
                {site.emails.main}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-white/50">
          <p>
            {t("rights", {
              year,
              name: site.name,
              ico: site.ico,
              dic: site.dic,
            })}
          </p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-white">
              {t("gdpr")}
            </Link>
            <Link href="/" className="hover:text-white">
              {t("cookies")}
            </Link>
            <Link href="/" className="hover:text-white">
              {t("imprint")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
