export type GalleryPhoto = {
  album: "ambiente" | "inauguracao";
  caption: string;
  src: string;
};

// Para adicionar novas fotos: solte o arquivo em /public/images e crie uma
// entrada aqui com o caminho (ex: "/images/nova-foto.jpg").
export const galleryPhotos: GalleryPhoto[] = [
  { album: "ambiente", caption: "Fachada", src: "/images/facade.jpg" },
  { album: "ambiente", caption: "Detalhe de decoração", src: "/images/framed_art.jpg" },
  { album: "ambiente", caption: "Cantinho de decoração", src: "/images/dog_figurine.jpg" },
  { album: "ambiente", caption: "Luz da manhã", src: "/images/window_plants.jpg" },
  { album: "inauguracao", caption: "Estação de açúcar", src: "/images/sugar_caddy.jpg" },
  { album: "inauguracao", caption: "Preparo do espresso", src: "/images/espresso_machine.jpg" },
];

export const albumLabels: Record<string, string> = {
  ambiente: "O espaço",
  inauguracao: "Inauguração — 05/09",
};
