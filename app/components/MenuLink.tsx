import type { AppMenuItem } from "@/model/app-menu";
import type { Locale } from "@/constants/locales";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function MenuLink({ item, locale, type, colorClass }: { item: AppMenuItem; locale: Locale; type: 1 | 2 | 3 | 4 | 5; colorClass?: string }) {

    const getLinkClass = () => {
        switch (type) {
            case 1:
                return "w-full mb-4";
            case 2:
                return "w-[90%] rounded-tl-lg rounded-bl-lg ml-[10%]";
            case 3:
                return "w-[90%] rounded-tr-lg rounded-br-lg";
            case 4:
                return "w-full mt-4";
        }
    }

    return (
        <Link className={twMerge("py-3 text-gris text-xl text-center", colorClass ?? "bg-card", getLinkClass())} href={item.url.startsWith("http") ? item.url : `/${locale}${item.url}`}>
            {item[locale].toUpperCase()}
        </Link>
    );
}