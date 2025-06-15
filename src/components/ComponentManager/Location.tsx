import React from "react";
import type { Location } from "@/lib";
const Location = ({ title, image }: Location) => {
  return (
    <section className="w-full lg:max-w-[1920px] mx-auto flex flex-col justify-center items-center py-10 select-none ">
      <div className=" w-full flex flex-col justify-center items-center ">
        <div className="w-full max-w-[1440px]">
          {title && (
            <p className="w-full px-5 lg:px-16 md:w-[60%] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] mb-5 font-normal">
              {title}
            </p>
          )}
        </div>

        <div className="flex w-full object-cover justify-center items-center mb-7 lg:mb-14">
          {image && (
            <img
              className="w-full"
              src={`${image?.url}`}
              alt={`${image?.alt}`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Location;
