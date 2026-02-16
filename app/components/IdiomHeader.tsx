"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LOCALES } from "@/constants/locales";

export default function IdiomHeader() {
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
    <div className="absolute gap-2 z-50 w-full text-right p-4">
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
  );
}
