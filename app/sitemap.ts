import type { MetadataRoute } from "next";
import { getSitemap } from "@/lib/cms";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.WEBSITE_ORIGIN || "http://localhost:3000").replace(/\/$/, "");
  const data = await getSitemap();

  if (!data?.pages) {
    return [
      {
        url: siteUrl,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1.0,
      },
    ];
  }

  return data.pages.map((p) => ({
    url: `${siteUrl}${p.page_path.startsWith("/") ? "" : "/"}${p.page_path}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: "weekly" as const,
    priority: p.page_path === "/" ? 1.0 : 0.8,
  }));
}
