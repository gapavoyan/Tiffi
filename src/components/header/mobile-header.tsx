import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "../slider/slider";
import { Category, Gender } from "@/hooks/useHeaderInfo";
import AccordionContent from "../drawer/accordion";
import { dataBrands } from "../dataBase/dataBrands";

interface Props {
  isOpen: boolean;
  submenuData: Category[] | null;
  onClose: () => void;
}

export default function MobileHeader({ isOpen, submenuData, onClose }: Props) {
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<null | number>(null);
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [brandsOpen, setBrandsOpen] = useState<boolean>(false);

  // Set selected gender when submenuData changes
  useEffect(() => {
    if (submenuData && submenuData.length > 0) {
      setSelectedGender(submenuData[0].gender);
    }
  }, [submenuData]);

  const onTitleClick = (id: number, gender: Gender) => {
    setActiveSubcategoryId(activeSubcategoryId === id ? null : id);
    setSelectedGender(gender);
    setBrandsOpen(false);
  };

  const toggleBrandsAccordion = () => {
    setBrandsOpen(!brandsOpen);
    setActiveSubcategoryId(null);
  };

  return (
    <div className="">
      <div className="w-full flex justify-center  overflow-y-auto">
        {isOpen && (
          <div className="fixed bg-white top-[110px] h-screen max-sm:top-[170px] px-[250px]">
            <div>
              <button onClick={onClose}>
                <Image src="/icon/modalArrow.svg" width={25} height={25} alt="Close" />
              </button>
            </div>
            <div>
              {submenuData?.map(el => (
                <div key={el.id} className="flex gap-8 w-full" onClick={() => onTitleClick(el.id, el.gender)}>
                  <div className="w-full">
                    <div className="flex justify-between my-2 border-b border-customBlack py-4 px-4 w-[90vw]">
                      <p>{el.title}</p>
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
                        <div className={`w-full flex`}>
                          {el.subcategories && el.subcategories.length > 0 && (
                            <div className="w-[90vw] h-[200px]">
                              <Slider hoveredSubcategories={el.subcategories} />
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div onClick={toggleBrandsAccordion}>
              <div className="flex justify-between my-2 border-b border-customBlack py-4 px-4 w-[90vw]">
                <p>Бренды</p>
                <Image
                  src="/icon/arrow_down.svg"
                  width={10}
                  height={10}
                  alt="arrow-down"
                  className={brandsOpen ? "" : "hidden"}
                />
              </div>
              <AccordionContent isOpen={brandsOpen}>
                <div className="flex flex-wrap">
                  {dataBrands
                    .filter(brand => selectedGender === null || brand.gender === selectedGender)
                    .map(brand => (
                      <button className="px-8 py-3 ml-4 mt-4 border border-solid border-customBlack" key={brand.id}>
                        {brand.title}
                      </button>
                    ))}
                </div>
              </AccordionContent>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
