export const site = {
  name: "J.M.I.T. a.s.",
  foundedYear: 1991,
  yearsInBusiness: new Date().getFullYear() - 1991,
  ico: "27846458",
  dic: "CZ27846458",
  address: {
    street: "Olomoucká 15",
    city: "Hlubočky",
    zip: "783 65",
    country: "Czech Republic",
  },
  gps: {
    lat: 49.6205239,
    lng: 17.4017724,
    label: "49°37'11.860\"N, 17°24'6.526\"E",
  },
  phones: {
    main: "+420 585 206 140-4",
    mainHref: "+420585206140",
    fax: "+420 585 206 149",
  },
  emails: {
    main: "jmit@jmit.cz",
    careers: "artnerova@jmit.cz",
  },
  url: "https://www.jmit.cz",
};

export const navigation = [
  { href: "/o-firme", key: "about" },
  { href: "/sluzby", key: "services" },
  { href: "/vozovy-park", key: "fleet" },
  { href: "/reference", key: "references" },
  { href: "/kariera", key: "careers" },
  { href: "/kontakty", key: "contacts" },
] as const;

export const serviceSlugs = [
  "velkoobjemova-preprava",
  "mezinarodni-doprava",
  "vnitrostatni-doprava",
  "spedice",
  "logistika",
  "pojisteni",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const serviceImages: Record<ServiceSlug, string> = {
  "velkoobjemova-preprava": "/assets/services/volume.jpg",
  "mezinarodni-doprava": "/assets/services/international.jpg",
  "vnitrostatni-doprava": "/assets/services/domestic.jpg",
  spedice: "/assets/services/spedice.jpg",
  logistika: "/assets/services/logistika.jpg",
  pojisteni: "/assets/services/volume.jpg",
};

export const statValues = [
  { value: 35, suffix: "" },
  { value: 100, suffix: "" },
  { value: 8.5, suffix: " M" },
  { value: 38, suffix: "" },
  { value: 24, suffix: " t" },
  { value: 150, suffix: "" },
] as const;

export const references = [
  "Mora Moravia",
  "Shell Česká Republika",
  "Bridgestone Europe",
  "Whirlpool Europe",
  "Nokian Renkaat",
  "Barum Continental",
  "Baumit",
  "Finnforest CZ",
  "Novopol",
  "MoraPLAST",
  "Foundeik",
  "Al Invest Břidličná",
  "Servis Vraník",
  "MB Czech Import Logistic",
  "Avex Steel Products",
  "AZ Flex",
] as const;

export const teamPortraits: Record<string, string> = {
  "Jaromír Musil": "/assets/team/jaromir-musil.jpg",
  "Sabina Artnerová, Ing.": "/assets/team/sabina-artnerova.jpg",
  "David Vlček, Ing.": "/assets/team/david-vlcek.jpg",
};

type Contact = { email: string; phone?: string; mobile?: string };

export const departmentContacts: Contact[][] = [
  [
    { email: "jaromir.musil@jmit.cz", phone: "+420 585 206 150" },
    { email: "musilova@jmit.cz", phone: "+420 585 206 152", mobile: "+420 602 543 699" },
    { email: "ondrej.musil@jmit.cz", phone: "+420 585 206 142", mobile: "+420 606 727 603" },
  ],
  [
    { email: "artnerova@jmit.cz", phone: "+420 585 206 147", mobile: "+420 606 725 372" },
  ],
  [
    { email: "vlcek@jmit.cz", phone: "+420 585 206 159", mobile: "+420 724 287 486" },
    { email: "ohera@jmit.cz", phone: "+420 585 206 144", mobile: "+420 602 776 541" },
    { email: "smekal@jmit.cz", phone: "+420 585 206 141", mobile: "+420 606 707 760" },
    { email: "jordan@jmit.cz", phone: "+420 585 206 157", mobile: "+420 606 725 373" },
    { email: "dispoEU@jmit.cz", phone: "+420 585 206 154", mobile: "+420 602 547 146" },
    { email: "dispoEU@jmit.cz", phone: "+420 585 206 154", mobile: "+420 602 547 146" },
    { email: "bmina@jmit.cz", phone: "+420 585 206 153", mobile: "+420 606 706 516" },
  ],
  [
    { email: "palinkova@jmit.cz", phone: "+420 585 206 153", mobile: "+420 724 133 993" },
    { email: "cecatkova@jmit.cz", phone: "+420 585 206 148" },
    { email: "pokladna@jmit.cz", phone: "+420 585 206 145", mobile: "+420 771 252 553" },
    { email: "capkova@jmit.cz", mobile: "+420 724 208 366" },
  ],
];
