import type { BaseDocument, SanityPageSEO } from "./sanity.types";
import type {
  AllHotelsSlider,
  PartnerLogo,
  TextQuote,
  BusinessLeisure,
  Hotels,
  SuccessStory,
  Masbstab,
  RankingMitRelevanz,
  SpecialEdition,
  Events101,
  ImageQuote,
  ExclusiveEvents,
  Newsletter,
  Hotelmomente,
  DieInstagram,
  DasBush,
  Location,
  ImageSection,
} from "./components.types";

// Union type for all possible homepage components
export type HomeComponent =
  | AllHotelsSlider
  | PartnerLogo
  | TextQuote
  | BusinessLeisure
  | Hotels
  | SuccessStory
  | Masbstab
  | RankingMitRelevanz
  | SpecialEdition
  | Events101
  | ImageQuote
  | ExclusiveEvents
  | Location
  | Newsletter
  | Hotelmomente
  | DieInstagram
  | DasBush
  | RankingMitRelevanz
  | ImageSection;

export interface HomePage extends BaseDocument {
  _type: "home";
  title: string;
  language: string;
  slug?:
    | {
        current: string;
        _type: "slug";
      }
    | string;
  edition: "deutschland" | "dach" | "schweiz";
  components?: HomeComponent[];
  seo?: SanityPageSEO;
}
