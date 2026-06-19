"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import type { Category } from "@/lib/catalog";

export function CatalogNav({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState(categories[0]?.slug ?? "");
  const barRef = useRef<HTMLDivElement | null>(null);

  // scroll-spy: marca la categoría visible
  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.slug))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-128px 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    for (const s of sections) io.observe(s);
    return () => io.disconnect();
  }, [categories]);

  // mantiene visible el chip activo dentro de la barra
  useEffect(() => {
    const el = barRef.current?.querySelector<HTMLElement>(
      `[data-slug="${active}"]`,
    );
    el?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="sticky top-16 z-40 -mx-5 mb-12 border-y border-border-1 bg-bg/90 px-5 py-3 backdrop-blur-md lg:-mx-8 lg:px-8">
      <div
        ref={barRef}
        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c, i) => {
          const isActive = c.slug === active;
          return (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              data-slug={c.slug}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-brand-strong bg-brand text-brand-ink"
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
              <Icon
                name={c.icon}
                className={isActive ? "size-3.5" : "size-3.5 text-brand-strong"}
              />
              {c.title.split(" ").slice(0, 3).join(" ")}
            </a>
          );
        })}
      </div>
    </div>
  );
}
