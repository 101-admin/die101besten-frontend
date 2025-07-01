import { createClient } from "@sanity/client";
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
export const DEFAULT_EDITION = "deutschland";
export const DEFAULT_LANGUAGE = "de";
