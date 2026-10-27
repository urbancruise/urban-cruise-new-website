import type { MetadataRoute } from "next";
import { getSitemap } from "@/lib/cms";
import { absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getSitemap();

  if (!data?.pages) {
    return [
      {
        url: absoluteUrl("/"),
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1.0,
      },
    ];
  }

  return data.pages.map((p) => ({
    url: absoluteUrl(p.page_path),
    lastModified: new Date(p.updated_at),
    changeFrequency: "weekly" as const,
    priority: p.page_path === "/" ? 1.0 : 0.8,
  }));
}
