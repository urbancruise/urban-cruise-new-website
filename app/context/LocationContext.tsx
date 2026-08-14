// app/context/LocationContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AVAILABLE_LOCATIONS } from '@/app/lib/location';
import { getMappedVehiclePath } from '@/app/lib/urlMappings';
import { getPartnerSlug, isPartnerPath } from '@/app/lib/partnerUrlMappings';

interface LocationContextType {
  location: string;
  setLocation: (location: string) => void;
  availableLocations: string[];
  getLocationUrl: (path: string) => string;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocationState] = useState<string>('delhi');
  const router = useRouter();
  const pathname = usePathname();
  const isSwitchingRef = useRef(false);

  // Extract location from URL on initial load
  useEffect(() => {
    // Skip if we're in the middle of a manual location switch
    if (isSwitchingRef.current) return;

    const pathSegments = pathname?.split('/').filter(Boolean);
    if (pathSegments && pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      if (AVAILABLE_LOCATIONS.includes(firstSegment)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocationState(firstSegment);
      }
    }
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
    // If path already includes location, return as is
    if (path.startsWith('/' + location)) {
      return path;
    }

    // If path is empty or just "/", return location home
    if (!path || path === '/') {
      return `/${location}`;
    }

    // Check if it's a partner path
    if (path === '/partner' || path === '/partner-program' || path.includes('/partner')) {
      const partnerSlug = getPartnerSlug(location);
      return `/${location}/${partnerSlug}`;
    }

    // Remove leading slash
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

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
      return `/${location}/${cleanPath}`;
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
      const mappedPath = getMappedVehiclePath(location, '/' + cleanPath);
      if (mappedPath.startsWith('/' + location)) {
        return mappedPath;
      }
      return `/${location}${mappedPath}`;
    }

    // For any other path (about-us, contact-us, careers, testimonials, etc.)
    // Check if it's already a path with location
    if (AVAILABLE_LOCATIONS.includes(cleanPath.split('/')[0])) {
      return '/' + cleanPath;
    }

    return `/${location}/${cleanPath}`;
  };

  const setLocation = (newLocation: string) => {
    if (!AVAILABLE_LOCATIONS.includes(newLocation)) return;

    // Mark that we're switching locations
    isSwitchingRef.current = true;
    setLocationState(newLocation);
    
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

