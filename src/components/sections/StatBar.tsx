"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { statValues } from "@/lib/site";

const DURATION = 1400;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function StatBar() {
  const t = useTranslations("stats");
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setProgress(1);
      return;
    }

    let raf = 0;
    let started = false;
    const start = (timestamp: number) => {
      const elapsed = performance.now() - timestamp;
      const t = Math.min(elapsed / DURATION, 1);
      setProgress(easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(() => start(timestamp));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            const t0 = performance.now();
            raf = requestAnimationFrame(() => start(t0));
            observer.disconnect();
          }
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      aria-label={t("ariaLabel")}
      className="bg-navy text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-10 md:py-14">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
          {statValues.map((s, i) => {
            const v = s.value * progress;
            const formatted =
              s.value < 10 ? v.toFixed(1) : Math.round(v).toString();
            return (
              <li key={i} className="flex flex-col gap-1">
                <span className="text-[40px] md:text-[44px] font-semibold leading-none tracking-tight tnum text-white">
                  {formatted}
                  {s.suffix}
                </span>
                <span className="text-[14px] font-medium text-white/90">
                  {t(`items.${i}.label`)}
                </span>
                <span className="text-[12px] text-white/50">
                  {t(`items.${i}.since`)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
