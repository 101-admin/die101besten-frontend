"use client";
import React, { useState } from "react";

const PrincipleComponent = ({
  num,
  title,
  description,
}: {
  num: number;
  title: string;
  description: string;
}) => {
  const [switchBtn, setSwitchBtn] = useState(true);
  const switchHanddle = () => {
    if (switchBtn) {
      setSwitchBtn(false);
    } else {
      setSwitchBtn(true);
    }
  };
  return (
    <div className="w-full flex justify-between items-start py-5 md:py-10 border-b border-[#B65033]">
      <div className="flex justify-start items-start gap-5 md:gap-10 w-full">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] flex justify-center items-center font-gte font-bold text-[20px] sm:text-[24px] text-white">
          {num}.
        </div>
        <div className="flex flex-col justify-start items-baseline gap-2 w-[70%] sm:w-[80%]">
          <h1 className="font-ogg font-normal leading-[25px] text-[20px] sm:leading-[30px] sm:text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px] text-center">
            {title}
          </h1>
          <p
            className={`font-normal text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] font-Epilogue mb-3  duration-200 ${
              switchBtn ? "h-0 overflow-hidden" : "h-full lg:h-36 overflow-auto"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="w-[20%] flex justify-end items-baseline">
        <div
          onClick={switchHanddle}
          className={`w-10 h-10 md:w-16 select-none md:h-16 flex justify-center items-center border-2 border-black cursor-pointer ${
            switchBtn ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {switchBtn ? (
            <h4 className="text-[30px] font-bold">+</h4>
          ) : (
            <h4 className="text-[30px]  rotate-90">I</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrincipleComponent;
