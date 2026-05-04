import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { StatBar } from "@/components/sections/StatBar";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { WhyJMIT } from "@/components/sections/WhyJMIT";
import { Coverage } from "@/components/sections/Coverage";
import { RouteTicker } from "@/components/sections/RouteTicker";
import { FleetTeaser } from "@/components/sections/FleetTeaser";
import { References } from "@/components/sections/References";
import { CareerCTA } from "@/components/sections/CareerCTA";
import { ContactCTA } from "@/components/sections/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <StatBar />
      <Intro />
      <Services />
      <WhyJMIT />
      <Coverage />
      <RouteTicker />
      <FleetTeaser />
      <References />
      <CareerCTA />
      <ContactCTA />
    </>
  );
}
