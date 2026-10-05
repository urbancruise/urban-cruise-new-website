// ============================================================
// CMS API client — fetches content from cms-urban-cruise
// ============================================================

const CMS_URL = (process.env.CMS_API_URL || "http://localhost:5000").replace(
  /\/$/,
  ""
);
const CMS_API_KEY = process.env.CMS_API_KEY || "";

interface FetchOptions {
  revalidate?: number;
  tags?: string[];
  noStore?: boolean;
}

async function cmsFetch<T>(
  path: string,
  { revalidate = 60, tags = [], noStore = false }: FetchOptions = {}
): Promise<T | null> {
  console.log("[cms] fetch:", `${CMS_URL}${path}`, {
    hasKey: !!CMS_API_KEY,
    keyLength: CMS_API_KEY.length,
    keyPrefix: CMS_API_KEY.slice(0, 8),
  });

  if (!CMS_API_KEY) {
    console.error("[cms] CMS_API_KEY not set");
    return null;
  }

  try {
    const res = await fetch(`${CMS_URL}${path}`, {
      headers: {
        "x-api-key": CMS_API_KEY,
        Accept: "application/json",
      },
      next: noStore ? undefined : { revalidate, tags },
      cache: noStore ? "no-store" : undefined,
    });

    console.log("[cms] response:", path, res.status);

    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`[cms] ${path} → ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error(`[cms] fetch failed: ${path}`, err);
    return null;
  }
}

// ============================================================
// CITIES — append to urban-cruise/lib/cms.ts
// ============================================================
export interface CityEntry {
  id: number;
  name: string;
  state: string | null;
  country: string | null;
  code: string | null;
  slug: string;
  image_url?: string | null;
}

export interface CitiesResponse {
  cities: CityEntry[];
}

export async function getCities() {
  return cmsFetch<CitiesResponse>("/api/public/cities", {
    revalidate: 300,
    tags: ["cities"],
  });
}

// ============================================================
// HOME SECTIONS
// ============================================================
export interface HomeResponse {
  city: {
    slug: string;
    name: string;
    state: string | null;
    code: string | null;
  };
  sections: Record<string, any>;
  updatedAt: string;
}

export async function getHomeSections(citySlug: string) {
  return cmsFetch<HomeResponse>(
    `/api/public/home?city=${encodeURIComponent(citySlug)}`,
    {
      revalidate: 60,
      tags: [`home:${citySlug}`],
    }
  );
}

// ============================================================
// VEHICLES
// ============================================================
export interface VehiclesResponse {
  city: { slug: string; name: string };
  vehicles: Array<{ slug: string; [key: string]: any; updatedAt: string }>;
}

export async function getVehicles(citySlug: string) {
  return cmsFetch<VehiclesResponse>(
    `/api/public/vehicles?city=${encodeURIComponent(citySlug)}`,
    { revalidate: 60, tags: [`vehicles:${citySlug}`] }
  );
}

export interface VehicleDetailResponse {
  city: { slug: string; name: string };
  vehicle: {
    slug: string;
    meta: any;
    sections: any;
  };
  updatedAt: string;
}

export async function getVehicle(citySlug: string, vehicleSlug: string) {
  return cmsFetch<VehicleDetailResponse>(
    `/api/public/vehicles?city=${encodeURIComponent(
      citySlug
    )}&slug=${encodeURIComponent(vehicleSlug)}`,
    {
      revalidate: 60,
      tags: [`vehicle:${citySlug}:${vehicleSlug}`],
    }
  );
}

// ============================================================
// SEO
// ============================================================
export interface SeoEntry {
  id: number;
  path: string;
  slug: string | null;
  page_type: string;
  city_name: string | null;
  title: string | null;
  favicon_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string[];
  focus_keyword: string | null;
  canonical_url: string | null;
  robots_meta: string;
  is_indexable: boolean;
  feature_image: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  og_url: string | null;
  og_type: string;
  twitter_card: string;
  twitter_domain: string | null;
  twitter_url: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  schemas: any[];
  updated_at: string;
}

export interface SeoResponse {
  seo: SeoEntry;
}

export async function getSeoByPath(path: string) {
  const encoded = encodeURIComponent(path);
  return cmsFetch<SeoResponse>(`/api/public/seo?path=${encoded}`, {
    revalidate: 300,
    tags: [`seo:${path}`],
  });
}

export async function getSeoBySlug(slug: string, citySlug?: string) {
  const params = new URLSearchParams({ slug });
  if (citySlug) params.set("city", citySlug);
  return cmsFetch<SeoResponse>(`/api/public/seo?${params.toString()}`, {
    revalidate: 300,
  });
}

// ============================================================
// SITEMAP
// ============================================================
export interface SitemapEntry {
  page_path: string;
  updated_at: string;
}

export interface SitemapResponse {
  pages: SitemapEntry[];
}

export async function getSitemap() {
  return cmsFetch<SitemapResponse>(`/api/public/seo/sitemap`, {
    revalidate: 3600,
    tags: ["sitemap"],
  });
}