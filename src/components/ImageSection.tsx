import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-10 sm:py-16 md:py-24 lg:py-32">
      {/* Image Section */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full h-[600px] relative">
          <Image
            src="/hotelprem/image(3).svg"
            alt="Hotelpppppp"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
