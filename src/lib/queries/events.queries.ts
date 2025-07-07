import {
  dieInstagramComponentFragment,
  newsletterComponentFragment,
  imageSectionComponentFragment,
  eventsHeroComponentFragment,
  eventCollectionComponentFragment,
} from "../fragments/components.fragments";

import { globalImageFragment, globalButtonFragment } from "../fragments";
import { seoFragment } from "../fragments/global.fragments";

export const getEventsPageQuery = `
  *[_type == "allEvents" && language == $language && edition == $edition][0] {
    _id,
    _type,
    title,
    language,
    edition,
    "slug": slug.current,
    seo {
      ${seoFragment}
    },
    components[]-> {
    _id,
    _type,
    _type == "eventsHero" => {${eventsHeroComponentFragment}},
    _type == "eventCollection" => {${eventCollectionComponentFragment}},
    _type == "dieInstagram" => {${dieInstagramComponentFragment}},
    _type == "newsletter" => {${newsletterComponentFragment}},
    _type == "imageSection" => {${imageSectionComponentFragment}}
    }
  }
`;

export const getAllEventsQuery = `
*[_type == "event" && language == $language && edition == $edition]{
  _id,
  type,
  title,
  "slug": slug.current,
  startDate,
  description,
  location,
  mainImage {${globalImageFragment}},
  seo {
    ${seoFragment}
  }
}`;

export const getEventsBySlugQuery = `
*[_type == "event" && language == $language && edition == $edition && slug.current == $slug][0] {
  _id,
  _type,
  title,
  language,
  edition,
  "slug": slug.current,
  eventType[]-> {
    _id,
    title
  },
  startDate,
  location,
  description,
  body,
  mainImage {${globalImageFragment}},
  seo {
    ${seoFragment}
  },
  gallery[] {
    image {${globalImageFragment}},
  },
  youtubeVideo { 
    url
  },
  allEvents{
  title,
  events[]-> {
    _id,
    _type,
    title,
    startDate,
    "slug": slug.current,
    location,
    description,
    mainImage {${globalImageFragment}},
  },
  ctaButton {${globalButtonFragment}},
  },
  adds{
    add->{
      title,
      images[] {
        image {${globalImageFragment}},
        link
      }
    }
  }
}`;
