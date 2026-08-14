// app/lib/urlMappings.ts

// Vehicle path mappings for cross-location URL conversion
export const vehiclePathMappings: Record<string, Record<string, string>> = {
  'mumbai': {
    // Car & SUVs
    '/car-rental-delhi': '/car-rental-mumbai',
    '/ertiga-on-rent': '/hire-ertiga-on-rent-in-mumbai',
    '/innova-crysta-on-rent': '/innova-crysta-on-rent',
    '/innova-hycross-on-rent': '/innova-hycross-on-rent',
    
    // Luxury Cars, SUVs, Vans
    '/luxury-car-rental-delhi': '/luxury-car-rental-mumbai',
    '/mercedes-sprinter-van-rental': '/mercedes-sprinter-van-rental',
    '/luxury-van-rental-delhi': '/luxury-van-on-rent-in-mumbai',
    
    // Tempo Traveller
    '/tempo-traveller-delhi': '/tempo-traveller-mumbai',
    '/maharaja-tempo-traveller-delhi': '/maharaja-tempo-traveller-mumbai',
    
    // Urbania
    '/force-urbania-on-rent': '/force-urbania-mumbai',
    
    // Mini Bus
    '/mini-bus-delhi': '/mini-bus-mumbai',
    
    // Luxury Buses
    '/bus-rental-delhi': '/bus-rental-mumbai',
    '/volvo-bus-on-rent': '/volvo-bus-on-rent-in-mumbai',
    '/bharat-benz-bus-on-rent': '/bharat-benz-bus-on-rent',
    '/bus-with-washroom': '/bus-with-washroom',
    '/sleeper-bus-on-rent': '/sleeper-bus-on-rent',
  },
  'delhi': {
    // Car & SUVs
    '/car-rental-mumbai': '/car-rental-delhi',
    '/hire-ertiga-on-rent-in-mumbai': '/ertiga-on-rent',
    '/innova-crysta-on-rent': '/innova-crysta-on-rent',
    '/innova-hycross-on-rent': '/innova-hycross-on-rent',
    
    // Luxury Cars, SUVs, Vans
    '/luxury-car-rental-mumbai': '/luxury-car-rental-delhi',
    '/mercedes-sprinter-van-rental': '/mercedes-sprinter-van-rental',
    '/luxury-van-on-rent-in-mumbai': '/luxury-van-rental-delhi',
    
    // Tempo Traveller
    '/tempo-traveller-mumbai': '/tempo-traveller-delhi',
    '/maharaja-tempo-traveller-mumbai': '/maharaja-tempo-traveller-delhi',
    
    // Urbania
    '/force-urbania-mumbai': '/force-urbania-on-rent',
    
    // Mini Bus
    '/mini-bus-mumbai': '/mini-bus-delhi',
    
    // Luxury Buses
    '/bus-rental-mumbai': '/bus-rental-delhi',
    '/volvo-bus-on-rent-in-mumbai': '/volvo-bus-on-rent',
    '/bharat-benz-bus-on-rent': '/bharat-benz-bus-on-rent',
    '/bus-with-washroom': '/bus-with-washroom',
    '/sleeper-bus-on-rent': '/sleeper-bus-on-rent',
  },
  'pune': {
    // Car & SUVs
    '/car-rental-delhi': '/car-rental-pune',
    '/ertiga-on-rent': '/ertiga-on-rent-in-pune',
    '/innova-crysta-on-rent': '/innova-crysta-on-rent',
    '/innova-hycross-on-rent': '/innova-hycross-on-rent',
    
    // Luxury Cars, SUVs, Vans
    '/luxury-car-rental-delhi': '/luxury-car-rental-pune',
    '/mercedes-sprinter-van-rental': '/mercedes-sprinter-van-rental',
    '/luxury-van-rental-delhi': '/luxury-van-on-rent-in-pune',
    
    // Tempo Traveller
    '/tempo-traveller-delhi': '/tempo-traveller-pune',
    '/maharaja-tempo-traveller-delhi': '/maharaja-tempo-traveller-pune',
    
    // Urbania
    '/force-urbania-on-rent': '/force-urbania-pune',
    
    // Mini Bus
    '/mini-bus-delhi': '/mini-bus-pune',
    
    // Luxury Buses
    '/bus-rental-delhi': '/bus-rental-pune',
    '/volvo-bus-on-rent': '/volvo-bus-on-rent-in-pune',
    '/bharat-benz-bus-on-rent': '/bharat-benz-bus-on-rent',
    '/bus-with-washroom': '/bus-with-washroom',
    '/sleeper-bus-on-rent': '/sleeper-bus-on-rent',
  },
  'gurugram': {
    // Car & SUVs
    '/car-rental-delhi': '/car-rental-gurugram',
    '/ertiga-on-rent': '/ertiga-on-rent-in-gurugram',
    '/innova-crysta-on-rent': '/innova-crysta-on-rent',
    '/innova-hycross-on-rent': '/innova-hycross-on-rent',
    
    // Luxury Cars, SUVs, Vans
    '/luxury-car-rental-delhi': '/luxury-car-rental-gurugram',
    '/mercedes-sprinter-van-rental': '/mercedes-sprinter-van-rental',
    '/luxury-van-rental-delhi': '/luxury-van-on-rent-in-gurugram',
    
    // Tempo Traveller
    '/tempo-traveller-delhi': '/tempo-traveller-gurugram',
    '/maharaja-tempo-traveller-delhi': '/maharaja-tempo-traveller-gurugram',
    
    // Urbania
    '/force-urbania-on-rent': '/force-urbania-gurugram',
    
    // Mini Bus
    '/mini-bus-delhi': '/mini-bus-gurugram',
    
    // Luxury Buses
    '/bus-rental-delhi': '/bus-rental-gurugram',
    '/volvo-bus-on-rent': '/volvo-bus-on-rent-in-gurugram',
    '/bharat-benz-bus-on-rent': '/bharat-benz-bus-on-rent',
    '/bus-with-washroom': '/bus-with-washroom',
    '/sleeper-bus-on-rent': '/sleeper-bus-on-rent',
  },
};

