import React from "react";
import BlogCatogory from "./BlogCatogory";
import BlogCards from "./BlogCards";
import TopBlog from "./TopBlog";
import { BlogApi } from "@/lib";

const BlogSection = async () => {
  const blogData = await BlogApi.getAllBlogQuery();

  return (
    <section className="mx-auto w-full flex flex-col justify-center items-center max-w-[1440px]">
      <BlogCatogory />
      <TopBlog blogData={blogData} />
      <BlogCards blogData={blogData} />
    </section>
  );
};

export default BlogSection;
