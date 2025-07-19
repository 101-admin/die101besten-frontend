"use client";
import React, { useMemo } from "react";
import type { ImageSection, SanityImage } from "@/lib";
import Link from "next/link";
import { OptimizedImage } from "./ui/OptimizedImage";
const Image1 = ({ title, images }: ImageSection) => {
  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * images?.length);
    return images?.[index];
  }, [images]);

  return (
    <div className="w-full lg:max-w-[1920px] mx-auto px-5 py-16 sm:py-20 md:py-24 lg:py-32 select-none">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          {title && (
            <h6 className="text-[16px] font-gte text-[#75787C] font-[350]">
              {title}
            </h6>
          )}
          {randomImage && (
            <Link target="_blank" href={`${randomImage?.link}`}>
              {/* <img
                  src={`${randomImage?.image?.url}`}
                  alt={`${randomImage?.image?.alt}`}
                /> */}
              <OptimizedImage
                image={randomImage?.image as SanityImage}
                className="w-full h-full object-cover"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Image1;
