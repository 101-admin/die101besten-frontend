import { cn } from "@/lib/utils";
import React from "react";

interface ColoredTextProps {
  text?: string;
  color?: string;
  className?: string;
  symbol?: string;
}

export const ColoredText: React.FC<ColoredTextProps> = ({
  text = "some # text",
  color = "#B65033",
  className = "",
  symbol = "#",
}) => {
  // Split the text by the symbol

  // console.log(text, "@text");

  if (!text) {
    return <span className={className}>{text}</span>;
  }

  const parts = text?.split(symbol);

  // If no symbol found, return the text as is
  if (parts?.length === 1) {
    return <span className={className}>{text}</span>;
  }

  return (
    <>
      {parts?.map((part, index) => {
        // Even indices are regular text, odd indices are colored text
        if (index % 2 === 0) {
          return (
            <span key={index} className={className}>
              {part}
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className={cn(
                "bg-gradient-to-r from-[#B64F32] to-[#F49E6E] text-transparent bg-clip-text box-decoration-clone",
                className
              )}
            >
              {part}
            </span>
          );
        }
      })}
    </>
  );
};
