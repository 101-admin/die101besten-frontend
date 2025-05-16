import {
  blogCollectionComponentFragment,
  blogPageTitleComponentFragment,
  newsletterComponentFragment,
} from "../fragments/components.fragments";

import {
  globalImageFragment,
  globalImageWithCaptionFragment,
  globalButtonFragment,
} from "../fragments";

/**
 * Query for getting all blogs page with components
 */
export const getBlogPageQuery = `
  *[_type == "allBlogs" && language == $language && edition == $edition][0] {
    _id,
    _type,
    title,
    language,
    edition,
    "slug": slug.current,
    components[]-> {
      _id,
      _type,
      _type == "blogPageTitle" => {${blogPageTitleComponentFragment}},
      _type == "blogCollection" => {${blogCollectionComponentFragment}},
      _type == "newsletter" => {${newsletterComponentFragment}}
    }
  }
`;

export const getAllBlogQuery = `
*[_type == "blog" && language == $language && edition == $edition]{
  _id,
  _type,
  title,
  language,
  description,
  readMore,
  edition,
  "slug": slug.current,
  author[]-> {
    name,
    image{${globalImageFragment}},
    bio
  },
  mainImage{${globalImageWithCaptionFragment}},
  category,
}
`;

export const getBlogBySlugQuery = `
*[_type == "blog" && slug.current == $slug && language == $language && edition == $edition][0]{
  _id,
  _type,
  title,
  language,
  description,
  readMore,
  edition,
  "slug": slug.current,
  author[]-> {
    name,
    image{${globalImageFragment}},
    bio
  },
  mainImage{${globalImageWithCaptionFragment}},
  category,
  body,
  heroSection{
  title
  },
  partnerSection{
    title,
    images[]{
      image{${globalImageFragment}},
    }
  },
  articleSection{
    title,
    articles[]{
      image {${globalImageFragment}},
      category,
      title,
      description,
      ctaButton{${globalButtonFragment}}
    },
    button{${globalButtonFragment}}
  }
}
`;
