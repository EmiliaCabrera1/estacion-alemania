import type { AppMenuItem } from "@/model/app-menu";
import type { Locale } from "@/constants/locales";
import { LOCALES } from "@/constants/locales";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function MenuLink({
  item,
  locale,
  type,
  colorClass,
}: {
  item: AppMenuItem;
  locale: Locale;
  type: 1 | 2 | 3 | 4 | 5;
  colorClass?: string;
}) {
  const href = item.url.startsWith("http")
    ? item.url
    : LOCALES.some((l) => item.url === `/${l}`)
      ? item.url
      : `/${locale}${item.url}`;

  const getLinkClass = () => {
    switch (type) {
      case 1:
        return "w-full";
      case 2:
        return "w-[90%] rounded-tl-lg rounded-bl-lg ml-[10%]";
      case 3:
        return "w-[90%] rounded-tr-lg rounded-br-lg";
    }
  };

  return (
    <Link
      className={twMerge(
        "py-2 text-gris text-lg text-center",
        colorClass ?? "bg-card",
        getLinkClass(),
      )}
      href={href}
    >
      {item[locale].toUpperCase()}
    </Link>
  );
}
