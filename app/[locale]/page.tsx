import { Locale } from "@/constants/locales";
import Image from "next/image";
import APP_MENU, { AppMenuItem } from "@/model/app-menu";
import MenuLink from "../components/MenuLink";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale: Locale = locale === "es" || locale === "en" ? locale : "es";

  return (
    <div className="w-full overflow-y-auto pb-5">
      <div className="-mt-[15vh] h-[40vh] w-full relative">
        <Image
          src="/img/imgPortada.svg"
          alt="Fondo"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        {APP_MENU.map((item: AppMenuItem) => (
          <MenuLink
            key={item.id}
            item={item}
            locale={validLocale}
            type={
              item.id === 1 ? 1 : item.id === 7 ? 4 : item.id % 2 === 0 ? 2 : 3
            }
          />
        ))}
      </div>
    </div>
  );
}
