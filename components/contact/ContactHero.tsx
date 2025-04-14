"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-jet-black)]/90 to-[var(--color-jet-black)]/70 z-10"></div>
        <Image
          src="/images/contact-hero.jpg"
          alt="GOAT Studio контакти"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-top text-[var(--color-cool-white)]">
            Контакти и{" "}
            <span className="text-[var(--color-racing-red)]">Резервации</span>
          </h1>

          <p
            className="text-xl text-[var(--color-silver)] mb-8 animate-slide-in-top"
            style={{ animationDelay: "0.1s" }}
          >
            Свържете се с нас или резервирайте час онлайн
          </p>
        </div>
      </div>
    </section>
  );
}
