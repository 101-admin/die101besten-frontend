/* eslint-disable @typescript-eslint/no-explicit-any */
import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import { ensureSlugHasLocaleSuffix } from "@/lib/utils";

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

  // Uncached preview fetches for draft mode
  getBlogPagePreview: async (language = DEFAULT_LANGUAGE) => {
    return client
      .withConfig({ token: process.env.SANITY_VIEWER_TOKEN })
      .fetch(getBlogPageQuery, { language, edition: DEFAULT_EDITION }, {
        perspective: "drafts",
        useCdn: false,
        stega: true,
      } as any);
  },

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
      const slugWithLocale = ensureSlugHasLocaleSuffix(slug, language);
      return await client.fetch(getBlogBySlugQuery, {
        slug: slugWithLocale,
        edition: DEFAULT_EDITION,
        language,
      });
    },
    ["blog-by-slug"],
    { tags: ["blogs"], revalidate: 25 }
  ),
  getBlogBySlugPreview: async (slug: string, language = DEFAULT_LANGUAGE) => {
    const slugWithLocale = ensureSlugHasLocaleSuffix(slug, language);
    return client
      .withConfig({ token: process.env.SANITY_VIEWER_TOKEN })
      .fetch(getBlogBySlugQuery, { slug: slugWithLocale, language, edition: DEFAULT_EDITION }, {
        perspective: "drafts",
        useCdn: false,
        stega: true,
      } as any);

  },
};
