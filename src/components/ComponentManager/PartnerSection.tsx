"use client";
import React, { useState } from "react";
import NextLink from "../NextLink";
import type { PartnerComponent, SanityImage, SinglePartner } from "@/lib";
import { OptimizedImage } from "../ui/OptimizedImage";
import { IoCloseOutline } from "react-icons/io5";
import { useParams } from "next/navigation";
const PartnerSection = ({
  title,
  otherPartners,
  partners,
  premiumPartners,
}: PartnerComponent) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [newPart, setNewPart] = useState<SinglePartner | undefined>({});

  const params = useParams();
  const locale = params.locale;

  const handlePartnerClick = (index: number, name: string) => {
    setShowPopUp(true);
    if (name === "partner") {
      const newPartner = partners && partners[index];
      setNewPart(newPartner);
    } else if (name === "premiumPartner") {
      const newPartner = premiumPartners && premiumPartners[index];
      setNewPart(newPartner);
    } else if (name === "otherPartner") {
      const newPartner = otherPartners && otherPartners[index];
      setNewPart(newPartner);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full max-w-[1150px] mx-auto font-ogg px-4">
          {/* Heading */}
          <h2 className="font-ogg font-normal leading-[35px] text-[30px] md:leading-[38px] md:text-[35px] lg:leading-[42px] lg:text-[38px]  text-center mb-8 lg:mb-16">
            {title}
          </h2>

          {/* Partner Logos */}
          <div className="w-full grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16 mb-8 lg:mb-16">
            {partners?.map((partner, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="w-full max-w-[150px] md:max-w-[230px] cursor-pointer hover:scale-[1.10] duration-200">
                  {partner?.image && (
                    <div onClick={() => handlePartnerClick(index, "partner")}>
                      <OptimizedImage
                        image={partner?.image as SanityImage}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-wrap justify-center items-center  gap-8 lg:gap-16 mb-8 lg:mb-16">
            {premiumPartners?.map((partner, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="w-full max-w-[150px] md:max-w-[213px] cursor-pointer hover:scale-[1.10] duration-200">
                  {partner?.image && (
                    <div
                      onClick={() =>
                        handlePartnerClick(index, "premiumPartner")
                      }
                    >
                      <OptimizedImage
                        image={partner?.image as SanityImage}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full grid sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-12 mb-10 lg:mb-20">
            {otherPartners?.map((partner, index) => (
              <div key={index} className="flex justify-center items-center ">
                <div className="w-full max-w-[145px] cursor-pointer hover:scale-[1.10] duration-200">
                  {partner?.image && (
                    <div
                      onClick={() => handlePartnerClick(index, "otherPartner")}
                    >
                      <OptimizedImage
                        image={partner?.image as SanityImage}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
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
        className={`fixed w-full top-1/2 max-w-[1312px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-8 md:p-12 lg:p-16 bg-white flex-col justify-start items-baseline gap-8 md:gap-12 lg:gap-16 max-h-[90vh] overflow-y-auto ${
          showPopUp ? "flex" : "hidden"
        } `}
      >
        <div className="w-full flex justify-between items-start gap-5">
          <div className="w-full">
            {newPart?.image && (
              <OptimizedImage
                image={newPart?.image as SanityImage}
                className="w-full max-w-[260px] md:max-w-[342px]"
              />
            )}
          </div>
          <div
            onClick={() => setShowPopUp(false)}
            className="w-16 h-16 flex justify-center items-center cursor-pointer"
          >
            <IoCloseOutline className="text-[24px]" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-baseline gap-5 md:gap-10 lg:gap-12">
          {newPart?.title && (
            <h2 className="font-ogg font-normal text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[36px] sm:leading-[40px] md:leading-[48px] lg:leading-[52px]">
              {newPart?.title}
            </h2>
          )}
          {newPart?.description && (
            <p className="font-[350] font-gte text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[28px] lg:leading-[32px]">
              {newPart?.description}
            </p>
          )}
          <NextLink target="_blank" href={newPart?.link || "#"}>
            <button className="font-bold font-gte text-[24px] md:text-[28px] lg:text-[32px] underline hover:text-[#B65033]">
              {locale === "de" ? "Mehr erfahren" : "Learn more"}
            </button>
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;
