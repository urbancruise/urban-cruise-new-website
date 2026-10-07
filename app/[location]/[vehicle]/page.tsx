// app/[location]/[vehicle]/page.tsx
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

import {
  isValidLocationAsync,
  formatLocationName,
} from "@/app/lib/location";
import { getVehicleSlug } from "@/app/lib/vehicleUrlMappings";
import { getServiceSlug } from "@/app/lib/serviceUrlMappings";
import { createLocationMetadata, getDynamicPageType } from "@/lib/seo";
import { getServiceSeoContent } from "@/lib/service-seo";
import { getVehicleSeoContent } from "@/lib/vehicle-seo";
import { serviceSchema, webPageSchema } from "@/lib/schema";

import { getVehicle, getSeoByPath } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

import VehicleSelector from "@/app/components/VehicleSelector";
import ServiceSelector from "@/app/components/ServiceSelector";
import JsonLd from "@/app/components/seo/JsonLd";
import Breadcrumb from "@/app/components/seo/Breadcrumb";

// ============================================================
// CONFIG
// ============================================================
export const revalidate = 60;

// ============================================================
// TYPES
// ============================================================
interface PageProps {
  params: Promise<{
    location: string;
    vehicle: string;
  }>;
}

// ============================================================
// VEHICLE SLUG → VEHICLE TYPE
// ============================================================
const VEHICLE_SLUG_TO_TYPE: Record<string, string> = {
  // Car & SUVs
  "car-rental-delhi": "car-suvs",
  "car-rental-gurugram": "car-suvs",
  "car-rental-mumbai": "car-suvs",
  "car-rental-pune": "car-suvs",

  // Ertiga
  "ertiga-on-rent": "ertiga",
  "ertiga-on-rent-in-gurugram": "ertiga",
  "hire-ertiga-on-rent-in-mumbai": "ertiga",
  "ertiga-on-rent-in-pune": "ertiga",

  // Innova Crysta
  "innova-crysta-on-rent": "innova-crysta",

  // Hycross
  "innova-hycross-on-rent": "hycross",

  // Luxury Cars & SUVs
  "luxury-car-rental-delhi": "luxury-cars-suvs",
  "luxury-car-rental-gurugram": "luxury-cars-suvs",
  "luxury-car-rental-mumbai": "luxury-cars-suvs",
  "luxury-car-rental-pune": "luxury-cars-suvs",

  // Mercedes Sprinter
  "mercedes-sprinter-van-rental": "mercedes-sprinter",

  // Luxury Vans
  "luxury-van-rental-delhi": "luxury-vans",
  "luxury-van-on-rent-in-gurugram": "luxury-vans",
  "luxury-van-on-rent-in-mumbai": "luxury-vans",
  "luxury-van-on-rent-in-pune": "luxury-vans",

  // Tempo Traveller
  "tempo-traveller-delhi": "tempo-traveller",
  "tempo-traveller-gurugram": "tempo-traveller",
  "tempo-traveller-mumbai": "tempo-traveller",
  "tempo-traveller-pune": "tempo-traveller",

  // Maharaja Tempo Traveller
  "maharaja-tempo-traveller-delhi": "maharaja-tempo-traveller",
  "maharaja-tempo-traveller-gurugram": "maharaja-tempo-traveller",
  "maharaja-tempo-traveller-mumbai": "maharaja-tempo-traveller",
  "maharaja-tempo-traveller-pune": "maharaja-tempo-traveller",

  // Urbania
  "force-urbania-on-rent": "urbania",
  "force-urbania-gurugram": "urbania",
  "force-urbania-mumbai": "urbania",
  "force-urbania-pune": "urbania",

  // Mini Bus
  "mini-bus-delhi": "mini-bus",
  "mini-bus-gurugram": "mini-bus",
  "mini-bus-mumbai": "mini-bus",
  "mini-bus-pune": "mini-bus",

  // Luxury Bus
  "bus-rental-delhi": "luxury-bus",
  "bus-rental-gurugram": "luxury-bus",
  "bus-rental-mumbai": "luxury-bus",
  "bus-rental-pune": "luxury-bus",

  // Volvo Bus
  "volvo-bus-on-rent": "volvo-bus",
  "volvo-bus-on-rent-in-mumbai": "volvo-bus",
  "volvo-bus-on-rent-in-gurugram": "volvo-bus",
  "volvo-bus-on-rent-in-pune": "volvo-bus",

  // Bharat Benz Bus
  "bharat-benz-bus-on-rent": "bharat-benz-bus",

  // Bus With Washroom
  "bus-with-washroom": "bus-with-washroom",

  // Sleeper Bus
  "sleeper-bus-on-rent": "sleeper-bus",
};

