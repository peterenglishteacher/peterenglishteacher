import type { MetadataRoute } from "next";
import { CONTACT } from "@/constants/contact";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CONTACT.url}/sitemap.xml`,
  };
}
