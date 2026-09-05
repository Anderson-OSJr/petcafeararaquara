"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="mb-6">
        <label htmlFor="name" className="block font-bold text-[13px] mb-2 text-espresso-soft">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full py-2.5 px-0.5 border-0 border-b border-line bg-transparent text-espresso focus:outline-none focus:border-gold"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="contact" className="block font-bold text-[13px] mb-2 text-espresso-soft">
          E-mail ou telefone
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="w-full py-2.5 px-0.5 border-0 border-b border-line bg-transparent text-espresso focus:outline-none focus:border-gold"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block font-bold text-[13px] mb-2 text-espresso-soft">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full py-2.5 px-0.5 border-0 border-b border-line bg-transparent text-espresso focus:outline-none focus:border-gold resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start bg-espresso text-cream rounded px-7 py-3 font-bold text-sm hover:bg-gold-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>
      {status === "sent" && (
        <p className="mt-4 font-serif italic text-gold-dark text-base">
          Mensagem enviada — retornamos em breve.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-700">
          Não foi possível enviar agora. Tente novamente ou chame no WhatsApp.
        </p>
      )}
    </form>
  );
}
