import {
  Newsletter,
  BlogCollection,
  BlogPageTitle,
  Button,
  ImageSection,
} from "./components.types";
import type {
  BaseDocument,
  BlockContent,
  SanityImage,
  SanityPageSEO,
} from "./sanity.types";

export type BlogComponent =
  | BlogCollection
  | BlogPageTitle
  | Newsletter
  | ImageSection;

export interface AllBlogsPage extends BaseDocument {
  _type: "allBlogs";
  title: string;
  language: string;
  slug?: {
    current: string;
    _type: "slug";
  };
  edition?: "deutschland" | "dach" | "schweiz";
  components?: BlogComponent[];
  seo?: SanityPageSEO;
}

export interface BlogPage extends BaseDocument {
  _type: "blog";
  title: string;
  language: string;
  description?: string;
  readMore?: string;
  seo?: SanityPageSEO;
  slug?: string;
  author?: Array<{
    name?: string;
    image?: SanityImage;
    bio?: BlockContent;
  }>;
  mainImage?: SanityImage;
  category?: Array<{
    title?: string;
  }>;
  body?: BlockContent;
  articleSection?: ArticleSection;
  adds?: BlogAdds;
}

export interface BlogAdds extends BaseDocument {
  add?: {
    title?: string;
    images?: Array<{
      image?: SanityImage;
      link?: string;
    }>;
  };
}

export interface ArticleSection extends BaseDocument {
  title?: string;
  articles?: Array<{
    _id?: string;
    mainImage?: SanityImage;
    title?: string;
    description?: string;
    category?: Array<{
      title?: string;
    }>;
    readMore?: string;
    slug?: string;
  }>;
  button?: Button;
}
