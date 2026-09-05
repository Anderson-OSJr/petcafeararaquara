import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-7">
        <div className="flex flex-wrap justify-between gap-8 pb-9 border-b border-cream/20">
          <div>
            <div className="flex items-center gap-4">
              <Logo className="w-[92px] h-auto text-gold-light" />
              <span className="font-serif italic text-2xl">PetCafé</span>
            </div>
            <p className="mt-3 opacity-70 max-w-[32ch] text-[#C9BBA2]">
              Av. Luiz Dosualdo, 50, Sala 7 — Portal das Tipuanas, Araraquara/SP
            </p>
          </div>
          <div>
            <p className="opacity-70 text-[#C9BBA2]">
              Ter–sex, 8h–19h
              <br />
              Sáb, dom e feriado, 9h–18h
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <a href="https://wa.me/5516992306451" target="_blank" rel="noopener noreferrer" className="text-[#D8CBB6] hover:text-gold-light">
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/petcafeararaquara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8CBB6] hover:text-gold-light"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="mt-6 opacity-55 text-xs">© {new Date().getFullYear()} PetCafé Araraquara. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
