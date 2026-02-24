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
    <header className="flex relative mt-4  ">
      <button
        className="absolute z-60 text-left mt-2 ml-4 w-6 h-6"
        onClick={() => {
          router.push(`/${locale}`);
        }}
      >
        <Image src="/icons/home.svg" alt="Home" fill />
      </button>
      <button
        className="justify-center flex items-center pt-8 w-full h-30 mb-3"
        onClick={() => {
          router.push(`/${locale}`);
        }}
      >
        <Image src="/img/logo.svg" alt="Logo de la estacion" fill />
      </button>
      <div className="absolute z-50 w-full text-right pt-2 pr-4 flex justify-end items-center gap-1">
        {LOCALES.map((idiom, index) => (
          <React.Fragment key={idiom}>
            {index > 0 && <span className="text-gris">|</span>}
            <button
              onClick={() => changeLang(idiom)}
              aria-label={`Change language to ${idiom}`}
              className={`text-gris text-sm font-medium hover:opacity-80 ${locale === idiom ? "underline" : ""}`}
            >
              {idiom.toUpperCase()}
            </button>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}
