import { Metadata } from "next";
import TintingLawHero from "@/components/tinting-law/TintingLawHero";
import TintingLawContent from "@/components/tinting-law/TintingLawContent";
import TintingLawDisclaimer from "@/components/tinting-law/TintingLawDisclaimer";

export const metadata: Metadata = {
  title: "Законови изисквания за тониране на стъкла | GOAT Studio",
  description:
    "Информация за законовите изисквания при тониране на автомобилни стъкла в България, според Закона за движение по пътищата и Правило № 43 на ООН.",
  keywords:
    "тониране, стъкла, закон, автомобил, ЗДП, светлопропускливост, фолио, GOAT Studio",
  openGraph: {
    title: "Законови изисквания за тониране на стъкла | GOAT Studio",
    description:
      "Информация за законовите изисквания при тониране на автомобилни стъкла в България.",
    url: "https://goatstudio.bg/legal/window-tinting",
    siteName: "GOAT Studio",
    locale: "bg_BG",
    type: "website",
  },
};

export default function WindowTintingLawPage() {
  return (
    <>
      <TintingLawHero />

      <section className="section-padding bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)]">
        <div className="container-custom">
          <TintingLawContent />
        </div>
      </section>

      <TintingLawDisclaimer />
    </>
  );
}
