"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Боги Тодоров",
    title: "Собственик на Mercedes-Benz CLK",
    image: "/images/avatar.jpg",
    rating: 5,
    text: "Много съм доволен от услугите! Стъклата изглеждат страхотно, а фаровете са като нови. Професионална работа и коректно отношение. Препоръчвам!",
  },
  {
    id: 2,
    name: "Ралица Георгиева",
    title: "Собственик на Audi A3",
    image: "/images/avatar.jpg",
    rating: 5,
    text: "Добро отношение и перфектна работа. Радвам се, че попаднах на момчето, препоръчвам с две ръце! Стъклата на колата ми са перфектно затъмнени, а фаровете блестят. Благодаря ви!",
  },
  {
    id: 3,
    name: "Емил Станоев",
    title: "Собственик на VW Golf 5",
    image: "/images/avatar.jpg",
    rating: 5,
    text: "Полиране и фолиране на фарове на голф 5 плюс, изключително съм доволен от работата на момчето. Много учтив, внимателен и прецизен! Препоръчвам на всеки, който иска да направи нещо подобно на колата си.",
  },
  {
    id: 4,
    name: "Васко Иванов",
    title: "Собственик на Mitsubishi Outlander",
    image: "/images/avatar.jpg",
    rating: 5,
    text: "Момчето ми сложи 50% фолио на предните две стъкла колата се получи перфектно! Стъклата са с перфектен вид, а и не пречат на видимостта. Много съм доволен от работата!",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSpecific = (index: number) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Reset interval when currentIndex changes
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "text-[var(--color-racing-red)] fill-[var(--color-racing-red)]"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-primary text-[var(--color-cool-white)]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title centered">
            Какво Казват Нашите Клиенти
          </h2>
          <p className="text-[var(--color-silver)] text-lg mt-4">
            Доверено от автомобилни ентусиасти из цялата страна
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote className="h-24 w-24 text-[var(--color-racing-red)]" />
          </div>

          {/* Testimonial slider */}
          <div className="relative overflow-hidden min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[var(--color-racing-red)]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex mb-2">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-lg mb-6 max-w-2xl">{testimonial.text}</p>

                <h3 className="font-bold text-xl text-[var(--color-racing-red)]">
                  {testimonial.name}
                </h3>

                <p className="text-[var(--color-silver)]">
                  {testimonial.title}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-10 space-x-8">
            <button
              onClick={goToPrev}
              className="p-2 rounded-full border border-[var(--color-silver)] hover:border-[var(--color-racing-red)] hover:bg-[var(--color-racing-red)]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSpecific(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-[var(--color-racing-red)]"
                      : "bg-[var(--color-silver)] hover:bg-[var(--color-racing-red)]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-[var(--color-silver)] hover:border-[var(--color-racing-red)] hover:bg-[var(--color-racing-red)]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
