import type { Metadata } from "next";

import { getSeoByPath } from "@/lib/cms";

const OPEN_GRAPH_TYPES = [
  "article",
  "book",
  "music.song",
  "music.album",
  "music.playlist",
  "music.radio_station",
  "profile",
  "website",
  "video.tv_show",
  "video.other",
  "video.movie",
  "video.episode",
] as const;
const TWITTER_CARDS = [
  "summary",
  "summary_large_image",
  "app",
  "player",
] as const;

export async function getCmsSeoMetadata(path: string): Promise<Metadata | null> {
  const response = await getSeoByPath(path);
  const seo = response?.seo;

  if (!seo) return null;

  const ogImage = seo.og_image || seo.feature_image || undefined;
  const openGraphType = OPEN_GRAPH_TYPES.find(
    (type) => type === seo.og_type,
  ) ?? "website";
  const twitterCard = TWITTER_CARDS.find(
    (card) => card === seo.twitter_card,
  ) ?? "summary_large_image";
  const other: Record<string, string> = {};
  if (seo.twitter_domain) other["twitter:domain"] = seo.twitter_domain;
  if (seo.twitter_url) other["twitter:url"] = seo.twitter_url;

  return {
    title: seo.meta_title || seo.title || undefined,
    description: seo.meta_description || undefined,
    keywords: [
      ...(seo.meta_keywords ?? []),
      ...(seo.focus_keyword ? [seo.focus_keyword] : []),
    ],
    alternates: { canonical: seo.canonical_url || path },
    robots: !seo.is_indexable
      ? { index: false, follow: false }
      : seo.robots_meta || { index: true, follow: true },
    icons: seo.favicon_url ? { icon: seo.favicon_url } : undefined,
    openGraph: {
      title: seo.og_title || seo.meta_title || seo.title || undefined,
      description:
        seo.og_description || seo.meta_description || undefined,
      images: ogImage ? [ogImage] : undefined,
      url: seo.og_url || undefined,
      type: openGraphType,
    },
    twitter: {
      card: twitterCard,
      title:
        seo.twitter_title ||
        seo.og_title ||
        seo.meta_title ||
        seo.title ||
        undefined,
      description:
        seo.twitter_description ||
        seo.og_description ||
        seo.meta_description ||
        undefined,
      images: seo.twitter_image
        ? [seo.twitter_image]
        : ogImage
          ? [ogImage]
          : undefined,
    },
    ...(Object.keys(other).length ? { other } : {}),
  };
}
