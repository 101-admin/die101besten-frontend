import React from "react";
import type { StrategischePartner } from "@/lib";
import Link from "next/link";
const StrategischePartner = ({ title, partners }: StrategischePartner) => {
  return (
    <div className="w-full bg-white pb-12 ">
      <div className="w-full max-w-[1150px] mx-auto font-ogg py-12 px-4">
        {/* Heading */}
        <div className="font-ogg font-normal leading-[25px] text-[20px] sm:leading-[30px] sm:text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px] text-center mb-8 lg:mb-16">
          {title}
        </div>

        {/*  images */}
        <div className="w-full flex flex-wrap justify-center gap-8 lg:gap-16 mb-8 lg:mb-16">
          {partners?.slice(0, 4).map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="w-full max-w-[150px] md:max-w-[230px] relative  cursor-pointer hover:scale-[1.10] duration-200">
                <Link target="_blank" href={`${partner?.link}`} className="w-full">
                  {partner?.image && (
                    <img
                      className="w-full"
                      src={`${partner?.image?.url}`}
                      alt={`${partner?.image?.alt}`}
                    />
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 images */}

        <div className="w-full flex flex-wrap justify-center gap-8 lg:gap-16">
          {partners?.slice(4, 7).map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="w-full h-full md:w-[230px] md:h-[108px] relative">
                <div className="w-full max-w-[150px] md:max-w-[230px] relative  cursor-pointer hover:scale-[1.10] duration-200">
                  <Link target="_blank" href={`${partner?.link}`} className="w-full">
                    {partner?.image && (
                      <img
                        className="w-full"
                        src={`${partner?.image?.url}`}
                        alt={`${partner?.image?.alt}`}
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// const partners = [
//   { id: 1, src: "/partners/alveni.svg", alt: "dwenici" },
//   { id: 2, src: "/partners/Hornstein Ranking.svg", alt: "Hornstein Ranking" },
//   {
//     id: 3,
//     src: "/partners/IU internationale Hochschule.svg",
//     alt: "Internationale Hochschule",
//   },
//   { id: 4, src: "/partners/monoplan.svg", alt: "monoplan" },
//   { id: 5, src: "/partners/cunard.svg", alt: "Cunard" },
//   {
//     id: 6,
//     src: "/partners/everyone for climate.svg",
//     alt: "Soutton Services Everyone for Climate",
//   },
//   {
//     id: 7,
//     src: "/partners/PfE.svg",
//     alt: "Soutton Services",
//   },
// ];

export default StrategischePartner;
