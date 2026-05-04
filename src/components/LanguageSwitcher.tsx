"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState, useRef, useEffect, useTransition } from "react";

const LABELS: Record<string, string> = {
  cs: "Česky",
  en: "English",
  de: "Deutsch",
  es: "Español",
  ru: "Русский",
};

export function LanguageSwitcher({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (target: string) => {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: target });
    });
  };

  const triggerColor =
    variant === "dark"
      ? "text-white/85 hover:text-white"
      : "text-ink hover:text-brand-red";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase tnum transition-colors ${triggerColor} ${
          isPending ? "opacity-60" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
      >
        <span>{locale.toUpperCase()}</span>
        <span aria-hidden className="text-[10px]">▾</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-3 min-w-[160px] rounded-xl border border-line bg-white shadow-lift overflow-hidden z-50"
        >
          {routing.locales.map((l) => {
            const active = l === locale;
            return (
              <li key={l}>
                <button
                  type="button"
                  onClick={() => switchTo(l)}
                  role="option"
                  aria-selected={active}
                  className={`w-full text-left px-4 py-2.5 text-[14px] transition-colors flex items-center justify-between gap-3 ${
                    active
                      ? "bg-surface text-brand-red font-semibold"
                      : "text-ink hover:bg-surface"
                  }`}
                >
                  <span>{LABELS[l]}</span>
                  <span className="text-[11px] tracking-wider tnum text-ink-muted">
                    {l.toUpperCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
