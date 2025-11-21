import { Locale } from "@/constants/locales"
import Header from "../components/Header"
import Card from "../components/Card"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return <div >
    <Header locale={locale} />
    <Card titulo="Milanesa con puré" descripcion="Milanesa de carne con puré de papas y ensalada" precio={13500} vegetariano={false} sinTacc={true} />
  </div>
}