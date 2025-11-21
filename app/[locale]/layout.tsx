import { Locale } from "@/constants/locales";
import Header from "../components/Header";
import IdiomHeader from "../components/IdiomHeader";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  return (<div className="flex flex-col max-h-dvh">
    <IdiomHeader />
    <div className="h-10 text-center text-4xl">LOGO</div>
    <Header locale={locale} />
    <div className="bg-[url(/img/fondo-superior.svg)] bg-cover w-full min-h-[30px]" />
    <div className="bg-[url(/img/fondo.svg)] bg-repeat-y bg-contain overflow-y-auto">
      {children}
    </div>
  </div>
  );
}
