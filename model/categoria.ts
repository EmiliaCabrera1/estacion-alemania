export const CATEGORIAS = [
  { name: "cafeteria", es: "Cafeteria", en: "Coffee" },
  { name: "postre", es: "Postres", en: "Desserts" },
  { name: "bebida", es: "Bebidas", en: "Drinks" },
  { name: "regional", es: "Regional", en: "Local" },
  { name: "carnes", es: "Carnes", en: "Meats" },
  { name: "pastas", es: "Pastas", en: "Pasta" },
  { name: "guarnicion", es: "Guarnicion", en: "Side" },
];

export type Categoria = (typeof CATEGORIAS)[number];
