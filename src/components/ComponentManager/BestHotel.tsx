import React from "react";
import HotelCard from "./HotelCard";
import { DieBesten } from "@/lib";
import { ColoredText } from "../ui/ColoredText";

const BestHotel = ({ title, description, bestenSection, id }: DieBesten) => {
  return (
    <section
      id={id}
      className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 select-none"
    >
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        {title && (
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
            <ColoredText text={title} />
          </h1>
        )}
        {description && (
          <p className="font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[20px] lg:leading-[24px] font-gte mb-8 lg:w-1/2">
            {description}
          </p>
        )}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5 sm:py-7 lg:py-10">
          {bestenSection?.map((bestHotel, index) => {
            const { percentage, description, title } = bestHotel;
            return (
              <HotelCard
                key={index}
                percentage={percentage}
                description={description}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestHotel;
