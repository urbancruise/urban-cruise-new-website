// app/lib/serviceUrlHelper.ts
import { AVAILABLE_LOCATIONS } from './location';

// List of service paths that should be prefixed with location
const SERVICE_PATHS = [
  'delhi-to-jim-corbett-vehicle-rental',
  'gurugram-to-jim-corbett-vehicle-rental',
  'mumbai-to-jim-corbett-vehicle-rental',
  'pune-to-jim-corbett-vehicle-rental',
  'do-dham-yatra-package',
  'char-dham-yatra-package',
  'pilgrimage-vehicle-rental',
  'pilgrimage-tours-in-mumbai-pilgrimage-bus-rental-in-mumbai',
  'wedding-cars-and-bus-rental-delhi',
  'wedding-cars-and-bus-rental-gurugram',
  'wedding-cars-and-bus-rental-pune',
  'wedding-car-rental-in-mumbai-wedding-bus-rental-in-mumbai',
  'corporate-travel-rental-service',
  'corporate-bus-service-in-mumbai-corporate-travel-in-mumbai',
  'vacation-bus-and-car-rentals-in-delhi',
  'vacation-bus-and-car-rentals-in-gurugram',
  'vacation-bus-and-car-rentals-in-pune',
  'vacation-bus-rentals-in-mumbai-holiday-tours-in-mumbai',
  'bus-and-car-rental-for-local-travel',
  'bus-rental-for-local-travel-sightseeing-in-mumbai-mumbai-darshan-airport-transfer',
  'faqs',
  'news-media',
  'blog',
  'about-us',
  'contact-us',
  'partner',
  'partner-program',
  'careers-at-urban-cruise',
  'testimonials',
];

// List of vehicle paths
const VEHICLE_PATHS = [
  'car-rental-delhi',
  'car-rental-gurugram',
  'car-rental-mumbai',
  'car-rental-pune',
  'ertiga-on-rent',
  'ertiga-on-rent-in-gurugram',
  'hire-ertiga-on-rent-in-mumbai',
  'ertiga-on-rent-in-pune',
  'innova-crysta-on-rent',
  'innova-hycross-on-rent',
  'luxury-car-rental-delhi',
  'luxury-car-rental-gurugram',
  'luxury-car-rental-mumbai',
  'luxury-car-rental-pune',
  'mercedes-sprinter-van-rental',
  'luxury-van-rental-delhi',
  'luxury-van-on-rent-in-gurugram',
  'luxury-van-on-rent-in-mumbai',
  'luxury-van-on-rent-in-pune',
  'tempo-traveller-delhi',
  'tempo-traveller-gurugram',
  'tempo-traveller-mumbai',
  'tempo-traveller-pune',
  'maharaja-tempo-traveller-delhi',
  'maharaja-tempo-traveller-gurugram',
  'maharaja-tempo-traveller-mumbai',
  'maharaja-tempo-traveller-pune',
  'force-urbania-on-rent',
  'force-urbania-gurugram',
  'force-urbania-mumbai',
  'force-urbania-pune',
  'mini-bus-delhi',
  'mini-bus-gurugram',
  'mini-bus-mumbai',
  'mini-bus-pune',
  'bus-rental-delhi',
  'bus-rental-gurugram',
  'bus-rental-mumbai',
  'bus-rental-pune',
  'volvo-bus-on-rent',
  'volvo-bus-on-rent-in-mumbai',
  'volvo-bus-on-rent-in-gurugram',
  'volvo-bus-on-rent-in-pune',
  'bharat-benz-bus-on-rent',
  'bus-with-washroom',
  'sleeper-bus-on-rent',
];

export function isServicePath(path: string): boolean {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return SERVICE_PATHS.some(p => cleanPath.includes(p));
}

export function isVehiclePath(path: string): boolean {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return VEHICLE_PATHS.some(p => cleanPath.includes(p));
}

export function getFullServiceUrl(location: string, path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If path already has location, return as is
  if (AVAILABLE_LOCATIONS.includes(cleanPath.split('/')[0])) {
    return '/' + cleanPath;
  }
  
  // If path is a service or vehicle path, add location
  if (isServicePath(cleanPath) || isVehiclePath(cleanPath)) {
    return `/${location}/${cleanPath}`;
  }
  
  // For other paths, add location
  return `/${location}/${cleanPath}`;
}

