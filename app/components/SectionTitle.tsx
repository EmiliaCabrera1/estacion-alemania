import Image from "next/image"

export default function SectionTitle() {
    return (<>
        <div className="flex flex-row justify-center gap-20 mx-auto my-5">
            <div className="flex flex-row gap-1">
                <span className="relative w-5 h-5 drop-shadow-card text-xl text-gris">
                    <Image
                        src={`/icons/vegetarianoOscuro.svg`}
                        alt={`vegetariano`}
                        fill
                    />
                </span>
                SIN TACC
            </div>
            <div className="flex flex-row gap-1">
                <span className="relative w-5 h-5 drop-shadow-card text-xl text-gris">
                    <Image
                        src={`/icons/sinTaccOscuro.svg`}
                        alt={`sin tacc`}
                        fill
                    />
                </span>
                VEGETARIANO
            </div>
        </div>
    </>
    )
}
