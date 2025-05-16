"use client";
import React, { useState } from "react";
import SingleHotel from "./SingleHotel";
import ChoiseData1 from "@/Data/ChoiceData1";
import ChoiseData2 from "@/Data/ChoiceData2";
import ChoiseData3 from "@/Data/ChoiceData3";

const HotelChoice = () => {
  const [idx, setIdx] = useState(0);
  const buttons = [
    {
      title: "International Luxury Partner",
      qty: ChoiseData1.length,
    },
    {
      title: "Editors’ Choice",
      qty: ChoiseData2.length,
    },
    {
      title: "Best New Hotel Openings",
      qty: ChoiseData3.length,
    },
  ];
  const BtnHandle = (index: number) => {
    setIdx(index);
  };
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center px-5 lg:px-16 py-14 lg:py-32 gap-16">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-start items-baseline gap-3 lg:flex-row lg:justify-around lg:items-center mb-5 lg:mb-10">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                onClick={() => BtnHandle(index)}
                className={`flex gap-2 items-center pb-3 px-3 border-[#B65033] group ${index == idx ? "border-b-2" : "border-none"}`}
              >
                <h2
                  className={`font-montserrat font-semibold  leading-[24px] group-hover:text-[#B65033] group-hover:text-[22px] duration-200 ${index == idx ? "text-[#B65033] text-[20px] sm:text-[22px]" : "text-[18px]"}`}
                >
                  {button.title}
                </h2>
                <div
                  className={`w-6 h-6 flex justify-center items-center rounded-sm text-[15px] font-montserrat font-semibold group-hover:text-white group-hover:bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] duration-200 ${index == idx ? "bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] text-white" : "bg-[#f0f0f0] "}`}
                >
                  {button.qty}
                </div>
              </button>
            );
          })}
        </div>
        <div
          className={`w-full flex-col justify-center items-center gap-6 md:gap-10 ${idx === 0 ? "flex" : "hidden"}`}
        >
          {ChoiseData1.map((hotel, index) => {
            return <SingleHotel key={index} {...hotel} />;
          })}
        </div>
        <div
          className={`w-full flex-col justify-center items-center gap-6 md:gap-10 ${idx === 1 ? "flex" : "hidden"}`}
        >
          {ChoiseData2.map((hotel, index) => {
            return <SingleHotel key={index} {...hotel} />;
          })}
        </div>
        <div
          className={`w-full flex-col justify-center items-center gap-6 md:gap-10 ${idx === 2 ? "flex" : "hidden"}`}
        >
          {ChoiseData3.map((hotel, index) => {
            return <SingleHotel key={index} {...hotel} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HotelChoice;
