import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import { getHomePageQuery } from "@/lib/queries";

export const HomeApi = {
  /**
   * Get home page by slug and language
   */
  getHomePage: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(getHomePageQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["home-page"],
    { tags: ["home"], revalidate: 25 }
  ),
};
