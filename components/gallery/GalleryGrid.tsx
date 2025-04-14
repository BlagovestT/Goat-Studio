"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Define types for gallery items
interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  description: string;
}

// Define type for category translations
interface CategoryTranslations {
  [key: string]: string;
}

// Gallery items with proper image references
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-26.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "2",
    title: "Volkswagen Touran - Полиране на фарове",
    category: "headlight-restoration",
    src: "/images/image-43.jpg",
    alt: "Volkswagen Touran - Полиране на фарове",
    description: "Полиране на фаровете за възстановяване на оригиналния блясък",
  },
  {
    id: "3",
    title: "Audi А4 - Фолиране на задните прозорци",
    category: "window-tinting",
    src: "/images/image-9.jpg",
    alt: "Audi А4 - Фолиране на задните прозорци",
    description:
      "Цялостно фолиране на задните прозорци с висококачествено фолио",
  },
  {
    id: "4",
    title: "BMW X3 - Затъмняване на задните прозорци",
    category: "window-tinting",
    src: "/images/image-17.jpg",
    alt: "BMW X3 - Затъмняване на задните прозорци",
    description:
      "Професионално затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "5",
    title: "BMW F32 - Хамелионово фолио",
    category: "windshield-tinting",
    src: "/images/image-36.jpg",
    alt: "BMW F32 - Хамелионово фолио",
    description:
      "Специално фолио с променящи се цветове според ъгъла на гледане",
  },
  {
    id: "6",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-21.jpg",
    alt: "BMW M3 - Смяна на цвета в сатенено синьо",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "7",
    title: "BMW F32 - Хамелионово фолио",
    category: "windshield-tinting",
    src: "/images/image-38.jpg",
    alt: "BMW F32 - Хамелионово фолио",
    description:
      "Специално фолио с променящи се цветове според ъгъла на гледане",
  },
  {
    id: "8",
    title: "Subaru Forester - Затъмняване на задните стъкла",
    category: "window-tinting",
    src: "/images/image-5.jpg",
    alt: "Subaru Forester - Затъмняване на задните стъкла",
    description:
      "Професионално затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "9",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-29.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "10",
    title: "Audi A4 - Тониране на всички стъкла",
    category: "window-tinting",
    src: "/images/image-10.jpg",
    alt: "Audi A4 - Тониране на всички стъкла",
    description:
      "Професионално тониране на всички стъкла за подобрен комфорт и конфиденциалност",
  },
  {
    id: "11",
    title: "BMW F32 - Хамелионово фолио",
    category: "windshield-tinting",
    src: "/images/image-40.jpg",
    alt: "BMW F32 - Хамелионово фолио",
    description:
      "Специално фолио с променящи се цветове според ъгъла на гледане",
  },
  {
    id: "12",
    title: "Volkswagen Tourag - Полиране на фарове",
    category: "headlight-restoration",
    src: "/images/image-14.jpg",
    alt: "Volkswagen Tourag - Полиране на фарове",
    description: "Полиране на фаровете за възстановяване на оригиналния блясък",
  },
  {
    id: "13",
    title: "Subaru Forester - Затъмняване на задните стъкла",
    category: "window-tinting",
    src: "/images/image-3.jpg",
    alt: "Subaru Forester - Затъмняване на задните стъкла",
    description:
      "Професионално затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "14",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-25.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "15",
    title: "Subaru Forester - Затъмняване на задните стъкла",
    category: "window-tinting",
    src: "/images/image-8.jpg",
    alt: "Subaru Forester - Затъмняване на задните стъкла",
    description:
      "Професионално затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "16",
    title: "Subaru Tribeca - Защитно фолио",
    category: "window-protection",
    src: "/images/image-42.jpg",
    alt: "Subaru Tribeca - Защитно фолио",
    description: "Защитно фолио за защита на стъклата от надрасквания",
  },
  {
    id: "17",
    title: "Kia Stinger - Затъмняване на задните стъкла",
    category: "window-tinting",
    src: "/images/image-16.jpg",
    alt: "Kia Stinger - Затъмняване на задните стъкла",
    description: "Затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "18",
    title: "Subaru Forester - Затъмняване на задните стъкла",
    category: "window-tinting",
    src: "/images/image-4.jpg",
    alt: "Subaru Forester - Затъмняване на задните стъкла",
    description:
      "Професионално затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "19",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-23.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "21",
    title: "Mercedes E - Полиране на фарове",
    category: "headlight-restoration",
    src: "/images/image-20.jpg",
    alt: "Mercedes E - Полиране на фарове",
    description: "Полиране на фаровете за възстановяване на оригиналния блясък",
  },
  {
    id: "22",
    title: "Kia Stinger - Затъмняване на задните стъкла",
    category: "window-tinting",
    src: "/images/image-15.jpg",
    alt: "Kia Stinger - Затъмняване на задните стъкла",
    description: "Затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "23",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-27.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "24",
    title: "Subaru Forester - Затъмняване на задните стъкла",
    category: "window-tinting",
    src: "/images/image-2.jpg",
    alt: "Subaru Forester - Затъмняване на задните стъкла",
    description:
      "Професионално затъмняване на задните стъкла за подобрена конфиденциалност",
  },
  {
    id: "25",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-28.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "26",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-22.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "27",
    title: "BMW M2 - Затъмняване на стъкла",
    category: "window-tinting",
    src: "/images/image-24.jpg",
    alt: "BMW M2 - Затъмняване на стъкла",
    description: "Цялостно затъмняване на стъклaта за максимална поверителност",
  },
  {
    id: "28",
    title: "BMW F32 - Хамелионово фолио",
    category: "windshield-tinting",
    src: "/images/image-37.jpg",
    alt: "BMW F32 - Хамелионово фолио",
    description:
      "Специално фолио с променящи се цветове според ъгъла на гледане",
  },
  {
    id: "29",
    title: "BMW F32 - Хамелионово фолио",
    category: "windshield-tinting",
    src: "/images/image-41.jpg",
    alt: "BMW F32 - Хамелионово фолио",
    description:
      "Специално фолио с променящи се цветове според ъгъла на гледане",
  },
];

