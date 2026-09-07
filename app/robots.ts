import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/internal/",
        "/private/",
        "/tools/",
        "/dev/",
        "/development/",
        "/test/",
        "/tests/",
        "/*?",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
