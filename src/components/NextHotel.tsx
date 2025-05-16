import React from "react";

const NextHotel = () => {
  return (
    <section
      style={{ backgroundImage: "url(/images/Pool.jpg)" }}
      className="w-full h-screen bg-cover bg-no-repeat bg-center mb-7 flex justify-center items-center"
    >
      <div className="w-full max-w-[1440px] h-full flex flex-col justify-center items-center px-5 text-white gap-5">
        <h1 className="text-[35px] leading-[25px] font-normal font-ogg sm:text-[45px] sm:leading-[30px] md:text-[55px] md:leading-[45px] lg:text-[70px] lg:leading-[55px] xl:text-[84px] xl:leading-[64px] mb-5 md:mb-10">
          Wohin als nächstes?
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-5">
          <button className="btn-secondary w-[310px] text-white border-white">
            BUSINESS HOTELS ENTDECKEN
          </button>
          <button className="btn-secondary w-[310px] text-white border-white">
            LEISURE HOTELS ENTDECKEN
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextHotel;
