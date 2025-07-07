import ComponentManager from "@/components/ComponentManager";
import { AboutApi } from "@/lib/services/api/about.api";
import { DEFAULT_SEO } from "@/lib";
import type { AboutPage } from "@/lib";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  const aboutData: AboutPage = await AboutApi.getAboutPage();
  const metadata: Metadata = {
    title: aboutData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description: aboutData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: aboutData?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: aboutData?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        aboutData?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
      images: aboutData?.seo?.openGraphImage
        ? [aboutData.seo.openGraphImage.url]
        : [],
    },
    robots: aboutData?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (aboutData?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: aboutData.seo.canonicalUrl,
    };
  }

  return metadata;
};

const Page = async () => {
  const aboutPage = await AboutApi.getAboutPage();

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      <ComponentManager data={aboutPage?.components} />
    </section>
  );
};

export default Page;
