export default function PartnerSection() {
  return (
    <div className="w-full bg-[#FFFFFF] py-12">

      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1150px] mx-auto p-4">
          <div className="flex flex-col md:flex-row-reverse lg:gap-16 gap-8 items-center justify-between">
            {/* Image */}
            <div className="md:w-[70%] w-full flex justify-center items-center">
              <img
                className="w-full max-w-[200px] md:max-w-[330px]"
                src="/partners/Siegel_Kupfer_frei_Partner 1.svg"
                alt="101 Besten Partner"
              />
            </div>
            <div className="  lg:text-left lg:mb-5">
              <h2 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-6">
                Werde <span className="text-[#B65033]">101 Partner</span>
              </h2>
              <p className="font-normal text-[15px] leading-[18px] sm:text-[18px] sm:leading-[22] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[32px] font-Epilogue mb-5 lg:mb-10 ">
                {`   Donec quam felis, ultricies nec, pellentesque eu, prelium quis,


              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.`}
              </p>
              <button className="btn-primary w-[288px] btn-primary-hover-de">
                PARTNERSCHAFT ANFRAGEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
