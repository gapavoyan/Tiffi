import React, { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import DrawerButton from "../drawer/drawer-button";
import { useToggle } from "@/hooks/use-toggle";
import AccordionContent from "../drawer/accordion";
function Header() {
  const [isDrawerMenuOpen, onToggleDrawer] = useToggle();
  const _mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const onDrawerToggle = () => {
    onToggleDrawer();
  };

  return (
    <header>
      <div className=" w-full fixed top-0 z-20">
        <div className="max-sm:gap-4 mx-[252px] my-6 max-xl:mx-[160px] max-mij:ml-[150px] max-lg:mx-[130px] max-md:mx-[72px] max-sm:flex-col max-sm:mx-4  flex justify-between">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <Image src="logo.svg" alt="" width={106} height={24} />
            </Link>
            <div className=" max-lg:hidden">
              <Navbar />
            </div>
            <DrawerButton onClick={onDrawerToggle} isDrawerMenuOpen={isDrawerMenuOpen} />
          </div>
          <div className="flex ml-[180px] max-xl:ml-[120px] max-mij:ml-[30px] max-lg:ml-3 max-sm:ml-0 items-center ">
            <Search />
          </div>
        </div>
        <div className={`border-t border-customBlack flex flex-col justify-center max-md:flex-col items-center`}>
          <AccordionContent isOpen={isDrawerMenuOpen} className="w-full">
            <div className="w-full flex justify-center items-center bg-white">
              <Navbar />
            </div>
          </AccordionContent>
        </div>
      </div>
      <div className="mt-[118px] max-lg:mt-[90px] max-sm:mt-[146px]" />
    </header>
  );
}

export default Header;
