import { Locale } from "@/constants/locales";
import Image from "next/image";

const HISTORIA_CONTENT = {
  es: `En el corazón de la Quebrada de las Conchas, entre cerros rojizos y cielos interminables, la Estación Alemania permanece como un testigo silencioso de otra época. Fue fundada a comienzos del siglo XX, durante la expansión del ferrocarril en el norte argentino, cuando los rieles unían pueblos aislados y daban vida a regiones enteras.
La estación formó parte del ramal que conectaba el Valle de Lerma con los Valles Calchaquíes, y durante décadas fue punto de paso para trabajadores, viajeros y mercaderías. Aquí llegaban trenes cargados de historias, esperanzas y despedidas, marcando el ritmo cotidiano de la quebrada.
Con el paso del tiempo y la retirada del ferrocarril, la estación quedó en silencio, pero nunca perdió su espíritu. Hoy, rodeada por la inmensidad del paisaje, conserva la memoria de aquel movimiento y ofrece un espacio para detenerse, contemplar y disfrutar.
Sentarse en la Estación Alemania es viajar sin prisa, saborear el presente y sentir cómo la historia y la naturaleza se encuentran en un mismo lugar.`,
  en: `In the heart of the Quebrada de las Conchas, among reddish hills and endless skies, Estación Alemania stands as a silent witness to another era. It was founded at the beginning of the 20th century, during the expansion of the railway in northern Argentina, when the rails connected isolated towns and brought life to entire regions.
The station was part of the branch line that connected the Lerma Valley with the Calchaquí Valleys, and for decades it was a stopover for workers, travelers, and merchandise. Here arrived trains loaded with stories, hopes, and farewells, marking the daily rhythm of the gorge.
With the passage of time and the withdrawal of the railway, the station fell silent, but it never lost its spirit. Today, surrounded by the vastness of the landscape, it preserves the memory of that movement and offers a space to stop, contemplate, and enjoy.
Sitting at Estación Alemania is to travel without haste, savor the present, and feel how history and nature meet in one place.`,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="w-full overflow-y-auto pb-5">
      <div className="w-auto relative my-3  ml-[40%]">
        <Image src="/img/tituloHistoria.svg" alt="Historia" width={184} height={48} className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 mt-2 mx-5 overflow-auto">
        <p>
          <Image
            src="/img/imgHistoriaPeque.svg"
            alt="Historia"
            width={150}
            height={100}
            className="float-right ml-4 mb-2"
          />
          {HISTORIA_CONTENT[locale]}
        </p>
      </div>
      <div className="h-[30vh] w-full relative -mt-6">
        <Image src="/img/imgHistoria.svg" alt="Historia" fill className="object-cover" />
      </div>
    </div>
  );
}