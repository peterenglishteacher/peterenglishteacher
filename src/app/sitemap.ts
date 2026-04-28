import type { MetadataRoute } from "next";
import { CONTACT } from "@/constants/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONTACT.url;

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
          "x-default": `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
          "x-default": `${baseUrl}/es`,
        },
      },
    },
  ];
}
