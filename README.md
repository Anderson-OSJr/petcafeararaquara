# PetCafé Araraquara — site institucional

Projeto Next.js (App Router) + TypeScript + Tailwind CSS. Site estático — sem
banco de dados, sem CMS, sem autenticação. Cardápio, galeria e textos vivem
como dados no código, atualizados a cada deploy.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `app/page.tsx` — Home + Sobre + Galeria (single page, com âncoras `#home`, `#sobre`, `#galeria`)
- `app/cardapio/page.tsx` — página do Cardápio
- `app/contato/page.tsx` — página de Contato
- `app/api/contact/route.ts` — recebe o formulário de contato (ver "Formulário de contato" abaixo)
- `data/menu.ts` — todos os itens do cardápio (Bebidas / Lanches). Editar aqui para atualizar preços, descrições ou adicionar itens.
- `data/gallery.ts` — fotos da galeria, organizadas em dois álbuns (`ambiente` / `inauguracao`). Para adicionar uma foto nova: solte o arquivo em `public/images/` e crie uma entrada nesse arquivo.
- `components/Logo.tsx` — a logo real da marca, vetorizada, recolorável via `className` (usa `currentColor`)

## Formulário de contato

O endpoint `/api/contact` já recebe e valida os dados, mas **ainda não envia
e-mail de verdade** — só registra no log do servidor. Antes de publicar,
escolha uma opção e siga as instruções comentadas dentro do arquivo
`app/api/contact/route.ts`:

- **Resend** (mais simples): criar conta em resend.com, gerar uma API key e
  adicionar como `RESEND_API_KEY` nas variáveis de ambiente do projeto.
- **SMTP próprio via Nodemailer**: usar as credenciais de e-mail que vocês já
  tiverem.

## Deploy

Recomendado: [Vercel](https://vercel.com) — basta conectar o repositório,
sem configuração adicional além da variável de ambiente do e-mail (se optarem
por configurar o formulário).

## Pendências conhecidas

- Valores do cardápio não estão publicados (o cardápio real também não expõe
  preços) — atualizar em `data/menu.ts` quando tiverem uma tabela de preços
  definida.
- Fotos da Galeria — álbum "Inauguração" tem só 2 fotos de detalhes por
  enquanto; assim que tiverem fotos de pets com donos, adicionar em
  `public/images/` e `data/gallery.ts`.
# petcafeararaquara
