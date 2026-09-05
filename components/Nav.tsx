"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const homeAnchors = ["home", "sobre", "galeria"] as const;

export default function Nav() {
  const pathname = usePathname();
  const [activeAnchor, setActiveAnchor] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: só roda na home, onde as 3 seções convivem na mesma página.
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveAnchor(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    homeAnchors.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (id: string) => pathname === "/" && activeAnchor === id;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_-14px_rgba(51,34,21,0.25)]" : ""
      } bg-cream/90 border-line`}
    >
      <div className="max-w-6xl mx-auto px-7 py-3 flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-3">
          <Logo className="w-[102px] h-auto text-espresso" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif italic text-xl text-espresso">PetCafé</span>
            <span className="text-[10px] tracking-widest text-gold-dark opacity-85">ARARAQUARA</span>
          </span>
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span className="block w-5 h-0.5 bg-espresso" />
          <span className="block w-5 h-0.5 bg-espresso" />
          <span className="block w-5 h-0.5 bg-espresso" />
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex absolute md:static top-full left-0 right-0 md:top-auto bg-paper md:bg-transparent flex-col md:flex-row gap-1 md:gap-7 px-7 md:px-0 pb-5 md:pb-0 border-b md:border-0 border-line`}
        >
          <Link
            href="/#home"
            onClick={() => setMenuOpen(false)}
            className={`py-3 md:py-1 font-semibold text-sm border-b-2 ${
              isActive("home") ? "text-espresso border-gold" : "text-espresso-soft border-transparent"
            }`}
          >
            Home
          </Link>
          <Link
            href="/#sobre"
            onClick={() => setMenuOpen(false)}
            className={`py-3 md:py-1 font-semibold text-sm border-b-2 ${
              isActive("sobre") ? "text-espresso border-gold" : "text-espresso-soft border-transparent"
            }`}
          >
            Sobre
          </Link>
          <Link
            href="/#galeria"
            onClick={() => setMenuOpen(false)}
            className={`py-3 md:py-1 font-semibold text-sm border-b-2 ${
              isActive("galeria") ? "text-espresso border-gold" : "text-espresso-soft border-transparent"
            }`}
          >
            Galeria
          </Link>
          <Link
            href="/cardapio"
            onClick={() => setMenuOpen(false)}
            className={`py-3 md:py-1 font-semibold text-sm border-b-2 ${
              pathname === "/cardapio" ? "text-espresso border-gold" : "text-espresso-soft border-transparent"
            }`}
          >
            Cardápio
          </Link>
          <Link
            href="/contato"
            onClick={() => setMenuOpen(false)}
            className={`py-3 md:py-1 font-semibold text-sm border-b-2 ${
              pathname === "/contato" ? "text-espresso border-gold" : "text-espresso-soft border-transparent"
            }`}
          >
            Contato
          </Link>
        </nav>

        <a
          href="https://wa.me/5516992306451"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-colors rounded px-4 py-2 text-sm font-semibold whitespace-nowrap"
        >
          Reservar mesa
        </a>
      </div>
    </header>
  );
}
