"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SunDim,
  Shield,
  Zap,
  FileSpreadsheet,
  Car,
  ArrowUpRight,
} from "lucide-react";

// Define the services data
const services = [
  {
    id: "window-tinting",
    icon: <SunDim className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Затъмняване на Стъкла",
    description:
      "Професионално затъмняване на всички стъкла на автомобила с висококачествени фолиа. Намалете топлината в купето, блокирайте вредните UV лъчи и подобрете поверителността с нашите премиум фолиа.",
    features: [
      "Намаляване на топлината в интериора до 60%",
      "Блокиране на 99% от вредните UV лъчи",
      "Повишена поверителност и сигурност",
      "Различни нива на затъмняване според предпочитанията",
      "Намаляване на отблясъците и подобрена видимост",
      "Спазване на законовите изисквания за видимост",
    ],
    image: "/images/image-21.jpg",
    color: "from-blue-500/20 to-purple-500/20",
    hoverColor: "group-hover:from-blue-500/40 group-hover:to-purple-500/40",
  },
  {
    id: "window-protection",
    icon: <Shield className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Защитно Фолио за Прозорци",
    description:
      "Защитете стъклата на вашия автомобил от надрасквания, счупване и UV лъчи с нашето специално защитно фолио. Осигурете допълнителна безопасност и комфорт при пътуване.",
    features: [
      "Защита от счупване на стъклата при удар",
      "Предпазва от надраскване и повреди",
      "Намалява риска от нараняване при инцидент",
      "Блокиране на вредните UV лъчи",
      "Подобрява здравината на стъклата",
      "Кристално прозрачен завършек без нарушаване на видимостта",
    ],
    image: "/images/image-44.jpg",
    color: "from-green-500/20 to-teal-500/20",
    hoverColor: "group-hover:from-green-500/40 group-hover:to-teal-500/40",
  },
  {
    id: "headlight-restoration",
    icon: <Zap className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Полиране на Фарове",
    description:
      "Възстановете яркостта и прозрачността на фаровете на вашия автомобил. Нашата услуга за полиране премахва пожълтяването, матирането и микродраскотините, подобрявайки видимостта и външния вид.",
    features: [
      "Премахване на пожълтяване и окисляване",
      "Възстановяване на оригиналната прозрачност",
      "Подобрена видимост при нощно шофиране",
      "Повишена безопасност на пътя",
      "Възможност за защитно покритие срещу бъдещо увреждане",
      "По-добър естетически вид на автомобила",
    ],
    image: "/images/image-46.jpg",
    color: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "group-hover:from-cyan-500/40 group-hover:to-blue-500/40",
  },
  {
    id: "taillight-tinting",
    icon: (
      <FileSpreadsheet className="h-12 w-12 text-[var(--color-racing-red)]" />
    ),
    title: "Тониране на Стопове",
    description:
      "Придайте спортен и елегантен вид на вашия автомобил с професионално тониране на стоповете. Използваме висококачествени фолиа, които запазват яркостта на светлините, докато създават впечатляващ визуален ефект.",
    features: [
      "Спортен и агресивен външен вид",
      "Различни нива на затъмняване според предпочитанията",
      "Прецизно изрязване според формата на стоповете",
      "Запазване на нужната видимост и яркост на светлините",
      "Устойчивост на избледняване и UV лъчи",
      "Лесно премахване без повреди по стоповете",
    ],
    image: "/images/image-45.jpg",
    color: "from-red-500/20 to-orange-500/20",
    hoverColor: "group-hover:from-red-500/40 group-hover:to-orange-500/40",
  },
  {
    id: "windshield-tinting",
    icon: <Car className="h-12 w-12 text-[var(--color-racing-red)]" />,
    title: "Челно Стъкло - Керамика & Хамелеон",
    description:
      "Специализирано фолио за челно стъкло с керамични частици или хамелеонов ефект. Намалете топлината и защитете интериора, без да компрометирате видимостта, с нашите професионални решения за челно стъкло.",
    features: [
      "Керамично фолио с максимална защита от UV лъчи",
      "Хамелеонов ефект за променящ се цвят според ъгъла",
      "Значително намаляване на топлината в купето",
      "Защита на таблото и интериора от избледняване",
      "Без нарушаване на видимостта и сигналите на електронните устройства",
      "Пълно спазване на законовите изисквания",
    ],
    image: "/images/image-38.jpg",
    color: "from-yellow-500/20 to-amber-500/20",
    hoverColor: "group-hover:from-yellow-500/40 group-hover:to-amber-500/40",
  },
];

