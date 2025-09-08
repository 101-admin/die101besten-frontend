"use client";
import React from "react";
import { useSearchParams, useParams } from "next/navigation";

const ZeroHotels = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const search = searchParams.get("search");
  const locale = params.locale;
  return (
    <section className="w-full flex flex-col justify-center items-center px-5 lg:px-16 py-10 lg:py-16">
      <div className="max-w-[1184px] w-full flex flex-col justify-start items-baseline gap-6 lg:gap-10">
        <h1 className="font-ogg font-normal text-[30px] md:text-[40px] lg:text-[48px] leading-[35px] md:leading-[45px] lg:leading-[52px] text-center">
          {locale === "de"
            ? "Kein Hotel zu Ihrem Suchergebnis "
            : "No Hotel of your Search Result "}
          "{search}"
        </h1>
      </div>
    </section>
  );
};

export default ZeroHotels;
