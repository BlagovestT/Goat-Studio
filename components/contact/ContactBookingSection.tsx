"use client";

import { useEffect } from "react";
import { Calendar, Clock, Check } from "lucide-react";

export default function ContactBookingSection() {
  // Load Calendly script
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.setAttribute("async", "");
    head?.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (head?.contains(script)) {
        head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-[var(--color-gunmetal)] text-[var(--color-cool-white)]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title centered">Резервирайте Час Онлайн</h2>
          <p className="text-[var(--color-silver)] text-lg mt-4">
            Изберете удобно за вас време за посещение в нашето студио
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="bg-[var(--color-dark-gunmetal)] rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">
                Защо да резервирате онлайн?
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-racing-red)]/10 rounded-full text-[var(--color-racing-red)] mt-1">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Спестете време</h4>
                    <p className="text-[var(--color-silver)]">
                      Избягвайте чакането и осигурете персонално внимание в
                      избраното от вас време.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-racing-red)]/10 rounded-full text-[var(--color-racing-red)] mt-1">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Гъвкавост</h4>
                    <p className="text-[var(--color-silver)]">
                      Изберете време, което е удобно за вас, дори извън
                      работното ни време.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-racing-red)]/10 rounded-full text-[var(--color-racing-red)] mt-1">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Потвърждение</h4>
                    <p className="text-[var(--color-silver)]">
                      Получете незабавно потвърждение и напомняне за вашата
                      резервация.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 p-4 bg-[var(--color-racing-red)]/10 rounded-lg">
                <p className="text-sm text-[var(--color-silver)]">
                  <strong className="text-[var(--color-racing-red)]">
                    Забележка:
                  </strong>{" "}
                  В случай, че не намирате удобно време или имате специфични
                  изисквания, моля свържете се с нас директно по телефона или
                  имейл.
                </p>
              </div>
            </div>
          </div>

          {/* Calendly Integration */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="bg-white rounded-xl overflow-hidden h-[650px]">
              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/bgmf1234"
                style={{ minWidth: "320px", height: "650px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
