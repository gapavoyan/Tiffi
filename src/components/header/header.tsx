import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import DrawerButton from "../drawer/drawerButton";

function Header() {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  const toggleIsDrawerMenuOpen = () => {
    setIsDrawerMenuOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <header className=" w-full">
        <div className="max-sm:gap-4 mx-[252px] my-[24px] max-xl:mx-[175px] max-lg:mx-[142px] max-md:mx-[73px] max-sm:flex-col max-sm:mx-[16px]  flex justify-between">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <Image src="logo.svg" alt="" width={106} height={24} />
            </Link>
            <div className=" max-lg:hidden">
              <Navbar />
            </div>
            <DrawerButton
              onClick={toggleIsDrawerMenuOpen}
              isDrawerMenuOpen={isDrawerMenuOpen}
            />
          </div>
          <div className="flex ml-[180px] max-xl:ml-[120px] max-mij:ml-[30px] max-lg:ml-[12px] max-sm:ml-0 items-center ">
            <Search />
          </div>
        </div>
        <div className="w-full border-b-[1px] border-customBlack"></div>
      </header>
    </>
  );
}

export default Header;
