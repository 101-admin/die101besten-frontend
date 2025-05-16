import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialSec from "@/shared/TestimonialSec";

import type { AboutTestimonials } from "@/lib";

const Testimonial1 = ({ slider }: AboutTestimonials) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-24 select-none">
      <div className=" w-full flex flex-col justify-center items-center px-5 lg:px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="w-full">
            {slider?.map((testiItem, index) => {
              const { author, review, image } = testiItem;
              return (
                <CarouselItem
                  key={index}
                  className="w-full flex flex-col justify-center items-center"
                >
                  <TestimonialSec
                    author={author}
                    review={review}
                    image={image}
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

export default Testimonial1;
