"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SingleHotel from "./SingleHotel";
import { Hotel } from "@/lib/types/hotel.types";

const SpecialEditionHotels = ({
  totalHotels,
  hotels,
}: {
  totalHotels: number;
  hotels: Hotel[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("rankingCategory");
  const [idx, setIdx] = useState(() => {
    if (currentCategory === "luxury") return 0;
    if (currentCategory === "editors-choice") return 1;
    if (currentCategory === "new") return 2;
    return 1;
  });

  const sortedHotels = hotels
    ?.filter(
      (hotel) =>
        hotel?.ranking?.category === (currentCategory || "editors-choice")
    )
    ?.sort((a, b) => a?.name?.localeCompare(b?.name));

  console.log({ currentCategory, sortedHotels }, "@currentCategory");
  const length1 = hotels?.filter(
    (hotel) => hotel?.ranking?.category === "luxury"
  )?.length;
  const length2 = hotels?.filter(
    (hotel) => hotel?.ranking?.category === "editors-choice"
  )?.length;
  const length3 = hotels?.filter(
    (hotel) => hotel?.ranking?.category === "new"
  )?.length;

  const buttons = [
    {
      title: "International Luxury Partner",
      value: "luxury",
      length: length1,
    },
    {
      title: "Editors' Choice",
      value: "editors-choice",
      length: length2,
    },
    {
      title: "Best New Hotel Openings",
      value: "new",
      length: length3,
    },
  ];

  const updateSearchParams = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete("rankingCategory");
    } else {
      params.set("rankingCategory", value);
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const BtnHandle = (index: number) => {
    setIdx(index);
    updateSearchParams(buttons[index].value);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-5 lg:px-16 py-14 lg:py-32 gap-16">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-start items-baseline gap-3 lg:flex-row lg:justify-around lg:items-center mb-5 lg:mb-10">
          {buttons?.map((button, index) => {
            return (
              <button
                key={index}
                onClick={() => BtnHandle(index)}
                className={`flex gap-2 items-center pb-3 px-3 border-[#B65033] group ${
                  index == idx ? "border-b-2" : "border-none"
                }`}
              >
                <h2
                  className={`font-montserrat font-semibold  leading-[24px] group-hover:text-[#B65033] duration-200 ${
                    index == idx
                      ? "text-[#B65033] text-[20px] sm:text-[22px]"
                      : "text-[18px]"
                  }`}
                >
                  {button.title}
                </h2>
                <div
                  className={`w-6 h-6 flex justify-center items-center rounded-sm text-[15px] font-montserrat font-semibold group-hover:text-white group-hover:bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] duration-200 ${
                    index == idx
                      ? "bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] text-white"
                      : "bg-[#f0f0f0] "
                  }`}
                >
                  {button.length}
                </div>
              </button>
            );
          })}
        </div>

        <div
          className={`w-full flex-col justify-center items-center gap-6 md:gap-10 ${
            idx === 0 || idx === 1 || idx === 2 ? "flex" : "hidden"
          }`}
        >
          {sortedHotels?.map((hotel, index) => {
            return <SingleHotel key={index} data={hotel} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialEditionHotels;
