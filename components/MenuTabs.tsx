"use client";

import { useState } from "react";
import { menuData, tagLabel } from "@/data/menu";

export default function MenuTabs() {
  const [tab, setTab] = useState<"bebidas" | "lanches">("bebidas");
  const groups = menuData[tab];

  return (
    <div>
      <div className="flex gap-9 mb-5 border-b border-line">
        {(["bebidas", "lanches"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`pb-3.5 -mb-px font-bold text-[15px] border-b-2 transition-colors ${
              tab === key ? "text-espresso border-gold" : "text-espresso-soft border-transparent"
            }`}
          >
            {key === "bebidas" ? "Bebidas" : "Lanches"}
          </button>
        ))}
      </div>

      {groups.map((group) => (
        <div key={group.section} className="mb-11">
          <div className="border-b border-gold pb-2 mb-1.5 flex items-baseline gap-3.5">
            <h3 className="font-serif italic text-xl text-gold-dark m-0">{group.section}</h3>
            {group.note && <span className="text-[12.5px] text-espresso-soft opacity-80">{group.note}</span>}
          </div>
          {group.items.map((item) => (
            <div key={item.name} className="py-4 border-b border-line flex flex-col gap-1">
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h4 className="font-serif text-[17px] m-0 text-espresso">{item.name}</h4>
                {item.meta && <span className="text-xs text-gold-dark opacity-90">{item.meta}</span>}
              </div>
              {item.desc && <p className="text-sm m-0">{item.desc}</p>}
              {item.tags && (
                <div className="flex gap-1.5 flex-wrap mt-0.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-bold text-gold-dark border border-gold-light px-2 py-0.5 rounded-full"
                    >
                      {tagLabel[t] ?? t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
