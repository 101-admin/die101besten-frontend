import React from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { HotelInfo } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "./ui/ColoredText";

const RoomsSection = ({
  blurhandle2,
  blur2,
  closehandle2,
  data,
}: {
  blurhandle2: () => void;
  blur2: boolean;
  closehandle2: () => void;
  data?: HotelInfo;
}) => {
  console.log(data, "rooms section");
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white py-16 px-4 sm:px-8 lg:py-[64px] lg:px-[64px] relative">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[40px] ">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 h-auto">
          <div className="relative w-full">
            <Image
              src={data?.image?.url || ""}
              alt={data?.image?.alt || ""}
              width={636}
              height={605}
              className="object-cover max-w-[636px] w-full h-[605px]"
            />
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[636px] flex flex-col lg:py-4 gap-5">
          {data?.description && <PortableText value={data?.description} />}

          <button
            onClick={blurhandle2}
            className="mt-2 btn-primary btn-primary-hover-de w-[300px] "
          >
            {data?.readMore}
          </button>
        </div>
      </div>
      <div
        className={`absolute w-full top-[50%] max-w-[1300px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] p-8 md:p-12 lg:p-16 bg-white flex-col justify-center items-center ${
          blur2 ? "flex" : "hidden"
        } `}
      >
        <div className="w-full flex justify-between items-center mb-5 lg:mb-10">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-3 lg:mb-6">
            <ColoredText text={data?.title} />
          </h1>
          <IoCloseOutline
            onClick={closehandle2}
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
