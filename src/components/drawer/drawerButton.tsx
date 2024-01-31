import React from "react";
import Image from "next/image";
function DrawerButton() {
  return (
    <div className="hidden max-lg:block border-customBlack border-[1px] rounded-[100px] px-[12px] py-[12px]">
      <Image src="/icon/icon.svg" alt="" width={15} height={15} />
    </div>
  );
}

export default DrawerButton;
