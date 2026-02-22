import { headers } from "next/headers";
import Card from "@/app/components/Card";
import SectionTitle from "@/app/components/SectionTitle";
import { Locale } from "@/constants/locales";
import { CATEGORIAS, Categoria, MenuItem } from "@/model";
import Image from "next/image";

async function getMenuData(): Promise<MenuItem[]> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = headersList.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/menu`, {
    next: { revalidate: 360 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const data = await getMenuData();
  const { locale } = await params;
  const validLocale: Locale = locale === "es" || locale === "en" ? locale : "es";

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
          <SectionTitle title={categoria[validLocale]} locale={validLocale} />
          {getDishes(data, categoria).map((dish, index) =>
            <Card
              key={index}
              titulo={dish.nombre}
              descripcion={validLocale === "es" ? dish.descripcion : dish.description}
              precio={dish.precio || 0}
              vegetariano={dish.vegetariano}
              sinTacc={dish.sinTacc}
              tipo={index % 2 === 0 ? 1 : 2}
              foto={dish.foto}
            />
          )}
        </section>
      ))}
      <Image src="/img/imgMenu.svg" alt="Fondo" width={265} height={200} className="w-full h-auto" />
    </div>
  );
}