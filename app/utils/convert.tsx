export function formatARS(value: number, { decimals = 0 } = {}) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}
