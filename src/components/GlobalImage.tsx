"use client";
import { cn } from "@/lib/utils";
import Image from "next/legacy/image";

interface GlobalImageProps {
  wrapperClassName?: string;
  className?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  isLocal?: boolean;
  prefixUrl?: string;
}

const GlobalImage = ({
  wrapperClassName,
  className,
  src,
  alt,
  width,
  height,
  isLocal = false,
  prefixUrl = process.env.NEXT_PUBLIC_MEDIA_PREFIX,
  ...props
}: GlobalImageProps) => {
  const isSrc = src && src != "undefined" && src !== "";
  console.log({ src, width, height }, "@src");
  return (
    <div className={cn(`flex`, wrapperClassName)}>
      <Image
        src={
          isSrc
            ? isLocal
              ? `${prefixUrl}${src}`
              : src
            : "/images/default-image.png"
        }
        // src={"/images/default-image.png"}
        loading="lazy"
        alt={alt || "image"}
        width={width || 100}
        height={height || 40}
        className={cn(`object-cover w-full h-full`, className)}
        {...props}
      />
    </div>
  );
};

export default GlobalImage;
