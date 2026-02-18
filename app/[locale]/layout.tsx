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
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="bg-gray-200">
      <ScrollSpyProvider>
        <div
          className="
          h-dvh
          flex flex-col
          bg-[url('/img/fondo.svg')]
          bg-no-repeat
          bg-cover
          bg-center
          relative
          overflow-hidden
          sm:mx-auto
          sm:w-[400px]
          sm:border-2
          sm:border-gray-300
          sm:rounded-lg
        "
        >
          <header className="shrink-0">
            <Header locale={locale} />
          </header>
          {children}
        </div>
      </ScrollSpyProvider>
    </div>)
}
