import React, { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import DrawerButton from "../drawer/drawerButton";
import { useToggle } from "@/hooks/use-toggle";
import AccordionContent from "../drawer/accordion";

function Header() {
  const [isDrawerMenuOpen, onToggleDrawer] = useToggle();
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const onDrawerToggle = () => {
    onToggleDrawer();
  };

  return (
    <>
      <header className=" w-full relative ">
        <div className="max-sm:gap-4 mx-[252px] my-[24px] max-xl:mx-[175px] max-lg:mx-[142px] max-md:mx-[73px] max-sm:flex-col max-sm:mx-[16px]  flex justify-between">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <Image src="logo.svg" alt="" width={106} height={24} />
            </Link>
            <div className=" max-lg:hidden max-lg:gap-[]">
              <Navbar />
            </div>
            <DrawerButton
              onClick={onDrawerToggle}
              isDrawerMenuOpen={isDrawerMenuOpen}
            />
          </div>
          <div className="flex ml-[180px] max-xl:ml-[120px] max-mij:ml-[30px] max-lg:ml-[12px] max-sm:ml-0 items-center ">
            <Search />
          </div>
        </div>
        <div
          className={`border-t-[1px] border-customBlack flex flex-col justify-center max-md:flex-col items-center`}
        >
          <AccordionContent isOpen={isDrawerMenuOpen} className="w-full">
            <div className="w-full flex justify-center items-center">
              <Navbar />
            </div>
          </AccordionContent>
        </div>
      </header>
    </>
  );
}

export default Header;
