import { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCategories from "@/components/gallery/GalleryCategories";

export const metadata: Metadata = {
  title: "Галерия | GOAT Studio - Премиум Облепяне и Детайлинг на Автомобили",
  description:
    "Разгледайте нашите най-добри проекти за затъмняване на стъкла, фолиране на прозорци и полиране на фарове и стопове.",
  keywords:
    "галерия, фолиране на стъкла, тониране на стопове, полиране на фарове, преди и след, трансформации",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryCategories />
      <GalleryGrid />
    </>
  );
}
