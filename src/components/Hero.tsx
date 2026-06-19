import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/anim/CountUp";
import { SplitText } from "@/components/anim/SplitText";
import { Icon } from "@/components/Icon";

const shots = [
  { src: "/catalogo/acrilico-led/01.png", ratio: "3/4" },
  { src: "/catalogo/visibilidad-de-marca/01.png", ratio: "4/3" },
  { src: "/catalogo/muebles-publicitarios/01.png", ratio: "4/3" },
  { src: "/catalogo/toldos-retractiles/01.png", ratio: "3/4" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] size-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--brand-soft) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-2 bg-surface-1 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-2 shadow-[var(--shadow-sm)]">
            <span className="size-2 rounded-full bg-brand-strong" />
            Fábrica de productos publicitarios
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-1 sm:text-5xl lg:text-6xl">
            <SplitText text="Tú lo imaginas," />
            <br />
            <SplitText text="nosotros lo " delay={70} />
            <span className="brand-underline">creamos.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
            En Coinval fabricamos muebles publicitarios, avisos en acrílico y
            LED, material POP, rotulación vehicular, toldos y productos
            personalizados para dar visibilidad y activar tu marca.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-ink shadow-[var(--shadow-sm)] transition-transform hover:-translate-y-0.5"
            >
              Ver catálogo
              <Icon name="arrow" className="size-4" />
            </Link>
            <Link
              href="/#proposito"
              className="inline-flex items-center gap-2 rounded-full border border-border-2 bg-surface-1 px-6 py-3 text-sm font-semibold text-ink-1 transition-colors hover:bg-surface-2"
            >
              Conoce la empresa
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="font-display text-3xl font-extrabold text-ink-1">
                <CountUp to={13} />
              </dt>
              <dd className="text-xs font-medium uppercase tracking-wide text-ink-3">
                Líneas de producto
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-extrabold text-ink-1">
                <CountUp to={81} suffix="+" />
              </dt>
              <dd className="text-xs font-medium uppercase tracking-wide text-ink-3">
                Productos en catálogo
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-extrabold text-ink-1">
                100%
              </dt>
              <dd className="text-xs font-medium uppercase tracking-wide text-ink-3">
                Fabricación a la medida
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {shots.slice(0, 2).map((s) => (
                <div
                  key={s.src}
                  className="relative overflow-hidden rounded-[16px] border border-border-1 bg-surface-2 shadow-[var(--shadow-md)]"
                  style={{ aspectRatio: s.ratio }}
                >
                  <Image
                    src={s.src}
                    alt="Producto Coinval"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {shots.slice(2).map((s) => (
                <div
                  key={s.src}
                  className="relative overflow-hidden rounded-[16px] border border-border-1 bg-surface-2 shadow-[var(--shadow-md)]"
                  style={{ aspectRatio: s.ratio }}
                >
                  <Image
                    src={s.src}
                    alt="Producto Coinval"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border-2 bg-surface-1 px-4 py-2 text-xs font-semibold text-ink-1 shadow-[var(--shadow-md)]">
            <span className="tape size-3 rounded-sm" />
            Activación de marca de principio a fin
          </div>
        </div>
      </div>
    </section>
  );
}
