import React from "react";
import type { SanityImage, Utr } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "../ui/ColoredText";
import { OptimizedImage } from "../ui/OptimizedImage";
const RelyUs = ({ title, description, subTitle, image, id }: Utr) => {
  return (
    <>
      <div className="my-5 sm:my-8 md:my-10 lg:my-16 w-full max-w-[1440px] mx-auto flex justify-center items-center gap-5 lg:gap-10 select-none">
        {title && (
          <h1 className="text-[20px] leading-[20px] font-normal font-ogg sm:text-[30px] sm:leading-[30px] md:text-[45px] md:leading-[45px] lg:text-[51px] lg:leading-[51px] xl:text-[64px] xl:leading-[64px]">
            {title}
          </h1>
        )}
      </div>
      <section
        id={id}
        className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 select-none"
      >
        <div className=" w-full flex flex-col justify-center items-center px-5 lg:px-16">
          <div className="w-full flex flex-col justify-center items-center lg:flex-row-reverse gap-10 lg:gap-5">
            <div className="flex w-full">
              {image && (
                // <img src={`${image?.url}`} alt={`${image?.url}`} />
                <OptimizedImage
                  image={image as SanityImage}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="w-full flex flex-col justify-start items-baseline">
              {subTitle && (
                <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-3 lg:mb-6">
                  <ColoredText text={subTitle} />
                </h1>
              )}
              {description && (
                <div className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light">
                  {description && <PortableText value={description} />}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelyUs;
