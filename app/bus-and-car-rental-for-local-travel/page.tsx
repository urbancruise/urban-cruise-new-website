import type { Metadata } from "next";
import GlobalLocalTravelPage from "@/app/components/services/GlobalLocalTravelPage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/bus-and-car-rental-for-local-travel")) ?? {
      title: "Local Travel Vehicle Rental | Urban Cruise",
      description:
        "Book local cars, vans and buses for airport transfers, city sightseeing, meetings and planned travel with Urban Cruise.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "local-travel");
  return (
    <GlobalLocalTravelPage cmsSections={cmsData?.vehicle?.sections ?? null} />
  );
}
