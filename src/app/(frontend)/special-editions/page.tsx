import React from "react";
import { HotelsApi } from "@/lib/services/api/hotels.api";
import ComponentManager from "@/components/ComponentManager";
const page = async ({ searchParams }: { searchParams: any }) => {
  const specialEditionHotels = await HotelsApi.getSpecialEditionHotels();
  const queryParams = await searchParams;
  // console.log(specialEditionHotels, "@specialEditionHotels");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 ">
      <ComponentManager
        data={specialEditionHotels?.components}
        searchParams={queryParams}
      />
    </section>
  );
};

export default page;
