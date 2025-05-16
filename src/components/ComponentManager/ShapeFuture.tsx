import React from "react";
import type { ShapingFuture } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";
const ShapeFuture = ({ title, body, image, ctaButton }: ShapingFuture) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 select-none">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 lg:mb-10">
          <ColoredText text={title} />
        </h1>
        <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-10">
          <div className="flex w-full">
            <img src={`${image?.url}`} alt={`${image?.url}`} />
          </div>
          <div className="w-full flex flex-col justify-start items-baseline">
            <div className="w-full text-[18px] sm:text-[18px] lg:text-[20px] font-gte font-light">
              {body && <PortableText value={body} />}
            </div>
            <Link
              target="_blank"
              className="mt-6 lg:mt-12"
              href={`/${ctaButton?.buttonLink}`}
            >
              <button className="btn-secondary w-[234px] text-black border-black">
                {ctaButton?.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeFuture;
