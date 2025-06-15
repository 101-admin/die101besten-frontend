"use client";
import React, { useState } from "react";
import FragenAnGastgeber from "./FragenAnGastgeber";
import RoomsSection from "../RoomsSection";
// import Footer from "../Footer";
import Gallery from "../Gallery";
import Premium from "../Premium";
import Form from "../Form";
import LocationTwo from "../LocationTwo";
import HotelHighlights from "../HotelHighlights";
import HotelDescription from "../HotelDescription";
import Testimonial2 from "../Testimonial2";
import { Hotel } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";

const HotelExclusive = ({ hotel }: { hotel: Hotel }) => {
  const [blur, setBlur] = useState(false);
  const [blur2, setblur2] = useState(false);

  const blunHandle = () => {
    setBlur(true);
  };

  const closehandle = () => {
    setBlur(false);
  };

  const blunHandle2 = () => {
    setblur2(true);
  };

  const closehandle2 = () => {
    setblur2(false);
  };

  return (
    <section className="w-full flex flex-col justify-center items-center relative">
      {/* primaryHeroSection */}
      <Gallery {...hotel?.primaryHeroSection} />

      {/* hotelDetailsSection */}
      <Premium
        city={hotel?.address?.city}
        name={hotel?.name}
        achievements={hotel?.achievements}
        {...hotel?.hotelDetailsSection}
      />

      {hotel?.body && <PortableText value={hotel?.body} />}

      {/* HotelInfo */}
      <RoomsSection
        blurhandle2={blunHandle2}
        blur2={blur2}
        closehandle2={closehandle2}
        data={hotel?.hotelInfo}
      />

      {/* testimonials */}
      <Testimonial2 testimonial={hotel?.testimonials?.testimonial} />

      {/* interviewSection */}
      <FragenAnGastgeber {...hotel?.interviewSection} />

      {/* hotelHighlights */}
      <HotelHighlights
        blur={blunHandle}
        blurState={blur}
        close={closehandle}
        hotelHighlights={hotel?.hotelHighlights ?? {}}
      />

      {hotel?.fullwidthImage && (
        <HotelDescription fullwidthImage={hotel?.fullwidthImage} />
      )}

      {/* mapSection */}
      <LocationTwo mapSection={hotel?.mapSection ?? {}} />

      <Form />

      {/* <Footer /> */}
      <div
        className={`absolute top-0 left-0 w-full h-full backdrop-blur-lg bg-[#00000040] ${
          blur || blur2 ? "block" : "hidden"
        } `}
      ></div>
    </section>
  );
};

export default HotelExclusive;
