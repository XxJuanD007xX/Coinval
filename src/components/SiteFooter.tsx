import Link from "next/link";
import { Logo } from "@/components/Logo";

const nav = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#por-que", label: "¿Por qué Coinval?" },
  { href: "/#proposito", label: "Nosotros" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-1 bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo className="h-9 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-ink-3">
              Fabricantes de productos publicitarios y de activación de marca.
              Tú lo imaginas, nosotros lo creamos.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-ink-3">
              Navegación
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-2 transition-colors hover:text-ink-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border-1 pt-6 text-xs text-ink-3">
          © {year} Coinval. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
