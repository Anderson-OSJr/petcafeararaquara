import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="home" className="relative pt-[150px] pb-24 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-6xl mx-auto px-7 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-[12.5px] font-semibold tracking-wide text-gold-dark mb-2.5">
              Portal das Tipuanas · Araraquara
            </span>
            <h1 className="text-4xl md:text-[44px] leading-tight max-w-[12ch] font-normal">
              Um endereço de bom gosto para você e seu companheiro.
            </h1>
            <p className="mt-4 text-lg max-w-[44ch]">
              No coração de um dos bairros mais desejados de Araraquara, o PetCafé reúne uma carta
              autoral e um espaço pensado para receber pessoas e seus pets com o mesmo cuidado.
            </p>
            <div className="flex gap-4 mt-7 flex-wrap">
              <Link
                href="/cardapio"
                className="px-6 py-3 rounded font-semibold text-sm bg-gold text-white hover:bg-gold-dark transition-colors"
              >
                Ver cardápio
              </Link>
              <a
                href="https://wa.me/5516992306451"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded font-semibold text-sm border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="mt-9 pt-6 border-t border-line flex gap-9 flex-wrap text-[13.5px] text-espresso-soft">
              <div>
                <strong className="block text-espresso text-[13px] mb-0.5">Horário</strong>
                Ter–sex, 8h–19h · Sáb, dom e feriado, 9h–18h
              </div>
              <div>
                <strong className="block text-espresso text-[13px] mb-0.5">Endereço</strong>
                Av. Luiz Dosualdo, 50 — Sala 7, Portal das Tipuanas
              </div>
            </div>
          </div>

          <div className="relative border border-gold p-2.5 rounded">
            <div className="relative aspect-[4/5] rounded overflow-hidden">
              <Image src="/images/facade.jpg" alt="Fachada do PetCafé" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="block font-serif italic text-lg mb-1">bons momentos</span>
                para você e para ele
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="bg-paper py-24">
        <div className="max-w-6xl mx-auto px-7">
          <h2 className="text-3xl mb-11">Feito com atenção, do primeiro gole ao último petisco</h2>
          <div className="grid md:grid-cols-3 border-t border-l border-line">
            {[
              {
                n: "01",
                title: "Pet friendly, sempre",
                text: "Seu companheiro tem lugar à mesa em qualquer dia, em qualquer horário — não é uma exceção, é a regra da casa.",
              },
              {
                n: "02",
                title: "Uma carta com identidade",
                text: "Espressos, coados na hora, frapês e sobremesas autorais — cada bebida com nome e personalidade próprios.",
              },
              {
                n: "03",
                title: "Um espaço para ficar",
                text: "Ambiente pensado para durar mais que um café rápido — conversa, descanso e boa companhia.",
              },
            ].map((f) => (
              <div key={f.n} className="border-r border-b border-line p-8">
                <span className="block font-serif italic text-gold text-xl mb-3.5">{f.n}</span>
                <h3 className="text-lg mb-1">{f.title}</h3>
                <p className="text-[14.5px]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOBRE ============ */}
      <section id="sobre">
        <div className="max-w-6xl mx-auto px-7 pt-24 text-center">
          <Logo className="w-[280px] max-w-[80%] mx-auto mb-7 text-gold-dark" />
          <span className="block text-[12.5px] font-semibold tracking-wide text-gold-dark mb-2.5">
            Nossa história
          </span>
          <h2 className="text-[32px] max-w-[16ch] mx-auto mb-2">
            Um café pensado para durar, e para incluir quem mais amamos.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-7 grid md:grid-cols-2 gap-16 items-center py-20">
          <div className="grid grid-cols-2 gap-1">
            <div className="col-span-2 relative aspect-video rounded overflow-hidden">
              <Image src="/images/window_plants.jpg" alt="Janela com plantas" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image src="/images/framed_art.jpg" alt="Detalhe de decoração" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image src="/images/dog_figurine.jpg" alt="Cantinho de decoração" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p>
              O PetCafé nasceu de uma vontade simples: um espaço onde ninguém precisa deixar seu
              companheiro esperando lá fora. Aqui, cães e gatos sentam à mesa com seus donos, e a carta
              foi pensada para agradar os dois lados da coleira.
            </p>
            <p>
              Inauguramos em setembro de 2026, na Av. Luiz Dosualdo, no Portal das Tipuanas — um bairro
              que já entende bem o que é bom gosto. Cada detalhe da casa, do cardápio ao acabamento do
              salão, foi escolhido para estar à altura da vizinhança.
            </p>
            <div className="my-7 py-7 border-t border-b border-line">
              <p className="font-serif italic text-2xl text-espresso m-0 leading-snug">
                &ldquo;Aqui todo amigo é bem-vindo.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GALERIA ============ */}
      <section id="galeria" className="bg-ivory py-24">
        <div className="max-w-6xl mx-auto px-7">
          <span className="block text-[12.5px] font-semibold tracking-wide text-gold-dark mb-2.5">
            Momentos
          </span>
          <h2 className="text-3xl mb-11">O espaço e seus visitantes</h2>
          <Gallery />
        </div>
      </section>
    </>
  );
}
