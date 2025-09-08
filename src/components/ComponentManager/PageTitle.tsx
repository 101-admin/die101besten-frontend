import React from "react";
import type { PageTitle } from "@/lib";

const pageTitle = ({ title }: PageTitle) => {
  return (
    <section className="w-full bg-white pt-12 lg:pt-28">
      {title && (
        <h1 className="font-ogg font-normal text-[32px] md:text-[38px] lg:text-[48px] leading-[36px] md:leading-[43px] lg:leading-[52px] text-center mb-10 lg:mb-20">
          {title}
        </h1>
      )}
    </section>
  );
};

export default pageTitle;
