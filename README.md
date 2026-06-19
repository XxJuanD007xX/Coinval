# Coinval — Sitio web de catálogo

Landing de una sola página para **Coinval**, fabricantes de productos
publicitarios y de activación de marca. Construida con Next.js 16, React 19,
Tailwind CSS v4 y Biome.

## Desarrollo

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # build de producción
bun run lint     # Biome
```

## Estructura

- `src/app/globals.css` — tokens de color (tema amarillo), tipografías y
  animaciones (reveal, split text, spotlight, zoom de galería).
- `src/app/layout.tsx` — fuentes (Sora + Inter) y metadatos.
- `src/app/page.tsx` — composición de la página.
- `src/components/` — secciones: Header, Hero, Catálogo (galería con lightbox),
  ¿Por qué Coinval?, Nosotros, Clientes, Contacto y Footer.
- `src/components/anim/` — componentes animados inspirados en reactbits.dev:
  `Reveal` (animated content), `CountUp`, `SplitText`, `SpotlightCard`.
- `src/lib/catalog.ts` — datos de las 13 líneas de producto, **autogenerado**
  con las 81 imágenes reales del catálogo.

## Imágenes

Las **81 fotos reales** del catálogo se extrajeron del archivo
`CATALOGO DE PRODUCTOS COINVAL - 2026.pptm` y viven en
`public/catalogo/<categoria>/NN.png`. El logo oficial está en
`public/logo-coinval.png`.

Para cambiar o agregar fotos, reemplaza/añade archivos en esas carpetas y
actualiza el arreglo `images` de la categoría en `src/lib/catalog.ts`.

## Logos de clientes

Están en `public/clientes/` como SVG (`coca-cola.svg`, `popsy.svg`,
`kokoriko.svg`, `sonesta.svg`). Son **versiones tipográficas** aproximadas
listas para usar; si tienes los logotipos oficiales en SVG/PNG, reemplaza esos
archivos (manteniendo el nombre) y se mostrarán automáticamente.

## Datos de contacto

Los teléfonos, correo, dirección y redes en `src/components/Contact.tsx` y el
footer son **placeholders**. Reemplázalos por los datos reales de Coinval.
