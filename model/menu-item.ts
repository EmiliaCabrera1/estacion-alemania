import type { Categoria } from "./categoria";

export interface MenuItem {
  id: number | null;
  nombre: string;
  categoria: Categoria['name'];
  descripcion: string;
  description: string;
  precio: number | null;
  vegetariano: boolean;
  sinTacc: boolean;
  onOff: boolean | null;
  foto: string | undefined;
}
