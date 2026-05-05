"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navigation, site } from "@/lib/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-line shadow-[0_1px_0_rgba(16,22,36,0.04)]"
          : "bg-white/0 border-b border-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 transition-[height] duration-300",
          scrolled ? "h-[60px]" : "h-[78px]"
        )}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="J.M.I.T.">
          <Image
            src="/assets/brand/logo.png"
            alt="J.M.I.T. a.s."
            width={140}
            height={42}
            priority
            className={cn(
              "w-auto transition-[height] duration-300",
              scrolled ? "h-7 md:h-8" : "h-9 md:h-10"
            )}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "nav-link text-[14px] font-medium transition-colors",
                  active ? "text-brand-red" : "text-ink hover:text-brand-red"
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.phones.mainHref}`}
            className="text-[14px] font-semibold text-ink tnum hover:text-brand-red"
          >
            {site.phones.main}
          </a>
          <div className="h-5 w-px bg-line" />
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line"
          aria-label={t("menu")}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">{t("menu")}</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-line bg-white">
          <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "py-3 text-[15px] font-medium border-b border-line/60",
                    active ? "text-brand-red" : "text-ink"
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <a
              href={`tel:${site.phones.mainHref}`}
              className="py-4 text-[15px] font-semibold text-brand-red tnum border-b border-line/60"
            >
              {site.phones.main}
            </a>
            <div className="py-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
