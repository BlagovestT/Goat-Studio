"use client";

import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Shield,
  SunDim,
  CreditCard,
  Sunset,
  CarFront,
} from "lucide-react";

const services = [
  {
    icon: <Palette className="h-10 w-10 text-[var(--color-racing-red)]" />,
    title: "Облепяне на Автомобили",
    description:
      "Цялостно и частично облепяне с професионални фолиа в различни цветове и текстури.",
    link: "/services",
  },
  {
    icon: <Shield className="h-10 w-10 text-[var(--color-racing-red)]" />,
    title: "Защитно Фолио за Боя",
    description:
      "Защитете лаковото покритие на вашия автомобил от надрасквания и удари.",
    link: "/services",
  },
  {
    icon: <Sunset className="h-10 w-10 text-[var(--color-racing-red)]" />,
    title: "Защитното фолио за челно стъкло",
    description:
      "Защитното фолио за челно стъкло и панорамен покрив предпазва от драскотини, удари от камъчета и вредни UV лъчи.",
    link: "/services",
  },
  {
    icon: <SunDim className="h-10 w-10 text-[var(--color-racing-red)]" />,
    title: "Тониране на Стъкла",
    description:
      "Намалете топлината и UV лъчите с висококачествено фолио за прозорци.",
    link: "/services",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-[var(--color-racing-red)]" />,
    title: "Брандиране",
    description:
      "Фирмено брандиране на превозни средства с персонализирана визия.",
    link: "/services",
  },
  {
    icon: <CarFront className="h-10 w-10 text-[var(--color-racing-red)]" />,
    title: "Полиране на Фарове",
    description:
      "Полирането на фарове възстановява прозрачността им, премахва пожълтяване и надрасквания, подобрявайки светлината и външния вид на автомобила. .",
    link: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title centered">Нашите Услуги</h2>
          <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] text-lg mt-4">
            Професионални решения за вашия автомобил
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] mb-4">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="flex items-center text-[var(--color-racing-red)] font-medium hover:underline"
              >
                Научете повече <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link
            href="/services"
            className="btn btn-primary inline-flex items-center px-6 py-3"
          >
            Всички Услуги <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
