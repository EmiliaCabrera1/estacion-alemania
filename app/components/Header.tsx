'use client'

import { CATEGORIAS, Categoria } from "@/constants/categorias"
import { Locale } from "@/constants/locales"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

export default function Header({ locale }: { locale: Locale }) {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
    const categorias = Object.keys(CATEGORIAS[locale])

    const onClick = (categoria: Categoria) => {
        console.log("click en categoria", categoria);
        const el = document.getElementById(categoria);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setCategoriaSeleccionada(categoria)
    };


    return (
        <div className="grid grid-rows-1 grid-cols-3 md:flex w-full justify-around flex-wrap mt-2 mb-5">
            {categorias.map((categoria) => (
                <button
                    key={categoria}
                    className={twMerge("col-span-1 text-xl text-alumniBlack capitalize",
                        categoria === categoriaSeleccionada ? "font-bold" : "font-normal"
                    )}
                    onClick={() => onClick(categoria as Categoria)}
                >
                    {CATEGORIAS[locale][categoria as Categoria]}
                </button>))
            }
        </div>
    )
}
