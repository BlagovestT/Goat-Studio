import { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesPricing from "@/components/services/ServicesPricing";

export const metadata: Metadata = {
  title: "Услуги | GOAT Studio - Премиум Облепяне и Детайлинг на Автомобили",
  description:
    "Професионални услуги за облепяне, детайлинг, керамично покритие и защитно фолио за вашия автомобил в GOAT Studio, Варна.",
  keywords:
    "облепяне на автомобили, детайлинг, керамично покритие, защитно фолио, тониране на стъкла, брандиране, цени",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServicesList />
      <ServicesPricing />
      <ServicesProcess />
    </>
  );
}
