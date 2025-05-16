import type { Werde101 } from "@/lib";

export default function WerdePartner({
  title,
  description,
  ctaButton,
  image,
}: Werde101) {
  return (
    <div className="w-full bg-[#F9F8FA] py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1150px] mx-auto p-4">
          <div className="flex flex-col md:flex-row-reverse lg:gap-16 gap-8 items-center justify-between">
            {/* Image */}
            <div className="max-w-[330px] w-full flex justify-center items-center">
              <img
                className="w-full max-w-[200px] md:max-w-[330px]"
                src={`${image?.url}`}
                alt={`${image?.alt}`}
              />
            </div>
            <div className="w-full  lg:text-left lg:mb-5">
              <h2 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-6">
                {title}
              </h2>
              <p className="font-[350] text-[15px] leading-[18px] sm:text-[18px] sm:leading-[22] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[32px] font-gte mb-5 lg:mb-10 ">
                {description}
              </p>
              <button className="btn-primary w-[288px] btn-primary-hover-de">
                {ctaButton?.text}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-screen h-screen bg-black bg-opacity-25 backdrop-blur-[8px] fixed top-0 left-0 z-50 flex justify-center items-center">
        <div className="w-full max-w-[700px] h-[1000px] bg-white p-5"></div>
      </div> */}
    </div>
  );
}
