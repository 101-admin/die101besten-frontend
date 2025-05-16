import React from "react";
import SingleMember from "./SingleMember";
import BoardMemberData from "@/Data/BoardMemeberData";
import { BoardofDas } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";
import { ColoredText } from "../ui/ColoredText";

const BoardMember = ({
  title,
  boardMembers,
  description1,
  description2,
  readmore,
}: BoardofDas) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center py-10 lg:py-20 select-none">
      <div className=" w-full flex flex-col justify-start items-baseline px-5 lg:px-16">
        <div className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] mb-5 lg:mb-10">
          <ColoredText text={title} />
        </div>

        {description1 && description2 !== undefined && (
          <div className="w-full flex flex-col justify-start items-baseline lg:flex-row lg:items-start gap-5">
            <p className="font-[350] text-[18px] lg:text-[20px] leading-[20px] lg:leading-[24px] font-gte mb-8 w-full">
              {description1}
            </p>
            <p className="font-[350] text-[18px] lg:text-[20px] leading-[20px] lg:leading-[24px] font-gte mb-8 w-full">
              {description2}
            </p>
          </div>
        )}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
          {boardMembers?.map((singleMember, index) => {
            const { image, role, name, description, email, phone, hoverColor } =
              singleMember;
            return (
              <SingleMember
                key={index}
                image={image}
                role={role}
                name={name}
                description={description}
                email={email}
                phone={phone}
                readmore={readmore}
                hoverColor={hoverColor}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BoardMember;
