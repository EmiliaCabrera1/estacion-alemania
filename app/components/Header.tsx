"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LOCALES } from "@/constants/locales";
import type { Locale } from "@/constants/locales";

export default function Header({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pendingLocale, setPendingLocale] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!pendingLocale) return;
    if (typeof window === "undefined") return;

    document.cookie = `NEXT_LOCALE=${pendingLocale}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;

    const localeRegex = new RegExp(`^/(${LOCALES.join("|")})(?=/|$)`);
    const pathname = window.location.pathname.replace(localeRegex, "");

    router.replace(
      `/${pendingLocale}${pathname}${window.location.search || ""}`,
    );

    setPendingLocale(null);
  }, [pendingLocale, router]);

  const changeLang = (locale: string) => {
    setPendingLocale(locale);
  };

  return (
    <header className="flex relative">
      <button className="absolute z-60 text-left mt-2 ml-2 w-8 h-8" onClick={() => {
        router.push(`/${locale}`)
      }}>
        <Image src="/icons/home.svg" alt="Home" fill />
      </button>
      <div className="justify-center flex items-center pt-8 w-full h-30">
        <Image src="/img/logo.svg" alt="Logo de la estacion" fill />
      </div>
      <div className="absolute gap-2 z-50 w-full text-right pt-2 pr-2">
        {LOCALES.map((idiom) => (
          <button
            key={idiom}
            onClick={() => changeLang(idiom)}
            aria-label={`Change language to ${idiom}`}
            className="relative w-8 h-8"
          >
            <Image src={`/flags/${idiom}.svg`} alt={`${idiom} flag`} fill />
          </button>
        ))}
      </div>
    </header>
  );
}
