import React from "react";

const AllBrands = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10 lg:py-24">
      <div className=" w-full flex flex-col justify-center items-center px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-10 lg:mb-20 text-center">
          Wir danken unseren{" "}
          <span className="gradient-de-text">101 Partnern</span>
        </h1>
        <div className="w-full flex flex-col justify-center items-center mb-10 lg:mb-20 ">
          <h1 className="font-ogg font-normal text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] mb-7">
            Strategische Partner
          </h1>
          <div className="w-full gap-5 sm:w-[80%] md:w-[70%] lg:w-[60%] flex justify-center items-center">
            <div className="flex">
              <img src="/images/allBrands1.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-10 lg:mb-20 ">
          <h1 className="font-ogg font-normal text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] mb-7">
            Medienpartner
          </h1>
          <div className="w-full gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex">
              <img src="/images/allBrands3.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands4.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands5.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands6.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-10 lg:mb-20 ">
          <h1 className="font-ogg font-normal text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] mb-7">
            Partner
          </h1>
          <div className="w-full gap-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex">
              <img src="/images/allBrands7.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands8.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands9.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands10.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands11.svg" alt="" />
            </div>
            <div className="flex">
              <img src="/images/allBrands12.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBrands;
