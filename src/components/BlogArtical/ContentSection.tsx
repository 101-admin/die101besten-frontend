import { ContentSectionBlock } from "@/lib/types/blocks.types";
import Image from "next/image";
import { ColoredText } from "../ui/ColoredText";
import { PortableText } from "@/lib/components/PortableText";

export default function ContentSection({
  data,
}: {
  data?: ContentSectionBlock;
}) {
  return (
    <div className="font-gte py-10 lg:py-14 max-w-[1440px] mx-auto px-5 lg:px-16">
      <div className="w-full">
        {data?.content?.map((section, index) => (
          <div key={index} className="w-full flex flex-col">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
              {/* Image */}

              {section.image?.url && (
                <div className="w-full lg:max-w-[632px] flex ">
                  <Image
                    src={section.image?.url || ""}
                    alt={section.image?.alt || ""}
                    width={632}
                    height={576}
                    className="lg:w-[632px] w-full h-[596px] object-cover"
                  />
                </div>
              )}

              {/* Text */}
              <div className="flex w-full max-w-[576px] px-5 lg:px-0">
                {/* <ColoredText
                  className="text-[18px] sm:text-[20px] font-[350] leading-[22px] sm:leading-[24px]"
                  text={section.description}
                /> */}
                {section?.description && (
                  <PortableText value={section.description} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
