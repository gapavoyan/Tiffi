import React from "react";

function Loading() {
  return (
    <div className="w-[70vw] max-m:w-[80vw] max-sm:w-[95vw] flex justify-center items-center h-[400px]">
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
}

export default Loading;
