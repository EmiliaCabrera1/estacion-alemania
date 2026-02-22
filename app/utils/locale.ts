import { LOCALES } from "@/constants/locales";
import type { Locale } from "@/constants/locales";

export function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return "es";
  for (const part of acceptLanguage.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (LOCALES.includes(code as Locale)) return code as Locale;
  }
  return "es";
}
