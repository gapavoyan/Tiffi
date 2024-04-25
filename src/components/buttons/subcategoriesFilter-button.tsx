import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

function Button({ children, isActive, onClick }: Props) {
  return (
    <button
      className={`px-8 py-3 rounded-[8px] transition-all text-sm w-max h-max border border-solid border-customBlack hover:bg-customBlack hover:text-white font-railway ${
        isActive ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
