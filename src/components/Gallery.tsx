import { PrimaryHeroSection } from "@/lib";
import Image from "next/image";
import { HiPhoto } from "react-icons/hi2";

export default function Gallery({
  ctaButton,
  image,
  subTitle,
  title,
}: PrimaryHeroSection) {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto h-[600px] px-6 sm:px-12 py-12 flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        {image && (
          <Image
            src={image?.url || ""}
            alt={image?.alt || ""}
            width={1440}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black opacity-35" />
      </div>

      {/* Top-right Button */}
      {/* <div className="w-full flex justify-end">
        <button className="w-[240px] flex items-center justify-center gap-2 text-white uppercase font-montserrat font-bold text-xs sm:text-sm bg-black bg-opacity-70 hover:bg-opacity-90 transition px-4 py-4">
          <HiPhoto className="w-[22px] h-[18px]" />
          <span>{"ALLE FOTOS ANZEIGEN"}</span>
        </button>
      </div> */}

      <div className="flex-grow" />

      {/* Bottom text*/}
      <div className="flex flex-col items-center text-white text-center gap-6 pb-8 lg:pb-12">
        <div className="flex flex-col gap-2 sm:gap-4">
          {title && (
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-tight">
              {title || "Das James Hotel"}
            </h1>
          )}
          {subTitle && (
            <p className="font-gte font-light text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px]">
              {subTitle || "Flensburg"}
            </p>
          )}
        </div>
        {ctaButton && (
          <button className="btn-secondary w-[300px] text-white border-white btn-secondary-hover-de">
            {ctaButton?.text || "ZUR BUCHUNG"}
          </button>
        )}
      </div>
    </section>
  );
}
