import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "../slider/slider";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import AccordionContent from "../drawer/accordion";
import { dataBrands } from "../../dataBase/dataBrands";
import BrandsButton from "../brands/brandsButton";
interface Props {
  submenuData: Category[];
  onClose: () => void;
  onSubCategoryItemClick: (id: number, parent_id: number | null, gender: Gender) => void;
}

export default function MobileHeader({ submenuData, onClose, onSubCategoryItemClick }: Props) {
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<null | number>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onTitleClick = (id: number) => {
    setActiveSubcategoryId(activeSubcategoryId === id ? null : id);
  };

  const currentGenderBrandsData = {
    id: -1,
    title: "Бренды",
    gender: submenuData[0].gender,
    img: null,
    parent_id: null,
    subcategories: dataBrands
      .filter(brand => brand.gender === submenuData[0].gender)
      .map(item => ({
        id: item.id,
        title: item.title,
        gender: item.gender,
        img: null,
        parent_id: null,
        subcategories: []
      }))
  } as unknown as Category;
  const fullSubmenuData = [...submenuData, currentGenderBrandsData];

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="fixed bg-white top-[110px] h-screen  max-sm:top-[170px] px-[250px] overflow-scroll">
          <div
            ref={scrollRef}
            className="overflow-auto"
            style={{
              // minHeight: "100%",
              maxHeight: scrollRef.current?.scrollHeight
            }}
          >
            <div>
              <button onClick={onClose}>
                <Image src="/icon/modalArrow.svg" width={25} height={25} alt="Close" />
              </button>
            </div>
            <div>
              {fullSubmenuData?.map(el => (
                <div
                  key={`fullSubmenuData${el.id}`}
                  className="flex gap-8 w-full overflow-auto"
                  onClick={() => onTitleClick(el.id)}
                >
                  <div className="w-full overflow-auto">
                    <div className="flex justify-between overflow-auto my-2 border-b border-customBlack py-4 px-4 w-[90vw]">
                      <p className="font-railway">{el.title}</p>
                      <Image
                        src="/icon/arrow_down.svg"
                        width={10}
                        height={10}
                        alt="arrow-down"
                        className={`${activeSubcategoryId === el.id && el.subcategories && el.subcategories.length > 0 ? "" : "hidden"} mr-4`}
                      />
                    </div>
                    <div>
                      <AccordionContent isOpen={activeSubcategoryId === el.id}>
                        <div className="w-full flex">
                          {el.id === -1 ? (
                            <div className="flex flex-wrap">
                              <BrandsButton subcategory={el.subcategories} />
                            </div>
                          ) : (
                            <div>
                              {el?.subcategories.length > 0 && (
                                <div className="w-[90vw] h-[200px]">
                                  <Slider
                                    hoveredSubcategories={el.subcategories}
                                    onSubCategoryItemClick={onSubCategoryItemClick}
                                  ></Slider>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
