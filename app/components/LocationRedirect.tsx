"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getLocationFromCoordinates } from "@/app/lib/location-routing";

const REDIRECT_ATTEMPTED_KEY = "urban-cruise-location-redirect-attempted";

export default function LocationRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_LOCATION_REDIRECT_ENABLED !== "true" ||
      sessionStorage.getItem(REDIRECT_ATTEMPTED_KEY) === "true" ||
      !navigator.geolocation
    ) {
      return;
    }

    sessionStorage.setItem(REDIRECT_ATTEMPTED_KEY, "true");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const location = getLocationFromCoordinates(
          coords.latitude,
          coords.longitude,
        );

        if (location) {
          router.replace(`/${location}`);
        }
      },
      () => {
        // Permission denial or unavailable location leaves the user in global mode.
      },
      { enableHighAccuracy: false, maximumAge: 300000, timeout: 5000 },
    );
  }, [router]);

  return null;
}
