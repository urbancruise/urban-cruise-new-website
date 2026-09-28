// ============================================================
// Location routing helpers (server-safe, no window/geolocation)
// ============================================================
import { AVAILABLE_LOCATIONS } from "@/app/lib/location";

const LOCATION_ALIASES: Record<string, string> = {
  delhi: "delhi",
  "new delhi": "delhi",
  gurgaon: "gurugram",
  gurugram: "gurugram",
  mumbai: "mumbai",
  bombay: "mumbai",
  pune: "pune",
};

/**
 * Feature flag — set both vars to "true" to enable server-side
 * and client-side location redirects.
 */
export function isLocationRedirectEnabled(): boolean {
  return process.env.LOCATION_REDIRECT_ENABLED === "true";
}

/**
 * Map an incoming city header (e.g. from Vercel's
 * `x-vercel-ip-city`) to one of our canonical location slugs.
 * Returns null when the city is unknown or unsupported.
 */
export function getLocationFromCity(
  city: string | null | undefined
): string | null {
  if (!city) return null;

  const normalizedCity = decodeURIComponent(city).trim().toLowerCase();
  const location = LOCATION_ALIASES[normalizedCity];

  return location && AVAILABLE_LOCATIONS.includes(location)
    ? location
    : null;
}

/**
 * Best-effort mapping from latitude/longitude to a supported
 * location. Used by the client-side <LocationRedirect /> fallback.
 */
export function getLocationFromCoordinates(
  latitude: number,
  longitude: number
): string | null {
  const cityBounds = [
    {
      location: "gurugram",
      minLatitude: 28.25,
      maxLatitude: 28.55,
      minLongitude: 76.8,
      maxLongitude: 77.2,
    },
    {
      location: "delhi",
      minLatitude: 28.35,
      maxLatitude: 28.9,
      minLongitude: 76.8,
      maxLongitude: 77.35,
    },
    {
      location: "mumbai",
      minLatitude: 18.85,
      maxLatitude: 19.35,
      minLongitude: 72.7,
      maxLongitude: 73.15,
    },
    {
      location: "pune",
      minLatitude: 18.35,
      maxLatitude: 18.75,
      minLongitude: 73.65,
      maxLongitude: 74.05,
    },
  ];

  return (
    cityBounds.find(
      ({ minLatitude, maxLatitude, minLongitude, maxLongitude }) =>
        latitude >= minLatitude &&
        latitude <= maxLatitude &&
        longitude >= minLongitude &&
        longitude <= maxLongitude
    )?.location ?? null
  );
}
