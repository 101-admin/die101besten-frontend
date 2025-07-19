"use client";
import React, { useState } from "react";
import Gallery from "../Gallery";
import Premium from "../Premium";
// import Footer from "../Footer";
// import ImageSection from "../ImageSection";
import HotelHighlights from "../HotelHighlights";
import LocationMap from "../LocationMap";
import HotelDescription from "../HotelDescription";
import RoomsSection from "../RoomsSection";
// import HotelDesciption2 from "../HotelDesciption2";
import HostSection from "./HostSection";
import Form from "../Form";
import ExclusiveEvents from "./ExclusiveEvents";
import Testimonial2 from "../Testimonial2";
import { Hotel } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import Adds from "../Adds";

const HotelGrand = ({ hotel }: { hotel: Hotel }) => {
  return (
    <section className=" w-full h-full flex flex-col justify-center items-center relative">
      {/* primaryHeroSection */}
      {hotel?.primaryHeroSection && (
        <Gallery
          {...hotel?.primaryHeroSection}
          name={hotel?.name}
          ctaButton={hotel?.ctaButton}
          city={hotel?.address?.city?.label}
        />
      )}

      {/* hotelDetailsSection */}
      {hotel?.hotelDetailsSection && (
        <Premium
          city={hotel?.address?.city?.label}
          country={hotel?.address?.country?.name}
          name={hotel?.name}
          achievements={hotel?.achievements}
          {...hotel?.hotelDetailsSection}
          ctaButton={hotel?.ctaButton}
        />
      )}

      {hotel?.body && <PortableText value={hotel?.body} />}

      {/* hotelEvents */}
      {hotel?.hotelEvents && <ExclusiveEvents {...hotel?.hotelEvents} />}

      {/* HotelInfo */}
      {hotel?.hotelInfo && <RoomsSection data={hotel?.hotelInfo} />}

      {/* testimonials */}
      {hotel?.testimonials && (
        <Testimonial2 testimonial={hotel?.testimonials?.testimonial} />
      )}

      {/* interviewSection */}
      {hotel?.interviewSection && <HostSection {...hotel?.interviewSection} />}

      {/* hotelHighlights */}
      {hotel?.hotelHighlights && (
        <HotelHighlights hotelHighlights={hotel?.hotelHighlights ?? {}} />
      )}

      {hotel?.fullwidthImage && (
        <HotelDescription fullwidthImage={hotel.fullwidthImage} />
      )}

      {/* mapSection */}
      {hotel?.mapSection && (
        <LocationMap
          hotelId={hotel?._id}
          name={hotel?.name}
          ctaButton={hotel?.ctaButton}
          address={hotel?.address}
          mapSection={hotel.mapSection ?? {}}
        />
      )}

      {/* adds */}
      {hotel?.adds && <Adds data={hotel?.adds} />}

      <Form />
    </section>
  );
};

export default HotelGrand;
// ${blur ? "backdrop-blur-lg bg-[#00000040]" : "bg-transparent"}