export function getMappedVehiclePath(location: string, basePath: string): string {
  // If we have a mapping for this location and path, return it
  if (vehiclePathMappings[location] && vehiclePathMappings[location][basePath]) {
    return vehiclePathMappings[location][basePath];
  }
  // Otherwise return the base path
  return basePath;
}

// Services
export const serviceUrlMappings: Record<string, Record<string, string>> = {
  'mumbai': {
    // Jim Corbett
    '/delhi-to-jim-corbett-vehicle-rental': '/mumbai-to-jim-corbett-vehicle-rental',
    // Do Dham
    '/do-dham-yatra-package': '/do-dham-yatra-package',
    // Char Dham
    '/char-dham-yatra-package': '/char-dham-yatra-package',
    // Pilgrimage
    '/pilgrimage-vehicle-rental': '/pilgrimage-tours-in-mumbai-pilgrimage-bus-rental-in-mumbai',
    // Wedding
    '/wedding-cars-and-bus-rental-delhi': '/wedding-car-rental-in-mumbai-wedding-bus-rental-in-mumbai',
    // Corporate
    '/corporate-travel-rental-service': '/corporate-bus-service-in-mumbai-corporate-travel-in-mumbai',
    // Vacations
    '/vacation-bus-and-car-rentals-in-delhi': '/vacation-bus-rentals-in-mumbai-holiday-tours-in-mumbai',
    // Local Travel
    '/bus-and-car-rental-for-local-travel': '/bus-rental-for-local-travel-sightseeing-in-mumbai-mumbai-darshan-airport-transfer',
  },
  'delhi': {
    // Jim Corbett
    '/mumbai-to-jim-corbett-vehicle-rental': '/delhi-to-jim-corbett-vehicle-rental',
    // Do Dham
    '/do-dham-yatra-package': '/do-dham-yatra-package',
    // Char Dham
    '/char-dham-yatra-package': '/char-dham-yatra-package',
    // Pilgrimage
    '/pilgrimage-tours-in-mumbai-pilgrimage-bus-rental-in-mumbai': '/pilgrimage-vehicle-rental',
    // Wedding
    '/wedding-car-rental-in-mumbai-wedding-bus-rental-in-mumbai': '/wedding-cars-and-bus-rental-delhi',
    // Corporate
    '/corporate-bus-service-in-mumbai-corporate-travel-in-mumbai': '/corporate-travel-rental-service',
    // Vacations
    '/vacation-bus-rentals-in-mumbai-holiday-tours-in-mumbai': '/vacation-bus-and-car-rentals-in-delhi',
    // Local Travel
    '/bus-rental-for-local-travel-sightseeing-in-mumbai-mumbai-darshan-airport-transfer': '/bus-and-car-rental-for-local-travel',
  },
  'pune': {
    // Jim Corbett
    '/delhi-to-jim-corbett-vehicle-rental': '/pune-to-jim-corbett-vehicle-rental',
    // Do Dham
    '/do-dham-yatra-package': '/do-dham-yatra-package',
    // Char Dham
    '/char-dham-yatra-package': '/char-dham-yatra-package',
    // Pilgrimage
    '/pilgrimage-vehicle-rental': '/pilgrimage-vehicle-rental',
    // Wedding
    '/wedding-cars-and-bus-rental-delhi': '/wedding-cars-and-bus-rental-pune',
    // Corporate
    '/corporate-travel-rental-service': '/corporate-travel-rental-service',
    // Vacations
    '/vacation-bus-and-car-rentals-in-delhi': '/vacation-bus-and-car-rentals-in-pune',
    // Local Travel
    '/bus-and-car-rental-for-local-travel': '/bus-and-car-rental-for-local-travel',
  },
  'gurugram': {
    // Jim Corbett
    '/delhi-to-jim-corbett-vehicle-rental': '/gurugram-to-jim-corbett-vehicle-rental',
    // Do Dham
    '/do-dham-yatra-package': '/do-dham-yatra-package',
    // Char Dham
    '/char-dham-yatra-package': '/char-dham-yatra-package',
    // Pilgrimage
    '/pilgrimage-vehicle-rental': '/pilgrimage-vehicle-rental',
    // Wedding
    '/wedding-cars-and-bus-rental-delhi': '/wedding-cars-and-bus-rental-gurugram',
    // Corporate
    '/corporate-travel-rental-service': '/corporate-travel-rental-service',
    // Vacations
    '/vacation-bus-and-car-rentals-in-delhi': '/vacation-bus-and-car-rentals-in-gurugram',
    // Local Travel
    '/bus-and-car-rental-for-local-travel': '/bus-and-car-rental-for-local-travel',
  },
};

export function getServiceUrl(location: string, basePath: string): string {
  if (serviceUrlMappings[location] && serviceUrlMappings[location][basePath]) {
    return serviceUrlMappings[location][basePath];
  }
  return basePath;
}