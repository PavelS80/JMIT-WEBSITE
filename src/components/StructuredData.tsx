import { site } from "@/lib/site";

const data = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${site.url}/#org`,
  name: site.name,
  legalName: "J.M.I.T. a.s.",
  url: site.url,
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/opengraph-image`,
  email: site.emails.main,
  telephone: site.phones.main,
  faxNumber: site.phones.fax,
  foundingDate: String(site.foundedYear),
  vatID: site.dic,
  taxID: site.ico,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.gps.lat,
    longitude: site.gps.lng,
  },
  areaServed: [
    { "@type": "Country", name: "Czech Republic" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Poland" },
    { "@type": "Country", name: "Slovakia" },
    { "@type": "Country", name: "Hungary" },
    { "@type": "Country", name: "Italy" },
    { "@type": "Country", name: "Romania" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "Benelux" },
    { "@type": "Place", name: "Scandinavia" },
  ],
  knowsAbout: [
    "International freight forwarding",
    "Mega-trailer transport",
    "FTL/LTL logistics",
    "Customs clearance",
    "ADR transport",
  ],
  hasCredential: "ISO 9001",
  sameAs: [],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
