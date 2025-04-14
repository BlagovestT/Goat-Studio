"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start loading when pathname changes
    setIsLoading(true);

    // Hide loading screen after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-gunmetal)]">
      <div className="relative">
        {/* Logo animation */}
        <div className="text-4xl font-bold text-[var(--color-cool-white)] animate-fade-in">
          GOAT <span className="text-[var(--color-racing-red)]">Studio</span>
        </div>

        {/* Loading line */}
        <div className="mt-4 h-0.5 w-48 bg-[var(--color-silver)]/30 rounded overflow-hidden">
          <div
            className="h-full bg-[var(--color-racing-red)]"
            style={{
              width: "100%",
              animation: "loadingProgress 1.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingProgress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
