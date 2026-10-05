// app/lib/location.ts
// Fallback if CMS is unreachable
export const FALLBACK_LOCATIONS = ["delhi", "gurugram", "mumbai", "pune"];

// The virtual "Global" entry — no city, base URL `/`
export const GLOBAL_LOCATION = {
  slug: "global",
  name: "Global",
  path: "/",
} as const;

// @deprecated — kept for legacy imports; prefer getAvailableLocations()
export const AVAILABLE_LOCATIONS = FALLBACK_LOCATIONS;

export interface LocationOption {
  slug: string;
  name: string;
  isGlobal: boolean;
  imageUrl?: string | null;
}

export function formatLocationName(loc: string): string {
  if (!loc) return "";
  if (loc === "global") return "Global";
  return loc
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function isValidLocation(location: string): boolean {
  if (location === "global") return true;
  return FALLBACK_LOCATIONS.includes(location);
}

export function getLocationFromPath(path: string): string | null {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0) {
    if (segments[0] === "global") return "global";
    if (FALLBACK_LOCATIONS.includes(segments[0])) return segments[0];
  }
  return null;
}

export function getPathWithoutLocation(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0) {
    if (segments[0] === "global" || FALLBACK_LOCATIONS.includes(segments[0])) {
      return "/" + segments.slice(1).join("/");
    }
  }
  return path;
}

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────
function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

function filterOutGlobal<
  T extends { name: string; slug: string }
>(cities: T[]): T[] {
  return cities.filter(
    (c) => c.slug !== "global" && c.name.toLowerCase() !== "global"
  );
}

// ────────────────────────────────────────────────────────────
// Server-side fetch
// ────────────────────────────────────────────────────────────
export async function getAvailableLocations(): Promise<LocationOption[]> {
  const { getCities } = await import("@/lib/cms");
  const cms = await getCities();

  const raw =
    cms?.cities && cms.cities.length > 0
      ? cms.cities.map((c) => ({
          slug: c.slug || slugify(c.name),
          name: c.name,
          imageUrl: (c as any).image_url || null,
        }))
      : FALLBACK_LOCATIONS.map((slug) => ({
          slug,
          name: formatLocationName(slug),
          imageUrl: null,
        }));

  const filtered = filterOutGlobal(raw);

  const cityList: LocationOption[] = filtered.map((c) => ({
    slug: c.slug,
    name: c.name,
    isGlobal: false,
    imageUrl: c.imageUrl,
  }));

  return [
    {
      slug: GLOBAL_LOCATION.slug,
      name: GLOBAL_LOCATION.name,
      isGlobal: true,
      imageUrl: null,
    },
    ...cityList,
  ];
}

export async function isValidLocationAsync(
  location: string
): Promise<boolean> {
  if (location === "global") return true;
  const list = await getAvailableLocations();
  return list.some((l) => l.slug === location && !l.isGlobal);
}

// ────────────────────────────────────────────────────────────
// Client-side fetch
// ────────────────────────────────────────────────────────────
export async function fetchAvailableLocationsClient(): Promise<
  LocationOption[]
> {
  try {
    const res = await fetch("/api/locations", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as {
      cities: Array<{
        name: string;
        slug: string;
        image_url?: string | null;
      }>;
    };

    const filtered = filterOutGlobal(
      (data.cities || []).map((c) => ({
        slug: c.slug || slugify(c.name),
        name: c.name,
        imageUrl: c.image_url || null,
      }))
    );

    const list: LocationOption[] = filtered.map((c) => ({
      slug: c.slug,
      name: c.name,
      isGlobal: false,
      imageUrl: c.imageUrl,
    }));

    return [
      {
        slug: GLOBAL_LOCATION.slug,
        name: GLOBAL_LOCATION.name,
        isGlobal: true,
        imageUrl: null,
      },
      ...list,
    ];
  } catch {
    return [
      {
        slug: GLOBAL_LOCATION.slug,
        name: GLOBAL_LOCATION.name,
        isGlobal: true,
        imageUrl: null,
      },
      ...FALLBACK_LOCATIONS.map((slug) => ({
        slug,
        name: formatLocationName(slug),
        isGlobal: false,
        imageUrl: null,
      })),
    ];
  }
}