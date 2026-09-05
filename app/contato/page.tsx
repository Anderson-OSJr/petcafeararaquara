import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contato — PetCafé Araraquara" };

export default function ContatoPage() {
  return (
    <section className="pt-[150px] pb-24">
      <div className="max-w-6xl mx-auto px-7">
        <span className="block text-[12.5px] font-semibold tracking-wide text-gold-dark mb-2.5">
          Fale com a gente
        </span>
        <h2 className="text-3xl mb-11">Contato</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <ContactForm />

            <ul className="mt-8 list-none p-0 text-[14.5px]">
              <li className="flex items-center gap-3.5 py-3.5 border-b border-line">
                <span className="w-[38px] h-[38px] rounded flex items-center justify-center flex-shrink-0 bg-gold-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#332215" strokeWidth="1.6">
                    <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.3" />
                  </svg>
                </span>
                <div>
                  <strong className="block text-espresso font-bold mb-0.5">Endereço</strong>
                  <a
                    href="https://maps.app.goo.gl/tGwGhzcX7caYPNwA8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso-soft border-b border-transparent hover:text-gold-dark hover:border-gold-dark"
                  >
                    Av. Luiz Dosualdo, 50, Sala 7, Portal das Tipuanas, Araraquara/SP
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3.5 py-3.5 border-b border-line">
                <span className="w-[38px] h-[38px] rounded flex items-center justify-center flex-shrink-0 bg-[#25D366]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18a7.9 7.9 0 0 1-4.24-1.22l-.3-.18-2.98.78.8-2.9-.2-.3A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8Zm4.4-5.9c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
                  </svg>
                </span>
                <div>
                  <strong className="block text-espresso font-bold mb-0.5">WhatsApp</strong>
                  <a
                    href="https://wa.me/5516992306451"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso-soft border-b border-transparent hover:text-gold-dark hover:border-gold-dark"
                  >
                    (16) 99230-6451
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3.5 py-3.5">
                <span
                  className="w-[38px] h-[38px] rounded flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="#fff" stroke="none" />
                  </svg>
                </span>
                <div>
                  <strong className="block text-espresso font-bold mb-0.5">Instagram</strong>
                  <a
                    href="https://www.instagram.com/petcafeararaquara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso-soft border-b border-transparent hover:text-gold-dark hover:border-gold-dark"
                  >
                    @petcafeararaquara
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="aspect-[4/3] border border-line rounded overflow-hidden">
            <iframe
              loading="lazy"
              className="w-full h-full border-0 grayscale-[25%] contrast-105"
              src="https://www.google.com/maps?q=Av.+Luiz+Dosualdo,+50,+Araraquara,+SP&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
