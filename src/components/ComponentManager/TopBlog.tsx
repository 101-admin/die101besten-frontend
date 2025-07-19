import React from "react";
import Image from "next/image";
import type { BlogPage, SanityImage } from "@/lib";
import Link from "next/link";
import { ColoredText } from "../ui/ColoredText";
import { OptimizedImage } from "../ui/OptimizedImage";

const TopBlog = ({ blogData }: { blogData: BlogPage[] }) => {
  const blog = blogData?.[0];
  // console.log(blog, "@blogData");

  return (
    <section className="w-full">
      {blog && (
        <Link href={`/blogs/${blog.slug}`} className="w-full">
          <div className="w-full pb-12 pt-12 lg:pt-20  px-5 sm:px-6 md:px-16">
            <div className="max-w-[1312px] w-full mx-auto">
              <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center lg:items-start justify-between">
                {/* Image */}
                {blog?.mainImage && (
                  <div className="w-full lg:w-1/2  overflow-hidden">
                    {/* <Image
                      src={blog.mainImage.url || ""}
                      alt={blog.mainImage.alt || "blog image"}
                      width={632}
                      height={552}
                      className="w-full h-[552px] object-cover"
                      priority
                    /> */}

                    <OptimizedImage
                      image={blog.mainImage as SanityImage}
                      className="w-full h-[552px] object-cover"
                      width={632}
                      height={552}
                      priority
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="max-w-[632px] w-full flex flex-col justify-start items-baseline gap-5">
                    {blog.category && (
                      <h2 className="text-[12px] py-1 px-2 border border-black rounded-lg font-bold leading-[12px] tracking-[0] text-center uppercase font-montserrat text-black">
                        {blog?.category[0]?.title}
                      </h2>
                    )}

                    <div className="space-y-6">
                      {blog?.title && (
                        <p className="font-ogg font-normal text-2xl leading-[40px] tracking-[0]">
                          <ColoredText text={blog.title} />
                        </p>
                      )}

                      {blog.description && (
                        <p className="font-gte text-xl font-[350] leading-8 tracking-[0]">
                          {blog.description}
                        </p>
                      )}
                    </div>

                    {blog.slug && (
                      <button className="pt-5 w-[300px] btn-secondary border-black text-black btn-secondary-hover-de">
                        {blog.readMore}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </section>
  );
};

export default TopBlog;
