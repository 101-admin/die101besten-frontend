import Image from "next/image";
import { getOptimizedImageUrl } from "@/lib/utils";
import type { SanityImage } from "@/lib/types/sanity.types";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  image: SanityImage;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  wrapperClassName?: string;
  sizes?: string;
  fill?: boolean;
  quality?: number;
}

export const OptimizedImage = ({
  image,
  width,
  height,
  priority = false,
  className = "",
  wrapperClassName = "",
  sizes,
  fill = false,
  quality = 90,
}: OptimizedImageProps) => {
  const imageUrl = getOptimizedImageUrl(image, width, height);

  const commonProps = {
    src: imageUrl || image.url || "/placeholder.png",
    alt: image.alt || "",
    className: cn("object-cover", className),
    priority,
    sizes,
    quality,
  };

  if (fill) {
    return (
      <div className={cn("relative w-full object-cover", wrapperClassName)}>
        <Image {...commonProps} />
      </div>
    );
  }

  return (
    <div className={cn("relative w-full", wrapperClassName)}>
      <Image {...commonProps} width={width || 1920} height={height || 1080} />;
    </div>
  );
};