// Category names
const categoryTranslations: CategoryTranslations = {
  all: "Всички",
  "window-tinting": "Затъмняване на Стъкла",
  "window-protection": "Защитно Фолио",
  "headlight-restoration": "Полиране на Фарове",
  "taillight-tinting": "Тониране на Стопове",
  "windshield-tinting": "Челно Стъкло",
};

export default function GalleryGrid() {
  const [filteredItems, setFilteredItems] =
    useState<GalleryItem[]>(galleryItems);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  // Initialize loading state
  useEffect(() => {
    const initialLoading: Record<string, boolean> = {};
    galleryItems.forEach((img) => {
      initialLoading[img.id] = true;
    });
    setLoading(initialLoading);
  }, []);

  // Listen for category filter changes
  useEffect(() => {
    const handleFilter = (event: Event) => {
      const customEvent = event as CustomEvent;
      const categoryId = customEvent.detail.category;

      if (categoryId === "all") {
        setFilteredItems(galleryItems);
      } else {
        setFilteredItems(
          galleryItems.filter((item) => item.category === categoryId)
        );
      }
    };

    window.addEventListener("gallery-filter-change", handleFilter);

    return () => {
      window.removeEventListener("gallery-filter-change", handleFilter);
    };
  }, []);

  // Handle image load
  const handleImageLoad = (id: string) => {
    setLoading((prev) => ({ ...prev, [id]: false }));
  };

  // Open lightbox
  const openLightbox = (image: GalleryItem) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  // Navigate between images
  const navigateImage = useCallback(
    (direction: "next" | "prev") => {
      if (!selectedImage) return;

      const currentIndex = filteredItems.findIndex(
        (img) => img.id === selectedImage.id
      );
      let newIndex: number;

      if (direction === "next") {
        newIndex = (currentIndex + 1) % filteredItems.length;
      } else {
        newIndex =
          (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      }

      setSelectedImage(filteredItems[newIndex]);
    },
    [selectedImage, filteredItems]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox, navigateImage]);

  return (
    <section className="section-padding bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)]">
      <div className="container-custom">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-image cursor-pointer relative overflow-hidden rounded-lg h-72 group"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openLightbox(item)}
            >
              {loading[item.id] && (
                <div className="absolute inset-0">
                  <Skeleton
                    height="100%"
                    width="100%"
                    baseColor="#2A2A2A"
                    highlightColor="#3A3A3A"
                  />
                </div>
              )}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                  loading[item.id] ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => handleImageLoad(item.id)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-jet-black)]/70 to-transparent flex flex-col justify-end p-4 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[var(--color-racing-red)] text-sm font-medium">
                  {item.category in categoryTranslations
                    ? categoryTranslations[item.category]
                    : item.category}
                </span>
                <h3 className="text-[var(--color-cool-white)] font-medium">
                  {item.title}
                </h3>
                <div className="mt-2 text-xs text-[var(--color-cool-white)]">
                  Кликнете за увеличаване
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2 dark:text-[var(--color-cool-white)]">
              Няма намерени проекти
            </h3>
            <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
              Моля, изберете друга категория или опитайте по-късно.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox - Simplified version without comparison */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-[var(--color-racing-red)] transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Previous button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[var(--color-racing-red)] transition-colors z-50"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <div className="relative max-h-[80vh] max-w-[80vw]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] max-w-[80vw] object-contain"
              />
            </div>

            {/* Next button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[var(--color-racing-red)] transition-colors z-50"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight size={40} />
            </button>

            {/* Image info */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{selectedImage.title}</p>
              <p className="text-sm text-white/70">
                {selectedImage.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
