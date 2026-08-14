// app/lib/serviceUrlMappings.ts
export const serviceUrlMappings: Record<string, Record<string, string>> = {
  'delhi': {
    'jim-corbett': 'delhi-to-jim-corbett-vehicle-rental',
    'do-dham': 'do-dham-yatra-package',
    'char-dham': 'char-dham-yatra-package',
    'pilgrimage': 'pilgrimage-vehicle-rental',
    'wedding': 'wedding-cars-and-bus-rental-delhi',
    'corporate': 'corporate-travel-rental-service',
    'vacations': 'vacation-bus-and-car-rentals-in-delhi',
    'local-travel': 'bus-and-car-rental-for-local-travel',
  },
  'gurugram': {
    'jim-corbett': 'gurugram-to-jim-corbett-vehicle-rental',
    'do-dham': 'do-dham-yatra-package',
    'char-dham': 'char-dham-yatra-package',
    'pilgrimage': 'pilgrimage-vehicle-rental',
    'wedding': 'wedding-cars-and-bus-rental-gurugram',
    'corporate': 'corporate-travel-rental-service',
    'vacations': 'vacation-bus-and-car-rentals-in-gurugram',
    'local-travel': 'bus-and-car-rental-for-local-travel',
  },
  'mumbai': {
    'jim-corbett': 'mumbai-to-jim-corbett-vehicle-rental',
    'do-dham': 'do-dham-yatra-package',
    'char-dham': 'char-dham-yatra-package',
    'pilgrimage': 'pilgrimage-tours-in-mumbai-pilgrimage-bus-rental-in-mumbai',
    'wedding': 'wedding-car-rental-in-mumbai-wedding-bus-rental-in-mumbai',
    'corporate': 'corporate-bus-service-in-mumbai-corporate-travel-in-mumbai',
    'vacations': 'vacation-bus-rentals-in-mumbai-holiday-tours-in-mumbai',
    'local-travel': 'bus-rental-for-local-travel-sightseeing-in-mumbai-mumbai-darshan-airport-transfer',
  },
  'pune': {
    'jim-corbett': 'pune-to-jim-corbett-vehicle-rental',
    'do-dham': 'do-dham-yatra-package',
    'char-dham': 'char-dham-yatra-package',
    'pilgrimage': 'pilgrimage-vehicle-rental',
    'wedding': 'wedding-cars-and-bus-rental-pune',
    'corporate': 'corporate-travel-rental-service',
    'vacations': 'vacation-bus-and-car-rentals-in-pune',
    'local-travel': 'bus-and-car-rental-for-local-travel',
  },
};

export function getServiceSlug(location: string, serviceType: string): string {
  return serviceUrlMappings[location]?.[serviceType] || serviceType;
}

export function getServiceUrl(location: string, serviceType: string): string {
  const slug = getServiceSlug(location, serviceType);
  return `/${location}/${slug}`;
}