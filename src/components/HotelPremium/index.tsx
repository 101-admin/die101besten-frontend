"use client";
import React from "react";
import Gallery from "../Gallery";
import Premium from "../Premium";
// import Footer from "../Footer";
import HotelHighlights from "../HotelHighlights";
import LocationMap from "../LocationMap";
import HotelDescription from "../HotelDescription";
import GastgeberSection from "../GastgeberSection";
import Form from "../Form";
import { Hotel } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import Adds from "../Adds";

const HotelPremium = ({ hotel }: { hotel: Hotel }) => {
  return (
    <section className=" w-full flex flex-col justify-center items-center relative ">
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

      {/* HotelInfoPremium */}
      {hotel?.hotelInfoPremium && (
        <GastgeberSection hotelInfo={hotel?.hotelInfoPremium ?? {}} />
      )}

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
          hotelId={hotel?.ranking?.position}
          name={hotel?.name}
          address={hotel?.address}
          ctaButton={hotel?.ctaButton}
          mapSection={hotel.mapSection ?? {}}
        />
      )}
      {/* adds */}
      {hotel?.adds && <Adds data={hotel?.adds} />}
      <Form />
    </section>
  );
};

export default HotelPremium;
