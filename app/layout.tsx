import type { Metadata } from "next";
import { Be_Vietnam_Pro, Cinzel } from "next/font/google";
import "./globals.css";
import AppLayout from "@/app/components/AppLayout";

export const beVietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-be-vietnam",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Carta Estación Alemania",
  description: "Platos frescos, opciones saludables, bebidas y más. Mirá el menú completo de Estación Alemania.",
  keywords: "restaurante, carta, menú, comida, platos, bebidas, especialidades, gastronomía, sabores, cocina, experiencia culinaria, horario, eventos, promociones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnam.variable} ${cinzel.variable}`}>
      <body className="antialiased font-cuerpo">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
