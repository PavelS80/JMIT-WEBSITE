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
                <li key={i} className="border-t border-white/15 pt-3">
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
          <stop offset="0%" stopColor="#c8102e" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="0.7"
      >
        <path d="M120 380 L155 350 L195 360 L220 405 L210 455 L160 470 L130 445 Z" />
        <path d="M225 305 L290 295 L330 320 L335 380 L300 420 L240 410 L220 360 Z" />
        <path d="M210 195 L255 180 L275 210 L260 260 L225 270 L200 240 Z" />
        <path d="M165 220 L195 215 L200 250 L170 260 Z" />
        <path d="M310 270 L355 265 L370 300 L350 320 L315 315 Z" />
        <path d="M345 245 L420 240 L445 295 L430 345 L380 350 L355 320 L350 285 Z" />
        <path d="M390 90 L470 80 L495 175 L460 215 L420 220 L395 175 Z" />
        <path d="M395 215 L425 215 L425 240 L400 245 Z" />
        <path d="M385 360 L420 360 L455 410 L470 470 L445 510 L405 470 L395 410 Z" />
        <path d="M430 295 L490 290 L515 320 L495 345 L445 350 Z" />
        <path d="M445 245 L530 240 L555 290 L515 310 L455 295 Z" />
        <path d="M485 345 L560 340 L590 395 L545 435 L495 415 Z" />
        <path d="M555 320 L630 315 L660 365 L620 395 L580 380 Z" />
        <path d="M540 460 L590 450 L605 495 L575 525 L545 505 Z" />
        <path d="M510 195 L580 195 L605 240 L555 250 L515 235 Z" />
        <path d="M610 170 L720 175 L740 270 L645 295 L605 250 Z" />
        <path d="M600 295 L700 295 L715 345 L640 360 Z" />
        <path d="M620 460 L720 460 L735 510 L660 525 Z" />
      </g>

      <g>
        <circle cx="465" cy="320" r="50" fill="url(#hub)" />
        <circle cx="465" cy="320" r="6" fill="#c8102e" />
        <circle
          cx="465"
          cy="320"
          r="11"
          fill="none"
          stroke="#c8102e"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        >
          <animate
            attributeName="r"
            values="11;22;11"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.5;0;0.5"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="475"
          y="315"
          fill="#fff"
          fontSize="11"
          fontWeight="600"
          letterSpacing="1"
        >
          HLUBOČKY · CZ
        </text>
      </g>

      <g
        stroke="#c8102e"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      >
        <path d="M465 320 L400 290" />
        <path d="M465 320 L340 295" />
        <path d="M465 320 L255 215" strokeDasharray="3 3" />
        <path d="M465 320 L430 130" strokeDasharray="3 3" />
        <path d="M465 320 L520 380" />
        <path d="M465 320 L590 350" />
        <path d="M465 320 L425 440" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}
