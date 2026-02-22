import { headers } from "next/headers";
import { Locale } from "@/constants/locales";
import Image from "next/image";
import { AppMenuItem } from "@/model/app-menu";
import MenuLink from "@/app/components/MenuLink";
import { getLocaleFromAcceptLanguage } from "@/app/utils/locale";
import Link from "next/link";

export default async function Page() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const validLocale: Locale = getLocaleFromAcceptLanguage(acceptLanguage);

  const IDIOMAS = [
    {
      id: 1,
      es: "Español",
      en: "Spanish",
      url: "/es",
    },
    {
      id: 2,
      es: "Ingles",
      en: "English",
      url: "/en",
    },
  ];

  return (
    <>
      <div className="w-full -mt-3">
        <Image
          src="/img/imgPortada.svg"
          alt="Fondo"
          width={397}
          height={224}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full overflow-y-auto">
        <div className="flex flex-col gap-12 my-12">
          {IDIOMAS.map((item: AppMenuItem) => (
            <MenuLink
              key={item.id}
              item={item}
              locale={validLocale}
              type={
                item.id % 2 === 0 ? 2 : 3
              }
            />
          ))}
          <Link href="https://www.instagram.com/somosvhetra/" className="text-center text-gris text-xl text-vietnam mt-20">
            @somosvhetra</Link>
        </div>
      </div>
    </>
  );
}
