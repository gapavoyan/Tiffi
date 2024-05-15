import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Search from "../search/searchInput";
import DrawerButton from "../drawer/drawer-button";
import AccordionContent from "../drawer/accordion";
import { useHeaderInfo } from "@/hooks/useHeaderInfo";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

function Header() {
  const {
    onSubmenuOpen,
    onDrawerToggle,
    isDrawerMenuOpen,
    submenuData,
    isOpen,
    isMobile,
    onCloseMobileModal,
    onSubCategoryItemClick,
    onBrandsItemClick,
    brandsData
  } = useHeaderInfo();

  return (
    <header className="h-[118px] max-m:h-[90px] max-lg:h-[90px] max-md:h-[90px] max-sm:h-[148px] bg-white">
      <div className="fixed top-0 z-20 w-full ">
        <div className=" bg-white max-sm:gap-4 px-[252px] py-6 max-xl:px-[110px] max-mij:pl-[120px] max-lg:px-[130px] max-md:px-[72px] max-sm:px-4 flex justify-between max-sm:flex-col">
          <div className="flex justify-around max-lg:justify-between items-center w-full">
            <Link href="/">
              <Image src="/logo.svg" alt="logo-tiffi" width={106} height={24} />
            </Link>
            <div className="max-lg:hidden">
              <Navbar onSubmenuOpen={onSubmenuOpen} />
            </div>
            <DrawerButton onClick={onDrawerToggle} isDrawerMenuOpen={isDrawerMenuOpen} />
          </div>
          <div className="flex ml-[90px] max-xl:ml-[100px] max-mij:ml-[10px] max-lg:ml-3 max-sm:ml-0 items-center">
            <Search />
          </div>
        </div>
        <div className="border-t border-customBlack flex flex-col justify-center max-md:flex-col items-center">
          <AccordionContent isOpen={isDrawerMenuOpen} className="w-full">
            <div className="w-full flex justify-center bg-white max-md:h-screen">
              <Navbar onSubmenuOpen={onSubmenuOpen} />
            </div>
          </AccordionContent>
        </div>
        <div className="max-m:hidden bg-white">
          <DesktopHeader
            isOpen={isOpen}
            submenuData={submenuData}
            onSubCategoryItemClick={onSubCategoryItemClick}
            onBrandsItemClick={onBrandsItemClick}
            brandsData={brandsData}
          />
        </div>
        <div className="hidden max-m:block h-full">
          <div>
            {isOpen && isMobile && submenuData && (
              <MobileHeader
                brandsData={brandsData}
                submenuData={submenuData}
                onClose={onCloseMobileModal}
                onSubCategoryItemClick={onSubCategoryItemClick}
                onBrandsItemClick={onBrandsItemClick}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
