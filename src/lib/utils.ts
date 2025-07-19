import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { urlFor } from "./config/sanity";
import type { SanityImage } from "./types/sanity.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getOptimizedImageUrl = (
  image: SanityImage,
  width?: number,
  height?: number
) => {
  if (!image?.imageWithHotspot?.asset) {
    console.log("optimized image not available");
    // Fallback to regular URL if optimized version not available
    return image?.url || "";
  }

  let urlBuilder = urlFor(image.imageWithHotspot);

  if (width) urlBuilder = urlBuilder.width(width);
  if (height) urlBuilder = urlBuilder.height(height);

  return urlBuilder.fit("crop").format("webp").quality(90).url();
};
