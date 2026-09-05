export type MenuItem = {
  name: string;
  tags?: string[];
  meta?: string;
  desc?: string;
};

export type MenuSection = {
  section: string;
  note?: string;
  items: MenuItem[];
};

export const menuData: Record<"bebidas" | "lanches", MenuSection[]> = {
  bebidas: [
    {
      section: "Espressos",
      items: [
        { name: "Pinscher", tags: ["sem leite", "sem açúcar"], meta: "50ml ou 25ml", desc: "Espresso com grãos selecionados. Opções: suave, intenso ou descafeinado." },
        { name: "Pit Bull", tags: ["sem leite", "sem açúcar"], meta: "100ml ou 120ml", desc: "Espresso duplo com grãos selecionados. Opções: suave, intenso ou descafeinado." },
        { name: "Pom Pom", meta: "50ml", desc: "Espresso com toque de leite vaporizado. Opções: suave, intenso ou descafeinado." },
        { name: "Pug (Pingado)", meta: "200ml", desc: "Espresso com leite vaporizado cremoso. Opções: suave, intenso ou descafeinado." },
        { name: "Dalmata", tags: ["drink autoral"], desc: "Espresso com leite vaporizado, gotas de chocolate e leite condensado." },
        { name: "Bobtail", tags: ["drink autoral"], meta: "100ml", desc: "Espresso envolvido na cremosidade da gemada, aveludado." },
      ],
    },
    {
      section: "Coado na hora",
      note: "Escolha o café e o método",
      items: [
        { name: "Félix (V60)", tags: ["sem leite", "sem açúcar"], meta: "100ml", desc: "Bebida limpa, equilibrada e de acidez intensa." },
        { name: "Mingau (Aeropress)", tags: ["sem leite", "sem açúcar"], meta: "100ml", desc: "Extração moderna, expressiva e cheia de energia." },
        { name: "Tom (Prensa Francesa)", tags: ["sem leite", "sem açúcar"], meta: "100ml", desc: "Encorpado, denso, com óleo essencial do café." },
      ],
    },
    {
      section: "Águas",
      items: [
        { name: "Água de coco", meta: "330ml" },
        { name: "Água com gás", meta: "510ml" },
        { name: "Água sem gás", meta: "510ml" },
      ],
    },
    {
      section: "Cappuccinos",
      note: "240ml",
      items: [
        { name: "Maltês", desc: "Cappuccino italiano com espresso, leite vaporizado e cacau." },
        { name: "Poodle", desc: "Receita tradicional brasileira, elegante e equilibrada." },
        { name: "Bulldog", desc: "Cappuccino tradicional com menos açúcar." },
        { name: "Basset", desc: "Cappuccino tradicional com borda da sua preferência. Opções: Nutella, doce de leite ou pistache." },
      ],
    },
    {
      section: "Latte",
      note: "240ml",
      items: [{ name: "Cãoramelo", desc: "Espresso encorpado, leite vaporizado e toque de caramelo salgado." }],
    },
    {
      section: "Chocolates",
      note: "240ml",
      items: [
        { name: "Choco Persa", desc: "Chocolate quente feito com cacau nobre." },
        { name: "Romeo", desc: "Chocolate quente cremoso. Opções: tradicional, frutas vermelhas ou marshmallow." },
      ],
    },
    {
      section: "Chás",
      items: [
        { name: "Chá quente da Nala", tags: ["sem leite", "sem açúcar"], meta: "240ml", desc: "Naturais e quentinhas. Opções: maçã verde com cranberry, hibisco com frutas vermelhas ou cidreira." },
        { name: "Matcha", meta: "310ml", desc: "Gelado e gaseificado." },
        { name: "Chá gelado do Fred", desc: "Chá gelado natural, servido com gelo. Opções: maçã verde com cranberry, hibisco com frutas vermelhas ou cidreira com limão." },
      ],
    },
    {
      section: "Sucos e Refrigerantes",
      items: [
        { name: "Sucos", meta: "310ml", desc: "Laranja, abacaxi, abacaxi com hortelã, laranja com morango, maracujá, frutas vermelhas, detox verde e detox vermelho. Preparados com água natural, troque por leite integral ou sem lactose, ou adicione sabores por +R$4,00." },
        { name: "Suco integral", meta: "300ml", desc: "Uva ou laranja." },
        { name: "Refrigerantes", meta: "lata 350ml", desc: "Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero, Sprite, Fanta Laranja, Citrus ou Tônica." },
      ],
    },
    {
      section: "Geladas Refrescantes",
      items: [
        { name: "Espresso Toni", desc: "Espresso, água tônica, cranberry, um toque de gengibre e gelo." },
        { name: "Iced Cãoramelo", desc: "Latte de caramelo salgado com gelo, na versão gelada e refrescante." },
        { name: "Refresco Brutus", desc: "Soda italiana com água com gás, gelo e opções de sabor à escolha. Opções: maçã verde, limão siciliano, granadina, cranberry, gengibre ou caramelo salgado." },
        { name: "Cappuccino do Frodo", desc: "Cappuccino gelado, receita tradicional brasileira." },
        { name: "Chocolate da Gaia", desc: "Chocolate gelado feito com cacau nobre." },
      ],
    },
    {
      section: "Frapês",
      note: "Todos acompanham chantilly",
      items: [
        { name: "Marley", desc: "Frapê de cappuccino, com borda de doce de leite crocante e calda de caramelo." },
        { name: "Scooby", desc: "Frapê de chocolate, com borda de nutella crocante e calda de chocolate." },
        { name: "Duquesa", desc: "Frapê de morango com frutas vermelhas, com borda de nutella crocante." },
        { name: "Pongo", desc: "Frapê de leite ninho com nutella, com borda de nutella crocante." },
      ],
    },
    {
      section: "Bebidas Proteicas",
      note: "Feito com bebidas vegetais, A Tal da Castanha",
      items: [
        { name: "Dama Ultra", tags: ["sem leite", "sem açúcar"], desc: "Espresso, leite de aveia, gelo e ultra coffee de cappuccino." },
        { name: "Vitamina Pingo", tags: ["sem leite", "sem açúcar"], desc: "Vitaminado de frutas com leite de aveia, gelo e um pingo de adoçante." },
        { name: "Vitamina da Lola", tags: ["sem leite"], desc: "Vitamina de abacate com leite de aveia, gelo e adoçante." },
        { name: "Shake Coragem", tags: ["sem leite"], desc: "Leite de aveia, frutas vermelhas, gelo, whey e chia." },
        { name: "Shake Zeus", tags: ["sem leite"], desc: "Leite de aveia, açaí, gelo, whey e paçoca." },
        { name: "Bebida proteica", desc: "Bebida pronta e gelada. Consulte opções de sabores." },
      ],
    },
  ],
  lanches: [
    {
      section: "Clássicos",
      note: "Mude seu pão: Italiano, Brioche ou Croissant (+R$2,00)",
      items: [
        { name: "Atreus", desc: "Pão francês na chapa com manteiga." },
        { name: "Bella", desc: "Pão francês com requeijão e casquinha crocante na chapa." },
        { name: "Susi", desc: "Pão brioche com manteiga de parmesão e fios de mel." },
        { name: "Peter", desc: "Pão francês com presunto, muçarela, tomate e orégano na chapa." },
        { name: "Thor", desc: "Pão integral, peito de peru, queijo fresco e creme de ricota." },
        { name: "Hulk", desc: "Ovos, bacon e muçarela tostados na chapa, acompanha torradas." },
        { name: "Billy", desc: "Pão francês com muçarela e queijo fresco tostados na chapa." },
      ],
    },
    {
      section: "Pão de Queijo",
      note: "Quente ou frio",
      items: [
        { name: "Totó", desc: "O tradicional e quentinho." },
        { name: "Nina", desc: "Recheado e tostado com requeijão." },
        { name: "Bolt", desc: "Recheado com frango e requeijão." },
        { name: "Marie", desc: "Recheado com queijo fresco e geleia de frutas vermelhas." },
        { name: "Garfield", desc: "Recheado com presunto e muçarela." },
        { name: "Boris", desc: "Recheado com muita Nutella." },
      ],
    },
    {
      section: "Toasts",
      note: "Pão italiano",
      items: [
        { name: "Maya", tags: ["sem leite", "contém pimenta"], desc: "Toast de guacamole, ovo e bacon em fatias." },
        { name: "Murphy", desc: "Toast de muçarela de búfala, tomate confit, pesto e manjericão." },
        { name: "Larry", tags: ["contém pimenta", "contém nozes"], desc: "Toast de frango defumado, nozes, parmesão e geleia de abacaxi com pimenta." },
        { name: "Jordan", tags: ["contém nozes"], desc: "Toast de presunto parma, cream cheese, rúcula e amêndoas laminadas." },
      ],
    },
    {
      section: "Ovos, Omeletes, Tapiocas & Crepiocas",
      items: [
        { name: "Beagle", desc: "Tradicional com manteiga. Acompanha torradas ou salada." },
        { name: "Shih Tzu", desc: "Presunto, muçarela, tomate e requeijão com cheiro-verde. Acompanha torradas ou salada." },
        { name: "Yorkshire", desc: "Peito de peru, queijo fresco e tomate com cheiro-verde. Acompanha torradas ou salada." },
        { name: "Golden", desc: "Frango, requeijão e muçarela com cheiro-verde. Acompanha torradas ou salada." },
        { name: "Spitz", desc: "Cogumelos shimeji na manteiga com brotos. Acompanha torradas ou salada." },
        { name: "Pastor Alemão", desc: "Bacon crocante, muçarela, cebola caramelizada e rúcula. Acompanha torradas ou salada." },
      ],
    },
    {
      section: "Paninis",
      note: "Acompanha batata chips crocante",
      items: [
        { name: "Panini Pet Café", desc: "Pernil desfiado, rúcula, tomate e creme de ricota." },
        { name: "Sanduba Pet Café", desc: "Mortadela italiana ceratti, tomate confit, rúcula e cream cheese." },
        { name: "Bauru Pet Café", desc: "Contra filé, mix de folhas, gouda, cebola caramelizada e mostarda dijon." },
      ],
    },
    {
      section: "Sobremesas",
      items: [
        { name: "Voltinha de Carro", desc: "Panquecas da casa, com até 3 adicionais à sua escolha. Opções: mel, doce de leite, geleia de frutas vermelhas, creme de pistache, nutella ou manteiga." },
        { name: "Hora do Lanche", desc: "Sorvete de creme com dose quente de espresso." },
        { name: "Lambeijos", desc: "Croissant com maçã caramelizada, doce de leite e farofa de biscoff." },
        { name: "Melhor Amigo", tags: ["contém nozes"], desc: "Rabanada com sorvete de creme, cream cheese, geleia de frutas vermelhas, creme de pistache e amêndoas laminadas." },
        { name: "Passeio na Praça", desc: "Bowl de frutas frescas com até 3 adicionais à sua escolha. Opções: granola, mel, iogurte natural, leite condensado ou nutella." },
        { name: "Bolo Caseiro", desc: "Mini bolo vulcão com adicional de calda à sua escolha. Opções: doce de leite, ganache de chocolate, geleia de frutas vermelhas e leite ninho." },
      ],
    },
    {
      section: "Vitrine",
      note: "Consulte as opções disponíveis",
      items: [
        { name: "Salgados" },
        { name: "Tortas doces" },
        { name: "Macarons" },
        { name: "NY Roll" },
        { name: "Kit de cookies" },
        { name: "Cookies" },
        { name: "Brownie" },
      ],
    },
  ],
};

export const tagLabel: Record<string, string> = {
  "sem leite": "Sem leite",
  "sem açúcar": "Sem açúcar",
  "drink autoral": "Drink autoral",
  "contém pimenta": "Contém pimenta",
  "contém nozes": "Contém nozes",
};
