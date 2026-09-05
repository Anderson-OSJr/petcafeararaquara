"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryPhotos, albumLabels, GalleryPhoto } from "@/data/gallery";

const albumKeys = ["todos", "ambiente", "inauguracao"] as const;

export default function Gallery() {
  const [filter, setFilter] = useState<string>("todos");

  const items: GalleryPhoto[] =
    filter === "todos" ? galleryPhotos : galleryPhotos.filter((p) => p.album === filter);

  return (
    <div>
      <div className="flex gap-6 mb-11 border-b border-line pb-4">
        {albumKeys.map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`font-bold text-sm border-b-2 pb-1 transition-colors ${
              filter === key ? "text-espresso border-gold" : "text-espresso-soft border-transparent"
            }`}
          >
            {key === "todos" ? "Todos" : albumLabels[key]}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-0.5 [column-fill:_balance]">
        {items.map((photo, i) => (
          <div key={photo.src} className="mb-0.5 break-inside-avoid relative rounded overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.caption}
              width={600}
              height={i % 2 === 0 ? 750 : 600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{photo.caption}</span>
          </div>
        ))}
      </div>

      <div className="mt-11 p-6 border border-line border-l-[3px] border-l-gold text-sm text-espresso-soft flex gap-3">
        <span>
          Galeria alimentada pela equipe do PetCafé — fotos do ambiente e os registros da fotógrafa da
          inauguração entram aqui a cada atualização.
        </span>
      </div>
    </div>
  );
}
