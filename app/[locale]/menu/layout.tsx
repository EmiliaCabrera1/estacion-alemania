import { Locale } from "@/constants/locales";
import Header from "@/app/components/Header";
import MenuHeader from "@/app/components/MenuHeader";
import ScrollableMenuContent from "@/app/components/ScrollableMenuContent";
import { ScrollSpyProvider } from "@/app/context/ScrollSpyContext";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale: Locale = locale === "es" || locale === "en" ? locale : "es";

  return (
    <>
      <MenuHeader locale={validLocale} />
      <main className="flex justify-center flex-1 min-h-0">
        <div
          className="
              w-full
              flex flex-col
              min-h-0
              bg-no-repeat
              bg-top
              bg-contain
            "
        >
          <ScrollableMenuContent>{children}</ScrollableMenuContent>
        </div>
      </main>
    </>
  );
}
