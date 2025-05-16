import {
  allHotelsSliderComponentFragment,
  partnerLogoComponentFragment,
  textQuoteComponentFragment,
  businessLeisureComponentFragment,
  hotelsComponentFragment,
  successStoryComponentFragment,
  mabstabComponentFragment,
  rankingMitRelevanzComponentFragment,
  specialEditionComponentFragment,
  events101ComponentFragment,
  imageQuoteComponentFragment,
  exclusiveEventsComponentFragment,
  newsletterComponentFragment,
  hotelmomenteComponentFragment,
  dieInstagramComponentFragment,
  dasBushComponentFragment,
  locationComponentFragment,
  imageSectionComponentFragment,
} from "../fragments/components.fragments";

export const getHomePageQuery = `
  *[_type == "home" && language == $language && edition == $edition][0] {
    _id,
    _type,
    title,
    language,
    slug,
    edition,
    components[]-> {
      _id,
      _type,
      _type == "allHotelsSlider" => {${allHotelsSliderComponentFragment}},
      _type == "textQuote" => {${textQuoteComponentFragment}},
      _type == "businessLeisure" => {${businessLeisureComponentFragment}},
      _type == "hotels" => {${hotelsComponentFragment}},
      _type == "successStory" => {${successStoryComponentFragment}},
      _type == "mabstab" => {${mabstabComponentFragment}},
      _type == "partnerLogo" => {${partnerLogoComponentFragment}},
      _type == "rankingMitRelevanz" => {${rankingMitRelevanzComponentFragment}},
      _type == "specialEdition" => {${specialEditionComponentFragment}},
      _type == "101Events" => {${events101ComponentFragment}},
      _type == "imageQuote" => {${imageQuoteComponentFragment}},
      _type == "exclusiveEvents" => {${exclusiveEventsComponentFragment}},
      _type == "newsletter" => {${newsletterComponentFragment}},
      _type == "hotelmomente" => {${hotelmomenteComponentFragment}},
      _type == "dieInstagram" => {${dieInstagramComponentFragment}},
      _type == "dasBush" => {${dasBushComponentFragment}},
      _type == "location" => {${locationComponentFragment}},
      _type == "imageSection" => {${imageSectionComponentFragment}}

    }
  }
`;
