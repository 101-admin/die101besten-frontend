import { HotelsApi } from "@/lib/services";
import type { HotelCollection } from "@/lib/types/components.types";
import AllHotels from "./AllHotels";
import Dropdown from "./Dropdown";
import { DEFAULT_LANGUAGE } from "@/lib";
import SecondaryDropdown from "./SecondaryDropdown";
import SpecialEditionHotels from "./SpecialEditionHotels";

interface HotelCollectionProps extends HotelCollection {
  searchParams?: any;
}

const HotelCollection = async ({
  searchParams,
  collectionVariant,
}: HotelCollectionProps) => {
  const hotels = await HotelsApi.getAllHotels({
    edition: searchParams.edition,
    language: DEFAULT_LANGUAGE,
    category: searchParams.category,
    city: searchParams?.city,
    segment: searchParams?.segment,
    search: searchParams?.search,
    rankingCategory: searchParams?.rankingCategory,
  });
  console.log(hotels, "@collection hotels");

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 py-5 lg:py-10 lg:px-16">
      {collectionVariant === "all-hotels" && <Dropdown />}
      {collectionVariant === "special-edition" && <SecondaryDropdown />}

      {collectionVariant === "all-hotels" && <AllHotels hotels={hotels} />}
      {collectionVariant === "special-edition" && (
        <SpecialEditionHotels hotels={hotels} />
      )}
    </div>
  );
};

export default HotelCollection;
