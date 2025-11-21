import Image from "next/image"

export default function SectionTitle({ title }: { title: string }) {
    return (<>
        <h2 className="text-center font-alumni text-6xl">{title}</h2>
        <div className="flex flex-row justify-center gap-20 mx-auto my-5">
            <div className="flex flex-row gap-1">
                <span className="relative w-5 h-5 drop-shadow-card text-xl">
                    <Image
                        src={`/icons/vegetarianoOscuro.svg`}
                        alt={`vegetariano`}
                        fill
                    />
                </span>
                SIN TACC
            </div>
            <div className="flex flex-row gap-1">
                <span className="relative w-5 h-5 drop-shadow-card text-xl">
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
