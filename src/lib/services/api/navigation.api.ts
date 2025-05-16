import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import { navbarQuery } from "@/lib/queries/navigation.queries";
import { footerQuery } from "@/lib/queries/navigation.queries";

export const NavbarApi = {
  /**
   * Get navbar data
   */
  getNavbar: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(navbarQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["navbar"],
    { tags: ["navbar"], revalidate: 25 }
  ),
};

export const FooterApi = {
  /**
   * Get partners page data
   */
  getFooter: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(footerQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["footer"],
    { tags: ["footer"], revalidate: 25 }
  ),
};
