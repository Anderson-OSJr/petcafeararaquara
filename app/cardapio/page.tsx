import type { Metadata } from "next";
import Image from "next/image";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = { title: "Cardápio — PetCafé Araraquara" };

export default function CardapioPage() {
  return (
    <section className="pt-[150px] pb-24">
      <div className="max-w-6xl mx-auto px-7">
        <span className="block text-[12.5px] font-semibold tracking-wide text-gold-dark mb-2.5">A carta</span>
        <h2 className="text-3xl mb-11">Cardápio</h2>

        <div className="relative aspect-[21/8] rounded overflow-hidden mb-10">
          <Image src="/images/sobremesas.jpg" alt="Sobremesas do PetCafé" fill className="object-cover" />
        </div>

        <p className="text-[13px] text-espresso-soft opacity-75 mb-0">
          * consulte os valores no balcão ou pelo WhatsApp
        </p>

        <MenuTabs />

        <div className="mt-5 text-[12.5px] text-espresso-soft opacity-75 flex flex-wrap gap-4">
          <span>Sem leite</span>
          <span>Sem açúcar</span>
          <span>Drink autoral da casa</span>
          <span>Contém pimenta</span>
          <span>Contém nozes/castanhas</span>
        </div>
      </div>
    </section>
  );
}
