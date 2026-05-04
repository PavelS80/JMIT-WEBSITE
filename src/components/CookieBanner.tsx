"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "jmit-cookie-consent";

type Choice = "accepted" | "rejected";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const t = useTranslations("cookies");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const id = window.setTimeout(() => setVisible(true), 800);
        return () => window.clearTimeout(id);
      }
    } catch {
      /* localStorage unavailable — silently skip */
    }
  }, []);

  const decide = (choice: Choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, ts: Date.now() })
      );
    } catch {}
    setClosing(true);
    window.setTimeout(() => setVisible(false), 350);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-title"
      className={`cookie-banner fixed inset-x-3 md:inset-x-6 bottom-3 md:bottom-6 z-[70] ${
        closing ? "cookie-banner--closing" : ""
      }`}
    >
      <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-2xl border border-white/10 bg-navy/95 backdrop-blur-md text-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-80"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-7">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-gradient-to-r from-gold to-brand-red" />
              <span
                id="cookie-title"
                className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/85"
              >
                {t("title")}
              </span>
            </div>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/80 max-w-2xl">
              {t("body")}{" "}
              <Link
                href="/"
                className="underline underline-offset-4 decoration-white/30 hover:decoration-gold hover:text-white transition-colors"
              >
                {t("learnMore")}
              </Link>
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 md:items-stretch md:justify-end">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="rounded-xl border border-white/25 px-5 py-3 text-[13px] font-semibold text-white/90 hover:bg-white/5 hover:border-white/45 transition-colors"
            >
              {t("reject")}
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-xl bg-brand-red px-5 py-3 text-[13px] font-semibold text-white hover:bg-brand-red-dark transition-colors shadow-[0_8px_24px_-12px_rgba(200,16,46,0.6)]"
            >
              {t("accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
