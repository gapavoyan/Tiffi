import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import DrawerButton from "../drawer/drawer-button";
import AccordionContent from "../drawer/accordion";
import { useHeaderInfo } from "@/hooks/useHeaderInfo";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

function Header() {
  const { onSubmenuOpen, onDrawerToggle, isDrawerMenuOpen, submenuData, isOpen, isMobile, onCloseMobileModal } = useHeaderInfo();

  return (
    <header>
      <div className="w-full fixed top-0 z-20">
        <div className="max-sm:gap-4 mx-[252px] my-6 max-xl:mx-[110px] max-mij:ml-[120px] max-lg:mx-[130px] max-md:mx-[72px] max-sm:mx-4 flex justify-between max-sm:flex-col ">
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
        <div className="max-m:hidden">
          <DesktopHeader isOpen={isOpen} submenuData={submenuData} />
        </div>
        <div className="hidden max-m:block h-full">
          <div className="">
            {isDrawerMenuOpen && isMobile && (
              <MobileHeader isOpen={isOpen} submenuData={submenuData} onClose={onCloseMobileModal} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
