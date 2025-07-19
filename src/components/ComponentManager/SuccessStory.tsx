import type { SuccessStory } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import React from "react";
import { ColoredText } from "../ui/ColoredText";
import { OptimizedImage } from "../ui/OptimizedImage";

const SuccessStory = ({
  title,
  image,
  story,
  name,
  role,
  id,
}: SuccessStory) => {
  return (
    <section
      id={id}
      className="w-full lg:max-w-[1440px] mx-auto flex flex-col justify-center items-center pt-10 px-6 lg:px-16 lg:pt-16"
    >
      <div className="w-auto flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col items-center w-full md:max-w-[860px] mr-0 md:my-9 md:-mr-8 px-6 pt-36 pb-10 md:p-12 md:pr-16 lg:p-16 gap-8 bg-[#F9F8FA]">
          {title && (
            <q className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 text-center md:text-left">
              <ColoredText text={title} />
            </q>
          )}
          {story && (
            <div className="bodycopy-1-lg text-center md:text-left">
              <PortableText value={story} />
            </div>
          )}
        </div>
        <div className="z-10 flex flex-col gap-4 items-center md:items-start h-full md:self-stretch py-0 px-6 md:px-0 -mb-24 md:mb-0">
          {image && (
            // <img
            //   className="w-full h-full aspect-[3/4] max-w-[300px] md:max-w-[330px] md:min-w-[300px]"
            //   src={image.url}
            //   alt={image.alt}
            // />
            <OptimizedImage
              image={image}
              className="w-full h-full aspect-[3/4] max-w-[300px] md:max-w-[330px] md:min-w-[300px]"
            />
          )}
          <div className="flex flex-col gap-[6px] pl-0 md:pl-16">
            {name && (
              <p className="text-[16px] lg:text-[20px] font-bold leading-[20px] lg:leading-[24px] mb-4">
                {name}
              </p>
            )}
            {role && (
              <p className="text-[16px] lg:text-[20px] font-[350] leading-[20px] lg:leading-[24px] mb-4">
                {role}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
