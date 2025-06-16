import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialSec2 from "@/shared/TestimonialSec2";
import { TestimonialsHotel } from "@/lib";
const Testimonial2 = ({ testimonial }: TestimonialsHotel) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-24">
      <div className=" w-full flex flex-col justify-center items-center px-5 lg:px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="w-full">
            {testimonial?.map((testiItem, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="w-full flex flex-col justify-center items-center"
                >
                  <TestimonialSec2
                    author={testiItem?.author}
                    review={testiItem?.review}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial2;
