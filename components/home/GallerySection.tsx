"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Gallery items with before/after comparison
const galleryItems = [
  {
    id: 1,
    title: "Фолиране на стъклен таван",
    category: "Полиране",
    before: "/images/image-47.jpg",
    after: "/images/image-48.jpg",
  },
  {
    id: 2,
    title: "Полиране на Фарове",
    category: "Полиране",
    before: "/images/image-20.jpg",
    after: "/images/image-19.jpg",
  },
  {
    id: 3,
    title: "Фолиране на хамелионово фолио",
    category: "Полиране",
    before: "/images/image-36.jpg",
    after: "/images/image-41.jpg",
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto rotate through examples with a pause when interacting
  useEffect(() => {
    startAutoRotation();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex]);

  const startAutoRotation = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
      setSliderValue(50); // Reset slider position on slide change
    }, 10000); // Change every 10 seconds
  };

  const pauseAutoRotation = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const resumeAutoRotation = () => {
    startAutoRotation();
  };

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    pauseAutoRotation();
    setSliderValue(Number(e.target.value));
    resumeAutoRotation();
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    pauseAutoRotation();
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || !imageContainerRef.current) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    const containerWidth = imageContainerRef.current.offsetWidth;

    // Calculate new slider value based on touch movement
    let newValue = sliderValue - (diff / containerWidth) * 100;
    newValue = Math.min(100, Math.max(0, newValue));

    setSliderValue(newValue);
    setTouchStart(touchEnd);
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    resumeAutoRotation();
  };

  // Navigate between examples
  const goToNext = () => {
    pauseAutoRotation();
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    setSliderValue(50); // Reset slider
    resumeAutoRotation();
  };

  const goToPrev = () => {
    pauseAutoRotation();
    setActiveIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
    setSliderValue(50); // Reset slider
    resumeAutoRotation();
  };

  // Open lightbox
  const openLightbox = () => {
    pauseAutoRotation();
    setIsLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    resumeAutoRotation();
  };

  return (
    <section className="section-padding bg-[var(--color-cool-white)] dark:bg-[var(--color-gunmetal)]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title centered">Нашата Последна Работа</h2>
          <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)] text-lg mt-4">
            Вижте нашите последни трансформации
          </p>
        </div>

        {/* Main Before/After Comparison */}
        <div className="relative mb-16 animate-on-scroll max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden">
          {/* Image title and category */}
          <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-[var(--color-jet-black)]/80 to-transparent">
            <div className="text-[var(--color-racing-red)] text-sm font-medium">
              {galleryItems[activeIndex].category}
            </div>
            <h3 className="text-[var(--color-cool-white)] font-bold text-xl">
              {galleryItems[activeIndex].title}
            </h3>
          </div>

          {/* Before/After container */}
          <div
            ref={imageContainerRef}
            className="relative h-[500px] cursor-move"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Before image (full width) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={galleryItems[activeIndex].before}
                alt={`Преди - ${galleryItems[activeIndex].title}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </div>

            {/* After image with clip mask instead of width */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
            >
              <Image
                src={galleryItems[activeIndex].after}
                alt={`След - ${galleryItems[activeIndex].title}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[var(--color-racing-red)] cursor-ew-resize z-20"
              style={{ left: `calc(${sliderValue}% - 0.5px)` }}
            ></div>

            {/* Labels */}
            <div className="absolute top-16 left-4 bg-[var(--color-jet-black)]/80 text-[var(--color-cool-white)] text-sm py-1 px-3 rounded-full z-10">
              Преди
            </div>
            <div className="absolute top-16 right-4 bg-[var(--color-racing-red)]/80 text-[var(--color-cool-white)] text-sm py-1 px-3 rounded-full z-10">
              След
            </div>
          </div>

          {/* Slider control */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-30 bg-gradient-to-t from-[var(--color-jet-black)]/80 to-transparent">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-[var(--color-cool-white)]/20 rounded-lg appearance-none cursor-pointer"
              style={
                {
                  "--range-color": "var(--color-racing-red)",
                  background: `linear-gradient(to right, var(--range-color) 0%, var(--range-color) ${sliderValue}%, rgba(255,255,255,0.2) ${sliderValue}%, rgba(255,255,255,0.2) 100%)`,
                } as React.CSSProperties
              }
            />

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={goToPrev}
                className="p-2 bg-[var(--color-cool-white)]/10 rounded-full hover:bg-[var(--color-racing-red)]/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-[var(--color-cool-white)]" />
              </button>

              <button
                onClick={openLightbox}
                className="text-[var(--color-cool-white)] font-medium text-sm hover:text-[var(--color-racing-red)] transition-colors"
              >
                Увеличи
              </button>

              <button
                onClick={goToNext}
                className="p-2 bg-[var(--color-cool-white)]/10 rounded-full hover:bg-[var(--color-racing-red)]/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-[var(--color-cool-white)]" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex overflow-x-auto gap-3 pb-4 justify-center mb-12 animate-on-scroll">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                pauseAutoRotation();
                setActiveIndex(index);
                setSliderValue(50);
                resumeAutoRotation();
              }}
              className={`relative min-w-20 h-16 rounded-md overflow-hidden ${
                activeIndex === index
                  ? "ring-2 ring-[var(--color-racing-red)]"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={item.after}
                alt={item.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link
            href="/gallery"
            className="btn btn-primary inline-flex items-center px-6 py-3"
          >
            Вижте Пълната Галерия <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Lightbox with before/after slider comparison */}
      <Dialog open={isLightboxOpen} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-6 bg-[var(--color-dark-gunmetal)] border-none rounded-xl">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center text-[var(--color-cool-white)]">
              {galleryItems[activeIndex].title}
            </h3>

            <div
              className="relative h-[70vh] overflow-hidden rounded-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Before image (full width) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={galleryItems[activeIndex].before}
                  alt={`Преди - ${galleryItems[activeIndex].title}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* After image with clip mask instead of width */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
              >
                <Image
                  src={galleryItems[activeIndex].after}
                  alt={`След - ${galleryItems[activeIndex].title}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[var(--color-racing-red)] cursor-ew-resize z-20"
                style={{ left: `calc(${sliderValue}% - 0.5px)` }}
              >
                {/* Slider handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--color-racing-red)] rounded-full flex items-center justify-center">
                  <div className="flex flex-row">
                    <ChevronLeft className="h-4 w-4" />
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-[var(--color-jet-black)]/80 text-[var(--color-cool-white)] text-sm py-1 px-3 rounded-full z-10">
                Преди
              </div>
              <div className="absolute top-4 right-4 bg-[var(--color-racing-red)]/80 text-[var(--color-cool-white)] text-sm py-1 px-3 rounded-full z-10">
                След
              </div>
            </div>

            {/* Slider control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-[var(--color-gunmetal)] rounded-lg appearance-none cursor-pointer"
              style={
                {
                  "--range-color": "var(--color-racing-red)",
                  background: `linear-gradient(to right, var(--range-color) 0%, var(--range-color) ${sliderValue}%, var(--color-gunmetal) ${sliderValue}%, var(--color-gunmetal) 100%)`,
                } as React.CSSProperties
              }
            />

            <p className="text-center text-[var(--color-silver)] text-sm">
              Плъзнете плъзгача или докоснете изображението, за да видите
              трансформацията
            </p>

            {/* Navigation buttons */}
            <div className="flex justify-between pt-4">
              <button
                onClick={() => {
                  goToPrev();
                }}
                className="flex items-center gap-2 text-[var(--color-cool-white)] hover:text-[var(--color-racing-red)] transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Предишен</span>
              </button>

              <button
                onClick={() => {
                  goToNext();
                }}
                className="flex items-center gap-2 text-[var(--color-cool-white)] hover:text-[var(--color-racing-red)] transition-colors"
              >
                <span>Следващ</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
