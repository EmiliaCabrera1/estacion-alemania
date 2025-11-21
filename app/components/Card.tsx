import Image from "next/image";
import { formatARS } from "../utils/convert";

type CardProps = {
    titulo: string;
    descripcion: string;
    precio: number;
    vegetariano: boolean;
    sinTacc: boolean;
}

export default function Card(props: CardProps) {
    return (
        <div className="flex flex-row w-[90%] h-[100px] bg-card-background text-card-text rounded-tr-lg rounded-br-lg drop-shadow-card">
            <div className="w-3/4">
                <div className="mt-3.5 ml-[51px] text-card-text text-[10px] font-medium drop-shadow-card">{props.titulo}</div>
                <div className="mt-1.5 ml-[33px] text-card-text text-[8px] font-normal drop-shadow-card">{props.descripcion}</div>
            </div>
            <div className="w-1/4">
                <div className="mt-[30px] mb-4 text-center text-card-text drop-shadow-card text-[10px]">{formatARS(props.precio)}</div>
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
