import type { MetadataRoute } from "next";
import {
  HotelsApi,
  BlogApi,
  type AllBlogsPage,
  EventsApi,
  type Events,
  type Hotel,
} from "@/lib";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Hotel Sitemap
  const hotels = await HotelsApi.getAllHotelsForSiteMap();
  const hotel = hotels.map((post: Hotel) => ({
    url: `https://die101besten-frontend-de.vercel.app/hotels/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog Sitemap
  const blogs = await BlogApi.getAllBlogForSiteMapQuery();
  const blog = blogs.map((post: AllBlogsPage) => ({
    url: `https://die101besten-frontend-de.vercel.app/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Events Sitemap
  const events = await EventsApi.getAllEventsForSiteMap();
  const event = events.map((post: Events) => ({
    url: `https://die101besten-frontend-de.vercel.app/events/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: "https://die101besten-frontend-de.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://die101besten-frontend-de.vercel.app/hotels",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://die101besten-frontend-de.vercel.app/special-editions",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://die101besten-frontend-de.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://die101besten-frontend-de.vercel.app/blogs",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://die101besten-frontend-de.vercel.app/datenschutz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://die101besten-frontend-de.vercel.app/impressum",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: "https://die101besten-frontend-de.vercel.app/partners",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://die101besten-frontend-de.vercel.app/events",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...hotel,
    ...blog,
    ...event,
  ];
}
