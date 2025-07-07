import React from "react";
import UpcommingEvents from "@/components/UpcommingEvents/index";
import PastEvents from "@/components/PastEvents/index";
import { notFound } from "next/navigation";
import { EventsApi } from "@/lib/services";
import { DEFAULT_EDITION, DEFAULT_LANGUAGE, DEFAULT_SEO, Hotel } from "@/lib";
import { Metadata } from "next";

export async function generateStaticParams() {
  const data = await EventsApi.getAllEvents({
    edition: DEFAULT_EDITION,
    language: DEFAULT_LANGUAGE,
  });
  return (
    data?.hotels?.map((hotel: Hotel) => ({
      slug: (hotel.slug as string) || "#",
    })) || []
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await EventsApi.getEventsBySlug(slug);

  if (!event) {
    return {
      title: DEFAULT_SEO.metaTitle,
      description: DEFAULT_SEO.metaDescription,
    };
  }

  const metadata: Metadata = {
    title: event?.seo?.metaTitle || event?.title || DEFAULT_SEO.metaTitle,
    description:
      event?.seo?.metaDescription ||
      event?.description ||
      DEFAULT_SEO.metaDescription,
    keywords: event?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title: event?.seo?.metaTitle || event?.title || DEFAULT_SEO.metaTitle,
      description:
        event?.seo?.metaDescription ||
        event?.description ||
        DEFAULT_SEO.metaDescription,
      images: event?.seo?.openGraphImage
        ? [event.seo.openGraphImage.url]
        : event?.mainImage
        ? [event.mainImage.url]
        : [],
    },
    robots: event?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  if (event?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: event.seo.canonicalUrl,
    };
  }

  return metadata;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const event = await EventsApi.getEventsBySlug(slug);

  if (!event) {
    return notFound();
  }

  if (event?.startDate > new Date().toISOString()) {
    return (
      <>
        <UpcommingEvents event={event} />
      </>
    );
  }

  return (
    <>
      <PastEvents events={event} />
    </>
  );
};

export default Page;
