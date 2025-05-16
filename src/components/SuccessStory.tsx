import React from "react";

const SuccessStory = () => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-20 overflow-hidden">
      <div className="w-full   flex flex-col justify-center items-center ">
        <div className="w-full lg:max-w-[800px] xl:max-w-[800px] flex flex-col justify-center items-center  lg:ml-[-200px] relative">
          <div className="p-7 lg:p-10 xl:p-16 bg-[#F9F8FA] flex flex-col justify-center items-center">
            <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-center mb-3 lg:mb-6">
              Our guest{" "}
              <span className="text-[#B65033]">Mrs. Success-Story</span>
            </h1>
            <p className="font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-Epilogue text-center lg:w-[70%] xl:w-full">
              Sed eleifend libero eu velit tempus gravida. Duis ornare dignissim
              imperdiet. Mauris nec scelerisque lacus, non vestibulum sapien.
              Vivamus sit amet tellus sit amet nisl feugiat ullamcorper a vitae
              ipsum. Nam molestie mauris vel tincidunt blandit. Sed dignissim
              lorem imperdiet ultrices ultrices. Aliquam libero arcu, tincidunt
              eu commodo pellentesque, vulputate vitae lectus. Proin pulvinar in
              urna vel pretium.{" "}
            </p>
          </div>
          <div className="flex static lg:absolute lg:right-[-230] xl:right-[-270px] top-[-40px] bg-white">
            <img
              className="max-w-[200px] max-h-[300px] sm:max-w-[300px] sm:max-h-[400px]"
              src="/images/Lady.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
