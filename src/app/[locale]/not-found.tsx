import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/Container";

type DestKey = "services" | "fleet" | "references" | "contact";
type Dest = { key: DestKey; title: string; body: string };

const ROUTES: Record<DestKey, "/sluzby" | "/vozovy-park" | "/reference" | "/kontakty"> = {
  services: "/sluzby",
  fleet: "/vozovy-park",
  references: "/reference",
  contact: "/kontakty",
};

export default function LocalizedNotFound() {
  const t = useTranslations("notFound");
  const destinations = t.raw("destinations") as Dest[];

  return (
    <>
      <section className="bg-navy text-white relative overflow-hidden">
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
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-red) 0%, transparent 70%)",
          }}
        />

        <Container>
          <div className="relative grid md:grid-cols-12 gap-10 md:gap-16 items-center pt-32 md:pt-40 pb-20 md:pb-28">
            <div className="md:col-span-7 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gradient-to-r from-gold to-brand-red" />
                <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-white/85 tnum">
                  {t("code")}
                </span>
              </div>

              <span
                className="not-found-stamp inline-flex items-center gap-2 mb-7 rounded-md border border-brand-red/70 bg-brand-red/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-white"
                aria-hidden
              >
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-brand-red animate-ping opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-brand-red" />
                </span>
                {t("stamp")}
              </span>

              <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.02] tracking-tight">
                <span className="serif text-white/90">{t("title")}</span>
              </h1>
              <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/75 max-w-xl">
                {t("body")}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-[15px] font-semibold text-white hover:bg-brand-red-dark transition-colors shadow-[0_8px_24px_-12px_rgba(200,16,46,0.6)]"
                >
                  {t("ctaHome")} <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/kontakty"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-[15px] font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-colors"
                >
                  {t("ctaContact")}
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-[360px] aspect-[3/4] flex items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-x-6 bottom-10 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute top-6 right-2 text-[14px] font-bold tracking-[0.22em] uppercase text-white/30 [writing-mode:vertical-rl] tnum"
                >
                  E-50 · UNKNOWN
                </span>
                <span
                  aria-hidden
                  className="absolute top-1/3 -left-2 text-[140px] md:text-[180px] font-bold tracking-tighter leading-none text-white/[0.04] tnum select-none"
                >
                  404
                </span>
                <ParkedTruck />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">{t("destinationsEyebrow")}</span>
            <h2 className="mt-3 text-[28px] md:text-[36px] font-semibold tracking-tight text-ink">
              {t("destinationsTitle")}
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {destinations.map((d) => (
              <li key={d.key}>
                <Link
                  href={ROUTES[d.key]}
                  className="group block h-full rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand-red/40 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-ink-muted group-hover:text-brand-red transition-colors tnum">
                      0{destIndex(d.key) + 1}
                    </span>
                    <span
                      aria-hidden
                      className="text-ink-muted group-hover:text-brand-red group-hover:translate-x-0.5 transition-all"
                    >
                      →
                    </span>
                  </div>
                  <p className="text-[18px] font-semibold text-ink mb-1.5">
                    {d.title}
                  </p>
                  <p className="text-[14px] text-ink-muted leading-relaxed">
                    {d.body}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

function destIndex(key: DestKey) {
  const order: DestKey[] = ["services", "fleet", "references", "contact"];
  return order.indexOf(key);
}

function ParkedTruck() {
  return (
    <svg
      viewBox="0 0 240 92"
      width="100%"
      className="relative drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)]"
      aria-hidden
    >
      <defs>
        <linearGradient id="nf-cab" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d8132f" />
          <stop offset="1" stopColor="#a30c24" />
        </linearGradient>
        <linearGradient id="nf-trailer" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e9ecf2" />
        </linearGradient>
        <linearGradient id="nf-window" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0a1b2e" />
          <stop offset="1" stopColor="#22405f" />
        </linearGradient>
      </defs>

      <rect x="76" y="14" width="148" height="50" rx="3" fill="url(#nf-trailer)" stroke="#cdd2db" />
      {[88, 102, 116, 130, 144, 158, 172, 186, 200, 214].map((x) => (
        <line key={x} x1={x} y1="18" x2={x} y2="60" stroke="#d6dae3" strokeWidth="1" />
      ))}
      <rect x="148" y="32" width="36" height="14" rx="2" fill="#0a1b2e" />
      <text
        x="166"
        y="42.5"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        J.M.I.T.
      </text>
      <rect x="76" y="64" width="148" height="3" fill="#c9ced8" />

      <path
        d="M 8 30 Q 8 22 18 22 L 56 22 Q 66 22 70 30 L 70 64 L 8 64 Z"
        fill="url(#nf-cab)"
        stroke="#7a0918"
      />
      <path
        d="M 22 30 Q 22 27 26 27 L 56 27 Q 60 27 60 30 L 60 42 L 22 42 Z"
        fill="url(#nf-window)"
        opacity="0.92"
      />
      <rect x="14" y="46" width="8" height="10" rx="1" fill="url(#nf-window)" opacity="0.8" />
      <g className="hazard-flash">
        <rect x="9" y="48" width="3" height="6" rx="1" fill="#ffd24a" />
      </g>
      <rect x="9" y="56" width="6" height="3" rx="0.5" fill="#5a0813" />
      <rect x="68" y="44" width="10" height="20" fill="#1a1a1a" />

      <ParkedWheel cx={28} cy={70} />
      <ParkedWheel cx={120} cy={70} />
      <ParkedWheel cx={142} cy={70} />
      <ParkedWheel cx={196} cy={70} />

      <ellipse cx="120" cy="86" rx="110" ry="3" fill="#000" opacity="0.28" />
    </svg>
  );
}

function ParkedWheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="9" fill="#15171c" />
      <circle cx={cx} cy={cy} r="9" fill="none" stroke="#2a2d35" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="4" fill="#3a3e48" />
      <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} stroke="#1f2129" strokeWidth="1.2" />
      <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} stroke="#1f2129" strokeWidth="1.2" />
    </g>
  );
}
