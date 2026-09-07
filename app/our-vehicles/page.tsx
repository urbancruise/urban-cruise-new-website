import Link from "next/link";
import { AVAILABLE_LOCATIONS, formatLocationName } from "@/app/lib/location";
import PageJsonLd from "@/app/components/seo/PageJsonLd";

const vehicleCategories = [
  ["Cars & SUVs", "car-suvs"],
  ["Luxury Cars & SUVs", "luxury-cars-suvs"],
  ["Tempo Travellers", "tempo-traveller"],
  ["Luxury Vans", "luxury-vans"],
  ["Mini Buses", "mini-bus"],
  ["Luxury Buses", "luxury-bus"],
  ["Volvo Buses", "volvo-bus"],
];

export const metadata = {
  title: "Our Vehicles | Urban Cruise",
  description: "Explore Urban Cruise cars, SUVs, tempo travellers, vans, and buses across India.",
};

export default function OurVehiclesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2E9] px-6 py-20">
      <PageJsonLd
        name="Our Vehicles"
        description="Explore Urban Cruise cars, SUVs, tempo travellers, vans, and buses across India."
        path="/our-vehicles"
      />
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#03C35E]">
          Our Vehicles
        </p>
        <h1 className="max-w-3xl text-4xl font-black text-[#142236] md:text-6xl">
          The right vehicle for every journey.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[#59636d]">
          Explore the same vehicle range available in Delhi, now available in
          a global catalogue for journeys across India.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicleCategories.map(([label, slug]) => (
            <div key={slug} className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#142236]">{label}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/${slug}`}
                  className="rounded-full border border-[#03C35E]/30 px-3 py-1.5 text-sm text-[#087F35] hover:bg-[#03C35E] hover:text-white"
                >
                  View vehicle
                </Link>
                {AVAILABLE_LOCATIONS.map((location) => (
                  <Link
                    key={location}
                    href={`/${location}/${slug}`}
                    className="rounded-full border border-[#03C35E]/30 px-3 py-1.5 text-sm text-[#087F35] hover:bg-[#03C35E] hover:text-white"
                  >
                    {formatLocationName(location)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
