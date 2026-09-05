import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PetCafé Araraquara — Sabor que acolhe, espaço que une",
  description:
    "Cafeteria pet friendly no Portal das Tipuanas, Araraquara/SP. Uma carta autoral em um espaço pensado para você e seu companheiro.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-cream text-espresso font-sans">
        <Nav />
        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
