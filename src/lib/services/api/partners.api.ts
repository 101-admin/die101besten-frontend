import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import { partnersQuery } from "@/lib/queries";

export const PartnersApi = {
  /**
   * Get partners page data
   */
  getPartners: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(partnersQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["partners"],
    { tags: ["partners"], revalidate: 25 }
  ),
};
