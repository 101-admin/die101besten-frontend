import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Sanity client configuration
 */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gf5x1qdt",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-05-01", // Use current date as version
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333/studio",
  },
  // Performance optimizations
  requestTagPrefix: "sanity",
  timeout: 10000, // 10 second timeout
});

/**
 * Optimized client for visual editing with faster configuration
 */
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gf5x1qdt",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-05-01",
  useCdn: false, // Always use live data for preview
  token: process.env.SANITY_API_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333/studio",
  },
  // Optimized for preview mode
  timeout: 5000, // Shorter timeout for preview
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
