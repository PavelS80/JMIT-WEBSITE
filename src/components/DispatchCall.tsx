"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { site } from "@/lib/site";

export function DispatchCall() {
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShow(true), 1500);
    return () => window.clearTimeout(id);
  }, []);

  if (pathname === "/kontakty") return null;

  return (
    <a
      href={`tel:${site.phones.mainHref}`}
      aria-label={`${tc("callDispatch")} — ${site.phones.main}`}
      className={`dispatch-call lg:hidden fixed bottom-6 left-6 z-40 inline-flex items-center gap-2.5 rounded-full bg-brand-red text-white pl-3 pr-4 py-2.5 shadow-lift transition-all ${
        show
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-70"
        />
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
          className="relative"
        >
          <path
            d="M3.2 1.5h2.1l1 2.6-1.3.8a8 8 0 0 0 4.1 4.1l.8-1.3 2.6 1v2.1c0 .9-.7 1.7-1.7 1.7A10.3 10.3 0 0 1 1.5 2.2c0-1 .8-1.7 1.7-1.7Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="text-[12px] font-semibold tracking-[0.12em] uppercase leading-none">
        {tc("callDispatch")}
      </span>
    </a>
  );
}
