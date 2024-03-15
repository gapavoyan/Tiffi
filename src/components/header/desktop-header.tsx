import Image from "next/image";
import AccordionContent from "../drawer/accordion";
import Slider from "../slider/slider";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import { useState, useEffect } from "react";
import datasubMenu from "../dataBase/dataSubMenu";
import { dataBrands } from "../dataBase/dataBrands";

interface Props {
  submenuData: Category[] | null;
  isOpen: boolean;
}

export default function DesktopHeader({ isOpen, submenuData }: Props) {
  const [activArrow, setActiveArrow] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredSubcategories, setHoveredSubcategories] = useState<any[]>([]);
  const [showBrands, setShowBrands] = useState<boolean>(false);
  const [brandGender, setBrandGender] = useState<Gender | null>(null);
  useEffect(() => {
    if (submenuData) {
      setBrandGender(submenuData[0].gender);
    }
  }, [submenuData]);
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
          <div className="flex ">
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
                        src="icon/Vector.svg"
                        width={10}
                        height={10}
                        alt=""
                        className={`${activArrow === el.id && !showBrands ? "" : "hidden"} mr-4`}
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
                <Image src={showBrands ? "icon/Vector.svg" : ""} width={10} height={10} alt="" />
              </div>
            </div>
            <div className={`w-full overflow-hidden flex ${selectedId !== null && !showBrands ? "" : "hidden"}`}>
              <Slider hoveredSubcategories={hoveredSubcategories} />
            </div>
            <div className={`w-full overflow-hidden fex ${selectedId !== null && showBrands ? "" : "hidden"}`}>
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
