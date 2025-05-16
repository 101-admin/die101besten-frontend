import type { BaseDocument, BlockContent, SanityImage } from "./sanity.types";
import type {
  AllHotelsSlider,
  SpecialEdition,
  DieInstagram,
  Newsletter,
  HotelCollection,
  Hotelmomente,
  SpecialHotels,
} from "./components.types";
import type { HeroSlider } from "./components.types";

/**
 * Common types
 */
export interface SanityReference {
  _type: "reference";
  _ref: string;
}

export interface CTAButton {
  text?: string;
  link?: string;
  url?: string;
}

export interface SaveOrSplitButtons {
  saveButton?: string;
  splitButton?: string;
}

/**
 * Hotel specific sections
 */
export interface PrimaryHeroSection {
  image?: SanityImage;
  title?: string;
  subTitle?: string;
  ctaButton?: CTAButton;
}

export interface SecondaryHeroSection {
  image?: SanityImage;
  ctaButton?: CTAButton;
  saveOrSplitButtons?: SaveOrSplitButtons;
  brandImages?: SanityImage[];
}

export interface HotelDetailsSection {
  image?: SanityImage;
  description?: string;
  ctaButton?: CTAButton;
  saveOrSplitButtons?: SaveOrSplitButtons;
  brandImages?: SanityImage[];
}

export interface AboutHotel {
  aboutHotels?: Array<{
    image?: SanityImage;
    description?: BlockContent;
    imagePosition?: "left" | "right";
  }>;
}

export interface HotelDescription {
  description?: BlockContent;
}

export interface HotelEventDate {
  name?: string;
  date?: string;
}

export interface HotelEventTime {
  name?: string;
  time?: string;
}

export interface HotelEventLocation {
  name?: string;
  location?: string;
}

export interface HotelEvent {
  image?: SanityImage;
  title?: string;
  subtitle?: string;
  description?: string;
  eventDate?: HotelEventDate;
  eventTime?: HotelEventTime;
  eventLocation?: HotelEventLocation;
  ctaButton?: CTAButton;
}

export interface HotelEvents {
  title?: string;
  text?: string;
  events?: HotelEvent[];
}

export interface HotelInfo {
  title?: string;
  image?: SanityImage;
  description?: BlockContent;
  readMore?: string;
}

export interface HotelInfoPerson {
  image?: SanityImage;
  name?: string;
  host?: string;
  role?: string;
}

export interface HotelInfoPremium {
  Person?: HotelInfoPerson;
  title?: string;
  description?: BlockContent;
  readMore?: string;
}

export interface TestimonialHotel {
  review?: string;
  author?: string;
}

export interface TestimonialsHotel {
  testimonial?: TestimonialHotel[];
}

export interface HotelInterviewSection {
  title?: string;
  manager?: {
    image?: SanityImage;
    name?: string;
    role?: string;
  };
  exclusiveQuestions?: {
    question?: string;
    answer?: string;
  }[];
  grandQuestions?: {
    question?: string;
    answer?: string;
  }[];
}

export interface HotelAmenity {
  amenityText?: string;
  icon?: SanityImage;
}

export interface HotelHighlights {
  headline?: string;
  amenities?: HotelAmenity[];
  image?: SanityImage;
  isDraggable?: boolean;
  showNavigationArrows?: boolean;
  ctaButton?: CTAButton;
}

export interface HotelMapInfo {
  name?: string;
  city?: string;
  country?: string;
}

export interface HotelMapIntegration {
  showLocation?: boolean;
  enableRouting?: boolean;
  zoomLevel?: number;
}

export interface HotelContactInfo {
  bookingText?: string;
  streetAddress?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export interface HotelMapSection {
  headline?: string;
  hotelInfo?: HotelMapInfo;
  mapIntegration?: HotelMapIntegration;
  contactInfo?: HotelContactInfo;
  ctaButton?: CTAButton;
}

/**
 * Main Hotel interface
 */
export type HotelSegment = "leisure" | "business";

export type HotelCategory =
  | "luxury-city-palais"
  | "luxury-culinary-hotels"
  | "luxury-design-lifestyle-resorts"
  | "luxury-family-resorts"
  | "grand-hotels"
  | "luxury-lake-side-resorts"
  | "luxury-meeting-event-hotels"
  | "luxury-spa-health-resorts"
  | "luxury-hideaways"
  | "luxury-alpine-resorts"
  | "grand-resorts"
  | "luxury-hotels-historical-architecture"
  | "luxury-city-hotels"
  | "luxury-golf-resorts";

export type HotelCity = "berlin" | "munich" | "zurich" | "vienna" | "hamburg";

export type HotelType = "classic" | "exclusive" | "grand" | "premium";

export interface HotelRanking {
  position: number;
  category: "featured" | "luxury" | "new" | "popular" | "editors-choice";
}

export interface HotelAchievement {
  name?: string;
}

export interface Hotel extends BaseDocument {
  _type: "hotel";
  name: string;
  additionalName?: string;
  language: string;
  edition: "deutschland" | "dach" | "schweiz";
  hotelType?: HotelType;
  segment?: HotelSegment;
  category?: HotelCategory;
  city?: HotelCity;
  tags?: string[];
  ranking?: HotelRanking;
  slug?: string;
  image?: SanityImage;
  description?: string;
  achievements?: HotelAchievement[];
  primaryHeroSection?: PrimaryHeroSection;
  secondaryHeroSection?: SecondaryHeroSection;
  hotelDetailsSection?: HotelDetailsSection;
  aboutHotel?: AboutHotel;
  fullwidthImage?: SanityImage & { caption?: string; alt?: string };
  body?: BlockContent;
  hotelEvents?: HotelEvents;
  hotelInfo?: HotelInfo;
  hotelInfoPremium?: HotelInfoPremium;
  testimonials?: TestimonialsHotel;
  interviewSection?: HotelInterviewSection;
  hotelHighlights?: HotelHighlights;
  mapSection?: HotelMapSection;
}

/**
 * Hotel slider interface
 */
export interface HotelSlider {
  images: SanityImage[];
}

/**
 * Hotel quote interface
 */
export interface HotelQuote {
  quote: string;
  author?: string;
  position?: string;
}

/**
 * Hotel highlight interface
 */
export interface HotelHighlight {
  _key: string;
  title: string;
  description?: BlockContent[];
  image?: SanityImage;
}

/**
 * Hotel map interface
 */
export interface HotelMap {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface BrandImages extends SanityImage {
  _key: string;
}

export interface HotelDetails {
  image?: SanityImage;
  description?: BlockContent[];
}

/**
 * All Hotels Page types
 */

export type HotelPageComponent =
  | AllHotelsSlider
  | SpecialEdition
  | DieInstagram
  | Newsletter
  | HotelCollection;

export type SpecialEditionHotelsPageComponent =
  | AllHotelsSlider
  | DieInstagram
  | Newsletter
  | HotelCollection
  | SpecialHotels;

export interface AllHotelsPage extends BaseDocument {
  _type: "allHotels";
  title: string;
  language: string;
  edition: "deutschland" | "dach" | "schweiz";
  slug?: {
    current: string;
    _type: "slug";
  };
  components?: HotelPageComponent[];
}

/**
 * Special Edition Hotels Page types
 */
export interface SpecialEditionHotelsPage extends BaseDocument {
  _type: "specialEditionHotels";
  title: string;
  language: string;
  edition: "deutschland" | "dach" | "schweiz";
  slug?: {
    current: string;
    _type: "slug";
  };
  components?: SpecialEditionHotelsPageComponent[];
}
