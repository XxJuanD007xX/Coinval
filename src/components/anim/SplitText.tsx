"use client";

/** Split Text (reactbits.dev): cada palabra entra escalonada al cargar. */
export function SplitText({
  text,
  className = "",
  delay = 70,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: lista estática de palabras
          key={i}
          className="split-word"
          style={{ animationDelay: `${i * delay}ms` }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
