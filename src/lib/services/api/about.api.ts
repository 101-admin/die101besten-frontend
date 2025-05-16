import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import { getAboutPageQuery } from "@/lib/queries";

export const AboutApi = {
  /**
   * Get about page by slug and language
   */
  getAboutPage: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(getAboutPageQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["about-page"],
    { tags: ["about"], revalidate: 25 }
  ),
};
