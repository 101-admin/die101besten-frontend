import type { PortableTextBlock } from "@portabletext/types";

/**
 * Base Sanity document type
 */
export interface BaseDocument {
  _id: string;
  _type: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
}

/**
 * Sanity image palette data
 */
export interface SanityImagePalette {
  _type: "sanity.imagePalette";
  darkMuted?: {
    background: string;
    foreground: string;
    title: string;
    population: number;
  };
  darkVibrant?: {
    background: string;
    foreground: string;
    title: string;
    population: number;
  };
  dominant?: {
    background: string;
    foreground: string;
    title: string;
    population: number;
  };
  lightMuted?: {
    background: string;
    foreground: string;
    title: string;
    population: number;
  };
  lightVibrant?: {
    background: string;
    foreground: string;
    title: string;
    population: number;
  };
  muted?: {
    background: string;
    foreground: string;
    title: string;
    population: number;
  };
  vibrant?: {
    background: string;
    foreground: string;
    title: string;
    population: number;
  };
  hasAlpha: boolean;
}

/**
 * Sanity image dimensions
 */
export interface SanityImageDimensions {
  _type: "sanity.imageDimensions";
  aspectRatio?: number;
  height: number;
  width: number;
  orientation?: string;
}

/**
 * Sanity image metadata
 */
export interface SanityImageMetadata {
  _type: "sanity.imageMetadata";
  dimensions: SanityImageDimensions;
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette?: SanityImagePalette;
  blurHash?: string;
}

/**
 * Sanity image as it appears in the API response
 */
export interface SanityImage {
  url: string;
  alt?: string;
  caption?: string;
  metadata?: SanityImageMetadata;
  imageWithHotspot?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
}

/**
 * Portable Text Block Content
 */
export type BlockContent = Array<PortableTextBlock>;

/**
 * Raw Sanity image as it appears in block content (before projection)
 */
export interface SanityRawImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  // Add any other custom fields you use in block content images
}

/**
 * SEO fields from Sanity
 */
export interface SanityPageSEO {
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: SanityImage;
  keywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
}
