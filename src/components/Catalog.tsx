import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/anim/Reveal";
import { Icon } from "@/components/Icon";
import { categories } from "@/lib/catalog";

export function Catalog() {
  return (
    <section id="catalogo" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">
            Catálogo 2026
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
            Nuestras líneas de producto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-2">
            Trece líneas de producción para dar visibilidad, activar y hacer
            crecer tu marca. Cada pieza se fabrica a la medida de tu proyecto en
            madera, metal, acrílico y LED.
          </p>
        </Reveal>

        {/* Rejilla de Categorías del Catálogo */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => (
            <Reveal key={c.slug} delay={idx * 50}>
              <Link
                href={`/catalogo?linea=${c.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border-1 bg-surface-1 p-5 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-border-3 hover:shadow-[var(--shadow-md)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border-1 pb-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong transition-colors group-hover:bg-brand group-hover:text-brand-ink">
                      <Icon name={c.icon} className="size-6" />
                    </span>
                    <span className="font-display text-xs font-bold text-ink-4">
                      L-{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-extrabold text-ink-1 transition-colors group-hover:text-brand-strong">
                    {c.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-ink-3 line-clamp-2">
                    {c.tagline}
                  </p>

                  {/* Collage de Previsualización de Imágenes */}
                  <div className="mt-4 grid grid-cols-3 gap-1.5 h-16 overflow-hidden rounded-lg bg-surface-2 border border-border-1 p-1">
                    {c.images.slice(0, 3).map((img) => (
                      <div
                        key={img.src}
                        className="relative h-full w-full overflow-hidden rounded bg-surface-3"
                      >
                        <Image
                          src={img.src}
                          alt={`${c.title} preview`}
                          fill
                          unoptimized
                          sizes="10vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                    {/* Rellenar con placeholders si hay menos de 3 fotos */}
                    {Array.from({
                      length: Math.max(0, 3 - c.images.length),
                    }).map((_, idx) => (
                      <div
                        key={`empty-${c.slug}-${idx}`}
                        className="flex h-full w-full items-center justify-center rounded bg-surface-3 text-[9px] font-bold text-ink-4"
                      >
                        N/A
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border-1 pt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-ink-3">
                      {c.images.length}{" "}
                      {c.images.length === 1 ? "foto" : "fotos"}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-brand-strong group-hover:translate-x-1 transition-transform">
                      Ver catálogo
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        className="size-3.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Botón de Acción Principal para ir al catálogo completo */}
        <Reveal className="mt-16 flex justify-center">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2.5 rounded-full bg-ink-1 px-8 py-4 text-sm font-bold text-white shadow-[var(--shadow-md)] transition-transform hover:-translate-y-0.5 hover:bg-brand hover:text-brand-ink"
          >
            Explorar Catálogo Completo (81 Fotos)
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              className="size-4"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
