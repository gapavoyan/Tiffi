import React, { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

function AccordionContent({ children, isOpen, className }: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={contentRef}
        className={className}
        style={{
          height: isOpen ? contentRef.current!.scrollHeight : "0",
          transition: "height 0.1s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionContent;
