import {
  DieInstagram,
  EventsHero,
  EventCollection,
  Newsletter,
  ImageSection,
} from "./components.types";
import type {
  BaseDocument,
  BlockContent,
  SanityImage,
  SanityPageSEO,
} from "./sanity.types";

export type EventsComponent =
  | EventsHero
  | EventCollection
  | DieInstagram
  | Newsletter
  | ImageSection;

export interface EventsPage extends BaseDocument {
  _type: "allEvents";
  title: string;
  language: string;
  edition: "deutschland" | "dach" | "schweiz";
  slug?: string;
  seo?: SanityPageSEO;
  components?: EventsComponent[];
}

export interface Event extends BaseDocument {
  _type: "event";
  title: string;
  language: string;
  edition: "deutschland" | "dach" | "schweiz";
  slug?: string;
  eventType?: EventTypes[];
  startDate?: string;
  location?: string;
  description?: string;
  body?: BlockContent;
  mainImage?: SanityImage;
  seo?: SanityPageSEO;
  gallery?: GallerImage[];
  youtubeVideo?: {
    url: string;
  };
  allEvents?: allEvent;
  adds?: EventAdds;
}

export interface GallerImage {
  image?: SanityImage;
}

export interface EventAdds {
  add?: {
    title?: string;
    images?: Array<{
      image?: SanityImage;
      link?: string;
    }>;
  };
}

export interface allEvent extends BaseDocument {
  title?: string;
  events?: Events[];
  ctaButton?: {
    text?: string;
    link?: string;
  };
}

export interface EventTypes {
  _id: string;
  title: string;
}

export interface Events extends BaseDocument {
  _id: string;
  _type: "event";
  title: string;
  slug?: string;
  eventType?: EventTypes[];
  startDate?: string;
  location?: string;
  description?: string;
  mainImage?: SanityImage;
}
