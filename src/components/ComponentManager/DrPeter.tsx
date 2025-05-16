import React from "react";
// import { RiDoubleQuotesL } from "react-icons/ri";
// import { RiDoubleQuotesR } from "react-icons/ri";
import type { ImageQuote } from "@/lib";

const DrPeter = ({ image, name, post, description }: ImageQuote) => {
  return (
    <section className="w-full lg:max-w-[1440px] mx-auto flex flex-col justify-center items-center relative gap-10 md:gap-0 lg:gap-10 px-6 pb-0 md:p-16 md:pb-32">
      <div className="w-auto flex flex-col md:flex-row md:items-end">
        <div className="z-10 flex flex-col items-center md:items-start h-full md:self-stretch py-0 px-6 md:px-0 -mb-10 md:mb-6 lg:max-xl:mb-0 lg:max-xl:-mt-6">
          <img
            className="w-full h-full aspect-[3/4] max-w-[300px] md:max-w-[400px] md:min-w-[300px]"
            src={`${image?.url}`}
            alt={`${image?.alt}`}
          />
        </div>
        <div className="flex flex-col md:items-start w-full md:max-w-[810px] ml-0 md:-ml-4 pt-20 px-6 pb-10 md:pr-12 lg:pr-16 md:pl-[72px] lg:pl-24 md:py-12 lg:py-16 gap-6 bg-[#F9F8FA]">
          <q className="text-[15px] sm:text-[21px] md:text-[27px] lg:text-[32px] font-gte italic font-light">
            {description}
          </q>
          <div className="text-[20px] font-gte font-bold">
            <p>{post}</p>
            <p className="font-gte font-[350] text-[20px]">{name}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrPeter;
