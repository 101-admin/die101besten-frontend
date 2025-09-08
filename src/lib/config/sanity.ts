import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Sanity client configuration
 */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-05-01", // Use current date as version
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

/**
 * Image URL builder
 */
const builder = imageUrlBuilder(client);

/**
 * Helper function to generate image URLs
 */
export const urlFor = (source: SanityImageSource) => builder.image(source);

/**
 * Constants for edition and language
 */
export type DefaultEdition = "deutschland" | "dach" | "schweiz";
export const DEFAULT_EDITION: DefaultEdition = "deutschland";
export const DEFAULT_LANGUAGE = "de";
