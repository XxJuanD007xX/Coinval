import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Coinval — Fabricantes de productos publicitarios y activación de marca",
  description:
    "Coinval fabrica muebles publicitarios, avisos en acrílico y LED, material POP, rotulación vehicular, toldos y productos personalizados. Tú lo imaginas, nosotros lo creamos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg">{children}</body>
    </html>
  );
}
