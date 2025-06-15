"use client";
import React from "react";
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
import Adds from "../Adds";

const HotelExclusive = ({ hotel }: { hotel: Hotel }) => {

  return (
    <section className="w-full flex flex-col justify-center items-center relative">
      {/* primaryHeroSection */}
      {
        hotel?.primaryHeroSection && (
          <Gallery {...hotel?.primaryHeroSection} name={hotel?.name} ctaButton={hotel?.ctaButton} city={hotel?.address?.city}/>
        )
      }

      {/* hotelDetailsSection */}
      {
        hotel?.hotelDetailsSection && (
          <Premium
            city={hotel?.address?.city}
            country={hotel?.address?.country}
            name={hotel?.name}
            achievements={hotel?.achievements}
            {...hotel?.hotelDetailsSection}
            ctaButton={hotel?.ctaButton}
          />
        )
      }

      {hotel?.body && <PortableText value={hotel?.body} />}

      {/* HotelInfo */}
      {
        hotel?.hotelInfo && (
          <RoomsSection
            data={hotel?.hotelInfo}
          />
        )
      }

      {/* testimonials */}
      {
        hotel?.testimonials?.testimonial && (
          <Testimonial2 testimonial={hotel?.testimonials?.testimonial} />
        )
      }

      {/* interviewSection */}
      {
        hotel?.interviewSection && (
          <FragenAnGastgeber {...hotel?.interviewSection} />
        )
      }

      {/* hotelHighlights */}
      {
        hotel?.hotelHighlights && (
          <HotelHighlights
            hotelHighlights={hotel?.hotelHighlights ?? {}}
          />
        )
      }

      {hotel?.fullwidthImage && (
        <HotelDescription fullwidthImage={hotel?.fullwidthImage} />
      )}

      {/* mapSection */}
      {
        hotel?.mapSection && (
          <LocationTwo name={hotel?.name} address={hotel?.address} ctaButton={hotel?.ctaButton} mapSection={hotel?.mapSection ?? {}} />
        )
      }
       {/* adds */}
       {
        hotel?.adds && (
          <Adds data={hotel?.adds} />
        )
      }
      <Form />
    </section>
  );
};

export default HotelExclusive;
