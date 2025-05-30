import { HotelInterviewSection } from "@/lib";
import { ColoredText } from "../ui/ColoredText";
export default function HostSection({
  grandQuestions,
  manager,
  title,
}: HotelInterviewSection) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
      <div className="w-full max-w-[1024px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
        {/*  Image */}
        <div className=" w-full">
          {manager?.image && (
            <img
              className="w-full max-w-[500px] h-[580px] object-cover"
              src={manager?.image?.url || ""}
              alt={manager?.image?.alt || ""}
            />
          )}
        </div>

        {/* title*/}
        <div className="w-full flex flex-col justify-center">
          {title && (
            <h2 className="font-ogg text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[110%] mb-8">
              <ColoredText text={title} />
            </h2>
          )}

          {manager?.name && (
            <h1 className="text-[38px] leading-[42px] font-[400] font-ogg mb-2">
              {manager?.name}
            </h1>
          )}
          {manager?.role && (
            <p className="text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px] font-[350] font-gte">
              {manager?.role}
            </p>
          )}
        </div>
      </div>

      {/* Q&A */}
      {grandQuestions && (
        <div className="max-w-[1312] grid grid-cols-1 lg:grid-cols-2 gap-10">
          {grandQuestions?.map((data, index) => {
            const { question, answer } = data;
            return (
              <div key={index} className="pb-6">
                {question && (
                  <h3 className="font-gte font-bold text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] leading-[32px] tracking-normal mb-4">
                    {question}
                  </h3>
                )}
                {answer && (
                  <p className="mt-2 font-[350] text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px]  tracking-[0%] font-gte">
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
