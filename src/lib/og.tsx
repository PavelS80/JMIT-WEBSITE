import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png" as const;

type RouteInitial = "S" | "F" | "A" | "R" | "K" | "C" | "L";

export type OgPayload = {
  eyebrow: string;
  titleLine1: string;
  titleLine2?: string;
  description?: string;
  monogram?: RouteInitial;
};

export function renderOg(payload: OgPayload) {
  const { eyebrow, titleLine1, titleLine2, description, monogram } = payload;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0a1b2e 0%, #14283f 60%, #0a1b2e 100%)",
          color: "white",
          padding: "72px 88px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, transparent 0%, #c9a96a 30%, #c8102e 70%, transparent 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(201,169,106,0.32) 0%, transparent 70%)",
          }}
        />

        {monogram && (
          <div
            style={{
              position: "absolute",
              bottom: -120,
              right: -60,
              fontSize: 560,
              lineHeight: 1,
              fontWeight: 700,
              fontFamily: "serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.04)",
              letterSpacing: "-0.04em",
            }}
          >
            {monogram}
          </div>
        )}

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 700,
            color: "rgba(255,255,255,0.95)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 2,
              background: "linear-gradient(90deg, #c9a96a 0%, #c8102e 100%)",
            }}
          />
          J.M.I.T. · a.s.
        </div>

        <div style={{ flex: 1 }} />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 18,
            letterSpacing: 5,
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#c8102e",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 28,
              height: 1,
              background:
                "linear-gradient(90deg, #c9a96a 0%, #c8102e 100%)",
            }}
          />
          {eyebrow}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            lineHeight: 1.02,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            maxWidth: 980,
          }}
        >
          <div>{titleLine1}</div>
          {titleLine2 && (
            <div
              style={{
                color: "rgba(255,255,255,0.78)",
                fontStyle: "italic",
                fontFamily: "serif",
                marginTop: 4,
              }}
            >
              {titleLine2}
            </div>
          )}
        </div>

        {description && (
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 22,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 880,
            }}
          >
            {description}
          </div>
        )}

        <div
          style={{
            marginTop: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 18,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span>Hlubočky · CZ</span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
            <span>Since 1991</span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
            <span>ISO 9001</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 18,
              color: "white",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: "#c8102e",
                boxShadow: "0 0 0 6px rgba(200,16,46,0.25)",
              }}
            />
            jmit.cz
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
