import { Producto } from "../types/types";

export default function BebidasCard(props: { categoriasConProductos: Record<string, Producto[]> }) {
    const { categoriasConProductos } = props

    return (
        <div>
            {Object.entries(categoriasConProductos).map(([categoria, productos]) => (
                <section key={categoria}>
                    <h3 className="font-bold text-lg">{categoria}</h3>
                    {productos.map((p) => (
                        <article key={p.titulo} className="py-2">
                            <div>{p.titulo} — ${p.precio}</div>
                            {p.descripcion && <div className="text-sm">{p.descripcion}</div>}
                        </article>
                    ))}
                </section>
            ))}
        </div>
    )
}
