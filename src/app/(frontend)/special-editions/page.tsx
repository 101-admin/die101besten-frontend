import React from "react";
import { HotelsApi } from "@/lib/services/api/hotels.api";
import ComponentManager from "@/components/ComponentManager";
import { Metadata } from "next";
import { DEFAULT_SEO, SpecialEditionHotelsPage } from "@/lib";

export async function generateMetadata(): Promise<Metadata> {
  const specialEditionHotels: SpecialEditionHotelsPage =
    await HotelsApi.getSpecialEditionHotels();

  const metadata: Metadata = {
    title: specialEditionHotels?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
    description:
      specialEditionHotels?.seo?.metaDescription || DEFAULT_SEO.metaDescription,
    keywords: specialEditionHotels?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: specialEditionHotels?.seo?.metaTitle || DEFAULT_SEO.metaTitle,
      description:
        specialEditionHotels?.seo?.metaDescription ||
        DEFAULT_SEO.metaDescription,
      images: specialEditionHotels?.seo?.openGraphImage
        ? [specialEditionHotels.seo.openGraphImage.url]
        : [],
    },
    robots: specialEditionHotels?.seo?.noIndex
      ? "noindex, nofollow"
      : "index, follow",
  };

  if (specialEditionHotels?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: specialEditionHotels.seo.canonicalUrl,
    };
  }

  return metadata;
}

const Page = async ({ searchParams }: { searchParams: any }) => {
  const specialEditionHotels = await HotelsApi.getSpecialEditionHotels();
  const queryParams = await searchParams;

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 ">
      <ComponentManager
        data={specialEditionHotels?.components}
        searchParams={queryParams}
      />
    </section>
  );
};

export default Page;
