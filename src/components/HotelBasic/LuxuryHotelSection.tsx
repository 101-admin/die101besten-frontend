import React from "react";
import Image from "next/image";
import type { AboutHotel, BlockContent } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
// import { PortableText } from "@/lib/components/PortableText";

export default function LuxuryHotelSection({
  aboutHotel,
}: {
  aboutHotel?: AboutHotel;
}) {
  console.log(aboutHotel, "aboutHotel");
  return (
    <div className="max-w-[1440px] mx-auto px-5 lg:px-16 py-16 md:py-32 space-y-10 font-ogg">
      {aboutHotel?.aboutHotels?.map((aboutHotel, index) => {
        const { imagePosition, description, image } = aboutHotel;
        return (
          <div key={index}>
            {image === null ? (
              <div className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-24">
                <div className="w-full lg:max-w-[700px] flex flex-col justify-center items-center text-center">
                  {description && <PortableText value={description} />}
                </div>
              </div>
            ) : (
              <div
                className={`flex flex-col gap-10 items-center ${
                  imagePosition === "right"
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }`}
              >
                <div className="md:max-w-[636] ">
                  {image && (
                    <Image
                      src={image?.url || ""}
                      alt={image?.alt || ""}
                      className="w-full object-cover h-[520px]"
                      width={636}
                      height={520}
                    />
                  )}
                </div>
                <div className="md:max-w-[636px]">
                  {description && <PortableText value={description} />}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/*  Centered text */}
    </div>
  );
}
