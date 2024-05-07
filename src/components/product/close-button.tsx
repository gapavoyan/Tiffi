import Image from "next/image";
import React from "react";

interface Props {
  onClose: () => void;
}
function CloseBtn({ onClose }: Props) {
  return (
    <div className="fixed bottom-6 z-40 flex w-full items-center justify-center">
      <button className="flex items-center justify-center gap-x-4 rounded-[36px] bg-white px-6 py-2" onClick={onClose}>
        <p className="font-lora text-sm text-primary">Закрыть</p>
        <Image src="/icons/close.svg" width={8} height={8} alt="close-image" />
      </button>
    </div>
  );
}

export default CloseBtn;
