import Link from "next/link";
import { AVAILABLE_LOCATIONS, formatLocationName } from "@/app/lib/location";
import { getServiceUrl } from "@/app/lib/serviceUrlMappings";
import { getVehicleUrl } from "@/app/lib/vehicleUrlMappings";

export default function ContextualInternalLinks({
  location,
}: {
  location: string;
}) {
  const city = formatLocationName(location);
  const links = [
    { label: `Car rental in ${city}`, href: getVehicleUrl(location, "car-suvs") },
    {
      label: `Luxury car options in ${city}`,
      href: getVehicleUrl(location, "luxury-cars-suvs"),
    },
    {
      label: `Tempo traveller rental in ${city}`,
      href: getVehicleUrl(location, "tempo-traveller"),
    },
    { label: `Bus rental in ${city}`, href: getVehicleUrl(location, "luxury-bus") },
    {
      label: `Airport transfer and local travel`,
      href: getServiceUrl(location, "local-travel"),
    },
    { label: `Travel guides for ${city}`, href: `/${location}/blog` },
  ];

  const otherCities = AVAILABLE_LOCATIONS.filter((item) => item !== location);

  return (
    <section
      className="border-t border-gray-100 bg-[#f8fafb] py-10"
      aria-labelledby="related-travel-links"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <h2 id="related-travel-links" className="mb-4 text-2xl font-bold text-[#142236]">
          Explore {city} Travel Options
        </h2>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#03a957] hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm text-gray-600">
          Compare local service areas:{" "}
          {otherCities.map((item, index) => (
            <span key={item}>
              {index > 0 && ", "}
              <Link
                href={`/${item}`}
                className="font-medium text-[#142236] hover:text-[#03a957] hover:underline"
              >
                vehicle rental in {formatLocationName(item)}
              </Link>
            </span>
          ))}
          .
        </p>
      </div>
    </section>
  );
}
