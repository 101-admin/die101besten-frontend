import {
  globalImageFragment,
  globalButtonFragment,
  globalImageFields,
} from "./global.fragments";

export const heroSliderComponentFragment = `
  _id,
  _type,
  title,
  language,
  heroSection {
    heroImage {${globalImageFragment}},
    heroImageOverlay {
      name,
      city,
      country,
      imageCredits,
      color
    },
    infoOverlay {
      tags,
      city,
      hotelName,
      ctaButton {${globalButtonFragment}},
      shareButton {
        enabled,
        platforms
      },
      wishlistButton {
        enabled
      }
    },
    hotelSeals[] {
      sealImage {${globalImageFragment}},
      sealTitle
    },
    imageGallery {
      enabled,
      images[] {
        ${globalImageFields},
        caption
      }
    }
  },
`;

export const partnerLogoComponentFragment = `
  _id,
  _type,
  id,
  title,
  language,
  logoSlider[] {
    image {${globalImageFragment}},
    link,
  }
`;

export const textQuoteComponentFragment = `
  _id,
  _type,
  heading,
  id,
  language,
  author,
  image {${globalImageFragment}},
  ctaButtons[] {${globalButtonFragment}}
`;

export const hotelsComponentFragment = `
  _id,
  _type,
  title,
  language,
  description,
  hotels[] {
    name,
    image {${globalImageFragment}},
    link
  }
`;

export const businessLeisureComponentFragment = `
  _id,
  _type,
  title,
  language,
  description,
  image {${globalImageFragment}},
  items[] {
    title,
    description,
    icon {${globalImageFragment}}
  },
  ctaButtons[] {${globalButtonFragment}}
`;

export const successStoryComponentFragment = `
  _id,
  _type,
  id,
  title,
  language,
  story,
  description,
  image {${globalImageFragment}},
  name,
  role
`;

export const imageSectionComponentFragment = `
  _id,
  _type,
  title,
  language,
  images[] {
    image {${globalImageFragment}},
    link,
  }
`;

export const mabstabComponentFragment = `
  _id,
  _type,
  title,
  language,
  description,
  image {${globalImageFragment}},
  ctaButton {${globalButtonFragment}}
`;

export const rankingMitRelevanzComponentFragment = `
   _id,
  _type,
  title,
  language,
  description,
  image {${globalImageFragment}},
  ctaButtons[] {${globalButtonFragment}}
`;

export const specialEditionComponentFragment = `
  _id,
  _type,
  title,
  language,
  description,
  specialEditionHotels[] {
    title,
    image {${globalImageFragment}},
    link
  }
`;

export const events101ComponentFragment = `
  _id,
  _type,
  title,
  language,
  upcomigTitle,
  upcomingEvents[]-> {
    title,
    "slug": slug.current,
    description,
    startDate,
    endDate,
    mainImage {${globalImageFragment}},
  },
  upcomingCtaButton {${globalButtonFragment}},
  pastTitle,
  pastEvents[]-> {
    title,
    "slug": slug.current,
    description,
    startDate,
    endDate,
    mainImage {${globalImageFragment}},
  },
  pastCtaButton {${globalButtonFragment}}
`;

export const imageQuoteComponentFragment = `
  _id,
  _type,
  id,
  language,
  image {${globalImageFragment}},
  name,
  post,
  description
`;

export const exclusiveEventsComponentFragment = `
  _id,
  _type,
  title,
  language,
  description,
  events[] {
    image {${globalImageFragment}},
    name,
    description,
    date,
    location,
    link
  },
  ctaButton {${globalButtonFragment}}
`;

export const locationComponentFragment = `
  _id,
  _type,
  title,
  language,
  image {${globalImageFragment}}
`;

export const newsletterComponentFragment = `
  _id,
  _type,
  id,
  heading,
  language,
  description,
  emailLabel,
  placeholder,
  buttonText,
  privacyText,
  privacyLink,
  socialLinks {
    facebook,
    twitter,
    instagram
  }
`;

