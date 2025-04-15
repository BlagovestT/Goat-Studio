"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  Clock,
  Phone,
  Mail,
  Music2,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationItems = [
    { name: "Начало", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Галерия", href: "/gallery" },
    { name: "Контакти", href: "/contact" },
  ];

  return (
    <footer className="bg-[var(--color-jet-black)] text-[var(--color-cool-white)]">
      {/* Main Footer Content */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Brief Description */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                GOAT{" "}
                <span className="text-[var(--color-racing-red)]">Studio</span>
              </span>
            </div>
            <p className="text-[var(--color-silver)] mb-6 text-sm">
              Професионални услуги за затъмняване, облепяне на автомобили и
              полиране на фарове и стопове. Превръщаме вашите идеи в реалност.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/GOAT-Studio/61567481877807/?mibextid=wwXIfr&rdid=FWhKCGtbgy0TVmN9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BuEyK8er4%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-gunmetal)] hover:bg-[var(--color-racing-red)] transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/goatstudio2024?igsh=MzJyOHpnaXd3ajEy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-gunmetal)] hover:bg-[var(--color-racing-red)] transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@goatstudio2024?_t=ZN-8vXEsV4wkDe&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-gunmetal)] hover:bg-[var(--color-racing-red)] transition-colors p-2 rounded-full"
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-silver)] hover:text-[var(--color-racing-red)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="text-[var(--color-racing-red)] mt-1"
                  size={18}
                />
                <span className="text-[var(--color-silver)]">
                  ул. „Света Параскева“, 9022 Варна
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[var(--color-racing-red)]" size={18} />
                <a
                  href="tel:+359888123456"
                  className="text-[var(--color-silver)] hover:text-[var(--color-racing-red)] transition-colors"
                >
                  +359 897 009 595
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[var(--color-racing-red)]" size={18} />
                <a
                  href="mailto:info@goatstudio.bg"
                  className="text-[var(--color-silver)] hover:text-[var(--color-racing-red)] transition-colors"
                >
                  goatstudio2024@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock
                  className="text-[var(--color-racing-red)] mt-1"
                  size={18}
                />
                <div className="text-[var(--color-silver)]">
                  <p>Пон-Пет: 9:00 - 18:00</p>
                  <p>Събота: 10:00 - 17:00</p>
                  <p>Неделя: Затворено</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4">Обратна Връзка</h3>
            <p className="text-[var(--color-silver)] text-sm mb-4">
              Имате въпрос? Пишете ни и ще се свържем с вас възможно най-скоро.
            </p>
            <Link href="/contact" className="btn btn-primary block text-center">
              Свържете се с нас
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--color-gunmetal)] text-[var(--color-silver)] text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} GOAT Studio. Всички права запазени.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/tinting-law"
              className="hover:text-[var(--color-racing-red)] transition-colors"
            >
              Закон за затъмняване на автостъкла
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
