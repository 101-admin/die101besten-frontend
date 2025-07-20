"use client";
import type { SanityImage, Werde101 } from "@/lib";
import Popup from "../Partners/Popup";
import { useState } from "react";
import { OptimizedImage } from "../ui/OptimizedImage";

export default function WerdePartner({
  title,
  description,
  ctaButton,
  image,
}: Werde101) {
  const [showPop, setShowPop] = useState(false);

  const handlePopup = () => {
    setShowPop(true);
  };

  const handlePopupChange = (value: boolean) => {
    setShowPop(value);
  };

  return (
    <div className="w-full bg-[#F9F8FA] py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1150px] mx-auto p-4">
          <div className="flex flex-col md:flex-row-reverse lg:gap-16 gap-8 items-center justify-between">
            {/* Image */}
            {image && (
              <div className="max-w-[330px] w-full flex justify-center items-center">
                {/* <img
                  className="w-full max-w-[200px] md:max-w-[330px]"
                  src={image.url}
                  alt={image.alt}
                /> */}
                <OptimizedImage
                  image={image as SanityImage}
                  className="w-full max-w-[200px] md:max-w-[330px]"
                />
              </div>
            )}
            <div className="w-full lg:text-left lg:mb-5">
              {title && (
                <h2 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-6">
                  {title}
                </h2>
              )}
              {description && (
                <p className="font-[350] text-[15px] leading-[18px] sm:text-[18px] sm:leading-[22] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[32px] font-gte mb-5 lg:mb-10">
                  {description}
                </p>
              )}
              {ctaButton && (
                <button
                  onClick={handlePopup}
                  className="btn-primary w-[288px] btn-primary-hover-de"
                >
                  {ctaButton.text}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Popup open={showPop} onOpenChange={handlePopupChange} />
    </div>
  );
}
