import React from "react";

const MedienPartner = () => {
  return (
    <div className="w-full bg-[#F9F8FA]">
      <div className="w-full max-w-[1150px] mx-auto font-ogg py-12 px-4">
        {/* Subheading */}
        <h2 className="font-ogg font-normal leading-[25px] text-[20px] sm:leading-[30px] sm:text-[25px] md:leading-[35px] md:text-[30px] lg:leading-[38px] lg:text-[35px] xl:leading-[42px] xl:text-[38px] text-center mb-8 lg:mb-16">
          Medienpartner
        </h2>

        {/* images */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-8 lg:mb-16">
          {partners.slice(0, 3).map((partner) => (
            <div key={partner.id} className="flex justify-center items-center">
              <div className="w-full max-w-[150px] md:max-w-[230px] relative">
                <img className="w-full" src={partner.src} alt={partner.alt} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {partners.slice(3, 5).map((partner) => (
            <div key={partner.id} className="flex justify-center items-center">
              <div className="w-full max-w-[150px] md:max-w-[230px] relative">
                <img className="w-full" src={partner.src} alt={partner.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const partners = [
  { id: 1, src: "/partners/capital.svg", alt: "Partner" },
  { id: 2, src: "/partners/ntv.svg", alt: "ntv" },
  { id: 3, src: "/partners/Frame 2216.svg", alt: "Le Matin Dimanche" },
  { id: 4, src: "/partners/Frame 2217.svg", alt: "SonntagsZeitung" },
  { id: 5, src: "/partners/Frame 2218.svg", alt: "KURIER" },
];

export default MedienPartner;
