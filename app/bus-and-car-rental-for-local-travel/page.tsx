import type { Metadata } from "next";
import GlobalLocalTravelPage from "@/app/components/services/GlobalLocalTravelPage";
import { getVehicle } from "@/lib/cms";
import { getCmsSeoMetadata } from "@/lib/cms-seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return (
    (await getCmsSeoMetadata("/bus-and-car-rental-for-local-travel")) ?? {
      title: "Local Travel Service in India | Urban Cruise",
      description:
        "Book reliable local travel across India, including airport transfers, city tours, and comfortable daily transportation.",
    }
  );
}

export default async function Page() {
  const cmsData = await getVehicle("global", "local-travel");
  return (
    <GlobalLocalTravelPage
      cmsSections={cmsData?.vehicle?.sections ?? null}
    />
  );
}
