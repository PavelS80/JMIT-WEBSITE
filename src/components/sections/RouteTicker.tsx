import { useTranslations } from "next-intl";

const routes = [
  { from: "Hlubočky", to: "Hamburg", flag: "🇩🇪" },
  { from: "Olomouc", to: "Rotterdam", flag: "🇳🇱" },
  { from: "Prostějov", to: "Milano", flag: "🇮🇹" },
  { from: "Hlubočky", to: "Wien", flag: "🇦🇹" },
  { from: "Brno", to: "Budapest", flag: "🇭🇺" },
  { from: "Hlubočky", to: "Stockholm", flag: "🇸🇪" },
  { from: "Ostrava", to: "København", flag: "🇩🇰" },
  { from: "Hlubočky", to: "Bucureşti", flag: "🇷🇴" },
  { from: "Olomouc", to: "Bruxelles", flag: "🇧🇪" },
  { from: "Hlubočky", to: "Warszawa", flag: "🇵🇱" },
];

export function RouteTicker() {
  const t = useTranslations("ticker");
  const items = [...routes, ...routes];

  return (
    <section
      aria-label={t("ariaLabel")}
      className="relative bg-navy text-white border-y border-white/5 overflow-hidden"
    >
      <div className="ticker-mask">
        <div className="ticker-track flex gap-12 py-5 whitespace-nowrap">
          {items.map((r, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span
                className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-red"
                style={{ boxShadow: "0 0 0 3px rgba(200,16,46,0.25)" }}
              />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/55">
                {t("live")}
              </span>
              <span className="text-[14px] font-semibold tnum tracking-tight">
                {r.from}
              </span>
              <span className="text-white/40">→</span>
              <span className="text-[14px] font-semibold tnum tracking-tight">
                {r.to}
              </span>
              <span aria-hidden className="text-base leading-none">
                {r.flag}
              </span>
              <span className="text-white/15">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
