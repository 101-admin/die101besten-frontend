import HotelBasic from "@/components/HotelBasic";
import HotelExclusive from "@/components/HotelExclusive";
import HotelGrand from "@/components/HotelGrand";
import HotelPremium from "@/components/HotelPremium";
import { DEFAULT_EDITION, DEFAULT_LANGUAGE, Hotel } from "@/lib";
import { HotelsApi } from "@/lib/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const hotels = await HotelsApi.getAllHotels({
    edition: DEFAULT_EDITION,
    language: DEFAULT_LANGUAGE,
  });
  return (
    hotels?.map((hotel: Hotel) => ({
      slug: (hotel.slug as string) || "#",
    })) || []
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
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
