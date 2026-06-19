import { Reveal } from "@/components/anim/Reveal";
import { Icon, type UtilityIcon } from "@/components/Icon";

/*
  DATOS DE CONTACTO — placeholders.
  Reemplaza los valores con la información real de Coinval.
*/
const details: { icon: UtilityIcon; label: string; value: string }[] = [
  { icon: "whatsapp", label: "WhatsApp", value: "315 883 9090" },
  { icon: "mail", label: "Correo", value: "coinval.comercial1@gmail.com" },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="overflow-hidden rounded-[28px] border border-border-2 bg-surface-1 shadow-[var(--shadow-md)]">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="relative p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="tape absolute left-0 top-0 h-1.5 w-full"
              />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">
                Contacto
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-1 sm:text-4xl">
                Datos de contacto
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-2">
                Estos son los datos de Coinval, productos publicitarias y de
                activación de marca.
              </p>
            </div>

            <div className="border-t border-border-1 bg-surface-2 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <ul className="flex flex-col gap-5">
                {details.map((d) => (
                  <li key={d.label} className="flex items-center gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-1 text-brand-strong shadow-[var(--shadow-sm)]">
                      <Icon name={d.icon} className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                        {d.label}
                      </span>
                      <span className="text-sm font-medium text-ink-1">
                        {d.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
