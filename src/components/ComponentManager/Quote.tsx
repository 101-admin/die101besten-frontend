import React from "react";
import type { TextQuote } from "@/lib";
import Link from "next/link";
// import { RiDoubleQuotesL } from "react-icons/ri";
// import { RiDoubleQuotesR } from "react-icons/ri";
import { ColoredText } from "../ui/ColoredText";
import { OptimizedImage } from "../ui/OptimizedImage";

const Quote = ({ ctaButtons, heading, author, image, id }: TextQuote) => {
  console.log(ctaButtons);
  return (
    <section
      id={id}
      className="w-full max-w-[1440px]  mx-auto flex flex-col justify-center items-center py-11 gap-10 lg:py-24 relative  select-none"
    >
      <div className="relative w-full max-w-[1178px] flex flex-col justify-center items-center px-5 sm:px-7 lg:px-0 ">
        <div className="flex static lg:absolute lg:right-[-40px] top-[-20px]">
          {image && (
            // <img
            //   className="w-[330px] h-[440px] object-cover"
            //   src={`${image.url}`}
            //   alt={`${image.alt}`}
            // />
            <OptimizedImage
              image={image}
              className="w-[330px] h-[440px] object-cover"
            />
          )}
        </div>
        <div className="w-full max-w-[880px] flex flex-col justify-center items-center text-center py-8 lg:py-16 bg-[#F9F8FA] lg:ml-[-200px]">
          {/* <div className="w-full max-w-[750px] text-start px-5 lg:px-0">
            <RiDoubleQuotesR className="text-[30px] lg:text-[55px] text-[#B65033]" />
          </div> */}
          {heading && (
            <q className="max-w-[720px] px-5 lg:px-10 xl:px-0 w-full font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[1.2] mb-5">
              <ColoredText text={heading} />
            </q>
          )}
          {/* <div className="w-full max-w-[600px] flex justify-end px-5 lg:px-0 mt-[-15px] lg:mt-[-30px]">
            <RiDoubleQuotesL className="text-[30px] lg:text-[55px] text-[#B65033]" />
          </div> */}
          {author && (
            <p className="font-gte max-w-[720px] w-full font-light text-[16px] md:text-[24px] leading-[1.33]">
              {author}
            </p>
          )}
        </div>
      </div>
      {ctaButtons && ctaButtons.length > 0 && (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          {ctaButtons.map((button, index) => (
            <Link href={`${button.link}`} key={index}>
              <button className="btn-primary w-[280px] btn-primary-hover-de">
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Quote;
