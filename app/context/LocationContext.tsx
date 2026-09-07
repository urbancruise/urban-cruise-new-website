// app/context/LocationContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AVAILABLE_LOCATIONS } from '@/app/lib/location';
import { getMappedVehiclePath } from '@/app/lib/urlMappings';
import { getPartnerSlug, isPartnerPath } from '@/app/lib/partnerUrlMappings';
import { getVehicleSlug } from '@/app/lib/vehicleUrlMappings';

interface LocationContextType {
  location: string;
  selectedLocation: string | null;
  setLocation: (location: string) => void;
  availableLocations: string[];
  getLocationUrl: (path: string) => string;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocationState] = useState<string>('delhi');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isSwitchingRef = useRef(false);

  // Extract location from URL on initial load
  useEffect(() => {
    const pathSegments = pathname?.split('/').filter(Boolean);
    if (pathSegments && pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      if (AVAILABLE_LOCATIONS.includes(firstSegment)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocationState(firstSegment);
        setSelectedLocation(firstSegment);
      } else {
        setSelectedLocation(null);
      }
    } else {
      setSelectedLocation(null);
    }
    isSwitchingRef.current = false;
  }, [pathname]);

  // Reset the switching flag after navigation completes
  useEffect(() => {
    if (isSwitchingRef.current && pathname) {
      const pathSegments = pathname.split('/').filter(Boolean);
      if (pathSegments.length > 0) {
        const firstSegment = pathSegments[0];
        if (AVAILABLE_LOCATIONS.includes(firstSegment)) {
          isSwitchingRef.current = false;
        }
      }
    }
  }, [pathname]);

  const getLocationUrl = (path: string) => {
    const currentPathSegments = pathname?.split("/").filter(Boolean) || [];
    const isGlobalRoute =
      currentPathSegments.length === 0 ||
      !AVAILABLE_LOCATIONS.includes(currentPathSegments[0]);

    if (!selectedLocation || isGlobalRoute) {
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
        return `/${selectedLocation}/${getVehicleSlug(selectedLocation, vehicleType)}`;
      }
    }

    // If path already includes location, return as is
    if (locationPath.startsWith('/' + selectedLocation)) {
      return locationPath;
    }

    // If path is empty or just "/", return location home
    if (!locationPath || locationPath === '/') {
      return `/${selectedLocation}`;
    }

    // Check if it's a partner path
    if (locationPath === '/partner' || locationPath === '/partner-program' || locationPath.includes('/partner')) {
      const partnerSlug = getPartnerSlug(selectedLocation);
      return `/${selectedLocation}/${partnerSlug}`;
    }

    // Remove leading slash
    const cleanPath = locationPath.startsWith('/') ? locationPath.slice(1) : locationPath;

    // Check if it's a service URL (starts with common service patterns)
    const servicePatterns = [
      'delhi-to-jim-corbett',
      'gurugram-to-jim-corbett',
      'mumbai-to-jim-corbett',
      'pune-to-jim-corbett',
      'do-dham-yatra',
      'char-dham-yatra',
      'pilgrimage-vehicle',
      'pilgrimage-tours',
      'wedding-cars',
      'wedding-car',
      'corporate-travel',
      'corporate-bus',
      'vacation-bus',
      'bus-rental-for-local',
    ];

    // Check if it's a service URL
    const isServicePath = servicePatterns.some(pattern => cleanPath.includes(pattern));
    
    if (isServicePath) {
      return `/${selectedLocation}/${cleanPath}`;
    }

    // Check if it's a vehicle URL
    const vehiclePatterns = [
      'car-rental',
      'ertiga',
      'innova',
      'hycross',
      'luxury-car',
      'mercedes',
      'luxury-van',
      'tempo-traveller',
      'maharaja',
      'force-urbania',
      'mini-bus',
      'bus-rental',
      'volvo-bus',
      'bharat-benz',
      'bus-with-washroom',
      'sleeper-bus',
    ];

    const isVehiclePath = vehiclePatterns.some(pattern => cleanPath.includes(pattern));

    if (isVehiclePath) {
      // Use the vehicle mapping
      const mappedPath = getMappedVehiclePath(selectedLocation, '/' + cleanPath);
      if (mappedPath.startsWith('/' + selectedLocation)) {
        return mappedPath;
      }
      return `/${selectedLocation}${mappedPath}`;
    }

    // For any other path (about-us, contact-us, careers, testimonials, etc.)
    // Check if it's already a path with location
    if (AVAILABLE_LOCATIONS.includes(cleanPath.split('/')[0])) {
      return '/' + cleanPath;
    }

    return `/${selectedLocation}/${cleanPath}`;
  };

  const setLocation = (newLocation: string) => {
    if (!AVAILABLE_LOCATIONS.includes(newLocation)) return;

    // Mark that we're switching locations
    isSwitchingRef.current = true;
    setLocationState(newLocation);
    setSelectedLocation(newLocation);
    
    const pathSegments = pathname?.split('/').filter(Boolean) || [];
    let remainingPath = '';
    
    if (pathSegments.length > 0 && AVAILABLE_LOCATIONS.includes(pathSegments[0])) {
      remainingPath = pathSegments.slice(1).join('/');
    } else {
      remainingPath = pathSegments.join('/');
    }

    const isPartnerPage = isPartnerPath(pathname || '');
    
    let newPath = '';
    
    if (isPartnerPage) {
      const partnerSlug = getPartnerSlug(newLocation);
      newPath = `/${newLocation}/${partnerSlug}`;
    } else {
      newPath = `/${newLocation}${remainingPath ? `/${remainingPath}` : ''}`;
    }
    
    router.push(newPath);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        selectedLocation,
        setLocation,
        availableLocations: AVAILABLE_LOCATIONS,
        getLocationUrl,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
