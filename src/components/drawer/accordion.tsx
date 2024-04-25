import React, { ReactNode, useRef, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

function AccordionContent({ children, isOpen, className }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen && contentRef.current && initialHeight === null) {
      setInitialHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, initialHeight]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={contentRef}
        className={className}
        style={{
          height: isOpen ? `${initialHeight}px` : "0",
          transition: "height 0.2s ease-in-out"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionContent;
