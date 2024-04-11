interface CollectionProps {
  id: number;
  description: string;
  price: string | number;
  img: string;
}
export const dataNewCollection: CollectionProps[] = [
  {
    id: 1,
    description: "Мягкая облачная рубашка",
    price: "2,500 Руб.",
    img: "/images/sliderImg.png"
  },
  {
    id: 2,
    description: "Мягкая облачная рубашка",
    price: "2,500 Руб.",
    img: "/images/sliderImg2.png"
  }
];
