"use client";

import { useState } from "react";

// Gallery categories that match the services
const categories = [
  { id: "all", name: "Всички" },
  { id: "window-tinting", name: "Затъмняване на Стъкла" },
  { id: "window-protection", name: "Защитно Фолио" },
  { id: "headlight-restoration", name: "Полиране на Фарове" },
  { id: "windshield-tinting", name: "Челно Стъкло" },
];

export default function GalleryCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle category change and dispatch custom event for the gallery grid
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);

    // Dispatch custom event that GalleryGrid will listen for
    const event = new CustomEvent("gallery-filter-change", {
      detail: { category: categoryId },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)] py-8 sticky top-15 z-30 border-b border-[var(--color-silver)]/10">
      <div className="container-custom">
        <div className="flex justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-[var(--color-racing-red)] text-[var(--color-cool-white)]"
                  : "bg-[var(--color-silver)]/10 dark:bg-[var(--color-dark-gunmetal)] text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] hover:bg-[var(--color-racing-red)]/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
