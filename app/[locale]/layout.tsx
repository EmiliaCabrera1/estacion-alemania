import { Locale } from "@/constants/locales";
import Header from "../components/Header";
import MenuHeader from "../components/MenuHeader";
import ScrollableMenuContent from "../components/ScrollableMenuContent";
import { ScrollSpyProvider } from "../context/ScrollSpyContext";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
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
        "
      >
        <header className="shrink-0">
          <Header />
          <MenuHeader locale={locale} />
        </header>
        <main className="flex justify-center flex-1 min-h-0">
          <div
            className="
              w-full
              flex flex-col
              min-h-0
              bg-[url('/img/fondoTicket.svg')]
              bg-no-repeat
              bg-top
              bg-contain
            "
          >
            <ScrollableMenuContent>{children}</ScrollableMenuContent>
          </div>
        </main>
      </div>
    </ScrollSpyProvider>
  );
}