export const hotelmomenteComponentFragment = `
  _id,
  _type,
  id,
  title,
  language,
  description,
  ctaButton {${globalButtonFragment}},
  allBlogs[]-> {
    title,
    "slug": slug.current,
    description,
    category[]-> {
      title
    },
    mainImage{${globalImageFragment}},
      }
`;

export const dieInstagramComponentFragment = `
  _id,
  _type,
  title,
  id,
  language,
  description,
  instagramSlider[] {
    image {${globalImageFragment}},
    link
  }
`;

export const dasBushComponentFragment = `
  _id,
  _type,
  title,
  id,
  language,
  imagePosition,
  bgColor,
  body,
  ctaButton {${globalButtonFragment}},
  image {${globalImageFragment}}
`;

export const heroAboutComponentFragment = `
  _id,
  _type,
  title,
  id,
  subtitle,
  image {${globalImageFragment}}
`;

export const utrComponentFragment = `
  _id,
  _type,
  title,
  id,
  language,
  subTitle,
  description,
  image {${globalImageFragment}}
`;

export const aboutTestimonialsComponentFragment = `
  _id,
  _type,
  language,
  title,
  id,
  slider[] {
    image {
      ${globalImageFields},
      alt,
      caption
    },
    review,
    author,
  }
`;

export const dieBestenComponentFragment = `
  _id,
  _type,
  title,
  id,
  language,
  description,
  bestenSection[] {
    percentage,
    title,
    description
  }
`;

export const boardofDasComponentFragment = `
  _id,
  _type,
  title,
  id,
  language,
  description1,
  description2,
  readmore,
  boardMembers[] {
    name,
    role,
    image {${globalImageFragment}},
    description,
    email,
    phone,
    hoverColor
  }
`;

export const principlesComponentFragment = `
  _id,
  _type,
  title,
  id,
  subTitle,
  language,
  body,
  principlesSection[] {
    title,
    description
  }
`;

export const shapingFutureComponentFragment = `
  _id,
  _type,
  id,
  title,
  language,
  image {${globalImageFragment}},
  body,
  ctaButton {
    buttonText,
    buttonLink
  }
`;

/**
 * Fragment for All Hotels Slider component
 */
export const allHotelsSliderComponentFragment = `
  title,
  language,
  allHotelsSection {
    imageGallery {
      enabled,
      images[] {
        ${globalImageFields},
        caption,
        link,
        linkText,
        textColor
      }
    }
  }
`;

/**
 * Fragment for Hotel Collection component
 */
export const hotelCollectionComponentFragment = `
  _id,
  _type,
  id,
  title,
  variant
`;

// ... Add similar fragments for all homepage components, reusing global fragments as needed.

/**
 * Fragment for Partner page component
 */

// Page Title Component

export const pageTitleComponentFragment = `
  _id,
  _type,
  title,
  language
`;

export const strategischePartnerComponentFragment = `
  _id,
  _type,
  title,
  language,
  partners[] {
    image {${globalImageFragment}},
    link,
  }
`;

export const medienPartnerComponentFragment = `
  _id,
  _type,
  title,
  language,
  partners[] {
    image {${globalImageFragment}},
    link,
  }
`;

export const partnerComponentFragment = `
  _id,
  _type,
  language,
  title,
  partners[] {
    image {${globalImageFragment}},
    link
  },
  premiumPartners[] {
    image {${globalImageFragment}},
    link
  },
  otherPartners[] {
    image {${globalImageFragment}},
    link
  }
`;

export const werde101ComponentFragment = `
  _id,
  _type,
  title,
  language,
  image {${globalImageFragment}},
  description,
  ctaButton {${globalButtonFragment}}
`;

// Blog page

export const blogPageTitleComponentFragment = `
  _id,
  _type,
  id,
  title,
  description,
  language
`;

export const blogCollectionComponentFragment = `
  _id,
  _type,
  title,
  id,
  language
`;

export const specialHotelsComponentFragment = `
  _id,
  _type,
  title,
  id,
  language,
  hotels[]{
    image {${globalImageFragment}},
    name,
    link
  }
`;


//events page Fragments


export const eventsHeroComponentFragment = `
  _id,
  _type,
  title,
  language,
`;


export const eventCollectionComponentFragment = `
  _id,
  _type,
  title,
  language,
`;
