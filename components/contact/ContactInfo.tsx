"use client";

import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="animate-on-scroll">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-[var(--color-cool-white)]">
        Информация за контакт
      </h2>

      <div className="bg-white dark:bg-[var(--color-dark-gunmetal)] rounded-lg shadow-md overflow-hidden">
        {/* Map */}
        <div className="h-[300px] relative">
          <iframe
            src="https://maps.google.com/maps?q=Goat+Studio+Varna&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GOAT Studio location"
            className="absolute inset-0"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="p-6">
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="mr-4 p-2 bg-[var(--color-racing-red)]/10 rounded-full text-[var(--color-racing-red)]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1 dark:text-[var(--color-cool-white)]">
                  Адрес
                </h4>
                <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                  Виница Приморски, ул. „Света Параскева“, 9022 Варна
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="mr-4 p-2 bg-[var(--color-racing-red)]/10 rounded-full text-[var(--color-racing-red)]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1 dark:text-[var(--color-cool-white)]">
                  Работно Време
                </h4>
                <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                  Понеделник - Петък: 9:00 - 18:00
                  <br />
                  Събота: 10:00 - 17:00
                  <br />
                  Неделя: Затворено
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="mr-4 p-2 bg-[var(--color-racing-red)]/10 rounded-full text-[var(--color-racing-red)]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1 dark:text-[var(--color-cool-white)]">
                  Телефон
                </h4>
                <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                  <a
                    href="tel:+359897009595"
                    className="hover:text-[var(--color-racing-red)] transition-colors"
                  >
                    +359 897 009 595
                  </a>
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="mr-4 p-2 bg-[var(--color-racing-red)]/10 rounded-full text-[var(--color-racing-red)]">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1 dark:text-[var(--color-cool-white)]">
                  Имейл
                </h4>
                <p className="text-[var(--color-dark-gunmetal)] dark:text-[var(--color-silver)]">
                  <a
                    href="mailto:goatstudio2024@gmail.com"
                    className="hover:text-[var(--color-racing-red)] transition-colors"
                  >
                    goatstudio2024@gmail.com
                  </a>
                </p>
              </div>
            </li>
          </ul>

          {/* Social Media */}
          <div className="mt-8 pt-6 border-t border-[var(--color-silver)]/20 dark:border-[var(--color-gunmetal)]">
            <h4 className="font-bold mb-4 dark:text-[var(--color-cool-white)]">
              Последвайте ни
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/GOAT-Studio/61567481877807/?mibextid=wwXIfr&rdid=FWhKCGtbgy0TVmN9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BuEyK8er4%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-gunmetal)] dark:bg-[var(--color-silver)]/10 hover:bg-[var(--color-racing-red)] text-[var(--color-cool-white)] transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/goatstudio2024?igsh=MzJyOHpnaXd3ajEy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-gunmetal)] dark:bg-[var(--color-silver)]/10 hover:bg-[var(--color-racing-red)] text-[var(--color-cool-white)] transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@goatstudio2024?_t=ZN-8vXEsV4wkDe&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-gunmetal)] dark:bg-[var(--color-silver)]/10 hover:bg-[var(--color-racing-red)] text-[var(--color-cool-white)] transition-colors p-2 rounded-full"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
