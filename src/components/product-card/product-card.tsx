import React from "react";
import Image from "next/image";
import { Product } from "@/dataBase/data-categories";

interface Props {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: Props) {
  const { img, price, title } = product;
  return (
    <div className="flex flex-col items-start gap-6 w-full cursor-pointer" onClick={onClick}>
      <div className="w-full  relative aspect-[4/4]">
        <Image src={`https://api.tiffi.store/${img}`} fill alt="collectionImage" objectFit="cover" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-customBlack max-md:text-sm font-railway">{title}</span>
        <span className="text-customGreen font-railway">{price + " Руб."}</span>
      </div>
    </div>
  );
}

export default ProductCard;
