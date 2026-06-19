import Image from "next/image";

/** Logo oficial de Coinval (extraído del catálogo). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-coinval.png"
      alt="Coinval"
      width={403}
      height={152}
      priority
      className={className}
    />
  );
}
