// mobile-header.js
import React, { useState } from "react";
import Image from "next/image";
import AccordionContent from "../drawer/accordion";
import Slider from "../slider/slider";
import { Category } from "@/hooks/useHeaderInfo";
import dataSubMenu from "../dataBase/dataSubMenu";

interface Props {
  isOpen: boolean;
  submenuData: Category[] | null;
  onClose: () => void;
}

export default function MobileHeader({ isOpen, submenuData, onClose }: Props) {
  const [activeArrow, setActiveArrow] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredSubcategories, setHoveredSubcategories] = useState<any[]>([]);
  const onMouseEnter = (id: number) => {
    setActiveArrow(id);
    setSelectedId(id);
    const hoveredEl = submenuData?.find(el => el.id === id);
    if (hoveredEl) {
      const hoveredSubcategoriesData = dataSubMenu.find(item => item.id === hoveredEl.id)?.subcategories || [];
      setHoveredSubcategories(hoveredSubcategoriesData);
    }
  };

  return (
    <div className="px-[252px] mt-20">
      <div className="w-full">
        {isOpen && (
          <div>
            <button onClick={onClose}>X</button>
            <div className="flex">
              <div>
                {submenuData?.map(el => (
                  <div key={el.id} className="flex gap-8 w-full" onMouseEnter={() => onMouseEnter(el.id)}>
                    <div className="w-full">
                      <div className="flex justify-between my-2 border-b border-customBlack py-4 w-[200px]">
                        <p>{el.title}</p>
                        <Image
                          src="/icon/Vector.svg"
                          width={10}
                          height={10}
                          alt=""
                          className={`${activeArrow === el.id ? "" : "hidden"} mr-4`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`w-full overflow-hidden flex ${selectedId !== null ? "" : "hidden"}`}>
                <Slider hoveredSubcategories={hoveredSubcategories} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
