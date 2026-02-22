import MenuLink from "@/app/components/MenuLink";
import { Locale } from "@/constants/locales";
import Image from "next/image";

const INTERPRETATION_CENTER_CONTENT = {
  es: `Ubicado en la histórica Estación Alemania, en plena Quebrada de las Conchas, el Centro de Interpretación invita a descubrir la memoria viva del antiguo ramal ferroviario y la riqueza natural que rodea este emblemático paraje.
A través de relatos, imágenes y piezas patrimoniales, el espacio propone un recorrido por la historia, la cultura y los paisajes que dieron identidad a la estación y a la región. Es un punto de encuentro entre pasado y presente, donde viajeros y visitantes pueden comprender la importancia del tren en el desarrollo del valle y apreciar la singular belleza geológica del entorno.
Un lugar para detenerse, conocer y dejarse envolver por la historia en el corazón del paisaje salteño.`,
  en: `Located in the historic Estación Alemania, in the heart of the Quebrada de las Conchas, the Interpretation Center invites visitors to discover the living memory of the old railway branch line and the natural richness that surrounds this emblematic place.
Through stories, images, and heritage pieces, the space offers a journey through the history, culture, and landscapes that gave identity to the station and the region. It is a meeting point between past and present, where travelers and visitors can understand the importance of the train in the development of the valley and appreciate the singular geological beauty of the surroundings.
A place to stop, learn, and let oneself be enveloped by history in the heart of the Salteño landscape.`,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale: Locale = locale === "es" || locale === "en" ? locale : "es";

  const INTERPRETATION_CENTER_MENU = [
    {
      id: 1,
      es: "Contacto",
      en: "Contact",
      url: process.env.NEXT_PUBLIC_URL_PAJARO_AGUIRRE_WHATSAPP ?? "",
    },
    {
      id: 2,
      es: "Facebook",
      en: "Facebook",
      url: process.env.NEXT_PUBLIC_URL_PAJARO_AGUIRRE_FACEBOOK ?? "",
    },
  ];

  return (
    <div className="w-full overflow-y-auto pb-5">
      <div className="flex flex-col gap-4 mt-2 mx-5 overflow-auto">
        <p>
          {INTERPRETATION_CENTER_CONTENT[validLocale]}
        </p>
      </div>
      <div className="h-[30vh] w-full relative -mt-6">
        <Image src="/img/imgCentro.svg" alt="Centro de Interpretacion" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4">
        <MenuLink item={INTERPRETATION_CENTER_MENU[0]} locale={validLocale} type={2} colorClass="bg-[rgba(146,61,58,0.8)]" />
        <MenuLink item={INTERPRETATION_CENTER_MENU[1]} locale={validLocale} type={3} colorClass="bg-[rgba(146,61,58,0.8)]" />
      </div>
    </div>
  );
}