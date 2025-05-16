import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import type { HotelHighlights } from "@/lib";
import { Hotel } from "lucide-react";
// import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "./ui/ColoredText";
export default function HotelHighlights({
  blur,
  blurState,
  close,
  hotelHighlights,
}: {
  blur: () => void;
  close: () => void;
  blurState: boolean;
  hotelHighlights: HotelHighlights;
}) {
  // console.log(hotelHighlights.image);
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative py-7 sm:py-10 md:py-12 lg:py-16"
      // style={{
      //   height: "805px",
      //   paddingTop: "64px",
      //   paddingBottom: "128px",
      // }}
    >
      <div className="flex flex-col lg:flex-row h-full gap-12">
        {/* Left Image */}
        <div className="w-full  h-full relative">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              className="max-w-[630px] w-full h-[600px] object-cover"
              src={hotelHighlights?.image?.url || ""}
              alt={hotelHighlights?.image?.alt || ""}
              width={629}
              height={600}
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* Right text */}
        <div className="w-full flex flex-col">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-10 lg:mb-20">
            <ColoredText text={hotelHighlights?.headline} />
            {/* {hotelHighlights?.headline} */}
          </h1>
          <ul className="space-y-6 mb-12">
            {hotelHighlights?.amenities?.slice(0, 4).map((amenity, index) => {
              return (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0 relative">
                    <Image
                      src={amenity?.icon?.url || ""}
                      alt={amenity?.icon?.alt || ""}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-gte font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px]">
                    {amenity?.amenityText}
                  </span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={blur}
            className="w-[300px] h-[64px] border-2 border-black text-[16px] font-bold leading-[24px] tracking-[0] uppercase font-montserrat hover:bg-black hover:text-white transition-colors duration-300"
          >
            {hotelHighlights?.ctaButton?.text}
          </button>
        </div>
      </div>
      <div
        className={`absolute w-full top-[60%] max-w-[1300px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] p-8 md:p-12 lg:p-16 bg-white flex-col justify-center items-center ${
          blurState ? "flex" : "hidden"
        } `}
      >
        <div className="w-full flex justify-between items-center mb-5 lg:mb-10">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px]">
            <ColoredText text={hotelHighlights?.headline} />
          </h1>
          <IoCloseOutline
            onClick={close}
            className="text-[25px] cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-baseline lg:flex-row lg:justify-center lg:items-start lg:gap-16 ">
          <ul className="w-full space-y-6 mb-7 grid grid-cols-1 lg:grid-cols-2">
            {hotelHighlights?.amenities?.map((amenity, index) => {
              return (
                <li key={index} className="w-full flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0 relative">
                    <Image
                      src={`${amenity?.icon?.url}`}
                      alt={`${amenity?.icon?.alt}`}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-gte font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px]">
                    {amenity?.amenityText}
                  </span>
                </li>
              );
            })}
          </ul>
          {/* <div className="flex">
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 relative">
                  <Image
                    src="/hotelbasic/car.svg"
                    alt="Car service icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="font-gte font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px]  leading-[32px]">
                  Velit vulputate hac nisl at. Egestas luctus vitae lacus sit
                  mauris ipsum. Tellus.
                </span>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 relative">
                  <Image
                    src="/hotelbasic/minibar.svg"
                    alt="Concierge icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="font-gte font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px]">
                  Donec eget mauris vitae feugiat in. Tortor massa pretium
                  volutpat posuere ut tempus blandit. Aliquam mauris.
                </span>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 relative">
                  <Image
                    src="/hotelbasic/car.svg"
                    alt="Heating icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="font-gte font-[350] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px]  leading-[32px]">
                  Duis risus lectus facilisis tellus tortor elit.
                </span>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
