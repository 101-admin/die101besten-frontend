import React from "react";
import Image from "next/image";
import type { HeroAbout } from "@/lib";
const AboutHero = ({ image, id }: HeroAbout) => {
  return (
    <>
      <div id={id} className="relative w-full h-[500px] max-w-[1920px] mx-auto">
        {image && (
          <Image
            src={`${image?.url}`}
            alt={`${image?.alt}`}
            fill
            className="object-cover"
          />
        )}
      </div>
    </>
  );
};

export default AboutHero;
