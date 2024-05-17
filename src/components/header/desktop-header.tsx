import Image from "next/image";
import AccordionContent from "../drawer/accordion";
import Slider from "../slider/slider";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import { useState } from "react";
import { T_Brand } from "@/hooks/useHeaderInfo";

import Button from "../buttons/subcategoriesFilter-button";
import Loading from "../loading/loading";

interface Props {
  submenuData: Category[] | null;
  isOpen: boolean;
  onSubCategoryItemClick: (id: number, parent_id: number | null, gender: Gender) => void;
  onBrandsItemClick: (id: number, gender: Gender) => void;
  brandsData: T_Brand[];
  loading: boolean;
}
export default function DesktopHeader({
  isOpen,
  submenuData,
  onSubCategoryItemClick,
  onBrandsItemClick,
  brandsData,
  loading
}: Props) {
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
      const hoveredSubcategoriesData = submenuData!.find(item => item.id === hoveredEl.id)?.subcategories || [];
      setHoveredSubcategories(hoveredSubcategoriesData);
    }
    setShowBrands(false);
    setBrandGender(gender);
  };

  const onBrandsMouseEnter = () => {
    setShowBrands(true);
  };

  return (
    <div className="px-[252px]">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full">
          <AccordionContent isOpen={isOpen}>
            <div className="flex gap-8">
              <div>
                {submenuData?.map(el => (
                  <div
                    key={`desktop-header${el.id}`}
                    className="flex gap-8 w-full"
                    onMouseEnter={() => onMouseEnter(el.id, el.gender)}
                  >
                    <div className="w-full">
                      <div className={`flex justify-between my-2 border-b py-4 w-[20vw] border-customBlack`}>
                        <p className="font-railway">{el.title}</p>
                        <Image
                          src="/icons/Vector.svg"
                          width={10}
                          height={10}
                          alt="arrow.img"
                          className={activeArrow === el.id && !showBrands ? "" : "hidden"}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  className="flex justify-between my-2 border-b border-customBlack py-4 w-[20vw]"
                  onMouseEnter={onBrandsMouseEnter}
                >
                  <p className="font-railway">Бренды</p>

                  <Image
                    src="/icons/Vector.svg"
                    width={10}
                    height={10}
                    alt="arrow-image"
                    className={showBrands ? "" : "hidden"}
                  />
                </div>
              </div>

              <div className={`w-full flex-col gap-4 overflow-hidden  ${selectedId !== null && !showBrands ? "flex" : "hidden"}`}>
                <Slider hoveredSubcategories={hoveredSubcategories} onSubCategoryItemClick={onSubCategoryItemClick} />
              </div>
              <div
                className={`w-full flex-wrap mt-[20px] custom-scrollbar content-start gap-4  ${showBrands ? "flex" : "hidden"}`}
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {showBrands &&
                  brandsData
                    .filter(brand => brand.gender === brandGender)
                    .map(brand => (
                      <Button onClick={() => onBrandsItemClick(brand.id, brand.gender)} key={`brands-header${brand.id}`}>
                        {brand.title}
                      </Button>
                    ))}
              </div>
            </div>
          </AccordionContent>
        </div>
      )}
    </div>
  );
}
