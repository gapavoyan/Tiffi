import React, { useState } from "react";
import Image from "next/image";
import Slider from "../slider/slider";
import { Category } from "@/hooks/useHeaderInfo";
import datasubMenu from "../dataBase/dataSubMenu";
import AccordionContent from "../drawer/accordion";

interface Props {
  isOpen: boolean;
  submenuData: Category[] | null;
  onClose: () => void;
}

export default function MobileHeader({ isOpen, submenuData, onClose }: Props) {
  const [activeArrow, setActiveArrow] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredSubcategories, setHoveredSubcategories] = useState<any[]>([]);

  const onTitleClick = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setActiveArrow(id);
      setSelectedId(id);
      const hoveredEl = submenuData?.find(el => el.id === id);
      if (hoveredEl) {
        const hoveredSubcategoriesData = datasubMenu.find(item => item.id === hoveredEl.id)?.subcategories || [];
        setHoveredSubcategories(hoveredSubcategoriesData);
      }
    }
  };

  return (
    <div className="">
      <div className="w-full flex justify-center">
        {isOpen && (
          <div className=" fixed bg-white top-[110px] h-screen max-sm:top-[170px] px-[250px]">
            <div>
              <button onClick={onClose}>
                <Image src="/icon/modalArrow.svg" width={25} height={25} alt="" />
              </button>
            </div>

            <div>
              {submenuData?.map(el => (
                <div key={el.id} className="flex gap-8 w-full" onClick={() => onTitleClick(el.id)}>
                  <div className="w-full">
                    <div className="flex justify-between my-2 border-b border-customBlack py-4 px-4 w-[90vw]">
                      <p>{el.title}</p>
                      <Image
                        src="/icon/arrow_down.svg"
                        width={10}
                        height={10}
                        alt=""
                        className={`${activeArrow === el.id ? "" : "hidden"} mr-4`}
                      />
                    </div>
                    <div>
                      {hoveredSubcategories.length > 0 && (
                        <AccordionContent isOpen={selectedId === el.id}>
                          <div className={`w-full flex ${selectedId !== null ? "" : "hidden"}`}>
                            <div className="w-[90vw] h-[200px]">
                              <Slider hoveredSubcategories={hoveredSubcategories} />
                            </div>
                          </div>
                        </AccordionContent>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
