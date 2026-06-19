"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/anim/Reveal";
import { Gallery } from "@/components/Gallery";
import { Icon } from "@/components/Icon";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { categories } from "@/lib/catalog";

export default function CatalogoPage() {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const barRef = useRef<HTMLDivElement | null>(null);

  // Leer parámetro de consulta "?linea=" en el montaje del cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("linea");
      if (cat && (cat === "todos" || categories.some((c) => c.slug === cat))) {
        setActiveTab(cat);
      }
    }
  }, []);

  // Mantener el botón de categoría activo visible en el scroll móvil
  useEffect(() => {
    if (barRef.current) {
      const activeBtn = barRef.current.querySelector(
        `[data-slug="${activeTab}"]`,
      );
      activeBtn?.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  const activeCategory = categories.find((c) => c.slug === activeTab);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-bg">
        {/* Cabecera del Catálogo */}
        <section className="border-b border-border-1 bg-surface-2 py-10 md:py-16">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-3 hover:text-brand-strong transition-colors mb-5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                className="size-3.5"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">
              <span className="tape size-3.5 rounded-sm" />
              <span>Coinval Taller de Ideas</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-1 sm:text-5xl">
              Catálogo de Soluciones
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2">
              Explora nuestras 13 líneas de productos publicitarios y mobiliario
              de activación de marca. Diseñamos y fabricamos cada estructura a
              la medida exacta de tu proyecto en madera teca, acrílico, metal y
              LED.
            </p>
          </div>
        </section>

        {/* Contenedor Principal (Navegación + Galería) */}
        <section className="mx-auto max-w-6xl px-5 py-8 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            {/* 1. Navegación / Filtros */}
            <aside className="relative">
              {/* Navegación para Móviles/Tablets (Sticky superior deslizable) */}
              <div className="sticky top-16 z-30 -mx-5 border-b border-border-1 bg-bg/95 px-5 py-3.5 backdrop-blur-md lg:hidden">
                <div
                  ref={barRef}
                  className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab("todos")}
                    data-slug="todos"
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-bold transition-all ${
                      activeTab === "todos"
                        ? "border-brand-strong bg-brand text-brand-ink shadow-sm"
                        : "border-border-2 bg-surface-1 text-ink-2 hover:border-border-3 hover:text-ink-1"
                    }`}
                  >
                    <span
                      className={`grid size-4 place-items-center rounded-full text-[9px] font-bold ${
                        activeTab === "todos"
                          ? "bg-brand-ink/15 text-brand-ink"
                          : "bg-surface-3 text-ink-3"
                      }`}
                    >
                      ★
                    </span>
                    Ver Todas (
                    {categories.reduce((acc, c) => acc + c.images.length, 0)})
                  </button>

                  {categories.map((c, i) => {
                    const isActive = c.slug === activeTab;
                    return (
                      <button
                        key={c.slug}
                        type="button"
                        onClick={() => setActiveTab(c.slug)}
                        data-slug={c.slug}
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-bold transition-all ${
                          isActive
                            ? "border-brand-strong bg-brand text-brand-ink shadow-sm"
                            : "border-border-2 bg-surface-1 text-ink-2 hover:border-border-3 hover:text-ink-1"
                        }`}
                      >
                        <span
                          className={`grid size-4 place-items-center rounded-full text-[9px] font-bold ${
                            isActive
                              ? "bg-brand-ink/15 text-brand-ink"
                              : "bg-surface-3 text-ink-3"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <Icon name={c.icon} className="size-3.5" />
                        {c.title.split(" ").slice(0, 3).join(" ")} (
                        {c.images.length})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navegación para Desktop (Sidebar Sticky Vertical) */}
              <div className="sticky top-24 hidden flex-col gap-2 lg:flex">
                <h2 className="px-3 text-xs font-bold uppercase tracking-wider text-ink-3">
                  Líneas de Producción
                </h2>

                <nav className="mt-3 flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("todos")}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-xs font-bold transition-all border ${
                      activeTab === "todos"
                        ? "border-brand bg-brand-soft/50 text-ink-1 font-extrabold shadow-sm"
                        : "border-transparent text-ink-2 hover:bg-surface-2 hover:text-ink-1"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex size-7 items-center justify-center rounded-lg bg-surface-3 text-ink-1 text-xs">
                        ★
                      </span>
                      <span>Ver todas las líneas</span>
                    </div>
                    <span className="rounded-full bg-surface-3 px-2 py-0.5 text-[10px] font-semibold text-ink-3">
                      {categories.reduce((acc, c) => acc + c.images.length, 0)}
                    </span>
                  </button>

                  {categories.map((c) => {
                    const isActive = c.slug === activeTab;
                    return (
                      <button
                        key={c.slug}
                        type="button"
                        onClick={() => setActiveTab(c.slug)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-xs font-bold transition-all border ${
                          isActive
                            ? "border-brand bg-brand-soft/50 text-ink-1 font-extrabold shadow-sm"
                            : "border-transparent text-ink-2 hover:bg-surface-2 hover:text-ink-1"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-3 text-ink-2">
                            <Icon name={c.icon} className="size-4" />
                          </span>
                          <span className="truncate" title={c.title}>
                            {c.title}
                          </span>
                        </div>
                        <span className="ml-2 shrink-0 rounded-full bg-surface-3 px-2 py-0.5 text-[10px] font-semibold text-ink-3">
                          {c.images.length}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* 2. Contenido de Galerías */}
            <div className="min-w-0">
              {activeTab === "todos" ? (
                // Mostrar todas las categorías
                <div className="flex flex-col gap-16 lg:gap-24">
                  {categories.map((c, i) => (
                    <article
                      key={c.slug}
                      className="border-b border-border-1 pb-16 last:border-0 last:pb-0"
                    >
                      <Reveal className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold tracking-wider text-ink-3 uppercase">
                              Línea L-{String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="size-1.5 rounded-full bg-brand" />
                            <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-strong">
                              <Icon name={c.icon} className="size-3.5" />
                              {c.images.length} fotos
                            </span>
                          </div>
                          <h2 className="mt-2 font-display text-xl font-extrabold leading-tight text-ink-1 sm:text-2xl">
                            {c.title}
                          </h2>
                          <p className="mt-2 max-w-xl text-xs leading-relaxed text-ink-2">
                            {c.tagline}
                          </p>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5 md:mt-0">
                          {c.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-border-1 bg-surface-2 px-2.5 py-1 text-[10px] font-semibold text-ink-3"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </Reveal>

                      <Reveal delay={40}>
                        <Gallery images={c.images} title={c.title} />
                      </Reveal>
                    </article>
                  ))}
                </div>
              ) : (
                // Mostrar solo la categoría activa
                activeCategory && (
                  <article className="min-h-[500px]">
                    <div className="mb-8 rounded-2xl border border-border-2 bg-surface-1 p-6 md:p-8 shadow-[var(--shadow-sm)]">
                      <div className="flex items-center gap-3">
                        <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand-strong">
                          <Icon name={activeCategory.icon} className="size-6" />
                        </span>
                        <div>
                          <span className="text-xs font-bold tracking-wider text-ink-3 uppercase">
                            Categoría Seleccionada ·{" "}
                            {activeCategory.images.length} fotos
                          </span>
                          <h2 className="font-display text-2xl font-extrabold leading-tight text-ink-1 sm:text-3xl">
                            {activeCategory.title}
                          </h2>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-ink-2">
                        {activeCategory.tagline}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="text-xs font-bold uppercase text-ink-3 self-center mr-2">
                          Materiales:
                        </span>
                        {activeCategory.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border-1 bg-surface-2 px-3 py-1 text-xs font-semibold text-ink-2"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Gallery
                      images={activeCategory.images}
                      title={activeCategory.title}
                    />
                  </article>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
