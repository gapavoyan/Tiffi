import React, { useEffect, useRef, useState } from "react";
import CloseBtn from "./close-button";
import Image from "next/image";

interface Props {
  onClose: () => void;
  selectedImageId: number;
  imageUrls: string[];
}

function ProductZoom({ onClose, imageUrls, selectedImageId }: Props) {
  const [index, setIndex] = useState(selectedImageId);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (imageContainerRef.current) {
      const scrollTop = imageContainerRef.current.scrollTop;
      imageContainerRef.current.scrollTop = scrollTop + e.movementY;
    }
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const prevSlide = () => {
    const newIndex = index === 0 ? imageUrls.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = index === imageUrls.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };
  return (
    <div className="fixed top-0 left-0 z-40 flex h-[100vh] w-[100vw] justify-center gap-x-10 overflow-hidden bg-white">
      <button onClick={prevSlide} className="max-md:hidden">
        <Image src="/icons/left-arrow.svg" width={40} height={40} alt="left-arrow" />
      </button>
      <div
        onMouseMove={onMouseMove}
        ref={imageContainerRef}
        className="hide-scrollbar h-full w-[950px] max-md:w-screen max-md:h-screen   cursor-move overflow-scroll"
      >
        <Image src={imageUrls[index]} className="w-full transform max-m:scale-150 max-md:scale-2" alt="product-image" />
      </div>
      <button onClick={nextSlide} className="max-md:hidden">
        <Image src="/icons/right-arrow.svg" width={40} height={40} alt="right-arrow" />
      </button>
      <CloseBtn onClose={onClose} />
    </div>
  );
}

export default ProductZoom;
