/**
 * Optimized Hotel GROQ Queries for Visual Editing Performance
 */

import {
  globalImageFragment,
  globalImageWithCaptionFragment,
  globalButtonFragment,
} from "../fragments";

import { seoFragment } from "../fragments/global.fragments";

/**
 * Optimized query for getting a single hotel by slug with essential details only
 * This query is optimized for visual editing performance
 */
export const getHotelBySlugOptimizedQuery = `
  *[_type == "hotel" && slug.current == $slug && edition == $edition && language == $language][0] {
    _id,
    _type,
    language,
    edition,
    isPackageBooked,
    name,
    image {${globalImageFragment}},
    ctaButton {${globalButtonFragment}},
    seo {
      ${seoFragment}
    },
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
      gallery[] {
        image {${globalImageFragment}},
      }
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
        ctaButton {
        }
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
      highlights[]->{
        icon {${globalImageFragment}},
        description
      },
      image {${globalImageFragment}},
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
    "location": location {
      lat,
      lng
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
 * Lightweight query for getting basic hotel info for preview mode
 * This is used when only basic information is needed for visual editing
 */
export const getHotelBasicInfoQuery = `
  *[_type == "hotel" && slug.current == $slug && edition == $edition && language == $language][0] {
    _id,
    _type,
    name,
    "slug": slug.current,
    hotelType,
    image {${globalImageFragment}},
    seo {
      ${seoFragment}
    },
    "primaryHeroSection": primaryHeroSection {
      image {${globalImageFragment}},
    },
    "secondaryHeroSection": secondaryHeroSection {
      image {${globalImageFragment}},
    },
    "hotelDetailsSection": hotelDetailsSection {
      image {${globalImageFragment}},
      description,
    },
    body
  }
`;
