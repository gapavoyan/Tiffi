import Image from "next/image";
import React, { useState } from "react";
interface Props {
  onClick: () => void;
  isDrawerMenuOpen: Boolean;
}

function DrawerButton({ onClick, isDrawerMenuOpen }: Props) {
  return (
    <div
      className="hidden max-lg:block border-customBlack border-[1px] rounded-[100px] px-[12px] py-[12px] cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={`/icon/${isDrawerMenuOpen ? "iconMin" : "icon"}.svg`}
        alt=""
        width={15}
        height={15}
      />
    </div>
  );
}

export default DrawerButton;
