/* eslint-disable @typescript-eslint/no-explicit-any */
import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import { getHomePageQuery } from "@/lib/queries";

export const HomeApi = {
  /**
   * Get home page by slug and language
   */
  getHomePage: unstable_cache(
    async (language = DEFAULT_LANGUAGE, fetchOptions?: any) => {
      if (fetchOptions) {
        return client.fetch(
          getHomePageQuery,
          {
            language,
            edition: DEFAULT_EDITION,
          },
          fetchOptions as any
        );
      }

      return client.fetch(getHomePageQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["home-page"],
    { tags: ["home"], revalidate: 25 }
  ),
  /**
   * Uncached preview fetch for draft mode (preserves existing cached function for production)
   */
  getHomePagePreview: async (language = DEFAULT_LANGUAGE) => {
    return client
      .withConfig({ token: process.env.SANITY_VIEWER_TOKEN })
      .fetch(getHomePageQuery, { language, edition: DEFAULT_EDITION }, {
        perspective: "drafts",
        useCdn: false,
        stega: true,
      } as any);
  },
};
