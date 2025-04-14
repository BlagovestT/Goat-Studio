"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    setIsMobileMenuOpen(false);

    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  const navigationItems = [
    { name: "Начало", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Галерия", href: "/gallery" },

    { name: "Контакти", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[var(--color-gunmetal)] shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[var(--color-cool-white)]">
            GOAT <span className="text-[var(--color-racing-red)]">Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link ${
                isActive(item.href)
                  ? "text-[var(--color-racing-red)]"
                  : "text-[var(--color-cool-white)] hover:text-[var(--color-silver)]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* CTA Button */}
          <Link href="/contact" className="hidden md:flex btn btn-primary">
            Резервирай
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-cool-white)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[var(--color-gunmetal)] overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[400px] shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col space-y-3">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`py-2 px-3 rounded-md transition-colors ${
                isActive(item.href)
                  ? "text-[var(--color-racing-red)] bg-[var(--color-dark-gunmetal)]"
                  : "text-[var(--color-cool-white)] hover:bg-[var(--color-dark-gunmetal)]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="btn btn-primary w-full mt-2 flex justify-center items-center space-x-2"
          >
            <Phone size={18} />
            <span>Резервирай</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
