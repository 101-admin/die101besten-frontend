"use client";
import React, { useMemo } from "react";
import type { Adds, SanityImage } from "@/lib";
import Link from "next/link";
import { OptimizedImage } from "./ui/OptimizedImage";
const Adds = ({ data }: { data?: Adds }) => {
  const randomImage = useMemo(() => {
    if (!data?.add?.images || data.add.images.length === 0) return null;
    const index = Math.floor(Math.random() * data.add.images.length);
    return data.add.images[index];
  }, [data?.add?.images]);

  console.log(randomImage, "[randomImage] add section");

  return (
    <div className="w-full container-primary py-12 lg:py-24 px-5">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-[16px] font-gte text-[#75787C] font-[350]">
            {data?.add?.title}
          </h6>
          <Link target="_blank" href={`${randomImage?.link}`}>
            {/* <img
              src={`${randomImage?.image?.url}`}
              alt={`${randomImage?.image?.alt}`}
            /> */}
            <OptimizedImage
              image={randomImage?.image as SanityImage}
              // className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Adds;
