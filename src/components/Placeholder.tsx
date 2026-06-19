import Image from "next/image";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/lib/catalog";

type Props = {
  /** ruta opcional de la imagen final; si se omite, se muestra el espacio reservado */
  src?: string;
  alt?: string;
  icon?: IconName;
  label?: string;
  /** relación de aspecto, p. ej. "4/3", "1/1", "16/9" */
  ratio?: string;
  className?: string;
};

/**
 * Espacio reservado para una imagen.
 * Cuando el cliente coloque la foto real, pasa `src` (ruta dentro de /public,
 * p. ej. "/catalogo/acrilico-y-led-1.jpg") y se mostrará en lugar del marcador.
 */
export function Placeholder({
  src,
  alt = "",
  icon,
  label,
  ratio = "4/3",
  className = "",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-[14px] border border-border-1 bg-surface-2 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--ink-1) 0 1px, transparent 1px 11px)",
            }}
          />
          {icon ? (
            <span className="flex size-11 items-center justify-center rounded-full bg-surface-1 text-brand-strong shadow-[var(--shadow-sm)]">
              <Icon name={icon} className="size-5" />
            </span>
          ) : null}
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-4">
            {label ?? "Espacio para imagen"}
          </span>
        </div>
      )}
    </div>
  );
}
