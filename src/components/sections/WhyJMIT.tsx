import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

type IconProps = { className?: string };

function IconCertificate({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7.5 21l4.5-2.4 4.5 2.4L15 13.5" />
      <path d="M9.5 9h5M12 6.5v5" />
    </svg>
  );
}

function IconClock({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
      <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21" />
    </svg>
  );
}

function IconTruck({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2.5 6h11v10h-11z" />
      <path d="M13.5 9h4l3 3.5V16h-7z" />
      <circle cx="6.5" cy="17.5" r="1.7" />
      <circle cx="17" cy="17.5" r="1.7" />
    </svg>
  );
}

function IconHazard({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 2.5 19.5h19z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" />
    </svg>
  );
}

function IconShield({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 4 6v6.2c0 4.6 3.3 7.6 8 8.8 4.7-1.2 8-4.2 8-8.8V6z" />
      <path d="m8.5 12.2 2.6 2.6L15.8 10" />
    </svg>
  );
}

function IconCompass({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m9 15 1.6-4.4L15 9l-1.6 4.4z" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

const ICONS = [
  IconCertificate,
  IconClock,
  IconTruck,
  IconHazard,
  IconShield,
  IconCompass,
];

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

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-14">
          {items.map((i) => {
            const Icon = ICONS[i];
            return (
              <li
                key={i}
                className="why-item group relative pt-7 reveal"
                data-delay={String((i % 4) + 1)}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-line"
                />
                <span
                  aria-hidden
                  className="why-item__rule absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-brand-red via-brand-red to-gold transition-[width] duration-700 ease-out group-hover:w-full"
                />

                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="why-item__glyph relative shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-red transition-all duration-500 group-hover:border-brand-red/40 group-hover:shadow-[0_0_0_4px_rgba(200,16,46,0.06)]"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1 pt-1">
                    <span className="block text-[11px] font-semibold tracking-[0.22em] uppercase text-ink-muted/80 tnum">
                      {String(i + 1).padStart(2, "0")} —{" "}
                      <span className="text-brand-red">JMIT</span>
                    </span>
                    <h3 className="mt-2 text-[20px] font-semibold tracking-tight leading-snug">
                      {t(`items.${i}.title`)}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                  {t(`items.${i}.body`)}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
