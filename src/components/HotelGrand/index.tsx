"use client";
import React, { useState } from "react";
import Gallery from "../Gallery";
import Premium from "../Premium";
// import Footer from "../Footer";
// import ImageSection from "../ImageSection";
import HotelHighlights from "../HotelHighlights";
import LocationTwo from "../LocationTwo";
import HotelDescription from "../HotelDescription";
import RoomsSection from "../RoomsSection";
// import HotelDesciption2 from "../HotelDesciption2";
import HostSection from "./HostSection";
import Form from "../Form";
import ExclusiveEvents from "./ExclusiveEvents";
import Testimonial2 from "../Testimonial2";
import { Hotel } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";

const HotelGrand = ({ hotel }: { hotel: Hotel }) => {
  const [blur, setBlur] = useState(false);
  const [blur2, setblur2] = useState(false);

  const blurHandle = () => {
    setBlur(true);
  };

  const closehandle = () => {
    console.log("hello");
    setBlur(false);
  };

  const blurHandle2 = () => {
    setblur2(true);
  };

  const closehandle2 = () => {
    setblur2(false);
  };
  return (
    <section className=" w-full h-full flex flex-col justify-center items-center relative">
      {/* primaryHeroSection */}
      <Gallery {...hotel?.primaryHeroSection} />

      {/* hotelDetailsSection */}
      <Premium {...hotel?.hotelDetailsSection} />

      {hotel?.body && <PortableText value={hotel?.body} />}

      {/* hotelEvents */}
      <ExclusiveEvents {...hotel?.hotelEvents} />

      {/* HotelInfo */}
      <RoomsSection
        blurhandle2={blurHandle2}
        blur2={blur2}
        closehandle2={closehandle2}
        data={hotel?.hotelInfo}
      />

      {/* testimonials */}
      <Testimonial2 testimonial={hotel?.testimonials?.testimonial} />

      {/* interviewSection */}
      <HostSection {...hotel?.interviewSection} />

      {/* hotelHighlights */}
      <HotelHighlights
        blur={blurHandle}
        blurState={blur}
        close={closehandle}
        hotelHighlights={hotel?.hotelHighlights ?? {}}
      />

      {hotel?.fullwidthImage && (
        <HotelDescription fullwidthImage={hotel.fullwidthImage} />
      )}

      {/* mapSection */}
      <LocationTwo mapSection={hotel.mapSection ?? {}} />

      <Form />
      {/* <Footer /> */}

      <div
        className={`absolute top-0 left-0 w-full h-full backdrop-blur-lg bg-[#00000040] ${
          blur || blur2 ? "block" : "hidden"
        }`}
      ></div>
    </section>
  );
};

export default HotelGrand;
// ${blur ? "backdrop-blur-lg bg-[#00000040]" : "bg-transparent"}
