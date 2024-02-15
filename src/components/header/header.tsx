import React, { useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import DrawerButton from "../drawer/drawer-button";
import AccordionContent from "../drawer/accordion";
import { useHeaderInfo } from "@/hooks/useHeaderInfo";
function Header() {
  const { loading, onSubmenuOpen, submenuData, isOpen, onDrawerToggle, isDrawerMenuOpen } = useHeaderInfo();
  const [activArrow, setActivArrow] = useState<number | null>(null);

  const onMouseEnter = (id: number) => {
    setActivArrow(id);
  };

  const onMouseLeave = () => {
    setActivArrow(null);
  };

  return (
    <header>
      <div className="w-full fixed top-0 z-20">
        <div className="max-sm:gap-4 mx-[252px] my-6 max-xl:mx-[110px] max-mij:ml-[120px] max-lg:mx-[130px] max-md:mx-[72px] max-sm:flex-col max-sm:mx-4  flex justify-between">
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
        <div className="bg-white mx-[252px] mt-20">
          <AccordionContent isOpen={isOpen}>
            {submenuData?.map(el => (
              <div key={el.id} className="flex gap-8">
                <div className="w-[30%]">
                  <div
                    className="flex justify-between my-2 border-b border-customBlack py-4"
                    onMouseEnter={() => onMouseEnter(el.id)}
                    onMouseLeave={onMouseLeave}
                  >
                    <p>{el.title}</p>
                    <Image src="icon/Vector.svg" width={10} height={10} alt="" className={activArrow === el.id ? "" : "hidden"} />
                  </div>
                </div>
                <div className="bg-black w-full"></div>
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
