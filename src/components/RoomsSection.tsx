"use client"
import React, { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { HotelInfo } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "./ui/ColoredText";

const RoomsSection = ({
  data,
}: {
  data?: HotelInfo;
}) => {
    const [showPopUp, setShowPopUp] = useState(false);
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white py-16 px-4 sm:px-8 lg:py-[64px] lg:px-[64px] relative">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[40px] ">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 h-auto">
          <div className="relative w-full">
            {data?.image && (
              <Image
                src={data?.image?.url || ""}
                alt={data?.image?.alt || ""}
                width={636}
                height={605}
                className="object-cover max-w-[636px] w-full h-[605px]"
              />
            )}
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[636px] flex flex-col lg:py-4 gap-5">
          {/* {data?.description && <PortableText value={data?.description} />} */}
          {data?.description && (
            <div className="prose prose-lg">
              <div className="[display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical] overflow-hidden">
                <PortableText value={data?.description} />
              </div>
            </div>
          )}

          <button
            onClick={() => setShowPopUp(true)}
            className="mt-2 btn-primary btn-primary-hover-de w-[300px] "
          >
            MEHR INFOS
          </button>
        </div>
      </div>


      <div
        onClick={() => setShowPopUp(false)}
        className={`w-screen h-screen z-50 bg-[black] bg-opacity-25 backdrop-blur-[8px] fixed top-0 left-0 px-5 ${
          showPopUp ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute w-full top-[50%] max-w-[1300px] left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 md:p-12 lg:p-16 bg-white z-50 flex-col justify-center items-center ${
          showPopUp ? "flex" : "hidden"
        } `}
      >
        <div className="w-full flex justify-between items-center mb-5 lg:mb-10">
          {data?.title && (
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-3 lg:mb-6">
              <ColoredText text={data?.title} />
            </h1>
          )}
          <IoCloseOutline
            onClick={() => setShowPopUp(false)}
            className="text-[25px] cursor-pointer"
          />
        </div>
        <div>
          {data?.description && <PortableText value={data?.description} />}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
