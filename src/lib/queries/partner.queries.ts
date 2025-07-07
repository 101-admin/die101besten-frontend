import {
  imageSectionComponentFragment,
  pageTitleComponentFragment,
} from "../fragments/components.fragments";
import { strategischePartnerComponentFragment } from "../fragments/components.fragments";
import { medienPartnerComponentFragment } from "../fragments/components.fragments";
import { partnerComponentFragment } from "../fragments/components.fragments";
import { werde101ComponentFragment } from "../fragments/components.fragments";
import { dasBushComponentFragment } from "../fragments/components.fragments";
import { newsletterComponentFragment } from "../fragments/components.fragments";
import { seoFragment } from "../fragments/global.fragments";
export const partnersQuery = `*[_type == "partners" && language == $language  && edition == $edition][0] {
  _id,
  _type,
  title,
  language,
  edition,
  seo {
    ${seoFragment}
  },
  components[]-> {
    _id,
    _type,
    _type == "pageTitle" => {${pageTitleComponentFragment}},
    _type == "strategischePartner" => {${strategischePartnerComponentFragment}},
    _type == "medienPartner" => {${medienPartnerComponentFragment}},
    _type == "partner" => {${partnerComponentFragment}},
    _type == "werde101" => {${werde101ComponentFragment}},
    _type == "dasBush" => {${dasBushComponentFragment}},
    _type=="newsletter"=> {${newsletterComponentFragment}},
    _type == "imageSection" => {${imageSectionComponentFragment}}
  }
}`;
