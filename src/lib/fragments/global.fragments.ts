/**
 * Global reusable GROQ fragments (fields only, not wrapped in {})
 */

// For inline use in projections (fields only, not wrapped in {})
export const globalImageFields = `
  "url": asset->url,
  "alt": alt,
  "metadata": asset->metadata
`;

export const globalImageWithCaptionFields = `
  "url": asset->url,
  "alt": alt,
  "caption": caption,
  "metadata": asset->metadata
`;

/**
 * Standard image projection with url and alt text
 */
export const globalImageFragment = `
  "url": asset->url,
  "alt": alt,
  "metadata": asset->metadata
`;

/**
 * Extended image projection with caption and credit information
 */
export const globalImageWithCaptionFragment = `
  "url": asset->url,
  "alt": alt,
  "caption": caption,
  "metadata": asset->metadata
`;

/**
 * Standard button/CTA projection
 */
export const globalButtonFragment = `
  text,
  link,
  url,
  btnStyle,
`;

/**
 * HeroSlider component projection
 */
export const heroSliderFragment = `{
  _id,
  _type,
  title,
  language,
  heroSection {
    heroImage ${globalImageFragment},
    infoOverlay {
      tags,
      city,
      hotelName,
      ctaButton ${globalButtonFragment},
      shareButton {
        enabled,
        platforms
      },
      wishlistButton {
        enabled
      }
    },
    hotelSeals[] {
      sealImage ${globalImageFragment},
      sealTitle
    },
    imageGallery {
      enabled,
      images[] ${globalImageWithCaptionFragment}
    }
  }
}`;

/**
 * TextQuote component projection
 */
export const textQuoteFragment = `{
  _id,
  _type,
  heading,
  author,
  ctaButtons[] ${globalButtonFragment}
}`;

/**
 * ImageQuote component projection
 */
export const imageQuoteFragment = `{
  _id,
  _type,
  quote,
  author,
  image ${globalImageFragment}
}`;

/**
 * Person info (used in team members, hosts, etc.)
 */
export const personFragment = `{
  name,
  role,
  image ${globalImageFragment},
  bio
}`;

/**
 * Newsletter component projection
 */
export const newsletterFragment = `{
  _id,
  _type,
  title,
  description,
  placeholder,
  buttonText,
  privacyText,
  privacyLink
}`;

/**
 * Event item projection (used in different event components)
 */
export const eventItemFragment = `{
  name,
  title,
  date,
  description,
  teaserText,
  image ${globalImageFragment},
  link,
  detailsLink
}`;

/**
 * Partner logo projection
 */
export const partnerLogoFragment = `{
  _id,
  _type,
  title,
  logos[] {
    image ${globalImageFragment},
    url
  }
}`;

/**
 * SEO fields projection
 */
export const seoFragment = `{
  title,
  description,
  image ${globalImageFragment}
}`;
