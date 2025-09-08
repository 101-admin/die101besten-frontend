import BlogArtical from "@/components/BlogArtical";
import { BlogApi, BlogPage, DEFAULT_SEO , DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib";
import { stripLocaleFromSlug } from "@/lib/utils";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const data = await BlogApi.getAllBlogQuery({
    edition: DEFAULT_EDITION,
    language: DEFAULT_LANGUAGE,
  });
  return (
    data?.map((blog: BlogPage) => ({
      slug: stripLocaleFromSlug(blog.slug as string) || "",
    })) || []
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const { isEnabled } = await draftMode();
  const blogData = isEnabled
    ? await BlogApi.getBlogBySlugPreview(slug, locale)
    : await BlogApi.getBlogBySlug(slug, locale);

  const metadata: Metadata = {
    // Use SEO title, fallback to blog title, then default
    title: blogData?.seo?.metaTitle || blogData?.title || DEFAULT_SEO.metaTitle,
    // Use SEO description, fallback to blog description, then default
    description:
      blogData?.seo?.metaDescription ||
      blogData?.description ||
      DEFAULT_SEO.metaDescription,
    // Use SEO keywords or default
    keywords: blogData?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title:
        blogData?.seo?.metaTitle || blogData?.title || DEFAULT_SEO.metaTitle,
      description:
        blogData?.seo?.metaDescription ||
        blogData?.description ||
        DEFAULT_SEO.metaDescription,
      // Use SEO image, fallback to blog main image
      images: blogData?.seo?.openGraphImage
        ? [blogData.seo.openGraphImage.url]
        : blogData?.mainImage
        ? [blogData.mainImage.url]
        : [],
      // Add article-specific OpenGraph tags
      type: "article",
      authors:
        blogData?.author
          ?.map(
            (author: NonNullable<BlogPage["author"]>[number]) =>
              author.name || ""
          )
          .filter(Boolean) || [],
    },
    // Use SEO noIndex setting or default to indexing
    robots: blogData?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  // Add canonical URL if specified in SEO
  if (blogData?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: blogData.seo.canonicalUrl,
    };
  }

  return metadata;
}

const Page = async ({ params }: PageProps) => {
  const { slug, locale } = await params;
  const { isEnabled } = await draftMode();
  const blogData = isEnabled
      ? await BlogApi.getBlogBySlugPreview(slug, locale)
      : await BlogApi.getBlogBySlug(slug, locale);
  if (!blogData) {
    return notFound();
  }
  return (
    <div>
      <BlogArtical blog={blogData} />
    </div>
  );
};

export default Page;
