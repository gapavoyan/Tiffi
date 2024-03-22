import React from "react";
import Image from "next/image";
interface PropsNavigate {
  onClick: () => void;
}
function CollectionButton({ onClick }: PropsNavigate) {
  return (
    <div>
      <button onClick={onClick}>
        <div className="flex items-center gap-3">
          <p className="text-sm font-lora">Коллекция</p>
          <Image src="/icon/hrefArrowLeft.svg" width={40} height={40} alt="" />
        </div>
      </button>
    </div>
  );
}

export default CollectionButton;
