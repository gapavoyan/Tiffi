import Image from "next/image";
import AccordionContent from "../drawer/accordion";
import Slider from "../slider/slider";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import { useState } from "react";
import datasubMenu from "../dataBase/dataSubMenu";
import { dataBrands } from "../dataBase/dataBrands";

interface Props {
  submenuData: Category[] | null;
  isOpen: boolean;
}
export default function DesktopHeader({ isOpen, submenuData }: Props) {
  const [activeArrow, setActiveArrow] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredSubcategories, setHoveredSubcategories] = useState<Category[]>([]);
  const [showBrands, setShowBrands] = useState<boolean>(false);
  const [brandGender, setBrandGender] = useState<Gender | null>(submenuData ? submenuData[0].gender : null);

  const onMouseEnter = (id: number, gender: Gender) => {
    setActiveArrow(id);
    setSelectedId(id);
    const hoveredEl = submenuData?.find(el => el.id === id);
    if (hoveredEl) {
      const hoveredSubcategoriesData = datasubMenu.find(item => item.id === hoveredEl.id)?.subcategories || [];
      setHoveredSubcategories(hoveredSubcategoriesData);
    }
    setShowBrands(false);
    setBrandGender(gender);
  };

  const onBrandsMouseEnter = () => {
    setShowBrands(true);
  };

  return (
    <div className="px-[252px] mt-20 ">
      <div className="w-full">
        <AccordionContent isOpen={isOpen}>
          <div className="flex">
            <div>
              {submenuData?.map(el => (
                <div
                  key={`desktop-header${el.id}`}
                  className="flex gap-8 w-full"
                  onMouseEnter={() => onMouseEnter(el.id, el.gender)}
                >
                  <div className="w-full">
                    <div className={`flex justify-between my-2 border-b py-4 w-[200px] border-customBlack`}>
                      <p>{el.title}</p>
                      <Image
                        src="/icon/Vector.svg"
                        width={10}
                        height={10}
                        alt=""
                        className={activeArrow === el.id && !showBrands ? "" : "hidden"}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="flex justify-between my-2 border-b border-customBlack py-4 w-[200px]"
                onMouseEnter={onBrandsMouseEnter}
              >
                <p>Бренды</p>
                <Image src="/icon/Vector.svg" width={10} height={10} alt="" className={showBrands ? "" : "hidden"} />
              </div>
            </div>
            <div className={`w-full overflow-hidden ${selectedId !== null && !showBrands ? "flex" : "hidden"}`}>
              <Slider hoveredSubcategories={hoveredSubcategories} />
            </div>
            <div className={`w-full overflow-hidden `}>
              {showBrands &&
                dataBrands
                  .filter(brand => brand.gender === brandGender)
                  .map(brand => (
                    <button className="px-8 py-3 ml-4 mt-4 border border-solid border-customBlack" key={brand.id}>
                      {brand.title}
                    </button>
                  ))}
            </div>
          </div>
        </AccordionContent>
      </div>
    </div>
  );
}
