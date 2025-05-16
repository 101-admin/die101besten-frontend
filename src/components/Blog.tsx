// import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
// import { POSTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
// import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Blog(props: any) {
  const { title, mainImage, publishedAt, categories } = props;

  return (
    <article>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-0">
        <div className="md:col-span-2 md:pt-1">
          <Categories categories={categories} />
        </div>
        <div className="md:col-span-5 md:w-full">
          <h1 className="text-4xl font-semibold text-slate-800">{title}</h1>
          <div className="flex items-center mt-2 md:mt-6 gap-x-6">
            {/* <Author author={author} /> */}
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
          {mainImage ? (
            <Image
              src={mainImage}
              width={400}
              height={200}
              alt={props.mainImageAlt || title || ""}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}
