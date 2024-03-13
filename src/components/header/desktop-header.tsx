import Image from "next/image";
import AccordionContent from "../drawer/accordion";
import Slider from "../slider/slider";
import { Category } from "@/hooks/useHeaderInfo";
import { useState } from "react";
import datasubMenu from "../dataBase/dataSubMenu";
interface Props {
  submenuData: Category[] | null;
  isOpen: boolean;
}
export default function DesktopHeader({ isOpen, submenuData }: Props) {
  const [activArrow, setActiveArrow] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredSubcategories, setHoveredSubcategories] = useState<any[]>([]);
  const onMouseEnter = (id: number) => {
    setActiveArrow(id);
    setSelectedId(id);
    const hoveredEl = submenuData?.find(el => el.id === id);
    if (hoveredEl) {
      const hoveredSubcategoriesData = datasubMenu.find(item => item.id === hoveredEl.id)?.subcategories || [];
      setHoveredSubcategories(hoveredSubcategoriesData);
    }
  };
  return (
    <div className="px-[252px] mt-20 ">
      <div className="w-full">
        <AccordionContent isOpen={isOpen}>
          <div className="flex ">
            <div>
              {submenuData?.map(el => (
                <div key={`desktop-header${el.id}`} className="flex gap-8 w-full" onMouseEnter={() => onMouseEnter(el.id)}>
                  <div className="w-full">
                    <div className="flex justify-between my-2 border-b border-customBlack py-4 w-[200px]">
                      <p>{el.title}</p>
                      <Image
                        src="icon/Vector.svg"
                        width={10}
                        height={10}
                        alt=""
                        className={`${activArrow === el.id ? "" : "hidden"} mr-4`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={` w-full overflow-hidden flex ${selectedId !== null ? "" : "hidden"}`}>
              <Slider hoveredSubcategories={hoveredSubcategories} />
            </div>
          </div>
        </AccordionContent>
      </div>
    </div>
  );
}
