import React from "react";
import { ColoredText } from "../ui/ColoredText";
const Hero = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto pb-16 md:pb-32  pt-8 md:pt-12 lg:pt-[64px] px-4 sm:px-6 md:px-12 lg:px-[128px]">
      <div className="max-w-[1140px] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[32px]">
        {/* Text Content */}
        <div className="w-full lg:max-w-[700px] mx-auto">
          {title && (
            <h1 className="font-ogg font-normal text-[28px] sm:text-[38px] md:text-[48px] lg:text-[64px] leading-[32px] sm:leading-[42px] md:leading-[52px] lg:leading-[64px] text-center mb-4 sm:mb-6 lg:mb-12">
              <ColoredText text={title} />
            </h1>
          )}

          {/* Subheading */}
          {description && (
            <div className="font-gte font-[350] leading-[22px] text-[14px] sm:leading-[24px] sm:text-[16px] md:leading-[28px] md:text-[18px] lg:leading-[32px] lg:text-[24px] text-center mb-6 sm:mb-8 lg:mb-16 max-w-[800px] mx-auto">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
