"use client";

import { useEffect, useState } from "react";

export function DrivingTruck() {
  const [phase, setPhase] = useState<"idle" | "drive" | "done">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("jmit-truck-shown")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    sessionStorage.setItem("jmit-truck-shown", "1");
    const start = window.setTimeout(() => setPhase("drive"), 350);
    const end = window.setTimeout(() => setPhase("done"), 9500);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(end);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`driving-truck pointer-events-none fixed left-0 right-0 bottom-[5vh] z-[60] ${
        phase === "drive" ? "is-driving" : ""
      }`}
    >
      <div className="driving-truck__rig">
        <TruckSvg />
      </div>
    </div>
  );
}

function TruckSvg() {
  return (
    <svg
      width="240"
      height="92"
      viewBox="0 0 240 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block drop-shadow-[0_10px_24px_rgba(10,27,46,0.35)]"
    >
      <defs>
        <linearGradient id="cab" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d8132f" />
          <stop offset="1" stopColor="#a30c24" />
        </linearGradient>
        <linearGradient id="trailer" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e9ecf2" />
        </linearGradient>
        <linearGradient id="window" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0a1b2e" />
          <stop offset="1" stopColor="#22405f" />
        </linearGradient>
      </defs>

      {/* trailer body */}
      <rect x="76" y="14" width="148" height="50" rx="3" fill="url(#trailer)" stroke="#cdd2db" />
      {/* trailer ribs (curtain side) */}
      {[88, 102, 116, 130, 144, 158, 172, 186, 200, 214].map((x) => (
        <line key={x} x1={x} y1="18" x2={x} y2="60" stroke="#d6dae3" strokeWidth="1" />
      ))}
      {/* JMIT badge */}
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
      {/* trailer underrun */}
      <rect x="76" y="64" width="148" height="3" fill="#c9ced8" />

      {/* cab */}
      <path
        d="M 8 30 Q 8 22 18 22 L 56 22 Q 66 22 70 30 L 70 64 L 8 64 Z"
        fill="url(#cab)"
        stroke="#7a0918"
      />
      {/* windshield */}
      <path
        d="M 22 30 Q 22 27 26 27 L 56 27 Q 60 27 60 30 L 60 42 L 22 42 Z"
        fill="url(#window)"
        opacity="0.92"
      />
      {/* side window */}
      <rect x="14" y="46" width="8" height="10" rx="1" fill="url(#window)" opacity="0.8" />
      {/* headlight */}
      <rect x="9" y="48" width="3" height="6" rx="1" fill="#fef9d8" />
      {/* grille hint */}
      <rect x="9" y="56" width="6" height="3" rx="0.5" fill="#5a0813" />
      {/* connector */}
      <rect x="68" y="44" width="10" height="20" fill="#1a1a1a" />

      {/* wheels — cab */}
      <Wheel cx={28} cy={70} />
      {/* wheels — trailer (tridem) */}
      <Wheel cx={120} cy={70} />
      <Wheel cx={142} cy={70} />
      <Wheel cx={196} cy={70} />

      {/* ground shadow */}
      <ellipse cx="120" cy="86" rx="110" ry="3" fill="#0a1b2e" opacity="0.18" />
    </svg>
  );
}

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="9" fill="#15171c" />
      <circle cx={cx} cy={cy} r="9" fill="none" stroke="#2a2d35" strokeWidth="1" />
      <g className="driving-truck__wheel" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <circle cx={cx} cy={cy} r="4" fill="#3a3e48" />
        <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} stroke="#1f2129" strokeWidth="1.2" />
        <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} stroke="#1f2129" strokeWidth="1.2" />
      </g>
    </g>
  );
}
