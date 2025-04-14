"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-jet-black)]/80 to-[var(--color-jet-black)]/60 z-10"></div>
        <Image
          src="/images/hero-bg.jpg"
          alt="GOAT Studio car wrapping"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center container-custom">
        <div className="animate-slide-in-top">
          <h1 className="text-[var(--color-cool-white)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Премиум
            <span className="text-[var(--color-racing-red)]">
              {" "}
              Затъмняване
            </span>{" "}
            и
            <br />
            <span className="text-[var(--color-racing-red)]">Полиране</span> на
            Автомобили
          </h1>
          <p className="text-[var(--color-cool-white)] text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Трансформирайте вашия автомобил с професионални услуги от GOAT
            Studio
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Резервирай
            </Link>
            <Link
              href="/services"
              className="btn btn-outline text-lg px-8 py-3 text-[var(--color-cool-white)] border-[var(--color-cool-white)] hover:bg-[var(--color-cool-white)]/10"
            >
              Услуги
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-[var(--color-cool-white)] flex justify-center">
            <div className="w-1 h-3 bg-[var(--color-racing-red)] rounded-full mt-2 animate-pulse-light"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
