import Card from "@/app/components/Card"
import SectionTitle from "@/app/components/SectionTitle"
import { mockedData } from "@/app/mock-data/mockedData"
import { Locale } from "@/constants/locales"
import { CATEGORIAS, Categoria, MenuItem } from "@/Model"


export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const getDishes = (data: MenuItem[], categoria: Categoria) => {
    return data.filter((dish) => dish.categoria.toLowerCase() === categoria.name.toLowerCase())
  }

  return (
    <div className="w-full">
    {CATEGORIAS.map((categoria: Categoria) => (
      <section
        key={categoria.name}
        id={categoria.name}
      >
        <SectionTitle />
        {getDishes(mockedData, categoria).map((dish, index) =>
          <Card
            key={index}
            titulo={dish.nombre}
            descripcion={dish.descripcion}
            precio={dish.precio || 0}
            vegetariano={dish.vegetariano}
            sinTacc={dish.sinTacc}
            tipo={index % 2 === 0 ? 1 : 2}
          />
        )}
      </section>
    ))}
    </div>
  );
}