import React, { useRef } from "react";
import { useRouter } from "next/router";
import "@fortawesome/fontawesome-free/css/all.css";

function SearchInput() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current?.value) {
      if (e && e.key === "Enter") {
        router.push(`/search?page=${1}&query=${inputRef.current.value}`);
        inputRef.current.value = "";
      } else if (!e) {
        router.push(`/search?page=${1}&query=${inputRef.current.value}`);
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full ">
        <input
          ref={inputRef}
          className=" placeholder-customBlack   px-[16px] py-[8px] rounded-[24px] border-[1px] border-black max-sm:w-full "
          type="text"
          placeholder="Поиск"
          onKeyDown={onSearch}
          style={{ width: "100%" }}
        />
        <button onClick={() => onSearch()}>
          <i className="absolute top-3 right-4 text-customBlack fas fa-search" />
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
