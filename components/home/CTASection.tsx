"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 bg-[var(--color-racing-red)] text-[var(--color-cool-white)]">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-20 w-64 h-64 bg-[var(--color-dark-red)] rounded-full opacity-30" />
        <div className="absolute left-10 bottom-10 w-40 h-40 bg-[var(--color-dark-red)] rounded-full opacity-20" />
        <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-[var(--color-dark-red)] rounded-full opacity-25" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готови ли сте да трансформирате вашия автомобил?
            </h2>
            <p className="text-lg opacity-90 max-w-xl">
              Свържете се с нас днес за безплатна консултация и оферта. Нашият
              екип ще ви помогне да изберете най-подходящото решение за вашия
              автомобил.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn btn-outline border-white text-[var(--color-cool-white)] hover:bg-white hover:text-[var(--color-racing-red)] px-6 py-3 text-lg"
            >
              Свържете се с нас
            </Link>

            <Link
              href="/services"
              className="btn bg-[var(--color-cool-white)] text-[var(--color-racing-red)] hover:bg-[var(--color-off-white)] px-6 py-3 text-lg"
            >
              Разгледайте услугите
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
