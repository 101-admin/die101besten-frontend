import { unstable_cache } from "next/cache";
import { client, DEFAULT_EDITION, DEFAULT_LANGUAGE } from "@/lib/config/sanity";

import { getEventsPageQuery ,getAllEventsQuery , getEventsBySlugQuery } from "@/lib/queries/events.queries";

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
      return await client.fetch(getEventsBySlugQuery, {
        slug,
        edition: DEFAULT_EDITION,
        language,
      });
    },
    ["events-by-slug"],
    { tags: ["events"], revalidate: 25 }
  ),
};
