import React from "react";
import Image from "next/image";
import type { HeroAbout } from "@/lib";
const AboutHero = ({ image }: HeroAbout) => {
  return (
    <>
      <div className="relative w-full h-[500px] max-w-[1920px] mx-auto">
        <Image
          src={`${image?.url}`}
          alt={`${image?.alt}`}
          fill
          className="object-cover"
        />
      </div>
    </>
  );
};

export default AboutHero;
