import React from "react";
import brandImg from "@/Data/brandImg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Brands = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-10 lg:gap-16 py-5 lg:py-10">
      {/* Mobile desin */}
      <div className="w-full flex lg:hidden justify-center items-center ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-24"
        >
          <CarouselContent className="flex items-center gap-5">
            {brandImg.map((brand) => {
              return (
                <CarouselItem
                  key={brand.id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4"
                >
                  <img
                    className="max-w-[110px] sm:max-w-[130px] md:max-w-[141px]"
                    src={brand.img}
                    alt=""
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full flex lg:hidden justify-center items-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-24"
        >
          <CarouselContent className="flex items-center gap-5">
            {brandImg.map((brand) => {
              return (
                <CarouselItem
                  key={brand.id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4"
                >
                  <img
                    className="max-w-[110px] sm:max-w-[130px] md:max-w-[141px]"
                    src={brand.img}
                    alt=""
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      {/* Display desin */}
      <div className="w-full hidden lg:flex justify-center items-center">
        <div className="container xl:w-[80%] flex h-[87px] justify-between items-center">
          {brandImg.map((brand) => {
            return (
              <div key={brand.id} className="">
                <img className="max-w-[141px]" src={brand.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-center items-center">
        <div className="container xl:w-[80%] flex h-[87px] justify-between items-center">
          {brandImg.map((brand) => {
            return (
              <div key={brand.id} className="">
                <img className="max-w-[141px]" src={brand.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
