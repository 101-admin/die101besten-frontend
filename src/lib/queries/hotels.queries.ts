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
  imageSectionComponentFragment,
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
  variant?: string;
}) {
  console.log({ filters }, "@step 1: getAllHotelsQuery");

  // Base filter string for the main query
  let filterString = `
    _type == "hotel" &&
    edition == "${filters.edition}" &&
    language == "${filters.language}"
  `;

  // Add other filters
  if (!!filters?.category) {
    filterString += ` && category->value.current == "${filters.category}"`;
  }
  if (!!filters?.city) {
    filterString += ` && address->city->value.current == "${filters.city}"`;
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
  if (!!filters?.variant) {
    filterString += ` && variant == "${filters.variant}"`;
  }
  if (!!filters?.search) {
    filterString += ` && (name match "${filters.search}" || description match "${filters.search}")`;
  }

  // Create a separate filter string for total count that only includes variant
  const totalCountFilter = `
    _type == "hotel" &&
    edition == "${filters.edition}" &&
    language == "${filters.language}" &&
    ${filters.variant ? `variant == "${filters.variant}"` : "true"}
  `;

  return `
    {
      "hotels": *[${filterString}] | order(ranking.position asc) {
        _id,
        _type,
        language,
        edition,
        variant,
        isPackageBooked,
        name,
        image {${globalImageFragment}},
        description,
        achievements[]->{
          _id,
          name
        },
        hotelType,
        ranking {
          position,
          category
        },
        segment,
        "category": category->{
          _id,
          label,
          "value": value.current,
          edition
        },
        "slug": slug.current,
        tags,
        "address": address->{
          street,
          streetNumber,
          postalCode,
          "city": city->{
            _id,
            label,
            "value": value.current,
            edition
          },
          "country": country->{
            _id,
            name
          }
        }
      },
      "totalCount": count(*[${totalCountFilter}])
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
    isPackageBooked,
    name,
    image {${globalImageFragment}},
    ctaButton {${globalButtonFragment}},
    achievements[]->{
      _id,
      name
    },
    hotelType,
    ranking {
      position,
      category
    },
    segment,
    "category": category->{
      _id,
      label,
      "value": value.current,
      edition
    },
    "address": address->{
      street,
      streetNumber,
      postalCode,
      "city": city->{
        _id,
        label,
        "value": value.current,
        edition
      },
      "country": country->{
        _id,
        name
      }
    },
    "slug": slug.current,
    tags,
    "primaryHeroSection": primaryHeroSection {
      image {${globalImageFragment}},
    },
    "secondaryHeroSection": secondaryHeroSection {
      image {${globalImageFragment}},
      saveOrSplitButtons {
        saveButton,
        splitButton
      },
      brandImages[]->{
      image {${globalImageFragment}},
      name,
      }
    },
    "hotelDetailsSection": hotelDetailsSection {
      image {${globalImageFragment}},
      description,
      saveOrSplitButtons {
        saveButton,
        splitButton
      },
      brandImages[]->{
      image {${globalImageFragment}},
      name,
      }
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
      contactInfo {
        phone,
        email,
        website
      },
    },
    "adds": adds {
      add->{
      title,
      images[] {
        image {${globalImageFragment}},
        link
      }
      }
    }
  }
`;

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
      _type == "hotelCollection" => {${hotelCollectionComponentFragment}},
      _type == "imageSection" => {${imageSectionComponentFragment}}
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
      _type == "specialHotels" => {${specialHotelsComponentFragment}},
      _type == "imageSection" => {${imageSectionComponentFragment}}
    }
  }
`;

/**
 * Query for getting all hotel categories
 */
export const getHotelCategoriesQuery = `
  *[_type == "hotelCategory" && $edition in edition && language == $language] | order(label asc) {
    _id,
    label,
    "value": value.current,
    edition
  }
`;

export const getCitiesQuery = `*[_type == "city" && $edition in edition] {
  _id,
  label,
  "value": value.current,
  edition
} | order(label asc)`;
