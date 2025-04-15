"use client";

import { Info } from "lucide-react";

export default function TintingLawDisclaimer() {
  return (
    <section className="py-6 bg-[var(--color-gunmetal)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Info className="text-[var(--color-cool-white)]" size={20} />
          </div>
          <p className="text-sm text-[var(--color-silver)]">
            <span className="font-medium">Забележка:</span> Информацията,
            предоставена на тази страница, е с информативна цел и отразява
            законодателството към момента на създаване на страницата. За
            най-актуална информация, моля, консултирайте се с официалните
            документи или с компетентните органи. GOAT Studio не носи
            отговорност за действия, предприети въз основа само на тази
            информация.
          </p>
        </div>
      </div>
    </section>
  );
}
