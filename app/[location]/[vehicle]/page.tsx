// app/[location]/[vehicle]/page.tsx
import { notFound, redirect } from 'next/navigation';
import { isValidLocation } from '@/app/lib/location';
import VehicleSelector from '@/app/components/VehicleSelector';
import ServiceSelector from '@/app/components/ServiceSelector';
import { getVehicleSlug } from '@/app/lib/vehicleUrlMappings';
import { getServiceSlug } from '@/app/lib/serviceUrlMappings';

interface PageProps {
  params: Promise<{
    location: string;
    vehicle: string;
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { location, vehicle } = await params;

  // Check if location is valid
  if (!isValidLocation(location)) {
    notFound();
  }

  // Map vehicle URL slugs to vehicle types
  const vehicleSlugToType: Record<string, string> = {
    // Car & SUVs
    'car-rental-delhi': 'car-suvs',
    'car-rental-gurugram': 'car-suvs',
    'car-rental-mumbai': 'car-suvs',
    'car-rental-pune': 'car-suvs',
    
    // Ertiga
    'ertiga-on-rent': 'ertiga',
    'ertiga-on-rent-in-gurugram': 'ertiga',
    'hire-ertiga-on-rent-in-mumbai': 'ertiga',
    'ertiga-on-rent-in-pune': 'ertiga',
    
    // Innova Crysta
    'innova-crysta-on-rent': 'innova-crysta',
    
    // Hycross
    'innova-hycross-on-rent': 'hycross',
    
    // Luxury Cars & SUVs
    'luxury-car-rental-delhi': 'luxury-cars-suvs',
    'luxury-car-rental-gurugram': 'luxury-cars-suvs',
    'luxury-car-rental-mumbai': 'luxury-cars-suvs',
    'luxury-car-rental-pune': 'luxury-cars-suvs',
    
    // Mercedes Sprinter
    'mercedes-sprinter-van-rental': 'mercedes-sprinter',
    
    // Luxury Vans
    'luxury-van-rental-delhi': 'luxury-vans',
    'luxury-van-on-rent-in-gurugram': 'luxury-vans',
    'luxury-van-on-rent-in-mumbai': 'luxury-vans',
    'luxury-van-on-rent-in-pune': 'luxury-vans',
    
    // Tempo Traveller
    'tempo-traveller-delhi': 'tempo-traveller',
    'tempo-traveller-gurugram': 'tempo-traveller',
    'tempo-traveller-mumbai': 'tempo-traveller',
    'tempo-traveller-pune': 'tempo-traveller',
    
    // Maharaja Tempo Traveller
    'maharaja-tempo-traveller-delhi': 'maharaja-tempo-traveller',
    'maharaja-tempo-traveller-gurugram': 'maharaja-tempo-traveller',
    'maharaja-tempo-traveller-mumbai': 'maharaja-tempo-traveller',
    'maharaja-tempo-traveller-pune': 'maharaja-tempo-traveller',
    
    // Urbania
    'force-urbania-on-rent': 'urbania',
    'force-urbania-gurugram': 'urbania',
    'force-urbania-mumbai': 'urbania',
    'force-urbania-pune': 'urbania',
    
    // Mini Bus
    'mini-bus-delhi': 'mini-bus',
    'mini-bus-gurugram': 'mini-bus',
    'mini-bus-mumbai': 'mini-bus',
    'mini-bus-pune': 'mini-bus',
    
    // Luxury Bus
    'bus-rental-delhi': 'luxury-bus',
    'bus-rental-gurugram': 'luxury-bus',
    'bus-rental-mumbai': 'luxury-bus',
    'bus-rental-pune': 'luxury-bus',
    
    // Volvo Bus
    'volvo-bus-on-rent': 'volvo-bus',
    'volvo-bus-on-rent-in-mumbai': 'volvo-bus',
    'volvo-bus-on-rent-in-gurugram': 'volvo-bus',
    'volvo-bus-on-rent-in-pune': 'volvo-bus',
    
    // Bharat Benz Bus
    'bharat-benz-bus-on-rent': 'bharat-benz-bus',
    
    // Bus With Washroom
    'bus-with-washroom': 'bus-with-washroom',
    
    // Sleeper Bus
    'sleeper-bus-on-rent': 'sleeper-bus',
  };

  // Map service URL slugs to service types
  const serviceSlugToType: Record<string, string> = {
    // Jim Corbett
    'delhi-to-jim-corbett-vehicle-rental': 'jim-corbett',
    'gurugram-to-jim-corbett-vehicle-rental': 'jim-corbett',
    'mumbai-to-jim-corbett-vehicle-rental': 'jim-corbett',
    'pune-to-jim-corbett-vehicle-rental': 'jim-corbett',
    
    // Do Dham Yatra
    'do-dham-yatra-package': 'do-dham',
    
    // Char Dham Yatra
    'char-dham-yatra-package': 'char-dham',
    
    // Pilgrimage Travel
    'pilgrimage-vehicle-rental': 'pilgrimage',
    'pilgrimage-tours-in-mumbai-pilgrimage-bus-rental-in-mumbai': 'pilgrimage',
    
    // Wedding Travel
    'wedding-cars-and-bus-rental-delhi': 'wedding',
    'wedding-cars-and-bus-rental-gurugram': 'wedding',
    'wedding-cars-and-bus-rental-pune': 'wedding',
    'wedding-car-rental-in-mumbai-wedding-bus-rental-in-mumbai': 'wedding',
    
    // Corporate Travel
    'corporate-travel-rental-service': 'corporate',
    'corporate-bus-service-in-mumbai-corporate-travel-in-mumbai': 'corporate',
    
    // Vacations
    'vacation-bus-and-car-rentals-in-delhi': 'vacations',
    'vacation-bus-and-car-rentals-in-gurugram': 'vacations',
    'vacation-bus-and-car-rentals-in-pune': 'vacations',
    'vacation-bus-rentals-in-mumbai-holiday-tours-in-mumbai': 'vacations',
    
    // Local Travel
    'bus-and-car-rental-for-local-travel': 'local-travel',
    'bus-rental-for-local-travel-sightseeing-in-mumbai-mumbai-darshan-airport-transfer': 'local-travel',
  };

  // Check if it's a vehicle page
  const vehicleType = vehicleSlugToType[vehicle];
  
  // Check if it's a service page
  const serviceType = serviceSlugToType[vehicle];

  // If it's neither a vehicle nor a service, return 404
  if (!vehicleType && !serviceType) {
    notFound();
  }

  // Handle vehicle pages
  if (vehicleType) {
    // Verify the slug matches the location for this vehicle type
    const expectedSlug = getVehicleSlug(location, vehicleType);
    
    // If the slug doesn't match the expected slug for this location, redirect
    if (vehicle !== expectedSlug) {
      redirect(`/${location}/${expectedSlug}`);
    }

    // Render the vehicle selector
    return <VehicleSelector vehicleType={vehicleType} />;
  }

  // Handle service pages
  if (serviceType) {
    // Verify the slug matches the location for this service type
    const expectedSlug = getServiceSlug(location, serviceType);
    
    // If the slug doesn't match the expected slug for this location, redirect
    if (vehicle !== expectedSlug) {
      redirect(`/${location}/${expectedSlug}`);
    }

    // Render the service selector
    return <ServiceSelector serviceType={serviceType} />;
  }

  // Fallback - should never reach here
  notFound();
}