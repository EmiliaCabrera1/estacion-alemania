import { Locale } from "@/constants/locales";
import Header from "../components/Header";
import IdiomHeader from "../components/IdiomHeader";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div
      className="
    min-h-dvh
    flex flex-col
    bg-[url('/img/fondo.svg')]
    bg-no-repeat
    bg-cover
    bg-center
    relative
  "
    >
      <IdiomHeader />
      <div className="h-60 mb-5 justify-center flex items-center">
        <img src="/img/logo.svg" alt="Logo de la estacion" />
      </div>
      <Header locale={locale} />

      {/* CONTENEDOR CENTRAL */}
      <main className="flex justify-center flex-1  pb-10">
        {/* TICKET */}
        <div
          className="
            w-full
            max-w-[95%]
            bg-[url('/img/fondoTicket.svg')]
            bg-no-repeat
            bg-top
            bg-contain
          "
        >
          {children}
        </div>
      </main>
    </div>
  );
}
