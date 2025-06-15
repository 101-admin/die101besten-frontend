import React from "react";

import SingleHotel from "@/components/all-hotels/SingleHotel";

import { Hotel, HotelsApi, type HotelCollection } from "@/lib";
const AllHotels = async ({ hotels }: { hotels: Hotel[] }) => {
  const hotelCopy = [...hotels];
  const alphabaticSorting = hotelCopy?.sort((a, b) =>
    a?.name?.localeCompare(b?.name)
  );

  console.log(hotels, "@hotels");
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-6 md:gap-10">
      {hotels?.slice(0, 30)?.map((hotel: Hotel, index: number) => {
        return <SingleHotel key={index} data={hotel} index={index} />;
      })}

      {alphabaticSorting?.slice(30)?.map((hotel: Hotel, index: number) => {
        return <SingleHotel key={index} data={hotel} index={index} />;
      })}

      {/* <button className="btn-secondary w-[300px] text-black border-black">
        Weitere Hotels laden
      </button> */}
    </section>
  );
};

export default AllHotels;
