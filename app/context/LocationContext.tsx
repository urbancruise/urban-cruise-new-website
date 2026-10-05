// app/context/LocationContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FALLBACK_LOCATIONS,
  GLOBAL_LOCATION,
  fetchAvailableLocationsClient,
  formatLocationName,
  type LocationOption,
} from "@/app/lib/location";
import { getMappedVehiclePath } from "@/app/lib/urlMappings";
import { getPartnerSlug, isPartnerPath } from "@/app/lib/partnerUrlMappings";
import { getVehicleSlug } from "@/app/lib/vehicleUrlMappings";

interface LocationContextType {
  location: string;
  selectedLocation: string | null;
  setLocation: (location: string) => void;
  availableLocations: string[]; // slugs of real cities (excludes "global")
  locationOptions: LocationOption[]; // full list incl. Global
  getLocationUrl: (path: string) => string;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocationState] = useState<string>("delhi");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [locationOptions, setLocationOptions] = useState<LocationOption[]>([
    { slug: GLOBAL_LOCATION.slug, name: GLOBAL_LOCATION.name, isGlobal: true },
    ...FALLBACK_LOCATIONS.map((s) => ({
      slug: s,
      name: formatLocationName(s),
      isGlobal: false,
    })),
  ]);
  const [availableLocations, setAvailableLocations] = useState<string[]>([
    ...FALLBACK_LOCATIONS,
  ]);

  const router = useRouter();
  const pathname = usePathname();
  const isSwitchingRef = useRef(false);

  // ── Fetch active cities from CMS on mount ──
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const options = await fetchAvailableLocationsClient();
      if (cancelled) return;
      setLocationOptions(options);
      setAvailableLocations(
        options.filter((o) => !o.isGlobal).map((o) => o.slug)
      );
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // ── Sync location from URL ──
  useEffect(() => {
    const segments = pathname?.split("/").filter(Boolean);
    if (segments && segments.length > 0) {
      const first = segments[0];
      if (first === GLOBAL_LOCATION.slug) {
        setLocationState("global");
        setSelectedLocation(null);
      } else if (availableLocations.includes(first)) {
        setLocationState(first);
        setSelectedLocation(first);
      } else {
        setSelectedLocation(null);
      }
    } else {
      setSelectedLocation(null);
    }
    isSwitchingRef.current = false;
  }, [pathname, availableLocations]);

  useEffect(() => {
    if (isSwitchingRef.current && pathname) {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0 && availableLocations.includes(segments[0])) {
        isSwitchingRef.current = false;
      }
    }
  }, [pathname, availableLocations]);

  // ── Build a location-aware URL ──
  const getLocationUrl = (path: string) => {
    const currentPathSegments = pathname?.split("/").filter(Boolean) || [];

    // Global OR no location selected → return path as-is
    if (!selectedLocation || selectedLocation === GLOBAL_LOCATION.slug) {
      return path || "/";
    }

    const locationRouteMap: Record<string, string> = {
      "/about-urban-cruise": "/about-us",
      "/contact-urban-cruise": "/contact-us",
      "/partner-program": "/partner",
    };
    const locationPath = locationRouteMap[path] || path;

    const globalVehicleMatch = locationPath.match(/^\/([^/]+)$/);
    if (globalVehicleMatch) {
      const vehicleTypeBySlug: Record<string, string> = {
        "car-suvs": "car-suvs",
        ertiga: "ertiga",
        "innova-crysta": "innova-crysta",
        hycross: "hycross",
        "luxury-cars-suvs": "luxury-cars-suvs",
        "mercedes-sprinter": "mercedes-sprinter",
        "luxury-vans": "luxury-vans",
        "tempo-traveller": "tempo-traveller",
        "maharaja-tempo-traveller": "maharaja-tempo-traveller",
        urbania: "urbania",
        "mini-bus": "mini-bus",
        "luxury-bus": "luxury-bus",
        "volvo-bus": "volvo-bus",
        "bharat-benz-bus": "bharat-benz-bus",
        "bus-with-washroom": "bus-with-washroom",
        "sleeper-bus": "sleeper-bus",
      };
      const vehicleType = vehicleTypeBySlug[globalVehicleMatch[1]];
      if (vehicleType) {
        return `/${selectedLocation}/${getVehicleSlug(
          selectedLocation,
          vehicleType
        )}`;
      }
    }

    if (locationPath.startsWith("/" + selectedLocation)) {
      return locationPath;
    }

    if (!locationPath || locationPath === "/") {
      return `/${selectedLocation}`;
    }

    if (
      locationPath === "/partner" ||
      locationPath === "/partner-program" ||
      locationPath.includes("/partner")
    ) {
      const partnerSlug = getPartnerSlug(selectedLocation);
      return `/${selectedLocation}/${partnerSlug}`;
    }

    const cleanPath = locationPath.startsWith("/")
      ? locationPath.slice(1)
      : locationPath;

    const servicePatterns = [
      "delhi-to-jim-corbett",
      "gurugram-to-jim-corbett",
      "mumbai-to-jim-corbett",
      "pune-to-jim-corbett",
      "do-dham-yatra",
      "char-dham-yatra",
      "pilgrimage-vehicle",
      "pilgrimage-tours",
      "wedding-cars",
      "wedding-car",
      "corporate-travel",
      "corporate-bus",
      "vacation-bus",
      "bus-rental-for-local",
    ];
    const isServicePath = servicePatterns.some((p) => cleanPath.includes(p));
    if (isServicePath) {
      return `/${selectedLocation}/${cleanPath}`;
    }

    const vehiclePatterns = [
      "car-rental",
      "ertiga",
      "innova",
      "hycross",
      "luxury-car",
      "mercedes",
      "luxury-van",
      "tempo-traveller",
      "maharaja",
      "force-urbania",
      "mini-bus",
      "bus-rental",
      "volvo-bus",
      "bharat-benz",
      "bus-with-washroom",
      "sleeper-bus",
    ];
    const isVehiclePath = vehiclePatterns.some((p) => cleanPath.includes(p));
    if (isVehiclePath) {
      const mappedPath = getMappedVehiclePath(
        selectedLocation,
        "/" + cleanPath
      );
      if (mappedPath.startsWith("/" + selectedLocation)) {
        return mappedPath;
      }
      return `/${selectedLocation}${mappedPath}`;
    }

    if (availableLocations.includes(cleanPath.split("/")[0])) {
      return "/" + cleanPath;
    }

    return `/${selectedLocation}/${cleanPath}`;
  };

  // ── Switch location ──
  const setLocation = (newLocation: string) => {
    // GLOBAL — clear location and go to root
    if (newLocation === GLOBAL_LOCATION.slug) {
      isSwitchingRef.current = true;
      setLocationState("global");
      setSelectedLocation(null);
      router.push("/");
      return;
    }

    if (!availableLocations.includes(newLocation)) return;

    isSwitchingRef.current = true;
    setLocationState(newLocation);
    setSelectedLocation(newLocation);

    const pathSegments = pathname?.split("/").filter(Boolean) || [];
    let remainingPath = "";

    if (
      pathSegments.length > 0 &&
      availableLocations.includes(pathSegments[0])
    ) {
      remainingPath = pathSegments.slice(1).join("/");
    } else {
      remainingPath = pathSegments.join("/");
    }

    const isPartnerPage = isPartnerPath(pathname || "");

    let newPath = "";
    if (isPartnerPage) {
      const partnerSlug = getPartnerSlug(newLocation);
      newPath = `/${newLocation}/${partnerSlug}`;
    } else {
      newPath = `/${newLocation}${
        remainingPath ? `/${remainingPath}` : ""
      }`;
    }

    router.push(newPath);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        selectedLocation,
        setLocation,
        availableLocations,
        locationOptions,
        getLocationUrl,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return ctx;
}
