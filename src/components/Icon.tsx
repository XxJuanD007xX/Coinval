import type { IconName } from "@/lib/catalog";

type Props = {
  name: IconName | UtilityIcon;
  className?: string;
};

export type UtilityIcon =
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "arrow"
  | "check"
  | "star"
  | "clock"
  | "shield"
  | "chat";

// Un solo set de iconos: trazo de 1.6, esquinas redondeadas, sin relleno.
const paths: Record<string, React.ReactNode> = {
  mueble: (
    <>
      <path d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M3 10h18v5H3z" />
      <path d="M5 15v4M19 15v4" />
    </>
  ),
  tablero: (
    <>
      <rect x="4" y="4" width="16" height="11" rx="1.5" />
      <path d="M12 15v5M8 20h8" />
    </>
  ),
  visibilidad: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  evento: (
    <>
      <path d="M5 21l3-12 8 3-3 9" />
      <path d="M8 9l-3 3M16 12l4-1" />
      <circle cx="9.5" cy="5.5" r="2" />
    </>
  ),
  puff: (
    <>
      <path d="M4 14c0-3 3.6-5 8-5s8 2 8 5-3.6 5-8 5-8-2-8-5Z" />
      <path d="M4 14v2c0 2.8 3.6 4 8 4s8-1.2 8-4v-2" />
    </>
  ),
  remodelacion: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M14 14l3 3M17 14l-3 3" />
    </>
  ),
  pos: (
    <>
      <rect x="4" y="4" width="16" height="13" rx="1.5" />
      <path d="M4 9h16M9 13h6" />
      <path d="M9 20h6" />
    </>
  ),
  acrilico: (
    <>
      <rect x="5" y="3" width="14" height="14" rx="1.5" />
      <path d="M12 17v4M8 21h8" />
      <path d="M9 7h6M9 11h4" />
    </>
  ),
  vehiculo: (
    <>
      <path d="M3 13l2-5h11l3 5" />
      <path d="M3 13h18v4H3z" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </>
  ),
  personalizado: (
    <>
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.7l5.4-.8Z" />
    </>
  ),
  toldo: (
    <>
      <path d="M3 4h18v4H3z" />
      <path d="M3 8c2 4 4 4 6 0 2 4 4 4 6 0 2 4 4 4 6 0" />
      <path d="M12 8v12M9 20h6" />
    </>
  ),
  navidad: (
    <>
      <path d="M12 3 6 11h12L12 3Z" />
      <path d="M12 7 8 13h8L12 7Z" />
      <path d="M11 13h2v4h-2zM10 21h4" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.4a11 11 0 0 0 5.1 5.1l1.4-2L18 18v3a1 1 0 0 1-1 1A15 15 0 0 1 3 8a1 1 0 0 1 1-1Z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.4-4A8 8 0 1 1 9 19.3L4 20Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.2-2-1-.9.8c-1.1-.5-2-1.4-2.5-2.5l.8-.9-1-2L9 9.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5 10 17l9-10" />,
  star: (
    <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.7l5.4-.8Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v10H9l-5 4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
};

export function Icon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
