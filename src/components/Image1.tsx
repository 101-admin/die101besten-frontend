"use client";
import React, { useMemo } from "react";
import type { ImageSection } from "@/lib";
const Image1 = ({ title, images }: ImageSection) => {
  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * images?.length);
    return images?.[index];
  }, [images]);

  return (
    <div className="w-full lg:max-w-[1920px] mx-auto py-16 sm:py-20 md:py-24 lg:py-32 select-none">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          {title && (
            <h6 className="text-[16px] font-gte text-[#75787C] font-[350]">
              {title}
            </h6>
          )}
          {randomImage && (
            <img
              src={`${randomImage?.image?.url}`}
              alt={randomImage?.image?.alt}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Image1;
