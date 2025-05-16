import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SingleMember = ({
  img,
  title,
  subTitle,
  description,
}: {
  img: string;
  title: string;
  subTitle: string;
  description: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full flex flex-col justify-start items-baseline gap-5 group cursor-pointer">
          <div className="flex w-full relative">
            <img
              className="w-full grayscale group-hover:grayscale-0"
              src={img}
              alt="img"
            />
            <div className="w-5 h-5 border-2 border-black absolute top-3 rounded-full  justify-center items-center font-bold   right-3 hidden group-hover:flex">
              i
            </div>
          </div>

          <div className="flex flex-col justify-start items-baseline ">
            <h3 className="font-gte font-bold text-[20px]">{title}</h3>
            <p className="font-gte font-light text-[16px]">{subTitle}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[200px] sm:max-w-[360px] pb-3">
        <div className="w-full mb-3">
          <img className="w-full" src={img} alt="" />
        </div>
        <DialogHeader>
          <DialogTitle className="font-gte font-bold text-[20px] px-5">
            {title}
          </DialogTitle>
          <p className="font-gte font-light text-[16px] px-5 mb-2">
            {subTitle}
          </p>
          <p className="font-gte font-light text-[12px] sm:text-[16px] px-5 ">
            {description}
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SingleMember;