// Benefits for all services
const benefits = [
  {
    icon: <ArrowUpRight className="h-6 w-6 text-[var(--color-racing-red)]" />,
    title: "Професионални Материали",
    description:
      "Използваме само материали от най-висок клас от водещи производители",
  },
  {
    icon: <Shield className="h-6 w-6 text-[var(--color-racing-red)]" />,
    title: "Гаранция",
    description:
      "Всички наши услуги идват с гаранция за качество и дълготрайност",
  },
  {
    icon: <Zap className="h-6 w-6 text-[var(--color-racing-red)]" />,
    title: "Бързо Обслужване",
    description:
      "Професионален екип с опит за ефективно и качествено изпълнение",
  },
];

export default function ServicesList() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="section-padding bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title centered">
            Нашите Специализирани Услуги
          </h2>
          <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] text-lg mt-4">
            Професионални решения за фолиране на стъкла и полиране на фарове
          </p>
        </div>

        {/* Services Showcase */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-6 dark:text-[var(--color-cool-white)]">
                Изберете услуга
              </h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full group transition-all duration-300 ${
                      activeService === service.id
                        ? "bg-[var(--color-racing-red)] text-[var(--color-cool-white)]"
                        : "bg-[var(--color-silver)]/10 dark:bg-[var(--color-dark-gunmetal)] hover:bg-[var(--color-racing-red)]/10"
                    } rounded-lg p-4 text-left flex items-center`}
                  >
                    <div
                      className={`mr-4 p-2.5 rounded-full ${
                        activeService === service.id
                          ? "bg-[var(--color-cool-white)]/20 text-[var(--color-cool-white)]"
                          : "bg-[var(--color-racing-red)]/10 text-[var(--color-racing-red)]"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">
                        {service.title}
                      </h4>
                      <p
                        className={`text-xs mt-1 line-clamp-1 ${
                          activeService === service.id
                            ? "text-[var(--color-cool-white)]/80"
                            : "text-[var(--color-dark-gunmetal)]/60 dark:text-[var(--color-silver)]"
                        }`}
                      >
                        {service.description.split(".")[0]}.
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`transition-opacity duration-300 ${
                  activeService === service.id
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
              >
                <div className="relative group overflow-hidden rounded-xl mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} ${service.hoverColor} transition-all duration-500 opacity-80`}
                  ></div>
                  <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 items-center">
                    <div className="h-32 w-32 bg-[var(--color-gunmetal)]/10 dark:bg-[var(--color-cool-white)]/10 rounded-full flex items-center justify-center animate-float">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 dark:text-[var(--color-cool-white)]">
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Image and Features */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3 relative rounded-xl overflow-hidden shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-jet-black)]/80 via-transparent to-transparent z-10"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={500}
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h4 className="text-[var(--color-cool-white)] font-bold text-xl mb-1">
                        Професионална Услуга
                      </h4>
                      <p className="text-[var(--color-cool-white)]/80 text-sm">
                        Доверете се на опита и професионализма на нашите
                        специалисти
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="h-full bg-[var(--color-silver)]/10 dark:bg-[var(--color-dark-gunmetal)] p-6 rounded-xl">
                      <h4 className="font-bold mb-4 dark:text-[var(--color-cool-white)]">
                        Какво включва услугата:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 min-w-5 h-5 rounded-full bg-[var(--color-racing-red)]/10 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-[var(--color-racing-red)]"></div>
                            </div>
                            <span className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-[var(--color-silver)]/20 dark:border-[var(--color-gunmetal)]">
                        <a
                          href="#pricing"
                          className="inline-flex items-center text-[var(--color-racing-red)] font-medium text-sm"
                        >
                          <span className="mr-2">Вижте цени</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33337 8H12.6667"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.66669 4L12.6667 8L8.66669 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Benefits */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-[var(--color-silver)]/10 dark:bg-[var(--color-dark-gunmetal)] p-6 rounded-xl transition-transform hover:-translate-y-2"
                    >
                      <div className="w-12 h-12 rounded-full bg-[var(--color-racing-red)]/10 flex items-center justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h5 className="text-lg font-bold mb-2 dark:text-[var(--color-cool-white)]">
                        {benefit.title}
                      </h5>
                      <p className="text-sm text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
