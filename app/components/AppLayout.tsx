"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/constants/locales";
import { LOCALES } from "@/constants/locales";
import Header from "@/app/components/Header";
import { ScrollSpyProvider } from "@/app/context/ScrollSpyContext";

function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return LOCALES.includes(segment as Locale) ? (segment as Locale) : "es";
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <div className="bg-gray-200">
      <ScrollSpyProvider>
        <div
          className="
          h-dvh
          flex flex-col
          bg-[url('/img/fondo.svg')]
          bg-no-repeat
          bg-cover
          bg-center
          relative
          overflow-hidden
          sm:mx-auto
          sm:w-[400px]
          sm:border-2
          sm:border-gray-300
          sm:rounded-lg
        "
        >
          <header className="shrink-0">
            <Header locale={locale} />
          </header>
          {children}
        </div>
      </ScrollSpyProvider>
    </div>
  );
}
