import Card from "@/app/components/Card"
import regional from "@/app/mock-data/regional.json"
import carnes from "@/app/mock-data/carnes.json"
import SectionTitle from "@/app/components/SectionTitle"

export default async function Page() {

  return <div className="overflow-y-auto h-full w-full">
    <section
      id="regional"
    >
      <SectionTitle title="Regional" />
      {regional.map((plato, index) => (
        <Card
          key={index}
          titulo={plato.titulo}
          descripcion={plato.descripcion}
          precio={plato.precio}
          vegetariano={plato.vegetariano}
          sinTacc={plato.sinTacc}
          tipo={index % 2 === 0 ? 1 : 2} />))}
    </section>
    <section
      id="carnes"
    >
      <SectionTitle title="Carnes" />
      {carnes.map((plato, index) => (
        <Card
          key={index}
          titulo={plato.titulo}
          descripcion={plato.descripcion}
          precio={plato.precio}
          vegetariano={plato.vegetariano}
          sinTacc={plato.sinTacc}
          tipo={index % 2 === 0 ? 1 : 2} />))}
    </section>
  </div>
}