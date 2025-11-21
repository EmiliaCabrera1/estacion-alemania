'use client'

import { CATEGORIAS } from "@/constants/categorias"
import { Locale } from "@/constants/locales"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

export default function Header({ locale }: { locale: Locale }) {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
    const categorias = Object.values(CATEGORIAS[locale])

    return (
        <div className="flex flex-row w-full justify-around flex-wrap my-4">
            {categorias.map((categoria) => (
                <button
                    key={categoria}
                    className={twMerge("text-xl text-alumniBlack capitalize mx-4",
                        categoria === categoriaSeleccionada ? "font-bold" : "font-normal"
                    )}
                    onClick={() => setCategoriaSeleccionada(categoria)}
                >
                    {categoria}
                </button>))
            }
        </div>
    )
}
