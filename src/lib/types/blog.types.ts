import {
  Newsletter,
  BlogCollection,
  BlogPageTitle,
  Button,
  ImageSection,
} from "./components.types";
import type { BaseDocument, BlockContent, SanityImage } from "./sanity.types";

export type BlogComponent = BlogCollection | BlogPageTitle | Newsletter | ImageSection;

export interface BlogPage extends BaseDocument {
  _type: "blog";
  title: string;
  language: string;
  description?: string;
  readMore?: string;
  slug?: {
    current: string;
    _type: "slug";
  };
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
