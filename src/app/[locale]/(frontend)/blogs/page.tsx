// import BlogDetail from "@/components/BlogDetail";
import ComponentManager from "@/components/ComponentManager";
import { BlogApi } from "@/lib/services/api/blogs.api";
import { DEFAULT_SEO } from "@/lib";
import type { AllBlogsPage } from "@/lib";
import { Metadata } from "next";
import React from "react";
import { draftMode } from "next/headers";
import { setRequestLocale } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: any;
}): Promise<Metadata> => {
  const { locale } = await params;
  const { isEnabled } = await draftMode();
  const blogData: AllBlogsPage = isEnabled
    ? await BlogApi.getBlogPagePreview(locale)
    : await BlogApi.getBlogPage(locale);
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

const Page = async ({ params }: { params: any }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const { isEnabled } = await draftMode();
  const blogPage = isEnabled
    ? await BlogApi.getBlogPagePreview(locale)
    : await BlogApi.getBlogPage(locale);

  return (
    <div>
      <ComponentManager locale={locale} data={blogPage?.components} />
      {/* <BlogDetail /> */}
    </div>
  );
};

export default Page;
