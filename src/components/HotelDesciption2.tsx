import React from "react";

const HotelDesciption2 = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto pt-10">
      {/* Top Text Section */}
      <div className="w-full mx-auto px-4 sm:px-8 md:px-16 pb-20 sm:pb-28 mb:pb-40 lg:pb-56 flex flex-col sm:flex-col lg:flex-row gap-10 ">
        {/* Left Column */}
        <div className="w-full md:max-w-[572px] text-left">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] tracking-tight">
            Designhotelfans lieben die imposanten Kronleuchter und den{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Meerblick von der Dachterrasse
            </span>{" "}
            mit{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Rooftop-Pool
            </span>{" "}
            auf die Küste Dänemarks.
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-full md:max-w-[572px] text-left">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] tracking-tight">
            Die 81 urbanen Zimmer variieren von{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Lofts,
            </span>{" "}
            luftigen{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Balkon- und Wintergartenzimmern
            </span>{" "}
            bis hin zu{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Family und Junior Suites.
            </span>{" "}
            Einzelzimmer ab 190€ inkl. Frühstück.
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] relative">
          <img
            className="w-full"
            src="/hotelprem/image(1).svg"
            alt="Hotel img"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-baseline lg:justify-center lg:items-center px-4 sm:px-8 md:px-16  pt-20 sm:pt-28 mb:pt-40 lg:pt-56 ">
        <div className="w-full max-w-[700px] pb-16 md:pb-32 text-start lg:text-center">
          <p className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] tracking-tight">
            Die Hafenstadt Flensburg lockt mit historischen Höfen,{" "}
            herrschaftlichen Häusern und Speichern sowie mit{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Badestränden an der deutsch-dänischen Küste.
            </span>
          </p>
        </div>
      </div>

      <div className="w-full mx-auto  px-4 sm:px-8 md:px-16  flex flex-col sm:flex-col lg:flex-row gap-10 pb-16 md:pb-32">
        {/* Left Column */}
        <div className="w-full md:max-w-[572px] text-left">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] tracking-tight">
            Rooftop-Pool mit Sauna-Area und Spa mit Hamam genießen{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Adults only.
            </span>{" "}
            Im Family-Spa mit Pool, Biosauna und Spielbereich wird ausgiebig
            getobt.
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-full md:max-w-[572px] text-left">
          <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] tracking-tight">
            Genuss pur: Restaurants Das Grace sowie James Farmhouse mit{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B65033] to-[#F49E6E]">
              Lebensmitteln von der James Farm.Japanische Überraschungen
            </span>{" "}
            erfreuen im Minato.
          </h1>
        </div>
      </div>

      {/* Bottom Centered Paragraph */}
    </section>
  );
};

export default HotelDesciption2;
