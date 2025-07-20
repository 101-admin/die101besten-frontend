import React from "react";
import Image from "next/image";
import type { HeroAbout, SanityImage } from "@/lib";
import { OptimizedImage } from "../ui/OptimizedImage";
const AboutHero = ({ image, id }: HeroAbout) => {
  return (
    <>
      <div id={id} className="relative w-full  max-w-[1920px] mx-auto ">
        {image && (
          // <Image
          //   src={`${image?.url}`}
          //   alt={`${image?.alt}`}
          //   fill
          //   className="object-cover"
          // />
          <OptimizedImage
            wrapperClassName="w-full"
            image={image as SanityImage}
            className="object-cover w-full "
          />
        )}
      </div>
    </>
  );
};

export default AboutHero;