// ============================================================
// SERVICE SLUG → SERVICE TYPE
// ============================================================
const SERVICE_SLUG_TO_TYPE: Record<string, string> = {
  "delhi-to-jim-corbett-vehicle-rental": "jim-corbett",
  "gurugram-to-jim-corbett-vehicle-rental": "jim-corbett",
  "mumbai-to-jim-corbett-vehicle-rental": "jim-corbett",
  "pune-to-jim-corbett-vehicle-rental": "jim-corbett",

  "do-dham-yatra-package": "do-dham",
  "char-dham-yatra-package": "char-dham",

  "pilgrimage-vehicle-rental": "pilgrimage",
  "pilgrimage-tours-in-mumbai-pilgrimage-bus-rental-in-mumbai": "pilgrimage",

  "wedding-cars-and-bus-rental-delhi": "wedding",
  "wedding-cars-and-bus-rental-gurugram": "wedding",
  "wedding-cars-and-bus-rental-pune": "wedding",
  "wedding-car-rental-in-mumbai-wedding-bus-rental-in-mumbai": "wedding",

  "corporate-travel-rental-service": "corporate",
  "corporate-bus-service-in-mumbai-corporate-travel-in-mumbai": "corporate",

  "vacation-bus-and-car-rentals-in-delhi": "vacations",
  "vacation-bus-and-car-rentals-in-gurugram": "vacations",
  "vacation-bus-and-car-rentals-in-pune": "vacations",
  "vacation-bus-rentals-in-mumbai-holiday-tours-in-mumbai": "vacations",

  "bus-and-car-rental-for-local-travel": "local-travel",
  "bus-rental-for-local-travel-sightseeing-in-mumbai-mumbai-darshan-airport-transfer":
    "local-travel",
};

// ============================================================
// generateMetadata
// ============================================================
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { location, vehicle } = await params;

  const valid = await isValidLocationAsync(location);
  if (!valid) return {};

  const path = `/${location}/${vehicle}`;

  // CMS SEO first
  const cmsMetadata = await getCmsSeoMetadata(path);
  if (cmsMetadata) return cmsMetadata;

  // Fallback
  return createLocationMetadata(
    location,
    getDynamicPageType(vehicle),
    path
  );
}

// ============================================================
// Page
// ============================================================
export default async function DynamicPage({ params }: PageProps) {
  const { location, vehicle } = await params;

  // 1. Validate location (async, CMS-driven)
  const valid = await isValidLocationAsync(location);
  if (!valid) notFound();

  // 2. Resolve internal type
  const vehicleType = VEHICLE_SLUG_TO_TYPE[vehicle];
  const serviceType = SERVICE_SLUG_TO_TYPE[vehicle];

  if (!vehicleType && !serviceType) {
    notFound();
  }

  // ⭐ CMS saves content under the INTERNAL slug (car-suvs, not car-rental-delhi)
  const internalSlug = vehicleType ?? serviceType ?? vehicle;

  // 3. Fetch CMS content + SEO in parallel
  const [cmsData, cmsSeo] = await Promise.all([
    getVehicle(location, internalSlug),
    getSeoByPath(`/${location}/${vehicle}`),
  ]);

  const cityName = formatLocationName(location);
  const seoSchemas = cmsSeo?.seo.schemas ?? [];

  // ==========================================================
  // VEHICLE PAGE
  // ==========================================================
  if (vehicleType) {
    const expectedSlug = getVehicleSlug(location, vehicleType);
    if (vehicle !== expectedSlug) {
      permanentRedirect(`/${location}/${expectedSlug}`);
    }

    const vehicleSeo = getVehicleSeoContent(vehicleType);

    const fallbackSchemas = [
      webPageSchema({
        name: `${vehicleSeo.name} in ${cityName}`,
        description: vehicleSeo.description,
        path: `/${location}/${vehicle}`,
      }),
      serviceSchema({
        name: vehicleSeo.name,
        description: vehicleSeo.description,
        path: `/${location}/${vehicle}`,
        location,
      }),
    ];

    const schemas = seoSchemas.length > 0 ? seoSchemas : fallbackSchemas;

    return (
      <>
        <JsonLd data={schemas} />

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
            <div className="pointer-events-auto">
              <Breadcrumb
                items={[
                  { name: "Home", path: "/" },
                  { name: cityName, path: `/${location}` },
                  {
                    name: cmsData?.vehicle?.meta?.title || vehicleSeo.name,
                    path: `/${location}/${vehicle}`,
                  },
                ]}
              />
            </div>
          </div>

          <VehicleSelector
            vehicleType={vehicleType}
            cmsMeta={cmsData?.vehicle?.meta ?? null}
            cmsSections={cmsData?.vehicle?.sections ?? null}
          />
        </div>
      </>
    );
  }

  // ==========================================================
  // SERVICE PAGE
  // ==========================================================
  if (serviceType) {
    const expectedSlug = getServiceSlug(location, serviceType);
    if (vehicle !== expectedSlug) {
      permanentRedirect(`/${location}/${expectedSlug}`);
    }

    const serviceSeo = getServiceSeoContent(serviceType);

    const fallbackSchemas = [
      webPageSchema({
        name: `${serviceSeo.name} in ${cityName}`,
        description: serviceSeo.description,
        path: `/${location}/${vehicle}`,
      }),
      serviceSchema({
        name: serviceSeo.name,
        description: serviceSeo.description,
        path: `/${location}/${vehicle}`,
        location,
      }),
    ];

    const schemas = seoSchemas.length > 0 ? seoSchemas : fallbackSchemas;

    return (
      <>
        <JsonLd data={schemas} />

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
            <div className="pointer-events-auto">
              <Breadcrumb
                items={[
                  { name: "Home", path: "/" },
                  { name: cityName, path: `/${location}` },
                  {
                    name: serviceSeo.name,
                    path: `/${location}/${vehicle}`,
                  },
                ]}
              />
            </div>
          </div>

          <ServiceSelector
            serviceType={serviceType}
            cmsSections={cmsData?.vehicle?.sections ?? null}
          />
        </div>
      </>
    );
  }

  notFound();
}