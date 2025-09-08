"use client";
import React from "react";
import type { Hotel } from "@/lib";
import NextLink from "../NextLink";
import { useSearchParams, useParams } from "next/navigation";

const index = ({ hotels }: { hotels: Hotel[] }) => {
  const searchParams = useSearchParams();
  const params = useParams();
  const search = searchParams.get("search");
  const locale = params.locale;
  return (
    <section className="w-full flex flex-col justify-center items-center px-5 lg:px-16 py-10 lg:py-16">
      <div className="max-w-[1184px] w-full flex flex-col justify-start items-baseline gap-6 lg:gap-10">
        <h1 className="font-ogg font-normal text-[30px] md:text-[40px] lg:text-[48px] leading-[35px] md:leading-[45px] lg:leading-[52px]">
          {locale === "de" ? "Suchergebnisse für " : "Search Results for "}"
          {search}"
        </h1>
        <div className="w-full flex flex-col justify-start items-baseline gap-6 lg:gap-10">
          {hotels?.map((hotel, index) => {
            return (
              <NextLink
                href={`/hotels/${hotel?.slug}`}
                key={index}
                className="flex flex-col justify-start items-baseline gap-1 cursor-pointer"
              >
                <h4 className="font-gte underline font-[350] text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] md:leading-[34px] lg:leading-[36px]">
                  {hotel?.name}
                </h4>
                <p className="font-gte font-[350] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px]">
                  /hotels/{hotel?.slug}
                </p>
              </NextLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
