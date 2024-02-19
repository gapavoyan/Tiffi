import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import DrawerButton from "../drawer/drawer-button";
import AccordionContent from "../drawer/accordion";
import { Category, useHeaderInfo } from "@/hooks/useHeaderInfo";
import datasubMenu from "../dataBase/dataSubMenu";
import Slider from "../slider/slider";
function Header() {
  const { loading, onSubmenuOpen, submenuData, isOpen, onDrawerToggle, isDrawerMenuOpen } = useHeaderInfo();
  const [activArrow, setActivArrow] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredSubcategories, setHoveredSubcategories] = useState<any[]>([]);
  const onMouseEnter = (id: number) => {
    setActivArrow(id);
    setSelectedId(id);
    const hoveredEl = submenuData?.find(el => el.id === id);
    if (hoveredEl) {
      const hoveredSubcategoriesData = datasubMenu.find(item => item.id === hoveredEl.id)?.subcategories || [];
      setHoveredSubcategories(hoveredSubcategoriesData);
    }
  };

  return (
    <header>
      <div className="w-full fixed top-0 z-20">
        <div className="max-sm:gap-4 mx-[252px] my-6 max-xl:mx-[110px] max-mij:ml-[120px] max-lg:mx-[130px] max-md:mx-[72px] max-sm:flex-col max-sm:mx-4 flex justify-between">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <Image src="logo.svg" alt="" width={106} height={24} />
            </Link>
            <div className="max-lg:hidden">
              <Navbar onSubmenuOpen={onSubmenuOpen} />
            </div>
            <DrawerButton onClick={onDrawerToggle} isDrawerMenuOpen={isDrawerMenuOpen} />
          </div>
          <div className="flex ml-[90px] max-xl:ml-[100px] max-mij:ml-[10px] max-lg:ml-3 max-sm:ml-0 items-center ">
            <Search />
          </div>
        </div>
        <div className={`border-t border-customBlack flex flex-col justify-center max-md:flex-col items-center`}>
          <AccordionContent isOpen={isDrawerMenuOpen} className="w-full">
            <div className="w-full flex justify-center bg-white max-md:h-screen">
              <Navbar onSubmenuOpen={onSubmenuOpen} />
            </div>
          </AccordionContent>
        </div>
        <div className="px-[252px] mt-20 ">
          <div className="w-full ">
            <AccordionContent isOpen={isOpen}>
              <div className="flex ">
                <div>
                  {submenuData?.map(el => (
                    <div key={el.id} className="flex gap-8 w-full" onMouseEnter={() => onMouseEnter(el.id)}>
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
                <div className={` w-full flex ${selectedId !== null ? "" : "hidden"}`}>
                  <Slider hoveredSubcategories={hoveredSubcategories} />
                </div>
              </div>
            </AccordionContent>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
