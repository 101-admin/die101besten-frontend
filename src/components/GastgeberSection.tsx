import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import type { HotelInfoPremium } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "./ui/ColoredText";
const GastgeberSection = ({
  blurhandle2,
  blur2,
  closehandle2,
  hotelInfo,
}: {
  blurhandle2: () => void;
  blur2: boolean;
  closehandle2: () => void;
  hotelInfo: HotelInfoPremium;
}) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-32 relative">
      <div className="max-w-[1192px] w-full">
        <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-8 md:gap-16">
          {/* Image */}
          <div className="w-full lg:w-auto flex flex-col justify-start items-baseline">
            <h2 className="font-ogg font-normal text-[18px] sm:text-[21px] md:text-[24px] lg:text-[32px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] mb-4">
              {hotelInfo?.Person?.host}
            </h2>
            <div className="w-full">
              <img
                className="max-w-[300px] w-full h-[376px] object-cover"
                src={hotelInfo?.Person?.image?.url}
                alt={hotelInfo?.Person?.image?.alt}
              />
            </div>
            <div className="mt-4 gap-2">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-gte font-[350]">
                {hotelInfo?.Person?.role}
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] font-gte font-[350]">
                {hotelInfo?.Person?.name}
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="w-full max-w-[700px] flex flex-col lg:justify-center">
            {hotelInfo?.description && (
              <PortableText value={hotelInfo?.description} />
            )}

            <div className="mt-4">
              <button
                onClick={blurhandle2}
                className="btn-primary btn-primary-hover-de w-full sm:w-[300px]"
              >
                {hotelInfo?.readMore}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute w-full top-[50%] max-w-[1300px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex-col justify-center items-center ${
          blur2 ? "flex" : "hidden"
        }`}
      >
        <div className="w-full flex justify-between items-center mb-4 md:mb-6 lg:mb-10">
          <h1 className="font-ogg font-normal text-[22px] sm:text-[28px] md:text-[34px] lg:text-[48px] leading-[26px] sm:leading-[32px] md:leading-[38px] lg:leading-[52px]">
            <ColoredText text={hotelInfo?.title} />
          </h1>
          <IoCloseOutline
            onClick={closehandle2}
            className="text-[22px] sm:text-[25px] cursor-pointer"
          />
        </div>
        <div>
          {hotelInfo?.description && (
            <PortableText value={hotelInfo?.description} />
          )}
        </div>
      </div>
    </section>
  );
};

export default GastgeberSection;
