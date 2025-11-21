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
}

export default function Card(props: CardProps) {
    return (
        <div className={twMerge("flex flex-row w-[90%] h-[100px] bg-verde-oliva text-gris drop-shadow-card mb-7", props?.tipo === 2 ? "rounded-tl-lg rounded-bl-lg ml-[10%]" : "rounded-tr-lg rounded-br-lg")}>
            <div className={twMerge("w-3/4", props?.tipo === 2 ? "order-2" : "order-1")}>
                <div className={twMerge("mt-3.5 ml-[51px] text-[10px] font-medium drop-shadow-card")}>{props.titulo}</div>
                <div className={twMerge("mt-1.5 ml-[33px] text-[8px] font-normal drop-shadow-card")}>{props.descripcion}</div>
            </div>
            <div className={twMerge("w-1/4", props?.tipo === 2 ? "order-1" : "order-2")}>
                <div className="mt-[30px] mb-4 text-center drop-shadow-card text-[10px]">{formatARS(props.precio)}</div>
                <div className="flex flex-row w-full justify-around">
                    {props.vegetariano &&
                        <div className="relative w-5 h-5 drop-shadow-card">
                            <Image
                                src={`/icons/vegetariano.svg`}
                                alt={`vegetariano`}
                                fill
                            />
                        </div>}

                    {props.sinTacc &&
                        <div className="relative w-5 h-5 drop-shadow-card">
                            <Image
                                src={`/icons/sinTacc.svg`}
                                alt={`sin tacc`}
                                fill
                            />
                        </div>}
                </div>
            </div>
        </div>
    )
}
