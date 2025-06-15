"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const PrincipleComponent = ({
  index,
  title,
  description,
}: {
  index: number;
  title?: string;
  description?: string;
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
    <div
      onClick={switchHanddle}
      className="w-full flex justify-between items-start py-5 md:py-10 border-b border-[#B65033] cursor-pointer"
    >
      <div className="flex justify-start items-start gap-5 md:gap-10 w-full">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-[linear-gradient(90deg,#B65033_0.21%,#F49E6E_100%)] flex justify-center items-center font-gte font-bold text-[20px] sm:text-[24px] text-white">
          {index + 1}.
        </div>
        <div className="flex flex-col justify-start items-baseline gap-2 w-[70%] sm:w-[80%]">
          {title && (
            <h1 className="font-ogg font-normal leading-[25px] text-[20px] sm:leading-[30px] sm:text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px]">
              {title}
            </h1>
          )}
          {description && (
            <p
              className={`font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[20px] lg:leading-[24px] font-gte mb-3  duration-200 ${
                switchBtn
                  ? "h-0 overflow-hidden"
                  : "h-full lg:h-36 overflow-auto"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="w-[20%] flex justify-end items-baseline">
        <div
          className={`w-10 h-10 md:w-16 select-none md:h-16 flex justify-center items-center border-2 border-black ${
            switchBtn ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {switchBtn ? (
            // <h4 className="text-[30px] font-bold">+</h4>
            <FaPlus className="text-[20px]" />
          ) : (
            <FaMinus className="text-[20px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrincipleComponent;
