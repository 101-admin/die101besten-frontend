import React from "react";

import Link from "next/link";

const PartnerSection = () => {
  return (
    <div className="w-full bg-[#F9F8FA] ">
      <div className="w-full max-w-[1150px] mx-auto font-ogg px-4">
        {/* Heading */}
        <h2 className="font-ogg font-normal text-[15px] sm:text-[21px] md:text-[27px] lg:text-[38px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[1.2] tracking-normal text-center my-16">
          Partner
        </h2>

        {/* Partner Logos */}
        <div className="w-full grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16 mb-8 lg:mb-16">
          {partners.slice(0, 18).map((partner) => (
            <div key={partner.id} className="flex justify-center items-center">
              <div className="w-full max-w-[150px] md:max-w-[230px] cursor-pointer hover:scale-[1.10] duration-200">
                <Link href="/" className="w-full">
                  <img className="w-full" src={partner.src} alt={partner.alt} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full grid sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-12 mb-10 lg:mb-20">
          {partners.slice(18).map((partner) => (
            <div key={partner.id} className="flex justify-center items-center ">
              <div className="w-full max-w-[145px] cursor-pointer hover:scale-[1.10] duration-200">
                <Link href="/" className="w-full">
                  <img className="w-full" src={partner.src} alt={partner.alt} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const partners = [
  {
    id: 1,
    src: "/partners/partnersection/cunard.svg",
    alt: "CUNARD",
    url: "/special-edition",
  },
  {
    id: 2,
    src: "/partners/partnersection/klafs_logo.svg.svg",
    alt: "KLAFS",
    url: "/special-edition",
  },
  {
    id: 3,
    src: "/partners/partnersection/Technogym.svg",
    alt: "TECHNOGYM",
    url: "/special-edition",
  },
  {
    id: 4,
    src: "/partners/partnersection/Chefs Culinar.svg",
    alt: "CHEFSCULINAR",
    url: "/special-edition",
  },
  {
    id: 5,
    src: "/partners/partnersection/Laurent Perrier.svg",
    alt: "Laurent-Perrier",
    url: "/special-edition",
  },
  {
    id: 6,
    src: "/partners/partnersection/Ruegenwalder.svg",
    alt: "Ruegenwalder",
    url: "/special-edition",
  },
  {
    id: 7,
    src: "/partners/partnersection/Table-Roc.svg",
    alt: "TABLE ROC*",
    url: "/special-edition",
  },
  {
    id: 8,
    src: "/partners/partnersection/JAB.svg",
    alt: "JAB",
    url: "/special-edition",
  },
  {
    id: 9,
    src: "/partners/partnersection/Konen & Lorenzen.svg",
    alt: "Konen & Lorenzen",
    url: "/special-edition",
  },
  {
    id: 10,
    src: "/partners/partnersection/Fly & Help.svg",
    alt: "Fly & Help",
    url: "/special-edition",
  },
  {
    id: 11,
    src: "/partners/partnersection/Kaldewei.svg",
    alt: "KALDEWEI",
    url: "/special-edition",
  },
  {
    id: 12,
    src: "/partners/partnersection/Kampmann.svg",
    alt: "Kampmann",
    url: "/special-edition",
  },
  {
    id: 13,
    src: "/partners/partnersection/La Biosthetique.svg",
    alt: "LA BIOSTHETIQUE",
    url: "/special-edition",
  },
  {
    id: 14,
    src: "/partners/partnersection/Duravit.svg",
    alt: "DURAVIT",
    url: "/special-edition",
  },
  {
    id: 15,
    src: "/partners/partnersection/LALIQUE.svg",
    alt: "LALIQUE",
    url: "/special-edition",
  },
  {
    id: 16,
    src: "/partners/partnersection/Voglauer.svg",
    alt: "VOGLAUER",
    url: "/special-edition",
  },
  {
    id: 17,
    src: "/partners/partnersection/Geberit.svg",
    alt: "GEBERIT",
    url: "/special-edition",
  },
  {
    id: 18,
    src: "/partners/partnersection/Shiji.svg",
    alt: "Shiji*",
    url: "/special-edition",
  },
  {
    id: 19,
    src: "/partners/partnersection/RATIONAL.svg",
    alt: "RATIONAL",
    url: "/special-edition",
  },
  {
    id: 20,
    src: "/partners/partnersection/progros.svg",
    alt: "PROGROS",
    url: "/special-edition",
  },
  {
    id: 21,
    src: "/partners/partnersection/Futurelog.svg",
    alt: "FUTURELOG",
    url: "/special-edition",
  },
  {
    id: 22,
    src: "/partners/partnersection/Kernenergie.svg",
    alt: "KERN energie*",
    url: "/special-edition",
  },
  {
    id: 23,
    src: "/partners/partnersection/China Club Berlin.svg",
    alt: "China Club Berlin",
    url: "/special-edition",
  },
  {
    id: 24,
    src: "/partners/partnersection/Wirelane.svg",
    alt: "Wirelane",
    url: "/special-edition",
  },
  {
    id: 25,
    src: "/partners/partnersection/Radeberger.svg",
    alt: "Radeberger",
    url: "/special-edition",
  },
  {
    id: 26,
    src: "/partners/partnersection/Baulmann.svg",
    alt: "BAULMANN",
    url: "/special-edition",
  },
  {
    id: 27,
    src: "/partners/partnersection/Molton Brown.svg",
    alt: "MOZTON BROWN",
    url: "/special-edition",
  },
  {
    id: 28,
    src: "/partners/partnersection/Eichinger Wintergarten.svg",
    alt: "Eichinger Wintergarten",
    url: "/special-edition",
  },
];

export default PartnerSection;
