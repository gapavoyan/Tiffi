import React, { useEffect } from "react";
import CloseBtn from "./close-button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

interface Props {
  onClose: () => void;
  selectedImageId: number;
  imageUrls: string[];
}

function DesktopZoom({ onClose, imageUrls, selectedImageId }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 z-30 w-screen h-screen bg-white flex justify-center items-end">
      <Swiper className="mySwiper" initialSlide={selectedImageId}>
        {imageUrls.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} width={400} height={400} alt={`zoom-image-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CloseBtn onClose={onClose} />
    </div>
  );
}

export default DesktopZoom;
