import React from "react";

import SingleHotel from "@/components/all-hotels/SingleHotel";

import { Hotel, HotelsApi, type HotelCollection } from "@/lib";
const AllHotels = async ({ hotels }: { hotels: Hotel[] }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-6 md:gap-10">
      {hotels?.map((hotel: Hotel, index: number) => {
        return <SingleHotel key={index} data={hotel} index={index} />;
      })}
      <button className="btn-secondary w-[300px] text-black border-black">
        Weitere Hotels laden
      </button>
    </section>
  );
};

export default AllHotels;
