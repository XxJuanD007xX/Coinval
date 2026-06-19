import { Reveal } from "@/components/anim/Reveal";
import { SpotlightCard } from "@/components/anim/SpotlightCard";
import { Icon, type UtilityIcon } from "@/components/Icon";

const reasons: { icon: UtilityIcon; title: string; body: string }[] = [
  {
    icon: "star",
    title: "Experiencia",
    body: "Trayectoria fabricando soluciones publicitarias para marcas líderes como Coca-Cola, Popsy, Kokoriko y Hotel Sonesta entre otras marcas lideres.",
  },
  {
    icon: "chat",
    title: "Asesoría cercana",
    body: "Escuchamos las necesidades particulares de cada cliente para lograr la plena satisfacción y los mejores resultados.",
  },
  {
    icon: "shield",
    title: "Garantía",
    body: "Cada producto y servicio cuenta con una garantía de satisfacción respaldada por nuestro equipo.",
  },
  {
    icon: "clock",
    title: "Fabricación a la medida",
    body: "Producimos en acrílico, madera, metal y LED a la medida exacta de tu proyecto y tu espacio.",
  },
];

export function WhyUs() {
  return (
    <section
      id="por-que"
      className="scroll-mt-20 border-y border-border-1 bg-surface-2 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">
              ¿Por qué Coinval?
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
              Un aliado para potenciar tu marca
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-2">
            Destacamos la comunicación y la profesionalidad ante todo, estando a
            la vanguardia de las necesidades del mercado.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <SpotlightCard className="flex h-full flex-col rounded-[var(--radius-card)] border border-border-1 bg-surface-1 p-6 shadow-[var(--shadow-sm)]">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand text-brand-ink">
                  <Icon name={r.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-1">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {r.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
