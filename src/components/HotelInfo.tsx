import React from "react";

const HotelInfo = () => {
  return (
    <section className="bg-[#F9F8FA] w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-36">
      <div className="w-full flex flex-col justify-center items-center px-5 lg:px-16">
        <div className="w-full lg:w-[95%] flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
          <div className="flex justify-center w-full">
            <img
              className="sm:max-w-[428px] sm:max-h-[508px]"
              src="/images/bookCover.svg"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-start items-baseline">
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5">
              Das Buch{" "}
              <span className="gradient-de-text">
                “Die 101 Besten Hotels”...
              </span>
            </h1>
            <p className="font-gte font-normal text-[16px] sm:text-[20px] mb-5">
              ...liegt in den Lobbys und Hotelzimmern der “Die 101 besten
              Hotels”!
              <br />
              Es liegt aber vor allem in den Wohnzimmern luxusaffiner und
              Lifestyle-liebender Gäste.
            </p>
            <button className="btn-primary btn-primary-hover-de ">
              Holen Sie sich Ihre Ausgabe nach Hause
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelInfo;
