import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://trychanor.com",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://trychanor.com/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://trychanor.com/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://trychanor.com/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://trychanor.com/field-agent",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
