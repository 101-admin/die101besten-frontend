import {
  blogCollectionComponentFragment,
  blogPageTitleComponentFragment,
  newsletterComponentFragment,
  imageSectionComponentFragment,
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
      _type == "newsletter" => {${newsletterComponentFragment}},
      _type == "imageSection" => {${imageSectionComponentFragment}}
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
  category[]-> {
    title
  }
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
  articleSection{
    title,
    articles[]->{
      _id,
      mainImage {${globalImageWithCaptionFragment}},
      category,
      title,
      description,
      "slug": slug.current,
      readMore,
      category[]->{
        title
      },
    },
    button{${globalButtonFragment}}
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
}
`;
