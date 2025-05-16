import {
  Newsletter,
  BlogCollection,
  BlogPageTitle,
  Button,
} from "./components.types";
import type { BaseDocument, BlockContent, SanityImage } from "./sanity.types";

export type BlogComponent = BlogCollection | BlogPageTitle | Newsletter;

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
  category?: string;
  body?: BlockContent;
  heroSection?: HeroSection;
  partnerSection?: PartnerSection;
  articleSection?: ArticleSection;
}

export interface HeroSection extends BaseDocument {
  title?: string;
}

export interface PartnerSection extends BaseDocument {
  title?: string;
  images?: Array<{
    image?: SanityImage;
  }>;
}

export interface ArticleSection extends BaseDocument {
  title?: string;
  articles?: Array<{
    image?: SanityImage;
    title?: string;
    description?: string;
    category?: string;
    ctaButton?: Button;
  }>;
  button?: Button;
}
