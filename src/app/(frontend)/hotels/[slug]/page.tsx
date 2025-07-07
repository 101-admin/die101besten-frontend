import HotelBasic from "@/components/HotelBasic";
import HotelExclusive from "@/components/HotelExclusive";
import HotelGrand from "@/components/HotelGrand";
import HotelPremium from "@/components/HotelPremium";
import { DEFAULT_EDITION, DEFAULT_LANGUAGE, Hotel, DEFAULT_SEO } from "@/lib";
import { HotelsApi } from "@/lib/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const data = await HotelsApi.getAllHotels({
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
  const hotelData = await HotelsApi.getHotelBySlug(slug);

  if (!hotelData) {
    return {
      title: DEFAULT_SEO.metaTitle,
      description: DEFAULT_SEO.metaDescription,
    };
  }

  const metadata: Metadata = {
    // Use SEO title, fallback to hotel name, then default
    title: hotelData?.seo?.metaTitle || hotelData.name || DEFAULT_SEO.metaTitle,
    // Use SEO description, fallback to hotel description, then default
    description:
      hotelData?.seo?.metaDescription ||
      hotelData.description ||
      DEFAULT_SEO.metaDescription,
    // Use SEO keywords or default
    keywords: hotelData?.seo?.keywords || DEFAULT_SEO.keywords,
    openGraph: {
      title:
        hotelData?.seo?.metaTitle || hotelData.name || DEFAULT_SEO.metaTitle,
      description:
        hotelData?.seo?.metaDescription ||
        hotelData.description ||
        DEFAULT_SEO.metaDescription,
      // Use SEO image, fallback to hotel image
      images: hotelData?.seo?.openGraphImage
        ? [hotelData.seo.openGraphImage.url]
        : hotelData?.image
        ? [hotelData.image.url]
        : [],
      type: "website",
    },
    // Use SEO noIndex setting or default to indexing
    robots: hotelData?.seo?.noIndex ? "noindex, nofollow" : "index, follow",
  };

  // Add canonical URL if specified in SEO
  if (hotelData?.seo?.canonicalUrl) {
    metadata.alternates = {
      canonical: hotelData.seo.canonicalUrl,
    };
  }

  return metadata;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const hotel = await HotelsApi.getHotelBySlug(slug);
  // console.log(JSON.stringify(hotel, null, 2), "@step 1: single hotel");
  if (!hotel) {
    return notFound();
  }

  const getHotelByType = (type: string) => {
    switch (type) {
      case "classic":
        return <HotelBasic hotel={hotel} />;
      case "exclusive":
        return <HotelExclusive hotel={hotel} />;
      case "grand":
        return <HotelGrand hotel={hotel} />;
      case "premium":
        return <HotelPremium hotel={hotel} />;
      default:
        return <HotelBasic hotel={hotel} />;
    }
  };
  // console.log(JSON.stringify(hotel, null, 2), "@step 1: single hotel");
  return <div>{getHotelByType(hotel.hotelType)}</div>;
}
