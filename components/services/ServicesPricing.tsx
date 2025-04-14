"use client";

import { useState } from "react";
import { HelpCircle, Check } from "lucide-react";

// Define interfaces for type safety
interface PricingItem {
  name: string;
  price: string;
  popular: boolean;
  custom?: boolean; // Make custom optional but explicitly defined
}

interface PricingCategory {
  id: string;
  name: string;
  description: string;
  items: PricingItem[];
}

const pricingCategories: PricingCategory[] = [
  {
    id: "window-tinting",
    name: "Тониране на Стъкла",
    description:
      "Висококачествено фолио за тониране на всички стъкла на автомобила",
    items: [
      {
        name: "Задна част (задно + 2 странични)",
        price: "150лв - 250лв",
        popular: false,
      },
      { name: "Предни стъкла (2 бр.)", price: "100лв", popular: false },
      {
        name: "Челно стъкло - керамика",
        price: "120лв - 150лв",
        popular: false,
      },
      {
        name: "Челно стъкло - хамелеон",
        price: "280лв - 350лв",
        popular: true,
      },
      { name: "Пълен комплект стъкла", price: "от 350лв", popular: true },
    ],
  },
  {
    id: "headlight-restoration",
    name: "Обработка на Фарове",
    description:
      "Професионално полиране и защита на фаровете за максимална видимост",
    items: [
      { name: "Полиране на фарове", price: "70лв", popular: false },
      { name: "Фолио + Полиране на фарове", price: "150лв", popular: true },
      { name: "Тониране на стопове", price: "от 100лв", popular: false },
      { name: "Защитно фолио за фарове", price: "от 100лв", popular: false },
    ],
  },
  {
    id: "wrapping",
    name: "Облепяне и Защитно Фолио",
    description:
      "Частично или цялостно облепяне на автомобила и защита на специфични зони",
    items: [
      {
        name: "Облепяне на детайли",
        price: "по запитване",
        popular: false,
        custom: true,
      },
      {
        name: "Поставяне на защитно фолио на външни детайли",
        price: "по запитване",
        popular: false,
        custom: true,
      },
      {
        name: "Поставяне на защитно фолио за медия/навигация",
        price: "по запитване",
        popular: false,
        custom: true,
      },
      {
        name: "Цялостно облепяне на автомобил",
        price: "по запитване",
        popular: true,
        custom: true,
      },
    ],
  },
];

export default function ServicesPricing() {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id);

  return (
    <section
      id="pricing"
      className="section-padding bg-[var(--color-gunmetal)] text-[var(--color-cool-white)]"
    >
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title centered">Нашите Цени</h2>
          <p className="text-[var(--color-silver)] text-lg mt-4">
            Прозрачно ценообразуване за всички наши услуги
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-4 animate-on-scroll">
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-[var(--color-racing-red)] text-[var(--color-cool-white)]"
                  : "bg-[var(--color-dark-gunmetal)] text-[var(--color-silver)] hover:bg-[var(--color-racing-red)]/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Price Tables */}
        <div className="animate-on-scroll">
          {pricingCategories.map((category) => (
            <div
              key={category.id}
              className={`transition-opacity duration-300 ${
                activeCategory === category.id
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-[var(--color-silver)]">
                  {category.description}
                </p>
              </div>

              <div className="max-w-3xl mx-auto bg-[var(--color-dark-gunmetal)] rounded-lg overflow-hidden">
                <div className="divide-y divide-[var(--color-gunmetal)]">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-4 md:p-6 ${
                        item.popular ? "bg-[var(--color-racing-red)]/10" : ""
                      }`}
                    >
                      <div className="flex items-center">
                        {item.popular && (
                          <span className="bg-[var(--color-racing-red)] text-[var(--color-cool-white)] text-xs py-1 px-2 rounded-full mr-3">
                            Популярно
                          </span>
                        )}
                        <span className="font-medium">{item.name}</span>

                        {item.custom && (
                          <div className="ml-2 group relative">
                            <HelpCircle className="h-4 w-4 text-[var(--color-silver)] cursor-help" />
                            <div className="absolute left-0 bottom-full mb-2 w-64 bg-[var(--color-jet-black)] p-3 rounded-lg shadow-lg text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                              Цената зависи от размера и сложността на работата.
                              Свържете се с нас за безплатна консултация и
                              оферта.
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-right">
                        {item.custom ? (
                          <span className="inline-block bg-[var(--color-silver)]/20 py-1.5 px-3 rounded-full text-sm">
                            {item.price}
                          </span>
                        ) : (
                          <span className="text-[var(--color-racing-red)] font-bold">
                            {item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {category.id === "wrapping" && (
                <div className="mt-8 p-6 bg-[var(--color-dark-gunmetal)] rounded-lg text-center">
                  <h4 className="font-bold mb-4">
                    Защо цените са по запитване?
                  </h4>
                  <p className="text-[var(--color-silver)] mb-4">
                    Цената за облепяне и поставяне на защитно фолио се определя
                    индивидуално, тъй като зависи от следните фактори:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-[var(--color-gunmetal)] rounded-lg">
                      <Check className="h-6 w-6 text-[var(--color-racing-red)] mx-auto mb-2" />
                      <p>Размер и тип на автомобила</p>
                    </div>
                    <div className="p-4 bg-[var(--color-gunmetal)] rounded-lg">
                      <Check className="h-6 w-6 text-[var(--color-racing-red)] mx-auto mb-2" />
                      <p>Избран тип фолио и качество</p>
                    </div>
                    <div className="p-4 bg-[var(--color-gunmetal)] rounded-lg">
                      <Check className="h-6 w-6 text-[var(--color-racing-red)] mx-auto mb-2" />
                      <p>Сложност на детайлите</p>
                    </div>
                    <div className="p-4 bg-[var(--color-gunmetal)] rounded-lg">
                      <Check className="h-6 w-6 text-[var(--color-racing-red)] mx-auto mb-2" />
                      <p>Текущо състояние на автомобила</p>
                    </div>
                    <div className="p-4 bg-[var(--color-gunmetal)] rounded-lg">
                      <Check className="h-6 w-6 text-[var(--color-racing-red)] mx-auto mb-2" />
                      <p>Необходимост от предварителна подготовка</p>
                    </div>
                    <div className="p-4 bg-[var(--color-gunmetal)] rounded-lg">
                      <Check className="h-6 w-6 text-[var(--color-racing-red)] mx-auto mb-2" />
                      <p>Специфични изисквания за дизайн</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Call to action */}
              <div className="text-center mt-8">
                <p className="text-[var(--color-silver)] mb-4">
                  Всички цени са с включено ДДС. За повече информация или
                  персонализирана оферта, не се колебайте да се свържете с нас.
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary inline-flex items-center"
                >
                  Свържете се за консултация
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
