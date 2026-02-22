"use client";

import { CATEGORIAS, Categoria } from "@/model";
import { Locale } from "@/constants/locales";
import { useScrollSpy } from "@/app/context/ScrollSpyContext";
import { twMerge } from "tailwind-merge";

export default function MenuHeader({ locale }: { locale: Locale }) {
    const { activeCategory, setActiveCategory } = useScrollSpy();

    const onClick = (categoria: Categoria) => {
        const el = document.getElementById(categoria.name);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveCategory(categoria.name);
    };

    return (
        <div className="flex text-vietnam w-full justify-between items-center gap-0.5 px-2 mt-2 mb-5 shrink-0">
            {CATEGORIAS.map((categoria) => (
                <button
                    key={categoria.name}
                    className={twMerge(
                        "flex-1 min-w-0 capitalize text-gris transition-all duration-300 ease-out whitespace-nowrap text-center",
                        "text-[clamp(0.5rem,2.5vw,0.65rem)]",
                        categoria.name === activeCategory
                            ? "font-bold text-[clamp(0.55rem,2.8vw,0.75rem)]"
                            : "font-normal",
                    )}
                    onClick={() => onClick(categoria)}
                >
                    {categoria[locale]}
                </button>
            ))}
        </div>
    );
}
