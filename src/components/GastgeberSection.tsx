"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import type { HotelInfoPremium, SanityImage } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "./ui/ColoredText";
import { OptimizedImage } from "./ui/OptimizedImage";
const GastgeberSection = ({ hotelInfo }: { hotelInfo: HotelInfoPremium }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-20 relative">
      <div className="max-w-[1192px] w-full">
        <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-8 md:gap-16">
          {/* Image */}
          <div className="w-full lg:w-auto flex flex-col justify-start items-baseline">
            {hotelInfo?.Person?.host && (
              <h2 className="font-ogg font-normal text-[18px] sm:text-[21px] md:text-[24px] lg:text-[32px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] mb-4">
                {hotelInfo?.Person?.host}
              </h2>
            )}
            <div className="w-full">
              {hotelInfo?.Person?.image && (
                // <img
                //   className="max-w-[300px] w-full h-[376px] object-cover"
                //   src={hotelInfo?.Person?.image?.url}
                //   alt={hotelInfo?.Person?.image?.alt}
                // />
                <OptimizedImage
                  image={hotelInfo?.Person?.image as SanityImage}
                  className="max-w-[300px] w-full h-[376px] object-cover"
                  // width={300}
                  // height={376}
                  priority
                />
              )}
            </div>
            <div className="mt-4 gap-2">
              {hotelInfo?.Person?.role && (
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-gte font-[350]">
                  {hotelInfo?.Person?.role}
                </p>
              )}
              {hotelInfo?.Person?.name && (
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] font-gte font-[350]">
                  {hotelInfo?.Person?.name}
                </p>
              )}
            </div>
          </div>

          {/* Text */}
          <div className="w-full max-w-[700px] flex flex-col lg:justify-center">
            {hotelInfo?.description && (
              <div className="prose prose-lg">
                <div className="[display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical] overflow-hidden">
                  <PortableText value={hotelInfo?.description} />
                </div>
              </div>
            )}

            <div className="mt-8">
              <button
                onClick={() => setShowPopUp(true)}
                className="btn-primary btn-primary-hover-de w-full sm:w-[300px]"
              >
                MEHR INFOS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowPopUp(false)}
        className={`w-screen h-screen z-50 bg-[black] bg-opacity-25 backdrop-blur-[8px] fixed top-0 left-0 px-5 ${
          showPopUp ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute w-full top-[50%] max-w-[1300px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex-col justify-center items-center ${
          showPopUp ? "flex" : "hidden"
        }`}
      >
        <div className="w-full flex justify-between items-center mb-4 md:mb-6 lg:mb-10">
          {hotelInfo?.title && (
            <h1 className="font-ogg font-normal text-[22px] sm:text-[28px] md:text-[34px] lg:text-[48px] leading-[26px] sm:leading-[32px] md:leading-[38px] lg:leading-[52px]">
              <ColoredText text={hotelInfo?.title} />
            </h1>
          )}
          <IoCloseOutline
            onClick={() => setShowPopUp(false)}
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
