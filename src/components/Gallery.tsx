// import { PrimaryHeroSection } from "@/lib";
import type { SanityImage , Button } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { HiPhoto } from "react-icons/hi2";

export default function Gallery({name, city, image, ctaButton }: {name?: string, city?: string, image?:SanityImage , ctaButton?: Button}) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-35.1% via-black/39 via-60.43% to-black/90 z-10"></div>

        
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
      <div className="flex flex-col items-center text-white text-center gap-6">
        <div className="flex flex-col gap-2 sm:gap-4">
          {name && (
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-tight">
              {name}
            </h1>
          )}
          {city && (
            <p className="font-gte font-light text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px]">
              {city}
            </p>
          )}
        </div>
        {ctaButton && (
<div className="w-full flex justify-center items-center h-20">
<Link target="_blank" href={`${ctaButton?.url}`}>
            <button className="btn-secondary w-[300px] text-white border-white btn-secondary-hover-de">
            {ctaButton?.text}
          </button>
          </Link>
</div>
        )}
      </div>
    </section>
  );
}
