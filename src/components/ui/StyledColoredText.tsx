import React from "react";
import { ColoredText } from "./ColoredText";
import { cn } from "@/lib/utils";

interface StyledColoredTextProps {
  text: string;
  color?: string;
  className?: string;
}

export const StyledColoredText: React.FC<StyledColoredTextProps> = ({
  text = "some # text",
  color = "#B65033",
  className,
}) => {
  const headingClasses = cn(
    "font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5",
    className
  );

  return (
    <h1 className={headingClasses}>
      <ColoredText
        text={text as string}
        color={color}
        className={headingClasses}
      />
    </h1>
  );
};

// Example usage:
// <StyledColoredText text="Die 101 besten Hotels {Deutschland}" />
