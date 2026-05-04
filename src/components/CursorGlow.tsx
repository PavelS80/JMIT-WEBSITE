"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let active = false;

    const onMove = (e: MouseEvent) => {
      const target = el.parentElement;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
        if (!active) {
          el.classList.add("is-active");
          active = true;
        }
      });
    };

    const onLeave = () => {
      el.classList.remove("is-active");
      active = false;
    };

    const target = el.parentElement;
    target?.addEventListener("mousemove", onMove);
    target?.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      target?.removeEventListener("mousemove", onMove);
      target?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-glow" />;
}
