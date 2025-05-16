import React from "react";

import HeroData1 from "@/Data/HeroData1";
import HeroSec from "@/shared/HeroSec";
const Hero = () => {
  return (
    <section className="w-full h-screen">
      <HeroSec HotelData={HeroData1} />
    </section>
  );
};

export default Hero;
