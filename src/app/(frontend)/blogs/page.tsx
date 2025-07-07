// import BlogDetail from "@/components/BlogDetail";
import ComponentManager from "@/components/ComponentManager";
import { BlogApi } from "@/lib/services/api/blogs.api";
import { DEFAULT_SEO } from "@/lib";
import type { AllBlogsPage } from "@/lib";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  const blogData: AllBlogsPage = await BlogApi.getBlogPage();
  const metadata: Metadata = {
    title: blogData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description: blogData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: blogData?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: blogData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        blogData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
      images: blogData?.seo?.openGraphImage
        ? [blogData.seo.openGraphImage.url]
        : [],
    },
    robots: blogData?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (blogData?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: blogData.seo.canonicalUrl,
    };
  }

  return metadata;
};

const Page = async () => {
  const blogPage = await BlogApi.getBlogPage();

  return (
    <div>
      <ComponentManager data={blogPage?.components} />
      {/* <BlogDetail /> */}
    </div>
  );
};

export default Page;
