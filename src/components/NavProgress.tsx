"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Phase = "idle" | "loading" | "done";

export function NavProgress() {
  const pathname = usePathname();
  const prev = useRef(pathname);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (prev.current !== pathname) {
      prev.current = pathname;
      setPhase("done");
      const id = window.setTimeout(() => setPhase("idle"), 450);
      return () => window.clearTimeout(id);
    }
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
        return;
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href) return;
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      )
        return;
      const url = new URL(a.href);
      if (url.pathname === window.location.pathname) return;
      setPhase("loading");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <div className={`nav-progress nav-progress--${phase}`} aria-hidden />;
}
