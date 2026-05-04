import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function Coverage() {
  const t = useTranslations("coverage");
  const items = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          <div className="lg:col-span-5">
            <p className="eyebrow text-brand-red">{t("eyebrow")}</p>
            <h2 className="mt-4 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight">
              {t("titleLine1")}
              <br />
              <span className="serif text-white/80">{t("titleLine2")}</span>
            </h2>
            <p className="mt-6 text-[16px] text-white/70 leading-relaxed max-w-md">
              {t("body")}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-soft border border-white/10">
              <EuropeMap aria={t("mapAria")} />
            </div>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3">
              {items.map((i) => (
                <li
                  key={i}
                  data-delay={String((i % 4) + 1)}
                  className="border-t border-white/15 pt-3 reveal"
                >
                  <div className="text-[14px] font-semibold text-white">
                    {t(`items.${i}.country`)}
                  </div>
                  <div className="text-[12px] text-white/55">
                    {t(`items.${i}.note`)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

type Destination = {
  id: string;
  label: string;
  x: number;
  y: number;
  curve: number;
  dashed?: boolean;
  anchor?: "start" | "middle" | "end";
};

const HUB = { x: 465, y: 330 };

const destinations: Destination[] = [
  { id: "de", label: "DE", x: 360, y: 268, curve: -28 },
  { id: "bnl", label: "BNL", x: 305, y: 248, curve: -36, anchor: "end" },
  { id: "uk", label: "UK", x: 230, y: 215, curve: -60, dashed: true, anchor: "end" },
  { id: "scn", label: "SCN", x: 425, y: 130, curve: 30, dashed: true },
  { id: "hu", label: "HU", x: 510, y: 380, curve: 22, anchor: "start" },
  { id: "ro", label: "RO", x: 595, y: 365, curve: 36, anchor: "start" },
  { id: "it", label: "IT", x: 405, y: 470, curve: -34, dashed: true },
];

function bezierPath(x: number, y: number, curve: number) {
  const mx = (HUB.x + x) / 2;
  const my = (HUB.y + y) / 2;
  const dx = x - HUB.x;
  const dy = y - HUB.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const cx = mx + nx * curve;
  const cy = my + ny * curve;
  return `M ${HUB.x} ${HUB.y} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x} ${y}`;
}

function EuropeMap({ aria }: { aria: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      role="img"
      aria-label={aria}
    >
      <defs>
        <radialGradient id="hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8102e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="landglow" cx="58%" cy="55%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c8102e" stopOpacity="0" />
          <stop offset="35%" stopColor="#c8102e" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#c9a96a" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Soft Europe shape — single organic mass */}
      <g>
        <path
          d="M170 215
             C 195 175, 250 160, 290 175
             C 305 145, 360 130, 405 150
             L 430 100
             C 470 90, 510 110, 520 150
             L 600 150
             C 660 160, 720 200, 735 270
             C 745 330, 700 360, 650 365
             L 610 395
             C 600 445, 560 510, 510 525
             L 460 510
             C 425 525, 385 510, 365 470
             L 320 460
             C 270 445, 230 425, 210 395
             L 175 380
             C 140 360, 125 320, 145 285
             Z"
          fill="url(#landglow)"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.8"
        />
        {/* British Isles */}
        <path
          d="M225 195
             C 250 180, 270 195, 268 220
             C 270 245, 250 265, 230 260
             C 215 250, 210 220, 225 195 Z"
          fill="url(#landglow)"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.8"
        />
        {/* Italian peninsula */}
        <path
          d="M395 415
             C 420 415, 435 445, 430 480
             C 425 510, 410 525, 395 520
             C 388 495, 385 455, 395 415 Z"
          fill="url(#landglow)"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.8"
        />
        {/* Iberia */}
        <path
          d="M165 360
             C 195 350, 230 360, 245 390
             C 250 425, 220 450, 185 445
             C 155 430, 145 395, 165 360 Z"
          fill="url(#landglow)"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.8"
        />
        {/* Scandinavia */}
        <path
          d="M395 95
             C 425 75, 465 75, 485 110
             C 495 150, 470 195, 440 200
             C 420 175, 405 150, 395 120 Z"
          fill="url(#landglow)"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="0.8"
        />
      </g>

      {/* Latitude rings centered on hub */}
      <g
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.6"
        strokeDasharray="2 4"
      >
        <circle cx={HUB.x} cy={HUB.y} r="80" />
        <circle cx={HUB.x} cy={HUB.y} r="160" />
        <circle cx={HUB.x} cy={HUB.y} r="240" />
      </g>

      {/* Routes */}
      <g fill="none" strokeLinecap="round">
        {destinations.map((d) => {
          const path = bezierPath(d.x, d.y, d.curve);
          return (
            <g key={d.id}>
              <path
                d={path}
                stroke="url(#route)"
                strokeWidth="1.6"
                opacity="0.85"
                strokeDasharray={d.dashed ? "3 4" : undefined}
              />
              <circle r="3" fill="#c9a96a">
                <animateMotion
                  dur={`${4 + (d.id.charCodeAt(0) % 4) * 0.6}s`}
                  repeatCount="indefinite"
                  path={path}
                  rotate="auto"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${4 + (d.id.charCodeAt(0) % 4) * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </g>

      {/* Destination markers + labels */}
      <g>
        {destinations.map((d) => (
          <g key={`m-${d.id}`}>
            <circle
              cx={d.x}
              cy={d.y}
              r="5"
              fill="#0a1b2e"
              stroke="#c9a96a"
              strokeWidth="1.6"
            />
            <circle cx={d.x} cy={d.y} r="2.2" fill="#c9a96a" />
            <text
              x={d.x + (d.anchor === "end" ? -10 : d.anchor === "middle" ? 0 : 10)}
              y={d.y - 10}
              fill="rgba(255,255,255,0.85)"
              fontSize="11"
              fontWeight="700"
              letterSpacing="2"
              textAnchor={d.anchor ?? "start"}
            >
              {d.label}
            </text>
          </g>
        ))}
      </g>

      {/* Hub */}
      <g>
        <circle cx={HUB.x} cy={HUB.y} r="56" fill="url(#hub)" />
        <circle cx={HUB.x} cy={HUB.y} r="6" fill="#c8102e" />
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r="11"
          fill="none"
          stroke="#c8102e"
          strokeOpacity="0.55"
          strokeWidth="1.4"
        >
          <animate
            attributeName="r"
            values="11;26;11"
            dur="2.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.55;0;0.55"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x={HUB.x + 14}
          y={HUB.y - 10}
          fill="#fff"
          fontSize="11"
          fontWeight="700"
          letterSpacing="2"
        >
          HLUBOČKY · CZ
        </text>
        <text
          x={HUB.x + 14}
          y={HUB.y + 4}
          fill="rgba(255,255,255,0.55)"
          fontSize="9"
          letterSpacing="1.5"
        >
          49.6° N · 17.4° E
        </text>
      </g>

      {/* Compass */}
      <g transform="translate(700 510)" opacity="0.5">
        <circle r="22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <path d="M0 -18 L4 0 L0 18 L-4 0 Z" fill="rgba(255,255,255,0.7)" />
        <text
          x="0"
          y="-26"
          fill="rgba(255,255,255,0.8)"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          N
        </text>
      </g>
    </svg>
  );
}
