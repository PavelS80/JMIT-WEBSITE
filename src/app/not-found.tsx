import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="cs">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1b2e",
          color: "white",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 560, textAlign: "center" }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: 44,
              lineHeight: 1.05,
              margin: "16px 0 0",
              fontWeight: 600,
            }}
          >
            Page not found
          </h1>
          <p
            style={{
              marginTop: 16,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
            }}
          >
            The address doesn&apos;t exist or has been re-routed.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: 28,
              padding: "12px 20px",
              borderRadius: 12,
              background: "#c8102e",
              color: "white",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Back home →
          </Link>
        </div>
      </body>
    </html>
  );
}
