import {
  DieInstagram,
  EventsHero,
  EventCollection,
  Newsletter,
  ImageSection,
} from "./components.types";
import type { BaseDocument, BlockContent, SanityImage } from "./sanity.types";

export type EventsComponent =
  | EventsHero
  | EventCollection
  | DieInstagram
  | Newsletter
  | ImageSection;

export interface Event extends BaseDocument {
  _type: "event";
  title: string;
  language: string;
  edition: "deutschland" | "dach" | "schweiz";
  slug?: string;
  eventHotel?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
  body?: BlockContent;
  mainImage?: SanityImage;
  tags?: Tags[];
  youtubeVideo?: {
    url: string;
  };
  allEvents?: allEvent;
  adds?: EventAdds;
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

export interface Tags {
  _id: string;
  _type: "tag";
  title: string;
}

export interface allEvent extends BaseDocument {
  title?: string;
  events?: Events[];
  ctaButton?: {
    text?: string;
    link?: string;
  };
}

export interface Events extends BaseDocument {
  _id: string;
  _type: "event";
  title: string;
  slug?: string;
  eventHotel?: string;
  startDate?: string;
  description?: string;
  mainImage?: SanityImage;
}