const APP_MENU = [
  {
    id: 1,
    es: "Carta",
    en: "Menu",
    url: "/menu",
  },
  {
    id: 2,
    es: "Contacto",
    en: "Contact",
    url: process.env.NEXT_PUBLIC_URL_ESTACION_ALEMANIA_CONTACTO ?? "",
  },
  {
    id: 3,
    es: "Ubicacion",
    en: "Location",
    url: process.env.NEXT_PUBLIC_URL_MAPS ?? "",
  },
  {
    id: 4,
    es: "Historia",
    en: "History",
    url: "/historia",
  },
  {
    id: 5,
    es: "Instagram",
    en: "Instagram",
    url: process.env.NEXT_PUBLIC_URL_ESTACION_ALEMANIA_INSTAGRAM ?? "",
  },
  {
    id: 6,
    es: "Centro de Interpretacion",
    en: "Interpretation Center",
    url: "/centro-de-interpretacion",
  },
];

export default APP_MENU;
export type AppMenuItem = (typeof APP_MENU)[number];
