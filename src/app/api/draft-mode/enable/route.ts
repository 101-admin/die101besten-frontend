export const maxDuration = 60;
import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/lib/config/sanity";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_VIEWER_TOKEN,
  }),
});
