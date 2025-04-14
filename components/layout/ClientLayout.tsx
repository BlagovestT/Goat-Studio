"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "../ui/LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [contentVisible, setContentVisible] = useState(false);

  // Handle content visibility
  useEffect(() => {
    // Hide content initially when pathname changes
    setContentVisible(false);

    // Show content after loading is done
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 1500); // Same timing as loading screen

    return () => clearTimeout(timer);
  }, [pathname]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Animation effect for elements with intersection observer
  useEffect(() => {
    if (!contentVisible) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [contentVisible]);

  return (
    <>
      {/* Loading screen always present but controls its own visibility */}
      <LoadingScreen />

      {/* Content visibility controlled by state */}
      <div
        className={
          contentVisible
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0"
        }
      >
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
      </div>
    </>
  );
}
