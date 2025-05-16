import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";

import {
  getAllBlogQuery,
  getBlogPageQuery,
  getBlogBySlugQuery,
} from "@/lib/queries/blog.queries";

export const BlogApi = {
  getBlogPage: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(getBlogPageQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["blog-page"],
    { tags: ["blogs"], revalidate: 25 }
  ),

  getAllBlogQuery: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(getAllBlogQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["blog"],
    { tags: ["blogs"], revalidate: 25 }
  ),

  getBlogBySlug: unstable_cache(
    async (slug: string, language = DEFAULT_LANGUAGE) => {
      return await client.fetch(getBlogBySlugQuery, {
        slug,
        edition: DEFAULT_EDITION,
        language,
      });
    },
    ["blog-by-slug"],
    { tags: ["blogs"], revalidate: 25 }
  ),
};
