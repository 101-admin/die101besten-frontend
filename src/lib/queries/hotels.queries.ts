/**
 * Hotel GROQ Queries
 */

import {
  globalImageFragment,
  globalImageWithCaptionFragment,
  globalButtonFragment,
} from "../fragments";

import {
  allHotelsSliderComponentFragment,
  specialEditionComponentFragment,
  dieInstagramComponentFragment,
  newsletterComponentFragment,
  hotelCollectionComponentFragment,
  specialHotelsComponentFragment,
} from "../fragments/components.fragments";

/**
 * Query for getting all hotels with basic information
 */
// export const getAllHotelsQuery = `
//   *[
//     _type == "hotel" &&
//     edition == $edition &&
//     language == $language &&
//     (!defined($category) || category == $category) &&
//     (!defined($city) || city == $city) &&
//     (!defined($segment) || segment == $segment) &&
//     (!defined($search) || name match $search || additionalName match $search)
//   ] | order(name asc) {
//     _id,
//     _type,
//     name,
//     additionalName,
//     "slug": slug.current,
//     language,
//     edition,
//     segment,
//     category,
//     city,
//     ranking {
//       position,
//       category
//     },
//     "fullwidthImage": fullwidthImage {${globalImageWithCaptionFragment}},
//     hotelDescription {
//       text
//     },
//     achievements[],
//   }
// `;

export function getAllHotelsQuery(filters: {
  edition: string;
  language: string;
  category?: string;
  city?: string;
  segment?: string;
  hotelType?: string;
  rankingCategory?: string;
  search?: string;
}) {
  console.log({ filters }, "@step 1: getAllHotelsQuery");
  let filterString = `
    _type == "hotel" &&
    edition == "${filters.edition}" &&
    language == "${filters.language}"
  `;

  if (!!filters?.category) {
    filterString += ` && category == "${filters.category}"`;
  }
  if (!!filters?.city) {
    filterString += ` && city == "${filters.city}"`;
  }
  if (!!filters?.segment) {
    filterString += ` && segment == "${filters.segment}"`;
  }
  if (!!filters?.hotelType) {
    filterString += ` && hotelType == "${filters.hotelType}"`;
  }
  if (!!filters?.rankingCategory) {
    filterString += ` && ranking.category == "${filters.rankingCategory}"`;
  }
  if (!!filters?.search) {
    filterString += ` && (name match "${filters.search}" || description match "${filters.search}")`;
  }

  return `
    *[${filterString}]
    | order(ranking.position asc) {
      _id,
      _type,
      language,
      edition,
      name,
      image {${globalImageFragment}},
      description,
      achievements,
      hotelType,
      ranking {
        position,
        category
      },
      segment,
      category,
      city,
      "slug": slug.current,
      tags,
    }
  `;
}

/**
 * Query for getting a single hotel by slug with all details
 */
