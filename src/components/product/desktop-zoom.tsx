import React, { useEffect } from "react";
import CloseBtn from "./close-button";
interface Props {
  onClose: () => void;
}
function DesktopZoom({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="absolute top-0 left-0 z-30 w-screen h-screen bg-white flex justify-center items-end">
      <CloseBtn onClose={onClose} />
    </div>
  );
}

export default DesktopZoom;
