import React from "react";
import type { SanityImage } from "@/lib";
const HotelDescription = ({
  fullwidthImage,
}: {
  fullwidthImage: SanityImage;
}) => {
  return (
    <section className="w-full max-w-[1920px] mx-auto py-10 sm:py-16 md:py-20 lg:py-28">
      {/* Image Section */}
      <div className="w-full">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] relative">
          {fullwidthImage && (
            <img
              className="w-full h-full object-cover"
              src={fullwidthImage?.url || ""}
              alt={fullwidthImage?.alt || ""}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HotelDescription;
