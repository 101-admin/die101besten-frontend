import type { BaseDocument } from "./sanity.types";
import type {
  HeroAbout,
  Utr,
  TextQuote,
  ImageQuote,
  PartnerLogo,
  SuccessStory,
  Newsletter,
  DasBush,
  AboutTestimonials,
  DieBesten,
  BoardofDas,
  Principles,
  ShapingFuture,
  Hotelmomente,
  AllHotelsSlider,
  HotelCollection,
} from "./components.types";

// Union type for all possible about page components
export type AboutComponent =
  | HeroAbout
  | Utr
  | TextQuote
  | ImageQuote
  | PartnerLogo
  | SuccessStory
  | Newsletter
  | DasBush
  | AboutTestimonials
  | DieBesten
  | BoardofDas
  | Principles
  | ShapingFuture
  | Hotelmomente
  | AllHotelsSlider
  | HotelCollection;

export interface AboutPage extends BaseDocument {
  _type: "aboutUs";
  title: string;
  language: string;
  slug?:
    | {
        current: string;
        _type: "slug";
      }
    | string;
  edition: "deutschland" | "dach" | "schweiz";
  components?: AboutComponent[];
}
