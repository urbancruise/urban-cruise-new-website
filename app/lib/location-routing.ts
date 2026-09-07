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

export function isLocationRedirectEnabled(): boolean {
  return process.env.LOCATION_REDIRECT_ENABLED === "true";
}

export function getLocationFromCity(city: string | null | undefined): string | null {
  if (!city) {
    return null;
  }

  const normalizedCity = decodeURIComponent(city).trim().toLowerCase();
  const location = LOCATION_ALIASES[normalizedCity];

  return location && AVAILABLE_LOCATIONS.includes(location) ? location : null;
}

export function getLocationFromCoordinates(
  latitude: number,
  longitude: number,
): string | null {
  const cityBounds = [
    { location: "gurugram", minLatitude: 28.25, maxLatitude: 28.55, minLongitude: 76.80, maxLongitude: 77.20 },
    { location: "delhi", minLatitude: 28.35, maxLatitude: 28.90, minLongitude: 76.80, maxLongitude: 77.35 },
    { location: "mumbai", minLatitude: 18.85, maxLatitude: 19.35, minLongitude: 72.70, maxLongitude: 73.15 },
    { location: "pune", minLatitude: 18.35, maxLatitude: 18.75, minLongitude: 73.65, maxLongitude: 74.05 },
  ];

  return (
    cityBounds.find(
      ({ minLatitude, maxLatitude, minLongitude, maxLongitude }) =>
        latitude >= minLatitude &&
        latitude <= maxLatitude &&
        longitude >= minLongitude &&
        longitude <= maxLongitude,
    )?.location ?? null
  );
}
