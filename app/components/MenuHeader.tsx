"use client";

import { CATEGORIAS, Categoria } from "@/Model";
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
        <div className="flex text-vietnam w-full justify-around mt-2 mb-5 shrink-0">
            {CATEGORIAS.map((categoria) => (
                <button
                    key={categoria.name}
                    className={twMerge(
                        "mx-1 capitalize text-gris transition-all duration-300 ease-out",
                        categoria.name === activeCategory
                            ? "text-xl font-bold translate-y-2"
                            : "text-sm font-normal translate-y-0",
                    )}
                    onClick={() => onClick(categoria)}
                >
                    {categoria[locale]}
                </button>
            ))}
        </div>
    );
}
