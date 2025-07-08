import React, { Suspense } from "react";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
import type { HotelMapSection, HotelAddress, CTAButton } from "@/lib";
import Link from "next/link";
import HotelMap from "./hotelMap";

const SimpleMapSection = ({
  mapSection,
  name,
  address,
  ctaButton,
}: {
  mapSection: HotelMapSection;
  name?: string;
  address?: HotelAddress;
  ctaButton?: CTAButton;
}) => {
  return (
    <section className="mt-8 w-full max-w-[1920px] mx-auto">
      {/* Text Section */}
      <div className="my-8 w-full gap-6 lg:gap-8 px-8 lg:px-14 md:px-8">
        {mapSection?.headline && (
          <h1 className="font-ogg font-normal text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] mb-5">
            {mapSection.headline}
          </h1>
        )}
        {address && (
          <h2 className="mt-4 font-ogg font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[32px] leading-[40px]">
            {name}, {address?.city?.label} – {address?.country?.name}
          </h2>
        )}
      </div>
      {/* Image */}
      <div
        style={{ backgroundImage: "url(/images/MapImage.svg)" }}
        className="w-full mb-6 md:mb-12 py-10 md:py-14 lg:py-16 px-8 lg:px-14 md:px-8 bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center relative"
      >
        <div className="w-full max-w-[1100px] flex flex-col justify-start items-baseline">
          {mapSection?.contactInfo && (
            <div className="w-full max-w-[376px] flex flex-col justify-start items-baseline p-6 sm:p-9 md:p-12 bg-white gap-2">
              <h2 className="font-ogg font-normal text-[22px] bg-gradient-to-r from-[#B65033] from-50% to-[#F49E6E] bg-clip-text text-transparent">
                Buchung und Kontakt
              </h2>
              <p className="text-[16px] font-gte font-[350]">
                {address?.street} {address?.streetNumber}, {address?.postalCode}{" "}
                {address?.city?.label}
              </p>
              <p className="text-[16px] font-gte font-[350]">
                {mapSection.contactInfo?.phone}
              </p>
              <p className="text-[16px] font-gte font-[350]">
                {mapSection.contactInfo?.email}
              </p>
              <p className="text-[16px] font-gte font-[350]">
                {mapSection.contactInfo?.website}
              </p>
              {ctaButton && (
                <Link
                  href={`${ctaButton?.url}`}
                  target="_blank"
                  className="max-w-[280px] btn-primary-hover-de w-full h-16 flex justify-center items-center bg-black cursor-pointer font-montserrat font-bold text-[16px] text-white mt-2 uppercase"
                >
                  {ctaButton?.text}
                </Link>
              )}
            </div>
          )}
        </div>
        {/* <button className="absolute bg-black w-16 h-16 hidden lg:flex justify-center items-center text-white right-6 bottom-20 btn-primary-hover-de">
          <FaPlus className="text-[24px]" />
        </button>
        <button className="absolute bg-black w-16 h-16 hidden lg:flex justify-center items-center text-white bottom-2 right-6 btn-primary-hover-de">
          <FaMinus className="text-[24px]" />
        </button> */}
      </div>
    </section>
  );
};

const LocationMap = ({
  hotelId,
  mapSection,
  name,
  address,
  ctaButton,
}: {
  hotelId?: number;
  mapSection: HotelMapSection;
  name?: string;
  address?: HotelAddress;
  ctaButton?: CTAButton;
}) => {
  return (
    <>
      {hotelId !== undefined ? (
        <HotelMap
          mapSection={mapSection}
          name={name}
          address={address}
          ctaButton={ctaButton}
          hotelId={hotelId}
        />
      ) : (
        <SimpleMapSection
          mapSection={mapSection}
          name={name}
          address={address}
          ctaButton={ctaButton}
        />
      )}
    </>
  );
};

export default LocationMap;
