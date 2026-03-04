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
  foto?: string;
};

export default function Card(props: CardProps) {

  return (
    <div
      className={twMerge(
        "flex w-[90%] text-[18px] bg-card text-black shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-7 px-4 py-2 gap-4 relative",
        "overflow-hidden isolate [-webkit-backface-visibility:hidden] [transform:translateZ(0)]",
        props?.tipo === 2
          ? "rounded-tl-lg rounded-bl-lg ml-[10%]"
          : "rounded-tr-lg rounded-br-lg",
        props.descripcion.length > 0 ? "mb-7" : "mb-3",
      )}
    >
      <div className="flex flex-row gap-2 w-full">
        {props.foto && (
          <div
            className={twMerge(
              "relative w-20 h-20 shrink-0  ",
              "order-1",
            )}
          >
            <Image
              src={`/platos/${props.foto}`}
              alt={props.titulo}
              fill
              className="object-contain mt-2"
            />
          </div>
        )}
        <div
          className={twMerge(
            "flex flex-col flex-2",
            "order-2 text-left mr-auto",
          )}
        >
          <h3 className="font-medium font-titulos">{props.titulo}</h3>
          <p
            className={twMerge(
              "mt-1 text-[12px] font-light",
              "ml-2",
            )}
          >
            {props.descripcion}
          </p>
        </div>
        <div
          className={twMerge(
            "flex flex-col",
            "order-3",
          )}
        >
          <h4
            className={twMerge(
              "text-[15px] font-normal whitespace-nowrap",
              props.descripcion ? "my-4" : "my-0",
            )}
          >
            {formatARS(props.precio)}
          </h4>
          <div
            className={twMerge(
              "flex flex-row mt-auto gap-2",
              "justify-end",
            )}
          >
            {props.vegetariano && (
              <div className="relative flex h-5 w-5">
                <Image
                  src="/icons/vegetarianoOscuro.svg"
                  alt="vegetariano"
                  fill
                />
              </div>
            )}
            {props.sinTacc && (
              <div className="relative h-5 w-5">
                <Image src="/icons/sinTaccOscuro.svg" alt="sin tacc" fill />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
