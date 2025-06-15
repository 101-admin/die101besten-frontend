import React from "react";
import type { BlogDescriptionGridBlock } from "@/lib";
import { PortableText } from "@/lib/components/PortableText";

const BlogGrid = ({ data }: { data: BlogDescriptionGridBlock }) => {
  return (
    <div className=" font-gte py-10 lg:py-14 w-full max-w-[1440px] mx-auto">
      <div className="w-full">
        <div className="w-full flex flex-col">
          {data?.descriptions?.length === 1 && (
            <div className="w-full flex flex-col justify-center items-center">
              {data?.descriptions?.length === 1 && (
                <div className="w-full flex justify-center items-center flex-col">
                  {data?.descriptions?.slice(0, 2)?.map((item, index) => {
                    const {} = item;
                    return (
                      <div className="w-full flex justify-center items-center flex-col max-w-[640px] px-5 lg:px-0 ">
                        {item?.description && (
                          <PortableText value={item?.description} />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {data?.descriptions?.length > 1 && (
            <div className="w-full flex flex-col lg:flex-row justify-start items-baseline lg:justify-center lg:items-center gap-5 lg:gap-7">
              {data?.descriptions?.slice(0, 2)?.map((item, index) => {
                const {} = item;
                return (
                  <div className="w-full flex justify-center items-center flex-col max-w-[640px] px-5 lg:px-0">
                    {item?.description && (
                      <PortableText value={item?.description} />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
