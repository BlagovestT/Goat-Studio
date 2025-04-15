import { Metadata } from "next";
import ClientLayout from "../components/layout/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOAT Studio - Премиум Облепяне и Детайлинг на Автомобили",
  description:
    "GOAT Studio предлага премиум услуги за облепяне и детайлинг на автомобили. Трансформирайте своя автомобил с професионално облепяне с фолио, керамично покритие, защитно фолио и детайлинг.",
  keywords:
    "облепяне на автомобили, детайлинг, car wrapping, ceramic coating, автомобилно фолио, стайлинг на коли, защита на боя, GOAT Studio, автомобилни услуги, автостайлинг, автофолио, керамично покритие, защита на боя, детайлинг на автомобили, затъмняване на автостъкла, затъмняване на стъкла, автостъкла, тониране на стъкла, тониране на автостъкла, автостайлинг услуги, професионален детайлинг, защита на боята, автофолио услуги",
  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "GOAT Studio - Премиум Облепяне и Детайлинг на Автомобили",
    description:
      "Професионални услуги за трансформация и защита на вашия автомобил",
    url: "https://goatstudio.bg",
    siteName: "GOAT Studio",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png", // Path to your public folder
        width: 1200,
        height: 630,
        alt: "GOAT Studio - Облепяне и Детайлинг",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
