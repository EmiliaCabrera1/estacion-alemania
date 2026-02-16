import Image from "next/image";
import { formatARS } from "../utils/convert";
import { twMerge } from "tailwind-merge";

type CardProps = {
  titulo: string;
  descripcion: string;
  precio: number;
  vegetariano: boolean;
  sinTacc: boolean;
  tipo?: 1 | 2;
  // foto?: string;
};

export default function Card(props: CardProps) {
  return (
    <div
      className={twMerge(
        "flex w-[90%] bg-verde-oliva text-gris drop-shadow-card mb-7 p-4 gap-4",
        props?.tipo === 2
          ? "rounded-tl-lg rounded-bl-lg ml-[10%]"
          : "rounded-tr-lg rounded-br-lg",
      )}
    >
      {/* FOTO (solo si existe) */}
      {/*
      {props.foto && (
        <div className="relative w-24 h-24 shrink-0">
          <Image src={props.foto} alt={props.titulo} fill className="object-cover rounded-md" />
        </div>
      )}
      */}

      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <h3 className="text-[20px] font-medium drop-shadow-card">
              {props.titulo}
            </h3>

            {props.vegetariano && (
              <div className="relative w-5 h-5">
                <Image src="/icons/vegetariano.svg" alt="vegetariano" fill />
              </div>
            )}

            {props.sinTacc && (
              <div className="relative w-5 h-5">
                <Image src="/icons/sinTacc.svg" alt="sin tacc" fill />
              </div>
            )}
          </div>

          <span className="text-[20px] font-medium drop-shadow-card whitespace-nowrap">
            {formatARS(props.precio)}
          </span>
        </div>

        <p className="mt-1 text-[14px] font-normal drop-shadow-card">
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}
