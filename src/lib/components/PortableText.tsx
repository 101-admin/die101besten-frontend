import { ColoredText } from "@/components/ui/ColoredText";
import {
  PortableText as PortableTextComponent,
  PortableTextProps,
  PortableTextReactComponents,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../config/sanity";
import AnzeigeImage from "@/components/BlogArtical/AnzeigeImage";
import ContentSection from "@/components/BlogArtical/ContentSection";
import GlobalImage from "@/components/GlobalImage";
import BlogGrid from "@/components/BlogArtical/BlogGrid";

export const portableComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="font-gte text-[16px] lg:text-[20px] font-[350] leading-[20px] lg:leading-[24px] my-3 container-primary text-black">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="font-ogg max-w-[572px] w-full font-normal text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[28px] text-black sm:leading-[34px] md:leading-[38px] lg:leading-[42px] tracking-tight container-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-ogg max-w-[572px] w-full font-normal text-[24px] sm:text-[30px] md:text-[34px] text-black lg:text-[38px] leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[42px] tracking-tight container-primary mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="container-primary text-[20px] lg:text-[24px] font-[350] leading-[24px] lg:leading-[32px] text-black mb-4 container-primary p-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className=" container-primary font-gte text-[20px] lg:text-[24px] font-[350] leading-[28px] lg:leading-[32px] text-black m-0">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <div className="container-primary">
        <blockquote className="border-l-4 pl-4 border-gray-300 italic my-4 ">
          {children}
        </blockquote>
      </div>
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
    strong: ({ children }) => (
      <strong className="font-bold bg-clip-text text-inherit">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 rounded">{children}</code>
    ),
    coloredText: ({ children }) => (
      <span className="bg-gradient-to-r from-[#B64F32] to-[#F49E6E] text-transparent bg-clip-text box-decoration-clone">
        {children}
      </span>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="container-primary">
          <div className="mx-auto">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || ""}
              width={800}
              height={600}
              className="rounded-lg"
            />
            {value.caption && <p className="text-sm mt-2">{value.caption}</p>}
          </div>
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
      <div className="py-10 lg:py-14 max-w-[1920px] mx-auto">
        <GlobalImage
          src={urlFor(value?.image).url()}
          alt={value?.image?.alt}
          width={1440 * 2}
          height={600 * 2}
        />
      </div>
    ),
    descriptionGrid: ({ value }) => (
      <div className=" md:px-8 container-primary">
        {value?.descriptions?.length === 1 && (
          <div className="w-full flex flex-col justify-center items-center">
            {value?.descriptions?.map((item: string, index: number) => (
              <p
                className="font-ogg max-w-[572px] w-full font-normal text-[24px] sm:text-[30x] md:text-[34px] lg:text-[38px] leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[42px] tracking-tight text-center px-5 lg:px-0"
                key={index}
              >
                <ColoredText text={item} />
              </p>
            ))}
          </div>
        )}

        {value?.descriptions?.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 my-10 lg:my-14">
            {value?.descriptions?.map((item: string, index: number) => (
              <p
                className="font-ogg w-full font-normal text-[24px] sm:text-[30x] md:text-[34px] lg:text-[38px] leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[42px] tracking-tight px-5 lg:px-0 text-center lg:text-start"
                key={index}
              >
                <ColoredText text={item} />
              </p>
            ))}
          </div>
        )}
      </div>
    ),

    blogDescriptionGrid: ({ value }) => <BlogGrid data={value} />,
    anzeigeImage: ({ value }) => (
      <AnzeigeImage
        data={{
          ...value,
          images: value?.images?.map((image: any) => ({
            ...image,
            image: {
              ...image?.image,
              url: urlFor(image?.image).url(),
            },
          })),
        }}
      />
    ),
    coloredText: ({ value }) => <ColoredText text={value?.text} />,
    contentSection: ({ value }) => (
      <ContentSection
        data={{
          ...value,
          content: value?.content?.map((content: any) => ({
            ...content,
            image: {
              ...content?.image,
              url: urlFor(content?.image).url(),
            },
          })),
        }}
      />
    ),
  },
};

export const PortableText = ({
  value,
  components: dynamicComponents = portableComponents,
}: PortableTextProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      <PortableTextComponent value={value} components={dynamicComponents} />
    </div>
  );
};
