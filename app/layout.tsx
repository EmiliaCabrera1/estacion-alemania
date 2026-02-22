import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import AppLayout from "@/app/components/AppLayout";

export const beVietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-be-vietnam",
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
    <html lang="en">
      <body className={`${beVietnam.variable} antialiased font-vietnam`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
