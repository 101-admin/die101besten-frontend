"use client";
import React from "react";
import HotelOfTheYear from "./HotelOfTheYear";
import LuxuryHotelSection from "./LuxuryHotelSection";
import HotelHighlights from "../HotelHighlights";
// import Footer from "../Footer";
import LocationMap from "../LocationMap";
import Form from "../Form";
import type { Hotel } from "@/lib";
import Adds from "../Adds";
const HotelBasic = ({ hotel }: { hotel: Hotel }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center relative">
      {/* secondaryHeroSection */}
      {hotel?.secondaryHeroSection && (
        <HotelOfTheYear
          name={hotel?.name}
          city={hotel?.address?.city?.label}
          achievements={hotel?.achievements}
          {...hotel?.secondaryHeroSection}
          ctaButton={hotel?.ctaButton}
        />
      )}

      {/* aboutHotel or hotelDescription */}
      {hotel?.aboutHotel && (
        <LuxuryHotelSection aboutHotel={hotel?.aboutHotel} />
      )}

      {/* hotelHighlights */}
      {hotel?.hotelHighlights && (
        <HotelHighlights hotelHighlights={hotel?.hotelHighlights} />
      )}

      {/* mapSection */}
      {hotel?.mapSection && (
        <LocationMap
          hotelId={hotel?._id}
          name={hotel?.name}
          address={hotel?.address}
          ctaButton={hotel?.ctaButton}
          mapSection={hotel.mapSection}
        />
      )}
      {/* adds */}
      {hotel?.adds && <Adds data={hotel?.adds} />}

      <Form />
    </section>
  );
};

export default HotelBasic;
