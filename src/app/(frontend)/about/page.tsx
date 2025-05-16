import ComponentManager from "@/components/ComponentManager";
import { AboutApi } from "@/lib/services/api/about.api";
import React from "react";
// import Hero from "@/components/about-us/Hero";
// import Form from "@/components/Form";
// import Footer from "@/components/Footer";
// import RelyUs from "@/components/about-us/RelyUs";
// import Testimonial1 from "@/components/about-us/Testimonial1";
// import BestHotel from "@/components/about-us/BestHotel";
// import BoardMember from "@/components/about-us/BoardMember";
// import Principles from "@/components/about-us/Principles";
// import Testimonial2 from "@/components/Testimonial2";
// import ShapeFuture from "@/components/about-us/ShapeFuture";
// import OurTeam from "@/components/about-us/OurTeam";
// import TopStories from "@/components/about-us/TopStories";
const page = async () => {
  const aboutPage = await AboutApi.getAboutPage();

  // console.log(aboutPage, "@step 1: aboutPage");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      <ComponentManager data={aboutPage?.components} />

      {/* <Hero />
      <RelyUs />
      <Testimonial1 />
      <BestHotel />
      <BoardMember />
      <Principles />
      <Testimonial2 />
      <ShapeFuture />
      <OurTeam />
      <TopStories />
      <Form />
      <Footer /> */}
    </section>
  );
};

export default page;
