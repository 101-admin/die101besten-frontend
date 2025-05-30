import { BlockContent, SanityImage, SanityRawImage } from "./sanity.types";

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

export interface AnzeigeImageBlock {
  _type: "anzeigeImage";
  title?: string;
  images?: Array<{
    image?: SanityImage;
    alt?: string;
    caption?: string;
    link?: string;
    linkText?: string;
  }>;
}

export interface ContentSectionField {
  description?: BlockContent;
  image?: SanityImage;
  imagePosition?: "left" | "right";
}

export interface ContentSectionBlock {
  _type: "contentSection";
  content?: ContentSectionField[];
}

export interface DescriptionField {
  description?: BlockContent;
}
export interface DescriptionGridBlock {
  _type: "descriptionGrid";
  descriptions: string[];
}

export interface BlogDescriptionGridBlock {
  _type: "blogDescriptionGrid";
  descriptions: DescriptionField[];
}

export type PortableTextBlock =
  | CodeBlock
  | ColoredTextBlock
  | FullWidthImageBlock
  | DescriptionGridBlock
  | AnzeigeImageBlock
  | ContentSectionBlock
  | BlogDescriptionGridBlock;
