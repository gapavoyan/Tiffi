import React, { useCallback, useMemo, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import DrawerButton from "../drawer/drawer-button";
import { useToggle } from "@/hooks/use-toggle";
import AccordionContent from "../drawer/accordion";
import Category from "../dataCatrgory/category";
import datasubMenu from "../dataBase/dataSubMenu";
export type Gender = "man" | "woman";
export interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  gender: Gender;
  img: null | string;
  subcategories: Category[];
}
interface CacheRef {
  man: Category[] | null;
  woman: Category[] | null;
}

function useHeaderInfo() {
  const [isDrawerMenuOpen, onToggleDrawer] = useToggle();

  const [loading, setLoading] = useState(false);
  const [activeGender, setActiveGender] = useState<Gender | null>(null);
  const [submenuData, setSubmenuData] = useState<Category[] | null>(null);
  const cachedInfo = useRef<Record<Gender, Category[] | null>>({ man: null, woman: null });
  const onSubmenuOpen = (gender: Gender) => {
    setActiveGender(activeGender === gender ? null : gender);
    if (cachedInfo.current[gender]) {
      setSubmenuData(cachedInfo.current[gender]);
    } else {
      setLoading(true);
      const submenuData = datasubMenu.filter(item => item.gender === gender);
      setSubmenuData(submenuData);
      cachedInfo.current[gender] = submenuData;
      setLoading(false);
    }

    const onDrawerToggle = () => {
      const milles = 0.1 * 1.5 * 1000;
      if (activeGender) setActiveGender(null);
      setTimeout(() => {
        onToggleDrawer();
      }, milles);
    };
  };

  return { onSubmenuOpen, submenuData, loading, isOpen: !!activeGender, onToggleDrawer, isDrawerMenuOpen };
}
function Header() {
  const { loading, onSubmenuOpen, submenuData, isOpen, onToggleDrawer, isDrawerMenuOpen } = useHeaderInfo();
  // const _mobileContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <header>
      <div className=" w-full fixed top-0 z-20">
        <div className="max-sm:gap-4 mx-[252px] my-6 max-xl:mx-[110px] max-mij:ml-[120px] max-lg:mx-[130px] max-md:mx-[72px] max-sm:flex-col max-sm:mx-4  flex justify-between">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <Image src="logo.svg" alt="" width={106} height={24} />
            </Link>
            <div className=" max-lg:hidden">
              <Navbar onSubmenuOpen={onSubmenuOpen} />
            </div>
            <DrawerButton onClick={onToggleDrawer} isDrawerMenuOpen={isDrawerMenuOpen} />
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
        <div className="bg-white mx-[252px] mt-20">
          <AccordionContent isOpen={isOpen}>
            {submenuData?.map(el => (
              <div key={el.id} className=" flex gap-8">
                <div className="w-[50%]">
                  <div className="my-2 border-b border-customBlack py-4">
                    <p>{el.title}</p>
                  </div>
                </div>
                <div className=" bg-black w-full"></div>
              </div>
            ))}
          </AccordionContent>
        </div>
      </div>
      <div className="mt-[118px] max-lg:mt-[90px] max-sm:mt-[146px]" />
    </header>
  );
}

export default Header;
