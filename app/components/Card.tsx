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
        "flex w-[90%] bg-card text-gris drop-shadow-card mb-7 p-4 gap-4 relative",
        props?.tipo === 2
          ? "rounded-tl-lg rounded-bl-lg ml-[10%]"
          : "rounded-tr-lg rounded-br-lg",
      )}
    >
      <div className="flex flex-row gap-2 w-full">
        {props.foto && (
          <div
            className={twMerge(
              "relative w-20 h-20 shrink-0  ",
              props?.tipo === 2 ? "order-3" : "order-1",
            )}
          >
            <Image
              src={`/platos/${props.foto}`}
              alt={props.titulo}
              fill
              className="object-contain "
            />
          </div>
        )}
        <div
          className={twMerge(
            "flex flex-col flex-2",
            props?.tipo === 2
              ? "order-2 text-right ml-auto"
              : "order-2 text-left mr-auto",
          )}
        >
          <h3 className={twMerge("font-medium drop-shadow-card text-[10px]")}>
            {props.titulo}
          </h3>
          <p
            className={twMerge(
              "mt-1 text-[8px] font-normal drop-shadow-card",
              props?.tipo === 2 ? "mr-2" : "ml-2",
            )}
          >
            {props.descripcion}
          </p>
        </div>
        <div
          className={twMerge(
            "flex flex-col",
            props?.tipo === 2 ? "order-1" : "order-3",
          )}
        >
          <h4
            className={twMerge(
              "text-[10px] font-medium drop-shadow-card whitespace-nowrap",
              props.descripcion ? "my-4" : "my-0",
            )}
          >
            {formatARS(props.precio)}
          </h4>
          <div className="flex flex-row mt-auto gap-2 justify-end">
            {props.vegetariano && (
              <div className="relative flex h-4 w-4">
                <Image
                  src="/icons/vegetarianoOscuro.svg"
                  alt="vegetariano"
                  fill
                />
              </div>
            )}
            {props.sinTacc && (
              <div className="relative h-4 w-4">
                <Image src="/icons/sinTaccOscuro.svg" alt="sin tacc" fill />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
