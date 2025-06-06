import {
  heroAboutComponentFragment,
  utrComponentFragment,
  textQuoteComponentFragment,
  imageQuoteComponentFragment,
  partnerLogoComponentFragment,
  successStoryComponentFragment,
  newsletterComponentFragment,
  dasBushComponentFragment,
  aboutTestimonialsComponentFragment,
  dieBestenComponentFragment,
  boardofDasComponentFragment,
  principlesComponentFragment,
  shapingFutureComponentFragment,
  hotelmomenteComponentFragment,
  imageSectionComponentFragment,
} from "../fragments/components.fragments";

/**
 * Fragment for the core about page fields
 */
export const aboutUsFields = `
  _id,
  _type,
  title,
  language,
  "slug": slug.current,
  edition
`;

/**
 * Query to fetch content sections with expanded references
 */
export const componentsFragment = `
  components[]-> {
    _id,
    _type,
    _type == "heroAbout" => {${heroAboutComponentFragment}},
    _type == "utr" => {${utrComponentFragment}},
    _type == "textQuote" => {${textQuoteComponentFragment}},
    _type == "imageQuote" => {${imageQuoteComponentFragment}},
    _type == "partnerLogo" => {${partnerLogoComponentFragment}},
    _type == "successStory" => {${successStoryComponentFragment}},
    _type == "newsletter" => {${newsletterComponentFragment}},
    _type == "dasBush" => {${dasBushComponentFragment}},
    _type == "testimonials" => {${aboutTestimonialsComponentFragment}},
    _type == "dieBesten" => {${dieBestenComponentFragment}},
    _type == "boardofDas" => {${boardofDasComponentFragment}},
    _type == "principles" => {${principlesComponentFragment}},
    _type == "shapingFuture" => {${shapingFutureComponentFragment}},
    _type == "hotelmomente" => {${hotelmomenteComponentFragment}},
    _type == "imageSection" => {${imageSectionComponentFragment}}
  }
`;

/**
 * Query to get about page by slug
 */
export const getAboutPageQuery = `
  *[_type == "aboutUs" && language == $language && edition == $edition] {
    ${aboutUsFields},
    ${componentsFragment}
  }[0]
`;
