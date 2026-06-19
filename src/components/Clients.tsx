import Image from "next/image";
import { Reveal } from "@/components/anim/Reveal";
import { clients } from "@/lib/catalog";

export function Clients() {
  return (
    <section
      id="clientes"
      className="scroll-mt-20 border-y border-border-1 bg-ink-1 py-16 text-white"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Nuestros clientes
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Marcas líderes confían en lo que fabricamos
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <div className="flex h-28 items-center justify-center rounded-[var(--radius-card)] border border-white/10 bg-white px-6 transition-transform hover:-translate-y-1">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={200}
                  height={64}
                  unoptimized
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/55">
          Y muchas más marcas que han confiado en Coinval para activar sus
          productos.
        </p>
      </div>
    </section>
  );
}
