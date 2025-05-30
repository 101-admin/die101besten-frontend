import { HotelsApi } from "@/lib/services";
import type { HotelCollection } from "@/lib/types/components.types";
import AllHotels from "./AllHotels";
import Dropdown from "./Dropdown";
import { DEFAULT_EDITION, DEFAULT_LANGUAGE, Hotel } from "@/lib";
import SecondaryDropdown from "./SecondaryDropdown";
import SpecialEditionHotels from "./SpecialEditionHotels";

interface HotelCollectionProps extends HotelCollection {
  searchParams?: any;
}

const HotelCollection = async ({
  searchParams,
  id,
  variant,
}: HotelCollectionProps) => {
  console.log(variant, "@variant");
  const data = await HotelsApi.getAllHotels({
    edition: DEFAULT_EDITION,
    language: DEFAULT_LANGUAGE,
    category: searchParams.category,
    city: searchParams?.city,
    segment: searchParams?.segment,
    search: searchParams?.search,
    variant: variant,
  });

  const categories = await HotelsApi.getHotelCategories();

  return (
    <div
      id={`${id}`}
      className="w-full max-w-[1440px] mx-auto px-5 py-5 lg:py-10 lg:px-16"
    >
      {variant === "classic" && (
        <Dropdown totalHotels={data.hotels?.length} categories={categories} />
      )}
      {variant === "special" && <SecondaryDropdown />}

      {variant === "classic" && <AllHotels hotels={data?.hotels} />}
      {variant === "special" && (
        <SpecialEditionHotels
          totalHotels={data?.totalCount}
          hotels={data?.hotels}
        />
      )}
    </div>
  );
};

export default HotelCollection;
