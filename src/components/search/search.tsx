import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
function Search() {
  return (
    <div className="w-full">
      <div className="relative ">
        <input
          className=" placeholder-customBlack  px-[16px] py-[8px] rounded-[24px] border-[1px] border-black max-sm:w-full "
          type="text"
          placeholder="Поиск"
        />
        <i className="absolute top-3 right-4 text-customBlack fas fa-search"></i>
      </div>
    </div>
  );
}

export default Search;
