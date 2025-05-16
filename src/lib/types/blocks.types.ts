import { SanityRawImage } from "./sanity.types";

export interface BlockContent {
  _type: "block";
  children: Array<{
    _type: "span";
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
}

export interface ImageBlock {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface CodeBlock {
  _type: "code";
  code: string;
  language?: string;
}

export interface ColoredTextBlock {
  _type: "coloredText";
  text: string;
}

export interface FullWidthImageBlock {
  _type: "fullWidthImage";
  image: SanityRawImage;
}

export interface DescriptionGridBlock {
  _type: "descriptionGrid";
  descriptions: string[];
}

export type PortableTextBlock =
  | BlockContent
  | CodeBlock
  | ColoredTextBlock
  | FullWidthImageBlock
  | DescriptionGridBlock;
