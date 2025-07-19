"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import type { FeatureCollection, Point } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import { CTAButton, HotelAddress, HotelMapSection } from "@/lib";

interface HotelMapProps {
  hotelId: string;
  mapSection?: HotelMapSection;
  name?: string;
  address?: HotelAddress;
  ctaButton?: CTAButton;
}

const HotelMap: React.FC<HotelMapProps> = ({
  hotelId = 3,
  mapSection,
  name,
  address,
  ctaButton,
}) => {
  console.log("[HotelMap] hotelId ", hotelId);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const processedRef = useRef(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = accessToken;

    // Fetch the GeoJSON data
    fetch("/all-hotels.geojson")
      .then((res) => res.json())
      .then((geojson: FeatureCollection<Point>) => {
        console.log("geojson ", geojson);
        const newMap = new mapboxgl.Map({
          container: mapContainer.current!,
          style: "mapbox://styles/101-admin/cma1ja8u501qs01r38b786w3r",
          // style: 'mapbox://styles/101-admin/cma3kotho000e01s395d0hds0', // Switzerland style
          //   style: "mapbox://styles/101-admin/cma3kt1a5000i01sl2xgs9hvl", // DACH style
        });

        const handleSourceData = () => {
          processedRef.current = true; // Mark as processed using ref

          // Filter for the specific hotel
          const hotelFeature = geojson.features.find(
            (feature) => feature.properties?._id == hotelId
          );

          if (hotelFeature) {
            console.log("Found hotel:", hotelFeature);
            // Ensure the map is ready before flying
            setTimeout(() => {
              const coordinates: [number, number] = [
                hotelFeature.geometry.coordinates[0],
                hotelFeature.geometry.coordinates[1],
              ];
              newMap.flyTo({
                center: coordinates,
                zoom: 16,
                essential: true,
                padding: { top: 200, bottom: 200, left: 0, right: 0 },
              });
            }, 500); // Small delay to ensure map is ready
          } else {
            console.error("No features found for hotel:", hotelId);
            setMapError("Hotel location not found");
          }

          // Remove listener after processing
          newMap.off("sourcedata", handleSourceData);
        };

        newMap.on("load", () => {
          try {
            // Initial bounds for Germany
            newMap.fitBounds([
              [6.09, 47.46],
              [14.99, 54.91],
            ]);
            // Initial bounds for Switzerland
            // newMap.fitBounds([
            //   [4.875525425346581, 45.80985660548447],
            //   [11.407097104079043, 47.80530295907303],
            // ]);
            // Initial bounds for DACH
            // newMap.fitBounds([
            //   [-7.788671450024509, 45.2405455760678],
            //   [25.706106177687502, 54.60003042258725],
            // ]);

            // Add sourcedata listener after fitBounds
            newMap.on("sourcedata", handleSourceData);
          } catch (error) {
            console.error("Error setting up map:", error);
            setMapError("Error configuring map");
          }
        });

        map.current = newMap;
        return () => {
          processedRef.current = false; // Reset the ref on cleanup
          newMap.off("sourcedata", handleSourceData);
          map.current?.remove();
        };
      })
      .catch((err) => {
        setMapError("Failed to load hotel data");
        console.error(err);
      });
  }, [hotelId, accessToken]);

  return (
    <section className="w-full lg:max-w-[1920px] flex flex-col justify-center items-center gap-8 pt-20 pb-0 md:py-32">
      {/* Text Section */}
      <div className="w-full gap-6 lg:gap-8 px-8 lg:px-14 md:px-8">
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
      <div className="flex flex-col justify-center w-full relative items-center">
        <div className="w-full flex">
          {mapError ? (
            <div className="w-full h-[440px] flex items-center justify-center bg-gray-100">
              <p className="text-red-500">{mapError}</p>
            </div>
          ) : (
            <div
              ref={mapContainer}
              className="w-full h-[440px] overflow-hidden relative"
            />
          )}
        </div>

        <div className="lg:absolute lg:left-[174px] w-full max-w-[376px] flex flex-col justify-start items-baseline p-9 md:p-12 bg-[#F9F8FA] lg:bg-white gap-2">
          <h2 className="font-ogg font-normal text-[22px] bg-gradient-to-r from-[#B65033] from-50% to-[#F49E6E] bg-clip-text text-transparent w-full text-wrap">
            Buchung und Kontakt
          </h2>
          <p className="text-[16px] font-gte font-[350] w-full">
            {address?.street} {address?.streetNumber}, {address?.postalCode}{" "}
            {address?.city?.label}
          </p>
          <p className="text-[16px] font-gte font-[350] w-full">
            {mapSection?.contactInfo?.phone}
          </p>
          <p className="text-[16px] font-gte font-[350] w-full">
            {mapSection?.contactInfo?.email}
          </p>
          <p className="text-[16px] font-gte font-[350] w-full">
            {mapSection?.contactInfo?.website}
          </p>
          {ctaButton?.url && (
            <a
              href={ctaButton.url}
              target="_blank"
              className="max-w-[280px] btn-primary-hover-de w-full h-16 flex justify-center items-center bg-black cursor-pointer font-montserrat font-bold text-[16px] text-white mt-2 uppercase"
            >
              {ctaButton.text || "Zur Buchung"}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotelMap;
