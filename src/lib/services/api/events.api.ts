import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";
import { ensureSlugHasLocaleSuffix } from "@/lib/utils";

import {
  getEventsPageQuery,
  getAllEventsQuery,
  getEventsBySlugQuery,
} from "@/lib/queries/events.queries";

export const EventsApi = {
  getEventsPage: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(getEventsPageQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["events-page"],
    { tags: ["events"], revalidate: 25 }
  ),

  getAllEvents: unstable_cache(
    async (language = DEFAULT_LANGUAGE) => {
      return client.fetch(getAllEventsQuery, {
        language,
        edition: DEFAULT_EDITION,
      });
    },
    ["events"],
    { tags: ["events"], revalidate: 25 }
  ),

  getEventsBySlug: unstable_cache(
    async (slug: string, language = DEFAULT_LANGUAGE) => {
      const slugWithLocale = ensureSlugHasLocaleSuffix(slug, language);
      return await client.fetch(getEventsBySlugQuery, {
        slug: slugWithLocale,
        edition: DEFAULT_EDITION,
        language,
      });
    },
    ["events-by-slug"],
    { tags: ["events"], revalidate: 25 }
  ),

  getEventsPagePreview: async (language = DEFAULT_LANGUAGE) => {
      return client
        .withConfig({ token: process.env.SANITY_VIEWER_TOKEN })
        .fetch(getEventsPageQuery, { language, edition: DEFAULT_EDITION }, {
          perspective: "drafts",
          useCdn: false,
          stega: true,
        } as any);
    },
  
    getEventsBySlugPreview: async (slug: string, language = DEFAULT_LANGUAGE) => {
      const slugWithLocale = ensureSlugHasLocaleSuffix(slug, language);
      return client
        .withConfig({ token: process.env.SANITY_VIEWER_TOKEN })
        .fetch(getEventsBySlugQuery, { slug: slugWithLocale, language, edition: DEFAULT_EDITION }, {
          perspective: "drafts",
          useCdn: false,
          stega: true,
        } as any);
    },
};
