"use client";

export default function ServiceHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-jet-black)]/90 to-[var(--color-jet-black)]/70 z-10"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-top text-[var(--color-cool-white)]">
            Нашите{" "}
            <span className="text-[var(--color-racing-red)]">Услуги</span>
          </h1>

          <p
            className="text-xl text-[var(--color-silver)] mb-8 animate-slide-in-top"
            style={{ animationDelay: "0.1s" }}
          >
            Професионални решения за трансформиране и защита на вашия автомобил
          </p>

          <div
            className="flex flex-wrap justify-center gap-3 animate-slide-in-top"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="px-4 py-2 bg-[var(--color-dark-gunmetal)]/80 rounded-full text-sm text-[var(--color-cool-white)]">
              Винилово облепяне
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-gunmetal)]/80 rounded-full text-sm text-[var(--color-cool-white)]">
              Защитно фолио
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-gunmetal)]/80 rounded-full text-sm text-[var(--color-cool-white)]">
              Керамично покритие
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-gunmetal)]/80 rounded-full text-sm text-[var(--color-cool-white)]">
              Тониране на стъкла
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-gunmetal)]/80 rounded-full text-sm text-[var(--color-cool-white)]">
              Полиране на фарове
            </span>
            <span className="px-4 py-2 bg-[var(--color-dark-gunmetal)]/80 rounded-full text-sm text-[var(--color-cool-white)]">
              Детайлинг
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
