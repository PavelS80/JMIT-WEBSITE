import { useTranslations } from "next-intl";
import { statValues } from "@/lib/site";

export function StatBar() {
  const t = useTranslations("stats");

  return (
    <section
      aria-label={t("ariaLabel")}
      className="bg-navy text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-10 md:py-14">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
          {statValues.map((s, i) => (
            <li key={i} className="flex flex-col gap-1">
              <span className="text-[40px] md:text-[44px] font-semibold leading-none tracking-tight tnum text-white">
                {s.value}
                {s.suffix}
              </span>
              <span className="text-[14px] font-medium text-white/90">
                {t(`items.${i}.label`)}
              </span>
              <span className="text-[12px] text-white/50">
                {t(`items.${i}.since`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
