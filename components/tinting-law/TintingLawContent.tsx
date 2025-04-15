"use client";

import React from "react";
import { Check, HelpCircle } from "lucide-react";

export default function TintingLawContent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Introduction */}
      <div className="mb-12 animate-on-scroll">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
          Какво трябва да знаете за тонирането на автомобилни стъкла
        </h2>
        <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] mb-4">
          Тонирането на автомобилните стъкла е популярен начин за подобряване на
          естетиката, комфорта и защитата на вашия автомобил. Въпреки това, в
          България съществуват строги разпоредби, които определят допустимите
          нива на тониране.
        </p>
        <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] mb-4">
          Законовите ограничения са установени в Закона за движение по пътищата
          (ЗДП) и в международни регулации, приети от България. Тези правила са
          създадени с цел осигуряване на безопасност на пътя и видимост за
          водачите.
        </p>
      </div>

      {/* Legal Text */}
      <div className="mb-12 animate-on-scroll">
        <h3 className="text-xl font-bold mb-4 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
          Извадка от Закона за движение по пътищата
        </h3>
        <div className="bg-[var(--color-gunmetal)]/10 dark:bg-[var(--color-gunmetal)] p-6 rounded-lg mb-6 border-l-4 border-[var(--color-racing-red)]">
          <p className="mb-4 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] font-bold">
            ЗАКОН ЗА ДВИЖЕНИЕ ПО ПЪТИЩАТА, ЮЛИ 2019г.
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
            <span className="font-medium">Чл. 105.</span> (Изм. – ДВ, бр. 43 от
            2002 г., в сила от 26.04.2002 г.)
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] pl-4">
            <span className="font-medium">(1)</span> (Изм. и доп. – ДВ, бр. 101
            от 2016 г., в сила от 21.01.2017 г.) Забранява се ограничаване на
            видимостта през челното, задното и през страничните стъкла на
            автомобила, осигуряващи видимостта на водача към пътя, както и
            намаляване на прозрачността им.
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] pl-4">
            <span className="font-medium">(2)</span> (Доп. – ДВ, бр. 101 от 2016
            г., в сила от 21.01.2017 г.) Ограничаване на видимостта през
            стъклата на задните странични врати на леките автомобили, както и
            намаляване на прозрачността им, се допуска само при наличие на
            огледала за виждане назад от двете страни на автомобила.
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] pl-4">
            <span className="font-medium">(3)</span> (Нова – ДВ, бр. 101 от 2016
            г., в сила от 21.01.2017 г.) Намаляване прозрачността на стъклата по
            ал. 2 се допуска само в границите на стойностите, определени в
            Правило № 43 на Икономическата комисия за Европа на Организацията на
            обединените нации.
          </p>
        </div>
        <div className="bg-[var(--color-gunmetal)]/10 dark:bg-[var(--color-gunmetal)] p-6 rounded-lg border-l-4 border-[var(--color-racing-red)]">
          <p className="mb-4 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] font-bold">
            Правило № 43 на Икономическата комисия за Европа на Организацията на
            обединените нации
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
            <span className="font-medium">
              4. Специални разпоредби, приложими към превозните средства от
              категории M и N
            </span>
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] pl-4">
            <span className="font-medium">4.1. Предни стъкла</span>
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] pl-8">
            <span className="font-medium">4.1.1.</span> Нормалната
            светлопропускливост трябва да бъде не по-малка от 70%
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] pl-4">
            <span className="font-medium">4.2.1.1.</span> Безопасните стъкла,
            през които се получава предното поле на видимост на водача,
            определено в точка 2.23.1 от настоящото правило, трябва да имат
            нормална светлопропускливост, равна на поне 70%.
          </p>
          <p className="mb-2 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)] pl-4">
            <span className="font-medium">2.23.1.</span> „Материали за безопасно
            остъкляване, необходими за предното поле на видимост на водача са
            всички стъкла, намиращи се пред равнината, която минава през точката
            R на водача и която е перпендикулярна на средната надлъжна равнина
            на превозното средство, през които водачът може да вижда пътя при
            движение с превозното средство или при извършване на маневра.
          </p>
        </div>
      </div>

      {/* Interpretation */}
      <div className="mb-12 animate-on-scroll">
        <h3 className="text-xl font-bold mb-4 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
          Какво означава това в практиката?
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-[var(--color-gunmetal)]/5 dark:bg-[var(--color-gunmetal)]/30 rounded-lg">
            <div className="mt-1">
              <Check className="text-green-500 dark:text-green-400" size={20} />
            </div>
            <div>
              <p className="font-medium text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
                Предно стъкло и предни странични стъкла:
              </p>
              <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                Трябва да имат минимум 70% светлопропускливост. Това означава,
                че тонирането на тези стъкла може да намали прозрачността с
                максимум 30% от фабричната.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[var(--color-gunmetal)]/5 dark:bg-[var(--color-gunmetal)]/30 rounded-lg">
            <div className="mt-1">
              <Check className="text-green-500 dark:text-green-400" size={20} />
            </div>
            <div>
              <p className="font-medium text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
                Задни странични стъкла:
              </p>
              <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                Могат да бъдат тонирани с по-тъмно фолио, но само ако
                автомобилът има странични огледала за обратно виждане от двете
                страни. Въпреки това, степента на тъмнина трябва да е в
                границите на стойностите, определени в Правило № 43.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[var(--color-gunmetal)]/5 dark:bg-[var(--color-gunmetal)]/30 rounded-lg">
            <div className="mt-1">
              <Check className="text-green-500 dark:text-green-400" size={20} />
            </div>
            <div>
              <p className="font-medium text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
                Задно стъкло:
              </p>
              <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                Може да бъде тонирано с по-тъмно фолио, но отново само при
                наличие на странични огледала за обратно виждане от двете
                страни.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-12 animate-on-scroll">
        <h3 className="text-xl font-bold mb-6 text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
          Често задавани въпроси
        </h3>
        <div className="space-y-6">
          <div className="p-6 bg-[var(--color-gunmetal)]/5 dark:bg-[var(--color-gunmetal)]/30 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle
                className="text-[var(--color-racing-red)]"
                size={20}
              />
              <p className="font-medium text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
                Как се измерва светлопропускливостта?
              </p>
            </div>
            <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
              Светлопропускливостта се измерва със специален уред, наречен
              трансмисионен спектрофотометър или с тинт-метър. При проверка от
              органите на реда се използват сертифицирани уреди, които могат да
              определят точния процент на светлопропускливост.
            </p>
          </div>

          <div className="p-6 bg-[var(--color-gunmetal)]/5 dark:bg-[var(--color-gunmetal)]/30 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle
                className="text-[var(--color-racing-red)]"
                size={20}
              />
              <p className="font-medium text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
                Какви са санкциите при нарушение?
              </p>
            </div>
            <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
              Нарушението на разпоредбите за тониране на стъкла може да доведе
              до глоба, а в някои случаи и до спиране от движение на автомобила
              до отстраняване на нарушението. Конкретният размер на глобата се
              определя от действащите разпоредби в момента на нарушението.
            </p>
          </div>

          <div className="p-6 bg-[var(--color-gunmetal)]/5 dark:bg-[var(--color-gunmetal)]/30 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle
                className="text-[var(--color-racing-red)]"
                size={20}
              />
              <p className="font-medium text-[var(--color-dark-gunmetal)] dark:text-[var(--color-cool-white)]">
                Има ли изключения от правилата?
              </p>
            </div>
            <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
              Специални изключения могат да се прилагат за определени служебни
              автомобили (например полицейски, дипломатически) или за лица с
              медицински показания, които изискват допълнителна защита от
              слънчевата светлина. Във всички случаи, такива изключения трябва
              да бъдат официално документирани и одобрени.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
