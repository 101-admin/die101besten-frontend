"use client";
import React, { useMemo } from "react";
import type { AnzeigeImageBlock } from "@/lib/types/blocks.types";
import Link from "next/link";
const AnzeigeImage = ({ data }: { data?: AnzeigeImageBlock }) => {
  const randomImage = useMemo(() => {
    if (!data?.images || data.images.length === 0) return null;
    const index = Math.floor(Math.random() * data.images.length);
    return data.images[index];
  }, [data?.images]);

  return (
    <div className="w-full container-primary py-12 lg:py-24">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-[16px] font-gte text-[#75787C] font-[350]">
            {data?.title}
          </h6>
          <Link href={`${randomImage?.link}`}>
            <img
              src={`${randomImage?.image?.url}`}
              alt={`${randomImage?.image?.alt}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnzeigeImage;
