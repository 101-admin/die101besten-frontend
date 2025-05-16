import React from "react";
import Image from "next/image";
import type { BlogPage } from "@/lib";
import Link from "next/link";

const TopBlog = ({ blogData }: { blogData: BlogPage[] }) => {
  const blog = blogData?.[0];
  // console.log(blog, "@blogData");
  return (
    <div className="w-full pb-12 pt-12 lg:pt-20  px-5 sm:px-6 md:px-16">
      <div className="max-w-[1312px] w-full mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center lg:items-start justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
            <Image
              src={blog?.mainImage?.url || ""}
              alt={blog?.mainImage?.alt || "blog image"}
              width={632}
              height={552}
              className="w-full h-[552px] object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="max-w-[632px] w-full flex flex-col justify-start items-baseline gap-5">
              <h2 className="text-[12px] py-1 px-2 border border-black rounded-lg font-bold leading-[12px] tracking-[0] text-center uppercase font-montserrat text-black">
                {blog?.category}
              </h2>

              <div className="space-y-6">
                <p className="font-ogg font-normal text-2xl leading-[40px] tracking-[0]">
                  {blog?.title}
                </p>

                <p className="font-gte text-xl font-[350] leading-8 tracking-[0]">
                  {blog?.description}
                </p>
              </div>

              <Link className="pt-5 w-[300px] " href={`/blogs/${blog?.slug}`}>
                <button className="w-full h-[64px] px-6 py-3 border-2 border-black text-[16px] font-bold leading-[24px] tracking-[0] uppercase font-montserrat hover:bg-black hover:text-white transition-colors duration-300">
                  {blog?.readMore}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlog;
