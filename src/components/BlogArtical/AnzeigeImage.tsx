"use client";
import React, { useMemo } from "react";
import type { PartnerSection } from "@/lib";
const AnzeigeImage = ({ data }: { data?: PartnerSection }) => {
  const randomImage = useMemo(() => {
    if (!data?.images || data.images.length === 0) return null;
    const index = Math.floor(Math.random() * data.images.length);
    return data.images[index];
  }, [data?.images]);

  return (
    <div className="w-full max-w-[1920px] mx-auto py-16 sm:py-20 md:py-24 lg:py-32 select-none">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-[16px] font-gte text-[#75787C] font-[350]">
            {data?.title}
          </h6>
          <img
            src={`${randomImage?.image?.url}`}
            alt={`${randomImage?.image?.alt}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnzeigeImage;
