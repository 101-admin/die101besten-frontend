import ComponentManager from "@/components/ComponentManager";
import { HotelsApi } from "@/lib";
import React from "react";

const page = async ({ searchParams }: { searchParams: any }) => {
  const hotelPage = await HotelsApi.getHotelPage();

  const queryParams = await searchParams;

  console.log(hotelPage, "@hotel page");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 ">
      <ComponentManager
        data={hotelPage?.components}
        searchParams={queryParams}
      />
      {/* <Hero />
      <Dropdown />
      <Hotels hotels={hotels} />
      <SpecialEdition />
      <InstagramPost />
      <Form />
      <Footer /> */}
    </section>
  );
};

export default page;