export const getHotelBySlugQuery = `
  *[_type == "hotel" && slug.current == $slug && edition == $edition && language == $language][0] {
    _id,
    _type,
    language,
    edition,
    name,
    image {${globalImageFragment}},
    description,
    achievements,
    hotelType,
    ranking {
      position,
      category
    },
    segment,
    category,
    city,
    "slug": slug.current,
    tags,
    "primaryHeroSection": primaryHeroSection {
      image {${globalImageFragment}},
      title,
      subTitle,
      ctaButton {${globalButtonFragment}}
    },
    "secondaryHeroSection": secondaryHeroSection {
      image {${globalImageFragment}},
      ctaButton {${globalButtonFragment}},
      saveOrSplitButtons {
        saveButton,
        splitButton
      },
      brandImages[] {${globalImageFragment}}
    },
    "hotelDetailsSection": hotelDetailsSection {
      image {${globalImageFragment}},
      description,
      ctaButton {${globalButtonFragment}},
      saveOrSplitButtons {
        saveButton,
        splitButton
      },
      brandImages[] {${globalImageFragment}}
    },
    "aboutHotel": aboutHotel {
      aboutHotels[] {
        image {${globalImageFragment}},
        description,
        imagePosition
      }
    },
    body,
    "hotelEvents": hotelEvents {
      title,
      text,
      events[] {
        image {${globalImageFragment}},
        title,
        subtitle,
        description,
        eventDate {
          name,
          date
        },
        eventTime {
          name,
          time
        },
        eventLocation {
          name,
          location
        },
        ctaButton {${globalButtonFragment}}
      }
    },
    hotelInfo {
      image {${globalImageFragment}},
      title,
      description,
      readMore
    },
   hotelInfoPremium {
      Person {
        image {${globalImageFragment}},
        name,
        host,
        role
      },
      title,
      description,
      readMore
    },
    "testimonials": testimonials {
      testimonial[] {
        review,
        author
      }
    },
    "interviewSection": interviewSection {
      title,
      manager {
        image {${globalImageFragment}},
        name,
        role
      },
      exclusiveQuestions[] {
        question,
        answer
      },
      grandQuestions[] {
        question,
        answer
      }
    },
    "hotelHighlights": hotelHighlights {
      headline,
      amenities[] {
        amenityText,
        icon {${globalImageFragment}}
      },
      image {${globalImageFragment}},
      isDraggable,
      showNavigationArrows,
      ctaButton {${globalButtonFragment}}
    },
    "fullwidthImage": fullwidthImage {${globalImageWithCaptionFragment}},
    "mapSection": mapSection {
      headline,
      hotelInfo {
        name,
        city,
        country
      },
      mapIntegration {
        showLocation,
        enableRouting,
        zoomLevel
      },
      contactInfo {
        bookingText,
        streetAddress,
        phone,
        email,
        website
      },
      ctaButton {${globalButtonFragment}}
    }
  }
`;

export const hotelsQuery = `*[_type == "hotel" && language == $language] {
  _id,
  _type,
  name,
  additionalName,
  "slug": slug.current,
  language,
  edition,
  segment,
  category,
  city,
  ranking {
    position,
    category
  },
  "image": image.asset->url,
  "imageAlt": image.alt,
  "imageCaption": imageCaption,
  "imageCredit": imageCredit,
  "imageCreditLink": imageCreditLink,
  "imageCreditLinkText": imageCreditLinkText,
  sliderComponent,
  textPointsAndImages,
  hotelDescription,
  fullwidthImage,
  fullwidthVideo,
  quoteSection,
  interviewSection,
  yourHost,
  hotelEvents,
  hotelHighlights,
  mapSection
}`;

/**
 * Query for getting all hotels page with components
 */
export const getHotelPageQuery = `
  *[_type == "allHotels" && language == $language && edition == $edition][0] {
    _id,
    _type,
    title,
    language,
    edition,
    "slug": slug.current,
    components[]-> {
      _id,
      _type,
      _type == "allHotelsSlider" => {${allHotelsSliderComponentFragment}},
      _type == "specialEdition" => {${specialEditionComponentFragment}},
      _type == "dieInstagram" => {${dieInstagramComponentFragment}},
      _type == "newsletter" => {${newsletterComponentFragment}},
      _type == "hotelCollection" => {${hotelCollectionComponentFragment}}
    }
  }
`;

/**
 * Query for getting special edition hotels page with components
 */
export const getSpecialEditionHotelsQuery = `
  *[_type == "specialEditionHotels" && language == $language && edition == $edition][0] {
    _id,
    _type,
    title,
    language,
    edition,
    "slug": slug.current,
    components[]-> {
      _id,
      _type,
      _type == "allHotelsSlider" => {${allHotelsSliderComponentFragment}},
      _type == "dieInstagram" => {${dieInstagramComponentFragment}},
      _type == "newsletter" => {${newsletterComponentFragment}},
      _type == "hotelCollection" => {${hotelCollectionComponentFragment}},
      _type == "specialHotels" => {${specialHotelsComponentFragment}}
    }
  }
`;
