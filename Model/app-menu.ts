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
        url: "/contacto",
    },
    {
        id: 3,
        es: "Reservas",
        en: "Reservations",
        url: "/reservas",
    },
    {
        id: 4,
        es: "Ubicacion",
        en: "Location",
        url: "/ubicacion",
    },
    {
        id: 5,
        es: "Historia",
        en: "History",
        url: "/historia",
    },
    {
        id: 6,
        es: "Instagram",
        en: "Instagram",
        url: "https://www.instagram.com/estacionalemania/",
    },
    {
        id: 7,
        es: "Centro de Interpretacion",
        en: "Interpretation Center",
        url: "/centro-de-interpretacion",
    },
]

export default APP_MENU;
export type AppMenuItem = (typeof APP_MENU)[number];