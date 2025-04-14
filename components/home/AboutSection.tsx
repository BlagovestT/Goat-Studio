"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Award, Atom, Settings, Zap } from "lucide-react";

export default function AboutSection() {
  // Highlight features instead of stats
  const features = [
    {
      icon: <Award className="h-8 w-8 text-[var(--color-racing-red)]" />,
      title: "Премиум Качество",
      description: "Използваме само материали от водещи световни производители",
    },
    {
      icon: <Atom className="h-8 w-8 text-[var(--color-racing-red)]" />,
      title: "Иновативни Технологии",
      description: "Прилагаме най-съвременните техники и материали",
    },
    {
      icon: <Settings className="h-8 w-8 text-[var(--color-racing-red)]" />,
      title: "Майсторска Прецизност",
      description: "Внимание към всеки детайл и перфектно изпълнение",
    },
    {
      icon: <Zap className="h-8 w-8 text-[var(--color-racing-red)]" />,
      title: "Бързина на Изпълнение",
      description: "Максимална ефективност без компромиси с качеството",
    },
  ];

  // Bullet points
  const bulletPoints = [
    "Сертифицирани специалисти с дългогодишен опит",
    "Премиум материали от водещи производители",
    "Съвременно оборудване и технологии",
    "Гаранция за дадени услуги",
    "Безплатна консултация за избор на подходящи решения",
  ];

  return (
    <div className="relative">
      {/* Main content section */}
      <section className="section-padding bg-[var(--color-gunmetal)] text-[var(--color-cool-white)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side with feature cards */}
            <div className="animate-on-scroll">
              <div className="relative rounded-lg overflow-hidden mb-10">
                <Image
                  src="/images/image-32.jpg"
                  alt="GOAT Studio Team"
                  width={600}
                  height={0}
                  className="h-100 object-cover"
                />

                {/* Experience badge */}
                <div className="absolute -bottom-5 -right-5 bg-[var(--color-racing-red)] text-[var(--color-cool-white)] rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold">
                  <span className="text-2xl">2+</span>
                  <span className="text-xs">Години</span>
                </div>
              </div>

              {/* Features grid - cooler than stats counters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[var(--color-dark-gunmetal)] p-5 rounded-lg transition-transform hover:translate-y-[-5px] hover:shadow-lg"
                  >
                    <div className="mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-[var(--color-silver)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content side */}
            <div className="animate-on-scroll">
              <h2 className="section-title">GOAT Studio</h2>
              <p className="text-[var(--color-silver)] text-lg mb-6">
                Професионално полиране и облепяне на автомобили
              </p>

              <p className="mb-6">
                В GOAT Studio се специализираме в премиум услуги за затъмняване,
                облепяне на автомобили и полиране на фарове и стопове. С години
                опит и страст към съвършенството, ние превръщаме обикновените
                автомобили в изключителни шедьоври.
              </p>

              <p className="mb-8">
                Нашият екип използва само висококачествени материали и
                най-съвременни техники, за да гарантира перфектен резултат при
                всеки проект. Независимо дали искате пълна трансформация на
                вашия автомобил или просто малка промяна, ние сме тук, за да
                превърнем вашата визия в реалност.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-8">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-[var(--color-racing-red)] mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="btn btn-primary inline-flex items-center px-6 py-3"
              >
                Услуги <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Slant section - only visible on larger screens */}
      <div
        className="hidden lg:block bg-[var(--color-gunmetal)] h-32"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)",
          marginTop: "-1px",
        }}
      />
    </div>
  );
}
