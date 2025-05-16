import { ColoredText } from "@/components/ui/ColoredText";
import { StyledColoredText } from "@/components/ui/StyledColoredText";
import {
  PortableText as PortableTextComponent,
  PortableTextProps,
  PortableTextReactComponents,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../config/sanity";

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="font-gte text-[16px] lg:text-[20px] font-[350] leading-[20px] lg:leading-[24px] mb-4">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="font-ogg max-w-[572px] w-full font-normal text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[42px] tracking-tight mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-gte text-[20px] lg:text-[24px] font-[350] leading-[28px] lg:leading-[32px] mb-4">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      if (!value?.href) return <>{children}</>;
      const target = value.href.startsWith("http") ? "_blank" : undefined;
      return (
        <Link
          href={value.href}
          target={target}
          className="text-blue-600 hover:underline"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 rounded">{children}</code>
    ),
    coloredText: ({ children }) => (
      <span className="text-[#B65033]">{children}</span>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            width={800}
            height={600}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
    code: ({ value }) => (
      <pre className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
        <code className={`language-${value.language || "javascript"}`}>
          {value.code}
        </code>
      </pre>
    ),
    fullWidthImage: ({ value }) => (
      <div className="w-full py-10 lg:py-24">
        <Image
          className="w-full h-full object-cover"
          src={urlFor(value?.image).url()}
          alt={value?.image?.alt}
          width={1440}
          height={600}
        />
      </div>
    ),
    descriptionGrid: ({ value }) => (
      <div className="my-10 sm:my-14 md:my-16 lg:my-24 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {value?.descriptions?.map((item: string, index: number) => (
            <p
              className="font-ogg max-w-[572px] w-full font-normal text-[24px] sm:text-[30x] md:text-[34px] lg:text-[38px] leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[42px] tracking-tight"
              key={index}
            >
              <ColoredText text={item} />
            </p>
          ))}
        </div>
      </div>
    ),
  },
};

export const PortableText = ({ value }: PortableTextProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableTextComponent value={value} components={components} />
    </div>
  );
};
