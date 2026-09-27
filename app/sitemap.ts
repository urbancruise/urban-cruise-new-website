// import type { MetadataRoute } from "next";
// import { AVAILABLE_LOCATIONS } from "@/app/lib/location";
// import { serviceUrlMappings } from "@/app/lib/serviceUrlMappings";
// import { vehicleUrlMappings } from "@/app/lib/vehicleUrlMappings";
// import { absoluteUrl } from "@/lib/seo";

// type SitemapEntry = {
//   path: string;
//   lastModified: string;
//   changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
//   priority: number;
// };

// const LAST_MODIFIED = {
//   core: "2026-09-06",
//   informational: "2026-09-05",
//   services: "2026-09-05",
//   vehicles: "2026-09-04",
// } as const;

// const sharedPaths = [
//   "about-us",
//   "blog",
//   "book",
//   "careers-at-urban-cruise",
//   "contact-us",
//   "faqs",
//   "news-media",
//   "testimonials",
// ] as const;

// function createEntry(
//   path: string,
//   lastModified: string,
//   priority: number,
//   changeFrequency: SitemapEntry["changeFrequency"] = "weekly",
// ): SitemapEntry {
//   return { path, lastModified, priority, changeFrequency };
// }

// function createLocationEntries(location: string): SitemapEntry[] {
//   const entries: SitemapEntry[] = [
//     createEntry(`/${location}`, LAST_MODIFIED.core, 0.9),
//     ...sharedPaths.map((page) =>
//       createEntry(`/${location}/${page}`, LAST_MODIFIED.informational, 0.6),
//     ),
//     createEntry(
//       `/${location}/${location === "mumbai" ? "partner-program" : "partner"}`,
//       LAST_MODIFIED.informational,
//       0.5,
//     ),
//   ];

//   for (const slug of Object.values(vehicleUrlMappings[location] || {})) {
//     entries.push(
//       createEntry(`/${location}/${slug}`, LAST_MODIFIED.vehicles, 0.7),
//     );
//   }

//   for (const slug of Object.values(serviceUrlMappings[location] || {})) {
//     entries.push(
//       createEntry(`/${location}/${slug}`, LAST_MODIFIED.services, 0.7),
//     );
//   }

//   return entries;
// }

// export default function sitemap(): MetadataRoute.Sitemap {
//   const entries = [
//     ...AVAILABLE_LOCATIONS.flatMap(createLocationEntries),
//   ];
//   const uniqueEntries = new Map(
//     entries.map((entry) => [absoluteUrl(entry.path), entry]),
//   );

//   return [...uniqueEntries.entries()].map(([url, entry]) => ({
//     url,
//     lastModified: entry.lastModified,
//     changeFrequency: entry.changeFrequency,
//     priority: entry.priority,
//   }));
// }

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
