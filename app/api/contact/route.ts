import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, contact, message } = body ?? {};

  if (!name || !contact || !message) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  // TODO: plugar um serviço de e-mail real aqui antes de ir pra produção.
  // Duas opções simples:
  //
  // 1) Resend (recomendado, precisa de RESEND_API_KEY nas env vars):
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "site@petcafeararaquara.com.br",
  //     to: "contato@petcafeararaquara.com.br",
  //     subject: `Novo contato pelo site — ${name}`,
  //     text: `Nome: ${name}\nContato: ${contact}\n\n${message}`,
  //   });
  //
  // 2) Nodemailer com SMTP próprio (precisa de SMTP_HOST/USER/PASS nas env vars).
  //
  // Por enquanto, só logamos no servidor para não perder a mensagem durante o desenvolvimento.
  console.log("Novo contato recebido:", { name, contact, message });

  return NextResponse.json({ ok: true });
}
