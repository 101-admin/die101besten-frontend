import React from "react";

// import SingleHotel from "./SingleHotel";

import type { HotelCollection } from "@/lib";
const HotelCollection = () => {
  return (
    <section className="w-full max-w-[1440px]  flex flex-col justify-center items-center px-5 py-5 lg:py-10 lg:px-16 gap-6 md:gap-10">
      {/* {hotels?.map((hotel, index) => {
        return <SingleHotel key={index} data={hotel} index={index} />;
      })} */}
      <button className="btn-secondary w-[300px] text-black border-black">
        Weitere Hotels laden
      </button>
    </section>
  );
};

export default HotelCollection;
