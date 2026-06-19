import Image from "next/image";
import { Reveal } from "@/components/anim/Reveal";
import { Icon } from "@/components/Icon";

const pillars = [
  {
    tag: "Misión",
    body: "Potenciar los proyectos de todos los emprendedores y empresarios y hacerlos crecer, sea cual sea el punto en el que se encuentren.",
  },
  {
    tag: "Visión",
    body: "Ser un referente como fabricantes de productos publicitarios, estar continuamente a la vanguardia y ayudar a empresarios y emprendedores a cumplir sus metas y alcanzar la cima de su sector.",
  },
  {
    tag: "Valores",
    body: "Destacamos la comunicación y la profesionalidad ante todo, no solo con el cliente sino como cultura interna del equipo, estando a la vanguardia de las necesidades del mercado.",
  },
];

const photos = [
  { src: "/catalogo/eventos-tematicos/01.png", cls: "" },
  { src: "/catalogo/remodelaciones/01.png", cls: "mt-10" },
];

export function Purpose() {
  return (
    <section id="proposito" className="scroll-mt-20 py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="relative order-last lg:order-first">
          <div className="grid grid-cols-2 gap-4">
            {photos.map((p) => (
              <div
                key={p.src}
                className={`relative overflow-hidden rounded-[16px] border border-border-1 bg-surface-2 shadow-[var(--shadow-md)] ${p.cls}`}
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={p.src}
                  alt="Coinval"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="tape absolute -left-3 top-1/2 h-20 w-2 -translate-y-1/2 rounded-full"
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">
              Quiénes somos
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
              Hacemos crecer marcas con propósito
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.tag} delay={i * 90}>
                <div className="flex gap-4 rounded-[var(--radius-card)] border border-border-1 bg-surface-1 p-5">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-strong">
                    <Icon name="check" className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink-1">
                      {p.tag}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
