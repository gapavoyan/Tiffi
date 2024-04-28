import React, { useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { useRouter } from "next/router";
function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  function onSearchWithEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (inputRef.current?.value) {
        router.push(`/search?query=${inputRef.current.value}`);
        inputRef.current.value = "";
      }
    }
  }
  return (
    <div className="w-full">
      <div className="relative ">
        <input
          ref={inputRef}
          className=" placeholder-customBlack  px-[16px] py-[8px] rounded-[24px] border-[1px] border-black max-sm:w-full "
          type="text"
          placeholder="Поиск"
          onKeyDown={onSearchWithEnter}
        />
        <i className="absolute top-3 right-4 text-customBlack fas fa-search"></i>
      </div>
    </div>
  );
}

export default Search;
