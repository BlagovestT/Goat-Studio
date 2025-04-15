"use client";

import { motion } from "framer-motion";

export default function TintingLawHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-jet-black)]/90 to-[var(--color-jet-black)]/70 z-10"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-cool-white)]"
          >
            Законови{" "}
            <span className="text-[var(--color-racing-red)]">Изисквания</span>{" "}
            за Тониране на Стъкла
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[var(--color-silver)] mb-8"
          >
            Важна информация за легалните ограничения при тониране на
            автомобилни стъкла според българското законодателство
          </motion.p>
        </div>
      </div>
    </section>
  );
}
