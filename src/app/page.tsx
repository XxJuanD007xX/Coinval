import { Catalog } from "@/components/Catalog";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Purpose } from "@/components/Purpose";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Catalog />
        <WhyUs />
        <Purpose />
        <Clients />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
