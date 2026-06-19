"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProductImage } from "@/lib/catalog";

function ArrowIcon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export function Gallery({
  images,
  title,
}: {
  images: ProductImage[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (dir: number) =>
      setOpen((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  return (
    <>
      {/* Rejilla de Mosaico (Masonry Grid) */}
      <div className="grid grid-cols-2 gap-3 [grid-auto-flow:dense] sm:grid-cols-3 sm:gap-4 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[190px]">
        {images.map((img, i) => {
          const ratio = img.w / img.h;
          let spanClass = "col-span-1 row-span-1"; // Por defecto cuadrado / estándar

          if (images.length > 3) {
            if (ratio >= 1.45) {
              // Muy horizontal: Ocupa 2 columnas en pantallas sm+ y 1 fila
              spanClass = "col-span-1 sm:col-span-2 row-span-1";
            } else if (ratio <= 0.72) {
              // Muy vertical: Ocupa 1 columna y 2 filas
              spanClass = "col-span-1 row-span-2";
            }
          } else {
            // Optimización para pocos elementos: evitar col-span-2 para prevenir huecos
            if (ratio <= 0.75) {
              spanClass = "col-span-1 row-span-2";
            }
          }

          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpen(i)}
              className={`shot group relative block w-full h-full overflow-hidden rounded-[14px] border border-border-1 bg-surface-1 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)] focus:outline-none focus:ring-2 focus:ring-brand-strong ${spanClass}`}
              aria-label={`Ver imagen ${i + 1} de ${title}`}
            >
              <Image
                src={img.src}
                alt={`${title} — imagen ${i + 1}`}
                fill
                unoptimized
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority={i < 4}
              />

              {/* Overlay sutil de Hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Botón de Zoom */}
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-white/90 text-ink-1 shadow-md backdrop-blur-sm transition-transform group-hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    className="size-4"
                    aria-hidden="true"
                  >
                    <path d="M21 21l-4.5-4.5M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM11 8v6M8 11h6" />
                  </svg>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Lightbox / Visor de Imagen */}
      {open !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${title}`}
        >
          {/* Fondo oscuro con desenfoque */}
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute inset-0 cursor-default bg-black/85 backdrop-blur-sm transition-opacity"
          />

          {/* Botones de Navegación de Galería */}
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Cerrar"
          >
            <ArrowIcon d="M6 6l12 12M18 6 6 18" />
          </button>
          <button
            type="button"
            onClick={() => move(-1)}
            className="absolute left-3 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Imagen anterior"
          >
            <ArrowIcon d="M15 6l-6 6 6 6" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="absolute right-3 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Imagen siguiente"
          >
            <ArrowIcon d="M9 6l6 6-6 6" />
          </button>

          {/* Imagen y Pie de Foto */}
          <figure className="relative z-[5] flex flex-col items-center max-h-[90vh] max-w-[94vw]">
            <div className="relative max-h-[80vh] w-auto overflow-hidden rounded-xl bg-black/20">
              <Image
                src={images[open].src}
                alt={`${title} — imagen ${open + 1}`}
                width={images[open].w}
                height={images[open].h}
                unoptimized
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 rounded-full bg-black/60 px-4 py-1.5 text-center text-xs font-semibold text-white/90 backdrop-blur-md">
              {title} · <span className="text-brand font-bold">{open + 1}</span>{" "}
              / {images.length}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
