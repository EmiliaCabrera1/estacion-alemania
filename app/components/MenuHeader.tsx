"use client";

import { CATEGORIAS, Categoria } from "@/model";
import { Locale } from "@/constants/locales";
import { useScrollSpy } from "@/app/context/ScrollSpyContext";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function MenuHeader({ locale }: { locale: Locale }) {
  const { activeCategory, setActiveCategory } = useScrollSpy();

  const onClick = (categoria: Categoria) => {
    const container = document.querySelector<HTMLElement>("[data-menu-scroll]");
    const section = document.getElementById(categoria.name);
    if (container && section) {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const scrollTop =
        container.scrollTop + sectionRect.top - containerRect.top - 20;
      container.scrollTo({ top: Math.max(0, scrollTop), behavior: "smooth" });
    } else if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveCategory(categoria.name);
  };

  const sinTaccLabel = locale === "en" ? "No TACC" : "Sin TACC";
  const vegetarianoLabel = locale === "en" ? "Vegetarian" : "Vegetariano";

  return (
    <>
      <div className="flex justify-evenly text-vietnam w-full shrink-0 px-10 ">
        {CATEGORIAS.slice(0, 3).map((categoria) => (
          <button
            key={categoria.name}
            className={twMerge(
              "capitalize text-gris transition-all duration-300 ease-out text-center",
              categoria.name === activeCategory ? "font-bold" : "font-normal",
            )}
            onClick={() => onClick(categoria)}
          >
            {categoria[locale]}
          </button>
        ))}
      </div>
      <div className="flex justify-evenly text-vietnam w-full shrink-0">
        {CATEGORIAS.slice(3).map((categoria) => (
          <button
            key={categoria.name}
            className={twMerge(
              "capitalize text-gris transition-all duration-300 ease-out text-center",
              categoria.name === activeCategory ? "font-bold" : "font-normal",
            )}
            onClick={() => onClick(categoria)}
          >
            {categoria[locale]}
          </button>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-20 mx-auto  my-3">
        <div className="flex flex-row gap-1 text-base">
          <span className="relative w-4 h-4 drop-shadow-card text-lg text-gris my-auto">
            <Image
              src={`/icons/vegetarianoOscuro.svg`}
              alt={vegetarianoLabel}
              fill
            />
          </span>
          {sinTaccLabel}
        </div>
        <div className="flex flex-row gap-1">
          <span className="relative w-4 h-4 drop-shadow-card text-xl text-gris my-auto">
            <Image src={`/icons/sinTaccOscuro.svg`} alt={sinTaccLabel} fill />
          </span>
          {vegetarianoLabel}
        </div>
      </div>
    </>
  );
}
