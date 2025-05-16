import React from "react";
// import Quote from "@/components/Quote";
// import Hero from "@/components/Hero";
// import { HotelsSlider } from "@/components/HotelsSlider";
// import SuccessStory from "@/components/SuccessStory";
// import PictureSection1 from "@/components/PictureSection1";
// import PIctureSection2 from "@/components/PIctureSection2";
// import Events from "@/components/Events";
// import DrPeter from "@/components/DrPeter";
// import HotelsDetail from "@/components/HotelsDetail";
// import SpecialEdition from "@/components/SpecialEdition";
// import Articles from "@/components/Articles";
// import HotelInfo from "@/components/HotelInfo";
// import InstagramPost from "@/components/InstagramPost";
// import Form from "@/components/Form";
// import Footer from "@/components/Footer";
// import Brands from "@/components/Brands";
// import Location from "@/components/Location";
// import NextHotel from "@/components/NextHotel";
import { HomeApi } from "@/lib/services/api/home.api";
import ComponentManager from "@/components/ComponentManager";
import type { HomePage } from "@/lib";
export default async function Page() {
  const homeData: HomePage = await HomeApi.getHomePage();
  // console.log(JSON.stringify(homeData, null, 2), "@step 1: home data");

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6">
        <ComponentManager data={homeData?.components} />

        {/* <Hero />
        <Brands />
        <Quote />
        <NextHotel />
        <HotelsSlider />
        <SuccessStory />
        <PictureSection1 />
        <PIctureSection2 />
        <SpecialEdition />
        <Events />
        <DrPeter />
        <HotelsDetail />
        <Location />
        <Articles />
        <HotelInfo />
        <InstagramPost />
        <Form />
        <Footer /> */}
      </section>
    </>
  );
}
