import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css";

export const beVietnam = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-be-vietnam",
})

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
      <body
        className={`${beVietnam.variable} antialiased font-vietnam`}
      >
        <main className="sm:mx-auto sm:max-w-2xl items-center relative h-dvh w-dvw border-l-2 border-r-2 border-verde-oliva">
          {children}
        </main>
      </body>
    </html>
  );
}
