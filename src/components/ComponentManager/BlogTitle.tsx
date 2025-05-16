import React from "react";
import { BlogPageTitle } from "@/lib";
import { ColoredText } from "../ui/ColoredText";

const BlogTitle = ({ title, description }: BlogPageTitle) => {
  return (
    <div className="w-full pt-12 lg:pt-20">
      <div className="w-full max-w-[1184px] mx-auto font-ogg py-12 px-4 gap-8">
        {/* Main Heading */}
        <div className="max-w-[700px] mx-auto">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[64px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[64px] text-center mb-6 lg:mb-12">
            <ColoredText text={title} />
          </h1>

          {/* Subheading */}
          <div className="font-gte font-[350] leading-[18px] text-[16px] sm:leading-[18px] sm:text-[16px] md:leading-[22px] md:text-[18px] lg:leading-[32px] lg:text-[24px] text-center mb-8 lg:mb-16 max-w-[800px] mx-auto">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;
