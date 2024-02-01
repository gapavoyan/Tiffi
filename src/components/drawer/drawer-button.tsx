import Image from "next/image";
import React from "react";
interface Props {
  onClick: () => void;
  isDrawerMenuOpen: boolean;
}

function DrawerButton({ onClick, isDrawerMenuOpen }: Props) {
  return (
    <button
      className="hidden max-lg:block border-customBlack border-[1px] rounded-[100px] px-[12px] py-[12px] cursor-pointer"
      onClick={onClick}
    >
      <Image src={`/icon/${isDrawerMenuOpen ? "iconMin" : "icon"}.svg`} alt="" width={15} height={15} />
    </button>
  );
}

export default DrawerButton;
