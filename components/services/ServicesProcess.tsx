"use client";

import {
  PhoneCall,
  ClipboardCheck,
  Wrench,
  Car,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    icon: <PhoneCall className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Консултация",
    description:
      "Свържете се с нас за безплатна консултация и обсъждане на вашите нужди и предпочитания. Можете да се обадите, да ни пишете или да посетите нашето студио за разговор на живо.",
  },
  {
    icon: (
      <ClipboardCheck className="h-12 w-12 text-[var(--color-racing-red)]" />
    ),
    title: "Оценка и Оферта",
    description:
      "След като разберем вашите нужди, ще направим детайлна оценка на автомобила и ще ви предоставим прозрачна оферта с включени всички услуги и материали.",
  },
  {
    icon: <Wrench className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Изпълнение",
    description:
      "След одобрение на офертата, ние изпълняваме услугата с внимание към всеки детайл, използвайки само висококачествени материали и професионални техники.",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Финална Проверка",
    description:
      "Преди да получите автомобила си обратно, правим финална проверка на качеството, за да се уверим, че всичко е изпълнено перфектно и отговаря на нашите високи стандарти.",
  },
  {
    icon: <Car className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Предаване и Гаранция",
    description:
      "Предаваме ви автомобила в договореното време, заедно с подробни инструкции за поддръжка и информация за гаранционните условия за извършените услуги.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="section-padding bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title centered">Нашият Работен Процес</h2>
          <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] text-lg mt-4">
            Как работим, за да ви осигурим перфектни резултати
          </p>
        </div>

        {/* Process steps */}
        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-silver)]/20 -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-0">
            {processSteps.map((step, index) => (
              <div key={index} className="animate-on-scroll">
                <div
                  className={`flex flex-col items-center md:items-start md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } gap-8 md:gap-12`}
                >
                  {/* Icon with background */}
                  <div className="relative md:w-1/2 flex justify-center md:justify-end">
                    <div className="w-16 h-16 bg-[var(--color-gunmetal)] dark:bg-[var(--color-dark-gunmetal)] rounded-full flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--color-racing-red)] text-[var(--color-cool-white)] rounded-full flex items-center justify-center text-xs font-bold z-20">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality guarantee */}
        <div className="mt-24 bg-[var(--color-silver)]/10 dark:bg-[var(--color-dark-gunmetal)] p-8 rounded-lg animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="p-4 bg-[var(--color-racing-red)]/10 rounded-full">
                <CheckCircle className="h-16 w-16 text-[var(--color-racing-red)]" />
              </div>
            </div>

            <div className="md:w-3/4 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Нашата Гаранция за Качество
              </h3>
              <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] mb-4">
                В GOAT Studio се гордеем с високото качество на нашата работа.
                Затова предлагаме гаранция за дадени услуги. Ако не сте доволни
                от резултата или възникне проблем в рамките на гаранционния
                период, ние ще коригираме проблема безплатно.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="py-1 px-4 bg-[var(--color-racing-red)]/10 dark:bg-[var(--color-dark-gunmetal)] rounded-full text-sm">
                  <p>До 10 години гаранция за фолиа</p>
                </div>
                <div className="py-1 px-4 bg-[var(--color-racing-red)]/10 dark:bg-[var(--color-dark-gunmetal)] rounded-full text-sm">
                  <p>Сертифицирани техники</p>
                </div>
                <div className="py-1 px-4 bg-[var(--color-racing-red)]/10 dark:bg-[var(--color-dark-gunmetal)] rounded-full text-sm">
                  <p>Професионални материали</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
