// AUTOGENERADO desde 'CATALOGO DE PRODUCTOS COINVAL - 2026.pptm'.
// Imágenes reales en /public/catalogo/<slug>/. 81 fotos en 13 categorías.

export type ProductImage = { src: string; w: number; h: number };

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  items: string[];
  icon: IconName;
  images: ProductImage[];
};

export type IconName =
  | "mueble"
  | "tablero"
  | "visibilidad"
  | "evento"
  | "puff"
  | "remodelacion"
  | "pos"
  | "acrilico"
  | "vehiculo"
  | "personalizado"
  | "toldo"
  | "navidad";

export const categories: Category[] = [
  {
    slug: "juegos-de-mesa",
    title: "Juegos de mesa con parasol en madera teca",
    tagline:
      "Juegos de mesa fabricados en madera teca con parasol, ideales para activaciones de marca al aire libre.",
    items: ["Madera teca", "Parasol", "Exteriores"],
    icon: "mueble",
    images: [
      { src: "/catalogo/juegos-de-mesa/01.png", w: 411, h: 419 },
      { src: "/catalogo/juegos-de-mesa/02.png", w: 542, h: 183 },
      { src: "/catalogo/juegos-de-mesa/03.png", w: 469, h: 273 },
    ],
  },
  {
    slug: "muebles-publicitarios",
    title: "Muebles publicitarios y de activación de marca",
    tagline:
      "Mobiliario a la medida para activar tu marca en cualquier espacio y punto de venta.",
    items: ["Mobiliario de marca", "Activación BTL", "Stands"],
    icon: "mueble",
    images: [
      { src: "/catalogo/muebles-publicitarios/01.png", w: 350, h: 461 },
      { src: "/catalogo/muebles-publicitarios/02.png", w: 648, h: 487 },
      { src: "/catalogo/muebles-publicitarios/03.png", w: 626, h: 341 },
      { src: "/catalogo/muebles-publicitarios/04.png", w: 900, h: 1600 },
      { src: "/catalogo/muebles-publicitarios/05.png", w: 1599, h: 899 },
      { src: "/catalogo/muebles-publicitarios/06.png", w: 768, h: 1024 },
      { src: "/catalogo/muebles-publicitarios/07.png", w: 768, h: 1024 },
    ],
  },
  {
    slug: "tableros-atriles",
    title: "Tableros, atriles y muebles en metal o madera",
    tagline:
      "Tableros, atriles y todo tipo de muebles metálicos y/o en madera fabricados a tu medida.",
    items: ["Tableros", "Atriles", "Metal y madera"],
    icon: "tablero",
    images: [
      { src: "/catalogo/tableros-atriles/01.png", w: 543, h: 500 },
      { src: "/catalogo/tableros-atriles/02.png", w: 279, h: 505 },
      { src: "/catalogo/tableros-atriles/03.png", w: 209, h: 387 },
    ],
  },
  {
    slug: "visibilidad-de-marca",
    title: "Productos de visibilidad de marca",
    tagline:
      "Exhibidores y displays pensados para que tu marca se vea y se recuerde en el punto de venta.",
    items: ["Exhibidores", "Displays", "Punto de venta"],
    icon: "visibilidad",
    images: [
      { src: "/catalogo/visibilidad-de-marca/01.png", w: 504, h: 331 },
      { src: "/catalogo/visibilidad-de-marca/02.png", w: 403, h: 337 },
      { src: "/catalogo/visibilidad-de-marca/03.png", w: 519, h: 307 },
      { src: "/catalogo/visibilidad-de-marca/04.png", w: 511, h: 433 },
      { src: "/catalogo/visibilidad-de-marca/05.png", w: 415, h: 435 },
      { src: "/catalogo/visibilidad-de-marca/06.png", w: 373, h: 394 },
      { src: "/catalogo/visibilidad-de-marca/07.png", w: 393, h: 517 },
      { src: "/catalogo/visibilidad-de-marca/08.png", w: 338, h: 301 },
      { src: "/catalogo/visibilidad-de-marca/09.png", w: 318, h: 459 },
    ],
  },
  {
    slug: "eventos-tematicos",
    title: "Eventos temáticos con activación de marca",
    tagline:
      "Producción y ambientación de eventos temáticos para activar tu marca con impacto.",
    items: ["Ambientación", "Activaciones", "Montajes"],
    icon: "evento",
    images: [
      { src: "/catalogo/eventos-tematicos/01.png", w: 420, h: 320 },
      { src: "/catalogo/eventos-tematicos/02.png", w: 569, h: 431 },
    ],
  },
  {
    slug: "puff-mobiliario",
    title: "Puff, cojines y mobiliario de marca",
    tagline:
      "Mobiliario blando y cómodo personalizado con la identidad de tu marca.",
    items: ["Puff", "Cojines", "Mobiliario"],
    icon: "puff",
    images: [
      { src: "/catalogo/puff-mobiliario/01.png", w: 372, h: 490 },
      { src: "/catalogo/puff-mobiliario/02.png", w: 353, h: 355 },
      { src: "/catalogo/puff-mobiliario/03.png", w: 374, h: 493 },
      { src: "/catalogo/puff-mobiliario/04.png", w: 368, h: 341 },
      { src: "/catalogo/puff-mobiliario/05.png", w: 328, h: 303 },
      { src: "/catalogo/puff-mobiliario/06.png", w: 304, h: 268 },
      { src: "/catalogo/puff-mobiliario/07.png", w: 569, h: 431 },
      { src: "/catalogo/puff-mobiliario/08.png", w: 455, h: 605 },
    ],
  },
  {
    slug: "remodelaciones",
    title: "Remodelaciones y adecuaciones locativas",
    tagline:
      "Transformamos y adecuamos tu local comercial para potenciar la experiencia de marca.",
    items: ["Adecuaciones", "Remodelación", "Obra y acabados"],
    icon: "remodelacion",
    images: [
      { src: "/catalogo/remodelaciones/01.png", w: 438, h: 242 },
      { src: "/catalogo/remodelaciones/02.png", w: 246, h: 189 },
      { src: "/catalogo/remodelaciones/03.png", w: 398, h: 320 },
      { src: "/catalogo/remodelaciones/04.png", w: 551, h: 372 },
      { src: "/catalogo/remodelaciones/05.png", w: 549, h: 372 },
      { src: "/catalogo/remodelaciones/06.png", w: 382, h: 261 },
    ],
  },
  {
    slug: "acrilico-led",
    title: "Material en acrílico y avisos luminosos LED",
    tagline:
      "Material publicitario en acrílico y avisos luminosos tipo LED de alto impacto.",
    items: ["Acrílico", "Avisos LED", "Letras volumétricas"],
    icon: "acrilico",
    images: [
      { src: "/catalogo/acrilico-led/01.png", w: 269, h: 362 },
      { src: "/catalogo/acrilico-led/02.png", w: 340, h: 352 },
      { src: "/catalogo/acrilico-led/03.png", w: 272, h: 313 },
      { src: "/catalogo/acrilico-led/04.png", w: 377, h: 411 },
      { src: "/catalogo/acrilico-led/05.png", w: 521, h: 490 },
    ],
  },
  {
    slug: "rotulacion-vehicular",
    title: "Rotulación vehicular en acrílico adhesivo",
    tagline:
      "Paletas e imágenes en acrílico adhesivo para vehículos: lleva tu marca a la calle.",
    items: ["Paletas", "Acrílico adhesivo", "Flotas"],
    icon: "vehiculo",
    images: [
      { src: "/catalogo/rotulacion-vehicular/01.png", w: 355, h: 469 },
      { src: "/catalogo/rotulacion-vehicular/02.png", w: 615, h: 328 },
      { src: "/catalogo/rotulacion-vehicular/03.png", w: 426, h: 443 },
    ],
  },
  {
    slug: "personalizados",
    title: "Tú lo imaginas, nosotros lo creamos",
    tagline:
      "Piezas personalizadas a la medida: servilleteros, tropezones, balones, tilines, habladores, bandejas, protectores de calor, mezcladores, materas, gorras, gorros y pines.",
    items: [
      "Servilleteros",
      "Tropezones",
      "Balones",
      "Habladores",
      "Bandejas",
      "Materas",
      "Gorras y gorros",
      "Pines",
    ],
    icon: "personalizado",
    images: [
      { src: "/catalogo/personalizados/01.png", w: 372, h: 255 },
      { src: "/catalogo/personalizados/02.png", w: 328, h: 218 },
      { src: "/catalogo/personalizados/03.png", w: 299, h: 347 },
      { src: "/catalogo/personalizados/04.png", w: 194, h: 228 },
      { src: "/catalogo/personalizados/05.png", w: 250, h: 313 },
      { src: "/catalogo/personalizados/06.png", w: 216, h: 314 },
      { src: "/catalogo/personalizados/07.png", w: 414, h: 179 },
      { src: "/catalogo/personalizados/08.png", w: 320, h: 198 },
      { src: "/catalogo/personalizados/09.png", w: 192, h: 184 },
      { src: "/catalogo/personalizados/10.png", w: 403, h: 152 },
      { src: "/catalogo/personalizados/11.png", w: 336, h: 336 },
      { src: "/catalogo/personalizados/12.png", w: 368, h: 368 },
      { src: "/catalogo/personalizados/13.png", w: 209, h: 241 },
      { src: "/catalogo/personalizados/14.png", w: 411, h: 566 },
      { src: "/catalogo/personalizados/15.png", w: 448, h: 304 },
      { src: "/catalogo/personalizados/16.png", w: 483, h: 370 },
      { src: "/catalogo/personalizados/17.png", w: 399, h: 341 },
    ],
  },
  {
    slug: "toldos-retractiles",
    title: "Toldos retráctiles",
    tagline:
      "Fabricamos todo tipo de toldos retráctiles para locales comerciales, publicitarios y playeros.",
    items: ["Locales", "Publicitarios", "Playeros"],
    icon: "toldo",
    images: [
      { src: "/catalogo/toldos-retractiles/01.png", w: 393, h: 347 },
      { src: "/catalogo/toldos-retractiles/02.png", w: 436, h: 313 },
      { src: "/catalogo/toldos-retractiles/03.png", w: 486, h: 280 },
      { src: "/catalogo/toldos-retractiles/04.png", w: 369, h: 369 },
      { src: "/catalogo/toldos-retractiles/05.png", w: 504, h: 383 },
    ],
  },
  {
    slug: "productos-navidenos",
    title: "Productos navideños",
    tagline:
      "Decoración y productos navideños para vestir tu marca en temporada.",
    items: ["Decoración", "Temporada", "Ambientación"],
    icon: "navidad",
    images: [
      { src: "/catalogo/productos-navidenos/01.png", w: 368, h: 368 },
      { src: "/catalogo/productos-navidenos/02.png", w: 399, h: 399 },
      { src: "/catalogo/productos-navidenos/03.png", w: 372, h: 490 },
      { src: "/catalogo/productos-navidenos/04.png", w: 388, h: 478 },
      { src: "/catalogo/productos-navidenos/05.png", w: 619, h: 529 },
      { src: "/catalogo/productos-navidenos/06.png", w: 569, h: 353 },
      { src: "/catalogo/productos-navidenos/07.png", w: 437, h: 334 },
    ],
  },
];

export const totalImages = categories.reduce((n, c) => n + c.images.length, 0);

export const clients = [
  { name: "Coca-Cola", logo: "/clientes/coca-cola.svg" },
  { name: "Popsy", logo: "/clientes/popsy.svg" },
  { name: "Kokoriko", logo: "/clientes/kokoriko.svg" },
  { name: "Hotel Sonesta", logo: "/clientes/sonesta.svg" },
];
