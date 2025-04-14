import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
// import ContactBookingSection from "@/components/contact/ContactBookingSection";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Контакти | GOAT Studio - Премиум Облепяне и Детайлинг на Автомобили",
  description:
    "Свържете се с нас за запитвания, консултации или резервирайте час за услугите ни онлайн. Намерете нашите контакти, работно време и местоположение.",
  keywords:
    "контакти, резервация, облепяне на стъкла, полиране на фарове, запитвания, Варна",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <div className="section-padding bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactFormSection />
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* <ContactBookingSection /> */}
    </>
  );
}
