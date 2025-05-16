"use client";
import React, { useState } from "react";
import HotelOfTheYear from "./HotelOfTheYear";
import LuxuryHotelSection from "./LuxuryHotelSection";
import HotelHighlights from "../HotelHighlights";
// import Footer from "../Footer";
import LocationTwo from "../LocationTwo";
import Form from "../Form";
import type { Hotel } from "@/lib";
const HotelBasic = ({ hotel }: { hotel: Hotel }) => {
  const [blur, setBlur] = useState(false);

  const blunHandle = () => {
    setBlur(true);
  };

  const closehandle = () => {
    setBlur(false);
  };
  // console.log(hotel.mapSection);

  return (
    <section className="w-full flex flex-col justify-center items-center relative">
      {/* secondaryHeroSection */}
      <HotelOfTheYear
        name={hotel?.name}
        city={hotel?.city}
        achievements={hotel?.achievements}
        {...hotel?.secondaryHeroSection}
      />

      {/* aboutHotel or hotelDescription */}
      <LuxuryHotelSection aboutHotel={hotel?.aboutHotel} />

      {/* hotelHighlights */}
      <HotelHighlights
        blur={blunHandle}
        blurState={blur}
        close={closehandle}
        hotelHighlights={hotel?.hotelHighlights ?? {}}
      />

      {/* mapSection */}
      <LocationTwo mapSection={hotel.mapSection ?? {}} />

      <Form />
      {/* <Footer /> */}
      <div
        className={`absolute top-0 left-0 w-full h-full backdrop-blur-lg bg-[#00000040] ${
          blur ? "block" : "hidden"
        }`}
      ></div>
    </section>
  );
};

export default HotelBasic;
