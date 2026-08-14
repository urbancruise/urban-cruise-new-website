// app/lib/vehicleUrlMappings.ts

export const vehicleUrlMappings: Record<string, Record<string, string>> = {
  'delhi': {
    'car-suvs': 'car-rental-delhi',
    'ertiga': 'ertiga-on-rent',
    'innova-crysta': 'innova-crysta-on-rent',
    'hycross': 'innova-hycross-on-rent',
    'luxury-cars-suvs': 'luxury-car-rental-delhi',
    'mercedes-sprinter': 'mercedes-sprinter-van-rental',
    'luxury-vans': 'luxury-van-rental-delhi',
    'tempo-traveller': 'tempo-traveller-delhi',
    'maharaja-tempo-traveller': 'maharaja-tempo-traveller-delhi',
    'urbania': 'force-urbania-on-rent',
    'mini-bus': 'mini-bus-delhi',
    'luxury-bus': 'bus-rental-delhi',
    'volvo-bus': 'volvo-bus-on-rent',
    'bharat-benz-bus': 'bharat-benz-bus-on-rent',
    'bus-with-washroom': 'bus-with-washroom',
    'sleeper-bus': 'sleeper-bus-on-rent',
  },
  'gurugram': {
    'car-suvs': 'car-rental-gurugram',
    'ertiga': 'ertiga-on-rent-in-gurugram',
    'innova-crysta': 'innova-crysta-on-rent',
    'hycross': 'innova-hycross-on-rent',
    'luxury-cars-suvs': 'luxury-car-rental-gurugram',
    'mercedes-sprinter': 'mercedes-sprinter-van-rental',
    'luxury-vans': 'luxury-van-on-rent-in-gurugram',
    'tempo-traveller': 'tempo-traveller-gurugram',
    'maharaja-tempo-traveller': 'maharaja-tempo-traveller-gurugram',
    'urbania': 'force-urbania-gurugram',
    'mini-bus': 'mini-bus-gurugram',
    'luxury-bus': 'bus-rental-gurugram',
    'volvo-bus': 'volvo-bus-on-rent',
    'bharat-benz-bus': 'bharat-benz-bus-on-rent',
    'bus-with-washroom': 'bus-with-washroom',
    'sleeper-bus': 'sleeper-bus-on-rent',
  },
  'mumbai': {
    'car-suvs': 'car-rental-mumbai',
    'ertiga': 'hire-ertiga-on-rent-in-mumbai',
    'innova-crysta': 'innova-crysta-on-rent',
    'hycross': 'innova-hycross-on-rent',
    'luxury-cars-suvs': 'luxury-car-rental-mumbai',
    'mercedes-sprinter': 'mercedes-sprinter-van-rental',
    'luxury-vans': 'luxury-van-on-rent-in-mumbai',
    'tempo-traveller': 'tempo-traveller-mumbai',
    'maharaja-tempo-traveller': 'maharaja-tempo-traveller-mumbai',
    'urbania': 'force-urbania-mumbai',
    'mini-bus': 'mini-bus-mumbai',
    'luxury-bus': 'bus-rental-mumbai',
    'volvo-bus': 'volvo-bus-on-rent-in-mumbai',
    'bharat-benz-bus': 'bharat-benz-bus-on-rent',
    'bus-with-washroom': 'bus-with-washroom',
    'sleeper-bus': 'sleeper-bus-on-rent',
  },
  'pune': {
    'car-suvs': 'car-rental-pune',
    'ertiga': 'ertiga-on-rent-in-pune',
    'innova-crysta': 'innova-crysta-on-rent',
    'hycross': 'innova-hycross-on-rent',
    'luxury-cars-suvs': 'luxury-car-rental-pune',
    'mercedes-sprinter': 'mercedes-sprinter-van-rental',
    'luxury-vans': 'luxury-van-on-rent-in-pune',
    'tempo-traveller': 'tempo-traveller-pune',
    'maharaja-tempo-traveller': 'maharaja-tempo-traveller-pune',
    'urbania': 'force-urbania-pune',
    'mini-bus': 'mini-bus-pune',
    'luxury-bus': 'bus-rental-pune',
    'volvo-bus': 'volvo-bus-on-rent',
    'bharat-benz-bus': 'bharat-benz-bus-on-rent',
    'bus-with-washroom': 'bus-with-washroom',
    'sleeper-bus': 'sleeper-bus-on-rent',
  },
};

export function getVehicleSlug(location: string, vehicleType: string): string {
  return vehicleUrlMappings[location]?.[vehicleType] || vehicleType;
}

export function getVehicleUrl(location: string, vehicleType: string): string {
  const slug = getVehicleSlug(location, vehicleType);
  return `/${location}/${slug}`;
}

