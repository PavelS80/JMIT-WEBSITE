import Script from "next/script";

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  const host = process.env.NEXT_PUBLIC_PLAUSIBLE_HOST ?? "https://plausible.io";
  return (
    <Script
      defer
      data-domain={domain}
      src={`${host}/js/script.outbound-links.js`}
      strategy="afterInteractive"
    />
  );
}
