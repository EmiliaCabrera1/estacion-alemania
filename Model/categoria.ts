export const CATEGORIAS = [{ name: 'carnes', es:'Carnes', en:'Meats'}, 
  { name: 'regional', es:'Regional', en:'Local'},
  { name: 'pastas', es:'Pastas', en:'Pasta'},
  { name: 'cafeteria', es:'Cafeteria', en:'Coffee & Snacks'},
  { name: 'bebida', es:'Bebidas', en:'Drinks'},
  { name: 'postre', es:'Postres', en:'Desserts'},
  { name: 'guarnicion', es:'Guarnicion', en:'Side Dishes'}]

export type Categoria = (typeof CATEGORIAS)[number];